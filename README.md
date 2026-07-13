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

## Next pages to build

Priority order based on typical marketing-site importance:

1. `/solutions` — from `Solutions.svg` (+ `Solutions Single.svg` for detail pages)
2. `/who-we-serve` — from `Who We Serve.svg`
3. `/resources` — from `Resources.svg` (+ `Webinars.svg`, `Casestdies.svg` sub-pages)
4. `/partners` — from `Partners.svg`

Each will reuse `<Header/>`, `<Footer/>`, and the tokens defined here — no new design system work needed.
