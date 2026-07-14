# Disclosure Documentation

## Overview
The disclosure layer provides better defaults for native `details` and `summary`, plus accordion and no-JS details-based tab patterns.

## Basic Disclosure
```html
<details>
  <summary>More information</summary>
  <p>Native disclosure content.</p>
</details>
```

## Accordion
```html
<div class="accordion" data-accordion>
  <details name="faq" open>
    <summary>Question one</summary>
    <p>Answer one.</p>
  </details>
  <details name="faq">
    <summary>Question two</summary>
    <p>Answer two.</p>
  </details>
</div>
```

## Details Tabs
```html
<div class="tabs-details" data-tabs-details>
  <details name="product-tabs" open>
    <summary>Overview</summary>
    <p>Works without JavaScript.</p>
  </details>
  <details name="product-tabs">
    <summary>API</summary>
    <p>Exclusive panels in supporting browsers.</p>
  </details>
</div>
```

## Tokens
- `--disclosure-border`
- `--disclosure-background`
- `--disclosure-summary-background`
- `--disclosure-summary-color`
- `--disclosure-summary-hover-background`
- `--disclosure-summary-hover-color`
- `--disclosure-content-background`
- `--disclosure-radius`
- `--disclosure-padding`
- `--disclosure-gap`
- `--accordion-gap`

## Notes
- `details`/`summary` are the recommended no-JS disclosure path.
- `details` with shared `name` is useful for accordions and disclosure-driven tab-like interfaces.
- ARIA tabs remain the better choice when you need formal tab semantics and keyboard-controlled panel activation.
