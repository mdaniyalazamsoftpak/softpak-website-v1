# SoftPak Website — Next.js + Tailwind

Pixel-perfect desktop (1440px) implementation of the Figma "Dev Handoff" home page, with routing scaffolded for the rest of the site.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v3.4

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/
  layout.tsx              # Root layout + Manrope font
  globals.css             # Tailwind directives + base styles (min-width: 1440px)
  page.tsx                # Home page — composes all home sections
  solutions/page.tsx      # Stub — build from Solutions.svg
  who-we-serve/page.tsx   # Stub — build from Who We Serve.svg
  resources/page.tsx      # Stub — build from Resources.svg
  partners/page.tsx       # Stub — build from Partners.svg
  about/page.tsx          # Stub

components/
  Header.tsx              # Top nav (used site-wide)
  Footer.tsx              # Footer (used site-wide)
  home/
    Hero.tsx
    LogoStrip.tsx
    Services.tsx
    Stats.tsx
    InfrastructureBanner.tsx
    PortfolioRebalancing.tsx
    WhoWeServe.tsx        # (client component — has tab state)
    Analytics.tsx
    ExpertPerspective.tsx
    MeetTheTeam.tsx
    Testimonials.tsx
    ContactUs.tsx         # (client component — form state)
```

## Design tokens

Extracted directly from the Figma SVG and defined in `tailwind.config.ts`:

| Token                  | Value      | Where it's used                                        |
| ---------------------- | ---------- | ------------------------------------------------------ |
| `brand-orange`         | `#F05A24`  | Primary CTA, accents, "Contact us", analytics band     |
| `brand-orangeAlt`      | `#F05D28`  | Hover / secondary orange                               |
| `brand-dark`           | `#191A23`  | Text, dark CTAs, dark cards                            |
| `brand-darker`         | `#0F0F0F`  | Full dark sections (infrastructure banner)             |
| `brand-peach`          | `#FFEEE7`  | "Who we serve" background                              |
| `brand-cardGray`       | `#F2F2F2`  | Service cards, portfolio rebalancing card              |
| `brand-cardGrayAlt`    | `#F9F9F9`  | Section backgrounds (blog, team, testimonials)         |
| `brand-bodyText`       | `#67646A`  | Body copy                                              |
| `brand-muted`          | `#DADADA`  | Dots, dividers, world map dots                         |

Typography: **Manrope** (Google Font, loaded via `next/font`). If the Figma uses a different face, swap the font in `app/layout.tsx` and the CSS variable in `tailwind.config.ts`.

## What needs to be replaced with real assets

The build uses placeholder blocks labeled with intended filenames. Drop your final assets into `/public/images/` with these names:

- `hero-1.jpg`, `hero-2.jpg` — the two-photo hero collage
- `service-1.png`, `service-2.png`, `service-3.png` — 3D illustrations for the "Our Services" cards
- `team-1.jpg` through `team-6.jpg` — team photos (square)
- `blog-thumb-1.jpg`, `blog-thumb-2.jpg`, `blog-thumb-3.jpg` — "Our Expert Perspective" thumbnails

Then wire them up with `next/image` in the respective components. Right now they're gradient placeholders showing the intended filename.

## Notes on the build

- **Locked to desktop.** Per brief, this replicates the Figma exactly at 1440px. `body` has `min-width: 1440px` so narrower viewports scroll horizontally rather than reflow. Remove that rule + revisit the components to make it responsive.
- **World map (Contact section).** The Figma SVG hand-places ~2,100 dots to form continents. Embedding that verbatim would balloon the page, so `ContactUs.tsx` uses a masked dot pattern to approximate the same visual with a fraction of the DOM. If you want the pixel-exact map, extract the `<g>` group from `Dev Handoff.svg` and inline it.
- **Circuit background (Infrastructure banner).** Also approximated with an SVG pattern — swap in an SVG export from Figma for pixel parity.
- **Logo wordmark.** The Figma export renders the SoftPak logo as a stylized wordmark that came out ambiguous in the SVG. I've used a simple "SoftPak" text mark — replace with your actual logo SVG in `Header.tsx` and `Footer.tsx`.
- **Interactive bits.** The "Who we serve" tabs and Contact form are `"use client"` components. Everything else is a server component.

## Next pages to build

Priority order based on typical marketing-site importance:

1. `/solutions` — from `Solutions.svg` (+ `Solutions Single.svg` for detail pages)
2. `/who-we-serve` — from `Who We Serve.svg`
3. `/resources` — from `Resources.svg` (+ `Webinars.svg`, `Casestdies.svg` sub-pages)
4. `/partners` — from `Partners.svg`

Each will reuse `<Header/>`, `<Footer/>`, and the tokens defined here — no new design system work needed.
