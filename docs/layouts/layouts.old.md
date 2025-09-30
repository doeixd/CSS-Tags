# Legacy Layout Classes (`layouts/layouts.old.css`)

This file contains the previous implementation of the layout system using traditional CSS classes instead of custom HTML elements. It provides the same layout patterns as the modern version but with a `.l-*` naming convention.

## Important Notice

This is the legacy version of the layout system. The modern implementation in `layout.css` uses custom elements (`<layout-*>`) for better semantics and maintainability. This file is kept for backward compatibility.

## General Container

### `.l-container`

Establishes a container query context for responsive layouts.

**CSS Properties:**
- `--l-container-type`: Container type (default: `inline-size`)
- `--l-container-name`: Container name (default: `layout`)

**Styles:**
```css
container-type: var(--l-container-type, inline-size);
container-name: var(--l-container-name, layout);
```

## Grid Layouts

### `.l-grid`

Responsive grid that automatically fits columns.

**CSS Properties:**
- `--l-grid-gap`: Gap between items (default: `var(--space-md)`)
- `--l-grid-min-item-size`: Minimum item size (default: `15rem`)

**Features:**
- Container queries for responsive columns
- Prevents child overflow with `min-width: 0`

### `.l-two-col`

Two-column layout that stacks on small screens.

**CSS Properties:**
- `--l-two-col-gap`: Gap between columns (default: `var(--space-lg)`)
- `--l-two-col-breakpoint`: Breakpoint for stacking (default: `var(--cq-bp-sm, 30em)`)

### `.l-split`

Split layout with customizable column ratio.

**CSS Properties:**
- `--l-split-gap`: Gap between columns (default: `var(--space-lg)`)
- `--l-split-breakpoint`: Breakpoint for stacking (default: `var(--cq-bp-sm, 30em)`)
- `--l-split-fraction`: Column ratio (default: `1fr`)

**Modifiers:**
- `.l-split--no-stack`: Prevents stacking

## Flexbox Layouts

### `.l-row`

Flexible row that stacks on small screens.

**CSS Properties:**
- `--l-row-wrap`: Flex wrap (default: `wrap`)
- `--l-row-gap`: Gap between items (default: `var(--space-md)`)
- `--l-row-stack-breakpoint`: Breakpoint for stacking (default: `var(--cq-bp-xs, 20em)`)
- `--l-row-direction`: Flex direction (default: `row`)
- `--l-row-align`: Align items (default: `center`)
- `--l-row-justify`: Justify content (default: `flex-start`)
- `--l-row-align-stacked`: Alignment when stacked (default: `stretch`)

**Modifiers:**
- `.l-row--force-stack`: Forces stacked layout
- `.l-row--no-stack`: Prevents stacking

### `.l-stack`

Vertical stack layout.

**CSS Properties:**
- `--l-stack-justify`: Justify content (default: `flex-start`)
- `--l-stack-align`: Align items (default: `stretch`)
- `--l-stack-gap`: Gap between items (default: `var(--space-md)`)

### `.l-cluster`

Groups items that wrap with consistent spacing.

**CSS Properties:**
- `--l-cluster-gap`: Gap between items (default: `var(--space-sm)`)
- `--l-cluster-justify`: Justify content (default: `flex-start`)
- `--l-cluster-align`: Align items (default: `center`)

### `.l-reel`

Horizontal scrolling container.

**CSS Properties:**
- `--l-reel-gap`: Gap between items (default: `var(--space-md)`)
- `--l-reel-item-max-height`: Max height for images (default: `100%`)

**Modifiers:**
- `.l-reel--no-scrollbar`: Hides scrollbars

### `.l-switcher`

Switches between stack and row based on available space.

**CSS Properties:**
- `--l-switcher-gap`: Gap between items (default: `var(--space-sm)`)
- `--l-switcher-threshold`: Space threshold (default: `20rem`)

### `.l-spread`

Distributes items with space between.

**CSS Properties:**
- `--l-spread-direction`: Flex direction (default: `row`)
- `--l-spread-align`: Align items (default: `center`)
- `--l-spread-gap`: Gap between items (default: `var(--space-md)`)

## Wrapper Components

### `.l-pad`

Adds padding to content.

**CSS Properties:**
- `--l-pad-padding`: Padding value (default: `var(--space-md)`)
- `--l-pad-padding-x`: Horizontal padding
- `--l-pad-padding-y`: Vertical padding

### `.l-center-content`

Centers content with max-width.

**CSS Properties:**
- `--l-center-content-max-width`: Max width (default: `var(--width-container-max, 60ch)`)
- `--l-center-content-gutter`: Side padding (default: `0`)
- `--l-center-content-text-align`: Text alignment (default: `initial`)

### `.l-cover`

Full-area content cover.

**CSS Properties:**
- `--l-cover-place-content`: Place content (default: `center`)
- `--l-cover-place-items`: Place items (default: `center`)
- `--l-cover-padding`: Padding (default: `var(--space-lg)`)
- `--l-cover-min-height`: Min height (default: `50vh`)
- `--l-cover-text-align`: Text alignment (default: `center`)

### `.l-frame`

Aspect ratio container for media.

**CSS Properties:**
- `--l-frame-ratio`: Aspect ratio (default: `16 / 9`)
- `--l-frame-object-fit`: Object fit (default: `cover`)
- `--l-frame-object-position`: Object position (default: `center`)

### `.l-center`

Centers content both horizontally and vertically.

**CSS Properties:**
- `--l-center-justify`: Justify content (default: `center`)
- `--l-center-align`: Align items (default: `center`)
- `--l-center-min-height`: Min height (default: `auto`)
- `--l-center-padding`: Padding (default: `0`)

**Modifiers:**
- `.l-center--h`: Horizontal centering only
- `.l-center--v`: Vertical centering only

## Complex Layouts

### `.l-sidebar`

Sidebar layout with responsive behavior.

**CSS Properties:**
- `--l-sidebar-gap`: Gap between areas (default: `var(--space-lg)`)
- `--l-sidebar-breakpoint`: Breakpoint (default: `var(--cq-bp-md, 45em)`)
- `--l-sidebar-width`: Sidebar width (default: `minmax(15rem, 25%)`)

**Structure:**
```html
<div class="l-sidebar">
  <main>Main content</main>
  <aside class="l-sidebar__aside">Sidebar</aside>
</div>
```

**Modifiers:**
- `.l-sidebar--right`: Right-positioned sidebar

### `.l-standard-page`

Standard page layout with header, main, footer.

**CSS Properties:**
- `--l-standard-page-min-height`: Min height (default: `100vh`)
- `--l-standard-page-gap`: Gap between sections (default: `0`)

**Structure:**
```html
<div class="l-standard-page">
  <header class="l-standard-page__header">Header</header>
  <main class="l-standard-page__main">Main</main>
  <footer class="l-standard-page__footer">Footer</footer>
</div>
```

### `.l-media`

Media object pattern (image + content).

**CSS Properties:**
- `--l-media-align`: Alignment (default: `flex-start`)
- `--l-media-gap`: Gap between media and content (default: `var(--space-md)`)

**Modifiers:**
- `.l-media--reverse`: Reverses order

### `.l-tabs`

Tab layout with panels.

**CSS Properties:**
- `--l-tabs-gap`: Gap between elements (default: `var(--space-md)`)
- `--l-tabs-side-width`: Width for side tabs (default: `max-content`)

**Structure:**
```html
<div class="l-tabs">
  <nav class="l-tabs__list">Tab list</nav>
  <div class="l-tabs__panel">Tab content</div>
</div>
```

**Modifiers:**
- `.l-tabs--bottom`: Tabs at bottom
- `.l-tabs--left`: Tabs on left
- `.l-tabs--right`: Tabs on right

## Browser Support

- Container queries require recent browsers
- Flexbox and Grid support needed
- All modern browsers with CSS custom properties

## Migration Notes

This legacy system uses classes like `.l-grid` instead of `<layout-grid>`. For new projects, prefer the custom element approach in `layout.css` for better semantics and maintainability.

## Related Files

- `layouts/layout.css`: Modern custom element implementation
- `core/base.css`: Defines spacing and breakpoint tokens