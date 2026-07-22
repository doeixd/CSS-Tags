---
title: Browser Support
description: The tested core baseline, progressive enhancements, and fallback expectations for CSS Tags.
---

CSS Tags separates its complete theme baseline from optional platform
enhancements. This makes support predictable: a browser either meets the core
contract, or an application must provide a compiled/static theme fallback.

## Core baseline

| Browser | Minimum version | Core capability that sets the floor |
|:--|:--|:--|
| Chrome / Edge | 119 | CSS relative color syntax |
| Firefox | 128 | CSS relative color syntax |
| Safari | 16.5 | Native CSS nesting |

The shipped theme derives semantic colors with relative `oklch(from …)` syntax,
and reusable component/layout rules use native nesting. These are core inputs,
not decorative enhancements, so older engines are not claimed as fully
supported.

- [Chrome 119 introduced relative color syntax](https://developer.chrome.com/blog/chrome-119-beta/#css-relative-color-syntax)
- [Firefox 128 enabled relative color syntax by default](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/128#css)
- [Safari 16.5 introduced CSS nesting](https://webkit.org/blog/14154/webkit-features-in-safari-16-5/#css-nesting)

If an application must support an older engine, compile or replace the
generative theme with static semantic token values and flatten nested rules as
part of that application's build. Do not assume an invalid derived custom
property automatically falls back to an earlier `var()` branch.

## Progressive enhancements

The following features are intentionally newer than the core baseline:

| Feature | Baseline behavior without it |
|:--|:--|
| Popover API | Keep critical actions available in ordinary document flow or load a focused polyfill. |
| Anchor Positioning | Tooltips and overlays retain ordinary absolute/fixed positioning contracts. |
| Customizable select | The native `<select>` remains usable and themed by standard control styles. |
| View Transitions | The same link or button updates content without animation. |
| Typed `attr()` values | Component custom properties and declared defaults remain the reliable fallback API. |
| Experimental custom functions/mixins | Shipped baseline components use ordinary CSS; experimental recipes are opt-in. |

Each component page should identify its behavior-bearing native element and
the exact enhancement boundary.

## Compatibility test matrix

Before a release, verify the complete entry point in the latest stable version
of each baseline engine and in the current stable versions. Exercise:

- light, dark, and forced-colors modes;
- reduced motion;
- keyboard-only operation;
- right-to-left direction;
- 200% text and long untranslated content;
- narrow containers rather than viewport width alone;
- no-JavaScript behavior where a native fallback is documented.

Support-table changes belong on this page first. Other guides should link here
rather than maintaining their own version matrix.
