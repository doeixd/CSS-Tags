---
title: Carousel JavaScript
description: Progressively enhance CSS scroll-snap carousels with controls, looping, and touch gestures.
---

The CSS carousel works as a horizontally scrollable, snap-aligned collection without JavaScript. Import `carousel.js` when you also want previous/next controls, looping, and swipe gestures.

## Setup

```html
<link rel="stylesheet" href="/components/carousel.css" />

<section data-carousel aria-label="Featured articles">
  <div data-carousel-slides>
    <article data-carousel-item>First article</article>
    <article data-carousel-item>Second article</article>
    <article data-carousel-item>Third article</article>
  </div>

  <button type="button" data-carousel-trigger direction="prev" aria-label="Previous article">‹</button>
  <button type="button" data-carousel-trigger direction="next" aria-label="Next article">›</button>
</section>

<script type="module" src="/carousel.js"></script>
```

Use native buttons for the triggers. They provide keyboard behavior and disabled semantics without recreating either feature in JavaScript.

## Supported hosts

The initializer recognizes the same three host forms as the CSS:

- Carousel: `carousel`, `[data-carousel]`, `.carousel`
- Slides: `[data-carousel-slides]`, `.carousel-slides`
- Item: `carousel-item`, `[data-carousel-item]`, `.carousel-item`
- Trigger: `carousel-trigger`, `[data-carousel-trigger]`, `.carousel-trigger`

Add `loop` to the carousel host to wrap from the last slide to the first. Without it, the script disables the previous or next button at the corresponding edge.

## Programmatic initialization

The module initializes document carousels automatically. It also exports the initializer for content added later or rendered inside another root:

```js
import { initializeCarousels } from "/carousel.js";

initializeCarousels(document.querySelector("#new-content"));
```

Calling the initializer again is safe; initialized carousels are skipped.

## Progressive enhancement

Keep the slides container horizontally scrollable in the CSS fallback. JavaScript changes the slide widths and transform only after it finds a valid host, slides container, and at least one item. Touch gestures use passive listeners, and the CSS removes transition animation when the user prefers reduced motion.
