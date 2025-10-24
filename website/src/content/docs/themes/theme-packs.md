---
title: Theme Packs (`themes/theme-packs.css`)
description: This file provides compact, production-ready brand theme definitions that can be easily included in projects. It contains the same three brand themes as `exampl
---

This file provides compact, production-ready brand theme definitions that can be easily included in projects. It contains the same three brand themes as `example-brand.css` but in a minified format.

## Overview

The file defines the same brand themes (Ocean, Sunrise, Forest) as the example file, but optimized for production use with:

- Compact CSS without comments
- Same color variables and logic
- Dark mode support
- Minimal file size

## Available Themes

### Ocean Theme

**Data Attribute:** `data-theme="ocean"`

```css
:root[data-theme="ocean"] {
  --accent-h: 200; --accent-c: 0.16; --accent-l: 60%;
  --secondary-hue-shift: 40; --tertiary-hue-shift: -80;
}
@media (prefers-color-scheme: dark) {
  :root[data-theme="ocean"] { --accent-c: 0.20; --accent-l: 70%; }
}
```

### Sunrise Theme

**Data Attribute:** `data-theme="sunrise"`

```css
:root[data-theme="sunrise"] {
  --accent-h: 30; --accent-c: 0.18; --accent-l: 62%;
  --secondary-hue-shift: 60; --tertiary-hue-shift: -90;
}
@media (prefers-color-scheme: dark) {
  :root[data-theme="sunrise"] { --accent-c: 0.22; --accent-l: 72%; }
}
```

### Forest Theme

**Data Attribute:** `data-theme="forest"`

```css
:root[data-theme="forest"] {
  --accent-h: 145; --accent-c: 0.16; --accent-l: 58%;
  --secondary-hue-shift: 50; --tertiary-hue-shift: -100;
}
@media (prefers-color-scheme: dark) {
  :root[data-theme="forest"] { --accent-c: 0.18; --accent-l: 68%; }
}
```

## Usage

Apply themes the same way as the example file:

```html
<html data-theme="ocean">
  <!-- Application with Ocean theme -->
</html>
```

## Differences from example-brand.css

- **Compact Format**: Single-line declarations for smaller file size
- **No Comments**: Production-optimized without explanatory comments
- **Same Functionality**: Identical color values and behavior

## When to Use

- **Production**: Use `theme-packs.css` for live applications
- **Development**: Use `example-brand.css` for learning and customization
- **Both**: Include both files and choose based on environment

## Browser Support

Same as `example-brand.css`:

- Data attributes in all browsers
- CSS custom properties in modern browsers
- `prefers-color-scheme` with graceful fallback

## Integration Notes

- Import after `core/palette.css`
- Can be combined with component themes in `core/theme.css`
- Use for quick theme switching in applications

## Related Files

- `themes/example-brand.css`: Commented version with detailed explanations
- `core/palette.css`: Color generation system
- `core/theme.css`: Component-specific theming