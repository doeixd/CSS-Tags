# CSS Tags

Token-first CSS for semantic HTML, native browser behavior, and optional
declarative styling hosts.

CSS Tags gives ordinary HTML a coherent theme and provides reusable components
and layouts in three forms where practical:

```html
<card>Custom-element styling host</card>
<article data-card>Data-attribute host</article>
<article class="card">Class host</article>
```

These are CSS styling contracts, not registered JavaScript custom elements.
Prefer native elements whenever their built-in semantics or behavior matter.

## Install

```bash
npm install css-tags
```

Import the complete layered stylesheet:

```css
@import "css-tags";
```

Bundlers that support CSS side-effect imports can load it from JavaScript:

```js
import "css-tags";
```

For a no-build page, pin the published npm version:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css-tags@0.1.0/index.css">
```

See the [npm installation guide](https://doeixd.github.io/CSS-Tags/guides/npm/)
for subpath imports, TypeScript, and theme-layer ordering.

## Start with semantic HTML

The complete entry point styles useful native defaults without requiring
component markup:

```html
<main class="prose">
  <h1>Project notes</h1>
  <p>Readable typography and rhythm come from shared semantic tokens.</p>
  <ul>
    <li>Native list semantics</li>
    <li>Visible focus states</li>
  </ul>
</main>
```

Compose native behavior with library styling when building interfaces:

```html
<article data-card>
  <div data-card-body>
    <layout-stack gap="var(--space-md)">
      <layout-cluster justify="space-between">
        <h2>Deployment</h2>
        <badge status="success">Healthy</badge>
      </layout-cluster>
      <progress value="82" max="100">82%</progress>
      <button type="button" class="stack-intrinsic">View logs</button>
    </layout-stack>
  </div>
</article>
```

For behavior-bearing components, keep the platform primitive:

- Use `<dialog data-modal>` for dialogs.
- Use `[popover]` and `popovertarget` for popovers.
- Use `<details>` and `<summary>` for disclosure.
- Use native `<table>` markup inside `data-table`, `[data-table-scroll]`, or
  `.table-scroll` when responsive overflow is needed.
- Use `role="tablist"`, `role="tab"`, and `role="tabpanel"` for semantic tabs;
  use the documented `<details>` pattern when no-JavaScript disclosure is the
  desired behavior.

## Public entry points

- `css-tags` and `css-tags/index.css`: complete layered stylesheet
- `css-tags/types`: global custom-tag declarations
- `css-tags/core/*.css`: tokens, theme, defaults, and typography
- `css-tags/components/*.css`: component-level styles
- `css-tags/layouts/*.css`: layout primitives
- `css-tags/utilities/*.css`: utility layer
- `css-tags/themes/*.css`: optional themes
- `css-tags/carousel.js`: optional carousel enhancement
- `css-tags/view-transition.js`: optional same-document transition enhancement

Prefer the complete entry point unless you deliberately reproduce its
dependency and cascade-layer order.

## Cascade contract

The aggregate entry point declares this order:

```css
@layer base, reset, tokens, engine, theme, palette, defaults,
       components, utilities, layouts, website-theme;
```

Application CSS can override component tokens locally or add its own trailing
theme layer after importing CSS Tags.

## TypeScript

The package exposes global DOM and JSX declarations. When a framework does not
discover them automatically, add one reference in an included declaration
file:

```ts
/// <reference types="css-tags" />
```

The declarations type the custom styling hosts and their finite attributes.
Class and `data-*` hosts remain the native element types chosen by the
application. Framework-owned JSX namespaces may need a small local adapter;
see the [TypeScript guide](https://doeixd.github.io/CSS-Tags/guides/typescript/).

## Browser baseline

The complete theme requires CSS relative color syntax and the layout/component
files use native CSS nesting. The supported baseline is:

| Browser | Baseline |
|:--|:--|
| Chrome / Edge | 119+ |
| Firefox | 128+ |
| Safari | 16.5+ |

Popover, Anchor Positioning, customizable selects, View Transitions, and other
newer features are progressive enhancements. Their documentation identifies
the native or ordinary-layout fallback.

## Documentation

- [Documentation site](https://doeixd.github.io/CSS-Tags/)
- [Getting started](https://doeixd.github.io/CSS-Tags/guides/getting-started/)
- [Styling default HTML](https://doeixd.github.io/CSS-Tags/guides/default-html/)
- [Components](https://doeixd.github.io/CSS-Tags/components/card/)
- [Layouts](https://doeixd.github.io/CSS-Tags/layouts/layout/)
- [Theming](https://doeixd.github.io/CSS-Tags/guides/theming/)
- [Public API reference](https://doeixd.github.io/CSS-Tags/reference/api/)
- [Examples](https://doeixd.github.io/CSS-Tags/examples/examples/)

## Development checks

The production documentation imports the repository's real `index.css` and
uses isolated, resizable previews. Its build audit verifies routes, internal
links, public import paths, representative API contracts, and example markup:

```bash
cd website-next
npm ci
npm run check
```

Before publishing, inspect the exact package contents:

```bash
npm pack --dry-run
```

## License

[MIT](./LICENSE)
