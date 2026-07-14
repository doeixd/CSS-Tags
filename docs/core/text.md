# Text Primitive (`core/text.css`)

The text primitive applies token-driven typography to `<text>`, `[data-text]`, and `.text` hosts. Prefer semantic HTML whenever the content already has a native meaning.

```html
<h2 data-text size="3xl" weight="bold" leading="tight">Quarterly results</h2>
<p class="text" color="subtle" measure="body">Readable supporting copy.</p>
```

## Attributes

- `size="xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl"`
- `weight="thin|light|normal|medium|semibold|bold|black"`
- `leading="none|tight|snug|normal|relaxed|loose"`
- `tracking="tighter|tight|normal|wide|wider|widest"`
- `align="start|center|end|justify"`
- `transform="none|capitalize|uppercase|lowercase"`
- `font-style="normal|italic|oblique"`
- `wrap="pretty|balance|wrap|nowrap"`
- `measure="body|heading|wide"`
- `display="inline|block"`
- `truncate` or `lines="2|3|4|5"`

Use `font-style`, not `style`; `style` remains the global HTML attribute.

## Color and contrast

Auto-contrast against inherited `--bg` is the default. `color` accepts contrast roles (`muted`, `subtle`, `default`, `overt`), brand roles, feedback roles, or a raw CSS value such as `var(--text-muted)`.

```html
<div style="--bg: var(--bedrock); background: var(--bg)">
  <p data-text>Automatically contrasted copy</p>
  <p data-text color="accent">Accent copy</p>
</div>
```

## Truncation

```html
<p data-text truncate>One-line content with an ellipsis.</p>
<p data-text lines="3">Content clamped after three lines.</p>
```

## Local variables

`--_fs`, `--_fw`, `--_lh`, `--_tracking`, `--_color`, and `--_bg` provide tightly scoped overrides. Prefer global typography tokens for reusable themes.
