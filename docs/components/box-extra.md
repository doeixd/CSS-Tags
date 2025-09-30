# Box Extra Documentation

## Overview
The `box-extra.css` file provides supplementary utilities and mixins for advanced box-model styling. It includes a proposed `@mixin --box` for declarative styling and several utility classes for common UI patterns.

## Important Notice
⚠️ **Proposed Feature**: The `@mixin` rule demonstrated in this file is NOT supported in any browser as of late 2025. This file showcases a forward-looking approach for pre-processor-free CSS mixins.

## Core Features

### @mixin --box
A comprehensive mixin that applies common box-model and layout styles to any selector. It replicates the functionality of the `<box>` component but allows CSS-first application.

#### Parameters

**Spacing Parameters:**
- `--p`: Shorthand for block and inline padding
- `--px`: Inline (horizontal) padding override
- `--py`: Block (vertical) padding override
- `--m`: Shorthand for block and inline margin
- `--mx`: Inline (horizontal) margin override
- `--my`: Block (vertical) margin override

**Appearance Parameters:**
- `--bg`: Background color
- `--color`: Text color
- `--border`: Full border property string
- `--radius`: Border radius

**Layout & Sizing Parameters:**
- `--display`: Display property (block, flex, grid, etc.)
- `--width`, `--height`, `--max-width`: Sizing properties
- `--align`: Text alignment

#### Usage Example
```css
.custom-alert {
  @apply --box(
    --display: flex,
    --p: var(--space-lg),
    --bg: var(--surface-error),
    --radius: var(--radius-md)
  );
}
```

## Utility Classes

### .u-panel
A general-purpose container with padding, subtle background, and rounded corners.

**CSS Properties:**
- Padding: `var(--space-md, 1.5rem)`
- Background: `var(--surface-subtle)`
- Border radius: `var(--radius-lg, 8px)`

**Usage:**
```html
<div class="u-panel">Panel content</div>
```

### .u-well
An inset container for code blocks or read-only information, with border and muted background.

**CSS Properties:**
- Padding: `var(--space-md, 1.5rem)`
- Background: `var(--surface-muted)`
- Border: `1px solid var(--outline-muted)`
- Border radius: `var(--radius-md, 6px)`

**Usage:**
```html
<div class="u-well">Well content</div>
```

### .u-spacer-block
A vertical spacer utility for adding space between elements.

**CSS Properties:**
- Display: block
- Height: `var(--_height)` (default: `var(--space-lg, 2rem)`)

**Usage:**
```html
<p>First paragraph</p>
<div class="u-spacer-block" style="--_height: 4rem;"></div>
<p>Second paragraph</p>
```

## Composition Example
The file includes an example of using the `--box` mixin to create a custom callout component:

```css
.callout-info {
  @apply --box(
    --display: grid,
    --p: var(--space-lg, 2rem),
    --bg: var(--surface-info),
    --border: 1px solid var(--info),
    --radius: var(--radius-lg, 8px)
  );

  grid-template-columns: max-content 1fr;
  gap: var(--space-md, 1.5rem);
  align-items: center;

  &::before {
    content: 'ℹ️';
    font-size: 1.5em;
  }
}
```

## Philosophy
- **CSS-First**: Apply styling directly in CSS without requiring specific HTML tags
- **Reusability**: Create consistent, custom components using the mixin
- **Convenience**: Use utility classes for common patterns

## Browser Support
The mixin syntax is proposed and not currently supported. The utility classes work in all modern browsers that support CSS custom properties.