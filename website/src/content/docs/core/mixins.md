---
title: Mixins Core
description: The `mixins.css` file provides a library of reusable CSS functions and mixins based on proposed CSS specifications. It demonstrates forward-looking CSS patterns
---

## Overview
The `mixins.css` file provides a library of reusable CSS functions and mixins based on proposed CSS specifications. It demonstrates forward-looking CSS patterns for calculations, utilities, and component styling.

## Important Notice
⚠️ **PROPOSED SPECIFICATIONS**: The `@function` and `@mixin` rules are NOT supported in any browser as of late 2025. This file showcases future CSS capabilities and preprocessor-free patterns.

## Functions

### --rem Function
Converts pixel values to rem units.

```css
@function --rem(--px type(<number>), --base type(<number>): 16) returns type(<length>) {
  result: calc(var(--px) / var(--base) * 1rem);
}
```

**Usage:**
```css
.my-element {
  font-size: --rem(24); /* 1.5rem with 16px base */
  margin: --rem(32, 20); /* 1.6rem with 20px base */
}
```

### --fluid Function
Creates responsive fluid values that scale with viewport size.

```css
@function --fluid(
  --min-val type(<length>),
  --max-val type(<length>),
  --min-vp type(<length>): 375px,
  --max-vp type(<length>): 1280px
) returns type(<length>) {
  --slope: calc((var(--max-val) - var(--min-val)) / (var(--max-vp) - var(--min-vp)));
  --intercept: calc(var(--min-val) - var(--slope) * var(--min-vp));
  --preferred-val: calc(var(--slope) * 100vw + var(--intercept));
  result: clamp(var(--min-val), var(--preferred-val), var(--max-val));
}
```

**Usage:**
```css
.heading {
  font-size: --fluid(1.5rem, 3rem, 375px, 1280px);
}
```

### --contrast-color Function
Calculates black or white for optimal contrast against a background.

```css
@function --contrast-color(
  --bg-color type(<color>),
  --threshold type(<number>): 0.65
) returns type(<color>) {
  --l-result: clamp(0, (l / var(--threshold) - 1) * -infinity, 1);
  result: oklch(from var(--bg-color) var(--l-result) 0 h);
}
```

**Usage:**
```css
.text-on-color {
  color: --contrast-color(var(--brand-color));
}
```

## Mixins

### --center-grid Mixin
Centers content using CSS Grid.

```css
@mixin --center-grid {
  display: grid;
  place-content: center;
}
```

**Usage:**
```css
.centered-content {
  @mixin --center-grid;
}
```

### --elevation Mixin
Applies consistent box-shadow values from a predefined scale.

```css
@mixin --elevation(--level type(<integer>)) {
  --shadow-1: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-2: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-3: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  @when (var(--level) = 1) { box-shadow: var(--shadow-1); }
  @when (var(--level) = 2) { box-shadow: var(--shadow-2); }
  @when (var(--level) = 3) { box-shadow: var(--shadow-3); }
}
```

**Usage:**
```css
.card {
  @mixin --elevation(2);
}
```

### --visually-hidden Mixin
Hides content visually while keeping it accessible to screen readers.

```css
@mixin --visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0);
  white-space: nowrap; border-width: 0;
}
```

**Usage:**
```css
.sr-only {
  @mixin --visually-hidden;
}
```

### --contrast-text Mixin
Applies accessible text color with automatic contrast calculation and fallbacks.

```css
@mixin --contrast-text(--bg-color, --threshold: 0.65) {
  @property --bg-color { syntax: "<color>"; inherits: true; initial-value: transparent; }
  color: white;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  @supports (color: oklch(from red l c h)) {
    --l-result: clamp(0, (l / var(--threshold) - 1) * -infinity, 1);
    color: oklch(from var(--bg-color) var(--l-result) 0 h);
    text-shadow: none;
  }
  @supports (color: contrast-color(red)) {
    color: contrast-color(var(--bg-color) to black or white);
    text-shadow: none;
  }
}
```

**Usage:**
```css
.colored-text {
  background: var(--brand-color);
  @mixin --contrast-text(var(--brand-color));
}
```

## Theme Mixins

### --surface-role Mixin
Applies surface styling based on semantic roles.

```css
@mixin --surface-role(--role type(<custom-ident>)) {
  @when (var(--role) = muted) {
    --bg: var(--surface-muted);
    --border: var(--outline-subtle);
    --text: var(--text-default);
  }
  @when (var(--role) = subtle) {
    --bg: var(--surface-subtle);
    --border: var(--outline-subtle);
    --text: var(--text-default);
  }
  /* ... other roles */
}
```

### --state-adjust Mixin
Provides consistent hover, active, and focus states.

```css
@mixin --state-adjust {
  transition: background-color var(--transition-duration, 150ms) var(--transition-timing, ease-out),
              border-color var(--transition-duration, 150ms) var(--transition-timing, ease-out),
              color var(--transition-duration, 150ms) var(--transition-timing, ease-out),
              box-shadow var(--transition-duration, 150ms) var(--transition-timing, ease-out);
  &:hover:not([disabled]) {
    --bg: oklch(from var(--bg) calc(l + var(--l-delta-1)) c h);
    --border: oklch(from var(--border) calc(l + var(--l-delta-1)) c h);
  }
  &:active:not([disabled]) {
    --bg: oklch(from var(--bg) calc(l + var(--l-delta-1-down)) c h);
    --border: oklch(from var(--border) calc(c + var(--c-delta-1)) l h);
  }
  &:focus-visible {
    outline: var(--border-width-thick, 2px) solid var(--outline-focus);
    outline-offset: 2px;
  }
}
```

### --contrast-text-for-bg Mixin
Automatically calculates text color based on background.

```css
@mixin --contrast-text-for-bg {
  --auto-contrast-text: oklch(from var(--bg, currentColor) clamp(0.1, (var(--l-threshold, 0.65) / l - 1) * 999, 0.98) min(c, var(--c-threshold, 0.08)) h);

  color: var(--auto-contrast-text, oklch(
    from var(--bg, currentColor)
    clamp(0.1, (var(--l-threshold, 0.65) / l - 1) * 999, 0.98)
    min(c, var(--c-threshold, 0.08))
    h
  ));
}
```

### --button-role Mixin
Combines surface role with button-specific styling.

```css
@mixin --button-role(--role: default, --accent-color: var(--accent)) {
  @mixin --surface-role(var(--role));
  background-color: var(--bg);
  border: var(--border-width, 1px) solid var(--border);
  @mixin --contrast-text-for-bg;
  @apply --state-adjust;
}
```

### --input-role Mixin
Applies input-specific surface styling.

```css
@mixin --input-role(--role: subtle) {
  @mixin --surface-role(var(--role));
  background-color: var(--bg);
  border: var(--border-width, 1px) solid var(--border);
  color: var(--text);
  @apply --state-adjust;
}
```

### --feedback-role Mixin
Applies semantic colors for status feedback.

```css
@mixin --feedback-role(--kind type(<custom-ident>)) {
  @when (var(--kind) = success) {
    --bg: var(--surface-success);
    --border: var(--outline-success);
    --text: var(--text-success);
  }
  @when (var(--kind) = warning) {
    --bg: var(--surface-warning);
    --border: var(--outline-warning);
    --text: var(--text-warning);
  }
  /* ... other feedback types */
}
```

## Educational Value

### Future CSS Patterns
- **Typed Parameters**: Type-safe function and mixin parameters
- **Conditional Logic**: `@when` for conditional styling
- **Return Values**: Functions that compute and return values
- **Mixin Composition**: Mixins calling other mixins

### Preprocessor-Free Development
- **Native CSS**: No build tools required for these patterns
- **Performance**: Zero runtime overhead
- **Debugging**: Standard browser dev tools
- **Future-Proof**: Based on evolving specifications

## Current Workarounds

### Using CSS Custom Properties
```css
/* Instead of @function --rem */
:root {
  --rem-16: 1rem;
  --rem-24: 1.5rem;
  --rem-32: 2rem;
}

/* Instead of @mixin --center-grid */
.center-grid {
  display: grid;
  place-content: center;
}
```

### PostCSS or Sass Equivalents
```scss
// Sass version of --rem function
@function rem($px, $base: 16) {
  @return calc($px / $base * 1rem);
}

// Sass version of --elevation mixin
@mixin elevation($level) {
  @if $level == 1 {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  } @else if $level == 2 {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
  // etc.
}
```

## Browser Support & Adoption
- **@function/@mixin**: Not supported (proposed for future CSS)
- **@property**: Chrome 85+, Firefox 128+ (limited)
- **@supports**: All modern browsers
- **Fallback**: Use preprocessor equivalents or manual implementations

## Integration with Framework
These mixins work with the framework's:
- **Engine Layer**: Uses delta calculations for adjustments
- **Theme Layer**: Consumes semantic color variables
- **Components Layer**: Applied via `@apply` in component definitions
- **Utilities Layer**: Available for utility class generation