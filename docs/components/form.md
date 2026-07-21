# Form controls

CSS Tags styles real native form controls. Use the role-specific classes directly on semantic elements:

- `.form-input` for text-like `input` elements
- `.form-select` for `select`
- `.form-textarea` for `textarea`
- `.form-button` for buttons and button-like inputs

```html
<form>
  <label>
    Email
    <input class="form-input" type="email" autocomplete="email">
  </label>

  <label>
    Update frequency
    <select class="form-select" name="updates">
      <option>Weekly</option>
      <option>Important changes only</option>
    </select>
  </label>

  <button class="form-button" type="submit">Save</button>
</form>
```

## Compatible hosts

`[data-form-control]` provides an attribute host when a class is inconvenient. The older `.input-field`, `.input`, `.select`, `.textarea`, and `.form-control` aliases remain supported and share the canonical control tokens and states. Custom form tags are not shipped because native elements provide the required semantics and browser behavior.

```html
<input class="form-input" aria-label="Canonical class">
<input data-form-control aria-label="Data attribute">
<input class="input-field" aria-label="Legacy alias">
```

## Validation and state

Prefer semantic state in markup. `aria-invalid="true"` and the browser's `:user-invalid` state receive error styling; `.input-error` is available when a visual-only hook is necessary. `.input-success` supplies an explicit success state.

```html
<label>
  Project slug
  <input
    class="form-input"
    aria-invalid="true"
    aria-describedby="slug-error"
  >
  <small id="slug-error">Use lowercase letters, numbers, and hyphens.</small>
</label>
```

## Tokens

- `--form-control-padding-block`, `--form-control-padding-inline`
- `--form-control-background`, `--form-control-color`, `--form-control-border-color`
- `--form-control-radius`, `--form-control-hover-border-color`
- `--form-control-focus-border-color`, `--form-control-focus-shadow`
- `--form-control-disabled-background`, `--form-control-disabled-color`, `--form-control-disabled-opacity`
- `--form-textarea-min-block-size`, `--form-textarea-resize`
- `--form-button-background`, `--form-button-color`
- `--form-select-icon-gap`

All controls keep visible keyboard focus. Pair every control with a label, connect help and error text with `aria-describedby`, use native constraint attributes, and group related checkbox or radio controls with `fieldset` and `legend`.
