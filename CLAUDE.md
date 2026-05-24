# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # dev server at localhost:3000
pnpm build      # production build
pnpm start      # serve production build
pnpm lint       # ESLint
```

## Stack

- **Next.js 16** App Router (`src/app/`)
- **React 19**
- **Tailwind CSS v4** — configured via `postcss.config.mjs` + `@tailwindcss/postcss`, no `tailwind.config.*` file needed
- **TypeScript 5**
- **pnpm** as package manager

## Project: Vighnaharta Dental Clinic website

Color palette (60-30-10 rule):
- `#FFFFFF` — main background (60%)
- `#E5E7EB` — alternating section backgrounds (60%)
- `#004E3D` — Deep Emerald — navbar, hero, trust banners (30%)
- `#111827` — Charcoal Black — body text, footer (30%)
- `#1F8A70` — Mint Green — CTAs, hover states, badges (10%)

WCAG note: white text on `#004E3D` only; never mint on white.

## Architecture

```
src/
  app/
    layout.tsx   # root layout, fonts, global metadata
    page.tsx     # home page
    globals.css  # Tailwind base imports + CSS variables
```

All routes live under `src/app/`. New pages → new folders with `page.tsx`. Shared UI components go in `src/components/`. No separate pages router — App Router only.


<!-- #5fad9c -->