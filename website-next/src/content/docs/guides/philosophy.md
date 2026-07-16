---
title: Philosophy & Core Principles
description: Understanding the design philosophy and principles behind CSS Tags.
---

This framework is built on principles that prioritize developer experience, accessibility, and future-proofing. As a showcase of modern CSS, it demonstrates advanced techniques while remaining practical for production use.

## Core Principles

### Semantic Styling
Brings styling back to HTML tags using modern CSS techniques. Instead of describing appearance through classes, you describe content through semantic tags.

```html
<!-- Semantic approach -->
<card>
  <card-body>
    <h2>Title</h2>
    <p>Content</p>
  </card-body>
</card>

<!-- Traditional utility classes -->
<div class="bg-white p-4 rounded shadow-md max-w-sm mx-auto">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>
```

### Educational Showcase
Demonstrates cutting-edge CSS features and best practices. Every technique used is an opportunity to learn modern CSS:
- **Cascade Layers** (`@layer`) for organized cascade
- **Container Queries** for component-level responsive design
- **OKLCH Colors** for perceptually uniform color manipulation
- **:has() Selector** for parent-based styling
- **CSS Anchor Positioning** for tooltips and popovers
- **@property** for typed CSS variables
- **@scope** for component isolation
- **Relative Color Syntax** for dynamic color derivation

### Progressive Enhancement
Starts with a solid baseline and enhances for capable browsers. The framework includes graceful degradation so pages remain usable in older browsers, though layout and colors may be simplified.

### Cascade Layering
Explicit cascade order prevents specificity conflicts. The framework uses CSS cascade layers to ensure predictable styling:

```css
@layer reset, base, tokens, engine, palette, theme, defaults, components, utilities, layouts;
```

This hierarchical structure means:
- Lower layers establish foundation
- Higher layers build on top
- No specificity wars
- Predictable overrides

### Design Token System
Single source of truth for all design values. Change one token, update the entire theme:

```css
:root {
  --primary-h: 280;      /* Purple theme */
  --space-md: 1.25rem;   /* Larger spacing */
}
```

Every color, spacing value, font size, and border radius flows from these tokens, ensuring consistency across your entire UI.

### Modern Color Science
OKLCH for perceptually uniform color manipulation. Unlike HSL or RGB, OKLCH provides:
- **Perceptual uniformity**: Equal steps look equally different
- **Wider gamut**: Access to more vibrant colors
- **Predictable manipulation**: Lightness changes look consistent
- **Better gradients**: No muddy middle colors

```css
/* One hue creates entire palette */
--primary-h: 240;
--accent: oklch(55% 0.15 240);
--accent-subtle: oklch(from var(--accent) calc(l * 1.15) calc(c * 0.12) h);
```

### Accessibility First
Built-in support for dark mode, high contrast, and reduced motion:

```css
/* Automatic dark mode */
@media (prefers-color-scheme: dark) {
  /* Colors automatically adapt */
}

/* High contrast support */
@media (prefers-contrast: more) {
  /* Enhanced visibility */
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  /* Minimal animations */
}
```

Auto-contrast calculations ensure text is always readable against any background.

### Component Autonomy
Self-contained components using container queries. Components respond to their container size, not the viewport:

```css
/* Card adapts based on its own width */
@container (min-width: 400px) {
  card {
    display: flex;
    flex-direction: row;
  }
}
```

A card in a narrow sidebar looks different from one in wide content—automatically.

## Architecture Overview

The framework uses a sophisticated layered architecture with CSS cascade layers for predictable, maintainable styling.

### Cascade Layer Structure

1. **Reset Layer** (`@layer reset`): Zero-specificity browser normalization
2. **Base Layer** (`@layer base`): Fundamental design tokens and global variables
3. **Tokens Layer** (`@layer tokens`): Raw design values as CSS custom properties
4. **Engine Layer** (`@layer engine`): Mathematical calculations and color transformations
5. **Palette Layer** (`@layer palette`): Complete color palettes with systematic scales
6. **Theme Layer** (`@layer theme`): Generative theme system creating semantic color roles
7. **Defaults Layer** (`@layer defaults`): Base styling for HTML elements
8. **Components Layer** (`@layer components`): Reusable UI components with scoped styling
9. **Utilities Layer** (`@layer utilities`): Single-purpose utility classes
10. **Layouts Layer** (`@layer layouts`): Declarative layout components

### Key Architectural Principles

- **Hierarchical Token System**: Design tokens flow from abstract to concrete
- **Container Query-First Design**: Components adapt to their container rather than viewport
- **Scoped Component Styling**: Components use `@scope` to isolate styles
- **Attribute-Driven Components**: Components controlled by HTML attributes using `attr()`
- **Progressive Enhancement**: Modern features with graceful fallbacks

### Example: Cascade Layers in Action

```css
@layer reset, base, tokens, theme, components, utilities;

@layer reset {
  /* Zero-specificity normalization */
  *, *::before, *::after { box-sizing: border-box; }
}

@layer theme {
  /* Semantic color roles */
  :root {
    --accent: oklch(55% 0.15 240);
    --text-default: oklch(15% 0.02 240);
  }
}

@layer components {
  /* Component styles with proper specificity */
  card { background: var(--surface-default); }
}
```

## When NOT to Use CSS Tags

This approach is powerful but opinionated. It may **not** be the best fit if you:

### Need to Support Legacy Browsers

This framework relies heavily on modern CSS features not available in browsers like IE11. Required features include:
- OKLCH colors (Chrome 111+, Firefox 113+, Safari 15.4+)
- Container queries (Chrome 105+, Firefox 110+, Safari 16+)
- :has() selector (Chrome 105+, Firefox 121+, Safari 16+)
- Cascade layers (Chrome 99+, Firefox 97+, Safari 15.4+)

If you need IE11 or older browser support, consider alternatives.

### Require Extreme Bundle Size Optimization

While the file is relatively small (~50KB), utility-first frameworks like Tailwind CSS can achieve smaller final builds with their JIT compilers that only include used classes.

CSS Tags includes the entire component library and design system upfront. If bundle size is your primary concern and you're shipping to production, a JIT-compiled utility framework might be better.

### Are Deeply Invested in a Utility-First Workflow

This is a component-first, semantic-by-design alternative to utility-first frameworks. If your team is deeply invested in utility classes and that workflow, switching paradigms may not be worth it.

CSS Tags does include utility classes, but they're secondary to the semantic component approach.

### Need Framework-Specific Components

This is a pure CSS library and does not include React, Vue, or Svelte components out of the box. You can use these tags in any framework, but there are no framework-specific bindings or components.

If you need React components with TypeScript definitions and framework-specific features, a React component library would be more appropriate.

### Need Maximum Control

CSS Tags is opinionated about structure and styling. If you need complete control over every aspect of your styling architecture, you might prefer a more minimal approach or building your own system.

## When CSS Tags is Perfect

CSS Tags excels when you:

- **Want to learn modern CSS**: Every feature is a learning opportunity
- **Need rapid prototyping**: Zero configuration, just add a link tag
- **Value semantic HTML**: Prefer content-first markup over styling classes
- **Appreciate opinionated design**: Want a cohesive system out of the box
- **Build content-focused sites**: Documentation, blogs, portfolios, landing pages
- **Want automatic dark mode**: Built-in theme adaptation
- **Need accessibility**: WCAG-compliant defaults
- **Value maintainability**: Semantic tags are easier to understand and maintain

## Design Philosophy: Semantic vs Utility

### Traditional Utility Approach

```html
<div class="bg-white p-4 rounded shadow-md max-w-sm mx-auto">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>
```

**Pros:**
- Rapid development
- Inline styling without leaving HTML
- Small bundle size with JIT

**Cons:**
- Verbose markup
- Difficult to read
- Describes appearance, not content
- Tightly couples markup to styling

### CSS Tags Semantic Approach

```html
<card>
  <card-body>
    <h2>Title</h2>
    <p>Content</p>
  </card-body>
</card>
```

**Pros:**
- Clean, readable markup
- Describes content, not styling
- Easy to maintain
- Separates concerns
- Educational value

**Cons:**
- Larger initial bundle
- Requires modern browser
- Less granular control
- Opinionated structure

Both approaches are valid. CSS Tags chooses semantic markup and modern CSS as its core philosophy.

## Future-Proofing

CSS Tags is built on web standards that are increasingly well-supported:

- **CSS Cascade Layers**: Now in all evergreen browsers
- **Container Queries**: Stable and shipping everywhere
- **OKLCH Colors**: Wide support, with fallbacks improving
- **:has() Selector**: Finally available cross-browser

As browsers continue improving CSS support, CSS Tags will only get better without requiring updates to the library itself.

## Conclusion

CSS Tags is an educational showcase of modern CSS that's also practical for production use. It prioritizes:

1. **Developer experience** through semantic markup
2. **Modern CSS features** for learning and capability
3. **Accessibility** as a first-class concern
4. **Maintainability** through clear separation of concerns
5. **Future-proofing** by building on web standards

If these principles align with your project's needs, CSS Tags offers a powerful, opinionated foundation for building beautiful, accessible web experiences.
