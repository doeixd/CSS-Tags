# Chip Component Documentation

## Overview
The `chip` component provides compact inline tags for filters, selections, and metadata. It supports size variants, surface roles, removable chips, and progressive text-box enhancement.

## Key Features
- size variants: `sm`, `md`, `lg`
- surface variants: subtle, default, overt, muted
- removable affordance via `chip[removable]`
- auto-contrast text on the resolved chip background
- progressive `text-box` support for tighter compact UI text

## Variants

### Size Variants
- `chip[size="sm"]`: smaller padding and font size
- `chip[size="md"]`: medium size
- `chip[size="lg"]`: larger padding and font size

### Surface Variants
- default behavior: subtle surface styling
- `[data-variant="default"]`: default surface
- `[data-variant="overt"]`: overt surface
- `[data-variant="muted"]`: muted surface

### Special Variant
- `chip[removable]`: adds a trailing close affordance and focus/hover states

## Usage Examples

```html
<chip>Tag</chip>
<chip data-variant="default">Selected</chip>
<span data-chip data-variant="overt" data-size="sm">Pinned</span>
<span class="chip">Class host</span>
<chip removable>Filter: Europe</chip>
```

## CSS Custom Properties Used

Public customization tokens:

- `--chip-gap`: gap between chip content and the trailing affordance
- `--chip-bg` and `--chip-color`: surface and text colors
- `--chip-border-color` and `--chip-border-width`: border styling
- `--chip-radius`: pill radius
- `--chip-padding-inline` and `--chip-padding-block`: spacing
- `--text-box-chip`: shorthand text-box token
- `--text-box-trim-chip`: longhand trim token
- `--text-box-edge-chip`: longhand edge token

Internal component variables:

- `--b-bg`: resolved chip background
- `--b-bw`: resolved border width
- `--b-bc`: resolved border color
- `--b-r`: resolved radius
- `--b-px`: inline padding
- `--b-py`: block padding

## Removable Behavior

When `removable` is present:

- a trailing `✕` affordance is added with `::after`
- focus-visible gets a clear outline
- hover slightly brightens the chip

This is a visual affordance only. If the chip should act like an interactive control, use appropriate semantics in markup and JS.

## Text Box Support

When supported by the browser, chips opt into the library's compact UI text-box defaults:

- `text-box: var(--text-box-chip, var(--text-box-ui))`
- `text-box-trim: var(--text-box-trim-chip, var(--text-box-trim-ui))`
- `text-box-edge: var(--text-box-edge-chip, var(--text-box-edge-ui))`

## Accessibility

- semantic text tokens provide readable defaults on all surfaces
- removable chips expose a focus-visible state
- compact text-box support is progressive and not required for legibility

## Notes

- `chip` uses subtle surface styling by default
- the public selector supports `chip`, `[data-chip]`, and `.chip` hosts
- legacy `role="default|overt|muted"` styling remains supported, but new markup should use `data-variant` so `role` can retain its ARIA meaning
