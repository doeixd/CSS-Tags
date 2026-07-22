---
title: Main CSS Entry Point
description: What index.css includes, how its cascade layers compose, and when to use a smaller entry point.
---

`index.css` is the complete browser entry point. It loads the token system,
themes, semantic HTML defaults, components, utilities, and layouts in a stable
cascade contract.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css-tags@0.1.0/index.css">
```

With npm, import the package root:

```css
@import "css-tags";
```

## Cascade contract

The public layer order is:

```css
@layer base, reset, tokens, engine, theme, palette, defaults,
       components, utilities, layouts, website-theme;
```

That order is intentional:

- **tokens and theme** establish customizable inputs;
- **defaults** style semantic HTML without requiring classes;
- **components** add opt-in patterns and state contracts;
- **utilities** make small, explicit visual overrides;
- **layouts** own layout behavior and their declarative attributes.

Unlayered application CSS still wins over every library layer. If you prefer to
keep application overrides layered, declare your layer after the import:

```css
@import "css-tags";

@layer app {
  :root {
    --accent: oklch(62% 0.2 275);
  }

  .checkout-card {
    --card-max-width: 34rem;
  }
}
```

## What the full entry includes

- resets, tokens, palette, theme, and typography;
- native element defaults for content and forms;
- all component styles;
- utilities, including semantic colors and logical-corner helpers;
- the standard and extended layout primitives;
- optional example theme packs shipped with the package.

The exact import list lives in the package's `index.css`; this page describes
the contract instead of duplicating that list and becoming stale.

## Smaller imports

Package subpaths are exported for projects that want tighter ownership. For
example:

```css
@import "css-tags/core/tokens.css";
@import "css-tags/core/theme.css";
@import "css-tags/core/defaults.css";
@import "css-tags/components/card.css";
@import "css-tags/layouts/layout.css";
```

When assembling subpaths yourself, preserve the dependency order: tokens before
theme, theme before defaults/components, and component dependencies before the
component that consumes them. The root entry remains the supported zero-config
choice when request count or custom bundling is not a concern.

See [Browser Support](/CSS-Tags/guides/browser-support/) for the baseline used by
the shipped CSS.
