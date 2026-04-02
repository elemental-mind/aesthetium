# Todos

x -> done
o -> in progress
+ -> needs rework

### Docs
- [o] Documentation
    - [o] Create landing page
        - [ ] Hero / intro section
        - [ ] Feature highlights
        - [ ] Component previews
        - [ ] CTA / links
    - [+] Create get started page
        - [ ] Installation
        - [ ] Basic usage
        - [ ] First component example
    - [+] Document: Responsiveness
        - [ ] Breakpoint overview
        - [ ] Responsive typography
        - [ ] Responsive spacing
    - [+] Document: Layouts
        - [ ] Flexbox attributes (`row`, `stack`, `spread`, `centered`, `wrapping`)
        - [ ] Gap variants
        - [ ] Full-page & scrollable
        - [ ] Grid support
    - [+] Document: Colors
        - [ ] Shade scale
        - [ ] Light / dark mode
        - [ ] Semantic color variants
    - [+] Document: Fonts
        - [ ] Font stack
        - [ ] Typography scale
        - [ ] Line-height variants
    - [+] Document: Customization/Tokens/Vars
        - [ ] Design tokens
        - [ ] Semantic tokens
        - [ ] Component tokens
        - [ ] Overriding variables
    - [x] Create reference sheet

### Base
- [x] Reset / normalize

### Token System
- [x] Typography scale (xs → 5xl) with line-height variants
- [x] 3-tier design token system (design → semantic → component)
- [x] CSS custom properties for all tokens

### Fonts
- [x] Font stack (Inter Tight + monospace fallback)

### Layout/Depth
- [x] Spacing scale (12 levels)
- [x] Flexbox attributes: `[row]`, `[stack]`, `[spread]`, `[centered]`, `[wrapping]`
- [x] Gap variants: `[compact]`, `[spacious]`
- [x] `[full-page]`, `[scrollable]`
- [x] `[inverted]` force-dark sections (to be reworked)

### Components
- [x] Buttons — with `ghost`, `pill`, `small`, `large`, semantic color variants
- [x] Navigation — with `aria-current="page"` active state, breadcrumb detection
- [x] Forms — fieldset, label, input, textarea, select, checkbox, radio, progress
- [x] Form validation states (`valid` / `invalid` attributes)
- [x] Disabled state styling
- [x] Cards / articles — with `[highlight]` variant
- [x] Callout blocks — aside with `positive`, `negative`, `alert`, `primary`, `secondary`, `tertiary`
- [x] Tables — with hover states, header styling
- [x] Dialog — with backdrop blur
- [x] Details / summary — with animated chevron
- [x] Badges — inline with color variants
- [x] Media — `img`, `video`, `svg` responsive defaults, `figure` + `figcaption`
- [x] Code blocks — inline `code` and `pre`

### Motion System
- [x] Motion tokens (fast, normal, slow + easing)

### Color System
- [x] Shade scale (100–900) via `color-mix()`
- [x] Light / dark mode via `prefers-color-scheme`
- [ ] Refine colours — replace `inverted` attribute with `dark` and `shaded` variants

### Responsive System
- [ ] Breakpoint definitions (sm, md, lg, xl)
- [ ] Responsive typography scaling
- [ ] Responsive spacing adjustments
- [ ] Horizontal table scrolling on small screens

### Layout & Grid
- [ ] CSS Grid support with column span control
- [ ] Responsive layouts through repeat(..., minmax(...))
- [ ] Aspect ratio utilities

### Accessibility
- [ ] Skip-to-content link styling
- [ ] Focus-visible styles beyond buttons (links, selects, etc.)
- [ ] Error message styling for form validation

### Forms
- [ ] File input styling
- [ ] Form error/hint message components

### Components
- [ ] Tooltip / popover
- [ ] Toast / notification
- [ ] Tabs
- [ ] Pagination
- [ ] Dropdown menu (standalone, beyond nav)
