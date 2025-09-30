# Table Component Documentation

## Overview
The `data-table` component provides responsive, accessible table styling with design token integration. It uses scoped styling and container queries to adapt to different screen sizes.

## Key Features
- **Scoped Styling**: Uses `@scope` to isolate table styles
- **Responsive Design**: Container queries for mobile adaptation
- **Zebra Striping**: Alternating row colors
- **Hover Effects**: Interactive row highlighting
- **Mobile Stacking**: Cards layout on small containers

## Attributes
- `container-type`: `inline-size` (set internally)
- `container-name`: `table-container` (set internally)

## Structure
- `data-table`: Main table container
- Standard `thead`, `tbody`, `tr`, `th`, `td` elements

## Responsive Behavior

### Desktop Layout (≥ 600px)
- **Display**: Standard table layout
- **Headers**: Visible table headers
- **Rows**: Horizontal data rows
- **Styling**: Full table appearance with borders and backgrounds

### Mobile Layout (< 600px)
- **Display**: Block layout with stacked cards
- **Headers**: Hidden (moved to data attributes)
- **Cells**: Block display with labels
- **Appearance**: Card-like stacked layout

## Styling Details

### Table Container
- **Width**: 100% of parent
- **Collapse**: Border collapse for clean borders
- **Background**: Surface default
- **Border**: Outline default with medium radius
- **Overflow**: Hidden for rounded corners

### Headers (th)
- **Background**: Surface subtle
- **Font Weight**: Semibold
- **Text Color**: Overt
- **Padding**: Consistent spacing

### Cells (td, th)
- **Padding**: Small vertical, medium horizontal
- **Alignment**: Left-aligned text
- **Border**: Bottom subtle border

### Body Rows
- **Even Rows**: Highlight muted background
- **Hover**: Highlight subtle background
- **Transition**: Smooth background changes

### Mobile Cards
- **Layout**: Block elements stacked vertically
- **Headers**: Absolute positioning off-screen
- **Labels**: Before pseudo-element with data-label
- **Borders**: Right borders between cells, none on bottom

## Usage Example
```html
<data-table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Active</td>
    </tr>
  </tbody>
</data-table>
```

### Mobile Usage (with data attributes)
```html
<data-table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">John Doe</td>
      <td data-label="Email">john@example.com</td>
      <td data-label="Status">Active</td>
    </tr>
  </tbody>
</data-table>
```

## CSS Custom Properties Used
- `--bg`: Background colors
- `--fg`: Foreground colors
- `--surface-default`: Default surface color
- `--surface-subtle`: Subtle surface color
- `--text-default`: Default text color
- `--text-overt`: Overt text color
- `--outline-default`: Default outline color
- `--outline-subtle`: Subtle outline color
- `--radius-md`: Border radius
- `--spacing-sm`, `--spacing-md`: Spacing values
- `--font-weight-semibold`: Semibold font weight
- `--highlight-bg-muted`: Muted highlight background
- `--highlight-bg-subtle`: Subtle highlight background

## Utility Classes
- `.table-striped`: Enhanced zebra striping (odd rows)
- `.table-hover`: Additional hover effects
- `.table-bordered`: Thick borders
- `.table-borderless`: Removes borders

## Browser Support
- **@scope**: Chrome 118+, Firefox 128+ (limited)
- **Container Queries**: Chrome 105+, Firefox 110+, Safari 16+
- **CSS Nesting**: Modern browsers
- **Fallback**: Basic table styling without scoping

## Accessibility
- **Semantic HTML**: Proper table structure
- **Screen Readers**: Table headers and data relationships
- **Keyboard Navigation**: Focus management for interactive elements
- **Color Contrast**: Design token system ensures WCAG compliance

## Mobile Considerations
- **Data Labels**: Use `data-label` attributes for mobile headers
- **Touch Targets**: Adequate cell padding for touch interaction
- **Scrolling**: Horizontal scroll on very narrow containers
- **Performance**: Block layout reduces complexity on mobile

## Use Cases
- **Data Tables**: Financial data, user lists
- **Comparison Tables**: Product features, pricing
- **Admin Panels**: CRUD interfaces
- **Reports**: Statistical data presentation
- **Directory Listings**: Contact information, catalogs