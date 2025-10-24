---
title: Getting Started
description: Get your project running with CSS Tags in three simple steps.
---

Get your project running with CSS Tags in three simple steps.

## 1. Include the CSS

Add the stylesheet to the `<head>` of your HTML file.

```html
<!-- CDN (Recommended for prototyping) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/doeixd/CSS-Tags@latest/index.css">
```

**Other installation methods:**

### Download
For production use, host the file yourself:
1. [Download the latest `index.css` file](https://github.com/doeixd/CSS-Tags/blob/main/index.css)
2. Place it in your project's CSS directory
3. Link to it: `<link rel="stylesheet" href="your-css-folder/index.css">`

### NPM (Coming Soon)
```bash
npm install css-tags
```

## 2. Write Semantic HTML

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

## 3. Customize Your Theme (Optional)

Create a `<style>` tag or a local CSS file to override the default design tokens. The entire design system will adapt instantly.

```css
:root {
  --primary-h: 280;      /* Changes the theme to purple */
  --font-family-sans: 'Inter', sans-serif;
  --radius-md: 0.75rem;  /* Makes corners more rounded */
  --space-md: 1.25rem;   /* Increases base spacing */
}
```

## Your First Component

Let's create a complete page to see CSS Tags in action:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First CSS Tags Page</title>

  <!-- Add CSS Tags -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/doeixd/CSS-Tags@latest/index.css">
</head>
<body p="var(--space-lg)">

  <layout-center max-width="70ch">
    <card>
      <card-body>
        <h1>Hello, CSS Tags!</h1>
        <p>This card is automatically styled with responsive design and theme support.</p>
        <layout-cluster gap="var(--space-sm)">
          <button bg="var(--accent)">Get Started</button>
          <button>Learn More</button>
        </layout-cluster>
      </card-body>
    </card>
  </layout-center>

</body>
</html>
```

## What Just Happened?

Let's break down what makes CSS Tags special:

1. **Semantic Tags**: `<card>`, `<card-body>`, and `<layout-center>` are custom HTML tags that describe your content's structure, not its appearance.

2. **Design Tokens**: `var(--space-lg)` and `var(--accent)` are CSS custom properties that create a consistent design system.

3. **Automatic Theming**: The page automatically adapts to your system's light or dark mode preference.

4. **Responsive by Default**: All components are mobile-friendly without additional configuration.

## Core Concepts

### Declarative Styling

Control appearance through HTML attributes using the modern CSS `attr()` function:

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

## Using Design Tokens

CSS Tags comes with a complete design token system:

### Spacing
```html
<box p="var(--space-md)">Padded content</box>
<box m="var(--space-lg)">Content with margin</box>
```

### Colors
```html
<button bg="var(--accent)">Accent Button</button>
<button bg="var(--success)">Success Button</button>
<button bg="var(--error)">Error Button</button>
```

### Typography
```html
<text size="lg">Large text</text>
<text size="sm" weight="bold">Small bold text</text>
```

## Layout Components

CSS Tags includes powerful layout primitives:

### Center Content
```html
<layout-center max-width="60ch">
  <p>Centered content with max width for readability.</p>
</layout-center>
```

### Responsive Grid
```html
<layout-grid min-item-size="250px" gap="var(--space-md)">
  <card>Card 1</card>
  <card>Card 2</card>
  <card>Card 3</card>
</layout-grid>
```

### Vertical Stack
```html
<layout-stack gap="var(--space-md)">
  <h1>Title</h1>
  <p>Description</p>
  <button>Action</button>
</layout-stack>
```

### Flexible Row
```html
<layout-cluster gap="var(--space-sm)">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</layout-cluster>
```

### Sidebar Layout
```html
<layout-sidebar side-width="300px">
  <aside slot="aside">Sidebar content</aside>
  <main>Main content</main>
</layout-sidebar>
```

## UI Components

### Cards
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

### Alerts
```html
<alert bg="var(--surface-success)">Success message</alert>
<alert bg="var(--surface-warning)">Warning message</alert>
<alert bg="var(--surface-error)">Error message</alert>
```

### Badges
```html
<badge bg="var(--success)">New</badge>
<badge bg="var(--warning)">Beta</badge>
```

## Customization

Override design tokens to match your brand:

### Brand Colors
```css
:root {
  --primary-h: 240;    /* Blue primary */
  --success-h: 160;    /* Green success */
  --error-h: 355;      /* Red error */
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
  --space-md: 1.25rem;   /* Base spacing unit */
  --radius-md: 0.75rem;  /* Base border radius */
  --shadow-md: 0 4px 6px oklch(0% 0% 0% / 0.1);
}
```

## Next Steps

- Explore the [Component Documentation](/components/card/) to see all available components
- Check out the [Examples](/examples/examples/) for real-world usage patterns
- Read the [Philosophy Guide](/guides/philosophy/) to understand the design principles
- Learn about the [Color System](/guides/color-system/) for advanced theming
- Dive into the [API Reference](/reference/api/) for detailed documentation

## Browser Support

CSS Tags works best in the latest versions of all major browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|:---|:---:|:---:|:---:|:---:|
| **Core Framework** | ✅ 111+ | ✅ 113+ | ✅ 16.4+ | ✅ 111+ |
| `:has()` Selector | ✅ 105+ | ✅ 121+ | ✅ 16+ | ✅ 105+ |
| Container Queries | ✅ 105+ | ✅ 110+ | ✅ 16+ | ✅ 105+ |
| OKLCH Colors | ✅ 111+ | ✅ 113+ | ✅ 15.4+ | ✅ 111+ |

The framework includes graceful degradation, so pages will still be usable in older browsers, but layout and colors may be simplified.
