# Masonry Component Documentation

## Overview
The `masonry` component provides experimental CSS Masonry Layout functionality for creating brick-like, packed layouts. It includes both a mixin for CSS usage and a component for HTML usage.

## Important Notice
⚠️ **EXPERIMENTAL FEATURE**: CSS Masonry requires browser flags in Edge/Chrome 140+. This is not yet a standard feature and may change or be removed.

## Key Features
- **Packed Layouts**: Items flow into available space like bricks
- **Flexible Direction**: Column or row-based masonry
- **Item Tolerance**: Control over item placement strictness
- **Mixin Available**: Use in existing CSS via `@mixin --masonry`

## Mixin Usage

### @mixin --masonry
A CSS mixin for applying masonry layout to any selector.

#### Parameters
- `--direction`: Layout direction (default: `'column'`)
  - `'column'`: Items pack vertically into columns
  - `'row'`: Items pack horizontally into rows
- `--tracks`: Track definition (default: `'repeat(auto-fill, auto)'`)
  - Examples: `'200px'`, `'repeat(3, 1fr)'`
- `--gap`: Gap between items (default: `1.5rem`)

#### Usage Example
```css
.masonry-gallery {
  @mixin --masonry(
    --direction: 'column',
    --tracks: 'repeat(auto-fill, 200px)',
    --gap: 1rem
  );
}
```

## Component Usage

### masonry-layout Element
HTML component with declarative attributes.

#### Attributes
- `direction`: Layout direction (default: `column`)
- `gap`: Gap between items (default: `1.5rem`)
- `tolerance`: Item placement tolerance (default: `0`)
- `cols`: Column tracks for column direction (default: `'repeat(auto-fill, auto)'`)
- `rows`: Row tracks for row direction (default: `none`)

#### Item Attributes (on children)
- `col`: Grid column span
- `row`: Grid row span

## Usage Examples

### Basic Masonry Grid
```html
<masonry-layout cols="repeat(auto-fill, 200px)" gap="1rem">
  <img src="image1.jpg" alt="Image 1">
  <img src="image2.jpg" alt="Image 2">
  <img src="image3.jpg" alt="Image 3">
</masonry-layout>
```

### Row-Based Masonry
```html
<masonry-layout direction="row" rows="repeat(auto-fill, 150px)" gap="0.5rem">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</masonry-layout>
```

### With Spanning Items
```html
<masonry-layout cols="repeat(4, 1fr)">
  <div col="span 2">Wide item</div>
  <div>Normal item</div>
  <div row="span 2">Tall item</div>
</masonry-layout>
```

## CSS Implementation

### Mixin Definition
```css
@mixin --masonry(
  --direction: 'column',
  --tracks: 'repeat(auto-fill, auto)',
  --gap: 1.5rem
) {
  display: masonry;
  masonry-direction: var(--direction);
  gap: var(--gap);
  @when (var(--direction) = 'column') {
    grid-template-columns: var(--tracks);
  }
  @when (var(--direction) = 'row') {
    grid-template-rows: var(--tracks);
  }
}
```

### Component Styles
```css
masonry-layout {
  display: masonry;
  masonry-direction: attr(direction type(*), column);
  gap: attr(gap type(<length>), 1.5rem);
  item-tolerance: attr(tolerance type(<length>), 0);
  grid-template-columns: attr(cols type(*), 'repeat(auto-fill, auto)');
  grid-template-rows: attr(rows type(*), none);
}
```

## How Masonry Works

### Column Direction
- Items are placed in columns from left to right
- Each item goes into the shortest column
- Creates a "Pinterest-style" layout

### Row Direction
- Items are placed in rows from top to bottom
- Each item goes into the shortest row
- Creates horizontal packed layout

### Item Tolerance
- Controls how strictly items must fit
- Higher tolerance allows more flexible placement
- Lower tolerance keeps items more orderly

## Browser Support
- **Chrome/Edge**: Version 140+ with `--enable-experimental-web-platform-features` flag
- **Firefox**: Not supported
- **Safari**: Not supported
- **Status**: Experimental, not in stable releases

## Use Cases
- **Image Galleries**: Pinterest-style photo layouts
- **Card Grids**: Uneven content heights
- **Blog Posts**: Articles with varying lengths
- **Product Grids**: Items with different aspect ratios
- **Portfolio Layouts**: Creative, organic arrangements

## Fallback
Without masonry support, the layout falls back to regular grid or flexbox. Consider providing a CSS fallback:

```css
masonry-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* Fallback layout */
}
```