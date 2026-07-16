---
title: Image Container
description: Token-driven image frames with aspect ratios, semantic loading states, responsive sources, and recoverable errors.
---

The image container controls framing and presentation while the nested `<img>` or `<picture>` keeps native image semantics.

## Public API

Use `<img-container>`, `[data-img-container]`, or `.img-container`. Prefer a native `<picture>` or ordinary `<div>` host when it expresses the content clearly.

```html
<picture
  data-img-container
  aspect-ratio="16 / 9"
  object-fit="cover"
  radius="var(--radius-lg)"
>
  <img src="landscape.jpg" alt="Mountain landscape" loading="lazy" />
</picture>
```

All three host forms accept the same presentation attributes:

- `aspect-ratio`
- `object-fit` and `object-position`
- `radius`, `shadow`, and `bg`
- `transition`
- `theme="card|hero|thumbnail"`

Values use `attr(... type(*))`, so token references such as `radius="var(--radius-lg)"` work.

## Loading states

Use `aria-busy="true"` when the image is loading. This is both the accessibility state and the styling hook for the skeleton.

```html
<div data-img-container aspect-ratio="4 / 3" aria-busy="true">
  <img data-loading alt="Product preview" />
</div>
```

When using the optional JavaScript enhancement, it manages `aria-busy`, `data-loading`, `data-loaded`, and `data-error` automatically:

```html
<script type="module" src="/components/img-container.js"></script>
```

The loading animation respects `prefers-reduced-motion`.

## Responsive images

Keep native responsive-image attributes on the image whenever practical:

```html
<picture class="img-container" aspect-ratio="16 / 9">
  <source media="(min-width: 60rem)" srcset="landscape-wide.webp" />
  <img
    src="landscape.webp"
    srcset="landscape-small.webp 480w, landscape.webp 960w"
    sizes="(min-width: 60rem) 50vw, 100vw"
    alt="A trail crossing a green valley"
    loading="lazy"
  />
</picture>
```

The JavaScript also supports `src`, `srcset`, `sizes`, `alt`, and `lazy` as host shorthands. Native image attributes remain the preferred no-JavaScript path.

## Fallback and error states

Add `fallback-src` to try one replacement image after the original fails. If both fail, the component exposes `data-error` and displays a token-driven error surface.

```html
<div
  data-img-container
  aspect-ratio="1"
  fallback-src="/images/placeholder.svg"
  error-message="Product image unavailable"
>
  <img src="/images/product.webp" alt="Blue ceramic mug" />
</div>
```

Keep meaningful alt text on the image. The visual error message supplements that text; it does not replace it.

## Responsive aspect-ratio attributes

Add `responsive` to use viewport fallbacks:

- `mobile-aspect-ratio` applies through `480px`
- `desktop-aspect-ratio` applies from `768px`

```html
<div
  data-img-container
  responsive
  aspect-ratio="4 / 3"
  mobile-aspect-ratio="1"
  desktop-aspect-ratio="16 / 9"
>
  <img src="campaign.webp" alt="Summer campaign collection" />
</div>
```

These are viewport media-query variants. A component cannot query and restyle itself as its own CSS query container; use a parent container and custom CSS when contextual container-query behavior is required.

## Customization tokens

- `--ic-aspect-ratio`
- `--ic-object-fit` and `--ic-object-position`
- `--ic-radius`, `--ic-shadow`, and `--ic-bg`
- `--ic-loading-start` and `--ic-loading-middle`
- `--ic-error-bg`, `--ic-error-border`, and `--ic-error-color`
- `--ic-transition`

The theme variants use the shared radius and shadow tokens rather than hardcoded elevation values.
