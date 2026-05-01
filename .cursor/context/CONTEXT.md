# Marian Portfolio — Cursor AI Context

## Project Overview
Building a personal portfolio/landing page for a freelance front-end developer and web designer based in Vernon, BC, Canada. The design was created in Figma and is provided as a screenshot in this context folder (`design.png` or similar). Replicate it precisely.

---

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (subtle, tasteful — no overdoing it)
- **Font:** Use Fonts from public/fonts folder only and according the design
- **Images:** Next.js `<Image />` component throughout — never raw `<img>` tags
- **Forms:** React Hook Form for the contact form
- **Icons:** Lucide React

---

## Design Tokens (extract from Figma screenshot)
- **Background:** warm off-white / cream `#F7F4EF`
- **Text primary:** near-black `#1A1A18`
- **Text secondary:** warm grey `#6B6B67`
- **Accent / dark section:** deep forest green `#2D3E2F`
- **Accent text on dark:** warm white `#F7F4EF`
- **Border / divider:** `#E3DED6`
- **CTA button:** outlined style, dark border, no fill — hover fills dark

---

## Page Sections (top to bottom, match Figma screenshot exactly)

### 1. Navigation
- Logo: `MS MARIAN` monogram left
- Links right: About, Projects, Services, Contact
- Sticky, transparent over hero, white bg on scroll
- Mobile: hamburger menu

### 2. Hero
- Full-width landscape photo background (nature/mountains — Vernon BC feel)
- White card overlay bottom-left with:
  - Large serif headline: *"I build websites for people who care about what they do."*
  - Short subtext paragraph (2–3 lines)
  - Two CTA buttons side by side: **View my work** (outlined) and **Let's talk** (text link with arrow)
- Subtle fade-in animation on load

### 3. About / Bio
- Two-column layout: photo left, text right
- Italic serif lead line: *"A front-end developer based in Vernon, BC — building websites that actually do their job."*
- Body paragraph below
- Blockquote testimonial styled in italic serif with attribution
- "More about me →" text link

### 4. Selected Work
- Section heading: *"Selected Work."* with italic subtitle
- Tag filter row (optional): freelance, professional experience, etc.
- Alternating layout per project (image left + text right, then text left + image right)
- Each project has: number (01, 02…), title, location, description paragraph, **Visit website →** link
- Hover state on images: slight scale up + shadow

### 5. Stats Strip
- Three stats side by side, centered
- Each: large number + small label below
- Example: `15+` / *Websites launched*, `50K+` / *Combined monthly visitors*, `5★` / *Google rating*
- Clean, minimal — no background color, just whitespace

### 6. Services
- Dark green background section `#2D3E2F`, light text
- Heading: *"Services."* + italic subtitle
- 2×2 grid of service cards:
  - Custom Website Design & Development
  - WordPress Websites
  - WordPress Websites (maintenance)
  - WooCommerce & Online Stores
- Each card: bold title + short description paragraph
- CTA button at bottom center: **"Let's talk about your project →"** — outlined white button

### 7. Contact
- Light background, two columns
- Left: form with fields — First name, Last name, Email, Phone, Message textarea — and **Send message** button (solid dark, prominent)
- Right: short paragraph + email address + phone number
- Form built with React Hook Form, basic validation, success state shown after submit

### 8. Footer
- Logo left
- Nav links center or right
- Copyright line
- Social links (LinkedIn, etc.) if applicable

---

## File Structure to Generate
```
/app
  layout.tsx          ← fonts, metadata, global styles
  page.tsx            ← composes all sections
/components
  Nav.tsx
  Hero.tsx
  About.tsx
  Work.tsx            ← project card + alternating layout
  Stats.tsx
  Services.tsx
  Contact.tsx
  Footer.tsx
/lib
  projects.ts         ← project data array
  services.ts         ← services data array
/public
  /images             ← place all photos here
```

---

## Component Rules
- Every section is a standalone component in `/components`
- No inline styles — Tailwind only
- All text content lives in `/lib` data files, not hardcoded in JSX
- Use `section` tags with `id` attributes matching nav links (`#about`, `#work`, `#services`, `#contact`)
- Responsive breakpoints: mobile-first, `md:` for tablet, `lg:` for desktop
- No third-party UI libraries (no shadcn, no MUI) — build everything from scratch to match Figma

---

## Responsiveness Requirements
- Mobile: single column throughout, hamburger nav, hero card full width
- Tablet (`md`): about section becomes two-column, work items stack image top/text bottom
- Desktop (`lg`): full alternating work layout, 2×2 services grid

---

## Animations (Framer Motion)
- Hero card: fade up on load, 0.4s delay
- Section headings: fade in when scrolled into view (`whileInView`)
- Work images: subtle scale on hover (`whileHover: { scale: 1.02 }`)
- Nav links: underline slide-in on hover
- Keep everything subtle — this is a professional portfolio, not a demo reel

---

## SEO & Performance
- `metadata` export in `layout.tsx` with title, description, OG tags
- All images use `priority` prop on hero, `lazy` elsewhere
- Use semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Page should score 90+ on Lighthouse

---

## Figma Reference
The Figma design screenshot is included in this context folder.  
File name: `design.png` (or whichever screenshot you placed here).  
**Match it as closely as possible** — spacing, font sizes, section proportions, color palette. When in doubt, refer back to the screenshot.

---

## Notes for Cursor
- Ask me before inventing any copy — use placeholder comments like `{/* TODO: replace with real text */}` if needed
- Do not use placeholder images from the internet — use `/public/images/placeholder.png` and I will replace them
- Build one section at a time if scope is large — start with `Nav` + `Hero` first
- Keep components clean and readable — this codebase will be maintained and shown to clients
