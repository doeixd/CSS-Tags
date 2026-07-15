# Navigation Component Documentation

## Overview
The `navigation` component provides responsive navbar and sidebar components with mobile-first design. It uses container queries for responsive behavior and scoped styling to prevent conflicts.

## Key Features
- **Scoped Styling**: Uses `@scope` to isolate navigation styles
- **Responsive Design**: Container queries for mobile adaptation
- **Two Variants**: Navbar and sidebar layouts
- **Mobile Menu**: Collapsible navigation for small screens
- **Design Tokens**: Integrated with the framework's color system

## Components

### Navbar (`nav-navbar`)
Horizontal navigation bar with brand, links, and mobile toggle.

#### Features
- **Sticky Positioning**: Sticks to top of viewport
- **Brand Area**: For logo or site title
- **Navigation Links**: Horizontal list of links
- **Mobile Toggle**: Hamburger menu button for small screens
- **Responsive**: Links stack vertically on mobile

### Sidebar (`nav-sidebar`)
Vertical navigation sidebar with scrollable content.

#### Features
- **Fixed Width**: Configurable width (default: 250px)
- **Scrollable**: Auto-scroll for long navigation lists
- **Section Grouping**: Support for navigation sections
- **Link Styling**: Hover effects and active states

## Attributes

### Navbar Attributes
- `container-type`: `inline-size` (set internally)
- `container-name`: `navbar-container` (set internally)

### Sidebar Attributes
- `width`: Sidebar width (default: `250px`)

## Structure

### Navbar Structure
```html
<nav-navbar>
  <div class="nav-brand">Brand</div>
  <ul class="nav-links">
    <li><a href="#" class="nav-link">Home</a></li>
    <li><a href="#" class="nav-link">About</a></li>
  </ul>
  <button class="nav-toggle">☰</button>
</nav-navbar>
```

### Sidebar Structure
```html
<nav-sidebar>
  <ul class="sidebar-nav">
    <li><a href="#" class="sidebar-link">Dashboard</a></li>
    <li><a href="#" class="sidebar-link">Settings</a></li>
    <div class="sidebar-section">Admin</div>
    <li><a href="#" class="sidebar-link">Users</a></li>
  </ul>
</nav-sidebar>
```

## Responsive Behavior

### Mobile Navbar (< 768px)
- Navigation links hidden by default
- Toggle button becomes visible
- Active class shows vertical menu overlay
- Full-width dropdown from top

### Desktop Navbar (≥ 768px)
- Horizontal link layout
- Toggle button hidden
- Inline navigation display

## Styling Details

### Common Properties
- **Colors**: Uses design tokens for backgrounds, text, and borders
- **Spacing**: Consistent padding and margins
- **Typography**: Inherited font settings
- **Transitions**: Smooth hover effects

### Navbar Specific
- **Layout**: Flexbox with space-between justification
- **Position**: Sticky top with high z-index
- **Border**: Bottom border for separation

### Sidebar Specific
- **Layout**: Flex column with full height
- **Position**: Sticky top with border right
- **Overflow**: Auto-scroll for content

## CSS Custom Properties Used
- `--spacing-md`, `--spacing-sm`, `--spacing-xs`: Spacing values
- `--bg`: Background colors
- `--surface-default`: Default surface color
- `--outline-subtle`: Subtle border color
- `--z-index-50`: Z-index value (default: 50)
- `--font-size-lg`: Large font size
- `--font-weight-bold`: Bold font weight
- `--text-overt`: Overt text color
- `--text-default`: Default text color
- `--radius-md`: Border radius
- `--highlight-bg-subtle`: Subtle highlight background
- `--highlight-bg-muted`: Muted highlight background
- `--accent-subtle`: Subtle accent color

## Utility Classes
- `.nav-link-active`: Active navigation link styling
- `.nav-links.active`: Shows mobile menu (JavaScript-controlled)

## Browser Support
- **@scope**: Chrome 118+, Firefox 128+ (limited support)
- **Container Queries**: Chrome 105+, Firefox 110+, Safari 16+
- **CSS Nesting**: Modern browsers
- **Fallback**: Basic styling without scoping in unsupported browsers

## JavaScript Integration
The mobile menu requires JavaScript to:
- Toggle `.active` class on `.nav-links`
- Handle toggle button clicks
- Manage focus and accessibility

## Accessibility
- **Keyboard Navigation**: Focus management for mobile menu
- **Screen Readers**: Proper semantic structure
- **Focus Indicators**: Visible focus outlines
- **ARIA**: May need `aria-expanded` for toggle button

## Use Cases
- **Website Navigation**: Main site navigation
- **Dashboard Layouts**: Admin panels and data apps
- **Mobile Apps**: Responsive web app navigation
- **Documentation Sites**: Section-based navigation

## Breadcrumbs

Breadcrumbs use a native `nav` landmark and ordered list. Both public host forms are equivalent:

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/components/">Components</a></li>
    <li><span aria-current="page">Navigation</span></li>
  </ol>
</nav>

<nav data-breadcrumbs aria-label="Breadcrumb">...</nav>
```

The list wraps on narrow screens. Separators are decorative generated content, so screen readers announce only the link labels. Customize `--breadcrumbs-gap`, `--breadcrumbs-separator`, `--breadcrumbs-color`, `--breadcrumbs-hover-color`, `--breadcrumbs-current-color`, and `--breadcrumbs-font-size`.

## Pagination

Use anchors for location-changing pages. Use buttons only when paging client-side data without changing the URL.

```html
<nav data-pagination aria-label="Pagination">
  <a class="pagination-previous" href="?page=2">Previous</a>
  <ol>
    <li><a href="?page=1">1</a></li>
    <li><a href="?page=2">2</a></li>
    <li><a href="?page=3" aria-current="page">3</a></li>
    <li><a href="?page=4">4</a></li>
  </ol>
  <a class="pagination-next" href="?page=4">Next</a>
</nav>
```

`nav.pagination` is the class-host equivalent. Add `data-size="compact"` for dense interfaces or `data-surface="footer"` for an opt-in top divider. A disabled anchor should omit `href` and set `aria-disabled="true"`; do not rely on its appearance alone.

Pagination hooks include `--pagination-gap`, `--pagination-target-size`, `--pagination-padding-inline`, `--pagination-radius`, `--pagination-background`, `--pagination-hover-background`, `--pagination-current-background`, `--pagination-current-color`, and `--pagination-disabled-opacity`.
