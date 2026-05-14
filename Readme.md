# Aesthetium

A very lightweight CSS framework with a clean and minimalistic black & white aesthetic by default (think OpenAI style):

- **Classless** — semantic HTML styled out of the box, zero class names required
- **Attribute-based** — expressive attributes for variants and states
- **Customizable** — tweak the entire design system through CSS variables

This framework helps you keep your DOM clean, helping drive the separation between *what* to display and *how* to display it. In the very few cases where the HTML element's native name does not allow for fully expressing the *what*, Aesthetium provides a few well considered semantic intent-driven attributes. Take a button for example:

```html
<button>Default Button</button>
<button highlight>Call to Action Button</button>
<button negative>Delete the internet</button>
```

## Installation

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aesthetium/distribution/framework/aesthetium.css">
```

### npm

```bash
npm install aesthetium
```

```html
<link rel="stylesheet" href="node_modules/aesthetium/distribution/framework/aesthetium.css">
```

Or with a bundler:

```css
@import 'aesthetium';
```

### Modular imports

Use the full bundle when you want everything:

```css
@import 'aesthetium';
```

Use the smaller core bundle for tokens, reset, document defaults, typography, media, and layout attributes only:

```css
@import 'aesthetium/core.css';
```

Or compose only the pieces you need:

```css
@import 'aesthetium/tokens/system.css';
@import 'aesthetium/base/reset.css';
@import 'aesthetium/base/document.css';
@import 'aesthetium/base/typography.css';
@import 'aesthetium/components/button.css';
@import 'aesthetium/components/form.css';
```

## Attributes

Aesthetium uses boolean HTML attributes for variants — no class names needed.

### `<button>`

| Attribute | Effect |
|---|---|
| *(none)* | Neutral secondary button |
| `highlight` | Primary / brand-colored button |
| `ghost` | Transparent background, border only |
| `positive` | Green — confirm, save |
| `negative` | Red — delete, destructive |
| `alert` | Amber — warning action |
| `small` | Reduced padding and font size |
| `large` | Increased padding and font size |
| `pill` | Fully rounded corners |

```html
<button highlight>Save</button>
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

### `<nav> <a>`

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

The full token list is in [`source/tokens/system.css`](source/tokens/system.css) and documented in the [Tokens guide](documentation/guide/tokens.html).

Dark mode is supported automatically via `prefers-color-scheme`.

## License

MIT
