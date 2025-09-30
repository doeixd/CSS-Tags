# Base Core Documentation

## Overview
The `base.css` file provides foundational styles, design tokens, and global state management for the CSS framework. It establishes the core architecture using modern CSS features like typed custom properties and style queries.

## Key Features
- **Typed Design Tokens**: Uses `@property` for type-safe CSS variables
- **Global Breakpoint State**: Container queries on `<body>` for responsive state management
- **Modern Color System**: OKLCH colors for perceptually uniform theming
- **Automatic Dark Mode**: Prefers-color-scheme integration
- **Universal Resets**: Box-sizing and basic element normalization

## Design Tokens

### Typed Properties
```css
@property --theme-primary { syntax: '<color>'; inherits: true; initial-value: oklch(55% 0.15 240); }
@property --theme-bg { syntax: '<color>'; inherits: true; initial-value: oklch(98% 0.01 240); }
@property --theme-text { syntax: '<color>'; inherits: true; initial-value: oklch(20% 0.02 240); }
```

These provide:
- **Type Safety**: Browser validates property values
- **Animation Support**: Properties can be animated smoothly
- **Default Values**: Fallbacks ensure consistent behavior

### Breakpoint Thresholds
- `--bp-sm: 640px` - Small breakpoint
- `--bp-md: 768px` - Medium breakpoint
- `--bp-lg: 1024px` - Large breakpoint
- `--bp-xl: 1280px` - Extra large breakpoint

## Global State Management

### Container Queries on Body
```css
body {
  container-type: style;
  container-name: breakpoint-container;
  --breakpoint-active: xl; /* Default state */
}
```

### Media Query State Updates
```css
@media (max-width: var(--bp-xl)) { body { --breakpoint-active: lg; } }
@media (max-width: var(--bp-lg)) { body { --breakpoint-active: md; } }
@media (max-width: var(--bp-md)) { body { --breakpoint-active: sm; } }
```

This creates a global breakpoint state that any component can react to using style queries.

## Universal Resets
- **Box-sizing**: `border-box` on all elements
- **Margin Reset**: Zero margins on body, headings, and paragraphs
- **Color Scheme**: Announces light/dark support to browser

## Automatic Dark Mode
```css
@media (prefers-color-scheme: dark) {
  :root {
    --theme-bg: oklch(20% 0.02 240);
    --theme-text: oklch(98% 0.01 240);
    --theme-primary: oklch(65% 0.18 240);
  }
}
```

Automatically switches theme colors based on user preference.

## Base Body Styles
- **Background**: Uses `--theme-bg`
- **Color**: Uses `--theme-text`
- **Font Family**: System UI fonts
- **Line Height**: 1.5 for readability

## Architecture Benefits

### Component-Level Responsiveness
Unlike media queries, components can respond to the global state:
```css
.my-component {
  font-size: 1rem;
}

@container style(--breakpoint-active = sm) {
  .my-component {
    font-size: 0.875rem;
  }
}
```

### Theme Customization
Override theme properties for branding:
```css
:root {
  --theme-primary: oklch(60% 0.2 30); /* Custom brand color */
  --theme-bg: oklch(95% 0.05 30); /* Custom background */
}
```

### Type Safety
Typed properties prevent invalid values:
```css
/* Valid */
--theme-primary: oklch(50% 0.1 240);

/* Invalid - browser ignores */
--theme-primary: "not-a-color";
```

## Browser Support
- **@property**: Chrome 85+, Firefox 128+ (limited)
- **Container Queries**: Chrome 105+, Firefox 110+, Safari 16+
- **OKLCH**: Chrome 111+, Firefox 113+, Safari 15.4+
- **Fallback**: Basic functionality in older browsers

## Integration with Framework Layers
This file establishes the foundation that other layers build upon:
- **Tokens Layer**: Provides raw values
- **Theme Layer**: Semantic color roles
- **Defaults Layer**: Element styling
- **Components Layer**: Interactive elements
- **Utilities Layer**: Helper classes

## Usage Notes
- **Global Scope**: Properties defined here are available everywhere
- **Inheritance**: Theme properties inherit down the DOM tree
- **Override Strategy**: Customize by redefining properties in `:root`
- **Progressive Enhancement**: Framework works without advanced features