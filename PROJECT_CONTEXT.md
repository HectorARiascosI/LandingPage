# Crust Pizza Co. — Landing Page Project Context

## What this project is

A fully custom, pixel-accurate landing page for a fictional restaurant brand called **Crust Pizza Co.**, built as a professional portfolio piece and client-ready template. The design was replicated from a high-fidelity mockup image, matching layout, typography, color palette, iconography, card spacing, and section structure as closely as possible.

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| Next.js | 15.x (App Router) | Framework |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Google Fonts | Oswald + Open Sans | Typography |

- Deployed target: **Vercel**
- Repository: `https://github.com/HectorARiascosI/LandingPage`
- Project folder inside repo: `crust-pizza/`

---

## Brand Identity

- **Brand name:** Crust Pizza Co.
- **Tagline:** "For Delicious, Made-From-Scratch Pizzas"
- **Specialty:** Chicago-Style Thin Crust Pizza
- **Primary color:** Orange `#F47B20`
- **Dark color:** Near-black `#1a1a1a`
- **Background:** Warm cream `#FAF8F4`
- **Heading font:** Oswald (bold, uppercase, condensed)
- **Body font:** Open Sans (clean, readable)

---

## Project Structure

```
crust-pizza/
├── app/
│   ├── globals.css        # Tailwind v4 imports + Google Fonts + CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx         # Sticky top nav
│   ├── Hero.tsx           # Full-width hero banner
│   ├── MenuSection.tsx    # 4-item menu grid
│   ├── ChicagoStyle.tsx   # Brand story + icon grid + polaroid photos
│   ├── WaysToEnjoy.tsx    # Pizza image + promo cards + Why Choose Us
│   ├── Community.tsx      # (content embedded in WaysToEnjoy)
│   ├── FranchiseCTA.tsx   # Franchise opportunity + Submit a Request
│   └── Footer.tsx         # Logo + nav links + copyright
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## Sections — Detailed Breakdown

### 1. Navbar (`Navbar.tsx`)
- Sticky, `z-50`, cream background
- Left side: HOME (active, orange pill), MENU, LOCATIONS, ORDER ONLINE
- Center: circular dark logo badge with "✦ CRUST ✦ / PIZZA / CO." — oversized, overlaps navbar
- Right side: ABOUT, CONTACT, orange bell icon, Twitter bird icon, orange "CALL NOW" button
- Mobile: hamburger menu with full dropdown
- Built with `useState` for mobile toggle — marked `"use client"`

### 2. Hero (`Hero.tsx`)
- Full-width rounded card (`rounded-3xl`), height 380–440px
- Background: Unsplash pizza photo (top-down shot)
- Text overlay: dark irregular/torn-edge block behind headline using CSS `clip-path`
- Headline: "FOR DELICIOUS, MADE-FROM SCRATCH PIZZAS" — white, Oswald, 4xl–5xl
- Subtitle: small gray text below the dark block
- CTA: orange rounded-full "Order Online" button

### 3. Menu Section (`MenuSection.tsx`)
- Section title: "OUR MENU"
- 4-column grid (2 cols on mobile)
- Each card: 4:3 aspect ratio image with `rounded-3xl`, item name (uppercase bold), short description, small orange arrow button
- Bottom CTA: outlined orange pill button "VIEW OUR COMPLETE MENU"
- Menu items: Chicken Parm, Chicken Alfredo, Spaghetti & Meatballs, Baked Mac & Cheese

### 4. Chicago Style (`ChicagoStyle.tsx`)
- 3-column layout:
  - Left: large headline "HOME OF THE CHICAGO-STYLE THIN CRUST PIZZA", body paragraph, "LEARN MORE" orange button + "SEE LOCATIONS" underline link
  - Center: 3×2 grid of orange square icon tiles (Dine-In, Curbside Pickup, In-Store Pickup, Learn More, In-Store Pickup, Plan/Things) — each with SVG icon + label
  - Right: two overlapping polaroid-style photos (white border, drop shadow, rotated at different angles)

### 5. Ways to Enjoy (`WaysToEnjoy.tsx`)
- Section title: "WAYS TO ENJOY"
- 2-column asymmetric grid (`1fr 1.4fr`):
  - Left column:
    - Large square pizza image with circular Crust Pizza Co. logo stamp overlay (dark bg, gold border)
    - Below: "@yourbrandhandle" in orange, "LET'S WORK TOGETHER FOR OUR COMMUNITY" headline, body text
  - Right column:
    - Top: 2 dark cards side by side:
      - "Award-Winning Pizza & Service" — orange badge icon, white text, "LEARN MORE" orange button
      - "Kids Eat Free Tuesdays!" — orange badge icon, white text, outlined orange "VIEW OUR COMPLETE MENU" button
    - Bottom: white card "WHY CHOOSE US" with 3×2 grid of food/lifestyle photos

### 6. Community (`Community.tsx`)
- Content fully embedded inside `WaysToEnjoy.tsx`
- This component returns `null` — kept for structural clarity

### 7. Franchise CTA (`FranchiseCTA.tsx`)
- 3-column horizontal layout:
  - Left: "WANT TO OWN YOUR OWN CRUST PIZZA CO.?" headline, body text, orange "SUBMIT A REQUEST" pill button
  - Center: restaurant interior/exterior photo with `rounded-2xl`
  - Right: "SUBMIT A REQUEST" title + 3 compact square-rounded orange buttons: CATERING, PARTY/LARGE, FOLLOW US

### 8. Footer (`Footer.tsx`)
- Left: circular dark logo + "Want to place an order now?" + orange "Order Online →" link
- Right: nav links — MENU, CATERING, CATERING, COMMISSIONS, PRIVACY, TERMS
- Bottom: copyright line centered

---

## Design Decisions & Notes

- All images sourced from **Unsplash** (free, no attribution required for portfolio use)
- Tailwind v4 uses `@import "tailwindcss"` syntax — no `tailwind.config.js` needed
- Custom CSS variables defined in `globals.css`: `--orange`, `--dark`, `--cream`
- `clip-path` used in Hero for the torn/irregular dark text background effect
- Polaroid photos in ChicagoStyle use CSS `rotate-6` and `-rotate-3` Tailwind utilities
- Logo stamp in WaysToEnjoy uses gold border `#c8a96e` to match brand aesthetic
- All hover states use `transition-colors` for smooth interactions
- Responsive breakpoints: mobile-first, `md:` for desktop layouts
- No external component libraries — pure Tailwind + custom SVG icons

---

## What this demonstrates (portfolio value)

- Ability to replicate a professional UI design pixel-accurately
- Component-based architecture in Next.js App Router
- Responsive layout with Tailwind CSS v4
- Custom SVG iconography without icon libraries
- CSS clip-path and transform techniques
- Clean TypeScript with zero type errors
- Proper semantic HTML structure
- Deployment-ready for Vercel

---

## Current Status

- Code: complete, all components built
- Diagnostics: zero errors across all files
- Git: committed and pushed to `https://github.com/HectorARiascosI/LandingPage`
- Deployment: pending Vercel setup (Root Directory must be set to `crust-pizza`)
