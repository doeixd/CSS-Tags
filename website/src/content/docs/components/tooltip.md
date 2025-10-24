---
title: Tooltip Component
description: The `tooltip` component provides simple CSS-only tooltips that appear on hover or focus. It uses the `content` attribute to display tooltip text and supports mu
---

## Overview
The `tooltip` component provides simple CSS-only tooltips that appear on hover or focus. It uses the `content` attribute to display tooltip text and supports multiple placement positions.

## Key Features
- **CSS-Only**: No JavaScript required for basic functionality
- **Attribute-Driven**: Uses `content` attribute for tooltip text
- **Multiple Positions**: Top, right, bottom, left placements
- **Motion Preferences**: Respects `prefers-reduced-motion`
- **Inline Display**: Doesn't disrupt document flow

## Attributes
- `content`: Tooltip text content
- `place`: Position of tooltip (default: `top`)
  - `top`: Above the element
  - `right`: To the right of the element
  - `bottom`: Below the element
  - `left`: To the left of the element

## Styling Details

### Base Tooltip
- **Position**: Relative container
- **Display**: Inline-block to maintain flow
- **Pseudo-element**: `::after` for tooltip content
- **Positioning**: Absolute with transforms for centering

### Tooltip Bubble
- **Content**: From `content` attribute
- **Background**: Surface role with border
- **Text Color**: Auto-contrast for readability
- **Border Radius**: Small radius
- **Padding**: Minimal padding
- **Max Width**: 60ch for readability
- **White Space**: No-wrap to prevent breaking

### Positioning
- **Top**: Above element, centered horizontally
- **Right**: Right of element, centered vertically
- **Bottom**: Below element, centered horizontally
- **Left**: Left of element, centered vertically

## Usage Example
```html
<button tooltip content="Save your changes" place="top">
  Save
</button>

<span tooltip content="This field is required" place="right">
  Name *
</span>
```

## CSS Custom Properties Used
- `--role`: Surface role (default: `overt`)
- `--bg`: Background color
- `--border`: Border color
- `--radius-sm`: Border radius
- `--l-padding`: Padding (default: `0.25em 0.5em`)

## Accessibility
- **Hover/Focus**: Appears on both hover and keyboard focus
- **Motion**: Disabled when `prefers-reduced-motion: reduce`
- **Screen Readers**: May need ARIA attributes for full accessibility
- **Timing**: No delay (immediate appearance)

## Limitations
- **CSS-Only**: No advanced features like delays or animations
- **Positioning**: Fixed offsets, no collision detection
- **Styling**: Limited customization options
- **Advanced Features**: For complex tooltips, see `tooltips.css`

## Browser Support
- All modern browsers
- CSS pseudo-elements and attribute selectors
- Fallback: No tooltip display in very old browsers

## Use Cases
- **Form Labels**: Field help text
- **Button Tooltips**: Action explanations
- **Icon Buttons**: Clarify icon meanings
- **Abbreviations**: Expand acronyms
- **Status Indicators**: Explain status icons

## Related Components
For more advanced tooltip functionality, see `tooltips.css` which includes:
- Anchor positioning
- Popover API integration
- Animation and transitions
- Collision detection
- Customizable styling