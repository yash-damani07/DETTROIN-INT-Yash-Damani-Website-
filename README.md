# Vasant Valley School — Redesign Concept

A modern, responsive redesign concept of [vasantvalley.org](https://www.vasantvalley.org/), built as a frontend
development assignment. This is an independent design study — **not** the official school website, and not
affiliated with or endorsed by Vasant Valley School.

> ⚠️ Fill in the bracketed fields below before you submit.

## Submission Details

| Field | Value |
|---|---|
| **Full Name** | Yash Damani |
| **Intern ID** | [Your Intern ID] |
| **Email Address** | [yashdamani07@gmail.com] |
| **GitHub Username** | [ https://github.com/yash-damani07] |
| **Selected Website** | https://www.vasantvalley.org/ |
| **Live Demo Link** | [https://your-project.vercel.app](https://your-project.vercel.app) |

## Technologies Used

- **React 19** + **Vite** — component-based UI, fast dev/build tooling
- **React Router v7** — client-side routing across 7 pages
- **Tailwind CSS v4** — utility-first styling with a custom design-token theme
- **Framer Motion** — scroll-reveal and micro-interaction animations
- **oxlint** — static analysis / linting
- **Vercel** — deployment, with SPA rewrites configured in `vercel.json`

## Project Structure

```
vasant-redesign/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Navbar, Footer, PageHero, PillarOrbit, ArcDivider, Reveal
│   ├── data/              # content.js — all site copy in one place
│   ├── pages/              # Home, About, LearningExperience, Infrastructure,
│   │                       # Admissions, News, Contact, NotFound
│   ├── App.jsx             # routes + shared layout
│   ├── main.jsx            # app entry, router provider
│   └── index.css           # design tokens (color/type), global styles
├── vercel.json
└── package.json
```

## Key Improvements Made

**UI / Visual Design**
- Replaced the original's default WordPress-theme look with a custom design system: a
  brick-red / sandstone / pine-green / gold palette drawn directly from the school's actual
  red-sandstone campus and green cover, paired with a Fraunces + Public Sans + Space Mono
  type system.
- Introduced a signature interactive element — an orbiting diagram of the school's real
  "8 Pillars of the Learning Experience" (Cerebral, Social, Physical, Spiritual, Emotional,
  Environmental, Creative, Ethical) arranged around a central "amphitheatre," echoing the
  actual campus layout of two wings joined by an open amphitheatre.
- Recurring arc-shaped section dividers reinforce that same amphitheatre motif throughout
  the site instead of generic straight-line separators.

**UX / Navigation**
- Condensed a sprawling, multi-level WordPress mega-menu into a clear 6-item primary nav
  with a dedicated "Apply Now" call-to-action, plus a clean slide-down mobile menu.
- Restructured content into focused, purpose-built pages (About, Learning Experience,
  Infrastructure, Admissions, News & Events, Contact) instead of one dense homepage.
- Added a working (frontend-only) **Admissions enquiry form** with inline validation and
  an FAQ accordion, replacing static contact-only information.

**Responsiveness**
- Fully responsive from mobile through desktop using Tailwind's breakpoint system —
  verified at mobile, tablet, and desktop widths.
- Layouts reflow (grid → stack), the orbit diagram and nav collapse gracefully on small
  screens.

**Accessibility**
- Visible keyboard focus rings on all interactive elements.
- `prefers-reduced-motion` respected — animations are disabled for users who request it.
- Semantic headings, labelled form fields, and `aria-` attributes on toggles/menus.

**Performance**
- Vite production build with code-split, minified output.
- Single Google Fonts request with `display=swap` to avoid render-blocking text.
- No heavy image carousels or unoptimized WordPress asset bloat from the original site.

**Code Quality**
- Component-based architecture with all copy centralized in `src/data/content.js`,
  making the site easy to re-skin or re-word without touching JSX.
- Passes `oxlint` with zero errors/warnings; clean production build with no console errors.

## Running Locally

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Deployment

Deployed on **Vercel**. `vercel.json` includes a rewrite rule so client-side routes
(e.g. `/admissions`, `/about`) resolve correctly on refresh/direct navigation.
