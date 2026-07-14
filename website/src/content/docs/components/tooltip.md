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

The public host forms are:

- `<tooltip content="…">`
- `[data-tooltip="…"]`
- `.tooltip[data-tooltip="…"]`

## Placement

Set `place` to `top`, `right`, `bottom`, or `left`. Top is the default. Placement is absolute relative to the tooltip host and does not depend on experimental anchor positioning.

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

Generated tooltip text is supplemental. The trigger must still have an accessible name, especially when it contains only an icon. Keep essential instructions in visible content or connect a real element with `aria-describedby`. Use the structured tooltip pattern when assistive technology needs access to the tooltip content.
