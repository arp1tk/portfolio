# Portfolio Redesign — Design Spec

**Date:** 2026-05-31
**Owner:** Arpit Kukreti
**Goal:** Replace the current black/white two-column brutalist portfolio with a clean, light, modern design adapted from the `thomas-scott` designer template, and update all content to match the latest resume (`public/arpitResume.pdf`).

## Decisions (from brainstorming)

| Decision | Choice |
|---|---|
| Theme | Light (template default) |
| Profile photo | None — design around it (monogram/gradient tile in photo slot) |
| Scope | Full single-page site with sticky pill nav |
| Download CV target | `/arpitResume.pdf` (already in `public/`) |
| Projects shown | All 6 from `data/projects.ts` |
| Fidelity | Template visual language, adapted for a full-stack developer |
| Palette | Keep template palette: blue interactive `#3b82f6` + orange accent `#f97316` |
| Implementation approach | **A** — native rebuild in Next.js + Tailwind, porting the template's *design language* (not its Astro/Webflow files) |

## Tech approach

The `thomas-scott` template is an Astro/Webflow export; its CSS is a large Webflow dump that cannot be reused directly in this Next.js project. We port only the **design language** into a small set of CSS variables + Tailwind utilities, and rebuild clean React section components.

- **Font:** Switch Geist → **Inter** via `next/font/google` in `app/layout.tsx`.
- **Palette / tokens:** Replace the token block in `app/globals.css` with ported values:
  - Surfaces: `--bg #ffffff`, `--bg-alt #f3f5f9`, `--bg-subtle rgba(229,232,237,.5)`
  - Text: `--text #23272c`, `--text-muted #5f646b`, `--text-subtle #797e85`
  - Borders: `--border #d1d4da`, `--border-subtle #e5e8ed`
  - Brand/interactive: blue `#3b82f6` (hover `#2563eb`), accent orange `#f97316`
  - Dark ink (for primary pill buttons / monogram tile): `--ink #13161b`, on-ink text `#f3f5f9`
  - Radii: control 8px, element 12px, container 16px, full 9999px
  - Shadows: subtle (`0 2px 4px / 0 4px 8px / 0 8px 16px` low opacity)
- **Motion:** Reuse existing `framer-motion` for fade-in-on-scroll; CSS keyframe for the status-dot pulse; CSS `scroll-behavior: smooth` for nav anchors.

## Files

**Remove (old layout):**
- `components/header.tsx`, `components/sidebar.tsx`, `components/main-content.tsx` (old two-column structure replaced)
- `components/project-card.tsx` — review/replace with the new styled card
- `app/test/` — leave untracked / not part of this work

**Add (new section components, under `components/`):**
- `nav-bar.tsx` — sticky pill nav: brand/monogram, anchor links (Home, About, Experience, Projects, Skills, Contact), dark "Contact Me" pill button
- `hero.tsx` — centered: "Available for Work" status chip (pulsing green dot), `Arpit Kukreti` `<h1>`, "Full Stack Developer" subtitle, **Send Email** (primary dark) + **Download CV** (secondary, → `/arpitResume.pdf`)
- `about.tsx` — Profile card: monogram/gradient tile in photo slot + "Professional Profile" heading + bio + education (CS & Design @ IMS Engineering College, 2026) + location (India)
- `experience.tsx` — timeline/card list of 3 roles
- `projects.tsx` — grid of 6 project cards (image, name, category, tech, links) from `data/projects.ts`
- `skills.tsx` — chip groups by category
- `achievements.tsx` — SIH 2024 Winner + Patent Publication
- `contact.tsx` — "Contact Me" CTA block: email, LinkedIn, GitHub
- `footer.tsx` — © 2026 Arpit Kukreti

**Add (data):**
- `data/experience.ts` — typed array of the 3 roles (title, org, location, dates, bullets, links)
- `data/skills.ts` — typed skill groups
- `types/` — extend with `Experience`, `SkillGroup` types alongside existing `Project`

**Edit:**
- `app/page.tsx` — compose the new sections in order
- `app/layout.tsx` — Inter font, updated metadata
- `app/globals.css` — ported tokens + base styles

**Keep:**
- `data/projects.ts` and existing project images in `public/`

## Content (from latest resume)

**Hero/identity:** Arpit Kukreti — Full Stack Developer. Email `arpitkukrety27@gmail.com`, LinkedIn `linkedin.com/in/arpit-kukreti-4a3824302`, GitHub `github.com/arp1tk`.

**About:** Full Stack Developer focused on scalable web solutions (MERN, Next.js, REST APIs); SIH 2024 winning team (NIA social-media investigation platform). Education: B.Tech in Computer Science and Design, IMS Engineering College, Ghaziabad — May 2026.

**Experience (3 roles):**
1. **Full Stack Developer Intern — Systemsway (US, Remote)** · Apr 2026 – May 2026 — Built the company site (systemsway.com) and shipped features + 10+ production templates for the Dezite no-code platform (dezite.com).
2. **Full Stack Developer Intern — RD Group of Industries** · Oct 2025 – Dec 2025 — Built a full hotel booking system (princediamondhotel.com), worked on internal products, engineered backend for a vulnerability-scanning platform (voltsec.io) with Firebase auth + RBAC.
3. **Freelance Full Stack Developer — Self-Employed** · Dec 2024 – Oct 2025 — End-to-end MERN/Next.js solutions; shipped kdesign-interiors.com and devixlab.com.

**Projects:** All 6 from `data/projects.ts`.

**Skills:** Languages: JavaScript, TypeScript, HTML5, CSS3, Java · Frontend: React.js, Next.js, Tailwind CSS, Vite · Backend: Node.js, Express.js, JWT · Database: MongoDB, Firebase, PostgreSQL, Redis · Cloud & DevOps: AWS (EC2, S3), Docker, CI/CD basics · Tools & Testing: Git, GitHub, Postman, VS Code.

**Achievements:** Smart India Hackathon 2024 Winner (PS 1743, NIA) · Patent Publication (App No. 202211074490).

## Layout / visual notes

- Max content width ~`max-w-5xl`/`6xl`, centered, generous vertical rhythm (~64px between sections).
- Cards: white bg, `--border` 1px, rounded `16px`, subtle shadow on hover.
- Faithful to the template, all sections are **light**; body sections alternate white / `#f3f5f9` for visual breaks. The dark contrast comes from the primary pill buttons and the monogram tile (`#13161b`), not from dark section backgrounds.
- Buttons: primary = dark pill (`#13161b` bg, white text); secondary = white pill with border. Accent orange used sparingly (status dot is green per template; orange for hovers/highlights).
- Responsive: single column on mobile; nav collapses to a simple stacked/condensed menu.

## Out of scope

- Dark mode toggle (light only).
- Backend/contact form submission (contact is mailto + social links).
- Reworking project data content (reuse as-is).
- `app/test/` directory.

## Success criteria

- `npm run build` succeeds with no type errors.
- All resume content present and accurate (3 roles, updated skills incl. Redis, achievements).
- Visual language clearly matches the template: Inter font, light surfaces, soft rounded cards, pill nav, centered hero with status chip + two buttons, dark hero/footer.
- Download CV opens `/arpitResume.pdf`; Send Email / social links work.
- Responsive and visually correct at mobile + desktop widths.
