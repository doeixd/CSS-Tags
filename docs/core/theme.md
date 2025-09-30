# Theme Core Documentation

## Overview
The `theme.css` file defines the semantic color system and theming architecture for the CSS framework. It provides light and dark mode themes, high contrast support, and a comprehensive set of color roles for consistent UI theming.

## Key Features
- **Semantic Color Roles**: Meaningful color names instead of generic colors
- **Automatic Dark Mode**: `prefers-color-scheme` integration
- **High Contrast Support**: Enhanced accessibility for visual impairments
- **Dynamic Color Calculations**: OKLCH-based color derivations
- **Theme Customization**: Easy brand color overrides

## Color Architecture

### Base Configuration
```css
--accent-h: var(--hue-violet); /* Brand color hue */
--accent-c: 0.15; /* Brand color chroma */
--accent-l: 60%; /* Brand color lightness */
```

### Derived Colors
- **Secondary/Tertiary**: Calculated hue shifts from accent
- **Feedback Colors**: Success, warning, error, info with predefined hues
- **Surface Hierarchy**: Multiple surface levels for depth

## Color Role System

### Surface Colors (Background Hierarchy)
```
overt > default > base > subtle > muted
```
- `--surface-overt`: Most prominent (cards, panels)
- `--surface-default`: Standard surfaces
- `--surface-subtle`: Subtle backgrounds
- `--surface-muted`: Disabled/low-contrast states

### Text Colors (Foreground Hierarchy)
```
overt > default > subtle > muted
```
- `--text-overt`: Headings, strong text
- `--text-default`: Body text
- `--text-subtle`: Secondary text
- `--text-muted`: Disabled/placeholder text

### Accent Colors (Brand Variations)
- `--accent`: Primary brand color
- `--accent-subtle`: Lighter variant
- `--accent-overt`: Darker variant
- `--accent-muted`: Desaturated variant

## Light Mode Theme

### Surface System
```css
--base: oklch(97.5% 0.015 250); /* Near-white background */
--surface-default: oklch(94% 0.12 250); /* Card backgrounds */
--surface-subtle: oklch(95% 0.105 250); /* Subtle surfaces */
```

### Text System
```css
--text-default: oklch(20% 0.2 250); /* High contrast body text */
--text-subtle: oklch(35% 0.18 250); /* Secondary text */
--text-overt: oklch(10% 0.22 250); /* Heading text */
```

### Interactive Elements
```css
--text-link: oklch(from var(--accent) calc(l + var(--l-delta-1-down)) ...);
--highlight-bg-subtle: oklch(from var(--base) calc(l + var(--l-delta-3-down)) ...);
```

## Dark Mode Theme

### Inverted Surfaces
```css
--base: oklch(22% 0.02 250); /* Dark background */
--surface-default: oklch(25% 0.02 250); /* Elevated surfaces */
--bedrock: oklch(95% 0.007 250); /* Light text/highlights */
```

### Adjusted Text Colors
```css
--text-default: oklch(88% 0.008 250); /* Light body text */
--text-subtle: oklch(75% 0.01 250); /* Muted text */
--text-overt: oklch(95% 0.006 250); /* Bright headings */
```

### Enhanced Shadows
```css
--shadow-color-dark: 220 20% 90%;
--shadow-sm: 0 1px 2px oklch(from hsl(var(--shadow-color-base)) ...);
```

## High Contrast Mode

### Enhanced Contrast
```css
--contrast-factor: 1.3; /* Increased contrast multiplier */
--l-threshold: 0.6; /* Adjusted lightness threshold */
--border-width: 1.5px; /* Thicker borders */
```

### Focus Enhancements
```css
--focus-ring-width: 3px; /* More visible focus rings */
--outline-focus: oklch(0.5 0.3 var(--accent-h)); /* High contrast focus */
```

## Color Calculation System

### Dynamic Adjustments
Colors are calculated using the engine's delta system:
```css
--accent-subtle: oklch(from var(--accent) calc(l + var(--l-delta-2)) calc(c + var(--c-delta-1-down)) h);
```

### Auto-Contrast Text
Text colors automatically adjust for readability:
```css
--text-on-accent: /* Calculated by --contrast-text-for-bg mixin */
```

## Feedback Color System

### Semantic Colors
- **Success**: Green tones for positive actions
- **Warning**: Orange/amber for caution
- **Error**: Red for errors/danger
- **Info**: Blue for informational content

### Surface Variants
```css
--surface-success: oklch(from var(--success) calc(l + var(--l-delta-11)) ...);
--outline-success: oklch(from var(--success) calc(l + var(--l-delta-2-down)) ...);
```

## Component-Specific Roles

### Form Elements
```css
--input-focus-bg: transparent;
--input-hover-border-color: var(--outline-overt);
--indicator-color: var(--text-on-accent); /* Checkmarks */
```

### Tables
```css
--table-border: var(--outline-default);
--table-header-bg: var(--surface-subtle);
--table-row-hover-bg: var(--highlight-bg-subtle);
```

### Code Blocks
```css
--code-block-bg: var(--surface-subtle);
--code-inline-bg: var(--surface-muted);
```

## Customization

### Brand Color Override
```css
:root {
  --accent-h: 280; /* Custom brand hue */
  --secondary-hue-shift: 60; /* Adjust secondary relationship */
  --accent-c: 0.18; /* Custom chroma */
}
```

### Theme Extension
```css
:root {
  --custom-surface: oklch(90% 0.05 300);
  --custom-text: oklch(15% 0.15 300);
}
```

### Dark Mode Customization
```css
@media (prefers-color-scheme: dark) {
  :root {
    --accent-l: 70%; /* Brighter accent in dark mode */
    --surface-c: 0.025; /* Higher contrast surfaces */
  }
}
```

## Integration with Framework

### Mixin Dependencies
The theme uses mixins from `mixins.css`:
- `--surface-role()`: Applies surface color sets
- `--contrast-text-for-bg`: Calculates readable text colors
- `--feedback-role()`: Applies semantic color schemes

### Engine Integration
Uses delta calculations from `engine.css`:
- `--l-delta-*`: Lightness adjustments
- `--c-delta-*`: Chroma adjustments

### Component Application
Components consume theme variables:
```css
.my-component {
  background: var(--surface-default);
  color: var(--text-default);
  border: var(--border-width) solid var(--outline-default);
}
```

## Accessibility Considerations

### Contrast Ratios
- **WCAG AA Compliance**: Minimum 4.5:1 for normal text
- **WCAG AAA**: 7:1 for enhanced contrast
- **Dynamic Calculation**: Colors adjust based on background

### Color Independence
- **Not Color-Dependent**: UI works in monochrome
- **Focus Indicators**: High contrast focus rings
- **Text Alternatives**: Semantic color names

## Performance

### CSS Variables
- **Static Resolution**: Colors calculated at parse time
- **Inheritance**: Efficient cascade resolution
- **Minimal Runtime**: No JavaScript color calculations

### Dark Mode Switching
- **Native Support**: Uses `prefers-color-scheme`
- **Smooth Transitions**: CSS transitions between modes
- **No Flash**: Prevents FOUC with proper initial values

## Browser Support

### Modern Browsers
- **OKLCH**: Chrome 111+, Firefox 113+, Safari 15.4+
- **CSS Media Queries**: All browsers
- **CSS Custom Properties**: All browsers

### Fallback Strategy
- **Basic Colors**: Graceful degradation to defined fallbacks
- **Feature Queries**: `@supports` for advanced features
- **Progressive Enhancement**: Enhanced experience in modern browsers

## Best Practices

### Theme Design
- **Semantic Naming**: Use purpose over appearance
- **Consistent Ratios**: Maintain relationships across modes
- **Testing**: Verify in both light and dark modes

### Customization
- **Override Strategically**: Change base values, not derived ones
- **Document Changes**: Comment custom hue values
- **Test Contrast**: Ensure accessibility compliance

### Maintenance
- **Version Control**: Track theme changes
- **User Feedback**: Monitor accessibility issues
- **Browser Updates**: Leverage new color features