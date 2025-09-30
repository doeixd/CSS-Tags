# Utilities (`utilities/utilities.css`)

This file provides comprehensive utility classes for styling, including colors, spacing, typography, layout, and interactive states. It combines core utilities with additional helpers for complete design system coverage.

## Background Utilities

Semantic background colors using surface tokens.

### Surface Backgrounds
- `.bg-surface-muted`: Muted surface background
- `.bg-surface-subtle`: Subtle surface background  
- `.bg-surface-default`: Default surface background
- `.bg-surface-overt`: Overt surface background (high contrast)

**CSS:** `background-color: var(--bg);` where `--bg` is set to the appropriate surface token.

## Text Color Utilities

Semantic text colors for different contrast levels.

- `.text-muted`: Muted text color
- `.text-subtle`: Subtle text color
- `.text-default`: Default text color
- `.text-overt`: Overt/high-contrast text color

**CSS:** `color: var(--text-[level]);`

## Border Utilities

Border color utilities using outline tokens.

- `.border-muted`: Muted border color
- `.border-subtle`: Subtle border color
- `.border-default`: Default border color
- `.border-overt`: Overt border color

**CSS:** `border-color: var(--outline-[level]) !important;`

## Focus Ring Utility

Standardized focus ring for accessibility.

- `.focus-ring`: Applies focus ring styling

**CSS Properties Used:**
- `--focus-ring-width`: Ring width
- `--focus-ring-style`: Ring style (solid, etc.)
- `--focus-ring-color`: Ring color
- `--focus-ring-offset`: Ring offset

## Spacing Utilities

Padding and margin utilities using the spacing scale.

### Padding
- `.p-xs`: Extra small padding
- `.p-sm`: Small padding
- `.p-md`: Medium padding
- `.p-lg`: Large padding
- `.p-xl`: Extra large padding

### Margin
- `.m-xs`: Extra small margin
- `.m-sm`: Small margin
- `.m-md`: Medium margin
- `.m-lg`: Large margin
- `.m-xl`: Extra large margin

**Token Dependencies:**
- `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`

## Typography Utilities

Font size utilities using the typography scale.

- `.text-xs`: Extra small text
- `.text-sm`: Small text
- `.text-base`: Base text size
- `.text-lg`: Large text
- `.text-xl`: Extra large text
- `.text-2xl`: 2X large text

**Token Dependencies:**
- `--font-size-xs` through `--font-size-2xl`

## Interactive State Utilities

Enhanced interactive state utilities for better user experience.

- `.hover-highlight:hover`: Subtle background highlight on hover
- `.active-press:active`: Scale-down effect on active/press
- `.focus-ring:focus`: Proper focus ring with theme colors

**CSS:**
```css
.hover-highlight:hover { background-color: var(--highlight-bg-subtle); }
.active-press:active { transform: scale(0.98); }
.focus-ring:focus { outline: var(--focus-ring-width) var(--focus-ring-style) var(--focus-ring-color); outline-offset: var(--focus-ring-offset); }
```

## Outline and Ring Utilities

- `.outline-thin`: Thin outline (1px solid)
- `.outline`: Standard outline (2px solid)
- `.outline-thick`: Thick outline (3px solid)
- `.ring-1/2/3`: Box-shadow focus rings with increasing width

## Gap Utilities

- `.gap-x-xs/sm/md/lg/xl`: Column gap sizes
- `.gap-y-xs/sm/md/lg/xl`: Row gap sizes

## Grid Shorthands

- `.grid-cols-1/2/3/4/6/12`: Grid template columns for responsive layouts

## Layout Utilities

### Display
- `.d-block/inline/inline-block/flex/grid/none`: Display property utilities

### Flexbox
- `.flex-row/col`: Flex direction
- `.flex-wrap`: Flex wrap
- `.items-center`: Align items center
- `.justify-center/between/around/end`: Justify content options

### Position
- `.pos-static/relative/absolute/fixed/sticky`: Position property

### Overflow
- `.overflow-auto/hidden/scroll/visible`: Overflow control

## Anchor Positioning Utilities

CSS Anchor Positioning utilities for creating positioned elements that tether to other elements with automatic collision detection.

### Anchor Name Utilities
Define elements as anchor references:
- `.anchor-name-top/bottom/left/right/center`: Creates named anchor points

### Position Anchor Utilities
Reference anchor elements:
- `.position-anchor-top/bottom/left/right/center`: Links to named anchors

### Position Area Utilities
Control positioning relative to anchors:
- `.position-area-top/bottom/left/right`: Basic positioning
- `.position-area-top-left/top-right/bottom-left/bottom-right`: Corner positioning
- `.position-area-center`: Center positioning

### Fallback Positioning
- `.position-try-fallback`: Automatic repositioning to avoid viewport overflow

**Usage Example:**
```html
<button class="anchor-name-tooltip">Hover me</button>
<div class="position-anchor-tooltip position-area-bottom position-try-fallback">
  Tooltip content that automatically positions and avoids edges
</div>
```

**Browser Support:** Modern browsers with CSS Anchor Positioning support. Falls back gracefully.

## Scrim Utilities

- `.scrim`: Semi-transparent dark overlay
- `.scrim-light`: Light scrim overlay

## Box Model Utilities

Advanced box styling utilities that set multiple CSS custom properties for use with box components.

### Surface Boxes
- `.box-surface-muted`: Muted surface with subtle border
- `.box-surface-default`: Default surface with default border
- `.box-surface-overt`: Overt surface with overt border and text

**Sets Properties:**
- `--b-bg`: Background color
- `--b-bc`: Border color
- `--b-fg`: Text color (overt only)

### Border Radius
- `.box-rounded`: Medium border radius
- `.box-rounded-lg`: Large border radius

**Sets Property:** `--b-r`: Border radius value

### Elevation/Shadows
- `.box-elev-1`: Small shadow
- `.box-elev-2`: Medium shadow
- `.box-elev-3`: Large shadow

**Sets Property:** `--b-shadow`: Shadow value

## Usage Examples

```html
<!-- Surface with elevation -->
<div class="box-surface-default box-rounded box-elev-2">
  <p class="text-default">Content</p>
</div>

<!-- Interactive button -->
<button class="hover-highlight active-press p-md text-base">
  Click me
</button>

<!-- Focus management -->
<input class="focus-ring border-default p-sm" type="text">
```

## Browser Support

- All modern browsers with CSS custom properties support
- `!important` used on borders for specificity
- Hover/active states work on interactive elements

## Integration Notes

- Import this file in the utilities layer of `index.css`
- Combine with component classes for complete styling
- Use semantic utilities over arbitrary values
## Related Files
- `core/tokens.css`: Defines all the tokens used by these utilities
- `components/box.css`: Box component that uses `--b-*` properties