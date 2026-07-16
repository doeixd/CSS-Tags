# npm Installation and Package Usage

CSS Tags ships as the `css-tags` package. The package entry point is the full
layered stylesheet, and its type entry point installs the custom-tag DOM and
JSX globals.

## Install

```bash
npm install css-tags
```

```css
@import "css-tags";
```

Bundlers that accept CSS side-effect imports can use:

```js
import "css-tags";
```

For a no-build page:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css-tags@0.1.0/index.css">
```

## Types

The package exposes `types/css-tags.d.ts` through its root `types` condition.
If your framework does not discover global package declarations automatically,
add this once to an environment declaration file:

```ts
/// <reference types="css-tags" />
```

This types `document.createElement("card")`, global JSX custom tags, and finite
attributes such as badge status and layout side. Normal class and `data-*`
hosts remain ordinary native elements.

## Entry points

- `css-tags`: complete layered stylesheet plus type declarations
- `css-tags/index.css`: explicit complete stylesheet
- `css-tags/types`: declaration file
- `css-tags/components/*.css`: individual component files
- `css-tags/core/*.css`, `css-tags/layouts/*.css`, and `css-tags/themes/*.css`
- `css-tags/carousel.js` and `css-tags/view-transition.js`: optional behavior

When importing individual files, preserve the dependency order documented by
`index.css`. The complete entry point is recommended for most applications.

## Add an exported theme

Load a generated theme after the package:

```css
@import "css-tags";
@import "./my-theme.css";
```

The theme creator emits a new `css-tags-theme` layer. Because the theme file is
loaded after the package, that layer is appended after the library layers and
its token declarations win without selector escalation or `!important`.

## Package contents

The npm tarball intentionally excludes documentation source, demos, build
artifacts, and development scripts. `npm pack --dry-run` is the authoritative
check for the public package boundary.
