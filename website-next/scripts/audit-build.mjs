import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const libraryRoot = path.resolve(root, "..");

async function findPages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return findPages(target);
    return entry.name === "index.html" ? [target] : [];
  }));
  return nested.flat();
}

const pages = await findPages(dist);
const failures = [];
const routeForPage = (page) => {
  const relative = path.relative(dist, page).replaceAll(path.sep, "/");
  return `/${relative.replace(/index\.html$/, "")}`;
};
const routes = new Set(pages.map(routeForPage));
const pageHtmlByRoute = new Map(await Promise.all(
  pages.map(async (page) => [routeForPage(page), await readFile(page, "utf8")]),
));
const exampleFiles = (await readdir(path.join(libraryRoot, "examples")))
  .filter((file) => file.endsWith(".html"));
const standaloneExampleRoutes = new Set(
  exampleFiles.map((file) => `/examples/${file.replace(/\.html$/, "")}/`),
);

for (const route of standaloneExampleRoutes) {
  if (!routes.has(route)) failures.push(`Missing standalone example route: ${route}.`);
}

if (pages.length < 64) failures.push(`Expected at least 64 routes; found ${pages.length}.`);

/* Audit the library sources the site is documenting, not just rendered HTML. */
const indexCss = await readFile(path.join(libraryRoot, "index.css"), "utf8");
const packageManifest = JSON.parse(await readFile(path.join(libraryRoot, "package.json"), "utf8"));
if (packageManifest.name !== "css-tags") failures.push("package.json: expected the public package name css-tags.");
if (packageManifest.style !== "index.css") failures.push("package.json: style must resolve to index.css.");
if (packageManifest.types !== "types/css-tags.d.ts") failures.push("package.json: types must resolve to the global declarations.");
if (!packageManifest.files?.includes("types/css-tags.d.ts")) failures.push("package.json: declarations are missing from published files.");
if (packageManifest.license !== "MIT") failures.push("package.json: expected the documented MIT license.");
const imports = Array.from(indexCss.matchAll(/@import\s+url\(["']([^"']+)["']\)/g), (match) => match[1]);
for (const imported of imports) {
  try {
    await readFile(path.join(libraryRoot, imported), "utf8");
  } catch {
    failures.push(`index.css imports a missing file: ${imported}.`);
  }
}

const baselineFiles = imports.filter((file) => ![
  "core/mixins.css",
  "components/box-extra.css",
  "layouts/layout-extra.css",
].includes(file));
for (const file of baselineFiles) {
  const source = await readFile(path.join(libraryRoot, file), "utf8");
  const withoutComments = source.replace(/\/\*[\s\S]*?\*\//g, "");
  if (withoutComments.includes("@apply")) {
    failures.push(`${file}: baseline styling must not depend on experimental @apply syntax.`);
  }
  if (withoutComments.includes("@extend")) {
    failures.push(`${file}: shipped CSS must not depend on preprocessor-only @extend syntax.`);
  }
}

const sourceContracts = [
  ["components/badge.css", "[data-status=\"success\"]", "badge data-status alias"],
  ["components/badge.css", ".badge-success", "badge status class alias"],
  ["components/badge.css", "[data-variant=\"subtle\"]", "badge data-variant alias"],
  ["components/badge.css", "[data-chip]", "legacy chip host alias"],
  ["components/badge.css", "white-space: nowrap", "non-wrapping compact labels"],
  ["components/tooltip.css", "[data-tooltip-host]", "explicit rich-tooltip parent fallback"],
  ["layouts/layout.css", "[data-no-stack]", "layout-split data no-stack alias"],
  ["types/css-tags.d.ts", "eyebrow: GlobalAttributes", "eyebrow JSX typing"],
  ["types/css-tags.d.ts", "interface ThemeOverrides", "typed theme override contract"],
  ["core/tokens.css", "--font-size-prose", "contextual prose typography input"],
  ["core/tokens.css", "--font-size-ui", "contextual UI typography input"],
  ["core/tokens.css", "--font-size-step-6-max: 2.875rem", "restrained shared 5xl scale"],
  ["core/tokens.css", "--font-size-h2: var(--font-size-5xl)", "scale-aligned semantic h2 alias"],
  ["core/tokens.css", "--font-size-h6: var(--font-size-xl)", "consecutive semantic heading scale"],
  ["core/tokens.css", "--font-size-ui: var(--font-size-sm)", "scale-aligned contextual UI type"],
  ["core/tokens.css", "--spacing-md: calc(1rem * var(--density-factor, 1))", "density-aware compatibility spacing"],
  ["core/tokens.css", "--scrollbar-thumb-hover", "semantic scrollbar tokens"],
  ["core/theme.css", "--surface-lightness-shift", "scheme-safe surface lightness input"],
  ["core/theme.css", "--surface-contrast", "surface hierarchy contrast input"],
  ["core/tokens.css", "--button-transition-duration", "semantic button transition tokens"],
  ["core/tokens.css", "--transition-duration: 150ms", "shared interaction duration token"],
  ["core/tokens.css", "--opacity-disabled: 0.5", "shared disabled-state opacity token"],
  ["core/tokens.css", "--space-2xs", "complete density-aware space scale"],
  ["core/tokens.css", "--space-2xl", "complete density-aware space scale"],
  ["core/tokens.css", "--blockquote-border-color", "semantic blockquote border token"],
  ["core/tokens.css", "--space-list-nested-top", "independent nested-list rhythm token"],
  ["core/tokens.css", "--space-heading-to-content", "heading-to-content rhythm token"],
  ["core/tokens.css", "--space-heading-to-lead", "heading-to-lead rhythm token"],
  ["core/tokens.css", "--space-lead-to-content", "lead-to-content rhythm token"],
  ["core/typography.css", "--callout-title-gap", "callout title relationship token"],
  ["core/tokens.css", "--table-heading-background", "subtle semantic table tokens"],
  ["components/table.css", "min-inline-size: max(100%", "full-width responsive tables"],
  ["components/table.css", "overflow-y: hidden", "horizontal-only responsive table overflow"],
  ["core/defaults.css", '[aria-disabled="true"]', "ARIA-disabled button state"],
  ["core/defaults.css", "field-sizing: fixed", "fixed native choice-control geometry"],
  ["core/defaults.css", "clip-path: polygon", "recognizable native checkbox indicator"],
  ["core/tokens.css", "--choice-control-size", "themeable native choice controls"],
  ["core/tokens.css", "--code-inline-border: transparent", "borderless inline code default"],
  ["components/navigation-patterns.css", "[data-variant=\"flush\"]", "flush list-navigation variant"],
  ["components/view-transition.css", "view-fade-in", "fade-only view transition"],
  ["components/carousel.css", "flex: 0 0 100%", "full-width carousel slides"],
  ["components/carousel.css", "data-carousel-initialized", "progressively enhanced carousel controls"],
  ["components/carousel.css", "--carousel-trigger-chevron-inline-size", "centered geometric carousel chevrons"],
  ["components/actions.css", "--text-box-icon", "icon-button text-box centering"],
  ["components/form.css", "--form-button-background", "isolated form-button color tokens"],
  ["components/form.css", "--bg: var(--form-button-hover-background", "state-aware form-button surface context"],
  ["components/form.css", "[data-form-control]", "attribute-hosted native form control"],
  ["components/form.css", ".input-field", "legacy form-control alias normalization"],
  ["components/form.css", ":user-invalid", "interaction-aware native validation state"],
  ["core/tokens.css", "--form-control-focus-shadow", "shared semantic form-control tokens"],
  ["utilities/utilities.css", "normalized in components/form.css", "single form-control implementation"],
  ["components/form-patterns.css", "@container layout-container", "container-responsive input groups"],
  ["carousel.js", "toggleAttribute('inert'", "inactive carousel slide focus management"],
  ["website-next/src/components/PageExample.astro", "initializeCarousels(root)", "shipped carousel demo behavior"],
  ["website-next/src/components/PageExample.astro", "markupSource={example.code}", "formatted page-example source"],
  ["website-next/src/data/page-example-lessons.ts", '"components/card"', "page-specific teaching examples"],
  ["website-next/src/components/ExampleWorkbench.astro", "example-workbench__source-toolbar", "labeled source toolbar"],
  ["website-next/src/scripts/css-tags-shadow.ts", "adoptedStyleSheets", "shared preview stylesheet parsing"],
  ["website-next/public/sw.js", "staleWhileRevalidate(request, NAVIGATION_CACHE)", "cached documentation navigation"],
  ["website-next/astro.config.mjs", "inlineStylesheets: 'never'", "cacheable shared stylesheets"],
  ["layouts/layout.css", "eyebrow, text, [data-eyebrow]", "centered semantic text primitives"],
  ["layouts/layout.css", "--l-reel-item-size", "explicit reel item sizing"],
  ["layouts/layout.css", '[data-scrollbar="hidden"]', "reel scrollbar presentation variants"],
  ["layouts/layout.css", "scroll-snap-type: inline proximity", "optional reel snapping"],
  ["components/site-shell.css", "--site-header-wrapped-navigation-padding-block-end", "wrapped header navigation spacing"],
  ["components/site-shell.css", "--bg: var(--site-header-background)", "site-header surface context"],
  ["utilities/utilities.css", ".rounded-start-start-none", "logical single-corner radius reset"],
  ["utilities/utilities.css", ".rounded-block-start-none", "logical paired-corner radius reset"],
  ["utilities/utilities.css", ".bg-surface-default", "consistent default surface utility alias"],
  ["utilities/utilities.css", ".text-default", "consistent default text utility"],
  ["utilities/utilities.css", ".text-on-accent", "matching accent contrast utility"],
  ["utilities/utilities.css", ".border-default", "consistent default border utility alias"],
  ["utilities/utilities.css", ".focus-ring:focus-visible", "keyboard-appropriate focus utility"],
  ["core/defaults.css", ":is(.button, .btn):focus-visible", "single canonical button focus contract"],
  ["components/card.css", "padding: 0", "host-consistent card inset ownership"],
  ["components/card.css", "--bg: var(--_card-background)", "card surface context"],
  ["components/alert.css", "--bg: var(--_alert-background)", "alert surface context"],
  ["components/actions.css", "--bg: var(--_icon-button-background)", "icon-button surface context"],
  ["components/navigation-patterns.css", "--bg: var(--_toolbar-background)", "toolbar surface context"],
  ["components/disclosure.css", "--bg: var(--_bg)", "disclosure surface context"],
  ["components/modal.css", "--bg: var(--_modal-background)", "modal surface context"],
  ["components/tabs.css", "--bg: var(--tabs-panel-background", "tabpanel surface context"],
  ["utilities/utilities.css", "Button structure and interaction live in core/defaults.css", "variant-only button utilities"],
  ["index.css", "components, layouts, utilities", "utility-last public cascade order"],
  ["website-next/src/scripts/css-tags-shadow.ts", "--accent-h: inherit", "example theme inheritance"],
  ["website-next/src/components/NextThemeEditor.astro", "--surface-lightness-shift", "surface lightness theme control"],
  ["website-next/src/components/NextThemeEditor.astro", "--surface-contrast", "surface contrast theme control"],
  ["website-next/src/layouts/NextDocsLayout.astro", "ClientRouter", "Astro client routing"],
  ["website-next/src/layouts/NextDocsLayout.astro", "serviceWorker.register", "documentation offline cache"],
  ["website-next/src/layouts/NextDocsLayout.astro", 'aria-current", "location', "active outline location"],
  ["website-next/src/layouts/NextDocsLayout.astro", "data-scroll-active", "auto-hiding documentation scrollbars"],
  ["website-next/src/scripts/theme-editor.ts", "@layer css-tags-theme", "layered theme export"],
  ["website-next/src/scripts/theme-editor.ts", "data-theme", "named theme export"],
  ["components/divider.css", '[strength="subtle"]', "explicit subtle divider strength"],
  ["components/identity.css", "> picture > img", "picture avatar image sizing"],
  ["components/tabs.css", "overflow-y: hidden", "horizontal tablist overflow containment"],
  ["core/tokens.css", "--badge-background-overt", "distinct semantic badge surfaces"],
  ["website-next/src/components/ExampleWorkbench.astro", "data-workbench-resize-handle", "resizable example previews"],
];
for (const [file, needle, label] of sourceContracts) {
  const source = await readFile(path.join(libraryRoot, file), "utf8");
  if (!source.includes(needle)) failures.push(`${file}: missing ${label}.`);
}

for (const page of pages) {
  const route = routeForPage(page);
  const html = pageHtmlByRoute.get(route);
  const htmlKilobytes = Buffer.byteLength(html) / 1024;
  if (htmlKilobytes > 300) failures.push(`${route}: HTML payload is ${htmlKilobytes.toFixed(1)} KB; expected at most 300 KB.`);
  if (/http-equiv=["']refresh["']/i.test(html)) continue;
  const requireText = (needle, label) => {
    if (!html.includes(needle)) failures.push(`${route}: missing ${label}.`);
  };

  if (standaloneExampleRoutes.has(route)) {
    requireText('name="css-tags-example"', "Astro standalone-example marker");
    if (html.includes('../index.css')) failures.push(`${route}: retains a repository-relative stylesheet link.`);
    if (/<script\b[^>]*\bsrc=["']\.\.?\//i.test(html)) {
      failures.push(`${route}: retains a repository-relative script link.`);
    }
    continue;
  }

  requireText('class="skip-link"', "skip link");
  requireText('class="site-header"', "library site header");
  requireText('class="site-footer"', "library site footer");
  requireText("data-docs-search", "search control");
  requireText("data-color-scheme-control", "color-scheme control");
  requireText("data-theme-editor", "root theme editor");
  requireText("data-theme-editor-reset", "theme reset control");
  requireText("data-theme-editor-download", "theme CSS download control");
  requireText("data-pagefind-body", "Pagefind content boundary");

  if (!html.includes("data-example-workbench") && !html.includes("data-palette-viewer")) {
    failures.push(`${route}: missing a rendered example or interactive palette.`);
  }
  const exampleCount = (html.match(/data-example-workbench/g) ?? []).length;
  if (!html.includes("data-palette-viewer") && exampleCount < 2) {
    failures.push(`${route}: expected at least two rendered examples; found ${exampleCount}.`);
  }
  const examplePreviews = Array.from(
    html.matchAll(/<css-tags-example\b[^>]*>([\s\S]*?)<\/css-tags-example>/g),
    (match) => match[1].replace(/\s+/g, " ").trim(),
  );
  if (examplePreviews.length > 1 && new Set(examplePreviews).size === 1) {
    failures.push(`${route}: every rendered example has identical preview markup.`);
  }

  if (route === "/guides/cms-markdown/") {
    requireText("contains-task-list", "CMS task-list output");
    requireText("data-footnotes", "CMS footnote output");
    requireText("data-heading-anchor", "CMS heading permalink output");
    requireText("<caption>Renderer support</caption>", "CMS table caption");
    if (html.includes('<h1 id="cms-demo-release"><p>')) {
      failures.push(`${route}: rendered CMS heading contains an invalid paragraph wrapper.`);
    }
  }

  if (route === "/guides/npm/") {
    requireText("npm install css-tags", "npm installation command");
    requireText('types=&#34;css-tags&#34;', "package type reference");
  }

  for (const legacy of ['class="docs-container', 'class="mobile-header']) {
    if (html.includes(legacy)) failures.push(`${route}: contains legacy shell marker ${legacy}.`);
  }

  const activeMarkup = html
    .replace(/<template\b[\s\S]*?<\/template>/gi, "")
    .replace(/<pre\b[\s\S]*?<\/pre>/gi, "");
  const ids = Array.from(activeMarkup.matchAll(/\sid="([^"]+)"/g), (match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) {
    failures.push(`${route}: duplicate ids: ${[...new Set(duplicates)].join(", ")}.`);
  }

  const brokenLinks = new Set();
  const brokenFragments = new Set();
  for (const match of activeMarkup.matchAll(/\shref="([^"]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(href)) continue;
    /* In-page demo links may intentionally target an embedding application.
       Cross-page fragments, including sidebar aliases, must resolve here. */
    if (href.startsWith("#")) continue;

    const resolved = new URL(href, `https://audit.invalid${route}`);
    const local = resolved.pathname.replace(/^\/CSS-Tags(?=\/|$)/, "") || "/";
    if (/\.[a-z0-9]+$/i.test(local) || local.startsWith("/_astro/") || local.startsWith("/pagefind/")) continue;

    const target = local.endsWith("/") ? local : `${local}/`;
    if (!routes.has(target)) brokenLinks.add(href);
    if (resolved.hash && resolved.hash !== "#" && routes.has(target)) {
      const targetHtml = pageHtmlByRoute.get(target);
      if (targetHtml) {
        const targetMarkup = targetHtml
          .replace(/<template\b[\s\S]*?<\/template>/gi, "")
          .replace(/<pre\b[\s\S]*?<\/pre>/gi, "");
        const fragment = decodeURIComponent(resolved.hash.slice(1));
        if (!targetMarkup.includes(` id="${fragment}"`)) brokenFragments.add(href);
      }
    }
  }
  if (brokenLinks.size) {
    failures.push(`${route}: broken internal links: ${[...brokenLinks].join(", ")}.`);
  }
  if (brokenFragments.size) {
    failures.push(`${route}: broken internal fragments: ${[...brokenFragments].join(", ")}.`);
  }
}

if (failures.length) {
  console.error(`Build audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Build audit passed for ${pages.length} routes.`);
}
