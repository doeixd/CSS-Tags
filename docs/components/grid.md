# Grid Component Documentation

## Overview
The `grid` component provides a comprehensive, declarative CSS Grid system with advanced features like named areas, subgrid support, experimental gap decorations, and progressive enhancement for CSS Grid Lanes. It allows complex two-dimensional layouts through HTML attributes.

## Key Features
- **Declarative API**: Configure grid properties via HTML attributes
- **Named Areas**: Template areas for semantic layouts
- **Grid Lanes**: Opt into `display: grid-lanes` for masonry-style lane packing when supported
- **Named Grid Lines**: Use line names in template tracks and place items by line name
- **Subgrid Support**: Nested grids that align with parent tracks
- **Item Placement**: Individual control over grid item positioning
- **Gap Decorations**: Experimental styling of grid lines (limited browser support)

## Container Attributes

### Template Definition
- `display`: Grid display mode override (default: `grid`)
  - Example: `grid`, `grid-lanes`
- `columns`: Grid template columns (default: `none`)
  - Examples: `1fr 2fr`, `repeat(3, 1fr)`, `200px auto`
  - Named line example: `[content-start] 1fr [content-end sidebar-start] 20rem [sidebar-end]`
- `rows`: Grid template rows (default: `none`)
  - Examples: `100px auto`, `repeat(auto-fit, 100px)`
  - Named line example: `[hero-start] auto [hero-end body-start] 1fr [body-end]`
- `areas`: Named grid areas (default: `none`)
  - Example: `"header header" "sidebar main" "footer footer"`

### Spacing
- `gap`: Gap between grid items (default: `1.5rem`)

### Grid Lanes
- `lanes`: Opt-in boolean attribute for `display: grid-lanes` when supported
- `flow-tolerance`: Controls how aggressively items change lanes (default: `1em`)
  - Examples: `0`, `0.5rem`, `1em`, `2lh`

### Item Alignment
- `justify-items`: Default horizontal alignment for items (default: `stretch`)
  - Values: `start`, `end`, `center`, `stretch`
- `align-items`: Default vertical alignment for items (default: `stretch`)
  - Values: `start`, `end`, `center`, `stretch`

### Gap Decorations (Experimental)
- `col-rule-width`: Width of column gap lines
- `col-rule-style`: Style of column gap lines (solid, dashed, etc.)
- `col-rule-color`: Color of column gap lines
- `row-rule-width`: Width of row gap lines
- `row-rule-style`: Style of row gap lines
- `row-rule-color`: Color of row gap lines

## Item Attributes (Applied to Direct Children)

### Area Placement
- `area`: Named grid area (for use with template-areas)

### Track Placement
- `col`: Grid column position
  - Examples: `1 / 3`, `span 2`, `2`
- `row`: Grid row position
  - Examples: `1 / -1`, `span 3`, `2 / 4`
- `col-start`: Grid column start line when `col` is not set
  - Examples: `main-start`, `content-start`, `col-start 4`
- `col-end`: Grid column end line when `col` is not set
  - Examples: `main-end`, `span 3`, `col-start 10`
- `row-start`: Grid row start line when `row` is not set
  - Examples: `hero-start`, `body-start`
- `row-end`: Grid row end line when `row` is not set
  - Examples: `body-end`, `span 2`

### Self Alignment
- `justify-self`: Horizontal alignment for this item (default: `auto`)
- `align-self`: Vertical alignment for this item (default: `auto`)

### Subgrid
- `subgrid`: Enables subgrid display for nested grids

## Usage Examples

### Basic Grid
```html
<grid columns="1fr 2fr 1fr">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</grid>
```

### Named Areas Layout
```html
<grid columns="200px 1fr" rows="auto 1fr auto" areas="'sidebar main' 'sidebar main' 'footer footer'">
  <header area="header">Header</header>
  <nav area="sidebar">Navigation</nav>
  <main area="main">Content</main>
  <footer area="footer">Footer</footer>
</grid>
```

### Responsive Grid
```html
<grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="2rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</grid>
```

### Item Placement
```html
<grid columns="repeat(3, 1fr)" rows="repeat(3, 100px)">
  <div col="1 / 3" row="1">Spans 2 columns</div>
  <div col="3" row="1 / 3">Spans 2 rows</div>
  <div col="1 / 3" row="2 / 4">Spans columns and rows</div>
</grid>
```

### Grid Lanes
```html
<grid lanes columns="repeat(auto-fill, minmax(16rem, 1fr))" gap="1rem">
  <article>Short card</article>
  <article>Much taller card with more content that will pack into the nearest lane.</article>
  <article>Another card</article>
</grid>
```

For a row-driven brick layout, define rows instead of columns:

```html
<grid lanes rows="repeat(3, 1fr)" gap="1rem">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</grid>
```

Tune lane-packing behavior with `flow-tolerance`:

```html
<grid lanes columns="repeat(auto-fill, minmax(20ch, 1fr))" flow-tolerance="1.5em">
  <article>...</article>
</grid>
```

### Named Grid Lines
```html
<grid columns="[content-start] 2fr [content-end rail-start] 1fr [rail-end]" rows="[top] auto [body] 1fr [bottom]">
  <main col-start="content-start" col-end="content-end" row-start="top" row-end="bottom">Main content</main>
  <aside col-start="rail-start" col-end="rail-end" row-start="body" row-end="bottom">Rail</aside>
</grid>
```

You can also use line names directly in the shorthand placement attributes:

```html
<grid columns="repeat(12, [col-start] 1fr)">
  <header col="col-start / span 12">Header</header>
  <main col="col-start 4 / span 6">Content</main>
</grid>
```

### Subgrid
```html
<grid columns="1fr 2fr" rows="100px auto">
  <div>Header</div>
  <div subgrid columns="1fr 1fr">Nested grid content</div>
</grid>
```

## CSS Implementation

### Container Styles
```css
grid {
  display: var(--grid-display);
  grid-template-columns: var(--grid-columns);
  grid-template-rows: var(--grid-rows);
  grid-template-areas: var(--grid-areas);
  gap: var(--grid-gap);
}
```

Grid Lanes enhancement:

```css
@supports (display: grid-lanes) {
  :is(grid, [data-grid], .grid):is([lanes], [data-lanes]) {
    display: grid-lanes;
    flow-tolerance: var(--grid-flow-tolerance);
  }
}
```

Outside that feature query, lane layouts remain standard CSS Grid. This keeps
the content usable in browsers that do not implement `grid-lanes`.

### Item Styles
```css
grid > * {
  grid-area: attr(area type(*), auto);
  grid-column: attr(col type(*), auto);
  grid-row: attr(row type(*), auto);
}
```

Named line placement attrs:

```css
grid > *:not([col]) {
  grid-column-start: attr(col-start type(*), auto);
  grid-column-end: attr(col-end type(*), auto);
}

grid > *:not([row]) {
  grid-row-start: attr(row-start type(*), auto);
  grid-row-end: attr(row-end type(*), auto);
}
```

### Subgrid Support
```css
&[subgrid] {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

## Gap Decorations
Gap decorations allow styling of the lines between grid tracks:

```html
<grid columns="1fr 1fr" col-rule-width="2px" col-rule-style="solid" col-rule-color="var(--outline)">
  <div>Item 1</div>
  <div>Item 2</div>
</grid>
```

## Browser Support
- **CSS Grid**: All modern browsers
- **Grid Lanes**: Emerging support; currently progressive enhancement
- **Subgrid**: Firefox 71+, Chrome 117+ (limited)
- **Named Grid Lines**: Part of standard CSS Grid support
- **Gap Decorations**: Experimental, limited browser support
- **attr() with types**: Limited support (graceful fallbacks)

## Use Cases
- **Page Layouts**: Complex multi-area layouts
- **Component Grids**: Card grids and item collections
- **Dashboard Layouts**: Admin panels and data displays
- **Form Layouts**: Complex form structures
- **Nested Layouts**: Subgrids for aligned nested content
