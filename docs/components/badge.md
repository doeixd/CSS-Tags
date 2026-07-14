# Badge Component Documentation

## Overview
The `badge` component provides compact inline labels for status, metadata, release labels, and short UI callouts. It supports semantic surface roles, semantic status variants, size variants, and progressive text-box enhancement.

## Base Behavior

`badge` renders as an inline-flex pill with:

- fully rounded corners
- compact padding and tight line-height
- automatic contrast text on its resolved background
- optional `text-box` enhancement when the browser supports it

Base default:

- no `role` or `status`: overt surface styling

## Variants

### Size Variants
- `badge[size="sm"]`: smaller padding and font size
- `badge[size="md"]`: medium size
- `badge[size="lg"]`: larger padding and font size

### Role Variants
- `badge[role="subtle"]`: subtle surface and subtle outline
- `badge[role="default"]`: default surface and default outline
- `badge[role="muted"]`: muted surface and subtle outline
- `badge[role="overt"]`: overt surface and overt outline

Notes:
- if no `role` or `status` is set, the badge defaults to the overt surface treatment
- role variants are self-contained and do not rely on inherited `--bg` from parent containers

### Status Variants
- `badge[status="success"]`: success-tinted semantic badge
- `badge[status="warning"]`: warning-tinted semantic badge
- `badge[status="error"]`: error-tinted semantic badge
- `badge[status="info"]`: info-tinted semantic badge
- `badge[status="primary"]`: accent-filled badge with `--text-on-accent`
- `badge[status="overt"]`: overt surface variant using the status path

Status variants override role styling.

## Usage Examples

```html
<badge role="subtle" size="md">Beta</badge>
<badge role="default">Stable</badge>
<badge status="success">Live</badge>
<badge status="primary" size="lg">New Release</badge>
```

With a parent gradient background:

```html
<box bg="linear-gradient(180deg, var(--base), var(--surface-subtle))">
  <badge role="subtle">Still uses its own surface tokens</badge>
</box>
```

## CSS Custom Properties Used

Public or externally useful:

- `--_gap`: gap between badge content and any icon
- `--border-width`: border width
- `--border-radius-full`: pill radius
- `--text-box-badge`: shorthand text-box token
- `--text-box-trim-badge`: longhand trim token
- `--text-box-edge-badge`: longhand edge token

Internal component variables:

- `--b-bg`: resolved badge background
- `--b-bw`: resolved border width
- `--b-bc`: resolved border color
- `--b-r`: resolved radius
- `--b-px`: inline padding
- `--b-py`: block padding

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
- auto-contrast text is derived from the badge background
- compact text-box enhancement is progressive, not required for layout
- use badges for short labels, not long paragraph content

## Notes

- `badge` is a custom element-style selector, not a native HTML element
- badges are intended for short inline content
- role-based styling uses explicit resolved surfaces so parent `--bg` values do not hijack the component
