# Chip Component Documentation

## Overview
The `chip` component provides compact, inline elements for displaying tags, filters, or selectable options. It supports multiple sizes, roles, and includes removable functionality with a close button.

## Key Features
- **Size Variants**: Small, medium, and large options
- **Role Variants**: Different visual emphasis levels (subtle, default, overt, muted)
- **Removable Chips**: Built-in close button with focus and hover states
- **Inline Display**: Designed for horizontal layouts
- **Auto-Contrast**: Text color automatically adjusts for readability

## Variants

### Size Variants
- `chip[size="sm"]`: Compact chip with smaller padding and font
- `chip[size="md"]`: Default medium size
- `chip[size="lg"]`: Larger chip with increased padding and font

### Role Variants
- `chip[role="subtle"]`: Subtle background (default)
- `chip[role="default"]`: Standard background
- `chip[role="overt"]`: Prominent background
- `chip[role="muted"]`: Muted background

### Special Variants
- `chip[removable]`: Adds a close button (×) and focus/hover effects

## Usage Examples

### Basic Chip
```html
<chip>Tag</chip>
```

### Removable Chip
```html
<chip removable>Filter Tag</chip>
```

### Different Sizes and Roles
```html
<chip size="sm" role="overt">Small Overt</chip>
<chip size="lg" role="muted">Large Muted</chip>
```

### With Icons
```html
<chip>
  <svg>...</svg>
  Label
</chip>
```

## CSS Custom Properties Used
- `--l-gap`: Gap between chip content and close button (default: 0.5em)
- `--role`: Surface role for background styling (default: subtle)
- `--bg`: Background color
- `--border-width`: Border width (default: 1px)
- `--border`: Border color
- `--radius-full`: Border radius for pill shape (default: 9999px)
- `--b-bg`, `--b-bw`, `--b-bc`, `--b-r`, `--b-py`, `--b-px`: Internal styling variables

## Removable Functionality
When the `removable` attribute is present:
- **Close Button**: × symbol appears on the right
- **Focus Ring**: Visible focus outline for keyboard navigation
- **Hover Effect**: Slight brightness increase
- **Accessibility**: Proper focus management for screen readers

## Styling Details
- **Display**: Inline flex with center alignment
- **Border Radius**: Fully rounded (pill shape)
- **Font Size**: Scales with size variants
- **Line Height**: 1 for tight vertical spacing
- **Padding**: Responsive to size variants

## Accessibility
- **Keyboard Navigation**: Focus ring on removable chips
- **Screen Readers**: Semantic button behavior for close functionality
- **Color Contrast**: Auto-contrast ensures text readability
- **Motion**: Hover effects respect user preferences

## Use Cases
- **Tags**: Content categorization
- **Filters**: Active filter indicators
- **Selections**: Multi-select options
- **Labels**: Status or category indicators
- **Input Chips**: Email addresses or keywords in forms

## Browser Support
- All modern browsers supporting CSS custom properties
- Graceful degradation in older browsers (basic styling maintained)