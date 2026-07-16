# Badge Component Documentation

## Overview
The `badge` component provides compact inline labels for status, metadata, release labels, and short UI callouts. It supports semantic surface variants, status variants, size variants, and progressive text-box enhancement.

## Base Behavior

`badge` renders as an inline-flex pill with:

- fully rounded corners
- compact padding and tight line-height
- automatic contrast text on its resolved background
- optional `text-box` enhancement when the browser supports it

Base default:

- no `variant` or `status`: overt surface styling

## Variants

### Size Variants
- `badge[size="sm"]`: smaller padding and font size
- `badge[size="md"]`: medium size
- `badge[size="lg"]`: larger padding and font size

### Surface Variants
- `badge[variant="subtle"]`: subtle surface and subtle outline
- `badge[variant="default"]`: default surface and default outline
- `badge[variant="muted"]`: muted surface and subtle outline
- `badge[variant="overt"]`: overt surface and overt outline

Notes:
- if no `variant` or `status` is set, the badge defaults to the overt surface treatment
- variants are self-contained and do not rely on inherited `--bg` from parent containers
- use `variant`, `data-variant`, or `.badge-*`; legacy visual `role` values remain compatible but are deprecated because `role` belongs to ARIA

### Status Variants
- `badge[status="success"]`: success-tinted semantic badge
- `badge[status="warning"]`: warning-tinted semantic badge
- `badge[status="error"]`: error-tinted semantic badge
- `badge[status="info"]`: info-tinted semantic badge
- `badge[status="primary"]`: accent-filled badge with `--text-on-accent`
- `badge[status="overt"]`: overt surface variant using the status path

Status variants override surface styling.

## Usage Examples

```html
<badge variant="subtle" size="md">Beta</badge>
<span data-badge data-variant="default" data-size="md">Stable</span>
<span class="badge badge-overt badge-lg">Class host</span>
<badge status="success">Live</badge>
<badge status="primary" size="lg">New Release</badge>
```

With a parent gradient background:

```html
<box bg="linear-gradient(180deg, var(--base), var(--surface-subtle))">
  <badge variant="subtle">Still uses its own surface tokens</badge>
</box>
```

## CSS Custom Properties Used

Public or externally useful:

- `--badge-gap`: gap between badge content and any icon
- `--badge-background` and `--badge-color`: surface and text color
- `--badge-border-color` and `--badge-border-width`: border styling
- `--badge-radius`: pill radius
- `--badge-padding-inline` and `--badge-padding-block`: spacing
- `--text-box-badge`: shorthand text-box token
- `--text-box-trim-badge`: longhand trim token
- `--text-box-edge-badge`: longhand edge token

Resolved internal variables use the `--_badge-*` prefix and are not part of the public API.

## Text Box Support

When supported by the browser, badges opt into the library's compact UI text-box defaults:

- `text-box: var(--text-box-badge, var(--text-box-ui))`
- `text-box-trim: var(--text-box-trim-badge, var(--text-box-trim-ui))`
- `text-box-edge: var(--text-box-edge-badge, var(--text-box-edge-ui))`

Override example:

```css
:root {
  --text-box-badge: normal;
}
```

## Accessibility

- semantic status variants use the shared theme tokens
- each built-in surface resolves to a matching semantic contrast token
- compact text-box enhancement is progressive, not required for layout
- use badges for short labels, not long paragraph content

## Notes

- `badge` is a custom element-style selector, not a native HTML element
- badges are intended for short inline content
- variant styling uses explicit resolved surfaces so parent values do not hijack the component
