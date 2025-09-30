# Example Brand Themes (`themes/example-brand.css`)

This file demonstrates how to implement brand-specific color themes using the framework's color system. It provides three example brand palettes that can be applied via data attributes.

## Overview

The file defines brand themes by setting core color variables that drive the entire design system. Each brand establishes:

- Primary accent color (HSL values)
- Hue shifts for secondary and tertiary colors
- Optional dark mode adjustments

## Brand Themes

### Ocean Theme

A cool, professional blue-based brand.

**Data Attribute:** `data-theme="ocean"`

**Color Variables:**
- `--accent-h: 200` (Blue hue)
- `--accent-c: 0.16` (16% chroma)
- `--accent-l: 60%` (60% lightness)
- `--secondary-hue-shift: 40` (Warmer secondary colors)
- `--tertiary-hue-shift: -80` (Cooler tertiary colors)

**Dark Mode Adjustments:**
- `--accent-c: 0.20` (Increased chroma for better contrast)
- `--accent-l: 70%` (Lighter for dark backgrounds)

### Sunrise Theme

A warm, energetic orange-based brand.

**Data Attribute:** `data-theme="sunrise"`

**Color Variables:**
- `--accent-h: 30` (Orange hue)
- `--accent-c: 0.18` (18% chroma)
- `--accent-l: 62%` (62% lightness)
- `--secondary-hue-shift: 60` (More saturated secondary)
- `--tertiary-hue-shift: -90` (Deep blue tertiary)

**Dark Mode Adjustments:**
- `--accent-c: 0.22` (Increased chroma)
- `--accent-l: 72%` (Lighter)

### Forest Theme

A natural, green-based brand.

**Data Attribute:** `data-theme="forest"`

**Color Variables:**
- `--accent-h: 145` (Green hue)
- `--accent-c: 0.16` (16% chroma)
- `--accent-l: 58%` (58% lightness)
- `--secondary-hue-shift: 50` (Yellow-green secondary)
- `--tertiary-hue-shift: -100` (Purple tertiary)

**Dark Mode Adjustments:**
- `--accent-c: 0.18` (Slightly increased chroma)
- `--accent-l: 68%` (Lighter)

## Usage

Apply themes globally by setting the data attribute on the root element:

```html
<html data-theme="ocean">
  <!-- Ocean-themed application -->
</html>
```

Or apply to specific sections:

```html
<div data-theme="sunrise">
  <!-- Sunrise-themed section -->
</div>
```

## How It Works

These variables feed into the color generation system defined in `core/palette.css`. The framework automatically generates:

- Full color scales from these base values
- Semantic color tokens (`--theme-primary`, `--theme-secondary`, etc.)
- Feedback colors (success, warning, error)
- Interactive states (hover, focus, active)

## Dark Mode Support

The file includes automatic dark mode adjustments using `prefers-color-scheme: dark`. These tweaks ensure brand colors remain vibrant and accessible in dark themes.

## Customization

To create your own brand theme:

1. Choose your primary accent color in HSL
2. Set appropriate chroma and lightness values
3. Define hue shifts for secondary/tertiary colors
4. Test in both light and dark modes
5. Add dark mode adjustments if needed

## Browser Support

- Data attributes work in all browsers
- CSS custom properties work in all modern browsers
- `prefers-color-scheme` works in modern browsers with fallback

## Integration Notes

- Import this file after `core/palette.css` to override defaults
- Combine with `themes/theme-packs.css` for additional theme variations
- Use with `core/theme.css` for component-specific theming

## Related Files

- `core/palette.css`: Core color generation system
- `themes/theme-packs.css`: Additional theme variations
- `core/theme.css`: Component theme overrides