# Theme Generator Integration Guide

The `theme-generator.css` file provides a standalone color theme system that can be used independently or integrated with the main framework. This guide explains how to integrate it while maintaining its standalone nature.

## Integration Options

### Option 1: Standalone Usage (Recommended)

Use the theme generator as a completely separate system:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Only include theme-generator.css -->
  <link rel="stylesheet" href="theme-generator.css">
</head>
<body>
  <!-- Use theme generator classes -->
  <main class="bg-base text-on-base">
    <button class="button-primary">Click me</button>
  </main>
</body>
</html>
```

**Pros:**
- No conflicts with existing framework
- Self-contained and portable
- Easy to customize per project

**Cons:**
- Duplicates some functionality
- Doesn't leverage existing tokens

### Option 2: Hybrid Integration

Import theme generator alongside the main framework:

```css
/* In your main CSS file */
@import url("index.css");           /* Main framework */
@import url("theme-generator.css"); /* Theme generator (higher specificity) */
```

**Pros:**
- Access to both systems
- Can override framework defaults
- Gradual migration path

**Cons:**
- Potential specificity conflicts
- Maintenance overhead

### Option 3: Framework Extension

Extend the main framework with theme generator variables:

```css
/* In core/theme.css, add imports */
@import url("../theme-generator.css") layer(theme-generator);
```

Then update `index.css` to include it:

```css
@import url("core/theme.css") layer(theme);
@import url("theme-generator.css") layer(theme-generator);
```

## Recommended Integration Approach

For the best balance of standalone functionality and framework integration:

### 1. Keep Theme Generator Standalone

The theme generator remains a separate file that can be used independently.

### 2. Add Optional Import to Index

Modify `index.css` to optionally include the theme generator:

```css
/* At the end of index.css */
@import url("theme-generator.css") layer(theme-generator);
```

### 3. Create Integration Layer

Add a new layer that bridges the systems:

```css
/* In a new file: core/theme-integration.css */
@layer theme-integration {
  /* Map theme generator variables to framework variables where appropriate */
  :root {
    /* Use theme generator colors for framework components */
    --theme-primary: var(--accent);
    --theme-secondary: var(--secondary);
    --theme-surface: var(--surface);
    --theme-text: var(--text);
    /* etc. */
  }
}
```

### 4. Update Documentation

Add to `docs/theming.md`:

```markdown
## Alternative Theme Systems

The framework supports multiple theming approaches:

### Framework Theme System
- Uses `core/theme.css`
- Integrated with design tokens
- Supports brand themes via `themes/`

### Standalone Theme Generator
- Uses `theme-generator.css`
- Self-contained color system
- OKLCH-based with auto-contrast
- Can be used independently or alongside framework

### Integration
Both systems can coexist. The theme generator provides additional utility classes and can override framework defaults when imported later in the cascade.
```

## Migration Strategies

### From Framework to Theme Generator

If you want to switch from the framework's theme system to the theme generator:

1. **Keep existing HTML** - Theme generator classes are similar
2. **Update CSS imports**:
   ```css
   /* Remove framework theme imports */
   /* @import url("core/theme.css") layer(theme); */
   /* @import url("themes/theme-packs.css") layer(theme); */

   /* Add theme generator */
   @import url("theme-generator.css") layer(theme);
   ```
3. **Map custom properties** if needed:
   ```css
   :root {
     /* Map your custom theme variables to theme generator inputs */
     --accent-h: var(--my-brand-hue);
     --accent-c: var(--my-brand-chroma);
     --accent-l: var(--my-brand-lightness);
   }
   ```

### From Theme Generator to Framework

To migrate back to the framework system:

1. **Update class names** to match framework utilities
2. **Remove theme generator import**
3. **Re-enable framework theme imports**
4. **Adjust custom properties** to use framework variables

## Best Practices

### 1. Choose Based on Project Needs

- **Use Theme Generator** for:
  - New projects needing a complete color system
  - Projects requiring OKLCH auto-contrast
  - Standalone components or design systems
  - Rapid prototyping with utility classes

- **Use Framework Theme** for:
  - Existing projects using the framework
  - Complex theming with multiple brand variants
  - Integration with existing component library

### 2. Avoid Conflicts

- Use different class name prefixes if both systems are loaded
- Theme generator uses semantic names (`.bg-surface`, `.text-muted`)
- Framework uses more specific names (`.surface-bg`, `.text-color-muted`)

### 3. Performance Considerations

- Theme generator adds ~50KB of CSS variables
- Consider tree-shaking unused utility classes in production
- Use CSS custom properties for dynamic theming

### 4. Accessibility

- Both systems support high contrast mode
- Theme generator includes Lea Verou's auto-contrast algorithm
- Test color combinations with automated tools

## File Structure Integration

```
css/
├── index.css                    # Main entry point
├── theme-generator.css         # Standalone theme system
├── core/
│   ├── theme.css               # Framework theme
│   └── theme-integration.css   # Bridge between systems
├── themes/
│   └── theme-packs.css         # Brand themes
└── docs/
    ├── theming.md              # Framework theming docs
    └── theme-generator-integration.md  # This file
```

## Example: Complete Integration

```css
/* index.css */
@layer base, reset, tokens, engine, theme, palette, defaults, components, utilities, layouts;

/* Core framework */
@import url("core/reset.css") layer(reset);
@import url("core/tokens.css") layer(tokens);
@import url("core/engine.css") layer(engine);
@import url("core/palette.css") layer(palette);
@import url("core/defaults.css") layer(defaults);

/* Theme system - choose one or both */
@import url("core/theme.css") layer(theme);                    /* Framework theme */
@import url("themes/theme-packs.css") layer(theme);
@import url("theme-generator.css") layer(theme-generator);     /* Standalone generator */

/* Components and utilities */
@import url("components/*.css") layer(components);
@import url("utilities/*.css") layer(utilities);
@import url("layouts/*.css") layer(layouts);
```

```html
<!-- Can use both class systems -->
<div class="bg-surface text-on-surface"> <!-- Theme generator classes -->
  <button class="button-primary">Action</button> <!-- Theme generator -->
</div>

<div class="surface-bg text-color-default"> <!-- Framework classes -->
  <button class="btn-primary">Action</button> <!-- Framework -->
</div>
```

This integration approach maintains the theme generator's standalone nature while allowing seamless integration with the existing framework when needed.