# Landing Page Content — Aesthetium

## Narrative Arc

The page follows a consulting-style argument:
**Problem → Insight → Solution → Proof → Action**

The reader is a developer who has shipped Tailwind or Bootstrap before.
They're not unhappy enough to look for something new — so we need to show them
what they're leaving on the table, not just what Aesthetium does.

---

## Section 1 — Hero

**Objective:** Communicate core value propositions clearly: Looks good out of the box, you write little code, it is lightweight.

**Headline:**
> Aesthetium

**Subline:**
> The minimalist CSS Framework

**Supporting line (the triple):**
> Light on the eye. Light on your code. Light on your bandwidth.

**CTAs:**
- Primary: Get Started
- Secondary: View Sample Sheet

**Visual:**
3D card stack showing real components — form, chart, gauge, image card.
Communicates: this is production-quality, not a toy.

---

## Section 2 — The Problem (NEW — currently missing)

**Objective:** Create tension. Name the pain the developer already feels but
hasn't fully articulated. Make them nod before we pitch anything.

**Headline:**
> Markup Simplicity

**Body:**
Show a Tailwind button vs an Aesthetium button side by side.

```html
<!-- Tailwind -->
<button class="flex items-center px-4 py-2 bg-indigo-600 text-white
               text-sm font-medium rounded-lg shadow hover:bg-indigo-700
               focus:outline-none focus:ring-2 focus:ring-indigo-500">
  Submit
</button>

<!-- Aesthetium -->
<button highlight>Submit</button>
```

**Callout line:**
> CSS frameworks should reduce code. Not replace it with different code.

**Secondary tension (weight):**
> Tailwind: 3.5 MB before purging. Bootstrap: 22 KB. Aesthetium: **4 KB gzipped. Done.**

**Tone:** Calm, not aggressive. State fact, let the developer draw the conclusion.

---

## Section 3 — The Insight / Live Demo

**Objective:** Show the paradigm, not just describe it.
The live demo already exists. Sharpen the framing around it.

**Headline:**
> Semantic HTML. Instant Design.

**The core claim to communicate:**
HTML already has a vocabulary. Aesthetium speaks it.
You don't learn a new language — you keep using the one you know.

**Demo split:**
Left: the copy-paste explanation with bullet points (current)
Right: live interactive form with zero classes

**Bullet points to keep/refine:**
- Semantic HTML only — your markup describes structure, not style
- Auto dark mode via `prefers-color-scheme` — no config
- Zero JavaScript — works in any environment, including SSR with no JS

---

## Section 4 — The "How" (3 Core Pillars)

**Objective:** Explain the mechanism behind the magic. Build credibility.
This is where we go from "sounds nice" to "I understand why it works."

**Headline:**
> Three Core Principles

**Pillar 1 — Classless**
> `<button>` is already a button. We style the element, not the class.

Code example:
```html
<button>Default</button>
<button highlight>Primary</button>
<button ghost>Secondary</button>
```

**Pillar 2 — Attribute-driven variants**
> Boolean attributes express intent. Not appearance.
> `positive`, `negative`, `alert`, `dark` — these names describe *what*, not *how*.

Code example:
```html
<aside positive>Changes saved.</aside>
<aside negative>Something went wrong.</aside>
<aside alert>Unsaved changes.</aside>
```

**Pillar 3 — Token-based theming**
> One token change. Everything updates.
> Override at the design level, semantic level, or component level.

Code example:
```css
:root {
  --color-accent: #6d28d9;
  --radius: 0.25rem;
  --font-body: 'Inter', sans-serif;
}
```

---

## Section 5 — Feature Grid (currently exists, refine framing)

**Objective:** Credibility checklist. Cover the "but what about..." objections.

**Headline:**
> Complete by Design

**Grid items (6):**
1. **Auto dark mode** — Respects `prefers-color-scheme`. No extra config.
2. **Under 5 KB** — The full framework, gzipped. No tree-shaking required.
3. **Zero JavaScript** — Pure CSS. Works anywhere, including no-JS SSR.
4. **Layout attributes** — `[row]`, `[stack]`, `[spread]`, `[centered]` — flex layout without a class.
5. **Semantic variants** — `highlight`, `ghost`, `positive`, `negative`, `dark`.
6. **Deep token system** — Design → semantic → component. Override at any tier.

---

## Section 6 — Comparison Table (NEW — currently missing)

**Objective:** Give the developer the numbers to make a rational decision.
Take the emotion out. Let the data speak.

**Headline:**
> Framework Comparison

| | Aesthetium | Tailwind CSS | Bootstrap |
|---|---|---|---|
| Size (gzipped) | **~4 KB** | ~3.5 MB (unpurged) | ~22 KB |
| JavaScript required | **No** | No | Optional |
| Class names needed | **Never** | Always | Always |
| Dark mode | **Auto** | Manual config | Manual |
| Build step required | **No** | Yes (PostCSS) | No |
| Learning curve | **HTML only** | Utility classes | Component classes |

**Callout:**
> No purging ritual. No PostCSS config. No learning a parallel vocabulary.
> Drop in one file. Write HTML. Ship.

---

## Section 7 — CTA Banner (currently exists)

**Objective:** Close. Remove friction. Give two exits (docs vs GitHub).

**Headline:**
> Start Building

**Subline:**
> One stylesheet. Semantic HTML. A complete design system.

**CTAs:**
- Primary: Get Started
- Secondary: GitHub

---

## Open Questions / Decisions Needed

- **Section 2 (Problem):** How aggressive do we want to be about naming Tailwind?
  Options: (a) name it directly, (b) show "a popular framework" without naming, (c) just show the contrast without labeling
- **Section 6 (Comparison):** Do we want a table or something more visual?
- **Social proof:** Do we have any? Testimonials, GitHub stars, projects using it?
  If not, skip — empty proof is worse than no proof.
- **Ordering:** Should the problem section come before or after the live demo?
  Current hypothesis: Problem → Demo flows better (tension → release).

---

## Tone Guidelines

- Talk to a developer who has shipped things and has opinions.
- Never explain what a class name is.
- Never say "powerful" or "flexible" — show it instead.
- Respect their intelligence: state the fact, let them draw the conclusion.
- Minimal copy. The demo does the heavy lifting.
