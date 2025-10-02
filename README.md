# CSS Tags

**Style HTML directly with modern CSS. No classes, no frameworks—just semantic markup that looks great.**

CSS Tags brings styling back to HTML. Instead of cluttering your markup with utility classes, you write clean, semantic tags, and the stylesheet makes them beautiful and responsive automatically.

### Before: Traditional CSS Frameworks

```html
<!-- You are forced to describe the styling, not the content. -->
<div class="card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
  <img class="w-full h-48 object-cover" src="..." alt="...">
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

### After: CSS Tags

```html
<!-- You describe the content. The styling is automatic. -->
<card>
  <card-media><img src="..." alt="..."></card-media>
  <card-body>
    <h3>Amazing Product</h3>
    <p>Description of the product...</p>
    <button bg="var(--accent)">Buy Now</button>
  </card-body>
</card>
```

**The difference:** Clean, readable HTML that automatically adapts to themes, screen sizes, and user preferences, leading to a more maintainable and intuitive developer experience.

## ✨ Try It Right Now

See it for yourself in 60 seconds. Copy the code below into an `index.html` file and open it in your browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale-1.0">
  <title>CSS Tags Demo</title>
  
  <!-- 1. Add the stylesheet. That's the only setup. -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/doeixd/CSS-Tags@latest/index.css">

</head>
<body p="var(--space-lg)">

  <!-- 2. Write semantic HTML. No classes needed. -->
  <layout-center max-width="70ch">
    <card>
      <card-body>
        <h1>It Just Works.</h1>
        <p>This component is already responsive and adapts to your system's light or dark mode. No build step, no configuration needed.</p>
        <layout-cluster gap="var(--space-sm)">
          <!-- 3. Use design tokens for declarative styling. -->
          <button bg="var(--accent)">Get Started</button>
          <button>Learn More</button>
        </layout-cluster>
      </card-body>
    </card>
  </layout-center>

</body>
</html>
```

## 🏛️ The Foundational Pillars of CSS Tags

This library isn't magic—it's a showcase of powerful, modern CSS features that are now widely supported. Understanding them is key to mastering CSS Tags.

#### 1. Unknown HTML Tags (`<card>`, `<layout-grid>`)
*   **What It Is:** Any HTML tag a browser doesn't recognize (like `<card>`) is rendered as a generic `<span>`-like element. It's valid HTML.
*   **Why It Matters:** We can target these custom, semantic tags directly in CSS (`card { ... }`) to build an entire component system without needing classes like `.card`.

#### 2. The `oklch()` Color Space & Perceptual Uniformity
*   **What It Is:** A new way to define colors using Lightness, Chroma (intensity), and Hue.
*   **Why It Matters:** Unlike HSL (where 50% lightness looks different for yellow vs. blue), OKLCH is **perceptually uniform**. A 10% increase in lightness *looks* 10% lighter to the human eye, regardless of the color. This allows for mathematically precise and consistent theming.

#### 3. Relative Color Syntax
*   **What It Is:** The ability to create a new color by modifying an existing one directly in CSS.
*   **Why It Matters:** We no longer need to pre-define dozens of color variants (`--blue-500`, `--blue-600`, etc.). We can derive them on the fly, creating hover, active, and subtle states programmatically.
    ```css
    /* Make the button 10% darker on hover, whatever its original color is. */
    button:hover {
      background: oklch(from var(--bg) calc(l - 0.1) c h);
    }
    ```

#### 4. The `:has()` Selector (Parent Selector)
*   **What It Is:** The ability to style a parent element based on the children it contains.
*   **Why It Matters:** This enables powerful, automatic component variations without extra classes. A card can style itself differently just by detecting if an image is present.
    ```css
    /* If a card has <card-media>, make it a horizontal flex container. */
    card:has(card-media) {
      display: flex;
      flex-direction: row;
    }
    ```

#### 5. The `attr()` Function
*   **What It Is:** A CSS function that reads the value of an HTML attribute.
*   **Why It Matters:** This allows us to pass "props" directly from HTML to CSS, creating declarative, configurable components without a single line of JavaScript.
    ```html
    <layout-grid min-item-size="300px">...</layout-grid>
    ```
    ```css
    layout-grid {
      grid-template-columns: repeat(auto-fit, minmax(attr(min-item-size, 16rem), 1fr));
    }
    ```

## 🎯 Core Concepts

### Declarative Styling
Control appearance through HTML attributes using modern CSS `attr()` function:

```html
<!-- Size, color, and spacing controlled by attributes -->
<text size="lg" weight="bold" color="accent">Large bold text</text>

<!-- Layout adapts to container size -->
<layout-grid min-item-size="300px">
  <card>Item 1</card>
  <card>Item 2</card>
  <card>Item 3</card>
</layout-grid>
```

### Design Token System
Everything uses CSS custom properties for consistent theming:

```css
/* Change one value, update entire theme */
:root {
  --primary-h: 280; /* Purple theme */
  --space-md: 1.25rem; /* Larger spacing */
}
```

### Container Queries
Components respond to their container, not viewport:

```html
<!-- Card adapts when container is 400px+ wide -->
<card>
  <card-media>...</card-media>
  <card-body>...</card-body>
</card>
```

### Auto-Contrast
Text colors automatically adjust for readability:

```html
<!-- Text stays readable on any background -->
<text contrast>Always readable text</text>
```

## 🏗️ Architecture Overview

The framework uses a sophisticated layered architecture with CSS cascade layers for predictable, maintainable styling. Each layer has a specific purpose and builds upon the previous layers.

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

#### Example: Cascade Layers in Action
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

## 🎨 Advanced Features

### OKLCH Color System
Perceptually uniform colors that look consistent across devices:

```css
/* One hue value creates entire palette */
--primary-h: 220; /* Blue */
/* Automatically generates: --primary, --primary-muted, --primary-subtle, etc. */
```

### Relative Color Syntax
Create color variants dynamically without pre-defining them:

```css
/* Hover state: 10% darker */
button:hover {
  background: oklch(from var(--accent) calc(l - 0.1) c h);
}

/* Muted variant: reduced saturation */
.muted {
  color: oklch(from var(--text-default) l calc(c * 0.3) h);
}
```

### Automatic Dark Mode
Colors adapt automatically to user preference:

```css
@media (prefers-color-scheme: dark) {
  /* Framework handles this automatically */
}
```

### Modern CSS Showcase
Learn cutting-edge CSS features:
- CSS Layers (`@layer`) for organized cascade
- Container Queries for component-level responsive design
- CSS Anchor Positioning for tooltips and popovers
- `@property` for typed CSS variables
- `@scope` for component isolation

## 🎨 Deep Dive: OKLCH Color System

### OKLCH Color Space
The framework uses OKLCH (Oklab Lightness-Chroma-Hue) for perceptually uniform color manipulation:

- **L (Lightness)**: 0-1 value representing perceptual lightness
- **C (Chroma)**: 0+ value representing color intensity (similar to saturation)
- **H (Hue)**: 0-360 degree value representing the color

**Advantages over RGB/HSL:**
- **Perceptual Uniformity**: Equal steps correspond to equal perceived changes
- **Intuitive Control**: Separate manipulation of lightness, chroma, and hue
- **Wide Gamut**: Access to colors outside traditional sRGB space
- **Better Interpolation**: More natural color transitions

### Hierarchical Token System

#### 1. Base Hue Tokens
Foundation hues that define the color palette:
```css
--primary-h: 220;    /* Primary color hue (blue) */
--success-h: 160;    /* Success color hue (green) */
--warning-h: 35;     /* Warning color hue (amber) */
--error-h: 355;      /* Error color hue (red) */
--gray-h: 220;       /* Gray color hue (cool gray) */
```

#### 2. Systematic Scales
13-step scales for consistent perceptual progression:
```css
/* Lightness Scale (0-12, lightest to darkest) */
--scale-l-0: 0.98;   /* Nearly white */
--scale-l-6: 0.60;   /* Mid-range */
--scale-l-12: 0.10;  /* Nearly black */

/* Chroma Scale (1-9, least to most saturated) */
--scale-c-1: 0.02;   /* Very subtle */
--scale-c-7: 0.14;   /* Balanced saturation */
```

#### 3. Color Palettes
Complete 13-step palettes for each hue:
```css
--accent-palette-0: oklch(var(--scale-l-0) min(var(--scale-c-1), var(--clamp-max-c-0)) var(--primary-h));
--accent-palette-6: oklch(var(--scale-l-6) var(--scale-c-7) var(--primary-h));
--accent-palette-12: oklch(var(--scale-l-12) min(var(--scale-c-2), var(--clamp-max-c-12)) var(--primary-h));
```

#### 4. Semantic Color Roles
Meaningful color assignments for UI consistency:
```css
/* Surface Hierarchy */
--surface-muted: oklch(var(--scale-l-2) var(--scale-c-1) var(--gray-h));
--surface-default: oklch(var(--scale-l-3) var(--scale-c-2) var(--gray-h));
--surface-overt: oklch(var(--scale-l-5) var(--scale-c-3) var(--gray-h));

/* Text Hierarchy */
--text-muted: oklch(var(--scale-l-7) var(--scale-c-1) var(--gray-h));
--text-default: oklch(var(--scale-l-10) var(--scale-c-2) var(--gray-h));
--text-overt: oklch(var(--scale-l-12) var(--scale-c-3) var(--gray-h));

/* Brand Colors */
--accent: oklch(var(--scale-l-6) var(--scale-c-7) var(--primary-h));
--success: oklch(var(--scale-l-5) var(--scale-c-7) var(--success-h));
```

### Automatic Contrast Calculation
Sophisticated algorithm that calculates readable text colors dynamically:

```css
--auto-contrast-text: oklch(
  from var(--bg, var(--base))
  clamp(0.1, (var(--l-threshold, 0.65) / l - 1) * 999, 0.98)
  min(c, var(--c-threshold, 0.08))
  h
);
```

**How it works:**
1. Takes the background color as input
2. Calculates appropriate lightness for sufficient contrast
3. Constrains chroma for better readability
4. Maintains hue harmony with the background

### Color Transformations
Systematic color variants using OKLCH calculations:

```css
/* Muted variant - reduced chroma, slightly darker */
--color-to-muted: oklch(from var(--color-base) calc(l * 0.97) calc(c * 0.3) h);

/* Subtle variant - higher lightness, much lower chroma */
--color-to-subtle: oklch(from var(--color-base) calc(l * 1.15) calc(c * 0.12) h);

/* Overt variant - slightly darker, higher chroma */
--color-to-overt: oklch(from var(--color-base) calc(l * 0.85) calc(c * 1.2) h);
```

### Dark Mode Adaptation
Colors automatically adapt to `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    --base: oklch(var(--scale-l-12) var(--scale-c-1) var(--gray-h));
    --surface-default: oklch(var(--scale-l-11) var(--scale-c-2) var(--gray-h));
    --text-default: oklch(var(--scale-l-2) var(--scale-c-2) var(--gray-h));
  }
}
```

Each semantic role is individually optimized for dark mode rather than simple inversion.

### High Contrast Mode Support
Enhanced visibility for users with visual impairments:

```css
@media (prefers-contrast: more) {
  :root {
    --contrast-multiplier: 1.2;
    --text-default: oklch(calc(var(--scale-l-12) * var(--contrast-multiplier)) var(--scale-c-2) var(--gray-h));
  }
}
```

### Color Scale Usage Guidelines

**Steps 0-2**: Very light shades
- Subtle backgrounds and highlights
- Placeholder text
- Disabled states

**Steps 3-5**: Light shades
- Card backgrounds
- Subtle UI elements
- Secondary surfaces

**Steps 6-8**: Mid-range shades
- Primary UI elements
- Borders and dividers
- Interactive states

**Steps 9-11**: Dark shades
- Body text
- Secondary text
- Prominent elements

**Step 12**: Darkest shade
- Headings and emphasis
- High-contrast text
- Strong accents

## 📝 Component Deep Dive: `<text>` and `<box>`

### `<text>`: Declarative Typography Component

The `<text>` component provides powerful, attribute-driven typography control without requiring CSS classes. It integrates deeply with the design token system for consistent theming.

#### Key Features
- **Attribute-Based Styling**: Control size, weight, color, alignment via HTML attributes
- **Design Token Integration**: Maps to CSS variables from theme and token layers
- **Auto-Contrast**: `contrast` attribute calculates readable text color against any background
- **Text Truncation**: Single-line (`truncate`) and multi-line (`lines="3"`) truncation
- **Modern CSS**: Uses `attr()` function for dynamic, type-safe styling

#### Usage Examples
```html
<!-- Basic styling -->
<text size="lg" weight="bold" color="accent">Large bold accent text</text>

<!-- Auto-contrast for readability on any background -->
<text contrast>Always readable text</text>

<!-- Truncation -->
<text truncate>Single-line truncated text that will be cut off...</text>
<text lines="3">Multi-line truncated text that wraps to 3 lines maximum...</text>

<!-- Advanced styling -->
<text size="xl" weight="semibold" color="overt" align="center" leading="relaxed">
  Centered, large, semibold text with relaxed line height
</text>
```

#### Supported Attributes
- **Size**: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`
- **Weight**: `thin`, `light`, `normal`, `medium`, `semibold`, `bold`, `black`
- **Color**: `muted`, `subtle`, `default`, `overt`, `link`, `accent`, `secondary`, `success`, `warning`, `error`, `info`
- **Leading**: `none`, `tight`, `snug`, `normal`, `relaxed`, `loose`
- **Align**: `start`, `center`, `end`, `justify`
- **Transform**: `none`, `capitalize`, `uppercase`, `lowercase`
- **Style**: `normal`, `italic`
- **Wrap**: `balance`, `wrap`, `nowrap`, `pretty`

### `<box>`: Versatile Utility Container

The `<box>` component is a "Swiss Army Knife" for layouts and styling, allowing declarative control of dozens of CSS properties through HTML attributes.

#### Key Features
- **Attribute-Driven Styling**: Control display, spacing, sizing, colors via attributes
- **Logical Properties**: Uses modern CSS logical properties for spacing
- **Type-Safe Attributes**: `attr()` function with type checking and fallbacks
- **Zero-Specificity**: No class-based conflicts
- **Flexible Layout**: Supports flex, grid, and traditional layouts

#### Usage Examples
```html
<!-- Basic container -->
<box p="1rem" bg="var(--surface-subtle)" radius="0.5rem">
  Content with padding and background
</box>

<!-- Flex layout -->
<box display="flex" px="2rem" py="1rem" gap="1rem" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</box>

<!-- Spacer element -->
<box height="2rem"></box>

<!-- Card-like component -->
<box p="1.5rem" bg="white" border="1px solid var(--outline)" radius="0.75rem" max-width="300px" shadow="var(--shadow-md)">
  <h3>Card Title</h3>
  <p>Card content with shadow and border...</p>
</box>

<!-- Grid layout -->
<box display="grid" grid-template-columns="1fr 1fr" gap="1rem">
  <div>Column 1</div>
  <div>Column 2</div>
</box>
```

#### Supported Attributes
- **Display & Layout**: `display` (block, flex, grid, inline, etc.)
- **Spacing**: `p`, `px`, `py`, `m`, `mx`, `my` (padding/margin with logical properties)
- **Sizing**: `width`, `height`, `max-width`
- **Appearance**: `bg`, `color`, `border`, `radius`
- **Typography**: `align`
- **Flexbox**: `flex-direction`, `justify-content`, `align-items`, `gap`
- **Grid**: `grid-template-columns`, `grid-template-rows`, `gap`

#### Technical Implementation
The component uses the `attr()` function with type checking for safety:
```css
--padding: attr(p type(<length-percentage>), 0);
```

This provides type safety, fallbacks, and dynamic updates when attributes change. It employs logical properties (`padding-inline`, `padding-block`) for better internationalization support.

## 🚀 Quick Start Guide

Get your project running with CSS Tags in three simple steps.

### 1. Include the CSS
Add the stylesheet to the `<head>` of your HTML file.

```html
<!-- CDN (Recommended for prototyping) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/doeixd/CSS-Tags@latest/index.css">
```
*(See [Installation](#-installation) for other methods).*

### 2. Write Semantic HTML
Use the provided custom elements to structure your content logically. The styles are applied automatically.

```html
<layout-page>
  <header slot="header">...</header>
  <main slot="main">
    <layout-center max-width="65ch">
      <h1>My Awesome Article</h1>
      <p>This content is perfectly centered and readable.</p>
    </layout-center>
  </main>
</layout-page>
```

### 3. Customize Your Theme (Optional)
Create a `<style>` tag or a local CSS file to override the default design tokens. The entire design system will adapt instantly.

```css
:root {
  --primary-h: 280;      /* Changes the theme to purple */
  --font-family-sans: 'Inter', sans-serif;
  --radius-md: 0.75rem;  /* Makes corners more rounded */
  --space-md: 1.25rem;   /* Increases base spacing */
}
```

## 📚 What You Get: Component & Layout Library

CSS Tags provides a comprehensive set of pre-built, accessible, and responsive components, organized into logical categories.

### Layout Components
Declarative layout primitives that adapt to content and container size using container queries.

*   `<layout-center>`: Centers content with a max-width for optimal readability. [[docs/layouts/layout.md](docs/layouts/layout.md)]
  ```html
  <layout-center max-width="70ch">
    <p>Centered content with max width for readability.</p>
  </layout-center>
  ```

*   `<layout-grid>`: A powerful, responsive grid that automatically wraps columns based on available space. [[docs/layouts/layout.md](docs/layouts/layout.md)]
  ```html
  <layout-grid min-item-size="250px" gap="1rem">
    <card>Item 1</card>
    <card>Item 2</card>
    <card>Item 3</card>
  </layout-grid>
  ```

*   `<layout-stack>`: Stacks items vertically with consistent spacing. [[docs/layouts/layout.md](docs/layouts/layout.md)]
  ```html
  <layout-stack gap="1rem">
    <h1>Title</h1>
    <p>Description</p>
    <button>Action</button>
  </layout-stack>
  ```

*   `<layout-sidebar>`: Creates a classic sidebar layout that intelligently stacks on mobile devices. [[docs/layouts/layout.md](docs/layouts/layout.md)]
  ```html
  <layout-sidebar side-width="300px">
    <aside slot="aside">Sidebar content</aside>
    <main>Main content</main>
  </layout-sidebar>
  ```

*   `<layout-cluster>`: Groups items horizontally that wrap onto new lines, perfect for tags or buttons. [[docs/layouts/layout.md](docs/layouts/layout.md)]
  ```html
  <layout-cluster gap="0.5rem">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
  </layout-cluster>
  ```

*   `<layout-page>`: A full page structure with header, main, and footer slots. [[docs/layouts/layout.md](docs/layouts/layout.md)]
*   `<layout-frame>`: Responsive media containers with aspect ratios. [[docs/layouts/layout.md](docs/layouts/layout.md)]
*   `<layout-pad>`: Adds consistent padding. [[docs/layouts/layout.md](docs/layouts/layout.md)]
*   `<layout-switcher>`: Switches from stack to row when items fit. [[docs/layouts/layout.md](docs/layouts/layout.md)]
*   `<layout-reel>`: Horizontally scrolling container. [[docs/layouts/layout.md](docs/layouts/layout.md)]

### UI Components
Pre-built UI components with scoped styling and modern CSS features.

*   `<card>`: A flexible container with `<card-media>`, `<card-header>`, `<card-body>`, and `<card-footer>`. [[docs/components/card.md](docs/components/card.md)]
  ```html
  <card>
    <card-media><img src="image.jpg" alt="Card image"></card-media>
    <card-body>
      <h3>Card Title</h3>
      <p>Card content...</p>
      <button>Action</button>
    </card-body>
  </card>
  ```

*   `<button>`: Accessible buttons with built-in `:hover`, `:active`, and `:focus-visible` states. [[docs/components/form.md](docs/components/form.md)]
  ```html
  <button bg="var(--accent)">Primary Action</button>
  <button>Secondary Action</button>
  ```

*   `<alert>`: Semantic notification banners for `success`, `warning`, `error`, and `info`. [[docs/components/alert.md](docs/components/alert.md)]
  ```html
  <alert bg="var(--surface-success)">Success message</alert>
  <alert bg="var(--surface-warning)">Warning message</alert>
  ```

*   `<badge>`: Small status indicators and labels. [[docs/components/badge.md](docs/components/badge.md)]
  ```html
  <badge bg="var(--success)">New</badge>
  <badge bg="var(--warning)">Beta</badge>
  ```

*   `<modal>`: An overlay dialog powered by the native Popover API for robust accessibility and performance. [[docs/components/modal.md](docs/components/modal.md)]
*   `<tooltip>`: Contextual help text with CSS Anchor Positioning. [[docs/components/tooltip.md](docs/components/tooltip.md)]
*   `<popover>`: Overlay content with automatic positioning. [[docs/components/popover.md](docs/components/popover.md)]
*   `<box>`: Versatile container controlled by HTML attributes. [[docs/components/box.md](docs/components/box.md)]
*   `<chip>`: Compact elements for tags, filters, or selections. [[docs/components/chip.md](docs/components/chip.md)]
*   `<container>`: Responsive container with max-widths. [[docs/components/container.md](docs/components/container.md)]
*   `<flex>`: Flexible layout container. [[docs/components/flex.md](docs/components/flex.md)]
*   `<grid>`: CSS Grid-based layout component. [[docs/components/grid.md](docs/components/grid.md)]
*   `<img-container>`: Responsive image containers with aspect ratios. [[docs/components/img-container.md](docs/components/img-container.md)]
*   `<list>`: Styled lists with variants. [[docs/components/list.md](docs/components/list.md)]
*   `<masonry>`: Pinterest-style masonry layout. [[docs/components/masonry.md](docs/components/masonry.md)]
*   `<navigation>`: Navigation components. [[docs/components/navigation.md](docs/components/navigation.md)]
*   `<table>`: Responsive data tables with proper semantics. [[docs/components/table.md](docs/components/table.md)]
*   `<carousel>`: Touch-enabled carousel with indicators. [[docs/components/carousel.md](docs/components/carousel.md)]
*   `<view-transition>`: Smooth page transitions. [[docs/components/view-transition.md](docs/components/view-transition.md)]

### Form Components
Themed styles for form elements with accessibility and consistency.

*   `<form>`: Styled form containers. [[docs/components/form.md](docs/components/form.md)]
*   `<input>`, `<select>`, `<textarea>`: Enhanced form controls. [[docs/components/form.md](docs/components/form.md)]

### Core System
Foundational CSS layers that power the entire framework.

*   **Reset Layer**: Zero-specificity browser normalization. [[docs/core/reset.md](docs/core/reset.md)]
*   **Base Layer**: Fundamental design tokens and global variables. [[docs/core/base.md](docs/core/base.md)]
*   **Tokens Layer**: Raw design values as CSS custom properties. [[docs/core/tokens.md](docs/core/tokens.md)]
*   **Engine Layer**: Mathematical calculations and color transformations. [[docs/core/engine.md](docs/core/engine.md)]
*   **Palette Layer**: Complete color palettes with systematic scales. [[docs/core/palette.md](docs/core/palette.md)]
*   **Theme Layer**: Generative theme system creating semantic color roles. [[docs/core/theme.md](docs/core/theme.md)]
*   **Defaults Layer**: Base styling for HTML elements. [[docs/core/defaults.md](docs/core/defaults.md)]
*   **Text Layer**: Typography foundations and responsive text. [[docs/core/text.md](docs/core/text.md)]
*   **Mixins Layer**: Reusable CSS patterns and utilities. [[docs/core/mixins.md](docs/core/mixins.md)]

### Utilities
Single-purpose utility classes for rapid styling.

*   **Color Utilities**: Background, text, and border color classes. [[docs/utilities/utilities.md](docs/utilities/utilities.md)]
*   **Spacing Utilities**: Padding, margin, and gap utilities. [[docs/utilities/utilities.md](docs/utilities/utilities.md)]
*   **Typography Utilities**: Font size, weight, and alignment. [[docs/utilities/utilities.md](docs/utilities/utilities.md)]
*   **Layout Utilities**: Display, flexbox, grid, and positioning. [[docs/utilities/utilities.md](docs/utilities/utilities.md)]
*   **Responsive Utilities**: Breakpoint-specific classes. [[docs/utilities/utilities.md](docs/utilities/utilities.md)]

### Themes
Pre-built and customizable theme systems.

*   **Example Brand Theme**: Sample branded theme implementation. [[docs/themes/example-brand.md](docs/themes/example-brand.md)]
*   **Theme Packs**: Collection of ready-to-use themes. [[docs/themes/theme-packs.md](docs/themes/theme-packs.md)]

### JavaScript Enhancements
Interactive components with JavaScript enhancement.

*   **Carousel Component**: Touch/swipe navigation and auto-play. [[carousel.js.md](carousel.js.md)]
*   **Image Container**: Responsive image handling. [[img-container.js.md](img-container.js.md)]
*   **View Transitions**: Page transition management. [[view-transition.js.md](view-transition.js.md)]

## 🎨 Advanced Concepts

*   **Design Token System:** The entire system is controlled by CSS Custom Properties. Change a token once (`--primary-h`, `--space-md`), and your whole UI updates.
*   **Container Queries:** Components respond to the size of their parent container, not just the browser viewport. A card in a narrow sidebar will look different from one in a wide content area, automatically.
*   **Automatic Dark Mode:** The system automatically respects the user's `prefers-color-scheme` media query with no extra work required from you.
*   **Accessibility First:** Components are built with accessibility as a priority, including proper focus states, ARIA roles where necessary, and high-contrast text colors.

## 🔧 Installation

Choose the method that best fits your project.

### CDN (Recommended for quick prototyping)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/doeixd/CSS-Tags@latest/index.css">
```

### Download
For production use, it's best to host the file yourself.
1.  **[Download the latest `index.css` file](https://github.com/doeixd/CSS-Tags/blob/main/index.css)**.
2.  Place it in your project's CSS directory.
3.  Link to it in your HTML: `<link rel="stylesheet" href="your-css-folder/index.css">`.

### NPM (Coming Soon)
```bash
npm install css-tags
```

## 🛠️ Customization Deep Dive

Override CSS variables to create a unique design system that matches your brand.

### Brand Colors
Simply change the hue (`-h`) values. The entire color palette regenerates automatically.
```css
:root {
  --primary-h: 240;    /* Blue primary */
  --accent-h: 320;     /* Magenta accent */
  --success-h: 160;    /* Green success */
}

/* Result: Complete theme with consistent colors */
--primary: oklch(55% 0.15 240);
--accent: oklch(60% 0.18 320);
--success: oklch(58% 0.15 160);
```

### Typography
Set your brand's font family, base size, and line height.
```css
:root {
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.6;
}
```

### Spacing & Borders
Adjust the global scale for spacing, border radius, and shadows.
```css
:root {
  --space-md: 1.25rem;   /* Base spacing unit */
  --radius-md: 0.75rem;  /* Base border radius */
  --shadow-md: 0 4px 6px oklch(0% 0% 0% / 0.1);
}
```

## ⚠️ When NOT to Use CSS Tags

This approach is powerful but opinionated. It may **not** be the best fit if you:

*   **Need to support legacy browsers:** This framework relies heavily on modern CSS features not available in browsers like IE11.
*   **Require extreme bundle size optimization:** While the file is small (~50KB), utility-first frameworks like Tailwind CSS can achieve smaller final builds with their JIT compilers.
*   **Are deeply invested in a utility-first workflow:** This is a component-first, semantic-by-design alternative.
*   **Need framework-specific components:** This is a pure CSS library and does not include React/Vue components out of the box.

## 🌐 Browser Support

CSS Tags works best in the latest versions of all major browsers.

| Feature | Chrome | Firefox | Safari | Edge |
|:---|:---:|:---:|:---:|:---:|
| **Core Framework** | ✅ 111+ | ✅ 113+ | ✅ 16.4+ | ✅ 111+ |
| `:has()` Selector | ✅ 105+ | ✅ 121+ | ✅ 16+ | ✅ 105+ |
| Container Queries | ✅ 105+ | ✅ 110+ | ✅ 16+ | ✅ 105+ |
| OKLCH Colors | ✅ 111+ | ✅ 113+ | ✅ 15.4+ | ✅ 111+ |

*The framework includes graceful degradation, so pages will still be usable in older browsers, but layout and colors may be simplified.*

## 🎯 Philosophy & Core Principles

This framework is built on principles that prioritize developer experience, accessibility, and future-proofing. As a showcase of modern CSS, it demonstrates advanced techniques while remaining practical for production use:

- **Semantic Styling**: Brings styling back to HTML tags using modern CSS techniques
- **Educational Showcase**: Demonstrates cutting-edge CSS features and best practices
- **Progressive Enhancement**: Starts with a solid baseline and enhances for capable browsers
- **Cascade Layering**: Explicit cascade order prevents specificity conflicts
- **Design Token System**: Single source of truth for all design values
- **Modern Color Science**: OKLCH for perceptually uniform color manipulation
- **Accessibility First**: Built-in support for dark mode, high contrast, and reduced motion
- **Utility-First Approach**: Rapid development with composable utility classes
- **Component Autonomy**: Self-contained components using container queries

#### Example: Semantic vs Utility Approach
```html
<!-- Traditional utility classes -->
<div class="bg-white p-4 rounded shadow-md max-w-sm mx-auto">
  <h2 class="text-xl font-bold mb-2">Title</h2>
  <p class="text-gray-600">Content</p>
</div>

<!-- CSS Tags semantic approach -->
<card>
  <card-body>
    <h2>Title</h2>
    <p>Content</p>
  </card-body>
</card>
```

## 📖 Next Steps

*   **[API Reference](./API.md)** - Complete API documentation for layouts and components
*   **[Color System Guide](./docs/guides/color-system.md)** - Understanding OKLCH and theming
*   **[Component Documentation](./docs/components/)** - Individual component guides
*   **[Core System Documentation](./docs/core/)** - Base styles, tokens, and mixins
*   **[Layout Documentation](./docs/layouts/)** - Layout patterns and utilities
*   **[Utilities Guide](./docs/utilities/)** - Utility classes reference
*   **[Examples](./examples/)** - Interactive demos and real-world patterns
*   **[Theming Guide](./docs/theming.md)** - Advanced theming and customization

<br />

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.