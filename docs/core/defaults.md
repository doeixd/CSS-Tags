# Defaults Core Documentation

## Overview
The `defaults.css` file applies structural styles and basic appearance to HTML elements using design tokens. It provides consistent typography, form styling, and component foundations while maintaining separation between structure and theme colors.

## Key Features
- **Layer Organization**: Uses `@layer defaults` for cascade control
- **Token Integration**: Consumes variables from theme and tokens layers
- **Structural Focus**: Defines spacing, typography, and layout without colors
- **Component Foundations**: Basic styles for buttons, inputs, cards
- **Accessibility**: Focus management and reduced motion support

## Typography System

### Base Body Styles
- **Font Family**: System UI fonts with smoothing
- **Line Height**: 1.5 for optimal readability
- **Text Rendering**: Optimized for legibility
- **Hyphenation**: Automatic for better text flow

### Heading Hierarchy
```css
h1 { font-size: var(--font-size-h1, 2.5rem); }
h2 { font-size: var(--font-size-h2, 2.0rem); }
h3 { font-size: var(--font-size-h3, 1.75rem); }
h4 { font-size: var(--font-size-h4, 1.5rem); }
h5 { font-size: var(--font-size-h5, 1.25rem); }
h6 { font-size: var(--font-size-h6, 1.0rem); }
```

### Text Elements
- **Paragraphs**: Standard line height and color
- **Lists**: Proper indentation and spacing
- **Links**: Underline styling with transitions
- **Code**: Monospace font with background/border structure

## Form Elements

### Input Structure
- **Padding**: Consistent internal spacing
- **Borders**: Standardized width and radius
- **Transitions**: Smooth color and shadow changes
- **Width**: Full width by default

### Button Structure
- **Padding**: Vertical and horizontal spacing
- **Border Radius**: Medium radius
- **Transitions**: Multi-property animations
- **Hover Effects**: Transform and shadow changes

### Select Elements
- **Arrow Spacing**: Reserved space for custom arrow
- **Appearance**: Consistent with input styling

### Checkbox/Radio
- **Custom Appearance**: Removed native styling
- **Sizing**: Consistent dimensions
- **Indicators**: Pseudo-element checkmarks

## Layout Components

### Container
```css
.container {
  width: min(100% - var(--space-container-padding), var(--width-container-max));
  margin-inline: auto;
}
```

### Box Utility
```css
.box {
  padding: var(--b-p, 0);
  margin: var(--b-m, 0);
  border-width: var(--b-bw, 0);
  /* Additional properties for flexible box styling */
}
```

## Component Foundations

### Button Component
- **Base Styling**: Surface background with outline border
- **Hover States**: Subtle highlight background
- **Focus States**: Thick outline with offset
- **Disabled States**: Reduced opacity and muted colors

### Input Field Component
- **Background**: Subtle surface
- **Focus Ring**: Box shadow with theme color
- **Placeholder**: Muted text color
- **Validation**: Error state styling

### Card Component
- **Structure**: Rounded container with padding
- **Shadow**: Subtle elevation
- **Auto-Contrast**: Dynamic text color calculation

## Accessibility Features

### Focus Management
- **Visible Focus**: Outline-based focus indicators
- **Offset**: Proper spacing from element bounds
- **Consistency**: Unified focus ring across components

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
  scroll-margin-block-start: var(--space-target-margin, 5ex);
}
```

## View Transitions
Basic structure for page transitions:
- **Duration/Timing**: Configurable via variables
- **Fade Effects**: Simple opacity transitions
- **Z-index Management**: Proper layering

## Color Integration Strategy

### Separation of Concerns
- **Structure in Defaults**: Spacing, sizing, layout
- **Colors in Theme**: Applied via CSS custom properties
- **Dynamic Colors**: Auto-contrast calculations

### Theme Variable Usage
```css
.button {
  background-color: var(--surface-default);
  color: var(--text-default);
  border-color: var(--outline-default);
}
```

## Table Styling

### Structure Only
- **Width**: Full width
- **Borders**: Consistent border model
- **Cell Padding**: Standardized spacing
- **Header Styling**: Font weight and positioning

### Color Integration
- **Header Background**: Theme-based
- **Row Hover**: Dynamic background with auto-contrast
- **Border Colors**: Outline system

## Code and Content Elements

### Code Blocks
- **Font**: Monospace
- **Padding**: Block-level spacing
- **Overflow**: Horizontal scrolling
- **Border Radius**: Consistent with forms

### Inline Code
- **Padding**: Inline spacing
- **Background/Border**: Subtle differentiation

### Blockquotes
- **Indentation**: Logical left border
- **Spacing**: Consistent margins

## Utility Classes

### Basic Utilities
- `.display-none`: Hide elements
- `.container`: Centered content wrapper
- `.box`: Flexible box styling
- `.cq-container`: Container query setup

### Component Classes
- `.button`: Base button styling
- `.input-field`: Form input styling
- `.card`: Basic card structure
- `.contrast-pair`: Auto-contrast text on colored backgrounds

## Responsive Considerations

### Container Queries Setup
```css
.cq-container, .cq {
  container-type: var(--cq-type, inline-size);
  container-name: var(--cq-name, default);
}
```

### Breakpoint Integration
Components can respond to global breakpoint state set in `base.css`.

## Browser Support
- **CSS Layers**: All modern browsers
- **CSS Custom Properties**: All modern browsers
- **Container Queries**: Chrome 105+, Firefox 110+, Safari 16+
- **Logical Properties**: All modern browsers
- **Fallback**: Graceful degradation to basic styling

## Integration with Framework
This layer provides the structural foundation that other layers enhance:
- **Base Layer**: Provides tokens and resets
- **Theme Layer**: Adds semantic colors
- **Components Layer**: Adds interactive behavior
- **Utilities Layer**: Adds helper classes

## Customization
Override default variables to customize:
```css
:root {
  --font-size-h1: 3rem; /* Larger headings */
  --space-container-padding: 2rem; /* More side padding */
  --radius-md: 8px; /* Rounder corners */
}
```