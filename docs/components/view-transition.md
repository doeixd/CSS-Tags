# View Transitions (`components/view-transition.css`)

The stylesheet provides root View Transition animations and a progressive same-document view router.

For same-origin cross-document navigation, opt both pages in with CSS:

```css
@view-transition {
  navigation: auto;
}
```

For same-document views, prefer semantic hash links and data hosts:

```html
<div data-view-transitions>
  <a data-view-trigger href="#summary">Summary</a>
  <a data-view-trigger href="#activity">Activity</a>

  <section data-view-page id="summary" active>Summary</section>
  <section data-view-page id="activity">Activity</section>
</div>

<script type="module" src="/view-transition.js"></script>
```

Router hosts: `view-transitions`, `view-transition`, `[data-view-transitions]`, `.view-transitions`.

Page hosts: `view-page`, `[data-view-page]`, `.view-page`.

Without JavaScript, `:target` displays the linked page. With JavaScript, changes use the View Transitions API when available, synchronize history, update `aria-current`, and focus the activated page. Reduced-motion preferences disable animation.

Customize `--view-transition-duration`, `--view-transition-easing`, and `--view-transition-hero-easing`. Shared elements receive a unique `view-transition-name` CSS property.
