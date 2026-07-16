# Tooltip

The tooltip component provides short generated hints and structured,
ARIA-referenceable content through one stylesheet and one token API.

## Short text

```html
<tooltip content="Saved to your workspace" place="top">
  <button type="button">Save</button>
</tooltip>

<span data-tooltip="Required before publishing" place="right">
  <button type="button">Status</button>
</span>
```

Use `<tooltip content="…">`, `[data-tooltip="…"]`, or
`.tooltip[data-tooltip="…"]`. `place` accepts `top`, `right`, `bottom`, and
`left`.

## Structured content

```html
<button type="button" data-tooltip-host aria-describedby="billing-tip">
  Billing info
  <tooltip id="billing-tip" role="tooltip" position="top">
    <strong>Next invoice</strong><br>
    <small>Due on August 1</small>
  </tooltip>
</button>
```

Structured hosts can use `<tooltip role="tooltip">`, `[data-rich-tooltip]`, or
`.rich-tooltip`. Keep the tooltip as a direct child of a parent carrying
`data-tooltip-host` or `.tooltip-host`. `position`, `data-position`, and the
placement classes support the same four directions.

## Tokens

- `--tooltip-background`
- `--tooltip-color`
- `--tooltip-border-color`
- `--tooltip-padding`
- `--tooltip-radius`
- `--tooltip-offset`
- `--tooltip-max-width`
- `--tooltip-delay`
- `--tooltip-z-index`

Generated text is supplemental; the trigger still needs an accessible name.
Structured content should use `role="tooltip"` and `aria-describedby`. Do not put
interactive controls inside a tooltip.

`components/tooltips.css` remains as a compatibility import. New direct imports
should use `components/tooltip.css`.
