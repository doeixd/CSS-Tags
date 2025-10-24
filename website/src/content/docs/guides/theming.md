---
title: Comprehensive Theming Guide
description: This guide provides a complete overview of the CSS framework's advanced theming system, covering the design token architecture, OKLCH color model, automatic con
---

This guide provides a complete overview of the CSS framework's advanced theming system, covering the design token architecture, OKLCH color model, automatic contrast calculation, and theme customization.

## Table of Contents

- [Design Token Architecture](#design-token-architecture)
- [OKLCH Color System](#oklch-color-system)
- [Color Scale Generation](#color-scale-generation)
- [Automatic Contrast Calculation](#automatic-contrast-calculation)
- [Theme Variables & Roles](#theme-variables--roles)
- [Light/Dark Mode Support](#lightdark-mode-support)
- [High Contrast Mode](#high-contrast-mode)
- [Brand Theme Creation](#brand-theme-creation)
- [Customization Guide](#customization-guide)
- [Writing Custom Themes](#writing-custom-themes)

## Design Token Architecture

The framework uses a layered token system with four main layers:

### 1. Engine Layer (`core/engine.css`)

Defines mathematical deltas for generating color variations:

```css
/* Lightness deltas for color scale generation */
--l-delta-0: calc(0 / 100);    /* 0% */
--l-delta-1: calc(2 / 100);    /* 2% */
--l-delta-2: calc(4 / 100);    /* 4% */
/* ... up to --l-delta-14: calc(90 / 100) */

/* Chroma deltas for saturation variations */
--c-delta-0: calc(0 / 100);    /* 0% */
--c-delta-1: calc(10 / 100);   /* 10% */
/* ... up to --c-delta-10: calc(100 / 100) */
```

These deltas are used throughout the system to create consistent variations of any color.

### 2. Tokens Layer (`core/tokens.css`)

Defines the core design tokens and scales:

#### CSS Custom Property Registrations
```css
@property --color-h { syntax: '<number>'; inherits: true; initial-value: 250; }
@property --color-c { syntax: '<number>'; inherits: true; initial-value: 0.1; }
@property --color-l { syntax: '<percentage>'; inherits: true; initial-value: 50%; }
@property --color-a { syntax: '<number>'; inherits: true; initial-value: 1; }
```

#### Color Scales
- **Lightness Scale (0-14)**: `--scale-l-0: 99%` to `--scale-l-14: 1%`
- **Chroma Scale (0-12)**: `--scale-c-0: 0` to `--scale-c-12: 0.37`
- **Alpha Scale (0-8)**: `--alpha-0: 0` to `--alpha-8: 1`

#### Design System Scales
- **Spacing**: `--spacing-xs: 0.25rem` to `--spacing-3xl: 3rem`
- **Typography**: Font sizes, weights, line heights, letter spacing
- **Shadows**: Multi-layer shadow system with semantic assignments
- **Breakpoints**: Container query breakpoints for responsive design

### 3. Palette Layer (`core/palette.css`)

Generates complete color palettes using OKLCH mathematics:

#### Base Colors (`core/palette-base.css`)
```css
/* Gray scale - pure lightness variations */
--gray-0: oklch(99% 0 0);    /* Pure white */
--gray-7: oklch(50% 0 0);    /* Medium gray */
--gray-14: oklch(1% 0 0);    /* Pure black */

/* Neutral scale - subtle chroma for warmth */
--neutral-0: oklch(99% min(0, var(--clamp-neutral-max-c-0)) var(--neutral-h));
--neutral-7: oklch(50% min(0.02, var(--clamp-neutral-max-c-3)) var(--neutral-h));
```

#### Accent Colors (`core/palette-accent.css`)
```css
/* Full 13-step accent scale */
--accent-palette-0: oklch(var(--scale-l-0) min(var(--scale-c-1), var(--clamp-max-c-0)) var(--accent-h));
--accent-palette-6: oklch(var(--scale-l-6) min(var(--scale-c-8), var(--clamp-max-c-3)) var(--accent-h));
--accent-palette-12: oklch(var(--scale-l-12) min(var(--scale-c-3), var(--clamp-max-c-6)) var(--accent-h));
```

### 4. Theme Layer (`core/theme.css`)

Applies semantic meaning to colors and defines component roles:

#### Theme Configuration
```css
:root {
  /* Brand configuration */
  --accent-h: var(--hue-violet);    /* 285° */
  --accent-c: 0.15;                /* 15% chroma */
  --accent-l: 60%;                 /* 60% lightness */
  --secondary-hue-shift: 60;       /* +60° for secondary */
  --tertiary-hue-shift: -90;       /* -90° for tertiary */

  /* Surface configuration */
  --surface-c: 0.015;              /* Surface chroma */
  --contrast-factor: 1.0;          /* Contrast multiplier */
}
```

## OKLCH Color System

The framework uses OKLCH color space for perceptually uniform color manipulation:

### OKLCH Components
- **L (Lightness)**: 0-100% perceptual lightness
- **C (Chroma)**: 0+ colorfulness/saturation
- **H (Hue)**: 0-360° color angle

### Advantages Over HSL/RGB
- **Perceptual Uniformity**: Equal changes = equal perceived differences
- **Wide Gamut**: Access to colors outside sRGB
- **Predictable Manipulation**: Mathematical operations work as expected
- **Future-Proof**: Designed for HDR displays

### Color Generation Formula
```css
/* Base color definition */
--accent: oklch(var(--accent-l) var(--accent-c) var(--accent-h));

/* Variations using deltas */
--accent-muted: oklch(from var(--accent) calc(l + var(--l-delta-5)) calc(c + var(--c-delta-3-down)) h);
--accent-subtle: oklch(from var(--accent) calc(l + var(--l-delta-2)) calc(c + var(--c-delta-1-down)) h);
--accent-overt: oklch(from var(--accent) calc(l + var(--l-delta-3-down)) calc(c + var(--c-delta-1)) h);
```

## Color Scale Generation

The system generates comprehensive color scales using mathematical deltas:

### Max Chroma Constraints
Different lightness levels have different maximum chroma values to prevent colors from exceeding display capabilities:

```css
--max-chroma-0: 0.04;   /* Very light - low chroma */
--max-chroma-3: 0.22;   /* Light - medium chroma */
--max-chroma-6: 0.06;   /* Medium - low chroma again */
```

### Scale Application
```css
/* Clamp chroma to prevent oversaturation */
min(var(--scale-c-8), var(--clamp-max-c-3))
```

This ensures colors remain vivid but displayable across all devices.

## Automatic Contrast Calculation

The framework includes intelligent contrast management:

### Contrast Thresholds
```css
--l-threshold: 0.65;    /* Lightness threshold for contrast decisions */
--c-threshold: 0.08;    /* Chroma threshold for neutral colors */
--contrast-ratio-low: 3;
--contrast-ratio-medium: 4.5;
--contrast-ratio-high: 7;
```

### Auto-Contrast Text Variables
The system defines text color variables that browsers can automatically calculate for optimal contrast:

```css
/* These will be auto-calculated by supporting browsers */
--text-on-base: ;           /* Auto-contrasting text on base surface */
--text-on-accent: ;         /* Auto-contrasting text on accent background */
--text-on-surface-muted: ;  /* Auto-contrasting text on muted surfaces */
```

### Manual Contrast Calculations
For complex scenarios, explicit contrast calculations are used:

```css
--text-default: oklch(20% calc(var(--surface-c) * 2) var(--neutral-h));
--text-overt: oklch(10% calc(var(--surface-c) * 2.2) var(--neutral-h));
```

## Theme Variables & Roles

### Surface Hierarchy
Five levels of surface elevation with clear semantic meaning:

```css
/* Hierarchy: overt > default > base > subtle > muted */
--surface-muted: oklch(95% calc(var(--surface-c) * 0.8) var(--neutral-h));
--surface-subtle: oklch(95% calc(var(--surface-c) * 1.05) var(--neutral-h));
--surface-default: oklch(94% calc(var(--surface-c) * 1.2) var(--neutral-h));
--surface-overt-dark: oklch(77.5% calc(var(--surface-c) * 2.25) var(--neutral-h));
```

### Text Hierarchy
Four levels of text contrast:

```css
--text-muted: oklch(45% calc(var(--surface-c) * 1.5) var(--neutral-h) / 0.8);
--text-subtle: oklch(35% calc(var(--surface-c) * 1.8) var(--neutral-h));
--text-default: oklch(20% calc(var(--surface-c) * 2) var(--neutral-h));
--text-overt: oklch(10% calc(var(--surface-c) * 2.2) var(--neutral-h));
```

### Accent Color Family
Complete accent color system with variations:

```css
--accent: oklch(var(--accent-l) var(--accent-c) var(--accent-h));
--accent-muted: oklch(from var(--accent) calc(l + var(--l-delta-5)) calc(c + var(--c-delta-3-down)) h);
--accent-subtle: oklch(from var(--accent) calc(l + var(--l-delta-2)) calc(c + var(--c-delta-1-down)) h);
--accent-overt: oklch(from var(--accent) calc(l + var(--l-delta-3-down)) calc(c + var(--c-delta-1)) h);
```

### Interaction States
Highlight backgrounds for hover/active states:

```css
--highlight-bg-muted: oklch(from var(--base) calc(l + var(--l-delta-1-down)) c h);
--highlight-bg-subtle: oklch(from var(--base) calc(l + var(--l-delta-3-down)) c h);
--highlight-bg-overt: oklch(from var(--accent) calc(l + var(--l-delta-10)) calc(c + var(--c-delta-6-down)) h);
```

## Light/Dark Mode Support

### Automatic Detection
Uses `prefers-color-scheme` media queries:

```css
/* Light mode (default) */
:root { /* Light theme definitions */ }

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --accent-l: 70%;           /* Lighter accent for dark backgrounds */
    --surface-c: 0.02;         /* Reduced surface chroma */
    --base: oklch(22% calc(var(--surface-c) * 0.9) var(--neutral-h));
    /* Inverted text hierarchy */
    --text-default: oklch(88% calc(var(--surface-c) * 0.8) var(--neutral-h));
    --text-overt: oklch(95% calc(var(--surface-c) * 0.6) var(--neutral-h));
  }
}
```

### Dark Mode Adjustments
- **Accent colors**: Increased lightness and chroma for visibility
- **Surface colors**: Inverted hierarchy (darker surfaces become lighter)
- **Text colors**: Inverted contrast (light text on dark backgrounds)
- **Shadows**: Lighter shadow colors for dark themes

## High Contrast Mode

### Enhanced Accessibility
```css
@media (prefers-contrast: high) {
  :root {
    --contrast-factor: 1.3;      /* Increased contrast multiplier */
    --focus-ring-width: 3px;     /* Thicker focus rings */
    --border-width: 1.5px;       /* Thicker borders */
    --text-subtle: oklch(0.3 0.03 var(--neutral-h)); /* Higher contrast text */
  }
}
```

### Component Adjustments
- Form elements get thicker borders
- Focus indicators are more prominent
- Color contrasts are amplified

## Brand Theme Creation

### Theme Variables
Three core variables define a brand:

```css
:root[data-theme="ocean"] {
  --accent-h: 200;        /* Hue angle (0-360°) */
  --accent-c: 0.16;       /* Chroma (0-1) */
  --accent-l: 60%;        /* Lightness (0-100%) */
  --secondary-hue-shift: 40;   /* Degrees to shift secondary hue */
  --tertiary-hue-shift: -80;   /* Degrees to shift tertiary hue */
}
```

### Dark Mode Variants
```css
@media (prefers-color-scheme: dark) {
  :root[data-theme="ocean"] {
    --accent-c: 0.20;     /* Increased chroma for dark backgrounds */
    --accent-l: 70%;      /* Lighter accent */
  }
}
```

### Available Brand Themes
- **Ocean**: Blue professional theme (200° hue)
- **Sunrise**: Orange energetic theme (30° hue)
- **Forest**: Green natural theme (145° hue)

## Customization Guide

### Overriding Theme Variables
```css
:root {
  /* Custom brand colors */
  --accent-h: 280;        /* Purple hue */
  --accent-c: 0.18;       /* Higher saturation */
  --accent-l: 65%;        /* Lighter */

  /* Custom surface settings */
  --surface-c: 0.012;     /* Subtle surfaces */

  /* Custom spacing */
  --spacing-md: 1.25rem;  /* Custom medium spacing */
}
```

### Component-Specific Overrides
```css
/* Custom button styling */
.my-button {
  --accent: oklch(70% 0.2 320);  /* Custom magenta accent */
  background-color: var(--accent);
}
```

### Extending the Palette
```css
:root {
  /* Add custom semantic colors */
  --brand-primary: oklch(60% 0.15 240);
  --brand-secondary: oklch(70% 0.12 260);

  /* Custom surface variants */
  --surface-brand: oklch(from var(--brand-primary) calc(l + 90%) calc(c * 0.1) h);
}
```

## Writing Custom Themes

### Complete Theme Structure
```css
/* Custom theme definition */
:root[data-theme="custom"] {
  /* Core brand colors */
  --accent-h: 45;         /* Yellow hue */
  --accent-c: 0.14;       /* Moderate chroma */
  --accent-l: 65%;        /* Good lightness */

  /* Color relationships */
  --secondary-hue-shift: 180;  /* Complementary secondary */
  --tertiary-hue-shift: -90;   /* Triadic tertiary */

  /* Surface characteristics */
  --surface-c: 0.018;     /* Surface chroma */

  /* Optional: custom feedback colors */
  --success-h: 120;       /* Custom success hue */
  --warning-h: 60;        /* Custom warning hue */
  --error-h: 0;          /* Custom error hue */
}

/* Dark mode variant */
@media (prefers-color-scheme: dark) {
  :root[data-theme="custom"] {
    --accent-l: 75%;      /* Lighter for dark mode */
    --accent-c: 0.18;     /* More saturated */
    --surface-c: 0.025;   /* Higher surface contrast */
  }
}
```

### Theme Application
```html
<!-- Apply theme globally -->
<html data-theme="custom">

<!-- Or apply to sections -->
<div data-theme="custom">
  <p>This section uses the custom theme</p>
</div>
```

### Best Practices
1. **Test in both light and dark modes**
2. **Check contrast ratios** (aim for 4.5:1 minimum)
3. **Consider accessibility** (high contrast mode support)
4. **Use OKLCH values** for predictable color manipulation
5. **Test on multiple devices** (different display capabilities)

### Advanced Customization
```css
/* Conditional theme application */
@media (prefers-color-scheme: dark) and (data-theme="custom") {
  :root {
    /* Dark-mode specific overrides */
  }
}

/* Responsive theme adjustments */
@media (max-width: 768px) {
  :root[data-theme="custom"] {
    --surface-c: 0.01;  /* Reduce chroma on small screens */
  }
}
```

This theming system provides unparalleled flexibility while maintaining design consistency and accessibility standards. The OKLCH-based approach ensures colors look great across all displays and lighting conditions.

## Unified Theme System

The framework now uses a **unified theme system** that combines the best features of both the original framework theme and the standalone theme generator. This provides:

### Key Improvements

- **OKLCH Color Space**: Perceptually uniform colors with automatic contrast calculation
- **Auto-Contrast Text**: Intelligent text color calculation using Lea Verou's algorithm
- **Comprehensive Color Roles**: Base, bedrock, surface hierarchy, accent variations, semantic colors
- **Enhanced Button System**: Primary, secondary, outline, ghost, and text button variants
- **Improved Utilities**: 100+ utility classes with semantic naming
- **Better Accessibility**: High contrast mode, focus states, and semantic color usage

### Core Features

#### Smart Color Generation
```css
/* Simplified auto-contrast text for better browser support */
--text-on-surface: oklch(15% 0.02 var(--neutral-h)); /* Dark text on light surface */
--text-on-base: oklch(15% 0.02 var(--neutral-h)); /* Dark text on light base */

/* OKLCH-based color variations */
--accent-muted: oklch(from var(--accent) calc(l + 0.15) calc(c - 0.05) h);
```

#### Comprehensive Button System
```css
.button-primary {
  background-color: var(--accent);
  color: var(--accent-on-base);
}
.button-primary:hover { background-color: var(--accent-overt); }
.button-outline {
  background-color: transparent;
  border-color: var(--outline);
}
```

#### Semantic Color Hierarchy
- **Base**: Main background color
- **Bedrock**: Inverted base for contrast sections
- **Surfaces**: Muted, subtle, default, overt elevations
- **Text**: Auto-contrasting text for all surfaces
- **Accents**: Primary, secondary, tertiary with variations

### Usage

#### Basic Setup
```html
<main class="bg-base text-on-base">
  <section class="bg-surface text-on-surface">
    <h1 class="text-overt">Title</h1>
    <p class="text">Content with <a href="#" class="text-link">links</a></p>
    <button class="button-primary">Action</button>
  </section>
</main>
```

#### Customization
```css
:root {
  /* Easy brand customization */
  --accent-h: 45;        /* Yellow theme */
  --accent-c: 0.14;      /* Moderate saturation */
  --surface-saturation: 0.012;  /* Subtle surfaces */
  --contrast-factor: 1.2;       /* Higher contrast */
}
```

#### Brand Themes
```html
<html data-theme="ocean">  <!-- Blue theme -->
<html data-theme="sunrise"> <!-- Orange theme -->
<html data-theme="forest">  <!-- Green theme -->
```

## Context-Aware Styling

The framework includes advanced CSS features using `:has()` and `:where()` selectors to automatically apply correct text colors and component styles based on surface backgrounds, eliminating the need for manual `text-on-*` classes in many cases.

### Context-Aware Selectors

The system uses direct descendant selectors to apply automatic styling based on surface backgrounds:

```css
/* Automatic text color based on surface */
.bg-base .text,
.bg-base p,
.bg-base span { color: var(--text-on-base); }

.bg-surface .text,
.bg-surface p,
.bg-surface span { color: var(--text-on-surface); }

.bg-surface-muted .text,
.bg-surface-muted p,
.bg-surface-muted span { color: var(--text-on-surface-muted); }

/* And so on for all surface types */

/* Automatic accent text on surfaces */
.bg-accent .text-accent { color: var(--accent-on-base); }
.bg-surface .text-accent { color: var(--accent-on-surface); }

/* Automatic button styling based on context */
.bg-surface .button {
  background-color: var(--surface);
  color: var(--text-on-surface);
}
.bg-accent .button-primary {
  background-color: var(--accent);
  color: var(--accent-on-base);
}
```

### Usage Example

```html
<!-- No need to specify text-on-surface classes -->
<main class="bg-base">
  <section class="bg-surface">
    <h1 class="text-overt">Auto-contrasted heading</h1>
    <p class="text">Auto-contrasted paragraph</p>
    <button class="button">Auto-styled button</button>
  </section>
</main>
```

### Benefits

- **Automatic**: Correct colors apply without manual classes
- **Overrideable**: Easy to customize with higher specificity
- **Maintainable**: Single source of truth for color relationships
- **Progressive**: Falls back gracefully in unsupported browsers

### Demo

See `examples/demo-auto-styling.html` for a comprehensive demonstration of context-aware styling in action.

### Migration from Old System

The unified system maintains backward compatibility while providing enhanced features:

#### Class Name Mapping
```css
/* Old → New */
.surface-bg → .bg-surface
.text-color-muted → .text-muted
.btn-primary → .button-primary
```

#### Variable Mapping
```css
/* Old → New */
--theme-primary → --accent
--theme-surface → --surface
--theme-text → --text
```

### Advanced Features

#### Dark Mode Support
Automatic dark mode with inverted color schemes and adjusted contrasts.

#### High Contrast Mode
Enhanced accessibility with amplified contrasts and prominent focus states.

#### Container Queries
Responsive color adaptation based on component size.

#### Brand Theme Overrides
Easy switching between predefined brand palettes.

### Benefits of Unified System

1. **Simplified Customization**: Change 4-5 variables to create any brand
2. **Automatic Accessibility**: Contrast ratios calculated automatically
3. **Comprehensive Coverage**: Colors for all UI states and components
4. **Performance Optimized**: CSS custom properties for dynamic theming
5. **Future-Proof**: OKLCH color space ready for HDR displays

The unified theme system eliminates the distinction between the old and new approaches, providing a single, powerful theming solution that combines the robustness of the original framework with the modern features of the theme generator.