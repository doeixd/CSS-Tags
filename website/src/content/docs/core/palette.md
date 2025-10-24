---
title: Palette Core
description: The palette system provides a comprehensive, perceptually uniform color system using OKLCH color space. It includes accent colors, semantic feedback colors, ext
---

## Overview
The palette system provides a comprehensive, perceptually uniform color system using OKLCH color space. It includes accent colors, semantic feedback colors, extended color ranges, and systematic scales for consistent theming.

## Color Space: OKLCH

The palette uses OKLCH (LCH in OKLab color space) for:
- **Perceptual Uniformity**: Equal changes correspond to equal perceived differences
- **Intuitive Manipulation**: Separate control of lightness (L), chroma (C), and hue (H)
- **Wide Gamut**: Access to colors outside traditional RGB/HSV spaces

## Scale Structure

Each color scale includes 13 steps (0-12):
- **Steps 0-2**: Very light, subtle colors
- **Steps 3-5**: Light colors for backgrounds and highlights
- **Steps 6-8**: Medium colors for primary UI elements
- **Steps 9-11**: Dark colors for text and strong elements
- **Step 12**: Darkest color for maximum contrast

## Color Calculation

Colors are calculated using:
```css
oklch(
  var(--scale-l-[step])     /* Lightness from scale */
  min(var(--scale-c-[step]), var(--clamp-max-c-[level]))  /* Clamped chroma */
  var(--[color]-h)          /* Hue angle */
)
```

### Chroma Clamping
Chroma values are clamped to prevent out-of-gamut colors:
- **Base clamps**: `--clamp-max-c-0` through `--clamp-max-c-6`
- **Special clamps**: Higher chroma allowed for error/warning colors
- **Neutral clamps**: Reduced chroma for gray/neutral scales

## Palette Categories

### Accent Colors (`palette-accent.css`)
Primary, secondary, and tertiary color scales for branding and theming.

- **Accent Palette**: Main brand color scale
- **Secondary Palette**: Supporting color scale
- **Tertiary Palette**: Additional accent scale

### Base Colors (`palette-base.css`)
Foundation colors including grays and neutrals.

- **Gray Scale**: Pure gray colors (chroma = 0)
- **Neutral Scale**: Low-chroma colors with slight hue tint
- **Hue Definitions**: Additional color hues (brown, gold, olive, magenta)

### Feedback Colors (`palette-feedback.css`)
Semantic colors for status communication.

- **Success Palette**: Green scale for positive states
- **Warning Palette**: Orange/amber scale for caution states
- **Error Palette**: Red scale for error states
- **Info Palette**: Blue scale for informational states

### Extended Colors (`palette-extended.css`)
Comprehensive color library with 20+ color scales.

**Warm Colors:**
- Brown, Gold, Olive, Orange, Amber, Yellow

**Cool Colors:**
- Blue, Slate, Indigo, Violet, Purple

**Bright Colors:**
- Red, Green, Emerald, Teal, Cyan, Sky

**Vivid Colors:**
- Magenta, Pink, Rose, Fuchsia

## Usage in Design System

### Surface Colors
```css
--surface-default: var(--neutral-1);
--surface-subtle: var(--neutral-2);
--surface-muted: var(--neutral-3);
```

### Text Colors
```css
--text-default: var(--neutral-11);
--text-subtle: var(--neutral-9);
--text-muted: var(--neutral-7);
```

### Accent Colors
```css
--accent: var(--accent-palette-6);
--accent-subtle: var(--accent-palette-4);
--accent-overt: var(--accent-palette-8);
```

### Feedback Colors
```css
--success: var(--success-palette-6);
--warning: var(--warning-palette-6);
--error: var(--error-palette-6);
--info: var(--info-palette-6);
```

## Implementation Details

### Variable Dependencies
The palette requires variables from `tokens.css`:
- **Lightness scales**: `--scale-l-0` through `--scale-l-12`
- **Chroma scales**: `--scale-c-0` through `--scale-c-10`
- **Hue values**: `--[color]-h` (e.g., `--accent-h`, `--red-h`)
- **Max chroma clamps**: `--max-chroma-0` through `--max-chroma-6`

### Layer Organization
```css
@import url("core/palette-base.css") layer(palette);
@import url("core/palette-accent.css") layer(palette);
@import url("core/palette-feedback.css") layer(palette);
@import url("core/palette-extended.css") layer(palette);
```

All palette definitions are organized under the `palette` cascade layer.

## Color Accessibility

### Contrast Ratios
The 13-step scales ensure sufficient contrast:
- **Step differences**: At least 3 steps for WCAG AA compliance
- **Auto-contrast**: Framework calculates text colors dynamically

### Gamut Awareness
- **Clamping**: Prevents colors from exceeding display capabilities
- **Fallbacks**: Graceful degradation in limited-gamut displays

## Customization

### Brand Colors
Override hue values for custom branding:
```css
:root {
  --accent-h: 280; /* Custom purple hue */
  --secondary-h: 200; /* Custom blue hue */
}
```

### Extended Palettes
Add custom color scales:
```css
--brand-palette-0: oklch(var(--scale-l-0) min(var(--scale-c-1), var(--clamp-max-c-0)) var(--brand-h));
--brand-palette-1: oklch(var(--scale-l-1) min(var(--scale-c-2), var(--clamp-max-c-0)) var(--brand-h));
/* ... continue for all 13 steps */
```

## Performance Considerations

### CSS Size
- **Large palette**: ~2000+ color variables
- **Tree-shaking**: Only used colors included in final CSS
- **Compression**: Well-suited to GZIP compression

### Runtime Performance
- **Static calculations**: All colors computed at build time
- **No JavaScript**: Pure CSS color system
- **Efficient resolution**: CSS variable lookups are fast

## Browser Support
- **OKLCH**: Chrome 111+, Firefox 113+, Safari 15.4+
- **CSS Layers**: All modern browsers
- **CSS Imports**: All browsers
- **Fallback**: Basic color names work in older browsers

## Integration with Framework
The palette system integrates with:
- **Theme Layer**: Semantic color role assignments
- **Components Layer**: Color application in UI elements
- **Engine Layer**: Dynamic color adjustments
- **Mixins Layer**: Color manipulation functions

## Best Practices
- **Use semantic names**: Prefer `--accent` over `--blue-6`
- **Consistent steps**: Use same step numbers for related colors
- **Test contrast**: Verify color combinations meet accessibility standards
- **Document overrides**: Comment custom hue values for maintenance