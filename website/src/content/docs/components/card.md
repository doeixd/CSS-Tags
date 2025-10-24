---
title: Card Component
description: The `card` component is a responsive, self-contained card element that adapts its layout based on its container size using container queries. It features scoped
---

## Overview
The `card` component is a responsive, self-contained card element that adapts its layout based on its container size using container queries. It features scoped styling to prevent conflicts and includes hover effects with elevation changes.

## Key Features
- **Container Queries**: Layout adapts to the card's own width, not viewport
- **Scoped Styling**: Uses `@scope` to isolate internal styles
- **Responsive Design**: Switches from vertical to horizontal layout at 400px width
- **Elevation Effects**: Hover animations with shadow changes
- **Flexible Content**: Supports media, header, content, and footer sections

## Structure
The card component consists of several semantic elements:

- `card-media`: Image or media content (16:9 aspect ratio by default)
- `card-body`: Main content container
- `card-header`: Card title (larger, bold text)
- `card-content`: Primary content (flexible growth)
- `card-footer`: Footer content (smaller, muted text)

## Layout Behavior

### Narrow Layout (< 400px)
- Vertical stack layout
- Media at top (16:9 aspect ratio)
- Body content below

### Wide Layout (≥ 400px)
- Horizontal layout
- Media on left (150px square)
- Body content on right (60% width)

## Styling Customization
The card supports several CSS custom properties for customization:

- `--b-bg`: Background color (default: slightly lighter than theme background)
- `--b-fg`: Text color (default: inherit)
- `--b-r`: Border radius (default: 0.75rem, or `radius` attribute)
- `--b-bw`: Border width (default: 0)
- `--b-bc`: Border color (default: transparent)
- `--b-shadow`: Box shadow (default: none)
- `--b-p`: Body padding (default: 1.5rem)

## Usage Example
```html
<card>
  <card-media>
    <img src="image.jpg" alt="Card image">
  </card-media>
  <card-body>
    <card-header>Card Title</card-header>
    <card-content>
      <p>Main content of the card goes here.</p>
    </card-content>
    <card-footer>
      <small>Footer information</small>
    </card-footer>
  </card-body>
</card>
```

## Hover Effects
- **Transform**: Moves up 5px on hover
- **Elevation**: Increases shadow depth from level 2 to 3

## Technical Implementation

### @scope Usage
```css
@scope (card) {
  /* All styles contained within card elements */
}
```
This prevents card styles from affecting elements outside the card.

### Container Queries
```css
@container card-container (min-width: 400px) {
  /* Styles applied when card is ≥400px wide */
}
```
The card establishes itself as a container with `container-type: inline-size`.

### CSS Nesting
Uses native CSS nesting for organized, hierarchical styles.

## Browser Support
- Requires `@scope` support (Chrome 118+, Firefox 128+)
- Container queries (Chrome 105+, Firefox 110+, Safari 16+)
- CSS nesting (all modern browsers)
- Fallback: Cards display in vertical layout in unsupported browsers

## Accessibility
- Semantic structure with proper content hierarchy
- Hover effects respect `prefers-reduced-motion`
- Color contrast maintained through theme variables
- Keyboard navigation support (inherited from base styles)