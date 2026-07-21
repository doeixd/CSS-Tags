---
title: Theme Core
description: The `theme.css` file implements a **generative theme system** that automatically creates a complete semantic color palette from a minimal set of input variables
---

## Overview
The `theme.css` file implements a **generative theme system** that automatically creates a complete semantic color palette from a minimal set of input variables. This approach ensures consistent, accessible theming across light and dark modes while providing extensive customization options.

## Key Features
- **Generative System**: Entire palette generated from core inputs
- **Semantic Color Roles**: Meaningful color names for UI consistency
- **Automatic Dark Mode**: Seamless adaptation via `prefers-color-scheme`
- **High Contrast Support**: Enhanced accessibility for visual impairments
- **Auto-Context Styling**: Automatic text color adjustment for readability
- **OKLCH Color Space**: Perceptually uniform color manipulation

## Core Input Variables

The theme system starts with a minimal set of customizable variables that define your brand identity:

```css
:root {
  /* Core Brand Color (OKLCH) */
  --accent-h: 280;           /* Hue (0-360°) - e.g., 280 for purple */
  --accent-c: 0.15;          /* Chroma (0-1) - saturation level */
  --accent-l: 60%;           /* Lightness (0-100%) - brightness */

  /* Theme Configuration */
  --surface-saturation: 0.015;  /* Surface chroma multiplier */
  --surface-lightness-shift: 0%; /* Lift/dim surfaces in either scheme */
  --surface-contrast: 65%;       /* Separation between surface tiers */
  --contrast-factor: 1.0;       /* Overall contrast multiplier */
  --border-width: 1px;          /* Default border width */
  --density-factor: 1;          /* Shared spacing scale */
  --radius-factor: 1;           /* Shared corner-radius scale */

  /* Color Relationships */
  --secondary-hue-shift: 60;    /* Degrees to shift for secondary color */
  --tertiary-hue-shift: -90;    /* Degrees to shift for tertiary color */

}
```

These inputs control the entire visual identity of your application.

`--surface-lightness-shift` is deliberately relative rather than an absolute
lightness. A value such as `2%` lifts both light and dark schemes without
forcing either scheme to use the other's palette. `--surface-contrast` is
a percentage: lower values compress the hierarchy toward the base, while
higher values increase the distinction between muted, subtle, default, and
overt surfaces.

### Density and radius scales

Two unitless factors provide coherent global knobs without replacing individual
tokens:

```css
:root {
  --density-factor: 0.85; /* Scales --space-* and compatibility --spacing-* tokens. */
  --radius-factor: 1.25;  /* Scales the non-pill radius hierarchy. */
}
```

Both default to `1`. The preferred radius names are `--radius-xs`,
`--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, and
`--radius-full`; the longer `--border-radius-*` names remain compatible
aliases.

The preferred spacing family for new component APIs is `--space-2xs` through
`--space-2xl`. The tighter `--spacing-*` family remains available for existing
utilities and compact controls; both families now respond to
`--density-factor`.

The documentation header's collapsed **Theme** panel edits the important root
inputs live, persists explicit overrides locally, and generates copyable
`:root` CSS. Reset removes inline overrides and returns control to the active
theme pack and color scheme.



## Automatic Palette Generation

From these core inputs, the system automatically generates a complete semantic palette:

### Derived Variables
- **Secondary & Tertiary Hues**: Calculated shifts from the accent hue
- **Feedback Colors**: Predefined hues for success (145°), warning (55°), error (25°), info (245°)
- **Base & Bedrock Colors**: Fundamental background colors
- **Surface Hierarchy**: Multiple surface levels for visual depth
- **Text Colors**: Auto-contrast calculated text colors
- **Interactive States**: Hover, active, focus variations

### Surface Hierarchy
The system creates a layered surface system for visual hierarchy:
- `--base`: Primary background (light in light mode, dark in dark mode)
- `--bedrock`: Opposite extreme for highlights/accents
- `--surface-muted/subtle/default/overt`: Progressive surface elevations

### Bedrock Color Purpose
The bedrock color serves as the "opposite" background:
- In light mode: Very light (near-white) for subtle highlights
- In dark mode: Very dark (near-black) for strong contrasts
- Used for navigation bars, tooltips, and accent backgrounds

## Auto-Context Styling

The theme includes intelligent auto-context styling that automatically adjusts text colors based on background:

```css
/* Automatic text color on surfaces */
:where(.bg-base) .text,
:where(.bg-base) p,
:where(.bg-base) h1 { color: var(--text-on-base); }

:where(.bg-bedrock) .text,
:where(.bg-bedrock) p { color: var(--text-on-bedrock); }
```

This ensures optimal readability without manual color selection, using Lea Verou's contrast-color algorithm adapted for OKLCH.

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

+## Explicit Light, Dark, And System Modes

Automatic mode is the default. Set `data-color-scheme` on the root element when
an application offers its own theme control:

```html
<html data-color-scheme="dark">
```

The accepted values are `light` and `dark`. Remove the attribute to return to
`prefers-color-scheme`:

```js
const root = document.documentElement;

root.dataset.colorScheme = "light";
root.dataset.colorScheme = "dark";
delete root.dataset.colorScheme; // System preference
```

This is separate from `data-theme`: color scheme chooses light or dark
contrast, while `data-theme="ocean"` (or another brand) chooses the palette.
Set the attribute before first paint when persisting the user's choice so
native controls do not flash in the wrong mode.

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
--table-background: color-mix(in oklch, var(--surface-default) 45%, var(--base));
--table-border-color: color-mix(in oklch, var(--outline-subtle) 65%, transparent);
--table-divider-color: color-mix(in oklch, var(--outline-subtle) 55%, transparent);
--table-heading-background: color-mix(in oklch, var(--surface-subtle) 55%, var(--base));
--table-hover-background: color-mix(in oklch, var(--surface-subtle) 75%, var(--base));
```

### Code Blocks
```css
--code-block-bg: var(--surface-subtle);
--code-inline-bg: var(--surface-muted);
--code-inline-border: transparent;
```

Inline `code` uses the faint surface background without a border by default.
Wrapped inline code uses cloned box decoration so its padding and background are
not clipped at line edges. `kbd` and `samp` retain their bordered treatment.

### Scrollbars

Scrollable regions inherit quiet, theme-aware scrollbars without hiding native
scroll behavior. Customize `--scrollbar-size`, `--scrollbar-width`,
`--scrollbar-track`, `--scrollbar-thumb`, `--scrollbar-thumb-hover`, and
`--scrollbar-radius`.

### Anchor Positioning
```css
--anchor-offset: 0.5rem;        /* Spacing between anchored elements */
--anchor-max-width: 20rem;      /* Maximum width for anchored elements */
--anchor-z-index: 1000;         /* Z-index for anchored elements */
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

## Export from the Theme creator

Open **Theme** in the site header to edit brand relationships, feedback hues,
density, radius, prose typography, UI typography, and heading character. Start
from Clean, Compact, or Editorial, then copy or download the result.

```css
@import "css-tags";
@import "./my-theme.css";
```

The generated file uses `@layer css-tags-theme` and is designed to load after
CSS Tags. It can target the entire document or a reusable
`[data-theme="name"]` boundary. The editor exports only authored inputs, not
hundreds of derived colors, so the library continues to calculate contrast and
semantic surfaces.
