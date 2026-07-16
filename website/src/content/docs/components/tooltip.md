---
title: Tooltip Component
description: Small CSS-only text hints that appear on pointer hover or keyboard focus.
---

## Overview

The simple tooltip wraps an ordinary trigger and generates a short text bubble from an attribute. It is hidden at rest, appears on both hover and `:focus-within`, respects reduced-motion preferences, and supports four placements.

```html
<tooltip content="Saved to your workspace" place="top">
  <button type="button">Save</button>
</tooltip>

<span data-tooltip="Required before publishing" place="right">
  <button type="button">Status</button>
</span>
```

Short text tooltips support all three public host forms:

- `<tooltip content="…">`
- `[data-tooltip="…"]`
- `.tooltip[data-tooltip="…"]`

## Placement

Set `place` to `top`, `right`, `bottom`, or `left`. Top is the default. Placement is absolute relative to the tooltip host and does not depend on experimental anchor positioning.

## Structured content

Use the same tooltip component with real DOM content when assistive technology
needs to reference the description or when the hint needs simple formatting:

```html
<button type="button" data-tooltip-host aria-describedby="billing-tip">
  Billing info
  <tooltip id="billing-tip" role="tooltip" position="top">
    <strong>Next invoice</strong><br>
    <small>Due on August 1</small>
  </tooltip>
</button>
```

The structured content host can be `<tooltip role="tooltip">`,
`[data-rich-tooltip]`, or `.rich-tooltip`. Keep it as a direct child of the
trigger or wrapper. `data-tooltip-host` and `.tooltip-host` provide the explicit
positioning contract; `:has()` can infer the parent in supporting browsers.

Structured content accepts `position="top"`, `data-position="top"`, or
`.tooltip-top`, with equivalent `bottom`, `left`, and `right` forms.

## Theme tokens

```css
[data-tooltip] {
  --tooltip-background: var(--surface-overt);
  --tooltip-color: var(--text-on-bedrock);
  --tooltip-border-color: var(--outline-overt);
  --tooltip-offset: 0.5rem;
  --tooltip-max-width: 28ch;
  --tooltip-delay: 150ms;
}
```

## Accessibility

Generated tooltip text is supplemental. The trigger must still have an accessible name, especially when it contains only an icon. Keep essential instructions in visible content. For structured content, add `role="tooltip"`, connect it with `aria-describedby`, and do not put interactive controls inside it.
