---
title: Introduction to CSS Tags
description: A comprehensive introduction to CSS Tags and what makes it special.
---

CSS Tags brings styling back to HTML. Instead of cluttering your markup with utility classes, you write clean, semantic tags, and the stylesheet makes them beautiful and responsive automatically.

## What is CSS Tags?

CSS Tags is a modern CSS framework that demonstrates cutting-edge CSS features while providing practical, production-ready components. It's both an **educational showcase** of modern CSS and a **complete design system** you can use today.

### The Core Idea

Write HTML that describes **what your content is**, not **what it looks like**:

```html
<!-- CSS Tags: Semantic, readable -->
<card>
  <card-media><img src="product.jpg" alt="Product"></card-media>
  <card-body>
    <h3>Amazing Product</h3>
    <p>Description of the product...</p>
    <button bg="var(--accent)">Buy Now</button>
  </card-body>
</card>

<!-- Traditional: Classes describe appearance -->
<div class="card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
  <img class="w-full h-48 object-cover" src="product.jpg" alt="Product">
  <div class="py-4">
    <div class="font-bold text-xl mb-2 text-gray-900">Amazing Product</div>
    <p class="text-gray-700 text-base">Description of the product...</p>
  </div>
  <div class="pt-4 pb-2">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Buy Now
    </button>
  </div>
</div>
```

The CSS Tags version is:
- **Easier to read**: No class soup
- **Easier to maintain**: Content and styling are separated
- **Easier to understand**: Tags describe content structure
- **Automatically responsive**: Adapts to container size
- **Theme-aware**: Respects light/dark mode preferences

## Key Features

### 1. Semantic HTML Tags

Use custom HTML tags like `<card>`, `<layout-grid>`, and `<badge>` that describe your content structure. Browsers render unknown tags as generic elements, and CSS targets them directly.

```html
<layout-grid min-item-size="300px">
  <card>Item 1</card>
  <card>Item 2</card>
  <card>Item 3</card>
</layout-grid>
```

### 2. Zero Configuration

Just add one `<link>` tag. No build tools, no JavaScript, no configuration files:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/doeixd/CSS-Tags@latest/index.css">
```

That's it. You're ready to build.

### 3. Modern CSS Showcase

Learn and use cutting-edge CSS features:

- **OKLCH Colors**: Perceptually uniform color space
- **Container Queries**: Components respond to their container size
- **Cascade Layers**: Organized, predictable specificity
- **:has() Selector**: Style parents based on children
- **Relative Color Syntax**: Derive colors dynamically
- **@property**: Typed CSS variables
- **@scope**: Component style isolation

### 4. Design Token System

Everything uses CSS custom properties. Change one value, update your entire theme:

```css
:root {
  --primary-h: 280;      /* Purple theme */
  --space-md: 1.25rem;   /* Larger spacing */
  --radius-md: 0.75rem;  /* Rounder corners */
}
```

### 5. Automatic Dark Mode

Respects user preferences automatically. No configuration needed:

```css
/* Handled automatically */
@media (prefers-color-scheme: dark) {
  /* Colors adapt intelligently */
}
```

### 6. Container Queries

Components adapt to their container, not the viewport. A card in a narrow sidebar looks different from one in wide content—automatically:

```html
<!-- Same markup, different layouts based on container -->
<sidebar>
  <card>Narrow layout</card>
</sidebar>

<main>
  <card>Wide layout</card>
</main>
```

### 7. Accessibility Built-In

- Auto-contrast text for readability
- Respects `prefers-reduced-motion`
- Supports `prefers-contrast: more`
- Proper focus states
- Semantic HTML structure

## What You Get

### Layout Components

Declarative layout primitives that adapt to content and container:

- `<layout-center>`: Centers content with max-width
- `<layout-grid>`: Responsive auto-fitting grid
- `<layout-stack>`: Vertical stacking with spacing
- `<layout-sidebar>`: Classic sidebar layout
- `<layout-cluster>`: Wrapping horizontal groups
- `<layout-page>`: Full page structure
- `<layout-frame>`: Aspect ratio containers
- `<layout-switcher>`: Stack-to-row switching
- `<layout-reel>`: Horizontal scrolling

[View all layouts →](/layouts/layout/)

### UI Components

Pre-built, styled components:

- `<card>`: Flexible card containers
- `<button>`: Accessible buttons
- `<alert>`: Notification banners
- `<badge>`: Status indicators
- `<modal>`: Overlay dialogs
- `<tooltip>`: Contextual help
- `<popover>`: Overlay content
- `<carousel>`: Touch-enabled carousels
- `<table>`: Responsive tables
- And more...

[View all components →](/components/card/)

### Core System

Foundational CSS layers:
- Reset: Browser normalization
- Base: Design tokens
- Engine: Color calculations
- Palette: Color scales
- Theme: Semantic colors
- Defaults: Element styles

[Learn about the core system →](/core/base/)

### Utilities

Single-purpose utility classes when you need them:
- Color utilities
- Spacing utilities
- Typography utilities
- Layout utilities

[View utilities →](/utilities/utilities/)

## How It Works

### The Foundational Pillars

CSS Tags isn't magic—it's a showcase of powerful, modern CSS features:

#### 1. Unknown HTML Tags

Browsers render unknown tags (like `<card>`) as generic elements. This is valid HTML, and we can style them with CSS.

#### 2. OKLCH Color Space

Perceptually uniform colors. A 10% lightness increase *looks* 10% lighter to your eye, regardless of color.

#### 3. Relative Color Syntax

Create color variants dynamically:

```css
button:hover {
  background: oklch(from var(--bg) calc(l - 0.1) c h);
}
```

#### 4. The :has() Selector

Style parents based on children:

```css
card:has(card-media) {
  display: flex;
}
```

#### 5. The attr() Function

Pass "props" from HTML to CSS:

```html
<layout-grid min-item-size="300px">
```

```css
layout-grid {
  grid-template-columns: repeat(auto-fit, minmax(attr(min-item-size), 1fr));
}
```

## The Color System

CSS Tags uses OKLCH (Oklab Lightness-Chroma-Hue) for sophisticated color manipulation.

### Hierarchical Token System

1. **Base Hue Tokens**: `--primary-h: 240`
2. **Systematic Scales**: 13-step lightness and chroma scales
3. **Color Palettes**: Complete palettes from hue + scales
4. **Semantic Roles**: Meaningful assignments like `--accent`, `--text-default`

### One Hue, Entire Palette

```css
/* Set one hue value */
--primary-h: 240;

/* Get entire palette automatically */
--accent: oklch(55% 0.15 240);
--accent-muted: oklch(from var(--accent) calc(l * 0.97) calc(c * 0.3) h);
--accent-subtle: oklch(from var(--accent) calc(l * 1.15) calc(c * 0.12) h);
```

### Auto-Contrast

Text colors calculate automatically for readability:

```html
<text contrast>Always readable</text>
```

[Learn more about the color system →](/guides/color-system/)

## Component Architecture

### Cascade Layers

Explicit cascade order prevents specificity conflicts:

```css
@layer reset, base, tokens, engine, palette, theme, defaults, components, utilities, layouts;
```

### Scoped Styling

Components use `@scope` to isolate styles:

```css
@scope (card) {
  card-body {
    padding: var(--space-md);
  }
}
```

### Container Queries

Components respond to their own size:

```css
@container (min-width: 400px) {
  card {
    flex-direction: row;
  }
}
```

### Attribute-Driven

Configure components via HTML attributes:

```html
<text size="lg" weight="bold" color="accent">Text</text>
<layout-grid min-item-size="300px" gap="var(--space-md)">
```

## Getting Started

Ready to try CSS Tags? It takes less than 60 seconds:

1. **Add the stylesheet** to your HTML:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/doeixd/CSS-Tags@latest/index.css">
   ```

2. **Write semantic HTML**:
   ```html
   <card>
     <card-body>
       <h1>Hello, CSS Tags!</h1>
       <p>It just works.</p>
     </card-body>
   </card>
   ```

3. **Customize (optional)**:
   ```css
   :root {
     --primary-h: 280; /* Purple theme */
   }
   ```

[Full getting started guide →](/guides/getting-started/)

## Learn More

- [Getting Started](/guides/getting-started/): Complete setup and first steps
- [Philosophy](/guides/philosophy/): Design principles and when to use CSS Tags
- [Color System](/guides/color-system/): Deep dive into OKLCH colors
- [Theming](/guides/theming/): Customization and branding
- [Components](/components/card/): All available components
- [API Reference](/reference/api/): Complete API documentation

## Browser Support

CSS Tags works in all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|:---|:---:|:---:|:---:|:---:|
| **Core Framework** | ✅ 111+ | ✅ 113+ | ✅ 16.4+ | ✅ 111+ |
| `:has()` Selector | ✅ 105+ | ✅ 121+ | ✅ 16+ | ✅ 105+ |
| Container Queries | ✅ 105+ | ✅ 110+ | ✅ 16+ | ✅ 105+ |
| OKLCH Colors | ✅ 111+ | ✅ 113+ | ✅ 15.4+ | ✅ 111+ |

Graceful degradation ensures pages work in older browsers with simplified styling.

## Next Steps

1. **Try the quick demo** on the [home page](/)
2. **Follow the [getting started guide](/guides/getting-started/)**
3. **Explore [component documentation](/components/card/)**
4. **Read the [philosophy guide](/guides/philosophy/)**
5. **Dive into [theming](/guides/theming/)**

Welcome to CSS Tags! 🎉
