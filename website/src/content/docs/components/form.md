---
title: Form Component
description: The `form` component provides accessible, styled form elements with design token integration. It includes scoped styling for inputs, buttons, selects, and texta
---

## Overview
The `form` component provides accessible, styled form elements with design token integration. It includes scoped styling for inputs, buttons, selects, and textareas to ensure consistent appearance and behavior.

## Key Features
- **Scoped Styling**: Uses `@scope` to isolate form element styles
- **Accessibility**: Enhanced focus states and keyboard navigation
- **Design Tokens**: Integrates with the framework's color and spacing system
- **Responsive**: Adapts to different themes and contexts
- **Consistent UX**: Unified interaction patterns across form elements

## Supported Elements

### Form Input (`form-input`)
- **HTML Equivalents**: `input[type="text|email|password|number|tel|url|search"]`
- **Features**: Full-width, padded, with focus and hover states
- **Placeholder Styling**: Muted text color for placeholders

### Form Button (`form-button`)
- **HTML Equivalents**: `button`, `input[type="submit|button"]`
- **Features**: Inline-flex layout, hover/active states, focus outlines
- **Interactions**: Scale animation on click, color transitions

### Form Select (`form-select`)
- **HTML Equivalents**: `select`
- **Features**: Full-width dropdown with focus states
- **Styling**: Consistent with input elements

### Form Textarea (`form-textarea`)
- **HTML Equivalents**: `textarea`
- **Features**: Resizable vertically, multi-line input
- **Sizing**: Minimum height with flexible expansion

## Styling Details

### Common Properties
- **Font**: Inherits family, size, and line-height
- **Transitions**: Smooth color and shadow changes
- **Colors**: Uses design tokens for backgrounds, text, and borders

### Focus States
- **Border Color**: Changes to focus outline color
- **Box Shadow**: Adds focus ring for visibility
- **Outline**: Button elements use outline instead of box-shadow

### Hover States
- **Inputs**: Border color changes to overt outline
- **Buttons**: Background color changes to overt accent

### Active States
- **Buttons**: Scale down slightly and change to muted accent color

## Utility Classes

### Button Variants
- `.btn-primary`: Primary accent button (default)
- `.btn-secondary`: Secondary color scheme
- `.btn-success`: Success-themed button
- `.btn-warning`: Warning-themed button
- `.btn-error`: Error-themed button

### Input States
- `.input-error`: Red border for validation errors
- `.input-success`: Green border for success states

## Usage Examples

### Basic Form
```html
<form>
  <form-input type="email" placeholder="Enter your email">
  <form-button type="submit">Submit</form-button>
</form>
```

### Complete Form
```html
<form>
  <form-input type="text" placeholder="Name">
  <form-input type="email" placeholder="Email">
  <form-textarea placeholder="Message"></form-textarea>
  <form-select>
    <option>Option 1</option>
    <option>Option 2</option>
  </form-select>
  <form-button class="btn-primary">Send</form-button>
  <form-button class="btn-secondary" type="button">Cancel</form-button>
</form>
```

### With Validation States
```html
<form-input class="input-error" placeholder="Invalid input">
<form-input class="input-success" placeholder="Valid input">
```

## CSS Custom Properties Used
- `--font-size-base`: Base font size
- `--line-height-normal`: Normal line height
- `--spacing-sm`, `--spacing-md`, `--spacing-lg`: Spacing values
- `--bg`, `--fg`: Background and foreground colors
- `--surface-default`: Default surface color
- `--text-default`, `--text-muted`: Text colors
- `--border-width`: Border width
- `--outline-default`, `--outline-focus`, `--outline-overt`: Outline colors
- `--radius-md`: Border radius
- `--focus-ring-width`, `--focus-ring-color`: Focus ring properties
- `--accent`, `--accent-overt`, `--accent-muted`: Accent colors
- `--text-on-accent`: Text color on accent backgrounds
- `--secondary`, `--success`, `--warning`, `--error`: Semantic colors
- `--text-on-secondary`, etc.: Text colors for semantic backgrounds

## Accessibility
- **Focus Management**: Visible focus indicators for keyboard navigation
- **Color Contrast**: Design token system ensures WCAG compliance
- **Screen Readers**: Semantic form elements with proper labeling
- **Motion**: Respects `prefers-reduced-motion` (inherited)

## Browser Support
- **@scope**: Chrome 118+, Firefox 128+ (limited support in Safari)
- **CSS Nesting**: Modern browsers
- **Fallback**: Styles apply to standard HTML elements in unsupported browsers

## Integration
The form component integrates with the framework's:
- **Color System**: OKLCH-based theming
- **Spacing System**: Consistent padding and gaps
- **Typography**: Inherited font properties
- **Focus Management**: Unified focus ring system