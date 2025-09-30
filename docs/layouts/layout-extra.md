# Layout Extras (`layouts/layout-extra.css`)

This supplementary file extends the core layout system with mixins, functions, and utility classes. It provides both CSS-centric approaches for applying layout patterns and utilities for enhancing layout components.

## Overview

The file contains three main sections:

1. **Layout Mixins**: Proposed CSS mixins for applying layout logic to any element
2. **Layout Functions**: Proposed CSS functions for common calculations
3. **Utility Classes**: Ready-to-use classes for shadows, positioning, and layout effects

## Important Notice

⚠️ **Proposed Features**: The `@mixin` and `@function` rules demonstrated here are not supported in any browser as of late 2025. This file showcases a forward-looking, preprocessor-free approach for future CSS standards.

## Layout Mixins (Proposed)

These mixins allow applying layout component logic directly to standard HTML elements.

### `@mixin --layout-stack`

Applies vertical stacking logic to any element.

**Parameters:**
- `--gap`: Space between stacked items (default: `var(--space-md, 1.5rem)`)
- `--align`: Horizontal alignment of items (default: `stretch`)

**Example Usage:**
```css
.product-details {
  @apply --layout-stack(--gap: 2rem, --align: flex-start);
}
```

**Generated Styles:**
```css
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: var(--align);
gap: var(--gap, var(--space-md, 1.5rem));
```

### `@mixin --layout-grid`

Applies responsive grid logic to any element.

**Parameters:**
- `--min-item-size`: Minimum size for each grid item (default: `16rem`)
- `--gap`: Gap between items (default: `var(--space-md, 1.5rem)`)

**Example Usage:**
```css
.card-collection {
  @apply --layout-grid(--min-item-size: 20rem);
}
```

**Generated Styles:**
```css
display: grid;
gap: var(--gap, var(--space-md, 1.5rem));
grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min-item-size, 16rem)), 1fr));
```

### `@mixin --layout-sidebar`

Applies responsive sidebar layout logic.

**Parameters:**
- `--side-width`: Width of the sidebar (default: `20rem`)
- `--content-min`: Minimum width for main content before wrapping (default: `50%`)
- `--gap`: Space between sidebar and content (default: `var(--space-lg, 2rem)`)

**Example Usage:**
```css
main.with-sidebar {
  @apply --layout-sidebar(--side-width: 250px);

  & > :last-child {
    flex-basis: var(--side-width); /* Match sidebar width */
  }
}
```

**Generated Styles:**
```css
display: flex;
flex-wrap: wrap;
gap: var(--gap, var(--space-lg, 2rem));

& > :first-child { /* Main content */
  flex-grow: 9999;
  flex-basis: var(--content-min, 50%);
}
& > :last-child { /* Sidebar */
  flex-grow: 1;
  flex-basis: var(--side-width, 20rem);
}
```

## Layout Functions (Proposed)

### `@function --aspect-ratio`

Returns a clean aspect-ratio value for CSS.

**Parameters:**
- `--width`: Width component of the ratio (number)
- `--height`: Height component of the ratio (number)

**Returns:** String in format "width / height"

**Example Usage:**
```css
.video-player {
  aspect-ratio: --aspect-ratio(16, 9);
}
```

**Result:** `aspect-ratio: 16 / 9;`

## Utility Classes

These classes can be applied to layout components or any elements for common effects.

### Shadow Utilities

Apply consistent, token-based shadows using predefined shadow tokens.

**Available Classes:**
- `.has-shadow-sm`: Small shadow
- `.has-shadow-md`: Medium shadow  
- `.has-shadow-lg`: Large shadow

**CSS Properties Used:**
- `--shadow-1`: Small shadow (default: `0 1px 3px rgb(0 0 0 / 0.1)`)
- `--shadow-2`: Medium shadow (default: `0 4px 6px rgb(0 0 0 / 0.1)`)
- `--shadow-3`: Large shadow (default: `0 10px 15px rgb(0 0 0 / 0.1)`)

**Example:**
```html
<layout-sidebar class="has-shadow-md">
  <main>Content</main>
  <aside>Sidebar</aside>
</layout-sidebar>
```

### `.is-sticky`

Makes an element stick to the top of its scrolling container. Perfect for sidebars or headers.

**CSS Properties:**
- `--sticky-top-offset`: Offset from top (default: `1rem`)

**Features:**
- `position: sticky`
- `align-self: start` to prevent stretching in flex/grid
- `max-height` calculation to prevent overflow
- `overflow-y: auto` for scrollable content

**Example:**
```html
<layout-sidebar>
  <main>Main content</main>
  <aside class="is-sticky">Sticky sidebar</aside>
</layout-sidebar>
```

### `.is-full-bleed`

Allows a child element to break out of its parent container's padding and stretch to the full viewport width.

**Implementation:**
- `width: 100vw`
- `margin-inline: 50%`
- `transform: translateX(-50%)`

**Example:**
```html
<layout-center>
  <p>Constrained text</p>
  <img src="hero.jpg" alt="Hero" class="is-full-bleed">
  <p>More constrained text</p>
</layout-center>
```

## Browser Support

- Utility classes work in all modern browsers
- Mixins and functions are proposed features not yet implemented
- Shadow utilities depend on shadow tokens defined in `core/base.css`

## Integration Notes

- Utility classes can be combined with layout components
- Shadow tokens should be defined in global stylesheets
- Mixins/functions represent future CSS capabilities
- Import this file after core layout components in `index.css`

## Related Files

- `layouts/layout.css`: Core layout components
- `core/base.css`: Defines shadow and spacing tokens
- `core/theme.css`: Theme-specific shadow overrides