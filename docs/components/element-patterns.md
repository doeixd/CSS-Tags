# Element patterns

CSS Tags includes native-first APIs for the element gaps identified in the
Graffiti UI comparison. Importing `index.css` includes all of these patterns.

## Actions

Use a real labelled button for icon-only and floating actions:

```html
<button class="icon-button" aria-label="Close">×</button>
<button class="fab" aria-label="Create project">+</button>
```

`[data-icon-button]` and `[data-fab]` are equivalent class-free hosts.
`<icon-button>` and `<floating-action>` are visual hosts only and do not gain
native button behavior automatically.

## Switch

```html
<label>
  <span>Publish automatically</span>
  <input type="checkbox" role="switch">
</label>
```

The checkbox supplies keyboard interaction, form submission, and checked and
disabled state. The ARIA role is the styling contract.

## Input group and search

```html
<input-group data-stack="auto">
  <span class="input-affix">https://</span>
  <input class="form-input" aria-label="Project domain">
  <button class="form-button">Save</button>
</input-group>

<search-input>
  <span aria-hidden="true">⌕</span>
  <input type="search" aria-label="Search projects">
</search-input>
```

Input groups connect adjacent controls. Search input supplies an icon/content
slot before and after the native `input type="search"`.

## File dropzone

```html
<file-dropzone>
  <strong>Drop files here or choose files</strong>
  <small>PNG, JPG, or WebP</small>
  <input type="file" multiple aria-label="Upload images">
</file-dropzone>
```

The transparent native input covers the surface, so clicking and dropping work
without replacing the browser control. JavaScript may set
`data-dragover="true"` and render a file summary as progressive enhancements.

## Rating and reactions

```html
<rating-output style="--rating-value: 80%" aria-label="4 out of 5 stars">
  ★★★★★
</rating-output>

<fieldset>
  <legend>Rate this example</legend>
  <rating-input>
    <label aria-label="5 stars"><input type="radio" name="rating" value="5">★</label>
    <label aria-label="4 stars"><input type="radio" name="rating" value="4">★</label>
    <label aria-label="3 stars"><input type="radio" name="rating" value="3">★</label>
    <label aria-label="2 stars"><input type="radio" name="rating" value="2">★</label>
    <label aria-label="1 star"><input type="radio" name="rating" value="1">★</label>
  </rating-input>
</fieldset>

<reaction-select>
  <select class="form-select" aria-label="Add reaction">
    <option value="">Add reaction</option>
    <option value="like">👍 Like</option>
    <option value="love">❤️ Love</option>
  </select>
</reaction-select>
```

Ratings use native radios. Reactions use a normal select and opt into
customizable select only where `appearance: base-select` is supported.

## Avatar

```html
<user-avatar aria-label="Ada Lovelace">AL</user-avatar>
<user-avatar><img src="ada.jpg" alt="Ada Lovelace"></user-avatar>
```

Use `size="sm|lg"`, `shape="square"`, or the equivalent `data-*` attributes.
`avatar-group`, `[data-avatar-group]`, and `.avatar-group` provide overlap.

## Toolbar and navigation

```html
<div class="toolbar" role="toolbar" aria-label="Editor actions">
  <div class="toolbar-group">
    <button class="icon-button" aria-label="Undo">↶</button>
    <button class="icon-button" aria-label="Redo">↷</button>
  </div>
  <span class="toolbar-spacer"></span>
  <button class="form-button">Publish</button>
</div>

<nav aria-label="Projects">
  <ul class="list-navigation">
    <li><a href="#" aria-current="page"><span>◆</span><span class="list-navigation-label"><strong>Atlas</strong><small class="list-navigation-description">Production</small></span><span>›</span></a></li>
  </ul>
</nav>
```

Use `role="toolbar"` only for a related control group. List navigation expects
native links or buttons, supports descriptions and trailing metadata, and
styles `aria-current="page"`. Icon rail similarly expects labelled native
links or buttons.

## Bubble, log card, and snap feed

```html
<div class="chat" aria-label="Conversation">
  <message-bubble data-sender="other">Can you review this?</message-bubble>
  <message-bubble data-sender="self">Yes, sending notes now.</message-bubble>
</div>

<log-card>
  <div class="log-card-header"><strong>Deploy</strong><badge status="success">Passed</badge></div>
  <div class="log-card-body" role="log" aria-live="polite">
    <div class="log-row log-row-success"><span>Build completed</span><time>12:04</time></div>
  </div>
</log-card>

<snap-feed aria-label="Updates">
  <article>First full-height item</article>
  <article>Second full-height item</article>
</snap-feed>
```

`aria-busy="true"` adds a visual thinking state to a bubble, but live updates
still need an appropriate live-region strategy. A log body can use `role="log"`
when new rows are appended. Snap feed is vertical; horizontal scrolling remains
the responsibility of `layout-reel` and `carousel`.

## Host forms

Surface/layout patterns support custom, data, and class hosts:

- `input-group`, `[data-input-group]`, `.input-group`
- `search-input`, `[data-search-input]`, `.search-input`
- `file-dropzone`, `[data-file-dropzone]`, `.file-dropzone`
- `rating-output`, `[data-rating-output]`, `.rating-output`
- `rating-input`, `[data-rating-input]`, `.rating-input`
- `reaction-select`, `[data-reaction-select]`, `.reaction-select`
- `user-avatar`, `[data-avatar]`, `.avatar`
- `tool-bar`, `[data-toolbar]`, `.toolbar`
- `nav-list`, `[data-list-navigation]`, `.list-navigation`
- `icon-rail`, `[data-icon-rail]`, `.icon-rail`
- `message-bubble`, `[data-bubble]`, `.bubble`
- `log-card`, `[data-log-card]`, `.log-card`
- `snap-feed`, `[data-snap-feed]`, `.snap-feed`

