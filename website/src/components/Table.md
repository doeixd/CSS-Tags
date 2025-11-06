# Table Component

A flexible, accessible table component that seamlessly integrates with your theme. Perfect for API documentation, data display, and general content tables.

## Features

- 🎯 **Simple or Advanced**: Use simple arrays or structured column definitions
- 📊 **Sortable columns**: Optional client-side sorting
- 📱 **Responsive**: Horizontal scroll on mobile or optional card layout
- 🎨 **Multiple variants**: Default, striped, bordered, compact
- 📌 **Sticky header**: Optional fixed header for long tables
- 🌓 **Dark mode**: Automatic theme support
- ♿ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## Basic Usage

### Simple Mode

Pass arrays of headers and rows:

```astro
---
import Table from '../components/Table.astro';
---

<Table
  headers={['Name', 'Age', 'Role']}
  rows={[
    ['Alice', 28, 'Developer'],
    ['Bob', 32, 'Designer'],
    ['Carol', 25, 'Manager']
  ]}
/>
```

### Advanced Mode

Define columns with configuration:

```astro
---
import Table from '../components/Table.astro';

const columns = [
  { key: 'name', label: 'Name', align: 'left', sortable: true },
  { key: 'age', label: 'Age', align: 'center', sortable: true, width: '100px' },
  { key: 'role', label: 'Role', align: 'left' }
];

const data = [
  { name: 'Alice', age: 28, role: 'Developer' },
  { name: 'Bob', age: 32, role: 'Designer' },
  { name: 'Carol', age: 25, role: 'Manager' }
];
---

<Table
  columns={columns}
  data={data}
  variant="striped"
  caption="Team Members"
/>
```

## Props

### Table Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headers` | `string[]` | - | Column headers (simple mode) |
| `rows` | `(string\|number)[][]` | - | Table data as 2D array (simple mode) |
| `columns` | `Column[]` | - | Column definitions (advanced mode) |
| `data` | `object[]` | - | Data objects (advanced mode) |
| `variant` | `'default' \| 'striped' \| 'bordered' \| 'compact'` | `'default'` | Visual style |
| `caption` | `string` | - | Table caption/title |
| `stickyHeader` | `boolean` | `false` | Fix header on scroll |
| `responsive` | `boolean` | `true` | Enable horizontal scroll |
| `class` | `string` | - | Additional CSS classes |

### Column Definition

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `key` | `string` | Required | Data property key |
| `label` | `string` | Required | Column header text |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment |
| `width` | `string` | - | Fixed column width (e.g., '100px', '20%') |
| `sortable` | `boolean` | `false` | Enable sorting |

## Variants

### Default
Standard table with borders and hover states:

```astro
<Table
  headers={['Col 1', 'Col 2', 'Col 3']}
  rows={data}
  variant="default"
/>
```

### Striped
Alternating row colors for better readability:

```astro
<Table
  headers={['Col 1', 'Col 2', 'Col 3']}
  rows={data}
  variant="striped"
/>
```

### Bordered
Adds borders between all cells:

```astro
<Table
  headers={['Col 1', 'Col 2', 'Col 3']}
  rows={data}
  variant="bordered"
/>
```

### Compact
Reduced padding for dense data:

```astro
<Table
  headers={['Col 1', 'Col 2', 'Col 3']}
  rows={data}
  variant="compact"
/>
```

## API Documentation Example

Perfect for documenting component props, API endpoints, or function parameters:

```astro
---
import Table from '../components/Table.astro';
import Badge from '../components/Badge.astro';

const propColumns = [
  { key: 'prop', label: 'Prop', align: 'left', sortable: true },
  { key: 'type', label: 'Type', align: 'center', width: '150px' },
  { key: 'default', label: 'Default', align: 'center', width: '120px' },
  { key: 'description', label: 'Description', align: 'left' }
];

const props = [
  {
    prop: '<code>variant</code>',
    type: '<Badge variant="info" size="sm">string</Badge>',
    default: '<code>"primary"</code>',
    description: 'Visual style variant'
  },
  {
    prop: '<code>size</code>',
    type: '<Badge variant="info" size="sm">string</Badge>',
    default: '<code>"md"</code>',
    description: 'Size of the component'
  },
  {
    prop: '<code>disabled</code>',
    type: '<Badge variant="info" size="sm">boolean</Badge>',
    default: '<code>false</code>',
    description: 'Whether the component is disabled'
  }
];
---

<Table
  columns={propColumns}
  data={props}
  variant="striped"
  caption="Button Component Props"
  stickyHeader
/>
```

## API Endpoint Documentation

```astro
---
const endpointColumns = [
  { key: 'method', label: 'Method', align: 'center', width: '100px' },
  { key: 'endpoint', label: 'Endpoint', align: 'left' },
  { key: 'description', label: 'Description', align: 'left' }
];

const endpoints = [
  {
    method: '<Badge variant="success">GET</Badge>',
    endpoint: '<code>/api/users</code>',
    description: 'Retrieve a list of all users'
  },
  {
    method: '<Badge variant="info">POST</Badge>',
    endpoint: '<code>/api/users</code>',
    description: 'Create a new user'
  },
  {
    method: '<Badge variant="warning">PUT</Badge>',
    endpoint: '<code>/api/users/:id</code>',
    description: 'Update an existing user'
  },
  {
    method: '<Badge variant="danger">DELETE</Badge>',
    endpoint: '<code>/api/users/:id</code>',
    description: 'Delete a user'
  }
];
---

<Table
  columns={endpointColumns}
  data={endpoints}
  caption="API Endpoints"
  variant="bordered"
/>
```

## Comparison Table

```astro
---
const comparisonColumns = [
  { key: 'feature', label: 'Feature', align: 'left', sortable: true },
  { key: 'basic', label: 'Basic', align: 'center' },
  { key: 'pro', label: 'Pro', align: 'center' },
  { key: 'enterprise', label: 'Enterprise', align: 'center' }
];

const plans = [
  {
    feature: 'Users',
    basic: '5',
    pro: '25',
    enterprise: 'Unlimited'
  },
  {
    feature: 'Storage',
    basic: '10 GB',
    pro: '100 GB',
    enterprise: '1 TB'
  },
  {
    feature: 'Support',
    basic: 'Email',
    pro: 'Priority Email',
    enterprise: '24/7 Phone'
  }
];
---

<Table
  columns={comparisonColumns}
  data={plans}
  variant="striped"
  caption="Plan Comparison"
/>
```

## Sortable Columns

Enable sorting on specific columns:

```astro
---
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'downloads', label: 'Downloads', align: 'right', sortable: true },
  { key: 'version', label: 'Version', align: 'center' }
];

const packages = [
  { name: 'react', downloads: 15000000, version: '18.2.0' },
  { name: 'vue', downloads: 3000000, version: '3.3.0' },
  { name: 'svelte', downloads: 500000, version: '4.0.0' }
];
---

<Table
  columns={columns}
  data={packages}
  caption="Popular Packages"
/>
```

Click column headers with sort icons to sort ascending/descending.

## Sticky Header

For long tables, keep the header visible while scrolling:

```astro
<Table
  headers={headers}
  rows={longDataSet}
  stickyHeader
  variant="striped"
/>
```

## Responsive Behavior

By default, tables scroll horizontally on mobile. The table wrapper shows a shadow hint on the right edge to indicate more content.

### Card Layout (Optional)

Add the `table-container--cards` class for a card-style mobile layout:

```astro
<Table
  headers={headers}
  rows={rows}
  class="table-container--cards"
/>
```

On mobile, this transforms the table into stacked cards with labels.

## Customization

The Table component uses CSS variables for easy customization:

```css
:root {
  /* Container */
  --table-container-margin-bottom: var(--space-lg);
  --table-border-radius: var(--border-radius-lg);
  --table-wrapper-border: 1px solid var(--border-color);

  /* General */
  --table-bg: var(--bg-primary);
  --table-font-size: var(--font-size-base);

  /* Header */
  --table-header-bg: var(--bg-secondary);
  --table-header-border: 2px solid var(--border-color);
  --table-header-padding: var(--space-md) var(--space-lg);
  --table-header-font-weight: var(--font-weight-semibold);
  --table-header-font-size: var(--font-size-sm);
  --table-header-text-transform: uppercase;
  --table-header-letter-spacing: 0.05em;

  /* Cells */
  --table-cell-padding: var(--space-md) var(--space-lg);
  --table-cell-line-height: 1.6;
  --table-row-border: 1px solid var(--border-color);
  --table-row-hover-bg: var(--bg-hover);

  /* Variants */
  --table-striped-bg: var(--bg-secondary);
  --table-cell-border: 1px solid var(--border-color);

  /* Compact */
  --table-compact-header-padding: var(--space-sm) var(--space-md);
  --table-compact-cell-padding: var(--space-sm) var(--space-md);
  --table-compact-font-size: var(--font-size-sm);
}
```

## Accessibility

The Table component follows accessibility best practices:

- **Semantic HTML**: Uses proper `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` elements
- **Captions**: Optional `caption` prop for table description
- **Sort buttons**: Proper ARIA labels for screen readers
- **Keyboard navigation**: Sortable columns are keyboard accessible
- **Focus states**: Clear focus indicators on interactive elements
- **Responsive labels**: Mobile card view includes data labels

## Examples in Context

### Documentation Layout

```astro
---
import DocsLayout from '../layouts/DocsLayout.astro';
import Table from '../components/Table.astro';
import Badge from '../components/Badge.astro';

const propColumns = [
  { key: 'name', label: 'Name', align: 'left' },
  { key: 'type', label: 'Type', align: 'center' },
  { key: 'required', label: 'Required', align: 'center', width: '100px' },
  { key: 'description', label: 'Description', align: 'left' }
];

const props = [
  {
    name: '<code>title</code>',
    type: '<Badge variant="info">string</Badge>',
    required: '<Badge variant="success">Yes</Badge>',
    description: 'The title of the page'
  },
  {
    name: '<code>description</code>',
    type: '<Badge variant="info">string</Badge>',
    required: '<Badge variant="secondary">No</Badge>',
    description: 'Optional meta description'
  }
];
---

<DocsLayout title="API Reference">
  <h1>Component API</h1>

  <h2>Props</h2>
  <Table
    columns={propColumns}
    data={props}
    variant="striped"
    caption="Available Props"
  />
</DocsLayout>
```

### Landing Page

```astro
---
import LandingLayout from '../layouts/LandingLayout.astro';
import Table from '../components/Table.astro';
import LandingHeading from '../components/landing/LandingHeading.astro';

const features = [
  { feature: 'Custom Themes', free: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Analytics', free: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Priority Support', free: '—', pro: '—', enterprise: '✓' }
];
---

<LandingLayout title="Pricing">
  <LandingHeading level={2} align="center">
    Choose Your Plan
  </LandingHeading>

  <Table
    headers={['Feature', 'Free', 'Pro', 'Enterprise']}
    rows={features}
    variant="bordered"
  />
</LandingLayout>
```

## Tips

1. **Use inline HTML**: Cell values can include HTML like `<code>`, `<Badge>`, `<strong>`, etc.
2. **Sort numeric data**: The sort function automatically detects numbers for proper numeric sorting
3. **Sticky headers**: Great for long reference tables or API documentation
4. **Compact variant**: Use for dense data that doesn't need much breathing room
5. **Column alignment**: Right-align numbers, center-align status badges, left-align text
6. **Fixed widths**: Set column widths for columns that shouldn't expand (like status or type columns)

## Browser Support

Works in all modern browsers with graceful degradation:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

Sorting requires JavaScript, but the table displays and functions without it.
