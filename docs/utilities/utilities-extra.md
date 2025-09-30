# Extended Utilities (`utilities/utilities-extra.css`)

This file provides additional utility classes that extend the core utilities with more specific styling options. These include outlines, positioning, layout helpers, and feedback colors.

## Outline and Ring Utilities

Outline and focus ring utilities for accessibility and visual emphasis.

### Outline Widths
- `.outline-thin`: 1px solid outline
- `.outline`: 2px solid outline
- `.outline-thick`: 3px solid outline

### Focus Rings
- `.ring-1`: 1px focus ring using `box-shadow`
- `.ring-2`: 2px focus ring
- `.ring-3`: 3px focus ring

**Token Used:** `--outline-focus` for ring color

## Display, Overflow, and Position Utilities

Low-level utilities for layout and positioning.

### Display
- `.d-block`: `display: block`
- `.d-inline`: `display: inline`
- `.d-inline-block`: `display: inline-block`
- `.d-flex`: `display: flex`
- `.d-grid`: `display: grid`

### Overflow
- `.overflow-auto`: `overflow: auto`
- `.overflow-hidden`: `overflow: hidden`
- `.overflow-clip`: `overflow: clip`

### Position
- `.pos-static`: `position: static`
- `.pos-relative`: `position: relative`
- `.pos-absolute`: `position: absolute`
- `.pos-fixed`: `position: fixed`
- `.pos-sticky`: `position: sticky`

## Gap Utilities

Directional gap controls for flexbox and grid layouts.

### Column Gaps (Horizontal)
- `.gap-x-xs`: Extra small column gap
- `.gap-x-sm`: Small column gap
- `.gap-x-md`: Medium column gap
- `.gap-x-lg`: Large column gap
- `.gap-x-xl`: Extra large column gap

### Row Gaps (Vertical)
- `.gap-y-xs`: Extra small row gap
- `.gap-y-sm`: Small row gap
- `.gap-y-md`: Medium row gap
- `.gap-y-lg`: Large row gap
- `.gap-y-xl`: Extra large row gap

**Token Dependencies:** Uses `--spacing-*` tokens

## Flexbox and Grid Shorthands

Common layout property shortcuts.

### Flexbox Direction
- `.flex-row`: `flex-direction: row`
- `.flex-col`: `flex-direction: column`
- `.flex-wrap`: `flex-wrap: wrap`

### Flexbox Alignment
- `.items-center`: `align-items: center`
- `.justify-center`: `justify-content: center`
- `.justify-between`: `justify-content: space-between`

### Grid Columns
- `.grid-cols-1`: Single column grid
- `.grid-cols-2`: Two column grid
- `.grid-cols-3`: Three column grid
- `.grid-cols-4`: Four column grid
- `.grid-cols-6`: Six column grid
- `.grid-cols-12`: Twelve column grid

**Token Dependencies:** Uses `--grid-cols-*` variables for responsive column definitions

## Feedback Role Utilities

Semantic colors for success, warning, error, and info states.

### Background Colors
- `.bg-success`: Success surface background
- `.bg-warning`: Warning surface background
- `.bg-error`: Error surface background
- `.bg-info`: Info surface background

### Text Colors
- `.text-success`: Success text color
- `.text-warning`: Warning text color
- `.text-error`: Error text color
- `.text-info`: Info text color

### Border Colors
- `.border-success`: Success border color
- `.border-warning`: Warning border color
- `.border-error`: Error border color
- `.border-info`: Info border color

**Token Dependencies:**
- `--surface-success`, `--surface-warning`, etc.
- `--text-success`, `--text-warning`, etc.
- `--outline-success`, `--outline-warning`, etc.

## Usage Examples

```html
<!-- Focus management -->
<input class="ring-2 outline" type="email">

<!-- Layout helpers -->
<div class="d-flex flex-col gap-y-md items-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Feedback states -->
<div class="bg-success text-success border-success p-md">
  Operation successful!
</div>

<!-- Grid layout -->
<div class="d-grid grid-cols-3 gap-x-lg gap-y-md">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

## Browser Support

- All utilities work in modern browsers
- `box-shadow` rings work in all browsers
- Grid column utilities depend on CSS Grid support
- `overflow: clip` has good modern browser support

## Integration Notes

- Import after `utilities/utilities.css` for full utility coverage
- Use these for specific layout needs not covered by core utilities
- Combine with component classes and layout components
- Feedback utilities work well with form validation and status messages

## Related Files

- `utilities/utilities.css`: Core utility classes
- `core/tokens.css`: Defines spacing and color tokens
- `core/palette.css`: Defines feedback color tokens