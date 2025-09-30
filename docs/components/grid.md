# Grid Component Documentation

## Overview
The `grid` component provides a comprehensive, declarative CSS Grid system with advanced features like named areas, subgrid support, and experimental gap decorations. It allows complex two-dimensional layouts through HTML attributes.

## Key Features
- **Declarative API**: Configure grid properties via HTML attributes
- **Named Areas**: Template areas for semantic layouts
- **Subgrid Support**: Nested grids that align with parent tracks
- **Item Placement**: Individual control over grid item positioning
- **Gap Decorations**: Experimental styling of grid lines (limited browser support)

## Container Attributes

### Template Definition
- `columns`: Grid template columns (default: `none`)
  - Examples: `1fr 2fr`, `repeat(3, 1fr)`, `200px auto`
- `rows`: Grid template rows (default: `none`)
  - Examples: `100px auto`, `repeat(auto-fit, 100px)`
- `areas`: Named grid areas (default: `none`)
  - Example: `"header header" "sidebar main" "footer footer"`

### Spacing
- `gap`: Gap between grid items (default: `1.5rem`)

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
  display: grid;
  grid-template-columns: var(--grid-columns);
  grid-template-rows: var(--grid-rows);
  grid-template-areas: var(--grid-areas);
  gap: var(--grid-gap);
}
```

### Item Styles
```css
grid > * {
  grid-area: attr(area type(*), auto);
  grid-column: attr(col type(*), auto);
  grid-row: attr(row type(*), auto);
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
- **Subgrid**: Firefox 71+, Chrome 117+ (limited)
- **Gap Decorations**: Experimental, limited browser support
- **attr() with types**: Limited support (graceful fallbacks)

## Use Cases
- **Page Layouts**: Complex multi-area layouts
- **Component Grids**: Card grids and item collections
- **Dashboard Layouts**: Admin panels and data displays
- **Form Layouts**: Complex form structures
- **Nested Layouts**: Subgrids for aligned nested content