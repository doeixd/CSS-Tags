---
title: Badge Component
description: The badge component provides small, inline labels or indicators for displaying status, counts, or metadata. It supports various sizes, roles, and status variant
---

## Overview
The badge component provides small, inline labels or indicators for displaying status, counts, or metadata. It supports various sizes, roles, and status variants for different visual emphasis levels.

## Base Structure
```css
badge {
  /* Inline flex container with rounded appearance */
}
```

## Variants

### Size Variants
- `badge[size="sm"]` - Small badge with reduced padding and smaller font
- `badge[size="md"]` - Medium badge (default)
- `badge[size="lg"]` - Large badge with increased padding and larger font

### Role Variants
- `badge[role="subtle"]` - Subtle background for less prominent badges
- `badge[role="default"]` - Default background (overt role)
- `badge[role="muted"]` - Muted background for minimal emphasis

### Status Variants
- `badge[status="success"]` - Green-themed success badge
- `badge[status="warning"]` - Yellow/orange-themed warning badge
- `badge[status="error"]` - Red-themed error badge
- `badge[status="info"]` - Blue-themed info badge

## Usage Example
```html
<badge status="success">New</badge>
<badge size="sm" role="subtle">Beta</badge>
<badge status="warning" size="lg">Important</badge>
```

## CSS Custom Properties Used
- `--_gap` - Gap between badge content and any icons
- `--role` - Surface role for background color (default: overt)
- `--bg` - Background color
- `--border` - Border color
- `--border-width` - Border width (default: 1px)
- `--radius-full` - Border radius for pill shape (default: 9999px)
- `--b-bg`, `--b-bw`, `--b-bc`, `--b-r`, `--b-px`, `--b-py` - Internal badge styling variables

## Accessibility
- Uses semantic colors that adapt to theme changes
- Auto-contrast text ensures readability on any background
- Supports high contrast mode
- Small font size may require consideration for readability

## Notes
- The badge element is custom (not native HTML)
- Designed for inline use within other components
- Font size scales with size variants for proper proportion