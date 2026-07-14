---
title: Carousel Component
description: The `carousel` component provides a responsive, touch-friendly carousel with smooth animations and navigation controls. It uses scroll snap for progressive enha
---

## Overview
The carousel provides a responsive, touch-friendly scroll-snap experience that JavaScript can progressively enhance with navigation controls.

Use `carousel`, `[data-carousel]`, or `.carousel` for the host. The data-host form pairs naturally with semantic sections, articles, and native buttons.

## Key Features
- **Progressive Enhancement**: Works with scroll snap when JavaScript is unavailable
- **Touch-Friendly**: Optimized for mobile interactions
- **Customizable Animation**: Configurable duration and timing functions
- **Glassmorphism UI**: Modern backdrop-filter effects on navigation buttons
- **Accessibility**: Respects `prefers-reduced-motion` and provides proper focus management

## Structure
- Host: `carousel`, `[data-carousel]`, or `.carousel`
- Slides: `.carousel-slides` or `[data-carousel-slides]`
- Item: `carousel-item`, `[data-carousel-item]`, or `.carousel-item`
- Trigger: `carousel-trigger`, `[data-carousel-trigger]`, or `.carousel-trigger`; prefer a native `<button>`

## Attributes

### Carousel Attributes
- `duration`: Animation duration in milliseconds (default: `500ms`)
- `timing-function`: CSS timing function (default: `'cubic-bezier(0.4, 0, 0.2, 1)'`)
- `radius`: Border radius for the carousel container

### Trigger Attributes
- `direction`: `"prev"` or `"next"` for button positioning
- `disabled`: Disables the button when at start/end of carousel

## Usage Example
```html
<section data-carousel duration="300ms" radius="1rem" aria-label="Featured photos">
  <div data-carousel-slides>
    <article data-carousel-item>
      <img src="slide1.jpg" alt="Slide 1">
    </article>
    <article data-carousel-item>
      <img src="slide2.jpg" alt="Slide 2">
    </article>
    <article data-carousel-item>
      <img src="slide3.jpg" alt="Slide 3">
    </article>
  </div>

  <button type="button" data-carousel-trigger direction="prev" aria-label="Previous slide">‹</button>
  <button type="button" data-carousel-trigger direction="next" aria-label="Next slide">›</button>
</section>
```

## Styling Details

### Container
- Position: relative
- Overflow: hidden
- Border radius: Configurable via `radius` attribute

### Slides Container
- Display: flex with horizontal scrolling
- Scroll snap: `x mandatory` for smooth slide alignment
- Hidden scrollbars across browsers
- Smooth transform transitions (disabled with `prefers-reduced-motion`)

### Slide Items
- Width: 100% (full carousel width)
- Flex shrink: 0 (maintains size)
- Scroll snap align: start

### Navigation Buttons
- **Positioning**: Absolutely positioned, centered vertically
- **Styling**: Semi-transparent background with backdrop blur
- **Effects**: Hover changes background and adds border
- **States**: Disabled state with reduced opacity
- **Placement**: `prev` on left, `next` on right using logical properties

## CSS Custom Properties
- `--slide-duration`: Animation duration (from `duration` attribute)
- `--slide-timing`: Animation timing function (from `timing-function` attribute)

## Progressive Enhancement
The carousel works without JavaScript using native scroll snap behavior. When JavaScript loads (from `carousel.js`), it enhances with:
- Transform-based animations instead of scrolling
- Programmatic navigation
- Touch gesture support
- Keyboard navigation

## Accessibility
- **Motion Preferences**: Transitions disabled when `prefers-reduced-motion: reduce`
- **Focus Management**: Proper tab order for navigation buttons
- **Screen Readers**: Semantic button elements with appropriate labels
- **Touch Targets**: Adequate button size (2.75rem) for mobile interaction

## Browser Support
- **Scroll Snap**: Chrome 69+, Firefox 68+, Safari 11+
- **Backdrop Filter**: Chrome 76+, Firefox 103+, Safari 9+
- **Logical Properties**: All modern browsers
- **CSS Custom Properties**: All modern browsers

## Integration with JavaScript
The CSS is designed to work with `carousel.js` which provides:
- Touch gesture handling
- Keyboard navigation
- Programmatic slide control
- Dynamic button state management

See `carousel.js` documentation for JavaScript API details.
