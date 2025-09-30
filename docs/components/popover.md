# Popover Component Documentation

## Overview
The `popover` component provides styles for the native HTML Popover API, enabling modal-like overlays with backdrop effects and smooth animations. It supports the `[popover]` attribute for top-layer rendering.

## Key Features
- **Popover API**: Uses native browser popover functionality
- **Backdrop Effects**: Blur and semi-transparent overlay
- **Smooth Animations**: Entry/exit transitions with `@starting-style`
- **Responsive**: Clamped max-width for various screen sizes
- **Elevation**: Shadow effects for depth

## Attributes
- `popover`: Enables popover behavior (auto, manual, or hint)

## Styling Details

### Popover Element
- **Positioning**: Absolute (managed by browser)
- **Background**: Surface default with auto-contrast text
- **Border**: Outline default with large radius
- **Padding**: Large spacing
- **Max Width**: Responsive clamp (250px to 400px)
- **Elevation**: Level 3 shadow

### Backdrop
- **Background**: Semi-transparent black
- **Filter**: Blur effect for glassmorphism
- **Coverage**: Full viewport

## Usage Example
```html
<button popovertarget="my-popover">Toggle Popover</button>
<div id="my-popover" popover="auto">
  <p>Popover content</p>
</div>
```

## Animation Details

### Entry Animation
- **Starting Style**: Opacity 0, translateY 10px
- **Transition**: 300ms ease-out for opacity, transform, display
- **Effect**: Smooth fade-in with upward slide

### Exit Animation
- **Reverse Transition**: Same timing for smooth close
- **Display**: Uses `allow-discrete` for proper animation

## CSS Custom Properties Used
- `--surface-default`: Background color
- `--auto-contrast-text`: Dynamic text color calculation
- `--outline-default`: Border color
- `--radius-lg`: Border radius (default: 0.75rem)
- `--spacing-lg`: Padding (default: 1.5rem)
- `--focus-ring-width`: Focus ring width
- `--focus-ring-style`: Focus ring style
- `--focus-ring-color`: Focus ring color

## Browser Support
- **Popover API**: Chrome 114+, Safari 17+ (limited)
- **@starting-style**: Chrome 112+, Safari 17.4+
- **::backdrop**: Chrome 76+, Firefox 103+, Safari 9+
- **Fallback**: Basic absolute positioning in unsupported browsers

## Accessibility
- **Light Dismiss**: Click outside to close (native)
- **Focus Management**: Automatic focus trapping
- **Keyboard**: Escape key closes popover
- **Screen Readers**: Proper announcement of popover state

## Integration Notes
- **Trigger Elements**: Use `popovertarget` attribute on buttons
- **Popover Values**:
  - `auto`: Closes when clicking outside or pressing Escape
  - `manual`: Requires JavaScript to close
  - `hint`: Closes on hover loss
- **Styling**: Popovers render in top layer, above other content

## Use Cases
- **Tooltips**: Informational overlays
- **Menus**: Dropdown navigation
- **Dialogs**: Confirmation prompts
- **Forms**: Additional input options
- **Help Text**: Contextual assistance