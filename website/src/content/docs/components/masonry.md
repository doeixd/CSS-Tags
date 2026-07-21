---
title: Masonry
description: A no-JavaScript waterfall layout with a multi-column baseline and progressive Grid Lanes enhancement.
---

## Overview

Masonry should still look like masonry in an ordinary browser. CSS Tags uses
multi-column layout as the dependable baseline, so unequal items pack into a
waterfall today. Browsers that support the current CSS Grid Level 3 draft
upgrade the same markup to `display: grid-lanes`, which places each new item in
the shortest available lane.

The two algorithms have different visual ordering: the baseline flows down each
column before moving across, while Grid Lanes can select the shortest lane. The
DOM order remains the semantic and keyboard order in both cases.

## Live-safe markup

The same component API works as a custom element, data host, or class host:

```html
<masonry-layout column-width="14rem" gap="1rem">
  <article>Short card</article>
  <article>Card with more content...</article>
  <article>Another card</article>
</masonry-layout>

<section data-masonry column-width="14rem" gap="1rem">...</section>
<section class="masonry-layout" column-width="14rem" gap="1rem">...</section>
```

Use `column-width` as the responsive minimum width and `columns` as an optional
maximum count. `gap` controls both the column gap and the space below each item.
No script or fixed container height is required.

## API

| Input | Purpose | Default |
| --- | --- | --- |
| `column-width` / `--masonry-column-width` | Responsive fallback column width | `14rem` |
| `columns` / `--masonry-columns` | Maximum fallback column count | `auto` |
| `gap` / `--masonry-gap` | Horizontal and vertical item spacing | `var(--space-md)` |
| `fill` / `--masonry-fill` | Multi-column balancing (`balance` or `auto`) | `balance` |
| `cols` / `--masonry-tracks` | Grid Lanes column tracks | responsive `14rem` tracks |
| `rows` / `--masonry-rows` | Grid Lanes row tracks | `none` |
| `flow-tolerance` / `--masonry-flow-tolerance` | Grid Lanes placement tolerance | `normal` |

`tolerance` remains as a backwards-compatible alias for `flow-tolerance`.
Child `col` and `row` attributes apply to track placement when Grid Lanes is
available.

## How progressive enhancement works

```css
:is(masonry-layout, [data-masonry], .masonry-layout) {
  display: block;
  column-width: var(--masonry-column-width, 14rem);
  column-gap: var(--masonry-gap, 1rem);
}

:is(masonry-layout, [data-masonry], .masonry-layout) > * {
  inline-size: 100%;
  margin-block-end: var(--masonry-gap, 1rem);
  break-inside: avoid;
}

@supports (display: grid-lanes) {
  :is(masonry-layout, [data-masonry], .masonry-layout) {
    display: grid-lanes;
    grid-template-columns: var(--masonry-tracks);
    gap: var(--masonry-gap);
    flow-tolerance: var(--masonry-flow-tolerance);
  }
}
```

The custom mixin in `components/masonry.css` follows the same baseline and
enhancement model. It is forward-looking syntax, not a production dependency.

## Accessibility

Keep the DOM in a logical reading and keyboard-navigation order, use semantic
children, and give images meaningful `alt` text. Avoid using masonry for steps,
rankings, or other content whose meaning depends on a strict visual sequence.
