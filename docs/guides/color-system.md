# Color System Guide

This guide explains the color system used in our CSS framework, which leverages the OKLCH color space for more perceptually uniform color manipulation and improved accessibility.

## Core Concepts

Our color system is built around several key concepts:

1. **OKLCH Color Space**: A perceptually uniform color space that provides more intuitive color manipulation
2. **Systematic Scales**: Color scales with consistent perceptual steps in lightness and chroma
3. **Semantic Color Roles**: Mapping of raw color values to their functional purpose in the UI
4. **Calculated Contrast**: Automatic calculation of text colors based on background
5. **Mode Adaptation**: Colors that adapt to dark mode and high contrast mode

## OKLCH Color Space

### What is OKLCH?

OKLCH (Oklab Lightness-Chroma-Hue) is a perceptually uniform color space designed to better match human visual perception:

- **L (Lightness)**: 0-1 value representing perceptual lightness
- **C (Chroma)**: 0+ value representing color intensity (similar to saturation)
- **H (Hue)**: 0-360 degree value representing the color

### Why OKLCH?

OKLCH offers significant advantages over traditional RGB or HSL:

1. **Perceptual Uniformity**: Equal steps in OKLCH values correspond to equal perceived changes in color
2. **Intuitive Control**: Separate control over lightness, chroma, and hue
3. **Wider Gamut**: Access to colors outside sRGB
4. **Better Interpolation**: More natural-looking transitions between colors

### OKLCH in Our Framework

Our framework uses OKLCH for all color definitions:

```css
/* OKLCH color definition */
--accent: oklch(var(--scale-l-6) var(--scale-c-7) var(--primary-h));

/* Using OKLCH for color manipulation */
--accent-lighter: oklch(from var(--accent) calc(l + 0.1) c h);
--accent-darker: oklch(from var(--accent) calc(l - 0.1) c h);
```

## Color Token System

Our framework uses a hierarchical color token system:

### 1. Base Hue Tokens

Base hue values define the foundation of the color system:

```css
/* Base Color Hues */
--primary-h: 220;    /* Primary color hue (blue) */
--success-h: 160;    /* Success color hue (green) */
--warning-h: 35;     /* Warning color hue (amber) */
--error-h: 355;      /* Error color hue (red) */
--info-h: 200;       /* Info color hue (cyan) */
--gray-h: 220;       /* Gray color hue (cool gray) */
--neutral-h: 0;      /* Neutral gray hue (true gray) */
```

### 2. Lightness and Chroma Scales

Systematic scales for lightness and chroma:

```css
/* Lightness Scale (from lightest to darkest) */
--scale-l-0: 0.98;   /* Nearly white */
--scale-l-1: 0.95;
--scale-l-2: 0.90;
/* ... */
--scale-l-11: 0.18;
--scale-l-12: 0.10;  /* Nearly black */

/* Chroma Scale (from least saturated to most saturated) */
--scale-c-1: 0.02;
--scale-c-2: 0.04;
/* ... */
--scale-c-8: 0.16;
--scale-c-9: 0.18;
```

### 3. Color Palette Tokens

Complete color palettes with 13 steps (0-12) for each hue:

```css
/* Accent Color Scale */
--accent-palette-0: oklch(var(--scale-l-0) min(var(--scale-c-1), var(--clamp-max-c-0)) var(--primary-h));
--accent-palette-1: oklch(var(--scale-l-1) min(var(--scale-c-2), var(--clamp-max-c-0)) var(--primary-h));
/* ... through accent-palette-12 */

/* Gray Scale */
--gray-0: oklch(var(--scale-l-0) min(var(--scale-c-1), var(--clamp-max-c-0)) var(--gray-h));
--gray-1: oklch(var(--scale-l-1) min(var(--scale-c-1), var(--clamp-max-c-0)) var(--gray-h));
/* ... through gray-12 */
```

### 4. Semantic Color Tokens

Semantic tokens map palette colors to their functional purpose:

```css
/* Surface Colors */
--base: oklch(var(--scale-l-0) var(--scale-c-1) var(--gray-h));
--surface-default: oklch(var(--scale-l-3) var(--scale-c-2) var(--gray-h));

/* Text Colors */
--text-default: oklch(var(--scale-l-10) var(--scale-c-2) var(--gray-h));
--text-muted: oklch(var(--scale-l-7) var(--scale-c-1) var(--gray-h));

/* Outline Colors */
--outline-default: oklch(var(--scale-l-6) var(--scale-c-2) var(--gray-h));

/* Brand and Feedback Colors */
--accent: oklch(var(--scale-l-6) var(--scale-c-7) var(--primary-h));
--success: oklch(var(--scale-l-5) var(--scale-c-7) var(--success-h));
--error: oklch(var(--scale-l-5) var(--scale-c-7) var(--error-h));
```

## Color Palette Structure

### Scale Steps Design

Each color scale follows a consistent pattern of 13 steps (0-12):

1. **Steps 0-2**: Very light shades (subtle backgrounds, highlights)
2. **Steps 3-5**: Light shades (backgrounds, subtle UI elements)
3. **Steps 6-8**: Mid-range shades (primary UI elements, borders)
4. **Steps 9-11**: Dark shades (text, prominent elements)
5. **Step 12**: Darkest shade (headings, emphasizing text)

### Special Considerations

#### Near-White and Near-Black Colors

We apply special handling for the extremes of the scale:

```css
/* Clamping chroma at the extremes */
--clamp-max-c-0: 0.03;  /* Max chroma for near-whites */
--clamp-max-c-12: 0.04; /* Max chroma for near-blacks */

/* Applied in color definitions */
--gray-0: oklch(var(--scale-l-0) min(var(--scale-c-1), var(--clamp-max-c-0)) var(--gray-h));
```

This prevents "off-white" or overly saturated dark colors.

#### Neutral Grayscale

The framework provides two grayscale options:

1. **Gray Scale**: Slightly tinted grayscale with a cool undertone (default)
2. **Neutral Scale**: True grayscale with zero chroma (pure gray)

## Auto-Contrast Calculation

One of the most powerful features is the automatic contrast calculation:

```css
--auto-contrast-text: oklch(
  from var(--bg, var(--base))
  clamp(0.1, (var(--l-threshold, 0.65) / l - 1) * 999, 0.98)
  min(c, var(--c-threshold, 0.08))
  h
);
```

This formula:
1. Takes the background color as input
2. Calculates an appropriate lightness value that contrasts with the background
3. Constrains the chroma for better readability
4. Maintains the same hue for color harmony

## Color Transformations

The Engine layer provides systematic color transformations:

```css
/* Muted variant - reduced chroma, slightly adjusted lightness */
--color-to-muted: oklch(
  from var(--color-base)
  calc(l * 0.97)
  calc(c * 0.3)
  h
);

/* Subtle variant - higher lightness, much lower chroma */
--color-to-subtle: oklch(
  from var(--color-base)
  calc(l * 1.15)
  calc(c * 0.12)
  h
);

/* Overt variant - slightly lower lightness, higher chroma */
--color-to-overt: oklch(
  from var(--color-base)
  calc(l * 0.85)
  calc(c * 1.2)
  h
);
```

## Dark Mode Color Adaptation

Colors automatically adapt to dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    /* Dark mode adaptations */
    --base: oklch(var(--scale-l-12) var(--scale-c-1) var(--gray-h));
    --text-default: oklch(var(--scale-l-2) var(--scale-c-2) var(--gray-h));
    
    /* Each semantic color is individually adapted for dark mode */
  }
}
```

Instead of simply inverting colors, each semantic role is carefully adjusted.

## High Contrast Mode Adaptation

Colors also adapt to high contrast mode:

```css
@media (prefers-contrast: more) {
  :root {
    /* Increase contrast for better visibility */
    --contrast-multiplier: 1.2;
    --text-default: oklch(calc(var(--scale-l-12) * var(--contrast-multiplier)) var(--scale-c-2) var(--gray-h));
    
    /* Reduce subtle variants in high contrast mode */
    --text-subtle: oklch(calc(var(--scale-l-8) * var(--contrast-multiplier)) var(--scale-c-3) var(--gray-h));
  }
}
```

## Working with the Color System

### Customizing the Color System

To customize the color system, modify the hue variables:

```css
:root {
  --primary-h: 250; /* Purple primary color */
  --secondary-h: 320; /* Pink secondary color */
  --accent-h: var(--primary-h); /* Use primary as accent */
}
```

This will propagate through all related color variables.

### Creating Color Harmonies

The system makes it easy to create color harmonies:

```css
/* Complementary color (opposite on the color wheel) */
--complementary-h: calc(var(--primary-h) + 180);

/* Analogous colors (adjacent on the color wheel) */
--analogous-1-h: calc(var(--primary-h) - 30);
--analogous-2-h: calc(var(--primary-h) + 30);

/* Triadic colors (equidistant on the color wheel) */
--triadic-1-h: var(--primary-h);
--triadic-2-h: calc(var(--primary-h) + 120);
--triadic-3-h: calc(var(--primary-h) + 240);
```

### Generating New Colors

To generate a new color in the same system:

```css
/* Create a new "Rose" color */
--rose-h: 345;

/* Generate a complete rose scale */
--rose-0: oklch(var(--scale-l-0) min(var(--scale-c-1), var(--clamp-max-c-0)) var(--rose-h));
--rose-1: oklch(var(--scale-l-1) min(var(--scale-c-2), var(--clamp-max-c-0)) var(--rose-h));
/* ... and so on */

/* Create semantic variants */
--rose-muted: oklch(var(--scale-l-6) var(--scale-c-3) var(--rose-h));
--rose-subtle: oklch(var(--scale-l-3) var(--scale-c-1) var(--rose-h));
--rose-overt: oklch(var(--scale-l-5) var(--scale-c-8) var(--rose-h));
```

### Using OKLCH in Custom Components

Use OKLCH for color manipulations in custom components:

```css
.custom-component {
  /* Darken a color */
  background-color: oklch(from var(--accent) calc(l - 0.1) c h);
  
  /* Increase saturation */
  border-color: oklch(from var(--accent) l calc(c * 1.5) h);
  
  /* Adjust both lightness and saturation */
  color: oklch(from var(--accent) calc(l - 0.2) calc(c * 0.8) h);
}

/* Hover state with color transformation */
.custom-component:hover {
  background-color: oklch(from var(--accent) calc(l - 0.05) calc(c * 1.2) h);
}
```

## Using Color Utilities

The framework provides comprehensive color utilities:

```html
<!-- Background colors -->
<div class="bg-accent">Accent background</div>
<div class="bg-surface-default">Default surface</div>
<div class="bg-success">Success background</div>

<!-- Text colors -->
<p class="text-default">Default text</p>
<p class="text-subtle">Subtle text</p>
<p class="text-accent">Accent text</p>

<!-- Border colors -->
<div class="border border-outline-default">Default border</div>
<div class="border border-accent">Accent border</div>

<!-- Color palette scales -->
<div class="bg-accent-palette-3">Accent palette light</div>
<div class="bg-accent-palette-6">Accent palette medium</div>
<div class="bg-accent-palette-9">Accent palette dark</div>
```

## Auto-Contrast Text Utilities

The framework includes utilities for auto-contrast text:

```html
<!-- Automatically determines text color based on background -->
<div class="bg-accent text-contrast-on-accent">
  Text with auto contrast on accent background
</div>

<div class="bg-error text-contrast-on-error">
  Text with auto contrast on error background
</div>
```

## Best Practices

1. **Use semantic color variables** rather than direct color values
2. **Test colors in different modes** (light, dark, high contrast)
3. **Check contrast ratios** to ensure WCAG compliance
4. **Use the systematic scales** to maintain design consistency
5. **Leverage auto-contrast calculation** for text over colored backgrounds
6. **Consider color blindness** when designing your color system
7. **Use OKLCH for color manipulation** rather than RGB or HSL
8. **Keep color harmonies consistent** across your design system
9. **Document your color system** for other developers and designers
10. **Test on different screens** as colors can appear differently

## Color Accessibility

To ensure your colors are accessible:

1. **Maintain sufficient contrast ratios**:
   - 4.5:1 for normal text (WCAG AA)
   - 3:1 for large text (WCAG AA)
   - 7:1 for enhanced contrast (WCAG AAA)

2. **Don't rely solely on color** to convey information
   - Always use additional indicators (text, icons, patterns)
   - Our auto-contrast system helps, but isn't enough on its own

3. **Test with color blindness simulators**
   - Protanopia (red-blind)
   - Deuteranopia (green-blind)
   - Tritanopia (blue-blind)

4. **Use the color palette systematically**
   - Follow the scale numbers consistently
   - Use steps 0-2 for backgrounds, 9-12 for text

## Resources

- [OKLCH Color Picker](https://oklch.com/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Designing for Color Blindness](https://www.toptal.com/designers/colorfilter)
- [MDN OKLCH Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)