# Internationalization (i18n)

This directory contains internationalization resources for the documentation site.

## Current Status

The site currently uses English strings defined in `strings.ts`. All hardcoded strings have been extracted into this centralized file to prepare for future multi-language support.

## Usage

### In Astro Components

```astro
---
import { STRINGS } from '../i18n/strings';
---

<button aria-label={STRINGS.navigation.toggleMenu}>
  Menu
</button>
```

### In TypeScript/JavaScript

```typescript
import { getString } from '../i18n/strings';

const label = getString('navigation.home');
```

## Adding a New Language

To add support for a new language:

1. **Create a new strings file** (e.g., `strings.es.ts` for Spanish):

```typescript
export const STRINGS_ES = {
  navigation: {
    home: "Inicio",
    toggleMenu: "Alternar menú de navegación",
    // ... rest of translations
  },
  // ... rest of sections
} as const;
```

2. **Create a language detection utility** (`src/i18n/locale.ts`):

```typescript
export function getLocale(): string {
  // Detect from URL, localStorage, or browser preference
  return 'en'; // default
}

export function getStrings() {
  const locale = getLocale();
  switch (locale) {
    case 'es': return STRINGS_ES;
    default: return STRINGS;
  }
}
```

3. **Update components** to use the locale-aware getter:

```astro
---
import { getStrings } from '../i18n/locale';
const strings = getStrings();
---

<button>{strings.navigation.home}</button>
```

## String Organization

Strings are organized by feature area:

- `navigation` - Navigation and menu items
- `toc` - Table of contents
- `search` - Search functionality
- `scroll` - Scroll controls
- `theme` - Theme toggle
- `loading` - Loading states
- `a11y` - Accessibility labels
- `actions` - Common action buttons
- `errors` - Error messages

## Best Practices

1. **Always use string constants** instead of hardcoded text
2. **Use descriptive keys** that indicate the context
3. **Include ARIA labels** in the constants
4. **Provide fallbacks** for missing translations
5. **Keep related strings together** in the same section
6. **Document string purpose** with comments for complex or ambiguous labels

## Future Enhancements

- [ ] URL-based language detection (`/es/docs/...`)
- [ ] Language switcher component
- [ ] Automatic locale detection from browser preferences
- [ ] Per-page translation files for documentation content
- [ ] Validation tool to ensure all languages have complete translations
