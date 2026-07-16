# CMS and Markdown Content

CSS Tags styles semantic renderer output through `.prose` or
`[data-prose]`. The content remains normal HTML: the library does not require
a Markdown runtime, add wrapper elements, or replace accessible native
elements.

## Choose a prose scope

```html
<article data-prose>...</article>
<article data-prose="compact">...</article>
<article data-prose="wide">...</article>
<article class="prose prose-unbounded">...</article>
```

- Default prose uses `--measure-body`.
- Compact prose tightens content rhythm without shrinking the type hierarchy.
- Wide prose uses `--measure-wide`.
- Unbounded prose removes the measure for a surrounding layout to control.

Apply prose to the authored article body, not an entire application shell.
Cards, navigation, forms, and other components should own their local rhythm.

## Renderer-neutral hooks

The library supports native elements first and common renderer conventions:

| Content | Preferred output and accepted hooks |
| --- | --- |
| Tasks | `.contains-task-list` / `[data-task-list]` and `.task-list-item` / `[data-task-list-item]` |
| Footnotes | `[data-footnotes]` or `.footnotes`, plus `[data-footnote-ref]` and `[data-footnote-backref]` |
| Heading links | Direct `.heading-anchor__link` or `[data-heading-anchor]` child |
| Definitions | Native `dl`, `dt`, and `dd` |
| Quotes | Native `blockquote` with an optional direct `footer` or `cite` |
| Figures | Native `figure` and `figcaption` |
| Tables | Native `table` and optional `caption` |
| Disclosure | Native `details` and `summary` |
| Media | Native images, pictures, video, audio, SVG, and iframe embeds |

Hooks enhance presentation only. Task state still belongs in a checkbox,
footnote relationships still require IDs and links, and heading permalink text
still needs an accessible label.

## Complete article fragment

```html
<article data-prose>
  <h2 id="release-checklist">
    Release checklist
    <a data-heading-anchor href="#release-checklist" aria-label="Link to Release checklist">#</a>
  </h2>

  <ul class="contains-task-list">
    <li class="task-list-item"><input type="checkbox" checked disabled> API reviewed</li>
    <li class="task-list-item"><input type="checkbox" disabled> Migration guide published</li>
  </ul>

  <dl>
    <dt>Progressive enhancement</dt>
    <dd>A complete baseline with optional platform upgrades.</dd>
  </dl>

  <blockquote>
    <p>Content should remain useful before the decoration arrives.</p>
    <footer><cite>CSS Tags philosophy</cite></footer>
  </blockquote>

  <p>
    The renderer can emit a footnote.<sup><a data-footnote-ref href="#fn-1">1</a></sup>
  </p>
  <section data-footnotes aria-label="Footnotes">
    <ol>
      <li id="fn-1">The original source. <a data-footnote-backref href="#release-checklist">Back</a></li>
    </ol>
  </section>
</article>
```

## Overflow and composition

Long links and inline code wrap without widening the article. Fenced code and
native tables retain their own horizontal scrolling. Images and embeds are
bounded to the prose width. Heading and footnote targets receive a configurable
scroll margin so sticky headers do not cover them.

A table becomes a scroll container only when it is a direct prose child. If
your renderer wraps tables, put the overflow behavior on that wrapper or use
the richer `data-table` component API.

Do not put `data-prose` on a grid that also contains sidebars. Keep it on the
article column so the reading measure and rich-content rhythm do not leak into
navigation.

## Important tokens

- Measures and variants: `--measure-body`, `--measure-wide`,
  `--space-flow`, `--space-heading-top`, and `--space-rich-block`
- Tasks: `--prose-task-gap` and `--prose-task-marker-offset`
- Footnotes: `--prose-footnotes-gap`, `--prose-footnotes-border`,
  `--prose-footnotes-font-size`, and
  `--prose-footnote-target-background`
- Heading links: `--prose-heading-scroll-margin`,
  `--prose-heading-anchor-gap`, and
  `--prose-heading-anchor-visible-opacity`
- Quotes and definitions: `--prose-quote-cite-gap`,
  `--prose-quote-cite-color`, and `--prose-definition-gap`
- Tables and embeds: `--prose-table-scrollbar-gutter`,
  `--prose-table-scrollbar-width`, and `--prose-embed-min-height`
- Long content: `--prose-link-wrap`, `--prose-inline-code-wrap`, and
  `--prose-inline-code-word-break`

## CMS integration checklist

1. Preserve heading order and native list, table, quote, figure, and disclosure
   elements.
2. Sanitize user-authored HTML before it reaches the page.
3. Generate unique heading and footnote IDs across repeated article fragments.
4. Give embedded media titles, captions, transcripts, or alternatives.
5. Do not infer alert, tab, button, or navigation semantics from visual styles.
6. Test long URLs, unbroken code, missing images, empty captions, nested lists,
   200% text, RTL, dark mode, and narrow containers.

