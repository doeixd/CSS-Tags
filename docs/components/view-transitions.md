# View Transitions Component Documentation

## Overview
The `view-transitions.css` file provides styles for the native View Transitions API, enabling smooth, app-like transitions between page states or full page loads. It includes default animations and support for shared element transitions.

## Key Features
- **Page Transitions**: Smooth animations for multi-page apps (MPA)
- **SPA Support**: Integration with `<view-page>` component
- **Shared Elements**: "Hero" element transitions with `view-transition-name`
- **Custom Easing**: Natural motion with `cubic-bezier` functions
- **JavaScript Integration**: Works with `view-transitions.js` for routing

## Setup Requirements

### Multi-Page Apps (MPA)
Add to HTML head:
```html
<meta name="view-transition" content="same-origin" />
```
Standard link clicks will automatically use transitions.

### Single-Page Apps (SPA)
Use with `view-transitions.js`:
```html
<view-transitions>
  <view-page active>Home content</view-page>
  <view-page>About content</view-page>
</view-transitions>
```

## Transition Types

### Root Transition
Default animation for entire page content.

#### Old Page (::view-transition-old(root))
- **Animation**: `slide-to-left-fade-out`
- **Duration**: 400ms
- **Easing**: `cubic-bezier(0.45, 0, 0.55, 1)`
- **Effect**: Slides left while fading out

#### New Page (::view-transition-new(root))
- **Animation**: `slide-from-right-fade-in`
- **Duration**: 400ms
- **Easing**: `cubic-bezier(0.45, 0, 0.55, 1)`
- **Effect**: Slides in from right while fading in

### Shared Element Transition
For elements that persist across page changes.

#### Usage
```css
.hero-image {
  view-transition-name: product-image-123;
}
```

#### Styling (::view-transition-group(hero-element))
- **Easing**: `cubic-bezier(0.76, 0, 0.24, 1)` (spring-like)
- **Effect**: Smooth morphing between positions

## SPA-Specific Elements

### view-transitions
Container for all virtual pages.
- **Position**: Relative
- **Display**: Block

### view-page
Individual page content.
- **Display**: None by default
- **Active State**: `view-page[active]` shows `display: block`

## Keyframe Definitions

### slide-to-left-fade-out
```css
@keyframes slide-to-left-fade-out {
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-50px); }
}
```

### slide-from-right-fade-in
```css
@keyframes slide-from-right-fade-in {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
```

## Usage Examples

### MPA Setup
```html
<head>
  <meta name="view-transition" content="same-origin" />
  <link rel="stylesheet" href="view-transitions.css" />
</head>
<body>
  <!-- Page content -->
</body>
```

### SPA Setup
```html
<view-transitions>
  <nav-trigger href="/home">Home</nav-trigger>
  <nav-trigger href="/about">About</nav-trigger>

  <view-page active id="home">
    <h1>Home Page</h1>
    <img class="hero" view-transition-name="hero-image" src="home.jpg" />
  </view-page>

  <view-page id="about">
    <h2>About Page</h2>
    <img class="hero" view-transition-name="hero-image" src="about.jpg" />
  </view-page>
</view-transitions>

<script src="view-transitions.js"></script>
```

## Browser Support
- **Chrome 111+**: Full support
- **Edge 111+**: Full support
- **Firefox**: Behind flag (layout.css.view-transitions.enabled)
- **Safari**: Not supported
- **Fallback**: Instant page changes without animation

## JavaScript Integration
Works with `view-transitions.js` for:
- SPA routing logic
- `nav-trigger` click handling
- Page switching with `active` attribute
- History API integration

## Performance Considerations
- **GPU Acceleration**: Transforms use GPU for smooth animation
- **Memory Usage**: Screenshots of old/new pages stored temporarily
- **Large Pages**: May impact performance on complex layouts
- **Optimization**: Use `content-visibility` to improve rendering

## Accessibility
- **Motion Preferences**: Respects `prefers-reduced-motion`
- **Screen Readers**: Content changes announced properly
- **Focus Management**: Maintains focus during transitions
- **Loading States**: Clear visual feedback during navigation

## Customization
Override default animations:
```css
::view-transition-old(root) {
  animation-name: custom-slide-out;
}

::view-transition-new(root) {
  animation-name: custom-slide-in;
}
```

## Use Cases
- **Page Navigation**: Smooth MPA transitions
- **App-like SPAs**: Native app feel for web apps
- **Product Galleries**: Image transitions with shared elements
- **Content Changes**: Smooth state transitions
- **Progressive Enhancement**: Enhanced navigation experience