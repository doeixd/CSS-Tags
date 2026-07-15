# Divider

Dividers separate related regions without introducing a new content surface.
CSS Tags styles the semantic native `<hr>` and provides `divider`,
`[data-divider]`, and `.divider` hosts for horizontal or vertical separators.

## Prefer semantic HTML

Use `<hr>` when the content itself changes topic. It already has separator
semantics and is horizontal by default.

```html
<section>
  <h2>Account</h2>
  <p>Manage profile and security settings.</p>
  <hr>
  <h2>Billing</h2>
  <p>Manage invoices and payment methods.</p>
</section>
```

Use another host when the line belongs to a layout rather than the document
outline. Add `role="separator"` when it conveys a meaningful boundary. Add
`aria-hidden="true"` when it is purely decorative.

```html
<layout-cluster gap="0" align="stretch">
  <span>Overview</span>
  <divider role="separator" aria-orientation="vertical"></divider>
  <span>Activity</span>
</layout-cluster>
```

## Public hosts

```html
<hr>
<divider role="separator"></divider>
<div data-divider role="separator"></div>
<div class="divider" role="separator"></div>
```

The custom element, data host, and class host share the same visual API. The
native `<hr>` remains the best choice for a semantic horizontal rule.

## Orientation

Horizontal is the default. For a meaningful vertical separator, use
`aria-orientation="vertical"`; the ARIA state is also the styling hook.
`orientation="vertical"` and the boolean `vertical` attribute are supported as
visual conveniences, but they do not add accessibility semantics.

```html
<divider role="separator" aria-orientation="vertical"></divider>
<div data-divider orientation="vertical" aria-hidden="true"></div>
```

Vertical dividers stretch to the cross-size of a flex or cluster layout and
have a small minimum length when no containing layout provides one.

## Strength

Use `strength` to select a semantic theme role:

```html
<hr strength="muted">
<hr strength="subtle">
<hr strength="default">
<hr strength="overt">
<hr strength="accent">
```

Available values are `muted`, `subtle`, `default`, `overt`, and `accent`.
Subtle is the default.

## Tokens

- `--divider-color`: local color override
- `--divider-color-muted`: muted role color
- `--divider-color-subtle`: default subtle role color
- `--divider-color-default`: standard outline role color
- `--divider-color-overt`: high-emphasis outline role color
- `--divider-color-accent`: accent role color
- `--divider-size`: line thickness
- `--divider-style`: border style, such as `solid`, `dashed`, or `dotted`
- `--divider-gap`: surrounding block gap for horizontal dividers and inline gap for vertical dividers
- `--divider-length`: inline length when horizontal or block length when vertical
- `--divider-min-length`: minimum block length for vertical dividers

The legacy `--hr-color` token now aliases `--divider-color-subtle`.

```html
<hr style="--divider-size: 2px; --divider-style: dashed; --divider-color: var(--accent);">
```

For repeated customization, set divider tokens on a theme or containing
component instead of applying local styles.

## List dividers

`list-divider`, `[data-list-divider]`, and `.list-divider` remain scoped to the
list component. They now inherit the shared divider color and size system and
can be customized with `--list-divider-color` and `--list-divider-size`.

```html
<list>
  <list-item>Profile</list-item>
  <list-divider></list-divider>
  <list-item>Security</list-item>
</list>
```

## Accessibility

- Native `<hr>` has separator semantics automatically.
- Give meaningful non-native hosts `role="separator"`.
- Add `aria-orientation="vertical"` to meaningful vertical separators.
- Use `aria-hidden="true"` for decorative lines.
- A divider should not be focusable or used as the only indication of a state change.
- Forced-colors mode uses the system text color so separators remain visible.
