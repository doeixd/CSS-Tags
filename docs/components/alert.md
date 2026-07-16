# Alert Component Documentation

## Overview
The alert component provides a flexible notification system for displaying messages to users. It supports custom-element, data, and class hosts plus success, warning, error, and info states.

## Base Structure
```html
<alert-message role="status">...</alert-message>
<div data-alert role="status">...</div>
<div class="alert" role="status">...</div>
```

## Variants

### Status Variants
- `status="success"`, `data-status="success"`, or `.alert-success`
- `status="warning"`, `data-status="warning"`, or `.alert-warning`
- `status="error"`, `data-status="error"`, or `.alert-error`
- `status="info"`, `data-status="info"`, or `.alert-info`

### Density Variants
- `.alert[density="compact"]` - Smaller padding and gaps
- `.alert[density="spacious"]` - Larger padding and gaps

## Internal Elements
- Icon: `slot="icon"`, `data-alert-icon`, or `.alert__icon`
- Title: `slot="title"`, `data-alert-title`, or `.alert__title`
- Body: `slot="body"`, `data-alert-body`, or `.alert__body`
- Actions: `slot="actions"`, `data-alert-actions`, or `.alert__actions`

## Usage Example
```html
<alert-message status="success" role="status">
  <div slot="icon" aria-hidden="true">✓</div>
  <div>
    <div class="alert__title">Success!</div>
    <div class="alert__body">Your action was completed successfully.</div>
  </div>
  <div slot="actions">
    <button>Undo</button>
  </div>
</alert-message>
```

## CSS Custom Properties Used
- `--alert-background`, `--alert-color`, and `--alert-border-color`
- `--alert-border-width` and `--alert-radius`
- `--alert-padding` and `--alert-gap`
- status-specific `--alert-*-background`, `--alert-*-color`, and
  `--alert-*-border-color` variables

## Accessibility
- Uses semantic colors that adapt to theme changes
- Supports high contrast mode
- Auto-contrast text ensures readability
- Optional icon and action columns are enhanced with `:has()`; the fallback is
  a complete stacked layout.
