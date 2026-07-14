# Image Container (`components/img-container.css`)

The image container is a token-driven frame for native images and pictures. It supports `<img-container>`, `[data-img-container]`, and `.img-container` hosts.

## Basic usage

```html
<picture data-img-container aspect-ratio="16 / 9" object-fit="cover">
  <img src="landscape.jpg" alt="Mountain landscape" loading="lazy" />
</picture>
```

Presentation attributes include `aspect-ratio`, `object-fit`, `object-position`, `radius`, `shadow`, `bg`, `transition`, and `theme`.

## Semantic states

`aria-busy="true"` is the primary loading-state hook. `data-error` displays the error surface. The optional enhancement manages both states from native image load and error events.

```html
<div data-img-container aspect-ratio="4 / 3" aria-busy="true">
  <img data-loading alt="Product preview" />
</div>

<script type="module" src="/components/img-container.js"></script>
```

## Responsive images

Prefer native `srcset`, `sizes`, `<source>`, and `loading="lazy"` attributes. The script also accepts `src`, `srcset`, `sizes`, `alt`, `lazy`, and `fallback-src` on the host as progressive-enhancement shorthands.

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

## Responsive aspect ratios

With `responsive`, `mobile-aspect-ratio` applies through 480px and `desktop-aspect-ratio` from 768px. These are viewport fallbacks; use a parent query container and custom CSS for contextual container-query behavior.

## Tokens

- `--ic-aspect-ratio`
- `--ic-object-fit`, `--ic-object-position`
- `--ic-radius`, `--ic-shadow`, `--ic-bg`
- `--ic-loading-start`, `--ic-loading-middle`
- `--ic-error-bg`, `--ic-error-border`, `--ic-error-color`
- `--ic-transition`
