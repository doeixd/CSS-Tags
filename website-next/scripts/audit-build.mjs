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
}

const sourceContracts = [
  ["components/badge.css", "[data-status=\"success\"]", "badge data-status alias"],
  ["components/badge.css", ".badge-success", "badge status class alias"],
  ["components/badge.css", "[data-variant=\"subtle\"]", "badge data-variant alias"],
  ["components/chip.css", "[variant=\"overt\"]", "chip variant attribute"],
  ["components/tooltips.css", "[data-tooltip-host]", "explicit rich-tooltip parent fallback"],
  ["layouts/layout.css", "[data-no-stack]", "layout-split data no-stack alias"],
  ["types/css-tags.d.ts", "eyebrow: GlobalAttributes", "eyebrow JSX typing"],
  ["types/css-tags.d.ts", "interface ThemeOverrides", "typed theme override contract"],
  ["core/tokens.css", "--font-size-prose", "contextual prose typography input"],
  ["core/tokens.css", "--font-size-ui", "contextual UI typography input"],
  ["core/tokens.css", "--scrollbar-thumb-hover", "semantic scrollbar tokens"],
  ["core/theme.css", "--surface-lightness-shift", "scheme-safe surface lightness input"],
  ["core/theme.css", "--surface-contrast", "surface hierarchy contrast input"],
  ["core/tokens.css", "--button-transition-duration", "semantic button transition tokens"],
  ["core/tokens.css", "--table-heading-background", "subtle semantic table tokens"],
  ["components/table.css", "min-inline-size: max(100%", "full-width responsive tables"],
  ["core/defaults.css", '[aria-disabled="true"]', "ARIA-disabled button state"],
  ["core/tokens.css", "--code-inline-border: transparent", "borderless inline code default"],
  ["components/navigation-patterns.css", "[data-variant=\"flush\"]", "flush list-navigation variant"],
  ["components/view-transition.css", "view-fade-in", "fade-only view transition"],
  ["components/carousel.css", "flex: 0 0 100%", "full-width carousel slides"],
  ["components/carousel.css", "data-carousel-initialized", "progressively enhanced carousel controls"],
  ["carousel.js", "toggleAttribute('inert'", "inactive carousel slide focus management"],
  ["website-next/src/components/PageExample.astro", "initializeCarousels(root)", "shipped carousel demo behavior"],
  ["website-next/src/scripts/css-tags-shadow.ts", "--accent-h: inherit", "example theme inheritance"],
  ["website-next/src/components/NextThemeEditor.astro", "--surface-lightness-shift", "surface lightness theme control"],
  ["website-next/src/components/NextThemeEditor.astro", "--surface-contrast", "surface contrast theme control"],
  ["website-next/src/layouts/NextDocsLayout.astro", "ClientRouter", "Astro client routing"],
  ["website-next/src/layouts/NextDocsLayout.astro", "serviceWorker.register", "documentation offline cache"],
  ["website-next/src/layouts/NextDocsLayout.astro", 'aria-current", "location', "active outline location"],
  ["website-next/src/layouts/NextDocsLayout.astro", "data-scroll-active", "auto-hiding documentation scrollbars"],
  ["website-next/src/scripts/theme-editor.ts", "@layer css-tags-theme", "layered theme export"],
  ["website-next/src/scripts/theme-editor.ts", "data-theme", "named theme export"],
];
for (const [file, needle, label] of sourceContracts) {
  const source = await readFile(path.join(libraryRoot, file), "utf8");
  if (!source.includes(needle)) failures.push(`${file}: missing ${label}.`);
}

for (const page of pages) {
  const html = await readFile(page, "utf8");
  const route = routeForPage(page);
  const requireText = (needle, label) => {
    if (!html.includes(needle)) failures.push(`${route}: missing ${label}.`);
  };

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

  if (route === "/guides/cms-markdown/") {
    requireText("contains-task-list", "CMS task-list output");
    requireText("data-footnotes", "CMS footnote output");
    requireText("data-heading-anchor", "CMS heading permalink output");
    requireText("<caption>Renderer support</caption>", "CMS table caption");
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
  for (const match of activeMarkup.matchAll(/\shref="([^"]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (/^(?:#|https?:|mailto:|tel:|data:|javascript:)/i.test(href)) continue;

    const resolved = new URL(href, `https://audit.invalid${route}`).pathname;
    const local = resolved.replace(/^\/CSS-Tags(?=\/|$)/, "") || "/";
    if (/\.[a-z0-9]+$/i.test(local) || local.startsWith("/_astro/") || local.startsWith("/pagefind/")) continue;

    const target = local.endsWith("/") ? local : `${local}/`;
    if (!routes.has(target)) brokenLinks.add(href);
  }
  if (brokenLinks.size) {
    failures.push(`${route}: broken internal links: ${[...brokenLinks].join(", ")}.`);
  }
}

if (failures.length) {
  console.error(`Build audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Build audit passed for ${pages.length} routes.`);
}
