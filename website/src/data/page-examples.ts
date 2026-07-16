export interface PageExampleDefinition {
    title: string;
    description: string;
    preview: string;
    code: string;
}

const panel = (content: string) => `<div class="example-panel">${content}</div>`;
const tiles = (labels: string[]) => labels
    .map((label) => `<div class="example-tile">${label}</div>`)
    .join("");

const examples: Record<string, PageExampleDefinition> = {
    index: {
        title: "A complete component without class soup",
        description: "The card, cluster, badge, and button styles all come from the shipped entry point.",
        preview: `<card><card-body><layout-stack gap="var(--space-md)"><layout-cluster justify="space-between"><span eyebrow>Release</span><badge status="success">Stable</badge></layout-cluster><h3>CSS that follows the markup</h3><p class="example-muted">Compose semantic primitives from one shared token system.</p><button class="form-button btn-primary" type="button">Read the guide</button></layout-stack></card-body></card>`,
        code: `<card>\n  <card-body>\n    <layout-stack gap="var(--space-md)">\n      <layout-cluster justify="space-between">\n        <span eyebrow>Release</span>\n        <badge status="success">Stable</badge>\n      </layout-cluster>\n      <h3>CSS that follows the markup</h3>\n      <p>Compose the primitives you need.</p>\n      <button class="form-button btn-primary" type="button">Read the guide</button>\n    </layout-stack>\n  </card-body>\n</card>`,
    },
    "components/astro-components": {
        title: "Astro wrappers render the same public API",
        description: "Framework components can provide editor ergonomics while emitting ordinary CSS Tags markup.",
        preview: `<layout-cluster><badge status="success">Success</badge><badge status="warning">Warning</badge><badge status="error">Error</badge><badge status="info">Info</badge></layout-cluster>`,
        code: `---\nimport Badge from "../../components/Badge.astro";\n---\n\n<Badge variant="success">Success</Badge>\n<Badge variant="warning">Warning</Badge>\n<Badge variant="danger">Error</Badge>`,
    },
    "components/box": {
        title: "A token-aware content box",
        description: "Attributes accept raw CSS values, including custom properties.",
        preview: `<article data-box p="var(--space-lg)" bg="var(--surface-subtle)" radius="var(--radius-lg)"><strong>Account updated</strong><p class="example-muted">Your preferences were saved successfully.</p></article>`,
        code: `<article\n  data-box\n  p="var(--space-lg)"\n  bg="var(--surface-subtle)"\n  radius="var(--radius-lg)"\n>\n  <strong>Account updated</strong>\n  <p>Your preferences were saved successfully.</p>\n</article>`,
    },
    "components/box-extra": {
        title: "Compose a reusable box recipe",
        description: "The custom function supplies layout defaults while local variables keep the result themeable.",
        preview: `<div class="example-panel" style="display:flex;gap:var(--space-md);align-items:flex-start;background:var(--surface-info);color:var(--text-info)"><badge status="info">Tip</badge><div><strong>Token-first recipe</strong><p>Override one variable without rebuilding the component.</p></div></div>`,
        code: `.custom-callout {\n  @apply --box(\n    --display: flex,\n    --gap: var(--space-md),\n    --p: var(--space-lg),\n    --bg: var(--surface-info),\n    --radius: var(--radius-md)\n  );\n}`,
    },
    "components/carousel": {
        title: "Scrollable carousel with a no-JavaScript fallback",
        description: "Use the arrow controls here, or horizontally scroll the slides directly.",
        preview: `<section data-carousel data-doc-carousel loop radius="var(--radius-lg)" aria-label="Featured examples"><div data-carousel-slides><article data-carousel-item><div class="example-slide">One</div></article><article data-carousel-item><div class="example-slide">Two</div></article><article data-carousel-item><div class="example-slide">Three</div></article></div><button type="button" data-carousel-trigger direction="prev" aria-label="Previous slide">&#8249;</button><button type="button" data-carousel-trigger direction="next" aria-label="Next slide">&#8250;</button></section>`,
        code: `<section data-carousel loop aria-label="Featured examples">\n  <div data-carousel-slides>\n    <article data-carousel-item>Slide one</article>\n    <article data-carousel-item>Slide two</article>\n    <article data-carousel-item>Slide three</article>\n  </div>\n  <button type="button" data-carousel-trigger direction="prev" aria-label="Previous slide">&#8249;</button>\n  <button type="button" data-carousel-trigger direction="next" aria-label="Next slide">&#8250;</button>\n</section>\n<script type="module" src="/carousel.js"><\/script>`,
    },
    "components/container": {
        title: "Centered content with a readable maximum width",
        description: "The custom element, data host, and class host share the same container behavior.",
        preview: `<section data-container max-width-xl="36rem" pad="var(--space-md)"><div class="example-panel"><strong>Readable by default</strong><p class="example-muted">The container centers this copy and prevents it from stretching across the full preview.</p></div></section>`,
        code: `<section data-container max-width-xl="36rem" pad="var(--space-md)">\n  <article>\n    <h2>Readable by default</h2>\n    <p>Centered content with a useful maximum width.</p>\n  </article>\n</section>`,
    },
    "components/flex": {
        title: "Centered, wrapping flex content",
        description: "Change direction, wrapping, main-axis alignment, cross-axis alignment, and gap directly on the host.",
        preview: `<flex gap="var(--space-sm)" wrap="wrap" justify="center" align="center">${tiles(["Alpha", "Beta", "Gamma", "Delta"])}</flex>`,
        code: `<flex gap="var(--space-sm)" wrap="wrap" justify="center" align="center">\n  <div>Alpha</div>\n  <div>Beta</div>\n  <div>Gamma</div>\n  <div>Delta</div>\n</flex>`,
    },
    "components/grid": {
        title: "An auto-fitting card grid",
        description: "Items wrap when the preview gets narrow; no page-level media query is required.",
        preview: `<grid columns="repeat(auto-fit, minmax(min(9rem, 100%), 1fr))" gap="var(--space-sm)">${tiles(["Analytics", "Orders", "Customers", "Inventory"])}</grid>`,
        code: `<grid\n  columns="repeat(auto-fit, minmax(min(9rem, 100%), 1fr))"\n  gap="var(--space-sm)"\n>\n  <article>Analytics</article>\n  <article>Orders</article>\n  <article>Customers</article>\n  <article>Inventory</article>\n</grid>`,
    },
    "components/img-container": {
        title: "A cropped, responsive image frame",
        description: "The host owns aspect ratio, fit, radius, loading, and error presentation.",
        preview: `<picture data-img-container aspect-ratio="16 / 7" object-fit="cover" radius="var(--radius-lg)" theme="card"><img data-loaded src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20800%20350'%3E%3Crect%20width='800'%20height='350'%20fill='%236d5dfc'/%3E%3Ccircle%20cx='650'%20cy='80'%20r='45'%20fill='white'%20opacity='.8'/%3E%3Cpath%20d='M0%20300%20190%20140%20340%20260%20500%20100%20800%20300V350H0Z'%20fill='%2312b8a6'/%3E%3C/svg%3E" alt="Abstract purple and teal landscape" /></picture>`,
        code: `<picture\n  data-img-container\n  aspect-ratio="16 / 7"\n  object-fit="cover"\n  radius="var(--radius-lg)"\n  theme="card"\n>\n  <img src="landscape.jpg" alt="Mountain landscape" loading="lazy" />\n</picture>`,
    },
    "components/list": {
        title: "Semantic lists with custom markers",
        description: "Native list semantics gain declarative markers and shared spacing without a custom element requirement.",
        preview: `<ul data-list><li data-list-item type="✓" marker-color="var(--success)">Semantic structure</li><li data-list-item type="✓" marker-color="var(--success)">Shared spacing tokens</li><li data-list-item type="✓" marker-color="var(--success)">Optional custom markers</li></ul>`,
        code: `<ul data-list>\n  <li data-list-item type="✓" marker-color="var(--success)">\n    Semantic structure\n  </li>\n  <li data-list-item type="✓" marker-color="var(--success)">\n    Shared spacing tokens\n  </li>\n</ul>`,
    },
    "components/masonry": {
        title: "A responsive masonry-like collection",
        description: "The same host API is available as a custom element, data attribute, or class.",
        preview: `<masonry-layout cols="repeat(auto-fit, minmax(8rem, 1fr))" gap="var(--space-sm)"><div class="example-tile">Short</div><div class="example-tile">A taller card<br><br>with more content</div><div class="example-tile">Medium<br>card</div><div class="example-tile">Another<br><br><br>item</div></masonry-layout>`,
        code: `<masonry-layout\n  cols="repeat(auto-fit, minmax(12rem, 1fr))"\n  gap="var(--space-md)"\n>\n  <article>Short card</article>\n  <article>Card with more content...</article>\n  <article>Another card</article>\n</masonry-layout>`,
    },
    "components/navigation": {
        title: "Responsive navigation on a native nav element",
        description: "The links remain readable at ordinary widths and collapse behind the accessible toggle only in narrow containers.",
        preview: `<nav class="navbar" data-collapsible data-doc-nav aria-label="Example"><a class="nav-brand" href="#">Acme</a><button class="nav-toggle" type="button" aria-expanded="false" aria-controls="example-nav-links">Menu</button><ul class="nav-links" id="example-nav-links"><li><a class="nav-link" aria-current="page" href="#overview">Overview</a></li><li><a class="nav-link" href="#activity">Activity</a></li><li><a class="nav-link" href="#settings">Settings</a></li></ul></nav>`,
        code: `<nav class="navbar" data-collapsible aria-label="Primary">\n  <a class="nav-brand" href="/">Acme</a>\n  <button class="nav-toggle" aria-expanded="false" aria-controls="primary-links">Menu</button>\n  <ul class="nav-links" id="primary-links">\n    <li><a class="nav-link" aria-current="page" href="/overview">Overview</a></li>\n    <li><a class="nav-link" href="/settings">Settings</a></li>\n  </ul>\n</nav>`,
    },
    "components/tooltip": {
        title: "Text and structured tooltips",
        description: "Use generated text for short hints and real DOM content when aria-describedby needs a reference.",
        preview: `<layout-cluster justify="center" gap="var(--space-lg)" style="padding-block:2rem"><tooltip content="Saved to your workspace" place="top"><button type="button">Save</button></tooltip><tooltip content="Removes this draft" place="bottom"><button type="button">Delete</button></tooltip><button type="button" data-tooltip-host aria-describedby="billing-tip">Billing info<tooltip id="billing-tip" role="tooltip" position="top"><strong>Next invoice</strong><br><small>Due on August 1</small></tooltip></button></layout-cluster>`,
        code: `<tooltip content="Saved to your workspace" place="top">\n  <button type="button">Save</button>\n</tooltip>\n\n<tooltip content="Removes this draft" place="bottom">\n  <button type="button">Delete</button>\n</tooltip>\n\n<button type="button" data-tooltip-host aria-describedby="billing-tip">\n  Billing info\n  <tooltip id="billing-tip" role="tooltip" position="top">\n    <strong>Next invoice</strong><br>\n    <small>Due on August 1</small>\n  </tooltip>\n</button>`,
    },
    "components/view-transition": {
        title: "Name the elements that should persist",
        description: "Shared transition names let the browser connect matching elements between pages.",
        preview: `<layout-cluster justify="center"><div class="example-tile" style="view-transition-name:demo-avatar;border-radius:999px;inline-size:4rem;block-size:4rem;display:grid;place-items:center">A</div><div><strong style="view-transition-name:demo-title">Account profile</strong><p class="example-muted" style="margin-block:.25rem 0">The avatar and heading can morph between routes.</p></div></layout-cluster>`,
        code: `<meta name="view-transition" content="same-origin" />\n\n<img class="profile-avatar" src="avatar.jpg" alt="" />\n<h1>Account profile</h1>\n\n<style>\n  .profile-avatar { view-transition-name: profile-avatar; }\n  h1 { view-transition-name: page-title; }\n</style>`,
    },
    "core/base": {
        title: "Registered tokens with safe fallbacks",
        description: "Base tokens establish the shared surface, text, radius, and spacing vocabulary.",
        preview: `<layout-cluster><div class="example-swatch" style="background:var(--surface-default)">surface-default</div><div class="example-swatch" style="background:var(--surface-subtle)">surface-subtle</div><div class="example-swatch" style="background:var(--accent);color:var(--text-on-accent)">accent</div></layout-cluster>`,
        code: `.notice {\n  padding: var(--space-md);\n  color: var(--text-default);\n  background: var(--surface-subtle);\n  border: 1px solid var(--outline-subtle);\n  border-radius: var(--radius-md);\n}`,
    },
    "core/defaults": {
        title: "Semantic elements start with useful defaults",
        description: "Headings, paragraphs, links, code, and controls inherit a coherent baseline.",
        preview: `${panel(`<span eyebrow>Default typography</span><h3>A useful heading</h3><p>Body copy has readable measure and rhythm, with an <a href="#defaults-demo">ordinary link</a> and <code>inline code</code>.</p><button type="button">Native button</button>`)}`,
        code: `<article>\n  <span eyebrow>Default typography</span>\n  <h2>A useful heading</h2>\n  <p>Readable body copy with an <a href="/guide">ordinary link</a>.</p>\n  <button type="button">Native button</button>\n</article>`,
    },
    "core/engine": {
        title: "One hue generates a complete scale",
        description: "The engine combines lightness and chroma steps into usable color tokens.",
        preview: `<div class="example-scale" aria-label="Accent color scale">${Array.from({ length: 9 }, (_, index) => `<span style="background:color-mix(in oklch,var(--accent) ${15 + index * 10}%,var(--base))"></span>`).join("")}</div>`,
        code: `:root {\n  --accent-h: 280;\n  --accent-c: 0.15;\n  --accent-l: 60%;\n}\n\n.button {\n  background: var(--accent);\n  color: var(--text-on-accent);\n}`,
    },
    "core/mixins": {
        title: "Reusable CSS logic with typed inputs",
        description: "Custom functions turn recurring calculations into a token-friendly API.",
        preview: `<layout-cluster align="end"><div class="example-tile" style="inline-size:4rem">4rem</div><div class="example-tile" style="inline-size:7rem">7rem</div><div class="example-tile" style="inline-size:10rem">10rem</div></layout-cluster>`,
        code: `.sidebar {\n  inline-size: --rem(320);\n  padding: --fluid(16, 32);\n}\n\n.card-list {\n  @apply --layout-grid(\n    --min: 14rem,\n    --gap: var(--space-lg)\n  );\n}`,
    },
    "core/reset": {
        title: "A quiet reset that preserves semantics",
        description: "The reset removes browser inconsistencies without erasing native control behavior.",
        preview: `${panel(`<h3>Predictable foundations</h3><p>Margins, sizing, media, and form inheritance begin from a consistent baseline.</p><label>Project name <input value="CSS Tags" /></label>`)}`,
        code: `<article>\n  <h2>Predictable foundations</h2>\n  <p>Typography keeps its semantic hierarchy.</p>\n  <label>\n    Project name\n    <input value="CSS Tags" />\n  </label>\n</article>`,
    },
    "core/text": {
        title: "Text roles and truncation",
        description: "The same primitive handles hierarchy, color, weight, and bounded text.",
        preview: `<layout-stack gap="var(--space-sm)"><h3 data-text size="lg" weight="bold" color="accent">Large accent text</h3><p class="text" color="subtle">Supporting text uses a semantic host and palette role.</p><p data-text truncate style="max-inline-size:16rem">This long line demonstrates single-line truncation when space is limited.</p></layout-stack>`,
        code: `<h3 data-text size="lg" weight="bold" color="accent">\n  Large accent text\n</h3>\n<p class="text" color="subtle">Supporting text</p>\n<p data-text truncate>Long content constrained to one line</p>`,
    },
    "core/theme": {
        title: "Theme a subtree with three brand inputs",
        description: "Changing hue, chroma, and lightness updates components and their contrast colors together.",
        preview: `<div class="example-panel" style="--accent-h:190;--accent-c:.16;--accent-l:55%;--accent:oklch(55% .16 190)"><layout-stack gap="var(--space-sm)"><span eyebrow>Local theme</span><h3>Teal campaign</h3><p class="example-muted">Only this subtree receives the override.</p><button class="form-button btn-primary" type="button">Primary action</button><badge class="stack-intrinsic" status="info">Preview</badge></layout-stack></div>`,
        code: `<section style="--accent-h: 190; --accent-c: 0.16; --accent-l: 55%">\n  <h2>Teal campaign</h2>\n  <p>Only this subtree receives the override.</p>\n  <button class="form-button btn-primary">Primary action</button>\n</section>`,
    },
    "guides/color-system": {
        title: "Use semantic colors, not numbered paint chips",
        description: "Surface, text, outline, accent, and feedback roles adapt together across themes.",
        preview: `<grid columns="repeat(auto-fit,minmax(8rem,1fr))" gap="var(--space-sm)"><div class="example-swatch" style="background:var(--surface-subtle)">Surface</div><div class="example-swatch" style="background:var(--accent);color:var(--text-on-accent)">Accent</div><div class="example-swatch" style="background:var(--surface-success);color:var(--text-success)">Success</div><div class="example-swatch" style="background:var(--surface-error);color:var(--text-error)">Error</div></grid>`,
        code: `.panel {\n  color: var(--text-default);\n  background: var(--surface-subtle);\n  border-color: var(--outline-subtle);\n}\n\n.panel[data-status="success"] {\n  color: var(--text-success);\n  background: var(--surface-success);\n}`,
    },
    "guides/introduction": {
        title: "Start with meaningful markup",
        description: "CSS Tags styles semantic structures directly while keeping class and data hosts available.",
        preview: `<card><card-body><layout-stack><span eyebrow>Getting started</span><h3>Describe the interface</h3><p class="example-muted">The markup says what each region is, and the theme supplies its visual language.</p><layout-cluster><badge status="success">Ready</badge><button class="form-button btn-primary" type="button">Continue</button></layout-cluster></layout-stack></card-body></card>`,
        code: `<card>\n  <card-body>\n    <span eyebrow>Getting started</span>\n    <h2>Describe the interface</h2>\n    <p>The theme supplies its visual language.</p>\n    <badge status="success">Ready</badge>\n    <button class="form-button btn-primary">Continue</button>\n  </card-body>\n</card>`,
    },
    "guides/philosophy": {
        title: "Three hosts, one public primitive",
        description: "Choose the markup that fits the document; each form uses the same component tokens.",
        preview: `<layout-stack><grid columns="1fr 1fr"><div class="example-tile">Custom element</div><div class="example-tile">Grid child</div></grid><div data-grid columns="1fr 1fr"><div class="example-tile">Data host</div><div class="example-tile">Grid child</div></div><div class="grid" columns="1fr 1fr"><div class="example-tile">Class host</div><div class="example-tile">Grid child</div></div></layout-stack>`,
        code: `<grid columns="1fr 1fr">...</grid>\n<div data-grid columns="1fr 1fr">...</div>\n<div class="grid" columns="1fr 1fr">...</div>`,
    },
    "guides/theming": {
        title: "Compare locally scoped themes",
        description: "Theme variables inherit, so independent regions can carry different brands on one page.",
        preview: `<grid columns="repeat(auto-fit,minmax(10rem,1fr))" gap="var(--space-sm)"><div class="example-panel" style="--accent-h:220;--accent:oklch(60% .15 220)"><button class="form-button btn-primary" type="button">Ocean action</button></div><div class="example-panel" style="--accent-h:25;--accent:oklch(60% .15 25)"><button class="form-button btn-primary" type="button">Sunset action</button></div><div class="example-panel" style="--accent-h:145;--accent:oklch(60% .15 145)"><button class="form-button btn-primary" type="button">Forest action</button></div></grid>`,
        code: `<section style="--accent-h: 220">\n  <button class="form-button btn-primary">Ocean action</button>\n</section>\n<section style="--accent-h: 25">\n  <button class="form-button btn-primary">Sunset action</button>\n</section>`,
    },
    "guides/typescript": {
        title: "Use the shipped component attribute types",
        description: "Custom tags get JSX completion, and the same interfaces can type adapters and configuration objects.",
        preview: `<layout-stack gap="var(--space-sm)"><layout-cluster><badge status="success">Types loaded</badge><badge status="info">Attributes completed</badge></layout-cluster><div data-box p="var(--space-sm)" bg="var(--surface-subtle)" radius="var(--radius-md)"><code>CSSTags.BadgeAttributes[&quot;status&quot;]</code></div></layout-stack>`,
        code: `// src/env.d.ts\n/// <reference path="../../types/css-tags.d.ts" />\n\nconst status: CSSTags.BadgeAttributes["status"] = "success";\nconst frame: CSSTags.ImageContainerAttributes = {\n  "aspect-ratio": "16 / 9",\n  "object-fit": "cover",\n};\n\nexport function Dashboard() {\n  return (\n    <layout-grid min-item-size="12rem" gap="var(--space-md)">\n      <badge status={status}>Typed custom element</badge>\n    </layout-grid>\n  );\n}`,
    },
    "js/carousel": {
        title: "Initialize controls, looping, and swipe behavior",
        description: "This preview runs the same next/previous state model documented below.",
        preview: `<section data-carousel data-doc-carousel loop aria-label="Application sections"><div data-carousel-slides><article data-carousel-item><div class="example-slide">Dashboard</div></article><article data-carousel-item><div class="example-slide">Reports</div></article><article data-carousel-item><div class="example-slide">Settings</div></article></div><button type="button" data-carousel-trigger direction="prev" aria-label="Previous slide">&#8249;</button><button type="button" data-carousel-trigger direction="next" aria-label="Next slide">&#8250;</button></section>`,
        code: `<link rel="stylesheet" href="/components/carousel.css" />\n\n<carousel loop>...</carousel>\n\n<script type="module" src="/carousel.js"><\/script>`,
    },
    "js/view-transition": {
        title: "Switch SPA views with progressive enhancement",
        description: "The content still switches when View Transitions are unavailable; supported browsers animate the update.",
        preview: `<div data-view-transitions data-doc-view-transition><layout-cluster><button type="button" data-view-trigger data-doc-page="summary" aria-controls="summary">Summary</button><button type="button" data-view-trigger data-doc-page="activity" aria-controls="activity">Activity</button></layout-cluster><section data-view-page id="summary" active tabindex="-1"><div class="example-panel"><h3>Summary</h3><p class="example-muted">12 open tasks and 3 completed today.</p></div></section><section data-view-page id="activity" tabindex="-1"><div class="example-panel"><h3>Activity</h3><p class="example-muted">The latest changes appear in this view.</p></div></section></div>`,
        code: `<div data-view-transitions>\n  <nav aria-label="Dashboard views">\n    <a data-view-trigger href="#summary">Summary</a>\n    <a data-view-trigger href="#activity">Activity</a>\n  </nav>\n\n  <section data-view-page id="summary" active>...</section>\n  <section data-view-page id="activity">...</section>\n</div>\n\n<script type="module" src="/view-transition.js"><\/script>`,
    },
    "layouts/layout-extra": {
        title: "Compose a centered sidebar layout",
        description: "Layout recipes provide relationships between regions while components own their appearance.",
        preview: `<div style="display:grid;grid-template-columns:minmax(8rem,.35fr) minmax(0,1fr);gap:var(--space-md)"><aside class="example-panel"><strong>Filters</strong><p class="example-muted">Status<br>Owner<br>Date</p></aside><main class="example-panel"><h3>Results</h3><p class="example-muted">The main region takes the remaining space.</p></main></div>`,
        code: `.search-layout {\n  @apply --layout-sidebar(\n    --sidebar-width: 16rem,\n    --gap: var(--space-lg)\n  );\n}`,
    },
    "layouts/layout-extras-helpers": {
        title: "Density changes layout rhythm as a system",
        description: "A single data attribute adjusts component spacing without rewriting each gap.",
        preview: `<div data-density="compact" style="--l-gap:var(--spacing-sm);--l-padding:var(--spacing-sm)"><layout-stack><div class="example-panel">Compact row</div><div class="example-panel">Compact row</div><div class="example-panel">Compact row</div></layout-stack></div>`,
        code: `<html data-density="compact">\n  <body>\n    <layout-stack>\n      <article>Compact row</article>\n      <article>Compact row</article>\n      <article>Compact row</article>\n    </layout-stack>\n  </body>\n</html>`,
    },
    "reference/api": {
        title: "Public hosts compose together",
        description: "This example uses custom elements, but each documented component also exposes its data and class host where practical.",
        preview: `<layout-stack><grid columns="1fr 1fr" gap="var(--space-sm)">${tiles(["Custom element", "Grid child"])}</grid><div data-grid columns="1fr 1fr" gap="var(--space-sm)">${tiles(["Data host", "Grid child"])}</div><div class="grid" columns="1fr 1fr" gap="var(--space-sm)">${tiles(["Class host", "Grid child"])}</div></layout-stack>`,
        code: `<grid columns="1fr 1fr">...</grid>\n<div data-grid columns="1fr 1fr">...</div>\n<div class="grid" columns="1fr 1fr">...</div>`,
    },
    "themes/example-brand": {
        title: "Apply a brand theme at any boundary",
        description: "The example brand file supplies coordinated accents, surfaces, text, and feedback colors.",
        preview: `<div data-theme="ocean" class="example-panel" style="--accent-h:200;--accent-c:.16;--accent-l:60%;--accent:oklch(60% .16 200)"><layout-stack gap="var(--space-sm)"><span eyebrow>Ocean</span><h3>Quarterly report</h3><p class="example-muted">A complete theme is activated by one attribute.</p><button class="form-button btn-primary" type="button">Open report</button></layout-stack></div>`,
        code: `<link rel="stylesheet" href="/themes/example-brand.css" />\n\n<html data-theme="ocean">\n  <body>\n    <h1>Quarterly report</h1>\n    <button class="form-button btn-primary">Open report</button>\n  </body>\n</html>`,
    },
    "themes/theme-packs": {
        title: "Switch coordinated theme packs",
        description: "Theme packs replace brand inputs while preserving every semantic component role.",
        preview: `<grid columns="repeat(auto-fit,minmax(9rem,1fr))" gap="var(--space-sm)"><div data-theme="ocean" class="example-panel" style="--accent-h:200;--accent:oklch(60% .16 200)"><button class="form-button btn-primary" style="inline-size:100%" type="button">Ocean</button></div><div data-theme="sunrise" class="example-panel" style="--accent-h:30;--accent:oklch(62% .18 30)"><button class="form-button btn-primary" style="inline-size:100%" type="button">Sunrise</button></div><div data-theme="forest" class="example-panel" style="--accent-h:145;--accent:oklch(58% .16 145)"><button class="form-button btn-primary" style="inline-size:100%" type="button">Forest</button></div></grid>`,
        code: `<link rel="stylesheet" href="/themes/theme-packs.css" />\n\n<html data-theme="ocean">...</html>\n<html data-theme="sunrise">...</html>\n<html data-theme="forest">...</html>`,
    },
    "utilities/utilities": {
        title: "Small hooks for state and alignment",
        description: "Utilities complement components without replacing their semantic API.",
        preview: `<layout-cluster><button type="button" class="hover-highlight">Hover highlight</button><button type="button" class="active-press">Press feedback</button><button type="button" class="focus-ring">Visible focus</button></layout-cluster>`,
        code: `<button class="hover-highlight">Hover highlight</button>\n<button class="active-press">Press feedback</button>\n<button class="focus-ring">Visible focus</button>`,
    },
    "reference/index-css": {
        title: "Import the complete layered system",
        description: "The main entry point preserves the intended tokens-to-layout cascade order.",
        preview: `<layout-cluster><badge status="success">Tokens</badge><badge status="success">Theme</badge><badge status="success">Components</badge><badge status="success">Utilities</badge><badge status="success">Layouts</badge></layout-cluster>`,
        code: `@import url("css-tags/index.css");\n\n/* Your unlayered application overrides remain straightforward. */\n.dashboard {\n  --accent-h: 220;\n}`,
    },
    issues: {
        title: "Use the verified public entry point",
        description: "The current package imports the documented layers and exposes the same API in all examples.",
        preview: `<div class="alert" status="success" role="status"><span class="alert__icon" aria-hidden="true">✓</span><div><strong class="alert__title">Verified</strong><div class="alert__body"><code>index.css</code> builds and its layers load in order.</div></div></div>`,
        code: `<link rel="stylesheet" href="/css-tags/index.css" />\n\n<div class="alert" status="success" role="status">\n  <span class="alert__icon" aria-hidden="true">✓</span>\n  <div class="alert__body">The public entry point is loaded.</div>\n</div>`,
    },
    review: {
        title: "The recommended semantic pattern",
        description: "Current components use native state and ARIA attributes as their styling contracts.",
        preview: `<details><summary>Review details</summary><div class="example-panel"><p>Native disclosure works without JavaScript and keeps keyboard behavior intact.</p></div></details>`,
        code: `<details>\n  <summary>Review details</summary>\n  <p>Native disclosure works without JavaScript.</p>\n</details>`,
    },
};

export function getPageExample(path: string, pageTitle: string): PageExampleDefinition {
    const normalized = path.replace(/^\/+|\/+$/g, "") || "index";
    return examples[normalized] ?? {
        title: `${pageTitle} in context`,
        description: "A small composition using the shipped semantic API and shared design tokens.",
        preview: `<card><card-body><layout-stack><span eyebrow>Example</span><h3>${pageTitle}</h3><p class="example-muted">This composition inherits the active CSS Tags theme.</p><button class="form-button btn-primary" type="button">Continue</button></layout-stack></card-body></card>`,
        code: `<card>\n  <card-body>\n    <span eyebrow>Example</span>\n    <h2>${pageTitle}</h2>\n    <p>This composition inherits the active theme.</p>\n    <button class="form-button btn-primary" type="button">Continue</button>\n  </card-body>\n</card>`,
    };
}
