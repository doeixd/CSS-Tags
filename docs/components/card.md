# Card Component Documentation

## Overview
The `card` component is a responsive, self-contained surface that adapts its layout based on its container size. Explicit host and part selectors keep its API available as custom elements, classes, or `data-*` attributes.

## Key Features
- **Container Queries**: Layout adapts to the card's own width, not viewport
- **Explicit Styling**: Selectors target card hosts and named card parts
- **Responsive Design**: Switches from vertical to horizontal layout at 32rem
- **Elevation Effects**: Hover animations with shadow changes
- **Flexible Content**: Supports media, header, content, and footer sections

## Structure
The card component consists of several semantic elements:

- `card-media`: Image or media content (16:9 aspect ratio by default)
- `card-body`: Main content container
- `card-header`: Card title (larger, bold text)
- `card-content`: Primary content (flexible growth)
- `card-footer`: Footer content (smaller, muted text)

## Layout Behavior

### Narrow Layout (< 32rem)
- Vertical stack layout
- Media at top (16:9 aspect ratio)
- Body content below

### Wide Layout (≥ 32rem)
- Horizontal layout
- Media on left (150px square)
- Body content on right (60% width)

## Styling Customization
The card supports several CSS custom properties for customization:

- `--card-background`, `--card-color`
- `--card-border-color`, `--card-border-width`
- `--card-radius`, `--card-padding`, `--card-gap`
- `--card-header-padding`, `--card-header-padding-block-end`
- `--card-footer-padding`, `--card-footer-padding-block-start`
- `--card-shadow`, `--card-hover-transform`, `--card-hover-shadow`

## Usage Example
```html
<card>
  <card-media>
    <img src="image.jpg" alt="Card image">
  </card-media>
  <card-body>
    <card-header>Card Title</card-header>
    <card-content>
      <p>Main content of the card goes here.</p>
    </card-content>
    <card-footer>
      <small>Footer information</small>
    </card-footer>
  </card-body>
</card>
```

## Customization

Cards expose `--card-background`, `--card-color`, `--card-border-color`,
`--card-border-width`, `--card-radius`, `--card-padding`, and `--card-gap`.
The variables can be set directly on one card or inherited from a surrounding
region:

```css
.pricing-grid {
  --card-padding: 2rem;
  --card-radius: 1rem;
}

.pricing-grid > card[data-featured] {
  --card-border-color: var(--accent);
}
```

Card internals consume these public variables through private computed aliases,
so a scoped ancestor override is not accidentally replaced on every card.

`card-header` and `card-footer` use the card inset when they are direct children
of a card. When they are nested in `card-body`, the body owns the inset instead,
so padding is never doubled.

## Hover Effects
- **Transform**: Moves up 2px by default
- **Elevation**: Flat by default; opt in with `--card-hover-shadow` and
  `--card-hover-transform`

## Technical Implementation

### Selector scope
```css
:is(card, [data-card], .card) { /* card host */ }
:is(card-body, [data-card-body], .card-body) { /* card body */ }
```
Explicit host and part selectors prevent unrelated content from receiving card layout.

### Container Queries
```css
@container card-container (min-width: 32rem) {
  /* Styles applied when card is at least 32rem wide */
}
```
The card establishes itself as a container with `container-type: inline-size`.

### CSS Nesting
Uses native CSS nesting for organized, hierarchical styles.

## Browser Support
- Container queries (Chrome 105+, Firefox 110+, Safari 16+)
- CSS nesting (all modern browsers)
- Fallback: Cards display in vertical layout in unsupported browsers

## Accessibility
- Semantic structure with proper content hierarchy
- Hover effects respect `prefers-reduced-motion`
- Color contrast maintained through theme variables
- Keyboard navigation support (inherited from base styles)
