# Landing Page Components

A collection of components designed specifically for landing pages, seamlessly integrated with the CSS Tags documentation site theme.

## Components

### Hero
Large, attention-grabbing hero section for the top of landing pages.

```astro
---
import Hero from '../components/landing/Hero.astro';
import Button from '../components/Button.astro';
---

<Hero
  title="Style HTML Directly with CSS"
  subtitle="No classes, no frameworks—just semantic markup that looks great"
  align="center"
  gradient={true}
  variant="accent-bg"
>
  <Button href="/docs/getting-started" variant="primary" size="lg">Get Started</Button>
  <Button href="/docs/examples" variant="outline" size="lg">View Examples</Button>
</Hero>
```

**Props:**
- `title` (string, required): Main heading text
- `subtitle` (string, optional): Subtitle text below heading
- `align` ('left' | 'center', default: 'center'): Text alignment
- `gradient` (boolean, default: false): Apply gradient to title text
- `variant` ('default' | 'accent-bg', default: 'default'): Background style

### Features
Grid layout for showcasing features with icons and descriptions.

```astro
---
import Features from '../components/landing/Features.astro';

const features = [
  {
    title: 'Zero Configuration',
    description: 'Drop in the CSS file and start styling immediately',
    icon: '<svg>...</svg>',
  },
  {
    title: 'Semantic HTML',
    description: 'Write clean, accessible markup without classes',
    icon: '<svg>...</svg>',
  },
  // ... more features
];
---

<Features features={features} columns={3} variant="cards" />
```

**Props:**
- `features` (array, required): Array of feature objects with `title`, `description`, optional `icon` and `href`
- `columns` (2 | 3 | 4, default: 3): Number of columns on desktop
- `variant` ('cards' | 'minimal', default: 'cards'): Display style

### InstallTabs
Package manager installation code blocks with tab interface.

```astro
---
import InstallTabs from '../components/landing/InstallTabs.astro';
---

<InstallTabs packageName="css-tags" defaultTab="npm" />
```

**Props:**
- `packageName` (string, required): Package name for installation commands
- `defaultTab` ('npm' | 'pnpm' | 'yarn' | 'bun', default: 'npm'): Initially selected tab

**Features:**
- Automatic command generation for all package managers
- Copy button with tooltip feedback
- Full keyboard navigation (Arrow keys, Home, End)
- Tab persistence

### TwoColumn
Responsive two-column layout that stacks on mobile.

```astro
---
import TwoColumn from '../components/landing/TwoColumn.astro';
import ImageContainer from '../components/landing/ImageContainer.astro';
---

<TwoColumn reverse={false} gap="lg" align="center">
  <div slot="left">
    <h2>Powerful Features</h2>
    <p>Description of features...</p>
  </div>
  <div slot="right">
    <ImageContainer
      src="/images/demo.png"
      alt="Demo screenshot"
      variant="elevated"
    />
  </div>
</TwoColumn>
```

**Props:**
- `reverse` (boolean, default: false): Reverse column order on desktop
- `gap` ('sm' | 'md' | 'lg' | 'xl', default: 'lg'): Space between columns
- `align` ('start' | 'center' | 'end', default: 'center'): Vertical alignment

**Slots:**
- `left`: Content for left column (right on mobile if reversed)
- `right`: Content for right column (left on mobile if reversed)

### LandingHeading
Specialized heading component for landing pages with enhanced styling.

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

**Props:**
- `level` (1 | 2 | 3 | 4, default: 2): Heading level (h1-h4)
- `align` ('left' | 'center' | 'right', default: 'center'): Text alignment
- `gradient` (boolean, default: false): Apply gradient effect to text
- `underline` (boolean, default: false): Add accent underline below heading
- `subtitle` (string, optional): Subtitle text below heading

### ImageContainer
Styled image wrapper with variants and optional caption.

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
  loading="lazy"
/>
```

**Props:**
- `src` (string, required): Image source URL
- `alt` (string, required): Alt text for accessibility
- `caption` (string, optional): Caption text below image
- `variant` ('default' | 'elevated' | 'bordered' | 'rounded', default: 'default'): Display style
- `aspectRatio` ('16/9' | '4/3' | '1/1' | 'auto', default: 'auto'): Image aspect ratio
- `loading` ('lazy' | 'eager', default: 'lazy'): Loading strategy

### FeatureCard
Enhanced card component designed for feature highlights.

```astro
---
import FeatureCard from '../components/landing/FeatureCard.astro';
---

<FeatureCard
  title="Lightning Fast"
  description="Optimized for performance with minimal overhead"
  href="/features/performance"
  variant="elevated"
>
  <svg slot="icon" width="48" height="48">...</svg>
  <Button slot="default" variant="outline" size="sm">Learn More</Button>
</FeatureCard>
```

**Props:**
- `title` (string, required): Card title
- `description` (string, required): Card description
- `href` (string, optional): Makes entire card clickable
- `variant` ('default' | 'elevated' | 'minimal', default: 'default'): Display style

**Slots:**
- `icon`: Icon element at top of card
- `default`: Extra content at bottom (buttons, badges, etc.)

### CTASection
Call-to-action section with heading, description, and action buttons.

```astro
---
import CTASection from '../components/landing/CTASection.astro';
import Button from '../components/Button.astro';
---

<CTASection
  title="Ready to Get Started?"
  description="Join thousands of developers building beautiful sites with CSS Tags"
  variant="accent"
  align="center"
>
  <Button href="/docs/installation" variant="primary" size="lg">Install Now</Button>
  <Button href="/docs/guide" variant="outline" size="lg">Read the Guide</Button>
</CTASection>
```

**Props:**
- `title` (string, required): CTA heading
- `description` (string, optional): Supporting text
- `variant` ('default' | 'accent' | 'minimal', default: 'default'): Background style
- `align` ('left' | 'center', default: 'center'): Text alignment

## Complete Landing Page Example

```astro
---
import LandingLayout from '../layouts/LandingLayout.astro';
import Hero from '../components/landing/Hero.astro';
import Features from '../components/landing/Features.astro';
import InstallTabs from '../components/landing/InstallTabs.astro';
import TwoColumn from '../components/landing/TwoColumn.astro';
import LandingHeading from '../components/landing/LandingHeading.astro';
import ImageContainer from '../components/landing/ImageContainer.astro';
import CTASection from '../components/landing/CTASection.astro';
import Button from '../components/Button.astro';

const features = [
  {
    title: 'Semantic HTML',
    description: 'Write clean, accessible markup without classes',
    icon: '<svg>...</svg>',
  },
  // ... more features
];
---

<LandingLayout title="CSS Tags" description="Style HTML directly with modern CSS">
  <!-- Hero Section -->
  <Hero
    title="Style HTML Directly with CSS"
    subtitle="No classes, no frameworks—just semantic markup that looks great"
    gradient={true}
    variant="accent-bg"
  >
    <Button href="/docs/getting-started" variant="primary" size="lg">Get Started</Button>
    <Button href="/docs/examples" variant="outline" size="lg">View Examples</Button>
  </Hero>

  <!-- Installation -->
  <section style="padding: var(--space-2xl);">
    <LandingHeading level={2} align="center" subtitle="Get up and running in seconds">
      Quick Installation
    </LandingHeading>
    <InstallTabs packageName="css-tags" />
  </section>

  <!-- Features Grid -->
  <section style="padding: var(--space-2xl);">
    <LandingHeading level={2} align="center" underline={true}>
      Why CSS Tags?
    </LandingHeading>
    <Features features={features} columns={3} variant="cards" />
  </section>

  <!-- Two Column Section -->
  <TwoColumn gap="xl" align="center">
    <div slot="left">
      <LandingHeading level={3} align="left">
        Beautiful by Default
      </LandingHeading>
      <p>Every HTML element is styled thoughtfully out of the box...</p>
    </div>
    <ImageContainer
      slot="right"
      src="/images/demo.png"
      alt="Demo screenshot"
      variant="elevated"
      aspectRatio="16/9"
    />
  </TwoColumn>

  <!-- CTA -->
  <CTASection
    title="Ready to Build Something Amazing?"
    description="Join thousands of developers using CSS Tags to create beautiful sites"
    variant="accent"
  >
    <Button href="/docs/installation" variant="primary" size="lg">Get Started</Button>
    <Button href="https://github.com/yourusername/css-tags" variant="outline" size="lg">View on GitHub</Button>
  </CTASection>
</LandingLayout>
```

## Design Principles

All components follow these principles:

1. **Theme Integration**: Uses existing CSS variables from `theme.css`
2. **Dark Mode**: Automatic support via system preference or manual toggle
3. **Responsive**: Mobile-first design, stacks appropriately on small screens
4. **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
5. **Customizable**: CSS variables allow easy customization without modifying component code
6. **Performant**: Minimal JavaScript, efficient rendering

## Customization

Each component exposes CSS variables for customization:

```css
/* Example: Customize Hero component */
:root {
  --hero-padding-y: 4rem;
  --hero-title-font-size: 4rem;
  --hero-gradient: linear-gradient(135deg, #0066cc 0%, #00a8ff 100%);
}
```

See individual component styles for all available CSS variables.
