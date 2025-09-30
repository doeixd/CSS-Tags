# Reset Core Documentation

## Overview
The `reset.css` file provides a comprehensive CSS reset and normalization system with modern CSS features. It establishes consistent baselines across browsers while incorporating cutting-edge CSS properties for enhanced user experience.

## Key Features
- **Zero-Specificity Reset**: Uses `:where()` for easy overrides
- **Modern CSS Properties**: Incorporates latest CSS features
- **Enhanced Typography**: Improved text rendering and layout
- **Form Element Styling**: Consistent form appearance
- **Accessibility**: Focus management and reduced motion support
- **View Transitions**: Native page transition support

## Core Reset Principles

### Zero Specificity with `:where()`
```css
:where(html, body, h1, h2, h3, p) {
  margin: 0;
}
```
All rules use `:where()` to maintain zero specificity, allowing easy customization.

### Universal Box Model
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```
Ensures consistent sizing calculations across all elements.

## HTML Element Normalization

### Document Structure
- **HTML/Body**: Full width/height, smooth scrolling
- **Text Size Adjust**: Prevents zoom issues on mobile
- **Font Synthesis**: Prevents faux bold/italic
- **Text Rendering**: Optimized for legibility

### Media Elements
- **Images/Video/Canvas/SVG**: Block display, max-width 100%
- **Aspect Ratio**: Maintained automatically

### Form Elements
- **Inputs/Buttons/Textareas**: Inherit font, pointer cursor
- **Field Sizing**: Content-based sizing for modern browsers

## Enhanced Features

### Modern Typography
- **Text Wrap**: `balance` for headings, `pretty` for paragraphs
- **Text Box Trim**: Precise text box edges for buttons
- **Form Sizing**: Content-aware textarea sizing

### Interactive Elements
- **Button Styling**: Consistent appearance with theme variables
- **Focus Management**: Enhanced focus rings
- **Transition Behavior**: Smooth state changes

### Layout Enhancements
- **Size Interpolation**: Allows width/height animations
- **Scroll Behavior**: Smooth scrolling when focused
- **Container Queries**: Size-aware components

## Accessibility Features

### Focus Indicators
```css
:focus-visible {
  outline-style: solid;
  outline-width: var(--focus-ring-width, 2px);
  outline-offset: var(--focus-ring-offset, 2px);
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Target Scrolling
```css
:target {
  scroll-margin-block: 5ex;
}
```

## Modern CSS Properties

### Popover API Support
```css
*::backdrop {
  all: unset;
  position: fixed;
  inset: 0;
  opacity: 0.7;
}
```

### View Transitions
```css
@view-transition {
  navigation: auto;
}
```

### Container Queries
```css
.cq-container, .cq {
  container-type: var(--cq-type, inline-size);
  container-name: var(--cq-name, default);
}
```

## Component Foundations

### Button Reset
- **Background/Border**: Theme-aware styling
- **Transitions**: Smooth hover/active states
- **Box Sizing**: Content-box for border escape

### Form Element Structure
- **Consistent Padding**: Standardized internal spacing
- **Border Radius**: Medium radius for modern appearance
- **Transition Properties**: Smooth focus changes

## Utility Classes

### Visibility Controls
- `.display-none`: Force hide elements
- `.visually-hidden`: Screen reader only content

### Layout Helpers
- **Container Queries**: Easy CQ setup
- **Box Utility**: Flexible padding/margin/border utility

## Browser Support Strategy

### Progressive Enhancement
- **Modern Properties**: Used with fallbacks
- **Feature Queries**: `@supports` for conditional application
- **Vendor Prefixes**: Included where necessary

### Fallback Behavior
- **Basic Functionality**: Works in older browsers
- **Graceful Degradation**: Enhanced features don't break basic layout
- **Optional Features**: Modern features enhance but don't require

## Integration with Framework

### Theme Variables
The reset uses theme variables for colors and spacing:
```css
button {
  background: var(--bg);
  border: var(--border);
  color: var(--text);
}
```

### Layer Organization
Part of the `reset` cascade layer, applied before other styles.

### Customization
Override reset rules by increasing specificity or using later layers:
```css
/* Custom button styling */
button {
  background: var(--custom-bg);
}
```

## Performance Considerations

### Efficient Selectors
- **`:where()` Usage**: Zero specificity for fast cascade resolution
- **Minimal Calculations**: Static values where possible
- **Transition Properties**: Targeted transitions for smooth animations

### Rendering Optimizations
- **Content Visibility**: Hidden off-screen elements
- **Will Change**: Implicit through transitions
- **Layer Promotion**: Automatic for animated elements

## Best Practices

### When to Use
- **Framework Foundation**: Apply before component styles
- **Cross-Browser Consistency**: Normalize browser differences
- **Modern Enhancement**: Add progressive enhancements

### Customization Approach
- **Layer Overrides**: Use higher layers for modifications
- **Variable Overrides**: Change design tokens
- **Component Scoping**: Isolate custom components

### Maintenance
- **Version Updates**: Monitor new CSS features for inclusion
- **Browser Testing**: Verify across target browsers
- **Performance Monitoring**: Check for layout thrashing