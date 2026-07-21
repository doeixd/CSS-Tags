export interface PageExampleLesson {
    title: string;
    description: string;
    preview: string;
    code: string;
    compact?: boolean;
}

export interface PageExampleSeed extends PageExampleLesson {
    additionalExamples?: PageExampleLesson[];
}

const panel = (content: string) => `<div class="example-panel">${content}</div>`;
const tile = (content: string) => `<div class="example-tile">${content}</div>`;

export const primaryExamples: Record<string, PageExampleSeed> = {
    "guides/common-footguns": {
        title: "Keep ARIA roles semantic",
        description: "Use variant for appearance so role remains available to describe what an element actually is.",
        preview: `<layout-stack gap="var(--space-sm)"><layout-cluster><badge variant="subtle">Visual variant</badge><badge status="success">Semantic status</badge></layout-cluster><div role="status" class="example-panel">A real live-region role belongs on the message container.</div></layout-stack>`,
        code: `<!-- Good: appearance and semantics are separate. -->\n<badge variant="subtle">Draft</badge>\n<div role="status">Saved successfully.</div>\n\n<!-- Avoid visual values in ARIA role. -->\n<!-- <badge role="subtle">Draft</badge> -->`,
    },
    "guides/graffiti-ui-elements-gap-analysis": {
        title: "Map needs to existing semantic primitives first",
        description: "A product requirement often composes existing layout, status, and native control APIs instead of requiring a new component.",
        preview: `<article data-card><div data-card-body><layout-stack gap="var(--space-sm)"><layout-cluster justify="space-between"><strong>Deployment</strong><badge status="success">Healthy</badge></layout-cluster><progress value="82" max="100">82%</progress><button type="button">View logs</button></layout-stack></div></article>`,
        code: `<article data-card>\n  <layout-cluster justify="space-between">\n    <h2>Deployment</h2>\n    <badge status="success">Healthy</badge>\n  </layout-cluster>\n  <progress value="82" max="100">82%</progress>\n  <button type="button">View logs</button>\n</article>`,
    },
    "components/accessibility": {
        title: "A skip link that appears when it matters",
        description: "Press Tab inside the preview: the first focus stop reveals a direct route to main content.",
        preview: `<div style="min-block-size:10rem"><a data-skip-link href="#lesson-main">Skip to main content</a><nav aria-label="Example"><a href="#lesson-nav">Navigation link</a></nav><main id="lesson-main" tabindex="-1" class="example-panel"><h3>Main content</h3><p class="example-muted">The target can receive focus after activation.</p></main></div>`,
        code: `<body>\n  <a data-skip-link href="#main-content">Skip to main content</a>\n  <header>...</header>\n  <main id="main-content" tabindex="-1">\n    <h1>Dashboard</h1>\n  </main>\n</body>`,
    },
    "components/card": {
        title: "Card anatomy keeps content roles explicit",
        description: "Media, header, content, and footer each own a predictable part of the card.",
        preview: `<article data-card><div data-card-media style="display:grid;place-items:center;background:linear-gradient(135deg,var(--accent-muted),var(--secondary-muted))"><strong>16 / 9 media</strong></div><div data-card-body><div data-card-header>Design systems report</div><div data-card-content><p>Patterns, adoption, and accessibility findings.</p></div><div data-card-footer>Updated 12 minutes ago</div></div></article>`,
        code: `<article data-card>\n  <div data-card-media>\n    <img src="report-cover.jpg" alt="" />\n  </div>\n  <div data-card-body>\n    <header data-card-header>Design systems report</header>\n    <div data-card-content>\n      <p>Patterns, adoption, and accessibility findings.</p>\n    </div>\n    <footer data-card-footer>Updated 12 minutes ago</footer>\n  </div>\n</article>`,
    },
    "components/modal": {
        title: "Native dialog structure before behavior",
        description: "The open state exposes the styled surface while headings and method=dialog controls preserve native semantics.",
        preview: `<dialog open data-modal aria-labelledby="lesson-dialog-title"><layout-stack gap="var(--space-md)"><div><h3 id="lesson-dialog-title">Archive project?</h3><p class="example-muted">You can restore it later from settings.</p></div><form method="dialog"><layout-cluster justify="end"><button value="cancel">Cancel</button><button value="confirm">Archive</button></layout-cluster></form></layout-stack></dialog>`,
        code: `<dialog data-modal aria-labelledby="archive-title" id="archive-dialog">\n  <h2 id="archive-title">Archive project?</h2>\n  <p>You can restore it later from settings.</p>\n  <form method="dialog">\n    <button value="cancel">Cancel</button>\n    <button value="confirm">Archive</button>\n  </form>\n</dialog>\n\n<script>\n  archiveDialog.showModal();\n<\/script>`,
    },
    "components/popover": {
        title: "The trigger declares the entire relationship",
        description: "Popover API attributes provide toggling, Escape dismissal, and light dismiss without application JavaScript.",
        preview: `<layout-cluster justify="center"><button type="button" popovertarget="lesson-actions">Project actions</button><div id="lesson-actions" popover><layout-stack gap="var(--space-sm)"><strong>Project actions</strong><button type="button">Duplicate</button><button type="button">Archive</button></layout-stack></div></layout-cluster>`,
        code: `<button type="button" popovertarget="project-actions">\n  Project actions\n</button>\n\n<div id="project-actions" popover>\n  <h2>Project actions</h2>\n  <button type="button">Duplicate</button>\n  <button type="button">Archive</button>\n</div>`,
    },
    "components/table": {
        title: "An order queue built from real table concerns",
        description: "Selection, row headers, status, aligned money, timestamps, and actions compose without changing native table semantics.",
        preview: `<data-table striped hover density="compact" tabindex="0" aria-label="Scrollable order queue" style="--table-min-width:42rem"><table><caption>Orders requiring attention</caption><thead><tr><th scope="col"><input type="checkbox" aria-label="Select all orders" /></th><th scope="col">Order</th><th scope="col">Customer</th><th scope="col">Status</th><th scope="col" data-numeric>Total</th><th scope="col" data-nowrap>Placed</th><th scope="col" data-actions>Actions</th></tr></thead><tbody><tr><td><input type="checkbox" aria-label="Select order 1848" /></td><th scope="row">#1848</th><td>Northstar Labs</td><td><badge status="warning">Review</badge></td><td data-numeric>$1,284.00</td><td data-nowrap>12 min ago</td><td data-actions><button type="button" data-icon-button size="sm" aria-label="Open order 1848">⋯</button></td></tr><tr><td><input type="checkbox" aria-label="Select order 1847" checked /></td><th scope="row">#1847</th><td>Juniper Studio</td><td><badge status="info">Packing</badge></td><td data-numeric>$248.50</td><td data-nowrap>28 min ago</td><td data-actions><button type="button" data-icon-button size="sm" aria-label="Open order 1847">⋯</button></td></tr><tr><td><input type="checkbox" aria-label="Select order 1846" /></td><th scope="row">#1846</th><td>Atlas Coffee</td><td><badge status="success">Paid</badge></td><td data-numeric>$96.00</td><td data-nowrap>41 min ago</td><td data-actions><button type="button" data-icon-button size="sm" aria-label="Open order 1846">⋯</button></td></tr></tbody></table></data-table>`,
        code: `<data-table striped hover density="compact" tabindex="0"\n  aria-label="Scrollable order queue"\n  style="--table-min-width: 42rem">\n  <table>\n    <caption>Orders requiring attention</caption>\n    <thead>\n      <tr>\n        <th scope="col"><input type="checkbox" aria-label="Select all orders" /></th>\n        <th scope="col">Order</th>\n        <th scope="col">Customer</th>\n        <th scope="col" data-numeric>Total</th>\n        <th scope="col" data-actions>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><input type="checkbox" aria-label="Select order 1848" /></td>\n        <th scope="row">#1848</th>\n        <td>Northstar Labs</td>\n        <td data-numeric>$1,284.00</td>\n        <td data-actions><button aria-label="Open order 1848">⋯</button></td>\n      </tr>\n    </tbody>\n  </table>\n</data-table>`,
    },
    "components/tabs": {
        title: "ARIA state is the styling contract",
        description: "Selection, focusability, ownership, and panel visibility are expressed in markup instead of visual-only classes.",
        preview: `<div><div role="tablist" aria-label="Account"><button role="tab" id="lesson-tab-profile" aria-selected="true" aria-controls="lesson-panel-profile">Profile</button><button role="tab" id="lesson-tab-security" aria-selected="false" aria-controls="lesson-panel-security" tabindex="-1">Security</button><button role="tab" aria-disabled="true">Billing</button></div><section role="tabpanel" id="lesson-panel-profile" aria-labelledby="lesson-tab-profile"><h3>Profile</h3><p class="example-muted">Update your public account details.</p></section><section role="tabpanel" id="lesson-panel-security" aria-labelledby="lesson-tab-security" hidden>Security settings</section></div>`,
        code: `<div role="tablist" aria-label="Account">\n  <button role="tab" aria-selected="true" aria-controls="profile">Profile</button>\n  <button role="tab" aria-selected="false" aria-controls="security" tabindex="-1">Security</button>\n  <button role="tab" aria-disabled="true">Billing</button>\n</div>\n<section role="tabpanel" id="profile">Profile settings</section>\n<section role="tabpanel" id="security" hidden>Security settings</section>`,
    },
    "components/alert": {
        title: "Pair status, structure, and actions",
        description: "Alert status supplies the semantic color treatment while slots keep the title, message, icon, and actions readable.",
        preview: `<div data-alert status="warning"><span data-alert-icon aria-hidden="true">!</span><div data-alert-body><strong data-alert-title>Payment method expires soon</strong><p>Your card expires in 7 days.</p><div data-alert-actions><button type="button">Update card</button><button type="button">Dismiss</button></div></div></div>`,
        code: `<div data-alert status="warning">\n  <span data-alert-icon aria-hidden="true">!</span>\n  <div data-alert-body>\n    <strong data-alert-title>Payment method expires soon</strong>\n    <p>Your card expires in 7 days.</p>\n    <div data-alert-actions>\n      <button type="button">Update card</button>\n      <button type="button">Dismiss</button>\n    </div>\n  </div>\n</div>`,
    },
    "components/badge": {
        title: "One label primitive, several meanings",
        description: "Use variants for surfaces and statuses for feedback; the same API works as a custom element, data host, or class host.",
        preview: `<layout-cluster gap="var(--space-sm)"><badge status="success">Healthy</badge><span data-badge variant="subtle">Design system</span><span class="badge badge-muted">Archived</span></layout-cluster>`,
        code: `<badge status="success">Healthy</badge>\n<span data-badge variant="subtle">Design system</span>\n<span class="badge badge-muted">Archived</span>`,
    },
    "components/content-patterns": {
        title: "Compose an empty state from semantic regions",
        description: "The pattern stays understandable in source: media, heading, explanation, and the next action each have a clear role.",
        preview: `<section class="empty-state" aria-labelledby="empty-projects"><div class="empty-state__media" aria-hidden="true">＋</div><h2 id="empty-projects">No projects yet</h2><p>Create a project to start organizing your work.</p><button class="form-button btn-primary" type="button">Create project</button></section>`,
        code: `<section class="empty-state" aria-labelledby="empty-projects">\n  <div class="empty-state__media" aria-hidden="true">＋</div>\n  <h2 id="empty-projects">No projects yet</h2>\n  <p>Create a project to start organizing your work.</p>\n  <button class="form-button btn-primary" type="button">Create project</button>\n</section>`,
    },
    "components/disclosure": {
        title: "Use native details for progressive disclosure",
        description: "The browser owns open state and keyboard behavior; data-disclosure changes density and surface treatment.",
        preview: `<details data-disclosure="bordered" open><summary>What happens after publishing?</summary><p>Your page becomes available at its public URL. You can update it later without changing the link.</p></details>`,
        code: `<details data-disclosure="bordered" open>\n  <summary>What happens after publishing?</summary>\n  <p>Your page becomes available at its public URL.</p>\n</details>`,
    },
    "components/divider": {
        title: "Strength and orientation carry meaning",
        description: "Use a divider for structure, choose a semantic strength, and switch to vertical orientation inside a toolbar or metadata row.",
        preview: `<layout-stack gap="var(--space-sm)"><div>Section above</div><hr strength="accent" /><div>Section below</div><layout-cluster align="center" style="block-size:3rem"><span>Details</span><divider orientation="vertical" strength="muted"></divider><span>Updated today</span></layout-cluster></layout-stack>`,
        code: `<hr strength="accent" />\n\n<layout-cluster align="center">\n  <span>Details</span>\n  <divider orientation="vertical" strength="muted"></divider>\n  <span>Updated today</span>\n</layout-cluster>`,
    },
    "components/form": {
        title: "State belongs on the native control",
        description: "Labels, invalid state, help text, and button variants compose with ordinary form controls.",
        preview: `<form class="example-panel" novalidate><label for="workspace-name">Workspace name</label><input id="workspace-name" class="form-input input-success" value="Northstar" aria-describedby="workspace-help" /><small id="workspace-help">Visible to your team.</small><button class="form-button btn-primary" type="button">Save changes</button></form>`,
        code: `<label for="workspace-name">Workspace name</label>\n<input id="workspace-name" class="form-input input-success" aria-describedby="workspace-help" />\n<small id="workspace-help">Visible to your team.</small>\n<button class="form-button btn-primary" type="submit">Save changes</button>`,
    },
    "components/identity": {
        title: "Avatar size and shape are explicit",
        description: "Use initials as a resilient fallback, or place an image inside the same semantic avatar host.",
        preview: `<layout-cluster align="center" gap="var(--space-md)"><user-avatar size="sm" aria-label="Avery Gray">AG</user-avatar><user-avatar aria-label="Mina Patel"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%236d5dfc'/%3E%3Ccircle cx='40' cy='32' r='15' fill='white'/%3E%3Cpath d='M14 76c4-18 16-27 26-27s22 9 26 27' fill='white'/%3E%3C/svg%3E" alt="Mina Patel" /></user-avatar><span>Mina Patel</span></layout-cluster>`,
        code: `<user-avatar size="sm" aria-label="Avery Gray">AG</user-avatar>\n<user-avatar aria-label="Mina Patel">\n  <img src="avatar.jpg" alt="Mina Patel" />\n</user-avatar>`,
    },
    "components/loading": {
        title: "aria-busy is the loading contract",
        description: "Mark the region that is waiting; choose a spinner size or skeleton utility without inventing a parallel state API.",
        preview: `<layout-stack gap="var(--space-md)"><div aria-busy="true" data-spinner="small" class="example-panel">Refreshing activity…</div><div class="skeleton box" aria-label="Loading profile"></div></layout-stack>`,
        code: `<section aria-busy="true" data-spinner="small">\n  Refreshing activity…\n</section>\n\n<div class="skeleton box" aria-label="Loading profile"></div>`,
    },
    "components/site-shell": {
        title: "A native header and footer frame the page",
        description: "Site shell hosts add sticky, compact, and elevated presentation while the landmarks remain ordinary header, main, and footer elements.",
        preview: `<div><header data-site-header compact><strong>Northstar</strong><nav aria-label="Primary"><a href="#overview" aria-current="page">Overview</a><a href="#reports">Reports</a></nav></header><main class="example-panel" id="overview"><h2>Workspace overview</h2><p>Content remains the page’s main landmark.</p></main><footer data-site-footer><small>© 2026 Northstar</small></footer></div>`,
        code: `<header data-site-header compact>\n  <a href="/">Northstar</a>\n  <nav aria-label="Primary">...</nav>\n</header>\n<main id="main-content">...</main>\n<footer data-site-footer>© 2026 Northstar</footer>`,
    },
    "components/status": {
        title: "Progress and meter describe different facts",
        description: "Progress reports completion of a task; meter reports a bounded measurement such as storage or health.",
        preview: `<layout-stack gap="var(--space-md)"><label for="upload-progress">Uploading report</label><progress id="upload-progress" value="68" max="100">68%</progress><label for="storage-meter">Storage used</label><meter id="storage-meter" min="0" max="100" low="60" high="85" optimum="40" value="78">78%</meter></layout-stack>`,
        code: `<label for="upload-progress">Uploading report</label>\n<progress id="upload-progress" value="68" max="100">68%</progress>\n\n<label for="storage-meter">Storage used</label>\n<meter id="storage-meter" min="0" max="100" low="60" high="85" optimum="40" value="78">78%</meter>`,
    },
};

export const supplementalExamples: Record<string, PageExampleLesson[]> = {
    index: [{
        title: "The same tokens work in a real region",
        description: "A semantic card composes layout, status, and action primitives without page-specific component CSS.",
        preview: `<article data-card><div data-card-body><layout-stack gap="var(--space-sm)"><layout-cluster justify="space-between"><strong>Weekly report</strong><badge status="info">Preview</badge></layout-cluster><p>12 new subscribers and 4 completed tasks.</p><button class="form-button btn-primary" type="button">Open report</button></layout-stack></div></article>`,
        code: `<article data-card>\n  <div data-card-body>\n    <layout-cluster justify="space-between">\n      <h2>Weekly report</h2>\n      <badge status="info">Preview</badge>\n    </layout-cluster>\n    <p>12 new subscribers and 4 completed tasks.</p>\n    <button class="form-button btn-primary">Open report</button>\n  </div>\n</article>`,
    }],
    "core/engine": [{
        title: "Derived values keep component math consistent",
        description: "The engine turns a small set of theme inputs into reusable spacing and surface values consumed by components.",
        preview: `<layout-stack gap="var(--space-sm)"><div class="example-panel" style="padding:var(--space-sm);border-radius:var(--radius-md)">Spacing token</div><div class="example-panel" style="padding:var(--space-md);border-radius:var(--radius-lg)">Larger derived step</div></layout-stack>`,
        code: `:root {\n  --space-md: calc(var(--space-sm) * var(--space-scale));\n  --radius-lg: calc(var(--radius-md) + var(--radius-step));\n}\n\n.card { padding: var(--space-md); border-radius: var(--radius-lg); }`,
    }],
    "core/mixins": [{
        title: "Mixins can describe a recipe, with fallbacks",
        description: "Keep direct declarations as the production path while using a mixin to share an experimental recipe.",
        preview: `<div class="example-panel" style="display:grid;gap:var(--space-sm);padding:var(--space-md);background:var(--surface-info);color:var(--text-info)"><strong>Composable callout</strong><span>Structure and semantic tokens remain visible in the source.</span></div>`,
        code: `.callout {\n  display: grid;\n  gap: var(--space-sm);\n  padding: var(--space-md);\n  background: var(--surface-info);\n  /* @apply --box(...); can share this recipe experimentally. */\n}`,
    }],
    "core/reset": [{
        title: "Reset defaults make native markup predictable",
        description: "The reset removes browser surprises while preserving semantic elements and visible focus behavior.",
        preview: `<article class="example-panel"><h3>Native heading</h3><p>Paragraph rhythm is predictable.</p><button type="button">Focus me</button><ul><li>List semantics remain</li><li>Only presentation is normalized</li></ul></article>`,
        code: `<article>\n  <h2>Native heading</h2>\n  <p>Paragraph rhythm is predictable.</p>\n  <button type="button">Focus me</button>\n  <ul><li>List semantics remain</li></ul>\n</article>`,
    }],
    "core/theme": [{
        title: "Theme inputs propagate through semantic roles",
        description: "Change accent and surface inputs at a boundary; components consume the resulting roles without custom selectors.",
        preview: `<section class="example-panel" style="--accent-h:185;--accent-c:.16"><layout-stack gap="var(--space-sm)"><button class="form-button btn-primary">Accent action</button><div style="background:var(--surface-subtle);padding:var(--space-sm)"><badge status="success">Feedback remains semantic</badge></div></layout-stack></section>`,
        code: `.campaign {\n  --accent-h: 185;\n  --accent-c: 0.16;\n}\n\n.campaign .btn-primary { background: var(--accent); }\n.campaign badge[status="success"] { background: var(--surface-success); }`,
    }],
    "guides/common-footguns": [{
        title: "Keep layout attributes on layout hosts",
        description: "A box can provide a surface, but flex and grid attributes belong on the component that owns that layout responsibility.",
        preview: `<div data-box p="var(--space-md)" bg="var(--surface-subtle)"><layout-cluster justify="space-between"><strong>Correct ownership</strong><badge status="success">Readable</badge></layout-cluster></div>`,
        code: `<div data-box p="var(--space-md)" bg="var(--surface-subtle)">\n  <layout-cluster justify="space-between">\n    <strong>Correct ownership</strong>\n    <badge status="success">Readable</badge>\n  </layout-cluster>\n</div>`,
    }],
    "guides/graffiti-ui-elements-gap-analysis": [{
        title: "Close a gap with a semantic composition",
        description: "Before adding a bespoke component, combine a native control, layout primitive, and status surface to test whether the need is already covered.",
        preview: `<layout-stack gap="var(--space-sm)"><layout-cluster justify="space-between"><strong>Backup</strong><badge status="success">Complete</badge></layout-cluster><progress value="100" max="100">100%</progress><button class="form-button btn-secondary" type="button">View details</button></layout-stack>`,
        code: `<layout-stack gap="var(--space-sm)">\n  <layout-cluster justify="space-between">\n    <strong>Backup</strong><badge status="success">Complete</badge>\n  </layout-cluster>\n  <progress value="100" max="100">100%</progress>\n  <button class="form-button btn-secondary">View details</button>\n</layout-stack>`,
    }],
    issues: [{
        title: "A verified issue includes a reproducible contract",
        description: "Capture the expected markup and the observable result so a regression is actionable for both CSS and docs.",
        preview: `<div class="example-panel"><layout-stack gap="var(--space-xs)"><badge status="success">Reproduced</badge><code>data-status="success" → semantic surface</code><small class="example-muted">Test markup, computed style, and expected fallback.</small></layout-stack></div>`,
        code: `<div role="status">\n  <badge status="success">Reproduced</badge>\n  <code>data-status="success" → semantic surface</code>\n</div>`,
    }],
    review: [{
        title: "Prefer a native primitive when it owns the state",
        description: "Details, progress, dialog, and buttons already provide keyboard and accessibility behavior that CSS can enhance.",
        preview: `<layout-stack gap="var(--space-sm)"><details open><summary>Native disclosure</summary><p>Open state and keyboard behavior come from the platform.</p></details><progress value="72" max="100">72%</progress></layout-stack>`,
        code: `<details open>\n  <summary>Native disclosure</summary>\n  <p>Open state comes from the platform.</p>\n</details>\n<progress value="72" max="100">72%</progress>`,
    }],
    "components/alert": [{
        title: "Choose density for context",
        description: "Compact alerts suit inline feedback; spacious alerts suit a page-level interruption.",
        preview: `<layout-stack gap="var(--space-sm)"><div data-alert status="success" density="compact"><div data-alert-body><strong data-alert-title>Saved</strong><p>Your changes are live.</p></div></div><div data-alert status="error" density="spacious"><div data-alert-body><strong data-alert-title>Could not publish</strong><p>Check the connection and try again.</p></div></div></layout-stack>`,
        code: `<div data-alert status="success" density="compact">Saved</div>\n<div data-alert status="error" density="spacious">Could not publish</div>`,
    }],
    "components/badge": [{
        title: "Labels stay intact in dense UI",
        description: "Badges do not wrap by default; opt into wrapping only when a long label is genuinely necessary.",
        preview: `<layout-cluster gap="var(--space-sm)"><badge status="info">In progress</badge><badge variant="subtle" wrap="wrap">A deliberately long label that can wrap</badge></layout-cluster>`,
        code: `<badge status="info">In progress</badge>\n<badge variant="subtle" wrap> A deliberately long label that can wrap </badge>`,
    }],
    "components/content-patterns": [{
        title: "Status and activity use different patterns",
        description: "A callout communicates one important state; a log groups repeated events with timestamps and outcomes.",
        preview: `<div class="example-panel"><div class="log-card-header"><strong>Deploy production</strong><badge status="success">Passed</badge></div><small class="example-muted">2 minutes ago · 14 checks</small></div>`,
        code: `<article class="log-card">\n  <div class="log-card-header"><strong>Deploy production</strong><badge status="success">Passed</badge></div>\n  <small>2 minutes ago · 14 checks</small>\n</article>`,
    }],
    "components/disclosure": [{
        title: "Flush disclosure works inline",
        description: "Use the flush style for a low-chrome reveal inside a settings or help surface.",
        preview: `<details data-disclosure="flush"><summary>Advanced options</summary><div><label><input type="checkbox" /> Send weekly summary</label></div></details>`,
        code: `<details data-disclosure="flush">\n  <summary>Advanced options</summary>\n  <label><input type="checkbox" /> Send weekly summary</label>\n</details>`,
    }],
    "components/divider": [{
        title: "Native hr keeps document structure",
        description: "Use hr when the separator represents a thematic break, and divider when you need the same visual in a component row.",
        preview: `<article><h3>Billing details</h3><p>Invoice paid by card.</p><hr strength="subtle" /><p class="example-muted">Next invoice: August 1</p></article>`,
        code: `<article>\n  <h2>Billing details</h2>\n  <p>Invoice paid by card.</p>\n  <hr strength="subtle" />\n  <p>Next invoice: August 1</p>\n</article>`,
    }],
    "components/form": [{
        title: "Invalid state stays discoverable",
        description: "aria-invalid and describedby communicate the problem while the input-error class supplies the visual treatment.",
        preview: `<div class="example-panel"><label for="email-error">Work email</label><input id="email-error" class="form-input input-error" aria-invalid="true" aria-describedby="email-error-message" value="not-an-email" /><small id="email-error-message">Enter a complete email address.</small></div>`,
        code: `<label for="email">Work email</label>\n<input id="email" class="form-input input-error" aria-invalid="true" aria-describedby="email-error-message" />\n<small id="email-error-message">Enter a complete email address.</small>`,
    }],
    "components/identity": [{
        title: "Groups provide a shared accessible label",
        description: "An avatar group exposes one group label while each person retains an individual accessible name.",
        preview: `<div data-avatar-group aria-label="Project contributors"><user-avatar size="sm" aria-label="Avery Gray">AG</user-avatar><user-avatar size="sm" aria-label="Mina Patel">MP</user-avatar><user-avatar size="sm" aria-label="Sam Lee">SL</user-avatar></div>`,
        code: `<div data-avatar-group aria-label="Project contributors">\n  <user-avatar aria-label="Avery Gray">AG</user-avatar>\n  <user-avatar aria-label="Mina Patel">MP</user-avatar>\n  <user-avatar aria-label="Sam Lee">SL</user-avatar>\n</div>`,
    }],
    "components/loading": [{
        title: "Skeletons reserve the final shape",
        description: "Use line and box skeleton hooks to prevent layout jumps while content is loading.",
        preview: `<layout-stack gap="var(--space-xs)" aria-label="Loading profile"><div class="skeleton line"></div><div class="skeleton line"></div><div class="skeleton box"></div></layout-stack>`,
        code: `<div class="skeleton line"></div>\n<div class="skeleton line"></div>\n<div class="skeleton box"></div>`,
    }],
    "components/site-shell": [{
        title: "Sticky and elevated are independent choices",
        description: "Add sticky positioning for persistence and elevation for separation; neither changes landmark semantics.",
        preview: `<header data-site-header sticky elevated><strong>Northstar</strong><nav aria-label="Example"><a href="#home" aria-current="page">Home</a><a href="#settings">Settings</a></nav></header>`,
        code: `<header data-site-header sticky elevated>\n  <a href="/">Northstar</a>\n  <nav aria-label="Primary">...</nav>\n</header>`,
    }],
    "components/status": [{
        title: "Indeterminate progress still communicates work",
        description: "Omit value and max when completion is unknown; provide accessible fallback text inside the native element.",
        preview: `<layout-stack gap="var(--space-sm)"><progress aria-label="Loading results">Loading results</progress><meter min="0" max="1" value="0.34" aria-label="Battery level">34%</meter></layout-stack>`,
        code: `<progress aria-label="Loading results">Loading results</progress>\n<meter min="0" max="1" value="0.34" aria-label="Battery level">34%</meter>`,
    }],
    "components/accessibility": [{
        title: "Focus order follows the document",
        description: "Native controls, visible labels, and a strong focus ring create a keyboard path without tabindex micromanagement.",
        preview: `<form>${panel(`<layout-stack gap="var(--space-sm)"><label>Workspace name <input value="Northstar" /></label><label>Visibility <select><option>Private</option><option>Public</option></select></label><button type="button">Save workspace</button></layout-stack>`)}</form>`,
        code: `<form>\n  <label>Workspace name <input name="workspace" /></label>\n  <label>Visibility <select name="visibility">...</select></label>\n  <button type="submit">Save workspace</button>\n</form>`,
    }],
    "components/astro-components": [{
        title: "Wrappers should emit the public hosts",
        description: "An Astro component can add typed props while rendering markup that also works without Astro.",
        preview: `<article data-card><div data-card-body><div data-card-header>Typed wrapper</div><div data-card-content><p>The browser receives ordinary data-card markup.</p></div><div data-card-footer><badge status="success">Rendered</badge></div></div></article>`,
        code: `---\ninterface Props { title: string; status: "success" | "warning" }\nconst { title, status } = Astro.props;\n---\n<article data-card>\n  <div data-card-header>{title}</div>\n  <badge status={status}>{status}</badge>\n</article>`,
    }],
    "components/box-extra": [{
        title: "Separate recipe inputs from component tokens",
        description: "The mixin establishes structure; semantic tokens keep each callout theme-aware.",
        preview: `<grid columns="repeat(auto-fit,minmax(11rem,1fr))" gap="var(--space-sm)">${panel(`<badge status="info">Tip</badge><p>Use a semantic surface token.</p>`)}${panel(`<badge status="warning">Caution</badge><p>Override the recipe input, not every property.</p>`)}</grid>`,
        code: `.callout {\n  @apply --box(\n    --display: grid,\n    --gap: var(--space-sm),\n    --p: var(--space-lg),\n    --radius: var(--radius-lg)\n  );\n  background: var(--callout-background, var(--surface-info));\n}`,
    }],
    "components/card": [{
        title: "Adaptive cards respond to their container",
        description: "Resize the preview: media moves beside the body when the card container reaches its layout threshold.",
        preview: `<div style="container-type:inline-size;container-name:card-container"><article data-card data-card-layout="adaptive"><div data-card-media style="display:grid;place-items:center;background:var(--accent-muted)"><strong>Media</strong></div><div data-card-body><div data-card-header>Container-aware card</div><div data-card-content><p>Its layout changes from stacked to horizontal based on available card width.</p></div><div data-card-footer><a href="#card-details">Read details</a></div></div></article></div>`,
        code: `<article data-card data-card-layout="adaptive">\n  <div data-card-media><img src="cover.jpg" alt="" /></div>\n  <div data-card-body>\n    <header data-card-header>Container-aware card</header>\n    <div data-card-content>...</div>\n    <footer data-card-footer><a href="/details">Read details</a></footer>\n  </div>\n</article>`,
    }],
    "components/carousel": [{
        title: "Enhancement preserves the scroll fallback",
        description: "Before JavaScript initializes, slides remain horizontally scrollable and controls stay hidden rather than becoming dead UI.",
        preview: `<section data-carousel radius="var(--radius-lg)" aria-label="Feature tour"><div data-carousel-slides><article data-carousel-item>${tile("Semantic markup")}</article><article data-carousel-item>${tile("Scrollable fallback")}</article><article data-carousel-item>${tile("Enhanced controls")}</article></div><button data-carousel-trigger direction="prev" aria-label="Previous slide">‹</button><button data-carousel-trigger direction="next" aria-label="Next slide">›</button></section>`,
        code: `<section data-carousel aria-label="Feature tour">\n  <div data-carousel-slides>\n    <article data-carousel-item>Semantic markup</article>\n    <article data-carousel-item>Scrollable fallback</article>\n  </div>\n  <button data-carousel-trigger direction="prev" aria-label="Previous slide">‹</button>\n  <button data-carousel-trigger direction="next" aria-label="Next slide">›</button>\n</section>`,
    }],
    "components/container": [{
        title: "Container presets can describe different reading widths",
        description: "Each host chooses its maximum width while sharing centering and logical inline padding.",
        preview: `<layout-stack gap="var(--space-md)"><section data-container max-width-xl="32rem" pad="var(--space-sm)">${panel("32rem article measure")}</section><section class="container" max-width-xl="48rem" pad="var(--space-sm)">${panel("48rem application measure")}</section></layout-stack>`,
        code: `<article data-container max-width-xl="32rem" pad="var(--space-md)">\n  Long-form article\n</article>\n\n<main class="container" max-width-xl="48rem" pad="var(--space-md)">\n  Application content\n</main>`,
    }],
    "components/img-container": [{
        title: "Fit and position answer different cropping needs",
        description: "The same source can fill a wide hero, preserve the whole image, or focus a thumbnail crop.",
        preview: `<grid columns="repeat(3,minmax(0,1fr))" gap="var(--space-sm)"><picture data-img-container aspect-ratio="1" object-fit="cover" object-position="left" radius="var(--radius-md)" bg="var(--accent-muted)"><div style="inline-size:180%;block-size:100%;background:linear-gradient(90deg,var(--accent),var(--secondary))"></div></picture><picture data-img-container aspect-ratio="1" object-fit="contain" radius="var(--radius-md)" bg="var(--surface-muted)"><div style="inline-size:60%;block-size:60%;margin:auto;background:var(--accent)"></div></picture><picture data-img-container theme="thumbnail" bg="var(--tertiary-muted)"><div style="block-size:100%;background:radial-gradient(circle at 70% 35%,var(--tertiary),transparent 25%)"></div></picture></grid>`,
        code: `<picture data-img-container aspect-ratio="1" object-fit="cover" object-position="left">...</picture>\n<picture data-img-container aspect-ratio="1" object-fit="contain">...</picture>\n<picture data-img-container theme="thumbnail">...</picture>`,
    }],
    "components/list": [{
        title: "Inline lists and dividers still use list semantics",
        description: "Change presentation without flattening meaningful list items into unrelated spans.",
        preview: `<ul data-list inline gap="var(--space-sm)" aria-label="Article topics"><li data-list-item type="#">CSS</li><li data-list-divider aria-hidden="true"></li><li data-list-item type="#">Accessibility</li><li data-list-divider aria-hidden="true"></li><li data-list-item type="#">Design systems</li></ul>`,
        code: `<ul data-list inline aria-label="Article topics">\n  <li data-list-item type="#">CSS</li>\n  <li data-list-divider aria-hidden="true"></li>\n  <li data-list-item type="#">Accessibility</li>\n</ul>`,
    }],
    "components/masonry": [{
        title: "Source order remains the reading order",
        description: "Numbering exposes the fallback's down-then-across flow while keeping the DOM and keyboard sequence authoritative.",
        preview: `<section data-masonry column-width="9rem" gap="var(--space-sm)">${tile("1 · First")}${tile("2 · Second, with enough supporting copy to become taller")}${tile("3 · Third")}${tile("4 · Fourth, with a second line")}${tile("5 · Fifth")}${tile("6 · Sixth and final")}</section>`,
        code: `<section data-masonry column-width="14rem">\n  <article>1 · First in reading order</article>\n  <article>2 · Second, with more content</article>\n  <article>3 · Third in reading order</article>\n</section>`,
    }, {
        title: "Cap columns without losing responsiveness",
        description: "columns sets a maximum while column-width still lets the layout reduce its count as the preview narrows.",
        preview: `<section class="masonry-layout" columns="3" column-width="8rem" gap="var(--space-sm)">${tile("Maximum three columns")}${tile("This card is taller because it explains the responsive cap in a little more detail.")}${tile("Resize the right edge")}${tile("No media query")}${tile("One column when needed")}</section>`,
        code: `<section\n  class="masonry-layout"\n  columns="3"\n  column-width="12rem"\n  gap="var(--space-sm)"\n>\n  ...\n</section>`,
    }, {
        title: "Theme the layout through component tokens",
        description: "Hierarchical variables provide a reusable recipe while attributes remain available for one-off instances.",
        preview: `<section data-masonry style="--masonry-column-width:10rem;--masonry-gap:var(--space-xs);--masonry-fill:balance">${tile("Compact")}${tile("A denser gallery recipe with a smaller shared gap")}${tile("Token first")}${tile("Still responsive")}${tile("Customizable")}</section>`,
        code: `.compact-waterfall {\n  --masonry-column-width: 10rem;\n  --masonry-gap: var(--space-xs);\n  --masonry-fill: balance;\n}`,
    }],
    "components/modal": [{
        title: "Theme the surface without replacing dialog behavior",
        description: "Component tokens control width, surface, border, radius, and backdrop while the browser retains focus and Escape handling.",
        preview: `<div class="example-panel" style="--modal-width:28rem;--modal-radius:var(--radius-xl);--modal-border-color:var(--accent)"><layout-stack gap="var(--space-sm)"><strong>Modal token inputs</strong><code>--modal-width: 28rem</code><code>--modal-radius: var(--radius-xl)</code><code>--modal-backdrop-blur: 4px</code></layout-stack></div>`,
        code: `dialog[data-modal] {\n  --modal-width: 28rem;\n  --modal-radius: var(--radius-xl);\n  --modal-border-color: var(--accent);\n  --modal-backdrop-blur: 4px;\n}`,
    }],
    "components/popover": [{
        title: "Auto, manual, and hint modes express lifecycle",
        description: "Choose behavior in markup; do not simulate a modal by styling an ordinary popover.",
        preview: `<grid columns="repeat(3,minmax(0,1fr))" gap="var(--space-sm)">${panel(`<strong>auto</strong><p class="example-muted">Light dismiss</p>`)}${panel(`<strong>manual</strong><p class="example-muted">Explicit control</p>`)}${panel(`<strong>hint</strong><p class="example-muted">Nonessential hint</p>`)}</grid>`,
        code: `<div popover="auto" id="menu">Light-dismiss menu</div>\n<div popover="manual" id="teaching-ui">Persistent teaching UI</div>\n<div popover="hint" id="hint">Nonessential hint</div>`,
    }],
    "components/table": [{
        title: "Sortable metrics expose state on the header",
        description: "The live buttons reorder rows and move aria-sort to the active column; CSS only supplies the full-cell control and state icon.",
        preview: `<data-table tabindex="0" aria-label="Sortable regional revenue"><table data-sortable><caption>Regional revenue · Activate a heading to sort</caption><thead><tr><th scope="col">Region</th><th scope="col" aria-sort="descending"><button type="button" data-table-sort data-sort-type="number">Revenue <span data-sort-icon aria-hidden="true"></span></button></th><th scope="col"><button type="button" data-table-sort data-sort-type="number">Growth <span data-sort-icon aria-hidden="true"></span></button></th></tr></thead><tbody><tr><th scope="row">North America</th><td data-numeric data-sort-value="184200">$184,200</td><td data-numeric data-sort-value="12.4">+12.4%</td></tr><tr><th scope="row">Europe</th><td data-numeric data-sort-value="152800">$152,800</td><td data-numeric data-sort-value="8.7">+8.7%</td></tr><tr><th scope="row">Asia Pacific</th><td data-numeric data-sort-value="131600">$131,600</td><td data-numeric data-sort-value="18.2">+18.2%</td></tr><tr><th scope="row">Latin America</th><td data-numeric data-sort-value="98400">$98,400</td><td data-numeric data-sort-value="6.1">+6.1%</td></tr></tbody></table></data-table>`,
        code: `<th scope="col" aria-sort="descending">\n  <button type="button" data-table-sort>\n    Revenue <span data-sort-icon aria-hidden="true"></span>\n  </button>\n</th>\n\n<td data-numeric data-sort-value="184200">$184,200</td>`,
    }, {
        title: "Footers and numeric alignment make totals scannable",
        description: "tfoot separates the summary from the body while data-numeric aligns currency with tabular figures.",
        preview: `<data-table bordered tabindex="0" aria-label="Monthly subscription forecast"><table><caption>August subscription forecast</caption><thead><tr><th scope="col">Plan</th><th scope="col" data-numeric>Accounts</th><th scope="col" data-numeric>MRR</th><th scope="col" data-numeric>Change</th></tr></thead><tbody><tr><th scope="row">Starter</th><td data-numeric>1,842</td><td data-numeric>$27,630</td><td data-numeric>+4.2%</td></tr><tr><th scope="row">Team</th><td data-numeric>684</td><td data-numeric>$68,400</td><td data-numeric>+7.8%</td></tr><tr><th scope="row">Business</th><td data-numeric>126</td><td data-numeric>$31,500</td><td data-numeric>+2.1%</td></tr></tbody><tfoot><tr><th scope="row">Total</th><td data-numeric>2,652</td><td data-numeric>$127,530</td><td data-numeric>+5.6%</td></tr></tfoot></table></data-table>`,
        code: `<tfoot>\n  <tr>\n    <th scope="row">Total</th>\n    <td data-numeric>2,652</td>\n    <td data-numeric>$127,530</td>\n    <td data-numeric>+5.6%</td>\n  </tr>\n</tfoot>`,
    }, {
        title: "Grouped headers describe a real comparison",
        description: "colgroup and rowgroup scopes preserve relationships when one header spans several related metrics.",
        preview: `<data-table tabindex="0" aria-label="Support team performance" style="--table-min-width:38rem"><table data-table class="table-striped"><caption>Support performance · last 30 days</caption><thead><tr><th scope="col" rowspan="2">Team</th><th scope="colgroup" colspan="2">Volume</th><th scope="colgroup" colspan="2">Quality</th></tr><tr><th scope="col" data-numeric>Received</th><th scope="col" data-numeric>Resolved</th><th scope="col" data-numeric>CSAT</th><th scope="col" data-numeric>SLA</th></tr></thead><tbody><tr><th scope="row">Americas</th><td data-numeric>1,284</td><td data-numeric>1,196</td><td data-numeric>94%</td><td data-numeric>88%</td></tr><tr><th scope="row">Europe</th><td data-numeric>968</td><td data-numeric>941</td><td data-numeric>96%</td><td data-numeric>92%</td></tr><tr><th scope="row">Asia Pacific</th><td data-numeric>742</td><td data-numeric>704</td><td data-numeric>93%</td><td data-numeric>86%</td></tr></tbody></table></data-table>`,
        code: `<thead>\n  <tr>\n    <th scope="col" rowspan="2">Team</th>\n    <th scope="colgroup" colspan="2">Volume</th>\n    <th scope="colgroup" colspan="2">Quality</th>\n  </tr>\n  <tr>\n    <th scope="col">Received</th>\n    <th scope="col">Resolved</th>\n    <th scope="col">CSAT</th>\n    <th scope="col">SLA</th>\n  </tr>\n</thead>`,
    }],
    "components/tabs": [{
        title: "Orientation changes both layout and keyboard expectations",
        description: "Vertical tabs declare aria-orientation; behavior should respond with Up and Down Arrow navigation.",
        preview: `<div style="display:grid;grid-template-columns:auto 1fr;gap:var(--space-md)"><div role="tablist" aria-label="Settings" aria-orientation="vertical"><button role="tab" aria-selected="true">General</button><button role="tab" aria-selected="false" tabindex="-1">Members</button><button role="tab" aria-selected="false" tabindex="-1">Billing</button></div><section role="tabpanel"><h3>General</h3><p class="example-muted">Workspace name and visibility.</p></section></div>`,
        code: `<div role="tablist" aria-label="Settings" aria-orientation="vertical">\n  <button role="tab" aria-selected="true">General</button>\n  <button role="tab" aria-selected="false" tabindex="-1">Members</button>\n</div>\n<section role="tabpanel">General settings</section>`,
    }],
    "components/tooltip": [{
        title: "Placement is a presentation choice",
        description: "Hover or focus each trigger to compare all four placements with the same short-text API.",
        preview: `<layout-cluster justify="center" gap="var(--space-xl)" style="padding:3rem"><tooltip content="Top hint" place="top"><button>Top</button></tooltip><tooltip content="Right hint" place="right"><button>Right</button></tooltip><tooltip content="Bottom hint" place="bottom"><button>Bottom</button></tooltip><tooltip content="Left hint" place="left"><button>Left</button></tooltip></layout-cluster>`,
        code: `<tooltip content="Top hint" place="top"><button>Top</button></tooltip>\n<tooltip content="Right hint" place="right"><button>Right</button></tooltip>\n<tooltip content="Bottom hint" place="bottom"><button>Bottom</button></tooltip>\n<tooltip content="Left hint" place="left"><button>Left</button></tooltip>`,
    }],
    "components/view-transition": [{
        title: "Native links are the cross-document API",
        description: "The transition is progressive: navigation still works when the browser does not animate it.",
        preview: `<nav aria-label="Product pages"><layout-cluster><a href="#product-one">Product one</a><a href="#product-two">Product two</a></layout-cluster></nav>${panel(`<strong style="view-transition-name:product-title">Shared product title</strong><p class="example-muted">Unique names connect matching elements.</p>`)}`,
        code: `@view-transition { navigation: auto; }\n\n.product-title { view-transition-name: product-title; }\n\n@media (prefers-reduced-motion: reduce) {\n  ::view-transition-group(*) { animation-duration: 0s; }\n}`,
    }],
    "core/base": [{
        title: "Tokens form a semantic chain",
        description: "Components consume role tokens, so changing one theme input updates related surfaces without component rewrites.",
        preview: `<layout-stack gap="var(--space-sm)"><div class="example-swatch" style="background:var(--base)">--base</div><div class="example-swatch" style="background:var(--surface-subtle)">--surface-subtle</div><div class="example-swatch" style="background:var(--surface-overt)">--surface-overt</div></layout-stack>`,
        code: `:root {\n  --base: oklch(98% 0.01 250);\n  --surface-subtle: color-mix(in oklch, var(--base), black 3%);\n}\n\n.card { background: var(--surface-subtle); }`,
    }],
    "core/defaults": [{
        title: "Native content carries hierarchy without wrappers",
        description: "Lists, quotes, code, marks, and abbreviations receive coherent defaults inside rich content.",
        preview: `<article class="prose"><blockquote>Good defaults make the semantic path the easy path.</blockquote><ul><li>Readable rhythm</li><li><mark>Visible emphasis</mark></li></ul><p><abbr title="Cascading Style Sheets">CSS</abbr> remains native HTML.</p></article>`,
        code: `<article class="prose">\n  <blockquote>Good defaults make semantics easy.</blockquote>\n  <ul><li>Readable rhythm</li><li><mark>Visible emphasis</mark></li></ul>\n  <p><abbr title="Cascading Style Sheets">CSS</abbr> remains native HTML.</p>\n</article>`,
    }],
    "core/text": [{
        title: "Measure and wrapping are independent controls",
        description: "Use readable measures for prose and deliberate balance or pretty wrapping for headings and body copy.",
        preview: `<layout-stack gap="var(--space-sm)"><text variant="eyebrow">Release notes</text><text display="block" size="2xl" weight="bold" measure="heading" wrap="balance">A heading balanced across the available measure</text><text display="block" measure="body" wrap="pretty">Supporting prose uses a wider readable measure and avoids awkward final-line fragments.</text></layout-stack>`,
        code: `<text variant="eyebrow">Release notes</text>\n<text display="block" size="2xl" weight="bold" measure="heading" wrap="balance">\n  A heading balanced across the available measure\n</text>\n<text display="block" measure="body" wrap="pretty">Supporting prose...</text>`,
    }],
    "guides/color-system": [{
        title: "Feedback roles pair surface and text tokens",
        description: "Each state uses a matching contrast token instead of assuming one foreground works on every tint.",
        preview: `<grid columns="repeat(2,minmax(0,1fr))" gap="var(--space-sm)"><div class="example-panel" style="background:var(--surface-success);color:var(--text-success)">Success pair</div><div class="example-panel" style="background:var(--surface-warning);color:var(--text-warning)">Warning pair</div><div class="example-panel" style="background:var(--surface-error);color:var(--text-error)">Error pair</div><div class="example-panel" style="background:var(--surface-info);color:var(--text-info)">Info pair</div></grid>`,
        code: `.success { background: var(--surface-success); color: var(--text-success); }\n.warning { background: var(--surface-warning); color: var(--text-warning); }\n.error { background: var(--surface-error); color: var(--text-error); }\n.info { background: var(--surface-info); color: var(--text-info); }`,
    }],
    "guides/philosophy": [{
        title: "ARIA state can be the component API",
        description: "A switch communicates and styles its state through aria-checked instead of duplicating state in a visual class.",
        preview: `<layout-stack gap="var(--space-sm)"><label class="stack-intrinsic"><span>Email notifications</span><input type="checkbox" role="switch"></label><label class="stack-intrinsic"><span>Security alerts</span><input type="checkbox" role="switch" checked></label></layout-stack>`,
        code: `<label>\n  <span>Email notifications</span>\n  <input type="checkbox" role="switch">\n</label>\n<label>\n  <span>Security alerts</span>\n  <input type="checkbox" role="switch" checked>\n</label>`,
    }],
    "guides/theming": [{
        title: "Override semantic roles at the narrowest boundary",
        description: "A campaign region can change accent inputs while feedback states keep their established meaning.",
        preview: `<section class="example-panel" style="--accent:oklch(58% .18 330)"><layout-stack gap="var(--space-sm)"><button class="form-button btn-primary">Campaign action</button><layout-cluster><badge status="success">Success stays success</badge><badge status="warning">Warning stays warning</badge></layout-cluster></layout-stack></section>`,
        code: `.campaign { --accent: oklch(58% 0.18 330); }\n\n<section class="campaign">\n  <button class="btn-primary">Campaign action</button>\n  <badge status="success">Success stays success</badge>\n</section>`,
    }],
    "guides/typescript": [{
        title: "Type adapters with the same public interfaces",
        description: "The declaration file can type wrapper props without inventing a second component contract.",
        preview: `${panel(`<layout-stack gap="var(--space-sm)"><strong>One interface</strong><code>CSSTags.GridAttributes</code><code>CSSTags.BadgeAttributes</code><badge status="success">Wrapper props checked</badge></layout-stack>`)}`,
        code: `type BadgeProps = CSSTags.BadgeAttributes & { children?: React.ReactNode };\n\nfunction Badge(props: BadgeProps) {\n  return <badge {...props} />;\n}`,
    }],
    "js/carousel": [{
        title: "Initialization adds state, not structure",
        description: "The script updates inert slides, control availability, and the initialized marker on existing semantic markup.",
        preview: `${panel(`<layout-stack gap="var(--space-sm)"><code>data-carousel-initialized="true"</code><code>aria-hidden="true" + inert</code><code>disabled previous/next controls</code></layout-stack>`)}`,
        code: `import { initializeCarousels } from "css-tags/carousel.js";\n\ninitializeCarousels(document);\n// Re-run for newly inserted application fragments.`,
    }],
    "js/view-transition": [{
        title: "The enhancement synchronizes URL, focus, and state",
        description: "After activation, the current trigger and visible page agree with the hash and focus moves to the new heading region.",
        preview: `${panel(`<layout-stack gap="var(--space-sm)"><code>href="#activity"</code><code>aria-current="page"</code><code>section[active][tabindex="-1"]</code></layout-stack>`)}`,
        code: `import "css-tags/view-transition.js";\n\n// Native hash links remain the fallback.\n// The module enhances history, aria-current, visibility, and focus.`,
    }],
    "layouts/layout-extra": [{
        title: "Sidebar recipes preserve a useful main minimum",
        description: "The sidebar stays intrinsic while the main region receives the remaining width and can wrap below it when constrained.",
        preview: `<div style="display:grid;grid-template-columns:minmax(9rem,.3fr) minmax(min(18rem,100%),1fr);gap:var(--space-md)"><aside class="example-panel">Filters</aside><section class="example-panel"><strong>Results remain readable</strong><p class="example-muted">Resize to inspect the relationship.</p></section></div>`,
        code: `.search-layout {\n  @apply --layout-sidebar(\n    --sidebar-width: 16rem,\n    --main-min-width: 24rem,\n    --gap: var(--space-lg)\n  );\n}`,
    }],
    "layouts/layout-extras-helpers": [{
        title: "Density is an input, not a component variant",
        description: "The same stack and controls become compact through inherited spacing inputs while their semantics remain unchanged.",
        preview: `<grid columns="repeat(2,minmax(0,1fr))" gap="var(--space-md)"><layout-stack><strong>Comfortable</strong><button>First action</button><button>Second action</button></layout-stack><layout-stack data-density="compact" style="--l-gap:var(--space-2xs)"><strong>Compact</strong><button>First action</button><button>Second action</button></layout-stack></grid>`,
        code: `<layout-stack>...</layout-stack>\n\n<layout-stack data-density="compact">...</layout-stack>`,
    }],
    "reference/api": [{
        title: "Attributes accept real CSS values",
        description: "Tokens, functions, and compound track definitions flow through the declarative API without narrow enumerations.",
        preview: `<grid columns="repeat(auto-fit,minmax(min(8rem,100%),1fr))" gap="clamp(.5rem,2vw,1rem)">${tile("CSS function")}${tile("Custom token")}${tile("Compound value")}</grid>`,
        code: `<grid\n  columns="repeat(auto-fit, minmax(min(8rem, 100%), 1fr))"\n  gap="clamp(.5rem, 2vw, 1rem)"\n>...</grid>`,
    }],
    "themes/example-brand": [{
        title: "Brand themes update a complete component set",
        description: "Inspect text, surface, accent, and feedback roles together instead of judging a theme from one button.",
        preview: `<section data-theme="ocean" class="example-panel"><layout-stack gap="var(--space-sm)"><h3>Ocean workspace</h3><p class="example-muted">Semantic surfaces share the brand.</p><layout-cluster><button class="btn-primary">Continue</button><badge status="success">Healthy</badge><badge status="warning">2 warnings</badge></layout-cluster></layout-stack></section>`,
        code: `<section data-theme="ocean">\n  <h2>Ocean workspace</h2>\n  <button class="btn-primary">Continue</button>\n  <badge status="success">Healthy</badge>\n</section>`,
    }],
    "themes/theme-packs": [{
        title: "One pack should cover ordinary and feedback UI",
        description: "A viable pack coordinates neutral surfaces and semantic states, not only the primary accent.",
        preview: `<div data-theme="forest" class="example-panel"><layout-stack gap="var(--space-sm)"><button class="btn-primary">Primary</button><layout-cluster><badge variant="subtle">Neutral</badge><badge status="info">Info</badge><badge status="error">Error</badge></layout-cluster></layout-stack></div>`,
        code: `<div data-theme="forest">\n  <button class="btn-primary">Primary</button>\n  <badge variant="subtle">Neutral</badge>\n  <badge status="info">Info</badge>\n  <badge status="error">Error</badge>\n</div>`,
    }],
    "utilities/utilities": [{
        title: "Utilities should describe one orthogonal concern",
        description: "State hooks layer onto a semantic control without replacing its component or accessibility contract.",
        preview: `<layout-stack gap="var(--space-sm)"><button class="focus-ring hover-highlight">Keyboard and pointer states</button><div class="example-panel"><span class="sr-only">Screen-reader context:</span> Visible content remains semantic.</div></layout-stack>`,
        code: `<button class="focus-ring hover-highlight">Keyboard and pointer states</button>\n\n<span class="sr-only">Additional screen-reader context</span>`,
    }],
    "reference/index-css": [{
        title: "Layer order explains where to customize",
        description: "Tokens feed themes, components consume those roles, and unlayered application CSS can make deliberate final overrides.",
        preview: `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:.25rem;text-align:center"><div class="example-tile">tokens</div><div class="example-tile">theme</div><div class="example-tile">defaults</div><div class="example-tile">components</div><div class="example-tile">layouts</div></div>`,
        code: `@layer base, reset, tokens, engine, theme, palette, defaults, components, utilities, layouts;\n@import url("css-tags/index.css");\n\n/* Unlayered application CSS wins intentionally. */`,
    }],
};

/* Second-pass lessons for APIs that are easy to miss when reading the short form. */
const advancedSupplementalExamples: Record<string, PageExampleLesson[]> = {
    "components/alert": [{
        title: "Slots make alert anatomy explicit",
        description: "Use the named slots when a richer alert needs an icon, title, body, and action row without relying on child order.",
        preview: `<alert-message status="success"><span slot="icon" aria-hidden="true">✓</span><strong slot="title">Export complete</strong><span slot="body">Your CSV is ready to download.</span><span slot="actions"><button type="button">Download</button></span></alert-message>`,
        code: `<alert-message status="success">\n  <span slot="icon" aria-hidden="true">✓</span>\n  <strong slot="title">Export complete</strong>\n  <span slot="body">Your CSV is ready to download.</span>\n  <span slot="actions"><button type="button">Download</button></span>\n</alert-message>`,
    }],
    "components/content-patterns": [{
        title: "Content headers use named regions, not wrapper conventions",
        description: "The same pattern supports media, body, metadata, and actions in any order while preserving a readable source structure.",
        preview: `<article data-content-header><user-avatar slot="media" size="lg" aria-label="CSS Tags">CT</user-avatar><div slot="body"><h3>CSS Tags release</h3><p>Semantic primitives with a smaller API surface.</p></div><div slot="meta"><span>Today</span><badge status="success">Ready</badge></div><div slot="actions"><button type="button">Share</button><button type="button">Open</button></div></article>`,
        code: `<article data-content-header>\n  <user-avatar slot="media" aria-label="CSS Tags">CT</user-avatar>\n  <div slot="body"><h2>CSS Tags release</h2><p>Semantic primitives.</p></div>\n  <div slot="meta"><span>Today</span><badge status="success">Ready</badge></div>\n  <div slot="actions"><button type="button">Share</button></div>\n</article>`,
    }],
    "components/disclosure": [{
        title: "Accordion state stays native",
        description: "A data-accordion groups details elements while each summary remains independently keyboard accessible.",
        preview: `<div data-accordion><details open><summary>Shipping</summary><p>Ships in 2–3 business days.</p></details><details><summary>Returns</summary><p>Returns are accepted within 30 days.</p></details></div>`,
        code: `<div data-accordion>\n  <details open>\n    <summary>Shipping</summary>\n    <p>Ships in 2–3 business days.</p>\n  </details>\n  <details><summary>Returns</summary><p>30-day returns.</p></details>\n</div>`,
    }],
    "components/identity": [{
        title: "Square avatars are an intentional variant",
        description: "Use shape only when the identity belongs to a product, team, or object rather than a person.",
        preview: `<layout-cluster align="center" gap="var(--space-md)"><user-avatar shape="square" size="lg" aria-label="Northstar workspace">N</user-avatar><user-avatar shape="square" size="sm" aria-label="CSS Tags">CT</user-avatar><span>Object identity</span></layout-cluster>`,
        code: `<user-avatar shape="square" size="lg" aria-label="Northstar workspace">N</user-avatar>\n<user-avatar shape="square" size="sm" aria-label="CSS Tags">CT</user-avatar>`,
    }],
    "components/loading": [{
        title: "Overlay loading preserves the region underneath",
        description: "Use the overlay spinner when content remains meaningful but should be temporarily unavailable during refresh.",
        preview: `<article aria-busy="true" data-spinner="overlay" class="example-panel"><h3>Activity</h3><p>Loading the latest events…</p></article>`,
        code: `<article aria-busy="true" data-spinner="overlay">\n  <h2>Activity</h2>\n  <p>Loading the latest events…</p>\n</article>`,
    }],
    "components/table": [{
        title: "Sticky headers belong to a constrained scroll region",
        description: "The wrapper owns both axes of overflow while native header cells stay visible during a long inventory review.",
        preview: `<data-table sticky-header striped density="compact" tabindex="0" aria-label="Scrollable low-stock inventory" style="--table-max-block-size:13rem;--table-min-width:34rem"><table><caption>Low-stock inventory</caption><thead><tr><th scope="col">SKU</th><th scope="col">Product</th><th scope="col" data-numeric>On hand</th><th scope="col" data-numeric>Reorder at</th><th scope="col">Supplier</th></tr></thead><tbody><tr><th scope="row">ST-204</th><td>Studio headphones</td><td data-numeric>7</td><td data-numeric>12</td><td>Signal Co.</td></tr><tr><th scope="row">KB-118</th><td>Compact keyboard</td><td data-numeric>4</td><td data-numeric>10</td><td>North Input</td></tr><tr><th scope="row">LM-042</th><td>Monitor light</td><td data-numeric>9</td><td data-numeric>15</td><td>Luma Works</td></tr><tr><th scope="row">DS-730</th><td>Desk shelf</td><td data-numeric>2</td><td data-numeric>8</td><td>Oakline</td></tr><tr><th scope="row">CM-315</th><td>USB microphone</td><td data-numeric>6</td><td data-numeric>10</td><td>Signal Co.</td></tr><tr><th scope="row">AR-510</th><td>Monitor arm</td><td data-numeric>3</td><td data-numeric>9</td><td>Frame Labs</td></tr></tbody></table></data-table>`,
        code: `<data-table sticky-header tabindex="0"\n  aria-label="Scrollable low-stock inventory"\n  style="--table-max-block-size: 18rem; --table-min-width: 42rem">\n  <table>...</table>\n</data-table>`,
    }, {
        title: "Empty results remain part of the table",
        description: "A spanning message cell preserves the columns and gives filters a clear recovery action instead of replacing the table with unrelated markup.",
        preview: `<data-table tabindex="0" aria-label="Filtered invoice results"><table data-table class="table-borderless"><caption>Invoices · Status: overdue · Customer: Northstar</caption><thead><tr><th scope="col">Invoice</th><th scope="col">Customer</th><th scope="col">Due</th><th scope="col" data-numeric>Total</th></tr></thead><tbody><tr><td colspan="4" data-table-message><strong>No matching invoices</strong><br /><span class="example-muted">Clear one or more filters to see results.</span><br /><button type="button">Clear filters</button></td></tr></tbody></table></data-table>`,
        code: `<tbody>\n  <tr>\n    <td colspan="4" data-table-message>\n      <strong>No matching invoices</strong>\n      <p>Clear one or more filters to see results.</p>\n      <button type="button">Clear filters</button>\n    </td>\n  </tr>\n</tbody>`,
    }],
    "components/tabs": [{
        title: "Disabled tabs remain discoverable",
        description: "aria-disabled communicates availability while the tablist keeps the disabled item in the navigation model.",
        preview: `<div role="tablist" aria-label="Billing"><button role="tab" aria-selected="true" aria-controls="plan-panel">Plan</button><button role="tab" aria-selected="false" aria-controls="invoice-panel" tabindex="-1">Invoices</button><button role="tab" aria-disabled="true">Payment method</button></div><section role="tabpanel" id="plan-panel"><h3>Team plan</h3><p>5 seats · billed monthly</p></section>`,
        code: `<div role="tablist" aria-label="Billing">\n  <button role="tab" aria-selected="true" aria-controls="plan-panel">Plan</button>\n  <button role="tab" aria-selected="false" tabindex="-1">Invoices</button>\n  <button role="tab" aria-disabled="true">Payment method</button>\n</div>`,
    }],
};

for (const [key, lessons] of Object.entries(advancedSupplementalExamples)) {
    supplementalExamples[key] = [...(supplementalExamples[key] ?? []), ...lessons];
}
