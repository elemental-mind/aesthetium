# Aesthetium

A classless, attribute-driven CSS framework. Drop it in and get a clean, modern UI with zero class names — semantic HTML styled out of the box, with expressive attributes for variants.

```html
<button cta>Save</button>
<aside positive>Changes saved.</aside>
<span badge accent>New</span>
```

## Installation

### npm

```bash
npm install aesthetium
```

```html
<link rel="stylesheet" href="node_modules/aesthetium/distribution/aesthetium.css">
```

Or with a bundler:

```css
@import 'aesthetium';
```

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aesthetium/distribution/aesthetium.css">
```

To pin a specific version:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aesthetium@1.0.0/distribution/aesthetium.css">
```

## Customization

Aesthetium is built on CSS custom properties. Override any token in your own `:root` block **after** the framework stylesheet to apply your theme — no build step required.

```css
:root {
  --color-accent:    #6366f1; /* your brand color for CTAs, links, focus rings */
  --color-accent-fg: #ffffff; /* text on top of the accent color               */

  --font-heading: 'Playfair Display', serif;
  --font-body:    'Inter', sans-serif;
}
```

### Key tokens

| Token | Default | Purpose |
|---|---|---|
| `--color-accent` | `#000000` | CTAs, links, focus rings |
| `--color-accent-fg` | `#ffffff` | Text on accent backgrounds |
| `--color-positive` | `#16a34a` | Success states |
| `--color-negative` | `#dc2626` | Error states |
| `--color-alert` | `#d97706` | Warning states |
| `--font-heading` | Inter | Heading font |
| `--font-body` | Inter | Body font |
| `--container-width` | `72rem` | Max page width |
| `--content-width` | `68ch` | Max paragraph width |

The full token list is in [`source/system.css`](source/system.css).

Dark mode is supported automatically via `prefers-color-scheme`.

## Attributes

Aesthetium uses boolean HTML attributes for variants — no class names needed.

### `<button>`

| Attribute | Effect |
|---|---|
| *(none)* | Neutral secondary button |
| `cta` | Primary / brand-colored button |
| `ghost` | Transparent background, border only |
| `positive` | Green — confirm, save |
| `negative` | Red — delete, destructive |
| `alert` | Amber — warning action |
| `small` | Reduced padding and font size |
| `large` | Increased padding and font size |
| `pill` | Fully rounded corners |

```html
<button cta>Save</button>
<button ghost>Cancel</button>
<button negative pill>Delete account</button>
```

### `<aside>`

| Attribute | Effect |
|---|---|
| *(none)* | Neutral callout |
| `positive` | Green tint — success message |
| `negative` | Red tint — error message |
| `alert` | Amber tint — warning message |

```html
<aside positive>Changes saved.</aside>
<aside negative>Something went wrong.</aside>
<aside alert>Your trial expires in 3 days.</aside>
```

### `<input>`, `<textarea>`, `<select>`

| Attribute | Effect |
|---|---|
| `valid` | Green border — field passes validation |
| `invalid` | Red border + glow — field fails validation |

```html
<input type="email" valid>
<input type="email" invalid>
```

### `<progress>`

| Attribute | Effect |
|---|---|
| *(none)* | Accent color fill |
| `positive` | Green fill |
| `negative` | Red fill |

```html
<progress value="80" max="100" positive></progress>
```

### `<nav> a`

| Attribute | Effect |
|---|---|
| `active` | Marks the current page link (bold, filled background) |

```html
<nav>
  <a href="/about">About</a>
  <a href="/docs" active>Docs</a>
</nav>
```

### `[badge]`

Apply `badge` to any inline element to render it as a pill badge. Combine with a semantic attribute for color.

| Attribute | Effect |
|---|---|
| `badge` | Default gray badge |
| `badge accent` | Accent-colored badge |
| `badge positive` | Green badge |
| `badge negative` | Red badge |
| `badge alert` | Amber badge |

```html
<span badge>Draft</span>
<span badge accent>New</span>
<span badge positive>Active</span>
<span badge negative>Expired</span>
```

## License

MIT
