# View Transitions JavaScript (`view-transition.js`)

This JavaScript file implements a simple SPA router that uses the View Transitions API to create smooth, animated page transitions in single-page applications.

## Overview

The script provides navigation functionality for `<view-page>` and `<nav-trigger>` custom elements, enabling animated transitions between different views within a single-page app.

## Key Features

- **View Transitions API Integration**: Uses `document.startViewTransition()` for smooth animations
- **Progressive Enhancement**: Falls back to instant DOM updates when API isn't supported
- **Event Delegation**: Efficient single event listener for all navigation triggers
- **Automatic Initial State**: Sets up initial active page on load

## Custom Elements

### `<nav-trigger>`

Navigation trigger elements that initiate page transitions.

**Attributes:**
- `to`: ID of the target `<view-page>` element

**Example:**
```html
<nav-trigger to="home">Home</nav-trigger>
<nav-trigger to="about">About</nav-trigger>
```

### `<view-page>`

Page containers that are shown/hidden during navigation.

**Attributes:**
- `id`: Unique identifier for the page
- `active`: Boolean attribute set by script to show/hide pages

**Example:**
```html
<view-page id="home">
  <h1>Home Page</h1>
</view-page>
<view-page id="about">
  <h1>About Page</h1>
</view-page>
```

## How It Works

### Page Navigation

1. **Click Detection**: Listens for clicks on `<nav-trigger>` elements
2. **DOM Update Function**: `updateDOM()` toggles `active` attributes on `<view-page>` elements
3. **Transition Wrapping**: If View Transitions API is supported, wraps DOM update in `document.startViewTransition()`
4. **Fallback**: Instant DOM update for unsupported browsers

### Initial Setup

On page load:
- Finds page marked with `active` attribute, or defaults to first `<view-page>`
- Sets initial active states without animation

## Usage in SPA

```html
<body>
  <nav>
    <nav-trigger to="dashboard">Dashboard</nav-trigger>
    <nav-trigger to="settings">Settings</nav-trigger>
  </nav>

  <main>
    <view-page id="dashboard" active>
      <!-- Dashboard content -->
    </view-page>
    <view-page id="settings">
      <!-- Settings content -->
    </view-page>
  </main>

   <script src="view-transition.js"></script>
</body>
```

## Browser Support

- **Modern Browsers**: Full support with View Transitions API (Chrome 111+, Edge 111+)
- **Fallback**: Graceful degradation to instant transitions in older browsers
- **Progressive Enhancement**: Works without JavaScript (pages remain accessible)

## Integration Notes

- **SPA Only**: Designed for single-page applications with client-side routing
- **MPA Alternative**: For multi-page apps, use `<meta name="view-transition" content="same-origin">` instead
- **CSS Required**: Pair with `view-transition.css` for transition animations
- **Event Handling**: Uses event delegation for performance
- **Accessibility**: Maintains focus management and screen reader compatibility

## Technical Details

- **Event Delegation**: Single `click` listener on `document.body` for efficiency
- **Prevent Default**: Stops default link behavior on navigation triggers
- **Attribute Management**: Uses `toggleAttribute()` for clean boolean attribute handling
- **API Detection**: Feature detection for `document.startViewTransition`

## Related Files

- `components/view-transition.css`: CSS animations for transitions
- `examples/demo.html`: May include view transition examples
- View Transitions API specification for advanced customization