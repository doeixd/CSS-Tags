---
title: Layout Extras Helpers (`layouts/layout-extras-helpers.css`)
description: This file provides helper utilities and presets that enhance the layout system with global configuration options and responsive behaviors.
---

This file provides helper utilities and presets that enhance the layout system with global configuration options and responsive behaviors.

## Density Presets

Control the overall spacing density of layout components using data attributes on the root element.

**Available Densities:**
- `compact`: Smaller gaps and padding
- `comfortable`: Standard spacing (default)
- `spacious`: Larger gaps and padding

**CSS Properties Modified:**
- `--l-gap`: Spacing between layout items
- `--l-padding`: Default padding values

**Usage:**
```html
<html data-density="compact">
  <!-- All layout components use compact spacing -->
</html>
```

**Token Dependencies:**
- `--spacing-sm`: Small spacing value
- `--spacing-md`: Medium spacing value
- `--spacing-lg`: Large spacing value

## Threshold Presets

Configure the responsive breakpoints for layout components like `<layout-switcher>` and `<layout-sidebar>`.

**Available Thresholds:**
- `tight`: 24rem - Components switch/behave at smaller widths
- `normal`: 30rem - Standard threshold (default)
- `loose`: 40rem - Components switch/behave at larger widths

**CSS Property Modified:**
- `--l-threshold`: Used by switcher and sidebar components

**Usage:**
```html
<html data-threshold="tight">
  <!-- Layout components respond at 24rem breakpoint -->
</html>
```

## Container Query Helpers

Utility classes that respond to the layout container's size, allowing content to show/hide based on available space.

### `.hide-on-narrow`

Hides elements when the layout container is narrower than 30rem.

**Container Query:**
```css
@container layout-container (max-width: 30rem) {
  .hide-on-narrow { display: none !important; }
}
```

**Usage:**
```html
<layout-split>
  <div>Always visible</div>
  <div class="hide-on-narrow">Hidden on narrow screens</div>
</layout-split>
```

### `.only-on-wide`

Shows elements only when the layout container is wider than 60rem.

**Container Query:**
```css
@container layout-container (min-width: 60rem) {
  .only-on-wide { display: initial !important; }
}
```

**Usage:**
```html
<layout-sidebar>
  <main>Content</main>
  <aside class="only-on-wide">Extra sidebar content</aside>
</layout-sidebar>
```

## Browser Support

- Data attribute selectors work in all modern browsers
- Container queries require recent browser versions
- CSS custom properties work in all modern browsers

## Integration Notes

- Apply data attributes to the `<html>` element for global effect
- Container query helpers depend on parent elements having `container-type` set
- Combine with layout components for responsive behavior
- Import after core layout files in `index.css`

## Related Files

- `layouts/layout.css`: Core layout components that use these presets
- `core/base.css`: Defines spacing tokens used by density presets
- `core/theme.css`: Can override preset values thematically