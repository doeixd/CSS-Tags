---
title: Mixins Core
description: The `mixins.css` file provides a library of reusable CSS functions and mixins based on proposed CSS specifications. It demonstrates forward-looking CSS patterns
---

## Overview
The `mixins.css` file provides a library of reusable CSS functions and mixins based on proposed CSS specifications. It demonstrates forward-looking CSS patterns for calculations, utilities, and component styling.

## Important Notice
⚠️ **PROGRESSIVE ENHANCEMENT**: Custom functions are available in [Chromium 139+](https://developer.chrome.com/release-notes/139#css_custom_functions), but are not yet a cross-browser baseline. Custom mixins remain an actively changing [draft feature](https://drafts.csswg.org/css-mixins-1/#defining-custom-mixins). Shipped components provide standard CSS fallbacks; treat mixins as forward-looking reference material.

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

### --palette-color Function
Builds one OKLCH palette stop from lightness, chroma, and hue tokens. It is useful when a family needs a custom chroma profile instead of the shared clamped curve.

```css
@function --palette-color(--lightness type(*), --chroma type(*), --hue type(*)) returns type(*) {
  result: oklch(var(--lightness) var(--chroma) var(--hue));
}

.gold-swatch {
  background: --palette-color(var(--scale-l-7), var(--palette-gold-chroma-7), var(--hue-gold));
}
```

### Palette Transformation Functions

The remaining helpers cover the common operations needed while constructing or consuming a scale:

- `--palette-clamped-color(lightness, chroma, max-chroma, hue)` limits chroma before producing the stop.
- `--palette-seed-color(seed, lightness, chroma, max-chroma)` preserves a seed color's hue while replacing its lightness and chroma.
- `--palette-alpha(color, alpha)` creates a transparent variant without changing the OKLCH channels.
- `--palette-mix(from, to, amount)` blends two colors in OKLCH; `amount` defaults to `50%`.

```css
.example {
  --safe-gold: --palette-clamped-color(58%, .24, .22, 85);
  --seed-step: --palette-seed-color(oklch(62% .18 320), 82%, .08, .08);
  --glass-gold: --palette-alpha(var(--safe-gold), 40%);
  --gold-rose: --palette-mix(var(--safe-gold), var(--rose-6), 30%);
}
```

## Mixins

### Fallback-first usage

Custom CSS mixins are an enhancement, not a dependency of CSS Tags. Keep the
ordinary declarations first and add the helper only as an experimental
equivalent:

```css
.action-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm, 0.75rem);

  @apply --cluster(var(--space-sm), center, flex-start);
}
```

Unsupported browsers still receive the complete layout. Do not remove explicit
declarations from public components until custom mixins are a cross-browser
baseline.

### Composition recipe mixins

- `--stack(--gap, --align)` creates a min-width-safe block stack.
- `--cluster(--gap, --align, --justify)` creates a wrapping inline group.
- `--surface-frame(--background, --color, --border-color, --radius,
  --padding, --shadow)` creates a token-driven framed surface.
- `--content-region-rhythm(--gap)` provides compact heading, paragraph, and
  list rhythm inside common UI blocks.
- `--focus-ring(--color, --width, --offset)` provides the shared keyboard
  focus treatment.

These are recipes, not replacements for component-specific variables. The
arguments accept raw CSS values and semantic tokens.

```css
.result-card {
  /* Complete fallback. */
  display: grid;
  gap: var(--space-md);
  min-inline-size: 0;
  padding: var(--space-md);
  border: 1px solid var(--outline-subtle);
  border-radius: var(--radius-lg);
  background: var(--surface-default);
  color: var(--text-default);

  /* Optional recipe form. */
  @apply --stack(var(--space-md));
  @apply --surface-frame(
    var(--surface-default),
    var(--text-default),
    var(--outline-subtle),
    var(--radius-lg),
    var(--space-md),
    none
  );
}
```



### --palette-scale Mixin
Generates generic `--palette-step-0` through `--palette-step-12` output tokens from the shared lightness scale and a local `--palette-chroma-*` profile. This follows the current draft's `@result` and `@apply` syntax.

```css
.brand-scale {
  --palette-chroma-0: .02;
  --palette-chroma-1: .04;
  --palette-chroma-2: .06;
  --palette-chroma-3: .08;
  --palette-chroma-4: .10;
  --palette-chroma-5: .14;
  --palette-chroma-6: .18;
  --palette-chroma-7: .22;
  --palette-chroma-8: .18;
  --palette-chroma-9: .14;
  --palette-chroma-10: .10;
  --palette-chroma-11: .08;
  --palette-chroma-12: .06;

  @apply --palette-scale(85);
}

.brand-swatch {
  background: var(--palette-step-7);
}
```

The mixin is an experimental convenience API. Keep direct `oklch(...)` declarations as fallbacks when the output must work across today's browsers.

### Generate a Complete Palette

`--palette-clamped-scale()` is the shortest path from a hue to a complete, gamut-limited 13-step palette. It uses the library's shared lightness, chroma, and clamp curves.

```css
.violet-palette {
  @apply --palette-clamped-scale(285);
  @apply --palette-roles;

  color: var(--palette-strong);
  background: var(--palette-subtle);
}
```

The generated contract is:

- `--palette-step-0` through `--palette-step-12`: the complete scale
- `--palette-lightest`, `--palette-subtle`, `--palette-light`, `--palette-mid`, `--palette-dark`, `--palette-strong`, and `--palette-darkest`: optional convenience aliases from `--palette-roles`

These aliases describe relative positions, not guaranteed text/background contrast. Test the exact pair you use.

### Generate a Palette from a Seed Color

`--palette-seed-scale()` extracts the seed's OKLCH hue and applies the standard lightness, chroma, and gamut curves. This is useful when design input arrives as a color instead of a hue number.

```css
.product-palette {
  --product-seed: oklch(62% .2 330);
  @apply --palette-seed-scale(var(--product-seed));
}

.product-card {
  border-color: var(--palette-step-6);
  background: var(--palette-step-2);
}
```

### Generate an Alpha Scale

`--palette-alpha-scale()` creates `--palette-alpha-0` through `--palette-alpha-8` using the library's shared alpha tokens.

```css
.scrim-palette {
  @apply --palette-alpha-scale(var(--palette-step-11));
}

.scrim {
  background: var(--palette-alpha-5);
}
```

Because CSS cannot interpolate a custom-property name from a mixin argument, whole-scale mixins intentionally emit a scoped generic contract. Apply them on the component or theme scope that consumes `--palette-step-*`, then alias individual steps to public names when needed.

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
  @apply --surface-role(var(--role));
  background-color: var(--bg);
  border: var(--border-width, 1px) solid var(--border);
  @apply --contrast-text-for-bg;
  @apply --state-adjust;
}
```

### --input-role Mixin
Applies input-specific surface styling.

```css
@mixin --input-role(--role: subtle) {
  @apply --surface-role(var(--role));
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
- **@function**: Chromium 139+; retain a direct-value fallback for other engines
- **@mixin**: Experimental draft; do not make production output depend on it
- **@property**: Chrome 85+, Firefox 128+ (limited)
- **@supports**: All modern browsers
- **Fallback**: Use preprocessor equivalents or manual implementations

## Integration with Framework
These mixins work with the framework's:
- **Engine Layer**: Uses delta calculations for adjustments
- **Theme Layer**: Consumes semantic color variables
- **Components Layer**: Applied via `@apply` in component definitions
- **Utilities Layer**: Available for utility class generation
