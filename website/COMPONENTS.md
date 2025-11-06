# Component Documentation

Complete reference for all components in the CSS Tags documentation site boilerplate.

## Table of Contents

### UI Components
- [Accordion](#accordion)
- [Admonition](#admonition)
- [Aside](#aside)
- [Badge](#badge)
- [Button](#button)
- [Card](#card)
- [Figure](#figure)
- [Table](#table)
- [Tabs](#tabs)

### Form Components
- [Checkbox](#checkbox)
- [FormField](#formfield)
- [Input](#input)
- [Radio](#radio)
- [Select](#select)
- [Textarea](#textarea)

### Landing Page Components
- [CTASection](#ctasection)
- [FeatureCard](#featurecard)
- [Features](#features)
- [Hero](#hero)
- [ImageContainer](#imagecontainer)
- [InstallTabs](#installtabs)
- [LandingHeading](#landingheading)
- [TwoColumn](#twocolumn)

### Layout Components
- [Breadcrumbs](#breadcrumbs)
- [Header](#header)
- [MobileHeader](#mobileheader)
- [Navigation](#navigation)
- [PageMeta](#pagemeta)
- [PrevNextNav](#prevnextnav)
- [Search](#search)
- [TableOfContents](#tableofcontents)
- [ThemeToggle](#themetoggle)

### Utility Components
- [KeyboardShortcuts](#keyboardshortcuts)
- [LoadingIndicator](#loadingindicator)
- [ScrollProgress](#scrollprogress)
- [ScrollToTop](#scrolltotop)

---

## UI Components

### Accordion

Collapsible content sections with keyboard navigation.

**Props:**
```typescript
{
  items: Array<{
    title: string;
    content: string;
    id?: string;
  }>;
  multiple?: boolean;        // Allow multiple open sections (default: false)
  defaultOpen?: number[];    // Indices of initially open items
}
```

**Example:**
```astro
---
import Accordion from '../components/Accordion.astro';

const faqItems = [
  { title: 'What is CSS Tags?', content: 'CSS Tags is a CSS library...' },
  { title: 'How do I install?', content: 'You can install via npm...' }
];
---

<Accordion items={faqItems} multiple={false} defaultOpen={[0]} />
```

**Features:**
- Keyboard navigation (Arrow keys, Home, End)
- Smooth animations
- Accessible (ARIA attributes)
- Single or multiple expansion modes

---

### Admonition

Callout boxes for important information (notes, tips, warnings).

**Props:**
```typescript
{
  type: 'note' | 'tip' | 'warning' | 'danger' | 'info' | 'success';
  title?: string;
  collapsible?: boolean;    // Default: false
}
```

**Example:**
```astro
---
import Admonition from '../components/Admonition.astro';
---

<Admonition type="warning" title="Important">
  Make sure to backup your data before proceeding.
</Admonition>

<Admonition type="tip" collapsible>
  You can enable dark mode in the settings.
</Admonition>
```

**Features:**
- 6 semantic types with icons
- Optional custom title
- Collapsible functionality
- Color-coded borders and backgrounds

---

### Aside

Sidebar content for pull quotes or supplementary information.

**Props:**
```typescript
{
  variant: 'default' | 'pull-quote' | 'highlight';
  class?: string;
}
```

**Example:**
```astro
---
import Aside from '../components/Aside.astro';
---

<Aside variant="pull-quote">
  "Design is not just what it looks like, design is how it works."
</Aside>

<Aside variant="highlight">
  Pro tip: Use semantic HTML for better accessibility.
</Aside>
```

---

### Badge

Small labeled status indicators.

**Props:**
```typescript
{
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';          // Default: 'md'
  removable?: boolean;                 // Default: false
  icon?: string;                       // SVG markup
}
```

**Example:**
```astro
---
import Badge from '../components/Badge.astro';
---

<Badge variant="success" size="sm">Active</Badge>
<Badge variant="warning">Beta</Badge>
<Badge variant="info" removable>New</Badge>
```

**Features:**
- 7 color variants
- 3 size options
- Removable with close button
- Icon support

---

### Button

Flexible button component with multiple variants.

**Props:**
```typescript
{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;                        // SVG markup
  iconPosition?: 'left' | 'right';
  href?: string;                        // Renders as <a> if provided
  type?: 'button' | 'submit' | 'reset';
}
```

**Example:**
```astro
---
import Button from '../components/Button.astro';
---

<Button variant="primary" size="lg">Get Started</Button>
<Button variant="outline" href="/docs">Documentation</Button>
<Button variant="secondary" loading>Loading...</Button>
<Button variant="ghost" disabled>Disabled</Button>
```

**Features:**
- 4 visual variants
- 3 size options
- Loading state with spinner
- Icon support (left or right)
- Can render as button or link
- Hover effects and animations

---

### Card

Content container with optional header, body, and footer sections.

**Props:**
```typescript
{
  variant?: 'default' | 'elevated' | 'outlined';
  href?: string;    // Makes entire card clickable
}
```

**Example:**
```astro
---
import Card from '../components/Card.astro';
import Button from '../components/Button.astro';
---

<Card variant="elevated">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here...</p>
  </div>
  <div class="card-footer">
    <Button variant="primary">Action</Button>
  </div>
</Card>

<!-- Clickable card -->
<Card href="/features" variant="outlined">
  <div class="card-body">
    <h3>Feature Name</h3>
    <p>Click anywhere on this card to navigate.</p>
  </div>
</Card>
```

**Features:**
- 3 visual variants
- Optional sections (header, body, footer)
- Clickable card support
- Hover effects
- Flexible content slots

---

### Figure

Image with caption and multiple display variants.

**Props:**
```typescript
{
  src: string;
  alt: string;
  caption?: string;
  variant?: 'default' | 'wide' | 'thumbnail';
  loading?: 'lazy' | 'eager';
}
```

**Example:**
```astro
---
import Figure from '../components/Figure.astro';
---

<Figure
  src="/images/screenshot.png"
  alt="Application screenshot"
  caption="The main dashboard view"
  variant="wide"
/>
```

**Features:**
- 3 size variants
- Caption support
- Lazy loading
- Responsive images

---

### Table

Flexible table component for data display and API documentation.

**Props:**
```typescript
{
  // Simple mode
  headers?: string[];
  rows?: (string | number)[][];

  // Advanced mode
  columns?: Array<{
    key: string;
    label: string;
    align?: 'left' | 'center' | 'right';
    width?: string;
    sortable?: boolean;
  }>;
  data?: object[];

  variant?: 'default' | 'striped' | 'bordered' | 'compact';
  caption?: string;
  stickyHeader?: boolean;
  responsive?: boolean;
}
```

**Example:**
```astro
---
import Table from '../components/Table.astro';

// Simple mode
<Table
  headers={['Name', 'Role', 'Status']}
  rows={[
    ['Alice', 'Developer', 'Active'],
    ['Bob', 'Designer', 'Active']
  ]}
  variant="striped"
/>

// Advanced mode
const columns = [
  { key: 'prop', label: 'Prop', sortable: true },
  { key: 'type', label: 'Type', align: 'center' },
  { key: 'description', label: 'Description' }
];

const props = [
  { prop: 'variant', type: 'string', description: 'Visual style' },
  { prop: 'size', type: 'string', description: 'Component size' }
];
---

<Table
  columns={columns}
  data={props}
  variant="striped"
  caption="Component Props"
  stickyHeader
/>
```

**Features:**
- Simple or advanced usage modes
- Sortable columns
- 4 visual variants
- Sticky header support
- Responsive horizontal scroll
- HTML in cells (code, badges, etc.)
- Dark mode support

---

### Tabs

Tabbed interface with keyboard navigation.

**Props:**
```typescript
{
  defaultTab?: string;    // ID of initially active tab
}
```

**Example:**
```astro
---
import Tabs from '../components/Tabs.astro';
---

<Tabs defaultTab="overview">
  <div role="tablist">
    <button role="tab" data-tab="overview">Overview</button>
    <button role="tab" data-tab="api">API</button>
    <button role="tab" data-tab="examples">Examples</button>
  </div>

  <div role="tabpanel" data-panel="overview">
    <h2>Overview</h2>
    <p>Overview content...</p>
  </div>

  <div role="tabpanel" data-panel="api">
    <h2>API Reference</h2>
    <p>API content...</p>
  </div>

  <div role="tabpanel" data-panel="examples">
    <h2>Examples</h2>
    <p>Examples content...</p>
  </div>
</Tabs>
```

**Features:**
- Full keyboard navigation
- URL hash sync
- Smooth transitions
- Disabled tabs support
- Icon support in tabs
- Accessible (ARIA)

---

## Form Components

### Checkbox

Styled checkbox input with label and validation states.

**Props:**
```typescript
{
  name: string;
  value?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: string;
  required?: boolean;
}
```

**Example:**
```astro
---
import Checkbox from '../components/Checkbox.astro';
---

<Checkbox name="terms" label="I agree to the terms" required />
<Checkbox name="newsletter" label="Subscribe to newsletter" checked />
<Checkbox name="disabled" label="Disabled option" disabled />
```

---

### FormField

Wrapper for form inputs with label, help text, and error display.

**Props:**
```typescript
{
  label?: string;
  help?: string;
  error?: string;
  required?: boolean;
}
```

**Example:**
```astro
---
import FormField from '../components/FormField.astro';
import Input from '../components/Input.astro';
---

<FormField
  label="Email Address"
  help="We'll never share your email"
  required
>
  <Input type="email" name="email" />
</FormField>
```

---

### Input

Text input with variants and validation states.

**Props:**
```typescript
{
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  name: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
}
```

**Example:**
```astro
---
import Input from '../components/Input.astro';
---

<Input type="text" name="username" placeholder="Enter username" required />
<Input type="email" name="email" error="Invalid email address" />
<Input type="password" name="password" size="lg" />
```

---

### Radio

Radio button group with label.

**Props:**
```typescript
{
  name: string;
  value: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
}
```

**Example:**
```astro
---
import Radio from '../components/Radio.astro';
---

<Radio name="plan" value="free" label="Free Plan" checked />
<Radio name="plan" value="pro" label="Pro Plan" />
<Radio name="plan" value="enterprise" label="Enterprise Plan" />
```

---

### Select

Dropdown select input.

**Props:**
```typescript
{
  name: string;
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
}
```

**Example:**
```astro
---
import Select from '../components/Select.astro';

const options = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'py', label: 'Python' }
];
---

<Select name="language" options={options} placeholder="Select a language" />
```

---

### Textarea

Multi-line text input.

**Props:**
```typescript
{
  name: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  error?: string;
}
```

**Example:**
```astro
---
import Textarea from '../components/Textarea.astro';
---

<Textarea
  name="message"
  placeholder="Enter your message"
  rows={5}
  required
/>
```

---

## Landing Page Components

### CTASection

Call-to-action section with heading, description, and action buttons.

**Props:**
```typescript
{
  title: string;
  description?: string;
  variant?: 'default' | 'accent' | 'minimal';
  align?: 'left' | 'center';
}
```

**Example:**
```astro
---
import CTASection from '../components/landing/CTASection.astro';
import Button from '../components/Button.astro';
---

<CTASection
  title="Ready to Get Started?"
  description="Join thousands of developers using CSS Tags"
  variant="accent"
  align="center"
>
  <Button href="/docs" variant="primary" size="lg">Get Started</Button>
  <Button href="/examples" variant="outline" size="lg">View Examples</Button>
</CTASection>
```

---

### FeatureCard

Enhanced card for displaying feature highlights with icon.

**Props:**
```typescript
{
  title: string;
  description: string;
  href?: string;
  variant?: 'default' | 'elevated' | 'minimal';
}
```

**Example:**
```astro
---
import FeatureCard from '../components/landing/FeatureCard.astro';
import Button from '../components/Button.astro';
---

<FeatureCard
  title="Lightning Fast"
  description="Optimized for performance"
  variant="elevated"
>
  <svg slot="icon" width="48" height="48">...</svg>
  <Button slot="default" variant="outline" size="sm">Learn More</Button>
</FeatureCard>
```

---

### Features

Grid layout for showcasing multiple features.

**Props:**
```typescript
{
  features: Array<{
    title: string;
    description: string;
    icon?: string;
    href?: string;
  }>;
  columns?: 2 | 3 | 4;
  variant?: 'cards' | 'minimal';
}
```

**Example:**
```astro
---
import Features from '../components/landing/Features.astro';

const features = [
  {
    title: 'Semantic HTML',
    description: 'Write clean, accessible markup',
    icon: '<svg>...</svg>'
  },
  {
    title: 'Zero Config',
    description: 'Drop in and start styling',
    icon: '<svg>...</svg>'
  }
];
---

<Features features={features} columns={3} variant="cards" />
```

---

### Hero

Large hero section for landing page headers.

**Props:**
```typescript
{
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  gradient?: boolean;
  variant?: 'default' | 'accent-bg';
}
```

**Example:**
```astro
---
import Hero from '../components/landing/Hero.astro';
import Button from '../components/Button.astro';
---

<Hero
  title="Style HTML Directly with CSS"
  subtitle="No classes, no frameworks"
  gradient={true}
  variant="accent-bg"
  align="center"
>
  <Button href="/docs" variant="primary" size="lg">Get Started</Button>
  <Button href="/examples" variant="outline" size="lg">View Examples</Button>
</Hero>
```

---

### ImageContainer

Styled image wrapper with variants and caption.

**Props:**
```typescript
{
  src: string;
  alt: string;
  caption?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'rounded';
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  loading?: 'lazy' | 'eager';
}
```

**Example:**
```astro
---
import ImageContainer from '../components/landing/ImageContainer.astro';
---

<ImageContainer
  src="/images/hero.png"
  alt="Product screenshot"
  caption="CSS Tags in action"
  variant="elevated"
  aspectRatio="16/9"
/>
```

---

### InstallTabs

Package manager installation code with tabbed interface.

**Props:**
```typescript
{
  packageName: string;
  defaultTab?: 'npm' | 'pnpm' | 'yarn' | 'bun';
}
```

**Example:**
```astro
---
import InstallTabs from '../components/landing/InstallTabs.astro';
---

<InstallTabs packageName="css-tags" defaultTab="npm" />
```

**Features:**
- Auto-generated commands for all package managers
- Copy button with tooltip
- Keyboard navigation
- Accessible

---

### LandingHeading

Enhanced heading component for landing pages.

**Props:**
```typescript
{
  level?: 1 | 2 | 3 | 4;
  align?: 'left' | 'center' | 'right';
  gradient?: boolean;
  underline?: boolean;
  subtitle?: string;
}
```

**Example:**
```astro
---
import LandingHeading from '../components/landing/LandingHeading.astro';
---

<LandingHeading
  level={2}
  align="center"
  gradient={true}
  underline={false}
  subtitle="Build beautiful sites with semantic HTML"
>
  Why CSS Tags?
</LandingHeading>
```

---

### TwoColumn

Responsive two-column layout (stacks on mobile).

**Props:**
```typescript
{
  reverse?: boolean;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end';
}
```

**Example:**
```astro
---
import TwoColumn from '../components/landing/TwoColumn.astro';
import ImageContainer from '../components/landing/ImageContainer.astro';
---

<TwoColumn reverse={false} gap="lg" align="center">
  <div slot="left">
    <h2>Powerful Features</h2>
    <p>Description...</p>
  </div>
  <ImageContainer
    slot="right"
    src="/demo.png"
    alt="Demo"
    variant="elevated"
  />
</TwoColumn>
```

---

## Layout Components

### Breadcrumbs

Breadcrumb navigation showing current page hierarchy.

**Props:**
```typescript
{
  currentPath: string;
}
```

**Example:**
```astro
---
import Breadcrumbs from '../components/Breadcrumbs.astro';
---

<Breadcrumbs currentPath="/guides/getting-started" />
```

**Features:**
- Auto-generated from current path
- Aria labels for accessibility
- Hover states
- Separator icons

---

### Header

Fixed site header with logo, search, and navigation.

**Props:**
```typescript
{
  currentPath: string;
  siteTitle?: string;
  siteTitleHref?: string;
  logo?: { src: string; alt: string };
  showSearch?: boolean;
  iconLinks?: Array<{
    href: string;
    icon: 'github' | 'discord' | string;
    label: string;
  }>;
}
```

**Example:**
```astro
---
import Header from '../components/Header.astro';
---

<Header
  currentPath={currentPath}
  siteTitle="CSS Tags"
  showSearch={true}
  iconLinks={[
    { href: "https://github.com/user/repo", icon: "github", label: "GitHub" }
  ]}
/>
```

**Features:**
- Fixed positioning on desktop
- Hidden on mobile (<768px)
- Search integration
- Theme toggle
- Icon links support

---

### MobileHeader

Mobile-only header with TOC, search, and menu buttons.

**Props:**
```typescript
{
  headings: Array<{
    depth: number;
    slug: string;
    text: string;
  }>;
}
```

**Example:**
```astro
---
import MobileHeader from '../components/MobileHeader.astro';
---

<MobileHeader headings={headings} />
```

**Features:**
- Only visible on mobile (<768px)
- TOC dropdown
- Search overlay
- Sidebar menu button
- Fixed positioning

---

### Navigation

Sidebar navigation with search and theme toggle.

**Props:**
```typescript
{
  currentPath: string;
}
```

**Example:**
```astro
---
import Navigation from '../components/Navigation.astro';
---

<Navigation currentPath={currentPath} />
```

**Features:**
- Collapsible sections
- Active page highlighting
- Resizable (desktop)
- Overlay on mobile
- Search integration
- Theme toggle
- GitHub link

---

### PageMeta

Metadata display (last updated, contributors, etc.).

**Props:**
```typescript
{
  currentPath: string;
}
```

**Example:**
```astro
---
import PageMeta from '../components/PageMeta.astro';
---

<PageMeta currentPath={currentPath} />
```

---

### PrevNextNav

Previous/next page navigation links.

**Props:**
```typescript
{
  currentPath: string;
}
```

**Example:**
```astro
---
import PrevNextNav from '../components/PrevNextNav.astro';
---

<PrevNextNav currentPath={currentPath} />
```

**Features:**
- Auto-generated from navigation structure
- Prev/next links with titles
- Arrow icons
- Hover effects

---

### Search

Site-wide search powered by Pagefind.

**Props:**
```typescript
{
  variant?: 'header' | 'sidebar' | 'overlay';
}
```

**Example:**
```astro
---
import Search from '../components/Search.astro';
---

<Search variant="header" />
```

**Features:**
- Instant search results
- Keyboard shortcuts (Ctrl/Cmd+K)
- Result previews
- Accessible

---

### TableOfContents

Right sidebar table of contents for current page.

**Props:**
```typescript
{
  headings: Array<{
    depth: number;
    slug: string;
    text: string;
  }>;
}
```

**Example:**
```astro
---
import TableOfContents from '../components/TableOfContents.astro';
---

<TableOfContents headings={headings} />
```

**Features:**
- Smooth scrolling
- Active section highlighting
- Shows h2/h3 headings
- Sticky positioning
- Hidden on mobile (<1200px)

---

### ThemeToggle

Light/dark mode toggle button.

**Props:** None

**Example:**
```astro
---
import ThemeToggle from '../components/ThemeToggle.astro';
---

<ThemeToggle />
```

**Features:**
- Toggles between light/dark themes
- Saves preference to localStorage
- Animated icon transition
- Accessible

---

## Utility Components

### KeyboardShortcuts

Global keyboard shortcut handler.

**Props:** None

**Example:**
```astro
---
import KeyboardShortcuts from '../components/KeyboardShortcuts.astro';
---

<KeyboardShortcuts />
```

**Shortcuts:**
- `Ctrl/Cmd+K`: Open search
- `/`: Focus search
- `Escape`: Close overlays

---

### LoadingIndicator

Page transition loading indicator.

**Props:** None

**Example:**
```astro
---
import LoadingIndicator from '../components/LoadingIndicator.astro';
---

<LoadingIndicator />
```

**Features:**
- Shows during Astro View Transitions
- Animated progress bar
- Auto-hides when complete

---

### ScrollProgress

Reading progress indicator bar.

**Props:** None

**Example:**
```astro
---
import ScrollProgress from '../components/ScrollProgress.astro';
---

<ScrollProgress />
```

**Features:**
- Shows scroll progress at top of page
- Smooth animation
- Updates on scroll

---

### ScrollToTop

Floating button to scroll to top of page.

**Props:** None

**Example:**
```astro
---
import ScrollToTop from '../components/ScrollToTop.astro';
---

<ScrollToTop />
```

**Features:**
- Appears after scrolling down
- Smooth scroll to top
- Accessible
- Hover effects

---

## Design System

All components follow these principles:

### Theme Integration
- Uses CSS variables from `src/theme.css`
- Automatic dark mode support
- Consistent color palette
- Standardized spacing scale

### Responsive Design
- Mobile-first approach
- 768px primary breakpoint
- 1200px for TOC display
- Touch-friendly targets

### Accessibility
- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Screen reader support

### Typography
- 9 font sizes (xs → 5xl)
- 4 font weights (400, 500, 600, 700)
- Consistent line heights
- Readable text widths

### Performance
- Minimal JavaScript
- Scoped CSS
- Lazy loading images
- View Transitions support

## Customization

Every component exposes CSS variables for customization. Example:

```css
:root {
  /* Button customization */
  --button-padding-sm: var(--space-xs) var(--space-md);
  --button-border-radius: var(--border-radius-md);
  --button-transition: var(--transition-normal);

  /* Card customization */
  --card-padding: var(--space-xl);
  --card-border-radius: var(--border-radius-lg);
  --card-shadow: var(--shadow-sm);

  /* Table customization */
  --table-header-bg: var(--bg-secondary);
  --table-row-hover-bg: var(--bg-hover);
}
```

See individual component source files for complete variable lists.

---

## Getting Started

1. Import components in your Astro pages:
```astro
---
import Button from '../components/Button.astro';
import Card from '../components/Card.astro';
---
```

2. Use them in your markup:
```astro
<Card variant="elevated">
  <div class="card-body">
    <h3>Welcome</h3>
    <Button variant="primary">Get Started</Button>
  </div>
</Card>
```

3. Customize with CSS variables in your styles or `theme.css`.

## Browser Support

All components work in modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

Features degrade gracefully in older browsers.
