# Modern CSS Framework: A Comprehensive Guide

A production-ready, educational CSS framework designed for modern web development. Built with advanced CSS features like cascade layers, OKLCH colors, and container queries, this framework provides a scalable, maintainable foundation for building accessible, performant interfaces.

## 🎯 Philosophy & Core Principles

This framework is built on principles that prioritize developer experience, accessibility, and future-proofing:

- **Progressive Enhancement**: Starts with a solid baseline and enhances for capable browsers
- **Cascade Layering**: Explicit cascade order prevents specificity conflicts
- **Design Token System**: Single source of truth for all design values
- **Modern Color Science**: OKLCH for perceptually uniform color manipulation
- **Accessibility First**: Built-in support for dark mode, high contrast, and reduced motion
- **Utility-First Approach**: Rapid development with composable utility classes
- **Component Autonomy**: Self-contained components using container queries

## 🚀 Key Features

### Advanced CSS Architecture
- **Zero-Specificity Reset**: Uses `:where()` for easy overrides without specificity wars
- **CSS Layers**: Organized cascade with `@layer` for predictable styling order
- **Design Tokens**: Comprehensive system covering colors, typography, spacing, shadows, animations
- **OKLCH Color Space**: Perceptually uniform colors for better design consistency
- **Auto-Contrast Calculation**: Dynamic text colors that ensure readability on any background

### Accessibility & Theming
- **Dark Mode Support**: Automatic adaptation based on `prefers-color-scheme`
- **High Contrast Mode**: Enhanced visibility for users with visual impairments
- **Reduced Motion**: Respects `prefers-reduced-motion` for better UX
- **Focus Management**: Enhanced focus indicators for keyboard navigation
- **Screen Reader Utilities**: Built-in utilities for assistive technologies

### Modern Layout Techniques
- **Container Queries**: Component-level responsive design that adapts to container size
- **Layout Primitives**: Declarative layouts (grid, stack, center, sidebar, etc.)
- **Responsive Utilities**: Breakpoint-specific classes for rapid prototyping
- **Flexible Components**: Self-contained components with customizable properties

### Performance & Maintainability
- **Modular Structure**: Organized into logical layers for easy maintenance
- **Minimal Specificity**: Reduces style recalculation overhead
- **Modern Browser Features**: Leverages CSS custom properties, `@property`, `@scope`
- **Tree-Shakable**: Only include what you use

## 📦 Installation & Setup

### Quick Start
1. Download or clone the repository
2. Include the main CSS file in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>
  <link rel="stylesheet" href="path/to/index.css">
</head>
<body>
  <!-- Your content here -->
</body>
</html>
```

3. Or import in your existing CSS:

```css
@import url("path/to/index.css");
```

### CDN Usage (Coming Soon)
```html
<link rel="stylesheet" href="https://cdn.example.com/css-framework/index.css">
```

## 🎨 Usage Examples

### Basic Styling with Utilities
```html
<div class="bg-surface-default p-md rounded-md shadow-sm">
  <h2 class="text-xl font-bold text-default mb-sm">Card Title</h2>
  <p class="text-subtle mb-md">This card uses utility classes for rapid styling.</p>
  <button class="button button-filled-accent">Action Button</button>
</div>
```

### Component Usage
```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Product Card</h3>
  </div>
  <div class="card__body">
    <img src="product.jpg" alt="Product" class="w-full rounded">
    <p class="mt-sm">Product description goes here.</p>
  </div>
  <div class="card__footer">
    <button class="button button-outline-accent">Add to Cart</button>
  </div>
</div>
```

### Layout Primitives
```html
<div class="l-grid" style="--l-grid-min-item-size: 15rem;">
  <div class="card">Grid Item 1</div>
  <div class="card">Grid Item 2</div>
  <div class="card">Grid Item 3</div>
</div>

<div class="l-sidebar">
  <main>Main content area</main>
  <aside class="l-sidebar__aside">Sidebar content</aside>
</div>
```

### Design Token Customization
```css
:root {
  /* Customize brand colors */
  --primary-h: 280; /* Purple primary */
  --accent: oklch(var(--scale-l-6) var(--scale-c-7) var(--primary-h));
  
  /* Adjust spacing */
  --space-md: 1.25rem;
  
  /* Typography tweaks */
  --font-family-sans: 'Inter', sans-serif;
}
```

### Dark Mode Implementation
```css
/* Automatic dark mode */
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    --base: oklch(var(--scale-l-12) var(--scale-c-1) var(--gray-h));
    --text-default: oklch(var(--scale-l-2) var(--scale-c-2) var(--gray-h));
  }
}

/* Manual toggle */
.dark {
  --base: oklch(var(--scale-l-12) var(--scale-c-1) var(--gray-h));
}
```

## 🏗️ Architecture Overview

The framework is organized into distinct cascade layers:

1. **Reset Layer**: Zero-specificity browser normalization
2. **Tokens Layer**: Raw design values as CSS custom properties
3. **Engine Layer**: Mathematical calculations and color transformations
4. **Theme Layer**: Semantic color roles and theme definitions
5. **Palette Layer**: Complete color scales for UI and data visualization
6. **Defaults Layer**: Base styling for HTML elements
7. **Components Layer**: Reusable UI components
8. **Utilities Layer**: Single-purpose utility classes
9. **Layouts Layer**: Layout patterns and structural components

This layered approach ensures predictable styling and easy customization.

## 🎨 Color System Deep Dive

### OKLCH Color Space
Unlike traditional RGB/HSL, OKLCH provides:
- **Perceptual Uniformity**: Equal steps correspond to equal perceived changes
- **Intuitive Manipulation**: Separate control over lightness, chroma, and hue
- **Wide Gamut Support**: Access to colors outside sRGB

### Automatic Contrast Calculation
The framework includes a sophisticated contrast calculation engine:

```css
--auto-contrast-text: oklch(
  from var(--bg, var(--base))
  clamp(0.1, (var(--l-threshold, 0.65) / l - 1) * 999, 0.98)
  min(c, var(--c-threshold, 0.08))
  h
);
```

This ensures text always has sufficient contrast against its background, adapting automatically to theme changes.

### Color Scales
Each color includes 13 systematic steps (0-12) for consistent hierarchies:

- **Steps 0-2**: Subtle backgrounds and highlights
- **Steps 3-5**: UI backgrounds and muted elements
- **Steps 6-8**: Primary UI elements and borders
- **Steps 9-11**: Text and prominent elements
- **Step 12**: Headings and emphasis

## 📱 Responsive Design with Container Queries

Modern responsive design focuses on component-level adaptation:

```css
.responsive-card {
  container-type: inline-size;
  container-name: card;
  display: flex;
  flex-direction: column;
}

@container card (min-width: 30em) {
  .responsive-card {
    flex-direction: row;
  }
}
```

This approach creates truly reusable components that adapt to their context, not just the viewport.

## ♿ Accessibility Best Practices

The framework includes comprehensive accessibility features:

- **Focus Management**: Visible focus indicators for keyboard navigation
- **Color Contrast**: WCAG AA compliance with auto-adjusting colors
- **Motion Preferences**: Reduced motion support for users with vestibular disorders
- **Screen Reader Support**: Semantic HTML patterns and utility classes
- **High Contrast Mode**: Enhanced visibility for low-vision users

## 🛠️ Customization & Extension

### Creating Custom Components
```css
@layer components {
  .my-component {
    background-color: var(--surface-default);
    color: var(--text-default);
    padding: var(--space-md);
    border-radius: var(--radius-md);
  }
}
```

### Extending the Token System
```css
@layer tokens {
  :root {
    --custom-spacing: 3rem;
    --custom-color: oklch(50% 0.2 180);
  }
}
```

### Theme Customization
```css
.theme-ocean {
  --primary-h: 200; /* Blue theme */
  --success-h: 170; /* Teal accents */
}
```

## 📚 Learning Resources

### Documentation
- [Architecture Guide](./docs/architecture.md): Deep dive into the layer system
- [Color System Guide](./docs/guides/color-system.md): Understanding OKLCH and theming
- [Accessibility Guide](./docs/guides/accessibility.md): Building inclusive interfaces
- [Container Queries Guide](./docs/guides/container-queries.md): Modern responsive design
- [Customization Guide](./docs/guides/customization.md): Extending the framework

### Examples
- [Demo Page](./examples/demo.html): Interactive examples of all features
- [Component Showcase](./examples/demo2.html): Real-world component usage

### Community & Support
- [GitHub Issues](https://github.com/yourusername/css-framework/issues): Report bugs and request features
- [Discussions](https://github.com/yourusername/css-framework/discussions): Ask questions and share ideas

## 🔧 Development & Contributing

### Local Development
1. Clone the repository
2. Make changes in feature branches
3. Test across browsers and devices
4. Ensure CSS validity and performance
5. Submit pull requests with clear descriptions

### Testing Checklist
- [ ] CSS validates without errors
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Accessible with screen readers
- [ ] Performance-optimized (no unnecessary repaints)
- [ ] Responsive across device sizes
- [ ] Dark mode and high contrast work correctly

## 🌟 Why Choose This Framework?

- **Future-Proof**: Built with modern CSS standards and best practices
- **Educational**: Designed to teach advanced CSS concepts through practical usage
- **Flexible**: Highly customizable without sacrificing consistency
- **Performant**: Optimized for minimal runtime overhead
- **Accessible**: Built-in support for inclusive design
- **Maintainable**: Clear architecture makes updates and extensions straightforward

## 📈 Performance Considerations

- **CSS Size**: ~50KB minified (tree-shake unused utilities)
- **Runtime Performance**: Minimal specificity reduces style recalculation
- **Loading Strategy**: Critical CSS can be extracted from foundation layers
- **Browser Caching**: Leverage long-term caching for static assets

## 🔍 Browser Support Matrix

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Layers | ✅ 99+ | ✅ 97+ | ✅ 15.4+ | ✅ 99+ |
| Container Queries | ✅ 105+ | ✅ 110+ | ✅ 16+ | ✅ 105+ |
| OKLCH Colors | ✅ 111+ | ✅ 113+ | ✅ 15.4+ | ✅ 111+ |
| @property | ✅ 85+ | ✅ 128+ | ✅ 16.4+ | ✅ 85+ |
| @scope | ✅ 118+ | ✅ 128+ | ✅ 17.4+ | ✅ 118+ |

For older browsers, the framework provides sensible defaults and graceful degradation.

## 📄 License

MIT License - Free to use in personal and commercial projects. See [LICENSE](./LICENSE) for full details.

---

**Ready to build something amazing?** Start with the [Quick Start Guide](./docs/quick-start.md) or explore the [full documentation](./docs/README.md).