---
title: Text Primitive
description: Token-driven text styling for semantic elements, data hosts, class hosts, and the optional text custom element.
---

The text primitive applies the library's typography tokens without replacing document semantics.

## Public API

Use `<text>`, `[data-text]`, or `.text`. Prefer native headings, paragraphs, captions, links, and spans when they carry meaning:

```html
<h2 data-text size="3xl" weight="bold" leading="tight">
  Quarterly results
</h2>

<p class="text" color="subtle" measure="body">
  A readable summary constrained to the body measure.
</p>

<text size="sm" color="muted">Optional custom-element shorthand</text>
```

Semantic paragraphs, headings, and blockquotes keep block layout. Inline hosts default to `inline-block`; use `display="inline"` or `display="block"` when needed.

## Hierarchy and rhythm

Sizes map to `--font-size-*` tokens:

`xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`

Weights map to `--font-weight-*` tokens:

`thin`, `light`, `normal`, `medium`, `semibold`, `bold`, `black`

Line-height values use the `leading` attribute:

`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`

```html
<p data-text size="lg" weight="medium" leading="relaxed">
  Comfortable introductory copy with an explicit hierarchy.
</p>
```

## Color and contrast

Auto-contrast is the default. The primitive reads the inherited `--bg` value and derives readable text; no `contrast` attribute is required.

Use semantic color roles when a specific meaning or emphasis is needed:

- Contrast roles: `muted`, `subtle`, `default`, `overt`
- Brand roles: `link`, `accent`, `secondary`, `tertiary`
- Feedback roles: `success`, `warning`, `error`, `info`

The `color` attribute also accepts raw CSS values, including custom properties.

```html
<div style="--bg: var(--bedrock); background: var(--bg); padding: var(--space-lg)">
  <p data-text>Automatically contrasted body copy</p>
  <p data-text color="accent">Explicit accent copy</p>
</div>
```

Do not rely on color alone for feedback; keep the status word in the content.

## Alignment, wrapping, and style

- `align="start|center|end|justify"`
- `transform="none|capitalize|uppercase|lowercase"`
- `font-style="normal|italic|oblique"`
- `wrap="pretty|balance|wrap|nowrap"`
- `tracking="tighter|tight|normal|wide|wider|widest"`

The default wrap mode is `pretty`, which is more suitable for body copy. Use `wrap="balance"` for short headings.

```html
<h3 data-text align="center" wrap="balance">
  A short heading balanced across lines
</h3>

<cite class="text" font-style="italic">Research team</cite>
```

Use `font-style`, not `style`; `style` remains the native global HTML attribute.

## Measures and truncation

Readable measures are available as `body`, `heading`, and `wide`.

```html
<p data-text measure="body">
  Long-form content constrained to the shared body measure.
</p>

<p data-text truncate style="max-inline-size: 18rem">
  A single line that ends with an ellipsis when space runs out.
</p>

<p data-text lines="3" style="max-inline-size: 32rem">
  Multi-line content clamped after three lines.
</p>
```

`truncate` clamps to one line. `lines` supports 2 through 5.

## Local customization

The primitive exposes local variables that can be overridden directly or through token changes:

- `--_fs`: font size
- `--_fw`: font weight
- `--_lh`: line height
- `--_tracking`: letter spacing
- `--_color`: text color
- `--_bg`: contrast reference background

Prefer the public attributes and global typography tokens for reusable themes; use the local variables for tightly scoped exceptions.
