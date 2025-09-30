# Image Container (`components/img-container.css`)

A comprehensive image container component with advanced features for modern image handling.

## Features

- **Aspect Ratio Control**: Maintain consistent proportions
- **Object Fit Options**: Cover, contain, fill, none, scale-down
- **Lazy Loading**: Native lazy loading with JavaScript fallbacks
- **Responsive Images**: srcset and sizes support
- **Loading States**: Skeleton loading animations
- **Error Handling**: Fallback images and error states
- **Container Queries**: Responsive to container size
- **Theme Variants**: Pre-built themes for common use cases

## Basic Usage

```html
<img-container aspect-ratio="16/9">
  <img src="image.jpg" alt="Description" />
</img-container>
```

## Attributes

### Container Attributes

- `aspect-ratio`: CSS aspect-ratio value (e.g., "16/9", "1", "4/3")
- `object-fit`: How image fits (cover, contain, fill, none, scale-down)
- `object-position`: Position of image (center, top, bottom, etc.)
- `radius`: Border radius
- `shadow`: Box shadow
- `bg`: Background color
- `transition`: Transition effects
- `lazy`: Enable lazy loading
- `fallback-src`: Fallback image URL
- `src`: Image source (applied to child img)
- `srcset`: Responsive image sources
- `sizes`: Size hints for responsive images
- `alt`: Alt text for image

### Responsive Attributes

- `mobile-aspect-ratio`: Aspect ratio for small containers
- `desktop-aspect-ratio`: Aspect ratio for large containers
- `responsive`: Enable responsive aspect ratios

### Theme Attributes

- `theme`: Pre-built themes (card, hero, thumbnail)

## Examples

### Basic Aspect Ratio

```html
<img-container aspect-ratio="16/9">
  <img src="landscape.jpg" alt="Beautiful landscape" />
</img-container>
```

### Responsive Images

```html
<img-container aspect-ratio="16/9" srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1024w" sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw">
  <img src="medium.jpg" alt="Responsive image" />
</img-container>
```

### Lazy Loading with Fallback

```html
<img-container aspect-ratio="1" lazy fallback-src="placeholder.jpg">
  <img data-src="image.jpg" alt="Lazy loaded image" />
</img-container>
```

### Themed Containers

```html
<img-container theme="card" aspect-ratio="4/3" radius="0.75rem">
  <img src="card-image.jpg" alt="Card image" />
</img-container>
```

### Object Fit Options

```html
<img-container aspect-ratio="1" object-fit="contain" object-position="top">
  <img src="portrait.jpg" alt="Portrait image" />
</img-container>
```

## JavaScript Features

The component includes JavaScript enhancements (`img-container.js`) for:

- Loading state detection
- Error handling with fallbacks
- Intersection Observer lazy loading (fallback for older browsers)
- Automatic responsive image application
- Alt text propagation

## CSS Custom Properties

- `--ic-aspect-ratio`: Aspect ratio
- `--ic-object-fit`: Object fit value
- `--ic-object-position`: Object position
- `--ic-radius`: Border radius
- `--ic-shadow`: Box shadow
- `--ic-bg`: Background color
- `--ic-transition`: Transition

## Browser Support

- Modern browsers with CSS aspect-ratio support
- Container queries for responsive behavior
- JavaScript enhancements require ES6+ support

## Integration

Import the CSS in your component layer and include the JavaScript for enhanced functionality.

```css
@import url('components/img-container.css');
```

```html
<script src="components/img-container.js" defer></script>
```