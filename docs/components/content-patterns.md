# Content Patterns

CSS Tags includes composable content headers, media objects, and empty states.
Each pattern supports a custom element, `data-*` host, and class host. Optional
children can be identified with a `slot` label, matching `data-*` region, or
matching class.

These `slot` attributes label light-DOM regions for CSS. They do not create
Shadow DOM or distribute content. Use the data or class form when a template
system reserves or consumes `slot`.

## Content header

```html
<content-header>
  <user-avatar slot="media">CT</user-avatar>
  <div slot="body">
    <eyebrow>Workspace</eyebrow>
    <h1>Design system</h1>
    <p>Tokens, components, and documentation.</p>
  </div>
  <div slot="meta"><span>Updated today</span><badge>Public</badge></div>
  <div slot="actions"><button>Share</button><button>New page</button></div>
</content-header>
```

Equivalent hosts are `content-header`, `[data-content-header]`, and
`.content-header`. Region aliases follow the same pattern:

| Region | Slot | Data hook | Class hook |
| --- | --- | --- | --- |
| Media | `slot="media"` | `data-content-header-media` | `.content-header__media` |
| Body | `slot="body"` | `data-content-header-body` | `.content-header__body` |
| Eyebrow | `slot="eyebrow"` | `data-content-header-eyebrow` | `.content-header__eyebrow` |
| Metadata | `slot="meta"` | `data-content-header-meta` | `.content-header__meta` |
| Actions | `slot="actions"` | `data-content-header-actions` | `.content-header__actions` |

## Media object

Use a media object for a comment, result, notification, profile row, or other
piece of content with optional leading media and trailing actions.

```html
<article data-media-object>
  <user-avatar data-media-object-media>AM</user-avatar>
  <div data-media-object-body>
    <h2>Alex Morgan</h2>
    <p>Published the release notes.</p>
  </div>
  <div data-media-object-actions><button>View</button></div>
</article>
```

Hosts are `media-object`, `[data-media-object]`, and `.media-object`. Its
regions are `media`, `body`, and `actions`, expressed as a slot label,
`data-media-object-*`, or `.media-object__*`.

## Empty state

```html
<section class="empty-state" aria-labelledby="empty-title">
  <span class="empty-state__media" aria-hidden="true">◇</span>
  <div class="empty-state__body">
    <h2 id="empty-title">No projects yet</h2>
    <p>Create a project to collect your work.</p>
  </div>
  <div class="empty-state__actions"><button>Create project</button></div>
</section>
```

Hosts are `empty-state`, `[data-empty-state]`, and `.empty-state`. Its regions
are `media`, `body`, and `actions`, with the same slot/data/class forms.

An empty state is visual structure, not a fixed announcement role. Choose
`role="status"` only when the empty state appears dynamically and should be
announced. For a normal initial page state, a labelled `section` is usually
more appropriate.

## Parent-aware enhancement and fallback

All three components use a simple stacked grid as their baseline. Inside
`@supports selector(:has(*))`, the parent detects direct optional media and
action regions and assigns the appropriate columns and spacing. Browsers
without `:has()` still receive a complete, readable stacked layout.

Keep optional regions as direct children. A wrapper between the host and a
region prevents the direct-child contract from matching. The body region is
the intended wrapper for arbitrary content.

## Custom properties

The most useful controls include:

- Content header: `--content-header-gap`, `--content-header-padding`,
  `--content-header-body-gap`, `--content-header-region-gap`,
  `--content-header-media-size`, and `--content-header-meta-color`.
- Media object: `--media-object-gap`, `--media-object-align`,
  `--media-object-padding`, `--media-object-border`,
  `--media-object-radius`, `--media-object-background`, and
  `--media-object-media-size`.
- Empty state: `--empty-state-max-width`, `--empty-state-gap`,
  `--empty-state-padding`, `--empty-state-border-*`,
  `--empty-state-radius`, `--empty-state-background`, and
  `--empty-state-media-size`.

Component variables fall back to the semantic spacing, surface, outline,
radius, and text tokens, so theme changes continue to propagate.
