---
title: Structured Tooltips
description: Accessible rich tooltip content with a stable CSS positioning baseline and no JavaScript dependency.
---

## Overview

Structured tooltips keep their content in the DOM so a trigger can reference it with `aria-describedby`. The tooltip is hidden at rest and appears when its parent is hovered or receives keyboard focus.

```html
<button type="button" data-tooltip-host aria-describedby="billing-tip">
  Billing info
  <tooltip id="billing-tip" role="tooltip" position="top">
    <strong>Next invoice</strong><br>
    <small>Due on August 1</small>
  </tooltip>
</button>
```

The content host can be `<tooltip role="tooltip">`, `[data-rich-tooltip]`, or `.rich-tooltip`. Keep it as a direct child of the trigger or trigger wrapper. Add `data-tooltip-host` or `.tooltip-host` to that parent for an explicit, compatibility-safe positioning contract. In browsers with `:has()`, the library can infer the parent when the hook is omitted.

## Placement

Use `position="top"`, `data-position="top"`, or `.tooltip-top`, with equivalent `bottom`, `left`, and `right` values. Top is the default. The shipped baseline uses broadly supported absolute positioning; `:has()` only makes the parent hook optional.

## Theme tokens

Both tooltip components share the same variables:

- `--tooltip-background`
- `--tooltip-color`
- `--tooltip-border-color`
- `--tooltip-padding`
- `--tooltip-radius`
- `--tooltip-offset`
- `--tooltip-max-width`
- `--tooltip-delay`
- `--tooltip-z-index`

## Accessibility checklist

- Put `role="tooltip"` on structured tooltip content.
- Connect the trigger with `aria-describedby`.
- Ensure the trigger itself has an accessible name.
- Show the tooltip on keyboard focus as well as pointer hover.
- Do not place buttons, links, or other interactive controls inside a tooltip.
- Keep critical instructions visible rather than making them tooltip-only.
