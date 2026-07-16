---
title: Masonry
description: A progressively enhanced masonry host with a dependable CSS Grid fallback.
---

## Overview

Masonry is experimental. CSS Tags therefore starts with a responsive CSS Grid
layout and switches to `display: masonry` only when the browser reports support.
Content remains readable and multi-column everywhere else.

## Live-safe markup

The same component API works as a custom element, data host, or class host:

```html
<masonry-layout cols="repeat(auto-fit, minmax(14rem, 1fr))" gap="1rem">
  <article>Short card</article>
  <article>Card with more content...</article>
  <article>Another card</article>
</masonry-layout>

<section data-masonry cols="repeat(3, 1fr)" gap="1rem">...</section>
<section class="masonry-layout" cols="repeat(3, 1fr)" gap="1rem">...</section>
```

Use `cols` for the fallback column tracks, `rows` for explicit rows, and `gap`
for spacing. Child `col` and `row` attributes map to grid placement in the
fallback and remain available to supporting implementations.

## How progressive enhancement works

```css
:is(masonry-layout, [data-masonry], .masonry-layout) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  grid-template-columns: attr(
    cols type(*),
    repeat(auto-fit, minmax(min(100%, 16rem), 1fr))
  );
  gap: attr(gap type(*), 1.5rem);
}

@supports (display: masonry) {
  :is(masonry-layout, [data-masonry], .masonry-layout) {
    display: masonry;
  }
}
```

The declarations in `components/masonry.css` for custom CSS mixins are
forward-looking examples, not a production dependency. The component works
without them.

## Accessibility

Masonry changes visual placement, not document order. Keep the DOM in a logical
reading and keyboard-navigation order, use semantic children, and give images
meaningful `alt` text. Do not use visual packing to imply an order that differs
from the source.
