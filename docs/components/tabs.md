# Tabs Documentation

## Overview
Tabs are styled semantically from ARIA roles rather than a required custom component wrapper.

## Required Roles
- `role="tablist"`
- `role="tab"`
- `role="tabpanel"`

## Basic Example
```html
<div role="tablist" aria-label="Demo tabs">
  <button role="tab" aria-selected="true" aria-controls="panel-a" id="tab-a">Overview</button>
  <button role="tab" aria-selected="false" aria-controls="panel-b" id="tab-b">API</button>
</div>

<div role="tabpanel" id="panel-a" aria-labelledby="tab-a">Overview content</div>
<div role="tabpanel" id="panel-b" aria-labelledby="tab-b" hidden>API content</div>
```

## States
- active: `aria-selected="true"`
- disabled: `aria-disabled="true"` or `disabled`
- hidden panels: `hidden`

## Optional Selector Aliases
- `[data-tablist]`, `.tablist`
- `[data-tab]`, `.tab`
- `[data-tabpanel]`, `.tabpanel`

## Tokens
- `--tabs-gap`
- `--tabs-padding-inline`
- `--tabs-padding-block`
- `--tabs-border-color`
- `--tabs-background`
- `--tabs-tab-color`
- `--tabs-tab-hover-background`
- `--tabs-tab-hover-color`
- `--tabs-tab-active-background`
- `--tabs-tab-active-color`
- `--tabs-tab-active-border`
- `--tabs-panel-background`
- `--tabs-panel-border`
- `--tabs-panel-radius`
- `--tabs-panel-padding`
- `--tabs-indicator-width`

## Notes
- CSS styles the ARIA states; JavaScript should manage selection, focus movement, and panel visibility.
- Vertical tablists are supported with `aria-orientation="vertical"`.
