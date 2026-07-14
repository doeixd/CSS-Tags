---
title: Structured Tooltips
description: Accessible rich tooltip content with a stable CSS positioning baseline and no JavaScript dependency.
---

## Overview

Structured tooltips keep their content in the DOM so a trigger can reference it with `aria-describedby`. The tooltip is hidden at rest and appears when its parent is hovered or receives keyboard focus.

```html
<button type="button" aria-describedby="billing-tip">
  Billing info
  <tooltip id="billing-tip" role="tooltip" position="top">
    <strong>Next invoice</strong><br>
    <small>Due on August 1</small>
  </tooltip>
</button>
```

The host can be `<tooltip role="tooltip">`, `[data-rich-tooltip]`, or `.rich-tooltip`. Keep it as a direct child of the trigger or trigger wrapper.

## Placement

Use `position="top"`, `bottom`, `left`, or `right`. Top is the default. The shipped baseline uses broadly supported absolute positioning; newer anchor-positioning features can be layered on as progressive enhancement without being required for correct rendering.

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
