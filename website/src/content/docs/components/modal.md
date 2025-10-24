---
title: Modal Component
description: The `modal` component provides a simple, centered overlay modal with a backdrop. It uses CSS Grid for centering and includes basic styling for the modal panel.
---

## Overview
The `modal` component provides a simple, centered overlay modal with a backdrop. It uses CSS Grid for centering and includes basic styling for the modal panel.

## Key Features
- **Centered Layout**: Uses CSS Grid to center the modal both horizontally and vertically
- **Backdrop**: Semi-transparent overlay with blur effect
- **Responsive**: Minimum width constraints with responsive padding
- **Accessible**: Proper z-index and positioning

## Structure
- `.modal`: Main container with fixed positioning and backdrop
- `.modal__panel`: The modal content panel with styling

## Styling Details

### Container (.modal)
- **Position**: Fixed, full viewport coverage
- **Layout**: CSS Grid with `place-items: center` for centering
- **Backdrop**: Semi-transparent background with blur
- **Padding**: Responsive padding using design tokens

### Panel (.modal__panel)
- **Layout**: Flex column for content stacking
- **Background**: Uses surface role with contrast text
- **Border**: Subtle border with rounded corners
- **Sizing**: Minimum width of 90vw or 720px, responsive padding

## Usage Example
```html
<div class="modal">
  <div class="modal__panel">
    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
    <button>Close</button>
  </div>
</div>
```

## CSS Custom Properties Used
- `--l-padding`: Padding for modal and panel (default: `var(--spacing-lg)`)
- `--bedrock`: Base color for backdrop (likely a very dark color)
- `--role`: Surface role for panel (default: `default`)
- `--bg`: Background color
- `--border-width`: Border width (default: `1px`)
- `--border`: Border color
- `--radius-lg`: Border radius (default: `0.75rem`)
- `--spacing-lg`: Spacing values

## Accessibility
- **Focus Management**: Modal should trap focus (implement in JavaScript)
- **Screen Readers**: Proper ARIA attributes needed
- **Keyboard Navigation**: Escape key handling required
- **Backdrop**: Click outside to close (implement in JavaScript)

## Browser Support
- All modern browsers supporting CSS Grid and backdrop-filter
- Fallback: Basic centering without backdrop blur in older browsers

## Integration Notes
This is a basic CSS-only modal. For full functionality, combine with JavaScript for:
- Show/hide logic
- Focus trapping
- Keyboard navigation
- Backdrop click handling

## Use Cases
- **Dialogs**: Confirmation dialogs, alerts
- **Forms**: Modal forms and wizards
- **Content**: Image galleries, detailed information
- **Navigation**: Mobile menus, settings panels