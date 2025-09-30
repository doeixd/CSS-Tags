# Core Utilities (`utilities/utilities.css`)

This file provides essential utility classes for common styling needs, built on the framework's design tokens. These utilities offer quick access to colors, spacing, typography, and interactive states.

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

## State Helpers

Interactive state utilities for hover and active states.

- `.hover-highlight:hover`: Subtle background highlight on hover
- `.active-press:active`: Muted background press effect on active

**CSS:**
```css
.hover-highlight:hover { background-color: var(--highlight-bg-subtle); }
.active-press:active { background-color: var(--highlight-bg-muted); }
```

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
- Extend with `utilities-extra.css` for additional utilities

## Related Files

- `utilities/utilities-extra.css`: Extended utility classes
- `core/tokens.css`: Defines all the tokens used by these utilities
- `components/box.css`: Box component that uses `--b-*` properties