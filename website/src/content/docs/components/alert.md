---
title: Alert Component
description: The alert component provides a flexible notification system for displaying messages to users. It supports different statuses (success, warning, error, info) and
---

## Overview
The alert component provides a flexible notification system for displaying messages to users. It supports different statuses (success, warning, error, info) and density variants for various use cases.

## Base Structure
```css
.alert {
  /* Base alert styling with info status by default */
}
```

## Variants

### Status Variants
- `.alert[status="success"]` - Green-themed success alert
- `.alert[status="warning"]` - Yellow/orange-themed warning alert
- `.alert[status="error"]` - Red-themed error alert
- `.alert[status="info"]` - Blue-themed info alert (default)

### Density Variants
- `.alert[density="compact"]` - Smaller padding and gaps
- `.alert[density="spacious"]` - Larger padding and gaps

## Internal Elements
- `.alert__icon` - Container for status icons
- `.alert__title` - Alert title with bold font weight
- `.alert__body` - Main alert content
- `.alert__actions` - Container for action buttons

## Usage Example
```html
<div class="alert" status="success">
  <div class="alert__icon">✓</div>
  <div>
    <div class="alert__title">Success!</div>
    <div class="alert__body">Your action was completed successfully.</div>
  </div>
  <div class="alert__actions">
    <button>Undo</button>
  </div>
</div>
```

## CSS Custom Properties Used
- `--bg` - Background color
- `--border` - Border color
- `--border-width` - Border width (default: 1px)
- `--radius-md` - Border radius (default: 6px)
- `--l-padding` - Padding (default: var(--spacing-md))
- `--l-gap` - Gap between elements (default: var(--spacing-md))
- `--spacing-sm`, `--spacing-md`, `--spacing-lg` - Spacing values

## Accessibility
- Uses semantic colors that adapt to theme changes
- Supports high contrast mode
- Auto-contrast text ensures readability
- Grid layout for proper screen reader navigation