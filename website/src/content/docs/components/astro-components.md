---
title: Astro Components
description: Pre-built Astro components that integrate seamlessly with CSS Tags for rapid UI development.
---

import Badge from "../../components/Badge.astro";
import Button from "../../components/Button.astro";
import Card from "../../components/Card.astro";
import Tabs from "../../components/Tabs.astro";
import Accordion from "../../components/Accordion.astro";
import Admonition from "../../components/Admonition.astro";
import Checkbox from "../../components/Checkbox.astro";
import Input from "../../components/Input.astro";
import Radio from "../../components/Radio.astro";
import Select from "../../components/Select.astro";
import Textarea from "../../components/Textarea.astro";

## Overview

CSS Tags provides pre-built Astro components that work seamlessly with the CSS framework. These components offer:

- **Full accessibility** with proper ARIA attributes and keyboard navigation
- **Theme integration** that automatically adapts to light/dark modes
- **Responsive design** that works across all device sizes
- **TypeScript support** for better development experience
- **Consistent API** following web standards

## UI Components

### Badge

<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>

```astro
import Badge from "../../components/Badge.astro";

<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
```

### Button

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

```astro
import Button from "../../components/Button.astro";

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Card

<Card title="Card Title" description="This is a sample card component.">
  <p>Card content goes here. This card automatically adapts to the current theme and provides proper spacing and typography.</p>
</Card>

```astro
import Card from "../../components/Card.astro";

<Card title="Card Title" description="This is a sample card component.">
  <p>Card content goes here.</p>
</Card>
```

## Form Components

### Input

<Input label="Email" type="email" placeholder="Enter your email" />

```astro
import Input from "../../components/Input.astro";

<Input label="Email" type="email" placeholder="Enter your email" />
```

### Textarea

<Textarea label="Message" placeholder="Enter your message" rows="4" />

```astro
import Textarea from "../../components/Textarea.astro";

<Textarea label="Message" placeholder="Enter your message" rows="4" />
```

### Checkbox

<Checkbox label="I agree to the terms" />

```astro
import Checkbox from "../../components/Checkbox.astro";

<Checkbox label="I agree to the terms" />
```

### Radio Buttons

<Radio name="option" label="Option 1" value="1" />
<Radio name="option" label="Option 2" value="2" />

```astro
import Radio from "../../components/Radio.astro";

<Radio name="option" label="Option 1" value="1" />
<Radio name="option" label="Option 2" value="2" />
```

### Select

<Select label="Choose an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>

```astro
import Select from "../../components/Select.astro";

<Select label="Choose an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>
```

## Interactive Components

### Tabs

<Tabs>
  <div slot="tab1" data-title="Tab 1">Content for Tab 1</div>
  <div slot="tab2" data-title="Tab 2">Content for Tab 2</div>
  <div slot="tab3" data-title="Tab 3">Content for Tab 3</div>
</Tabs>

```astro
import Tabs from "../../components/Tabs.astro";

<Tabs>
  <div slot="tab1" data-title="Tab 1">Content for Tab 1</div>
  <div slot="tab2" data-title="Tab 2">Content for Tab 2</div>
  <div slot="tab3" data-title="Tab 3">Content for Tab 3</div>
</Tabs>
```

### Accordion

<Accordion>
  <div slot="item1" data-title="Section 1">Content for section 1</div>
  <div slot="item2" data-title="Section 2">Content for section 2</div>
  <div slot="item3" data-title="Section 3">Content for section 3</div>
</Accordion>

```astro
import Accordion from "../../components/Accordion.astro";

<Accordion>
  <div slot="item1" data-title="Section 1">Content for section 1</div>
  <div slot="item2" data-title="Section 2">Content for section 2</div>
  <div slot="item3" data-title="Section 3">Content for section 3</div>
</Accordion>
```

## Semantic Components

### Admonition

<Admonition type="info" title="Information">
  This is an informational message.
</Admonition>

<Admonition type="warning" title="Warning">
  This is a warning message.
</Admonition>

<Admonition type="error" title="Error">
  This is an error message.
</Admonition>

```astro
import Admonition from "../../components/Admonition.astro";

<Admonition type="info" title="Information">
  This is an informational message.
</Admonition>

<Admonition type="warning" title="Warning">
  This is a warning message.
</Admonition>

<Admonition type="error" title="Error">
  This is an error message.
</Admonition>
```

## Theme Integration

All components automatically adapt to the current theme (light/dark mode). The theme toggle in the header switches between themes, and all components will update their appearance accordingly.

## Accessibility

All components include proper accessibility features:
- Semantic HTML structure
- ARIA attributes where needed
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- High contrast support

## Responsive Design

Components are designed to work across all device sizes:
- Mobile-first approach
- Touch-friendly interactions
- Responsive typography
- Flexible layouts
- Adaptive spacing

## Usage in MDX

These components can be imported and used in MDX files for rich documentation content. Simply import the component at the top of your MDX file and use it inline.</content>
</xai:function_call: write>
<parameter name="filePath">src/content/docs/components/astro-components.md