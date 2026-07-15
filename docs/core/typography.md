# Typography Core Documentation

## Overview
The typography system provides the library's default content rhythm, hierarchical type scale, prose rules, and rich-content styling. It is built from tokens first, then applied through `core/typography.css`, `core/text.css`, utilities, and optional mixins.

## Files
- `core/tokens.css`: type scale, semantic typography variables, spacing rhythm tokens
- `core/typography.css`: default element and prose styling
- `core/text.css`: declarative text primitive
- `core/mixins.css`: prose and callout mixins
- `utilities/utilities.css`: typography and callout utility classes

## Philosophy
- **Token-first**: tune typography by changing variables, not rewriting selectors
- **Readable by default**: body copy, headings, code, and rich content should look intentional without extra classes
- **Hierarchical**: body, headings, lead, caption, code, and callouts each have their own semantic layer
- **Composable**: prose containers, utilities, and the `text` primitive all share the same variables

## Type Scale
The shipped scale uses a hybrid approach: stable small/body steps and fluid larger display steps. The typography API is token-driven, so teams can swap any step or semantic token to fixed, viewport-based, or container-based values.

Core step tokens:
- `--font-size-step--2`
- `--font-size-step--1`
- `--font-size-step-0`
- `--font-size-step-1`
- `--font-size-step-2`
- `--font-size-step-3`
- `--font-size-step-4`
- `--font-size-step-5`
- `--font-size-step-6`
- `--font-size-step-7`

Convenience aliases:
- `--font-size-xs`
- `--font-size-sm`
- `--font-size-base`
- `--font-size-lg`
- `--font-size-xl`
- `--font-size-2xl`
- `--font-size-3xl`
- `--font-size-4xl`
- `--font-size-5xl`
- `--font-size-6xl`

Default behavior:
- `xs`, `sm`, and `base` stay stable for readable body copy
- `lg` through `2xl` scale gently with the viewport
- `3xl` and above are explicitly fluid display sizes

## Semantic Typography Tokens

### Families
- `--font-family-body`
- `--font-family-heading`
- `--font-family-code`

### Body and Supporting Text
- `--font-size-body`
- `--font-size-body-sm`
- `--font-size-body-lg`
- `--font-size-lead`
- `--font-size-small`
- `--font-size-caption`
- `--line-height-body`
- `--line-height-lead`
- `--font-weight-body`
- `--letter-spacing-body`

### Headings
- `--font-size-h1` through `--font-size-h6`
- `--line-height-h1` through `--line-height-h6`
- `--font-weight-h1` through `--font-weight-h6`
- `--letter-spacing-h1` through `--letter-spacing-h6`
- `--font-weight-heading`
- `--font-weight-display`
- `--letter-spacing-heading`
- `--letter-spacing-display`
- `--letter-spacing-eyebrow`

### Code and Rich Content
- `--font-size-code`
- `--line-height-code`
- `--font-weight-code`
- `--measure-body`
- `--measure-heading`
- `--measure-code`

## Rhythm Tokens
These control how content blocks interact.

- `--space-flow`
- `--space-heading-top`
- `--space-heading-bottom`
- `--space-heading-compact-top`
- `--space-heading-after-lead`
- `--space-paragraph`
- `--space-list-indent`
- `--space-list-item`
- `--space-list-nested-top`
- `--space-code-block-top`
- `--space-code-block-bottom`
- `--space-code-block-x`
- `--space-code-block-y`
- `--space-figure-top`
- `--space-figure-bottom`
- `--space-figure-caption-top`
- `--space-blockquote-top`
- `--space-blockquote-bottom`
- `--space-blockquote-pad`
- `--space-hr-top`
- `--space-hr-bottom`
- `--space-callout-top`
- `--space-callout-bottom`
- `--space-callout-pad-x`
- `--space-callout-pad-y`

## Default Styled Elements
`core/typography.css` styles these by default:

- `body`
- `h1` to `h6`
- `p`
- `small`
- `caption`
- `eyebrow`
- `strong`, `b`
- `em`, `i`
- `ul`, `ol`, `dt`, `dd`
- `pre`, `code`, `kbd`, `samp`
- `blockquote`
- `figure`, `figcaption`
- `hr`
- `abbr`
- `mark`

## Prose Containers
For longform content, use:

```html
<article class="prose">
  <h1>Readable longform content</h1>
  <p>Paragraphs, lists, code blocks, figures, and callouts all share the same rhythm.</p>
</article>

<article data-prose>
  <h2>Data attribute host</h2>
  <p>Same prose rules without a required class name.</p>
</article>
```

What prose does:
- constrains paragraph and content measure
- keeps headings tighter than body copy
- gives figures, code blocks, blockquotes, and callouts consistent spacing
- improves link readability inside rich content

## Text Primitive
The `text` primitive now supports semantic variants in addition to size/weight/color:

```html
<text variant="lead">Lead paragraph</text>
<text variant="caption">Figure caption</text>
<text variant="eyebrow">Section label</text>
<text measure="heading" size="4xl" weight="bold">Display text</text>
```

Additional text features:
- `size="5xl"`
- `measure="body|heading|wide"`
- `contrast`
- `truncate`
- `lines="2|3|4|5"`

## Eyebrow Label
For section labels above headings, use the semantic eyebrow host or its aliases:

```html
<eyebrow>Pricing</eyebrow>
<h2>Three plans for teams from first launch to scale.</h2>

<p class="eyebrow">FAQ</p>
<h2>Common questions before you publish.</h2>
```

`eyebrow`, `.eyebrow`, and `[data-eyebrow]` use the same semantic tokens as `text variant="eyebrow"`, but with heading-friendly spacing built in.

## Callouts
The system includes built-in callout styling.

```html
<aside class="callout callout-info">
  <span class="callout-title">Note</span>
  <p>Callouts use the same content rhythm as prose blocks.</p>
</aside>

<aside data-callout="warning">
  <span data-callout-title>Warning</span>
  <p>Data attribute variant form.</p>
</aside>
```

Related tokens:
- `--callout-background`
- `--callout-border`
- `--callout-color`
- `--callout-radius`
- `--callout-title-color`
- success/warning/error/info callout tokens

## Utilities
Useful typography utilities now include:

- `.text-3xl`, `.text-4xl`, `.text-5xl`
- `.text-lead`
- `.text-caption`
- `.text-eyebrow`
- `.measure-body`
- `.measure-heading`
- `.measure-wide`
- `.prose`
- `.callout`, `.callout-info`, `.callout-success`, `.callout-warning`, `.callout-error`

## Mixins
Forward-looking mixins are available for teams experimenting with native CSS mixins:

- `@mixin --prose-flow`
- `@mixin --callout-role(--kind)`

## Example Customization

```css
:root {
  --font-family-body: "IBM Plex Sans", sans-serif;
  --font-family-heading: "Fraunces", serif;

  --font-size-h1: clamp(2.5rem, 2rem + 2vw, 4.75rem);
  --font-size-h2: clamp(2rem, 1.7rem + 1.2vw, 3.25rem);

  --measure-body: 72ch;
  --measure-heading: 16ch;

  --space-heading-top: 2.2em;
  --space-code-block-top: 1.5em;
  --space-code-block-bottom: 1.5em;

  --typography-code-bg: var(--surface-overt);
  --typography-blockquote-border: var(--secondary);
  --callout-info-border: var(--info);
}
```

## Container-Relative Typography
Container-relative scaling is an opt-in public primitive. Wrap a region in any supported host and its descendants use the same bounded type scale with `cqi` preferred values:

```html
<fluid-container>
  <h2>Custom element host</h2>
  <p class="lead">This type responds to the container's inline size.</p>
</fluid-container>

<section data-fluid-container>Data-attribute host</section>
<section class="fluid-container">Class host</section>
<section class="fc">Short class alias</section>
```

The min and max bounds stay identical to the viewport scale. Only each step's preferred value changes from `vw` to `cqi`, so components cannot grow outside the designed range.

Each fluid step exposes three editable parts:

```css
.marketing-card {
  --font-size-step-5-min: 1.8rem;
  --font-size-step-5-preferred: calc(1.3rem + 2.4cqi);
  --font-size-step-5-max: 2.75rem;
}
```

Use viewport-based defaults for page-level typography and container units for cards, sidebars, dashboards, or embedded content regions that should respond to their own width.

## Text Box Support
`text-box`, `text-box-trim`, and `text-box-edge` are supported as progressive enhancement. The library does not depend on them for layout, but exposes tokens and hooks so compact UI text can opt into cap-height trimming when the browser supports it.

Shipped tokens:
- `--text-box`
- `--text-box-trim`
- `--text-box-edge`
- `--text-box-button`
- `--text-box-badge`
- `--text-box-chip`
- `--text-box-eyebrow`

Shipped hooks:
- `.text-box`
- `[data-text-box]`
- `text[box]`

Default usage is intentionally conservative:
- buttons
- badges
- chips
- compact label/eyebrow-style text when you opt in

Body copy and longform prose are left alone by default.

```css
:root {
  --text-box-button: trim-both cap alphabetic;
  --text-box-eyebrow: trim-both cap alphabetic;
}

.hero-kicker {
  --text-box: trim-both cap alphabetic;
}
```

## Custom Highlights
The theme layer also styles Custom Highlight API ranges with the accent system. If your app registers highlights such as `search-results`, the library will tint them automatically.

Shipped highlight names:
- `::highlight(search-results)`
- `::highlight(current-search-result)`

Shipped tokens:
- `--highlight-search-results-bg`
- `--highlight-search-results-color`
- `--highlight-search-results-decoration`
- `--highlight-search-results-decoration-color`

Example:

```js
const highlight = new Highlight(rangeA, rangeB)
CSS.highlights.set('search-results', highlight)
```

```css
:root {
  --highlight-search-results-bg: color-mix(in oklch, var(--accent) 30%, white);
}
```

## Usage Notes
- Use semantic HTML first; use the `text` primitive when you want attribute-driven control.
- Prefer `.prose` or `[data-prose]` around longform docs/article content.
- Tune the semantic typography tokens before overriding element selectors directly.
