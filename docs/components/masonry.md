# Masonry Component

## Overview

Masonry is experimental. CSS Tags starts with a responsive CSS Grid layout and
switches to `display: masonry` only inside a matching `@supports` query. Browsers
without masonry support still get a usable multi-column layout.

## Public hosts

```html
<masonry-layout cols="repeat(auto-fit, minmax(14rem, 1fr))" gap="1rem">
  <article>Short card</article>
  <article>Card with more content...</article>
</masonry-layout>

<section data-masonry cols="repeat(3, 1fr)" gap="1rem">...</section>
<section class="masonry-layout" cols="repeat(3, 1fr)" gap="1rem">...</section>
```

- `cols`: fallback column tracks
- `rows`: explicit row tracks
- `gap`: item spacing, default `1.5rem`
- `direction` and `tolerance`: passed to supporting masonry implementations
- child `col` and `row`: grid placement values

## Progressive enhancement

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

The custom mixin definitions in `components/masonry.css` are experimental
reference material. The HTML component does not depend on them.

## Accessibility

Visual packing does not change DOM order. Keep source order logical for reading
and keyboard navigation, use semantic child elements, and provide useful image
alternative text.
