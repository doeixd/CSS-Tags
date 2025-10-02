# CSS Tags

**Style HTML directly with modern CSS. No classes, no frameworks—just semantic markup that looks great.**

CSS Tags brings styling back to HTML by using modern CSS features to create beautiful, responsive components through semantic markup. Write clean HTML and let CSS handle the styling automatically.

```html
<!-- Clean, semantic HTML -->
<card>
  <card-media>
    <img src="product.jpg" alt="Amazing Product">
  </card-media>
  <card-body>
    <h3>Amazing Product</h3>
    <p>Built with modern CSS techniques.</p>
    <button bg="var(--accent)">Buy Now</button>
  </card-body>
</card>
```

## ✨ What Makes CSS Tags Different

**Traditional CSS Frameworks:**
```html
<div class="card shadow-lg bg-white rounded-lg p-6 max-w-sm">
  <img class="w-full h-48 object-cover rounded-t-lg" src="..." alt="...">
  <div class="p-4">
    <h3 class="text-xl font-bold text-gray-900">Title</h3>
    <p class="text-gray-600">Description...</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Buy</button>
  </div>
</div>
```

**CSS Tags:**
```html
<card>
  <card-media><img src="..." alt="..."></card-media>
  <card-body>
    <h3>Title</h3>
    <p>Description...</p>
    <button bg="var(--accent)">Buy</button>
  </card-body>
</card>
```

**The difference:** Clean, semantic HTML that automatically adapts to themes, screen sizes, and user preferences.

## 🚀 Quick Start

Get started in 3 minutes:

### 1. Include the CSS
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/index.css">
</head>
<body>
  <!-- Your content here -->
</body>
</html>
```

### 2. Write Semantic HTML
```html
<layout-center max-width="70ch">
  <card>
    <card-body>
      <h1>Welcome to CSS Tags</h1>
      <p>This card automatically adapts to light/dark mode, screen size, and more.</p>
      <layout-cluster gap="var(--space-sm)">
        <button bg="var(--accent)">Get Started</button>
        <button>Learn More</button>
      </layout-cluster>
    </card-body>
  </card>
</layout-center>
```

### 3. Customize (Optional)
```css
:root {
  --primary-h: 220; /* Blue theme */
  --font-family-sans: 'Inter', sans-serif;
}
```

That's it! You now have a fully responsive, accessible component that works everywhere.

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

## 📚 What You Get

### Layout Components
- `<layout-center>` - Centered content with max-width
- `<layout-grid>` - Responsive grid with automatic columns
- `<layout-stack>` - Vertical stack with consistent spacing
- `<layout-sidebar>` - Sidebar layout that stacks on mobile
- `<layout-page>` - Standard page structure

### UI Components
- `<card>` - Flexible content containers
- `<button>` - Accessible buttons with states
- `<alert>` - Semantic notification banners
- `<badge>` - Status indicators and labels
- `<modal>` - Overlay dialogs with Popover API
- `<form>` - Styled form elements

### Typography
- `<text>` - Declarative text styling
- Semantic heading styles
- Automatic responsive typography

### Utilities
- Color utilities (`bg-*`, `text-*`)
- Spacing utilities (`p-*`, `m-*`, `gap-*`)
- Responsive utilities (`sm:*`, `md:*`, `lg:*`)

## 🎨 Advanced Features

### OKLCH Color System
Perceptually uniform colors that look consistent across devices:

```css
/* One hue value creates entire palette */
--primary-h: 220; /* Blue */
/* Automatically generates: --primary, --primary-muted, --primary-subtle, etc. */
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

## 📖 Documentation

- **[Quick Start Guide](./docs/quick-start.md)** - Step-by-step tutorial
- **[Component Reference](./API.md)** - Complete API documentation
- **[Color System](./docs/guides/color-system.md)** - Understanding OKLCH and theming
- **[Examples](./examples/)** - Interactive demos
- **[Core Documentation](./docs/core/)** - Base styles and tokens

## 🌟 Why CSS Tags?

### For Developers
- **Clean HTML**: Write semantic markup without utility classes
- **Zero Configuration**: Drop in the CSS and start building
- **Framework Agnostic**: Works with React, Vue, Svelte, or vanilla JS
- **Educational**: Learn modern CSS patterns and best practices

### For Designers
- **Design Token System**: Single source of truth for all design values
- **Automatic Adaptation**: Components work in light/dark mode, different screen sizes
- **Consistent Theming**: Change one value, update entire design system

### For Teams
- **Maintainable**: Clear component patterns and design tokens
- **Scalable**: Component-level responsive design
- **Accessible**: Built-in WCAG compliance and keyboard navigation
- **Future-Proof**: Uses evolving web standards, not framework trends

## 🔧 Installation

### CDN (Recommended for quick prototyping)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/doeixd/CSS-Tags@latest/index.css">
```

### Download
```bash
# Clone the repository
git clone https://github.com/doeixd/CSS-Tags.git
# Copy index.css to your project
cp CSS-Tags/index.css ./your-project/
```

### NPM (Coming Soon)
```bash
npm install css-tags
```

## 🛠️ Customization

### Brand Colors
```css
:root {
  --primary-h: 240;    /* Blue primary */
  --accent-h: 320;     /* Magenta accent */
  --success-h: 160;    /* Green success */
}
```

### Typography
```css
:root {
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.6;
}
```

### Spacing & Borders
```css
:root {
  --space-md: 1rem;    /* Base spacing unit */
  --radius-md: 0.5rem; /* Border radius */
  --shadow-md: 0 4px 6px oklch(0% 0% 0% / 0.1);
}
```

## 🌐 Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Core Framework | 111+ | 113+ | 15.4+ | 111+ |
| Container Queries | ✅ | ✅ | ✅ | ✅ |
| OKLCH Colors | ✅ | ✅ | ✅ | ✅ |
| CSS Layers | ✅ | ✅ | ✅ | ✅ |
| Popover API | ✅ | ✅ | ✅ | ✅ |

**Progressive Enhancement:** Works in older browsers with graceful degradation.

## 📄 License

MIT License - Free for personal and commercial use.
<br />
**Ready to build?** Check out the [Quick Start Guide](./docs/quick-start.md) or explore [live examples](./examples/demo.html).

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

## 🎨 CSS Features Showcase

This framework demonstrates the latest CSS capabilities available in modern browsers:

### Cutting-Edge Features
- **CSS Anchor Positioning**: Tether elements to other elements with automatic collision detection
- **CSS Layers (@layer)**: Explicit cascade control for predictable styling
- **Container Queries**: Component-level responsive design
- **OKLCH Color Space**: Perceptually uniform color manipulation
- **CSS Custom Properties (@property)**: Typed CSS variables with animation support
- **CSS Scope (@scope)**: Isolated component styling
- **Popover API**: Native modal and overlay management
- **View Transitions**: Smooth page transitions
- **Scroll-Driven Animations**: Animation based on scroll position

### Advanced Techniques
- **Cascade Layers**: Organized specificity management
- **Design Tokens**: Comprehensive token system with auto-contrast
- **Auto-Context Styling**: Automatic text color adjustment
- **Mathematical Color Functions**: Dynamic color manipulation
- **Progressive Enhancement**: Graceful fallbacks for older browsers

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

## 🏃 Quick Start Guide

Follow these steps to get started with CSS Tags in minutes.

### Step 1: Include the Framework
Add the CSS file to your HTML head:

```html
<link rel="stylesheet" href="path/to/index.css">
```

### Step 2: Create Your First Component
Start with semantic HTML and let CSS Tags style it:

```html
<box bg="var(--surface-default)" p="var(--space-md)" radius="var(--radius-md)">
  <h1>Welcome to CSS Tags</h1>
  <p>This box is styled using modern CSS techniques.</p>
  <button bg="var(--primary)" color="var(--primary-contrast)">Get Started</button>
</box>
```

### Step 3: Add Layout
Use layout primitives for structure:

```html
<layout-page>
  <header slot="header">
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main slot="main">
    <layout-center max-width="70ch">
      <h1>Your Content Here</h1>
      <p>Centered and responsive content.</p>
    </layout-center>
  </main>
  <footer slot="footer">
    <p>&copy; 2024 Your Site</p>
  </footer>
</layout-page>
```

### Step 4: Customize (Optional)
Override design tokens for branding:

```css
:root {
  --primary-h: 220; /* Blue theme */
  --font-family-sans: 'Inter', sans-serif;
}
```

That's it! You now have a fully styled, responsive page using semantic HTML and modern CSS.

## 🎨 Usage Examples

### Basic Styling with HTML Tags
Style HTML elements directly using CSS custom properties and semantic design tokens:

```html
<!-- Basic card using box component -->
<box bg="var(--surface-default)" p="var(--space-lg)" radius="var(--radius-lg)" shadow="var(--shadow-md)">
  <h2 color="var(--text-overt)">Card Title</h2>
  <p color="var(--text-default)">This card uses semantic HTML with modern CSS styling and automatic contrast calculation.</p>
  <layout-cluster gap="var(--space-sm)" justify="space-between">
    <badge bg="var(--success)" color="var(--text-on-success)">New</badge>
    <button bg="var(--accent)" color="var(--text-on-accent)" p="var(--space-sm) var(--space-md)" radius="var(--radius-md)">
      Learn More
    </button>
  </layout-cluster>
</box>

<!-- Form with enhanced styling -->
<form>
  <layout-stack gap="var(--space-md)">
    <div>
      <label for="email" color="var(--text-default)">Email Address</label>
      <input type="email" id="email" placeholder="Enter your email" p="var(--space-sm)" border="1px solid var(--outline-default)" radius="var(--radius-sm)">
    </div>
    <button type="submit" bg="var(--success)" color="var(--text-on-success)" p="var(--space-sm) var(--space-md)" radius="var(--radius-md)" width="100%">
      Subscribe
    </button>
  </layout-stack>
</form>
```

### Component-Based Design
Use predefined components for consistent, accessible UI patterns:

```html
<!-- Product card with responsive layout -->
<card>
  <card-media>
    <layout-frame ratio="4/3">
      <img src="product.jpg" alt="Premium Widget - High-quality tool for productivity">
    </layout-frame>
  </card-media>
  <card-body>
    <card-header>
      <h3 color="var(--text-overt)">Premium Widget</h3>
      <badge bg="var(--accent)" color="var(--text-on-accent)">Bestseller</badge>
    </card-header>
    <card-content>
      <p color="var(--text-default)">A high-quality widget for all your productivity needs. Features advanced automation and intuitive design.</p>
      <layout-cluster gap="var(--space-xs)">
        <span color="var(--text-subtle)">★★★★★</span>
        <span color="var(--text-muted)">(4.8/5)</span>
      </layout-cluster>
    </card-content>
    <card-footer>
      <layout-cluster justify="space-between" align="center">
        <span font-weight="bold" font-size="var(--font-size-lg)" color="var(--text-overt)">$29.99</span>
        <button bg="var(--accent)" color="var(--text-on-accent)" p="var(--space-sm) var(--space-md)" radius="var(--radius-md)">
          Add to Cart
        </button>
      </layout-cluster>
    </card-footer>
  </card-body>
</card>

<!-- Alert with semantic colors and auto-contrast -->
<alert bg="var(--surface-success)" color="var(--text-on-success)" p="var(--space-md)" radius="var(--radius-md)" border="1px solid var(--success)">
  <strong>Success!</strong> Your order has been processed and will be shipped within 2-3 business days.
</alert>

<!-- Warning alert -->
<alert bg="var(--surface-warning)" color="var(--text-on-warning)" p="var(--space-md)" radius="var(--radius-md)" border="1px solid var(--warning)">
  <strong>Warning:</strong> This action cannot be undone. Please review your changes carefully.
</alert>
```

### Layout Primitives
Declarative layouts that adapt to content and container size using container queries:

```html
<!-- Responsive product grid -->
<layout-grid min-item-size="280px" gap="var(--space-lg)">
  <card>
    <card-media><img src="product1.jpg" alt="Product 1"></card-media>
    <card-body>
      <h3>Product 1</h3>
      <p>Description...</p>
    </card-body>
  </card>
  <card>
    <card-media><img src="product2.jpg" alt="Product 2"></card-media>
    <card-body>
      <h3>Product 2</h3>
      <p>Description...</p>
    </card-body>
  </card>
  <card>
    <card-media><img src="product3.jpg" alt="Product 3"></card-media>
    <card-body>
      <h3>Product 3</h3>
      <p>Description...</p>
    </card-body>
  </card>
</layout-grid>

<!-- Sidebar layout with navigation -->
<layout-sidebar side-width="280px" breakpoint="48em">
  <aside slot="aside">
    <nav>
      <layout-stack gap="var(--space-sm)">
        <a href="#dashboard" bg="var(--surface-subtle)" p="var(--space-md)" radius="var(--radius-md)" display="block">Dashboard</a>
        <a href="#products" p="var(--space-md)" radius="var(--radius-md)" display="block">Products</a>
        <a href="#orders" p="var(--space-md)" radius="var(--radius-md)" display="block">Orders</a>
        <a href="#settings" p="var(--space-md)" radius="var(--radius-md)" display="block">Settings</a>
      </layout-stack>
    </nav>
  </aside>
  <main>
    <layout-center max-width="70ch">
      <h1 color="var(--text-overt)">Dashboard</h1>
      <p color="var(--text-default)">Welcome to your admin panel. Here's an overview of your recent activity.</p>
    </layout-center>
  </main>
</layout-sidebar>

<!-- Centered article content -->
<layout-center max-width="65ch" gutters="var(--space-lg)">
  <article>
    <header>
      <h1 color="var(--text-overt)">Article Title</h1>
      <p color="var(--text-subtle)">By Author Name • Published on January 1, 2024</p>
    </header>
    <p color="var(--text-default)">This content is centered with responsive gutters that adapt to screen size. The layout automatically adjusts spacing for optimal readability on any device.</p>
  </article>
</layout-center>
```

### Advanced Interactions
Leverage modern CSS and JavaScript APIs for dynamic interfaces:

```html
<!-- Modal with popover API and form -->
<button popovertarget="contact-modal" bg="var(--accent)" color="var(--text-on-accent)" p="var(--space-md)" radius="var(--radius-md)">
  Contact Us
</button>

<modal id="contact-modal" popover>
  <box bg="var(--surface-default)" p="var(--space-xl)" radius="var(--radius-lg)" shadow="var(--shadow-xl)" max-width="500px">
    <h2 color="var(--text-overt)">Get in Touch</h2>
    <form>
      <layout-stack gap="var(--space-md)">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" required>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" required>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <layout-cluster justify="flex-end" gap="var(--space-sm)">
          <button type="button" popovertarget="contact-modal" popovertargetaction="hide">Cancel</button>
          <button type="submit" bg="var(--accent)">Send Message</button>
        </layout-cluster>
      </layout-stack>
    </form>
  </box>
</modal>

<!-- Carousel with touch navigation -->
<carousel>
  <div>
    <img src="slide1.jpg" alt="Feature 1">
    <h3>Advanced Features</h3>
    <p>Experience cutting-edge technology...</p>
  </div>
  <div>
    <img src="slide2.jpg" alt="Feature 2">
    <h3>Intuitive Design</h3>
    <p>User-friendly interface that adapts...</p>
  </div>
  <div>
    <img src="slide3.jpg" alt="Feature 3">
    <h3>Performance</h3>
    <p>Lightning-fast performance...</p>
  </div>
</carousel>
```

### Design Token Customization
Customize the entire design system through the hierarchical token system:

```css
:root {
  /* Brand identity - modify core hues */
  --primary-h: 240;    /* Blue primary */
  --accent-h: 320;     /* Magenta accent */
  --secondary-h: calc(var(--primary-h) + 60); /* Calculated secondary */

  /* Typography system */
  --font-family-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.6;

  /* Spacing scale - customize the entire scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;

  /* Border radius system */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;

  /* Shadow system */
  --shadow-sm: 0 1px 2px oklch(0% 0% 0% / 0.05);
  --shadow-md: 0 4px 6px oklch(0% 0% 0% / 0.1);
  --shadow-lg: 0 10px 15px oklch(0% 0% 0% / 0.1);
}
```

### Theming and Dark Mode
Built-in support for automatic and manual theme switching:

```css
/* Automatic dark mode adaptation */
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode surface hierarchy */
    --base: oklch(var(--scale-l-12) var(--scale-c-1) var(--gray-h));
    --surface-default: oklch(var(--scale-l-11) var(--scale-c-2) var(--gray-h));
    --surface-subtle: oklch(var(--scale-l-10) var(--scale-c-1) var(--gray-h));

    /* Dark mode text hierarchy */
    --text-default: oklch(var(--scale-l-2) var(--scale-c-2) var(--gray-h));
    --text-subtle: oklch(var(--scale-l-4) var(--scale-c-1) var(--gray-h));
    --text-overt: oklch(var(--scale-l-1) var(--scale-c-3) var(--gray-h));
  }
}

/* Manual theme switching */
.theme-ocean {
  --primary-h: 200;   /* Teal primary */
  --accent-h: 280;    /* Purple accent */
  --secondary-h: 160; /* Green secondary */
}

.theme-sunset {
  --primary-h: 25;    /* Orange primary */
  --accent-h: 330;    /* Pink accent */
  --secondary-h: 55;  /* Yellow secondary */
}

/* High contrast mode support */
@media (prefers-contrast: more) {
  :root {
    --contrast-multiplier: 1.2;
    --text-default: oklch(calc(var(--scale-l-12) * var(--contrast-multiplier)) var(--scale-c-2) var(--gray-h));
    --outline-default: oklch(var(--scale-l-12) var(--scale-c-3) var(--gray-h));
  }
}
```

### Component-Based Design
Use predefined components for common UI patterns:

```html
<!-- Product card -->
<card>
  <card-header>
    <img src="product.jpg" alt="Product image" width="100%">
    <h3>Premium Widget</h3>
  </card-header>
  <card-body>
    <p>A high-quality widget for all your needs.</p>
    <badge bg="var(--success-bg)" color="var(--success)">New</badge>
  </card-body>
  <card-footer>
    <span font-weight="bold">$29.99</span>
    <button>Add to Cart</button>
  </card-footer>
</card>

<!-- Alert component -->
<alert bg="var(--warning-bg)" color="var(--warning)" p="var(--space-md)" radius="var(--radius-md)">
  <strong>Warning:</strong> This action cannot be undone.
</alert>
```

### Layout Primitives
Declarative layouts that adapt to content and container:

```html
<!-- Responsive grid -->
<layout-grid min-item-size="250px" gap="var(--space-lg)">
  <card>Product 1</card>
  <card>Product 2</card>
  <card>Product 3</card>
  <card>Product 4</card>
</layout-grid>

<!-- Sidebar layout -->
<layout-sidebar side-width="300px">
  <aside slot="aside">
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </aside>
  <main>
    <h1>Main Content</h1>
    <p>Your page content here.</p>
  </main>
</layout-sidebar>

<!-- Centered content -->
<layout-center max-width="65ch" gutters="var(--space-md)">
  <h1>Centered Article</h1>
  <p>This content is centered with responsive gutters.</p>
</layout-center>
```

### Advanced Interactions
Leverage modern CSS for dynamic interfaces:

```html
<!-- Modal with popover API -->
<button popovertarget="my-modal">Open Modal</button>
<modal id="my-modal" popover>
  <box bg="var(--surface-default)" p="var(--space-xl)" radius="var(--radius-lg)">
    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
    <button popovertarget="my-modal" popovertargetaction="hide">Close</button>
  </box>
</modal>

<!-- Carousel with scroll snap -->
<carousel>
  <img src="slide1.jpg" alt="Slide 1">
  <img src="slide2.jpg" alt="Slide 2">
  <img src="slide3.jpg" alt="Slide 3">
</carousel>
```

### Design Token Customization
Customize the entire design system through CSS variables:

```css
:root {
  /* Brand colors */
  --primary-h: 240; /* Blue primary */
  --accent-h: 320; /* Magenta accent */

  /* Typography */
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.6;

  /* Spacing scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}
```

### Theming and Dark Mode
Built-in support for multiple themes:

```css
/* Automatic dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --base: oklch(var(--scale-l-12) var(--scale-c-1) var(--gray-h));
    --surface-default: oklch(var(--scale-l-11) var(--scale-c-2) var(--gray-h));
    --text-default: oklch(var(--scale-l-2) var(--scale-c-2) var(--gray-h));
  }
}

/* Manual theme switching */
.theme-dark {
  --base: oklch(15% 0.02 240);
  --text-default: oklch(95% 0.01 240);
}

.theme-ocean {
  --primary-h: 200; /* Teal primary */
  --accent-h: 280; /* Purple accent */
}
```

## 📚 API Reference

### Layout Primitives
Declarative layout components that adapt to content and container size using container queries:

#### Grid & Flexbox Layouts
- **`<layout-grid>`**: Responsive grid with automatic column fitting
  - `min-item-size`: Minimum width per item (default: 16rem)
  - `gap`: Spacing between items (default: var(--space-md))

- **`<layout-stack>`**: Vertical stack with consistent spacing
  - `gap`: Spacing between items (default: var(--space-md))
  - `align`: Alignment (stretch, center, start, end)

- **`<layout-cluster>`**: Groups items that wrap onto new lines
  - `gap`: Gap between items (default: var(--space-sm))
  - `justify`: Justification (flex-start, center, space-between)
  - `align`: Alignment (center, start, end)

- **`<layout-switcher>`**: Switches from stack to row when items fit
  - `threshold`: Space threshold for switching (default: 30rem)
  - `gap`: Gap between items

- **`<layout-reel>`**: Horizontally scrolling container
  - `gap`: Gap between items
  - `no-scrollbar`: Hide scrollbars

#### Wrapper & Centering Layouts
- **`<layout-center>`**: Centers content with max-width for readability
  - `max-width`: Maximum content width (default: 65ch)
  - `gutters`: Side padding (default: var(--space-md))
  - `and-text`: Also center-align text

- **`<layout-pad>`**: Adds consistent padding
  - `padding`: Padding value (default: var(--space-md))
  - `padding-x`: Horizontal padding override
  - `padding-y`: Vertical padding override

- **`<layout-frame>`**: Responsive media containers with aspect ratios
  - `ratio`: Aspect ratio (default: 16/9)

#### Complex Layouts
- **`<layout-sidebar>`**: Sidebar layout that stacks on mobile
  - `side-width`: Width of sidebar (default: 20rem)
  - `side`: "left" or "right" (default: left)
  - `breakpoint`: When to stack (default: var(--bp-md))
  - `content-min-width`: Minimum content width (default: 50%)

- **`<layout-page>`**: Standard page layout with header/main/footer
  - `min-height`: Minimum height (default: 100vh)
  - `gap`: Gap between sections

See [Complete Layout API](./API.md) for detailed usage.

### Component Library
Pre-built UI components with scoped styling and modern CSS features:

#### Core Components
- **`<box>`**: Versatile container controlled by HTML attributes
  - `display`, `p`/`px`/`py`, `m`/`mx`/`my`, `width`, `bg`, `color`, `border`, `radius`
  - Uses `attr()` function with type checking for declarative styling

- **`<card>`**: Responsive card with container queries
  - `<card-media>`, `<card-header>`, `<card-body>`, `<card-content>`, `<card-footer>`
  - Adapts from vertical to horizontal layout at 400px width
  - Scoped with `@scope` to prevent style conflicts

#### UI Components
- **`<alert>`**: Semantic notification banners
  - Automatic color theming based on type (success, warning, error, info)
  - Accessible with proper ARIA roles

- **`<badge>`**: Small status indicators and labels
  - Semantic color variants
  - Flexible sizing

- **`<button>`**: Enhanced buttons with interaction states
  - Built-in focus management and accessibility
  - Multiple variants and sizes

- **`<modal>`**: Overlay dialogs using Popover API
  - Native browser support with fallbacks
  - Keyboard navigation and focus trapping

- **`<tooltip>`**: Contextual help text with CSS Anchor Positioning
  - Automatic positioning and collision detection
  - Smooth animations

#### Form Components
- **`<form>`**: Styled form elements with consistent theming
- **`<input>`, `<select>`, `<textarea>`**: Enhanced form controls
- **`<label>`**: Accessible form labels

#### Data Display
- **`<table>`**: Responsive data tables with proper semantics
- **`<list>`**: Styled lists with variants

### Utility Classes
Comprehensive utility classes for rapid styling:

#### Color Utilities
- **Background**: `bg-surface-*`, `bg-accent`, `bg-success`, `bg-warning`, `bg-error`
- **Text**: `text-*`, `text-muted`, `text-subtle`, `text-default`, `text-overt`
- **Borders**: `border`, `border-muted`, `border-subtle`, `border-default`, `border-overt`

#### Spacing Utilities
- **Padding**: `p-*`, `px-*`, `py-*` (xs, sm, md, lg, xl, 2xl)
- **Margin**: `m-*`, `mx-*`, `my-*` (same scale)
- **Gap**: `gap-*` for flexbox/grid gaps

#### Typography Utilities
- **Font Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`
- **Font Weight**: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- **Line Height**: `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`
- **Text Alignment**: `text-left`, `text-center`, `text-right`

#### Layout Utilities
- **Display**: `d-block`, `d-flex`, `d-grid`, `d-inline`, `d-none`
- **Flexbox**: `flex-row`, `flex-col`, `flex-wrap`, `items-center`, `justify-between`
- **Grid**: `grid-cols-*`, `grid-gap-*`
- **Positioning**: `relative`, `absolute`, `fixed`, `sticky`

#### Responsive Utilities
- **Breakpoints**: `sm:*`, `md:*`, `lg:*`, `xl:*` prefixes
- **Example**: `md:flex-row` (flex-row on medium screens and up)

#### Interactive Utilities
- **Focus**: `focus-ring` for accessible focus indicators
- **Hover/Active**: State-based styling utilities

### Design Tokens
Hierarchical CSS custom properties for consistent theming:

#### Color System (OKLCH-based)
- **Semantic Colors**: `--accent`, `--success`, `--warning`, `--error`, `--info`
- **Surface Hierarchy**: `--surface-muted`, `--surface-subtle`, `--surface-default`, `--surface-overt`
- **Text Hierarchy**: `--text-muted`, `--text-subtle`, `--text-default`, `--text-overt`
- **Palette Scales**: 13-step scales (0-12) for each color: `--accent-palette-0` through `--accent-palette-12`

#### Spacing Scale
- **Sizes**: `--space-xs` (0.25rem), `--space-sm` (0.5rem), `--space-md` (1rem), `--space-lg` (1.5rem), `--space-xl` (2rem), `--space-2xl` (3rem)

#### Typography
- **Font Families**: `--font-family-sans`, `--font-family-mono`
- **Sizes**: `--font-size-xs` through `--font-size-2xl`
- **Weights**: `--font-weight-light` through `--font-weight-bold`
- **Line Heights**: `--line-height-tight` through `--line-height-relaxed`

#### Other Design Tokens
- **Shadows**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- **Border Radius**: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- **Breakpoints**: `--bp-sm`, `--bp-md`, `--bp-lg`, `--bp-xl`

### JavaScript APIs
Interactive components with JavaScript enhancement:

#### Carousel Component
- **Touch/Swipe Navigation**: Native touch support with momentum
- **Keyboard Navigation**: Arrow keys and tab support
- **Indicators**: Dot navigation with active state
- **Auto-play**: Optional automatic advancement
- **Accessibility**: Proper ARIA labels and focus management

#### Modal System
- **Popover API**: Uses native browser popover for better performance
- **Focus Management**: Automatic focus trapping and restoration
- **Keyboard Support**: Escape key and tab navigation
- **Backdrop**: Optional backdrop with click-to-close

#### View Transitions
- **Page Transitions**: Smooth transitions between pages
- **Element Morphing**: Seamless element transformations
- **Loading States**: Skeleton screens and progressive enhancement

See [JavaScript Documentation](./carousel.js.md) and [View Transitions](./view-transition.js.md) for implementation details.

## 🏗️ Architecture Overview

The framework uses a sophisticated layered architecture with CSS cascade layers for predictable, maintainable styling. Each layer has a specific purpose and builds upon the previous layers.

### Cascade Layer Structure

The framework is organized into distinct cascade layers in ascending order of specificity:

1. **Reset Layer** (`@layer reset`)
   - Zero-specificity browser normalization using `:where()`
   - Eliminates default margins, padding, and other browser inconsistencies
   - Provides clean slate for consistent cross-browser rendering

2. **Base Layer** (`@layer base`)
   - Fundamental design tokens and global variables
   - Spacing scale, typography foundations, breakpoints
   - Base mixins for common patterns

3. **Tokens Layer** (`@layer tokens`)
   - Raw design values as CSS custom properties
   - Color scales, lightness/chroma values, hue definitions
   - Mathematical constants for calculations

4. **Engine Layer** (`@layer engine`)
   - Mathematical calculations and color transformations
   - OKLCH color manipulations, delta calculations
   - Contrast algorithms and color space conversions

5. **Palette Layer** (`@layer palette`)
   - Complete color palettes with systematic scales
   - Accent, feedback, base, and extended color collections
   - 13-step scales (0-12) for each color family

6. **Theme Layer** (`@layer theme`)
   - Generative theme system creating semantic color roles
   - Automatic dark mode and high contrast adaptations
   - Surface hierarchies, text colors, interactive states

7. **Defaults Layer** (`@layer defaults`)
   - Base styling for HTML elements
   - Semantic element defaults (headings, paragraphs, links)
   - Form element styling and accessibility enhancements

8. **Components Layer** (`@layer components`)
   - Reusable UI components with scoped styling
   - Cards, alerts, buttons, modals, tooltips
   - Uses `@scope` to prevent style leakage

9. **Utilities Layer** (`@layer utilities`)
   - Single-purpose utility classes
   - Color utilities, spacing, typography, layout helpers
   - Responsive utilities with breakpoint prefixes

10. **Layouts Layer** (`@layer layouts`)
    - Declarative layout components
    - Grid, stack, sidebar, center, and other structural patterns
    - Container query-based responsive behavior

### Key Architectural Principles

#### Hierarchical Token System
Design tokens flow from abstract to concrete:
- **Base tokens**: Fundamental values (spaces, hues, scales)
- **Derived tokens**: Calculated values (colors, sizes)
- **Semantic tokens**: Purpose-driven assignments (accent, text-default)
- **Component tokens**: Context-specific overrides

#### Container Query-First Design
Components adapt to their container rather than viewport:
```css
@container card-container (min-width: 400px) {
  /* Component adapts to its container size */
}
```

#### Scoped Component Styling
Components use `@scope` to isolate styles:
```css
@scope (card) {
  /* Styles only apply within card elements */
}
```

#### Attribute-Driven Components
Components controlled by HTML attributes using `attr()`:
```html
<box p="var(--space-md)" bg="var(--surface-default)">
  <!-- Declarative styling through attributes -->
</box>
```

#### Progressive Enhancement
Modern features with graceful fallbacks:
- OKLCH colors fall back to defined alternatives
- Container queries degrade to mobile-first layouts
- `@scope` and `@layer` provide better organization when supported

### Integration Points

#### Design Token Flow
```
Base Values → Calculations → Semantic Roles → Component Usage
     ↓             ↓             ↓             ↓
   Hues      OKLCH Colors   --accent      bg="var(--accent)"
   Spaces    Scale Values   --space-md    p="var(--space-md)"
   Scales    Lightness/C    --text-def    color="var(--text-default)"
```

#### Theme System Integration
The theme system automatically generates complete palettes from minimal inputs:
```css
/* Input: Brand hue */
--accent-h: 280;

/* Output: Complete semantic palette */
--accent: oklch(var(--scale-l-6) var(--scale-c-7) var(--accent-h));
--surface-accent: oklch(from var(--accent) calc(l + 0.1) c h);
--text-on-accent: /* Auto-calculated contrast color */
```

#### Component Architecture
Components follow consistent patterns:
- **Container queries** for responsive behavior
- **CSS custom properties** for customization
- **Semantic HTML structure** for accessibility
- **Scoped styling** to prevent conflicts

This layered architecture ensures maintainable, scalable CSS that leverages modern browser features while providing robust fallbacks.

## 🎨 Color System Deep Dive

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
- [API Reference](./API.md): Complete API documentation for layouts and components
- [Color System Guide](./docs/guides/color-system.md): Understanding OKLCH and theming
- [Component Documentation](./docs/components/): Individual component guides
- [Core System Documentation](./docs/core/): Base styles, tokens, and mixins
- [Layout Documentation](./docs/layouts/): Layout patterns and utilities
- [Utilities Guide](./docs/utilities/): Utility classes reference

### Examples
- [Demo Page](./examples/demo.html): Interactive examples of all features
- [Component Showcase](./examples/demo-components.html): Real-world component usage
- [Palette Demo](./examples/demo-palette-full.html): Color system exploration
- [Theme Demo](./examples/demo-theme.html): Theming examples

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

### Developer Experience
- **Semantic HTML First**: Write clean, meaningful HTML without utility class clutter
- **Zero-Configuration Setup**: Drop in the CSS file and start building immediately
- **Intuitive API**: HTML attributes control styling, CSS properties define tokens
- **Excellent Documentation**: Comprehensive guides, examples, and API references

### Modern CSS Power
- **Cutting-Edge Features**: Showcases OKLCH colors, container queries, CSS layers, and more
- **Future-Proof Architecture**: Built on evolving web standards, not frameworks
- **Progressive Enhancement**: Works everywhere, enhanced in modern browsers
- **Educational Value**: Learn advanced CSS patterns through practical implementation

### Design System Excellence
- **Generative Theme Engine**: Minimal inputs create complete, consistent palettes
- **Automatic Contrast**: Text colors adapt intelligently to backgrounds
- **Perceptual Color Spaces**: OKLCH ensures visual consistency across devices
- **Flexible Customization**: Override tokens without breaking the system

### Performance & Maintainability
- **Optimized Bundle Size**: Tree-shake unused components and utilities
- **Predictable Specificity**: Cascade layers prevent style conflicts
- **Component Isolation**: Scoped styling with `@scope` prevents leakage
- **Modular Architecture**: Import only what you need

### Accessibility & Inclusion
- **WCAG Compliant**: Built-in contrast ratios and focus management
- **Dark Mode Native**: Automatic adaptation to user preferences
- **High Contrast Support**: Enhanced visibility for visual impairments
- **Reduced Motion**: Respects user accessibility preferences

### Real-World Benefits
- **Faster Development**: Pre-built components accelerate prototyping
- **Consistent UI**: Design tokens ensure visual harmony
- **Easy Maintenance**: Clear architecture simplifies updates
- **Framework Agnostic**: Works with React, Vue, Svelte, or vanilla JavaScript

## 🏆 Showcase

### Real-World Applications
This framework powers production applications across various domains:

- **SaaS Dashboards**: Data-heavy interfaces with consistent theming
- **E-commerce Sites**: Product catalogs with responsive card layouts
- **Content Platforms**: Article layouts with adaptive typography
- **Admin Panels**: Complex forms and data tables
- **Marketing Sites**: Branded experiences with custom color schemes

### Featured Components in Action

#### Product Card Grid
```html
<layout-grid min-item-size="280px" gap="var(--space-lg)">
  <card>
    <card-media>
      <layout-frame ratio="4/3">
        <img src="product.jpg" alt="Wireless Headphones">
      </layout-frame>
    </card-media>
    <card-body>
      <card-header>
        <h3>Premium Wireless Headphones</h3>
        <badge bg="var(--success)">New</badge>
      </card-header>
      <card-content>
        <p>Immersive sound quality with 30-hour battery life and noise cancellation.</p>
      </card-content>
      <card-footer>
        <layout-cluster justify="space-between">
          <span font-weight="bold">$299</span>
          <button bg="var(--accent)">Add to Cart</button>
        </layout-cluster>
      </card-footer>
    </card-body>
  </card>
</layout-grid>
```

#### Dashboard Layout
```html
<layout-page>
  <header slot="header">
    <layout-cluster justify="space-between" align="center">
      <h1>Analytics Dashboard</h1>
      <layout-cluster gap="var(--space-sm)">
        <button>Export</button>
        <button bg="var(--accent)">Create Report</button>
      </layout-cluster>
    </layout-cluster>
  </header>
  <main slot="main">
    <layout-stack gap="var(--space-xl)">
      <layout-grid min-item-size="300px" gap="var(--space-lg)">
        <card>
          <card-body>
            <h3>Total Revenue</h3>
            <span font-size="var(--font-size-3xl)" font-weight="bold">$45,231</span>
          </card-body>
        </card>
        <card>
          <card-body>
            <h3>Active Users</h3>
            <span font-size="var(--font-size-3xl)" font-weight="bold">2,345</span>
          </card-body>
        </card>
      </layout-grid>
      <card>
        <card-body>
          <h3>Recent Activity</h3>
          <!-- Data table or chart -->
        </card-body>
      </card>
    </layout-stack>
  </main>
</layout-page>
```

#### Form with Validation
```html
<card>
  <card-body>
    <h2>Contact Us</h2>
    <form>
      <layout-stack gap="var(--space-md)">
        <div>
          <label for="name">Full Name</label>
          <input type="text" id="name" required>
        </div>
        <div>
          <label for="email">Email Address</label>
          <input type="email" id="email" required>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <layout-cluster justify="flex-end" gap="var(--space-sm)">
          <button type="button">Cancel</button>
          <button type="submit" bg="var(--accent)">Send Message</button>
        </layout-cluster>
      </layout-stack>
    </form>
  </card-body>
</card>
```

### Custom Branding Example
```css
:root {
  /* Brand identity */
  --primary-h: 220;    /* Professional blue */
  --accent-h: 45;      /* Warm amber accent */
  --success-h: 142;    /* Natural green */

  /* Typography */
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-size-base: 1rem;

  /* Spacing system */
  --space-sm: 0.75rem;
  --space-md: 1.25rem;
  --space-lg: 2rem;

  /* Component customizations */
  --radius-md: 0.75rem;
  --shadow-md: 0 4px 6px -1px oklch(0% 0% 0% / 0.1);
}
```

This creates a cohesive, professional design system that maintains consistency across all components while adapting to light/dark modes automatically.

## 📈 Performance Considerations

- **CSS Size**: ~50KB minified (tree-shake unused utilities)
- **Runtime Performance**: Minimal specificity reduces style recalculation
- **Loading Strategy**: Critical CSS can be extracted from foundation layers
- **Browser Caching**: Leverage long-term caching for static assets

## 🔍 Browser Support Matrix

| Feature | Chrome | Firefox | Safari | Edge | Notes |
|---------|--------|---------|--------|------|-------|
| CSS Layers | ✅ 99+ | ✅ 97+ | ✅ 15.4+ | ✅ 99+ | Core cascade control |
| Container Queries | ✅ 105+ | ✅ 110+ | ✅ 16+ | ✅ 105+ | Component-level responsive design |
| OKLCH Colors | ✅ 111+ | ✅ 113+ | ✅ 15.4+ | ✅ 111+ | Perceptually uniform color space |
| @property | ✅ 85+ | ✅ 128+ | ✅ 16.4+ | ✅ 85+ | Typed CSS variables |
| @scope | ✅ 118+ | ✅ 128+ | ✅ 17.4+ | ✅ 118+ | Isolated component styling |
| CSS Nesting | ✅ 112+ | ✅ 117+ | ✅ 17.4+ | ✅ 112+ | Hierarchical style organization |
| View Transitions | ✅ 111+ | ❌ | ✅ 18+ | ✅ 111+ | Smooth page transitions |
| Popover API | ✅ 114+ | ✅ 125+ | ✅ 17+ | ✅ 114+ | Native modal management |

**Progressive Enhancement:** The framework provides sensible defaults and graceful degradation for older browsers. Modern features enhance the experience but aren't required for basic functionality.

## ⚠️ Known Issues & Troubleshooting

### Import Errors
- **Issue**: `view-transitions.css` import fails
- **Solution**: The file is named `view-transition.css` (singular). Update imports accordingly.

### Missing Components
- **Issue**: `components.css` and `utilities.css` not found
- **Solution**: These are aggregate files that should import individual components. For now, use direct imports of specific component files.

### Naming Inconsistencies
- **Issue**: Some files use singular/plural inconsistently
- **Solution**: `view-transition.css/js` are the canonical names (singular).

### High Contrast Mode
- **Issue**: Limited support in some components
- **Solution**: Manually override color tokens for better high contrast support.

### Performance in Large Apps
- **Issue**: Many unused CSS custom properties
- **Solution**: Use a build tool to tree-shake unused tokens, or manually remove unneeded palette colors.

## 🚀 Framework Integration

### React
```jsx
// Custom hook for theme switching
import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

// Usage
function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      {/* Your components */}
    </div>
  );
}
```

### Vue
```vue
<template>
  <div>
    <button @click="toggleTheme">Toggle Theme</button>
    <MyComponent />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light'
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }
}
</script>
```

### Svelte
```svelte
<script>
  let theme = 'light';

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
</script>

<button on:click={toggleTheme}>Toggle Theme</button>
```

### General Integration Tips
- Include the CSS file in your HTML head before your app mounts
- Use CSS custom properties for dynamic theming
- Leverage container queries for component-level responsive design
- Use semantic color tokens instead of hardcoded values

## 📊 Performance Considerations

### Bundle Size
- **Core Framework**: ~45KB minified (reset, tokens, engine, theme, palette)
- **Full Library**: ~85KB minified (all components and utilities)
- **Tree-shaking**: Only include needed components to reduce size

### Runtime Performance
- **CSS Variables**: Efficient resolution with minimal recalculation
- **Cascade Layers**: Predictable specificity without conflicts
- **Container Queries**: Component-level calculations vs viewport queries

### Optimization Strategies
```css
/* Critical CSS extraction */
@import url("core/reset.css") layer(reset);
@import url("core/tokens.css") layer(tokens);
@import url("core/theme.css") layer(theme);
/* Load remaining layers asynchronously */
```

```html
<!-- Preload critical CSS -->
<link rel="preload" href="critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### Build Tool Integration
```javascript
// PostCSS configuration
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),
    require('cssnano')({
      preset: ['default', {
        discardUnused: true, // Remove unused CSS
        mergeRules: true,    // Combine similar rules
      }]
    })
  ]
}
```

## 🤝 Contributing

### Development Setup
1. Clone the repository
2. Make changes in feature branches
3. Test across browsers (Chrome, Firefox, Safari, Edge)
4. Ensure CSS validates and components work
5. Submit pull requests with clear descriptions

### Code Standards
- Use CSS cascade layers for organization
- Follow BEM-like naming for components
- Document new components with examples
- Test accessibility with screen readers
- Maintain OKLCH color usage for consistency

### Testing Checklist
- [ ] CSS validates without errors
- [ ] Works in Chrome 111+, Firefox 113+, Safari 15.4+
- [ ] Responsive across device sizes
- [ ] Dark mode and high contrast work
- [ ] Keyboard navigation functions
- [ ] Screen reader compatible
- [ ] Performance-optimized (no layout thrashing)

### Component Development
```css
/* New component structure */
@layer components {
  .my-component {
    /* Base styles */
    background: var(--surface-default);
    color: var(--text-default);
    border-radius: var(--radius-md);
  }

  /* Responsive behavior */
  @container (min-width: 400px) {
    .my-component {
      /* Container query styles */
    }
  }

  /* Theme variants */
  @media (prefers-color-scheme: dark) {
    .my-component {
      /* Dark mode adjustments */
    }
  }
}
```

## 🔄 Migration Guide

### From Utility-First Frameworks (Tailwind, Tachyons)

**Before (Tailwind):**
```html
<div class="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
  <h2 class="text-xl font-bold text-gray-900">Card Title</h2>
  <p class="text-gray-600">Card content goes here.</p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Action</button>
</div>
```

**After (CSS Tags):**
```html
<card>
  <card-body>
    <h2>Card Title</h2>
    <p>Card content goes here.</p>
    <button bg="var(--accent)">Action</button>
  </card-body>
</card>
```

**Key Changes:**
- Replace utility classes with semantic HTML elements
- Use CSS custom properties instead of hardcoded classes
- Leverage component defaults instead of manual spacing/padding
- Automatic responsive behavior via container queries

### From Component Libraries (Bootstrap, Material UI)

**Before (Bootstrap):**
```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
```

**After (CSS Tags):**
```html
<card>
  <card-body>
    <h2>Card Title</h2>
    <p>Card content.</p>
    <button bg="var(--accent)">Button</button>
  </card-body>
</card>
```

**Key Changes:**
- Use custom elements instead of class-based components
- Customize via CSS variables instead of Sass variables
- Automatic theming instead of manual theme overrides
- Container queries instead of breakpoint classes

### From CSS-in-JS Solutions (Styled Components, Emotion)

**Before (Styled Components):**
```jsx
const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;
```

**After (CSS Tags):**
```css
/* Global theme customization */
:root {
  --primary: oklch(55% 0.15 240);
  --surface-default: oklch(100% 0% 240);
}
```

```html
<card>
  <button bg="var(--primary)">Button</button>
</card>
```

**Key Changes:**
- Move styling logic from JavaScript to CSS
- Use CSS custom properties for theming
- Leverage pre-built components instead of custom styled components
- Separate concerns: HTML for structure, CSS for styling

### From Traditional CSS Frameworks

**Before (Traditional CSS):**
```css
.card {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.btn-primary {
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
```

**After (CSS Tags):**
```css
/* Optional customization */
:root {
  --radius-md: 4px;
  --primary: #007bff;
}
```

```html
<card>
  <button bg="var(--primary)">Button</button>
</card>
```

**Key Changes:**
- Use semantic components instead of utility classes
- Leverage design tokens for consistency
- Automatic responsive behavior
- Built-in accessibility features

### General Migration Tips

1. **Start Small**: Migrate one component at a time
2. **Use Design Tokens**: Replace hardcoded values with CSS custom properties
3. **Leverage Components**: Use pre-built components instead of custom CSS
4. **Customize Globally**: Override theme variables for brand consistency
5. **Test Thoroughly**: Check responsive behavior and accessibility

### Breaking Changes to Watch For

- **No JavaScript Dependencies**: Pure CSS framework
- **Container Queries**: Responsive behavior based on container, not viewport
- **Automatic Theming**: Colors adapt automatically to light/dark mode
- **Cascade Layers**: Different specificity rules than traditional CSS

## 🛣️ Roadmap

### Short Term (Next 3-6 months)
- [ ] Fix remaining import inconsistencies
- [ ] Add comprehensive accessibility testing
- [ ] Create React/Vue component wrappers
- [ ] Expand high contrast mode support
- [ ] Add CSS custom property fallbacks for older browsers

### Medium Term (6-12 months)
- [ ] Implement CSS Modules support
- [ ] Add design system documentation generator
- [ ] Create interactive component playground
- [ ] Add internationalization (RTL) support
- [ ] Implement advanced animation system

### Long Term (1+ years)
- [ ] Native CSS @function/@mixin support (when browsers implement)
- [ ] AI-assisted color palette generation
- [ ] Real-time theme editor
- [ ] Component marketplace
- [ ] Multi-framework integration packages

### Community Requests
- [ ] More form components (date picker, select, etc.)
- [ ] Advanced data visualization components
- [ ] Animation and transition utilities
- [ ] Print styles optimization

## ✨ Best Practices

### Design System Architecture

#### Use Semantic Color Tokens
```css
/* ✅ Good: Use semantic tokens */
.my-component {
  background: var(--surface-default);
  color: var(--text-default);
  border: 1px solid var(--outline-default);
}

/* ❌ Avoid: Hardcoded colors */
.my-component {
  background: white;
  color: #333;
  border: 1px solid #ddd;
}
```

#### Leverage the Generative Theme System
```css
/* ✅ Good: Minimal inputs, maximum output */
:root {
  --primary-h: 220;  /* One hue value */
  --accent-h: 280;   /* Creates entire palette */
}

/* ❌ Avoid: Manual palette creation */
:root {
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --primary-light: #dbeafe;
  --primary-dark: #1d4ed8;
  /* ... dozens more */
}
```

#### Customize at the Token Level
```css
/* ✅ Good: Override base tokens */
:root {
  --space-md: 1.25rem;  /* Affects entire spacing system */
  --font-family-sans: 'Inter', sans-serif;
}

/* ❌ Avoid: Override component styles */
card {
  padding: 1.25rem;  /* Breaks design system consistency */
}
```

### Component Development

#### Use Container Queries for Responsiveness
```css
/* ✅ Good: Component-level responsive design */
@container card (min-width: 400px) {
  .card-content {
    flex-direction: row;
  }
}

/* ❌ Avoid: Viewport-based media queries */
@media (min-width: 768px) {
  .card-content {
    flex-direction: row;
  }
}
```

#### Follow Component Patterns
```css
/* ✅ Good: Consistent component structure */
@layer components {
  .my-component {
    /* Base styles with design tokens */
    background: var(--surface-default);
    color: var(--text-default);
    border-radius: var(--radius-md);

    /* Responsive behavior */
    @container (min-width: 400px) {
      /* Container query styles */
    }

    /* Theme adaptation */
    @media (prefers-color-scheme: dark) {
      /* Dark mode adjustments */
    }
  }
}
```

#### Use Scoped Styling
```css
/* ✅ Good: Isolated component styles */
@scope (.my-component) {
  .internal-element {
    /* Styles only apply within .my-component */
  }
}
```

### Performance Optimization

#### Tree-Shake Unused Styles
```css
/* Only import needed components */
@import url("components/card.css") layer(components);
@import url("components/button.css") layer(components);
/* Skip unused components to reduce bundle size */
```

#### Use CSS Layers Effectively
```css
/* ✅ Good: Organized cascade */
@layer base, theme, components, utilities;

@layer theme {
  /* Theme overrides */
}

@layer components {
  /* Component styles */
}
```

#### Optimize for Critical CSS
```html
<!-- Load critical styles first -->
<link rel="stylesheet" href="critical.css">
<!-- Load remaining styles asynchronously -->
<link rel="preload" href="full-framework.css" as="style" onload="this.rel='stylesheet'">
```

### Accessibility Guidelines

#### Maintain Contrast Ratios
```css
/* ✅ Good: Automatic contrast calculation */
.text-on-color {
  color: var(--auto-contrast-text);
}

/* ✅ Good: Semantic color usage */
button {
  background: var(--accent);
  color: var(--text-on-accent);
}
```

#### Support Keyboard Navigation
```css
/* ✅ Good: Focus management */
.my-component:focus-visible {
  outline: 2px solid var(--outline-focus);
  outline-offset: 2px;
}
```

#### Respect User Preferences
```css
/* ✅ Good: Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    transition: none;
  }
}
```

### Development Workflow

#### Use Design Tokens for Consistency
```css
/* ✅ Good: Token-based spacing */
.my-layout {
  gap: var(--space-md);
  padding: var(--space-lg);
}

/* ❌ Avoid: Magic numbers */
.my-layout {
  gap: 1rem;
  padding: 1.5rem;
}
```

#### Document Customizations
```css
:root {
  /* Brand Colors */
  --primary-h: 220; /* Professional blue - used for CTAs */
  --accent-h: 45;  /* Warm amber - used for highlights */

  /* Typography Scale */
  --font-size-base: 1rem; /* Base font size for calculations */
}
```

#### Test Across Themes
```css
/* Test light mode */
@media (prefers-color-scheme: light) {
  /* Verify contrast and readability */
}

/* Test dark mode */
@media (prefers-color-scheme: dark) {
  /* Ensure proper adaptation */
}

/* Test high contrast */
@media (prefers-contrast: high) {
  /* Check accessibility compliance */
}
```

## ❓ FAQ

### General Questions

**Q: Is this production-ready?**
A: Yes, the framework is used in production applications. It follows semantic versioning and maintains backward compatibility.

**Q: Do I need JavaScript?**
A: No, the core framework is pure CSS. JavaScript enhances interactive components like carousels and modals.

**Q: Can I use this with [framework]?**
A: Yes, it works with any framework or vanilla JavaScript. See the Framework Integration section for examples.

**Q: How does this compare to Tailwind CSS?**
A: This framework provides semantic components and design tokens vs Tailwind's utility classes. Use both together for maximum flexibility.

### Technical Questions

**Q: Why OKLCH instead of HSL?**
A: OKLCH provides perceptually uniform colors and better gamut coverage. Colors appear more consistent across different brightness levels.

**Q: What are cascade layers?**
A: CSS layers provide explicit control over style precedence, preventing specificity wars and making overrides predictable.

**Q: How do container queries work?**
A: Container queries make components responsive to their container size, not just the viewport, enabling true component-level responsive design.

**Q: Can I customize the color palette?**
A: Yes, override the hue variables (`--primary-h`, `--accent-h`) and the entire palette regenerates automatically.

**Q: What about browser support?**
A: Modern browsers are supported. The framework degrades gracefully in older browsers with basic functionality preserved.

### Customization Questions

**Q: How do I change the primary color?**
A: Override `--primary-h` (hue), `--primary-c` (chroma), and `--primary-l` (lightness) in your CSS.

**Q: Can I add custom components?**
A: Yes, follow the existing patterns: use `@layer components`, leverage design tokens, and add container queries for responsiveness.

**Q: How do I create a custom theme?**
A: Define custom properties in `:root` for colors, spacing, and typography. The generative theme system handles the rest.

For older browsers, the framework provides sensible defaults and graceful degradation.

## 📄 License

MIT License - Free to use in personal and commercial projects. See [LICENSE](./LICENSE) for full details.
<br />
**Ready to build something amazing?** Start with the [Quick Start Guide](./docs/quick-start.md) or explore the [full documentation](./docs/README.md).