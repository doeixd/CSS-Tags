# Carousel JavaScript (`carousel.js`)

This JavaScript file provides interactive functionality for the carousel component, enabling navigation, touch support, and smooth animations.

## Overview

The script initializes all `<carousel>` elements on the page, adding:

- **Button Navigation**: Previous/next button controls
- **Looping Support**: Optional infinite scrolling
- **Touch/Swipe Navigation**: Mobile-friendly swipe gestures
- **Transform-Based Animation**: Smooth CSS transitions
- **State Management**: Automatic button disabling for non-looping carousels

## Initialization

The script runs on `DOMContentLoaded` and finds all `<carousel>` elements:

```javascript
const carousels = document.querySelectorAll('carousel');
```

For each carousel, it locates:
- `.carousel-slides`: Container for slides
- `carousel-item`: Individual slide elements
- `carousel-trigger[direction="prev"]`: Previous button
- `carousel-trigger[direction="next"]`: Next button

## Key Features

### Slide Navigation

**goToSlide(index)**: Moves to a specific slide with bounds checking.

- **Looping Mode**: Wraps around using modulo arithmetic
- **Non-Looping Mode**: Clamps to valid range (0 to totalSlides - 1)

### Button Controls

- Previous button: `goToSlide(currentIndex - 1)`
- Next button: `goToSlide(currentIndex + 1)`
- Automatic disabling in non-looping mode when at boundaries

### Touch Support

Implements swipe gesture detection:

- **Touch Start**: Records initial touch position
- **Touch End**: Compares start/end positions
- **Threshold**: 50px minimum swipe distance
- **Direction**: Left swipe = next, right swipe = previous

### Animation System

**updateCarousel(isInstant)**:
- Uses `transform: translateX()` for smooth movement
- Disables transitions for instant positioning (initial setup)
- Manages button states for non-looping carousels

## HTML Structure

The script expects this carousel structure:

```html
<carousel loop>
  <div class="carousel-slides">
    <carousel-item>Slide 1</carousel-item>
    <carousel-item>Slide 2</carousel-item>
    <carousel-item>Slide 3</carousel-item>
  </div>
  <carousel-trigger direction="prev">Previous</carousel-trigger>
  <carousel-trigger direction="next">Next</carousel-trigger>
</carousel>
```

## Attributes

### `loop`
- **Type**: Boolean attribute
- **Effect**: Enables infinite scrolling
- **Default**: Disabled (finite scrolling)

## CSS Integration

The script overrides scroll-snap behavior:
- Sets `overflow-x: hidden` on slides container
- Uses transform instead of scroll position
- Maintains smooth CSS transitions

## Browser Support

- Modern browsers with touch events
- CSS transforms and transitions
- ES6 features (arrow functions, template literals)

## Performance Notes

- Uses `passive: true` for touch events to improve scrolling performance
- Minimal DOM queries and event listeners
- Efficient transform-based animations

## Integration Notes

- Import after carousel CSS component
- Works with any carousel styling as long as HTML structure matches
- Touch events are passive for better mobile performance
- Automatic cleanup not needed (event listeners persist for session)

## Related Files

- `components/carousel.css`: Carousel styling and structure
- `examples/demo.html`: Carousel usage examples