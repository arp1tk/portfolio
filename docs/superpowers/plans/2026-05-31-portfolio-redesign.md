# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio in the `thomas-scott` template's light, modern visual language (Next.js + Tailwind) and update all content to the latest resume.

**Architecture:** Port the template's *design language* (Inter font, light surfaces, blue+orange palette, soft rounded cards, pill nav, centered hero) into CSS tokens via Tailwind v4 `@theme`, then build focused React section components composed in `app/page.tsx`. Old two-column components are removed. Project data is reused; experience and skills get typed data files.

**Tech Stack:** Next.js 15 (App Router), React 19, Tailwind CSS v4, framer-motion, next/font (Inter), lucide-react.

**Spec:** `docs/superpowers/specs/2026-05-31-portfolio-redesign-design.md`

**Note on testing:** This is a presentational static site with no logic to unit-test. Each task is verified by `npm run build` succeeding (no type/lint errors) and visual confirmation in `npm run dev`. There are no unit tests.

---

## File Structure

**Create:**
- `components/nav-bar.tsx` — sticky pill nav (client: mobile toggle + scroll state)
- `components/fade-in.tsx` — reusable framer-motion scroll fade wrapper (client)
- `components/hero.tsx` — centered hero
- `components/about.tsx` — profile card + monogram tile
- `components/experience.tsx` — role timeline
- `components/projects.tsx` — project card grid (client: nothing stateful needed → server)
- `components/skills.tsx` — skill chip groups
- `components/achievements.tsx` — achievements cards
- `components/contact.tsx` — contact CTA
- `components/site-footer.tsx` — footer
- `components/section-heading.tsx` — shared eyebrow + heading
- `data/experience.ts` — typed roles
- `data/skills.ts` — typed skill groups
- `types/experience.ts`, `types/skill.ts` — types

**Modify:**
- `app/globals.css` — ported tokens via `@theme`
- `app/layout.tsx` — Inter font + metadata
- `app/page.tsx` — compose new sections

**Delete:**
- `components/header.tsx`, `components/sidebar.tsx`, `components/main-content.tsx`, `components/project-card.tsx`

**Keep:** `data/projects.ts`, `types/project.ts`, `public/*` images, `public/arpitResume.pdf`.

---

### Task 1: Design tokens + Inter font foundation

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `app/globals.css` with ported tokens**

```css
@import "tailwindcss";

@theme {
  --color-surface: #ffffff;
  --color-surface-alt: #f3f5f9;
  --color-surface-subtle: #eef1f6;
  --color-ink: #13161b;
  --color-on-ink: #f3f5f9;
  --color-content: #23272c;
  --color-muted: #5f646b;
  --color-subtle: #797e85;
  --color-line: #d1d4da;
  --color-line-subtle: #e5e8ed;
  --color-brand: #3b82f6;
  --color-brand-hover: #2563eb;
  --color-accent: #f97316;
  --color-status: #22c55e;

  --font-sans: var(--font-inter), system-ui, sans-serif;

  --radius-card: 16px;
}

:root {
  --background: var(--color-surface);
  --foreground: var(--color-content);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-surface);
  color: var(--color-content);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: var(--color-brand);
  color: #ffffff;
}

@keyframes status-pulse {
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
  70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

.status-dot {
  animation: status-pulse 2s infinite;
}
```

- [ ] **Step 2: Update `app/layout.tsx` to use Inter**

```tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Arpit Kukreti — Full Stack Developer",
  description:
    "Portfolio of Arpit Kukreti — Smart India Hackathon 2024 Winner & Full Stack Developer specializing in the MERN stack and Next.js.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds (page still renders old components — fine for now).

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: port thomas-scott design tokens and Inter font"
```

---

### Task 2: Types and data files (experience, skills)

**Files:**
- Create: `types/experience.ts`, `types/skill.ts`
- Create: `data/experience.ts`, `data/skills.ts`

- [ ] **Step 1: Create `types/experience.ts`**

```ts
export interface ExperienceLink {
  label: string
  url: string
}

export interface Experience {
  role: string
  org: string
  location: string
  period: string
  bullets: string[]
  links?: ExperienceLink[]
}
```

- [ ] **Step 2: Create `types/skill.ts`**

```ts
export interface SkillGroup {
  category: string
  items: string[]
}
```

- [ ] **Step 3: Create `data/experience.ts`**

```ts
import type { Experience } from "@/types/experience"

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    org: "Systemsway",
    location: "US, Remote",
    period: "Apr 2026 – May 2026",
    bullets: [
      "Built the company's official website and contributed features to the Dezite no-code platform.",
      "Developed and shipped 10+ production-ready website templates for Dezite, enabling faster site creation and deployment for end users.",
    ],
    links: [
      { label: "systemsway.com", url: "https://systemsway.com/" },
      { label: "dezite.com", url: "https://dezite.com/" },
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "RD Group of Industries",
    location: "Remote",
    period: "Oct 2025 – Dec 2025",
    bullets: [
      "Designed and developed a complete hotel booking system for a live hotel website, including room availability, pricing, booking workflows, and admin-side management.",
      "Worked on multiple internal products, contributing to backend systems and feature development.",
      "Engineered backend functionality for a vulnerability scanning platform (API, web, cloud, network) with Firebase auth and user-based access control.",
    ],
    links: [
      { label: "princediamondhotel.com", url: "https://www.princediamondhotel.com/rooms" },
      { label: "voltsec.io", url: "https://www.voltsec.io/" },
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    org: "Self-Employed",
    location: "Remote",
    period: "Dec 2024 – Oct 2025",
    bullets: [
      "Delivered end-to-end web solutions for clients using the MERN stack and Next.js, focusing on scalability and performance.",
      "Developed and deployed production-grade websites including an interior design platform and an IT consultancy website.",
    ],
    links: [
      { label: "kdesign-interiors.com", url: "https://www.kdesign-interiors.com/" },
      { label: "devixlab.com", url: "https://www.devixlab.com/" },
    ],
  },
]
```

- [ ] **Step 4: Create `data/skills.ts`**

```ts
import type { SkillGroup } from "@/types/skill"

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Java"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express.js", "JWT"] },
  { category: "Database", items: ["MongoDB", "Firebase", "PostgreSQL", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3)", "Docker", "CI/CD basics"] },
  { category: "Tools & Testing", items: ["Git", "GitHub", "Postman", "VS Code"] },
]
```

- [ ] **Step 5: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 6: Commit**

```bash
git add types/experience.ts types/skill.ts data/experience.ts data/skills.ts
git commit -m "feat: add experience and skills data from latest resume"
```

---

### Task 3: Shared helpers (FadeIn, SectionHeading)

**Files:**
- Create: `components/fade-in.tsx`, `components/section-heading.tsx`

- [ ] **Step 1: Create `components/fade-in.tsx`**

```tsx
"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Create `components/section-heading.tsx`**

```tsx
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-content sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-muted">{subtitle}</p>}
    </div>
  )
}
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add components/fade-in.tsx components/section-heading.tsx
git commit -m "feat: add FadeIn and SectionHeading shared components"
```

---

### Task 4: NavBar

**Files:**
- Create: `components/nav-bar.tsx`

- [ ] **Step 1: Create `components/nav-bar.tsx`**

```tsx
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
]

export function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-line-subtle bg-surface/80 px-3 py-2 shadow-sm backdrop-blur">
        <a href="#home" className="flex items-center gap-2 pl-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-bold text-on-ink">
            AK
          </span>
          <span className="hidden text-sm font-semibold text-content sm:block">
            Arpit Kukreti
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-content"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-on-ink transition-opacity hover:opacity-90 sm:block"
          >
            Contact Me
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-content md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-line-subtle bg-surface p-4 shadow-md md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-alt hover:text-content"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-ink px-3 py-2 text-center text-sm font-medium text-on-ink"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/nav-bar.tsx
git commit -m "feat: add sticky pill nav bar"
```

---

### Task 5: Hero

**Files:**
- Create: `components/hero.tsx`

- [ ] **Step 1: Create `components/hero.tsx`**

```tsx
import { Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-20 text-center sm:pt-28"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-subtle bg-surface-alt px-3 py-1.5">
        <span className="status-dot h-2 w-2 rounded-full bg-status" />
        <span className="text-sm font-medium text-muted">Available for Work</span>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight text-content sm:text-6xl">
        Arpit Kukreti
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Full Stack Developer — building scalable web apps with the MERN stack &
        Next.js. Smart India Hackathon 2024 Winner.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:arpitkukrety27@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-on-ink transition-opacity hover:opacity-90"
        >
          <Mail size={16} /> Send Email
        </a>
        <a
          href="/arpitResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-content transition-colors hover:bg-surface-alt"
        >
          <Download size={16} /> Download CV
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/hero.tsx
git commit -m "feat: add centered hero with status chip and CTAs"
```

---

### Task 6: About / Profile card

**Files:**
- Create: `components/about.tsx`

- [ ] **Step 1: Create `components/about.tsx`**

```tsx
import { MapPin, GraduationCap } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <FadeIn>
        <div className="grid gap-6 rounded-3xl border border-line-subtle bg-surface p-6 shadow-sm sm:grid-cols-[260px_1fr] sm:p-8">
          {/* Monogram tile (photo slot) */}
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-ink to-[#2b3340]">
            <span className="text-6xl font-bold text-on-ink">AK</span>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold tracking-tight text-content">
              Professional Profile
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Full Stack Developer passionate about creating scalable web
              solutions, building innovative applications, and solving complex
              problems through technology. Hands-on experience with the MERN
              stack, Next.js, and RESTful APIs. Part of the Smart India Hackathon
              2024 winning team, building a social media investigation platform
              for the National Investigation Agency (NIA), India.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-subtle">
              <span className="inline-flex items-center gap-2">
                <GraduationCap size={16} className="text-brand" />
                B.Tech CS &amp; Design, IMS Engineering College — 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-brand" />
                Ghaziabad, India
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/about.tsx
git commit -m "feat: add about/profile card with monogram tile"
```

---

### Task 7: Experience

**Files:**
- Create: `components/experience.tsx`

- [ ] **Step 1: Create `components/experience.tsx`**

```tsx
import { ExternalLink } from "lucide-react"
import { experiences } from "@/data/experience"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

export function Experience() {
  return (
    <section id="experience" className="bg-surface-alt">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.org} delay={i * 0.05}>
              <div className="rounded-2xl border border-line-subtle bg-surface p-6 shadow-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-content">
                      {exp.role} ·{" "}
                      <span className="text-brand">{exp.org}</span>
                    </h3>
                    <p className="text-sm text-subtle">{exp.location}</p>
                  </div>
                  <span className="text-sm text-subtle">{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                {exp.links && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {exp.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-hover"
                      >
                        {link.label} <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/experience.tsx
git commit -m "feat: add experience section"
```

---

### Task 8: Projects

**Files:**
- Create: `components/projects.tsx`

- [ ] **Step 1: Create `components/projects.tsx`**

Note: `data/projects.ts` `Project.image` is a string array; use the first image as the card cover. Some projects have no `features`/`links` — guard with optional chaining.

```tsx
import { ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A selection of products and platforms I've designed and shipped."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.name} delay={(i % 2) * 0.05}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line-subtle bg-surface shadow-sm transition-shadow hover:shadow-md">
              {project.image?.[0] && (
                <div className="aspect-video overflow-hidden bg-surface-alt">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image[0]}
                    alt={`${project.name} screenshot`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-content">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-subtle">{project.tech}</p>
                {project.links && project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-hover"
                      >
                        {link.label} <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors. (If `Project` type lacks `category`/`tech`, confirm in `types/project.ts`; the data uses both, so the type should include them. If it doesn't, add `category: string` and `tech: string` to the interface.)

- [ ] **Step 3: Commit**

```bash
git add components/projects.tsx
git commit -m "feat: add projects grid"
```

---

### Task 9: Skills

**Files:**
- Create: `components/skills.tsx`

- [ ] **Step 1: Create `components/skills.tsx`**

```tsx
import { skillGroups } from "@/data/skills"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

export function Skills() {
  return (
    <section id="skills" className="bg-surface-alt">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <SectionHeading eyebrow="Skills" title="My toolbox" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={(i % 3) * 0.05}>
              <div className="rounded-2xl border border-line-subtle bg-surface p-5 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-content">
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line-subtle bg-surface-alt px-3 py-1 text-xs font-medium text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/skills.tsx
git commit -m "feat: add skills section"
```

---

### Task 10: Achievements

**Files:**
- Create: `components/achievements.tsx`

- [ ] **Step 1: Create `components/achievements.tsx`**

```tsx
import { Trophy, FileText } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2024 — Winner",
    detail:
      "Won SIH 2024 (Problem Statement 1743 by NIA) by building a tool to analyze and document social media data.",
  },
  {
    icon: FileText,
    title: "Patent Publication",
    detail: "App No. 202211074490 — published in the first year of college.",
  },
]

export function Achievements() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <SectionHeading eyebrow="Achievements" title="Milestones" />
      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.05}>
            <div className="flex gap-4 rounded-2xl border border-line-subtle bg-surface p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <a.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-content">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {a.detail}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/achievements.tsx
git commit -m "feat: add achievements section"
```

---

### Task 11: Contact + Footer

**Files:**
- Create: `components/contact.tsx`, `components/site-footer.tsx`

- [ ] **Step 1: Create `components/contact.tsx`**

```tsx
import { Mail, Linkedin, Github } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <FadeIn>
        <div className="rounded-3xl bg-ink px-6 py-14 text-center text-on-ink sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's work together
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-on-ink/70">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:arpitkukrety27@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-5 py-3 text-sm font-medium text-content transition-opacity hover:opacity-90"
            >
              <Mail size={16} /> arpitkukrety27@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/arpit-kukreti-4a3824302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-on-ink transition-colors hover:bg-white/10"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/arp1tk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-on-ink transition-colors hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
```

- [ ] **Step 2: Create `components/site-footer.tsx`**

```tsx
export function SiteFooter() {
  return (
    <footer className="border-t border-line-subtle">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-subtle sm:flex-row">
        <p>© 2026 Arpit Kukreti. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add components/contact.tsx components/site-footer.tsx
git commit -m "feat: add contact CTA and footer"
```

---

### Task 12: Compose page + remove old components

**Files:**
- Modify: `app/page.tsx`
- Delete: `components/header.tsx`, `components/sidebar.tsx`, `components/main-content.tsx`, `components/project-card.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-surface">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
```

- [ ] **Step 2: Delete old components**

```bash
git rm components/header.tsx components/sidebar.tsx components/main-content.tsx components/project-card.tsx
```

- [ ] **Step 3: Confirm nothing else imports the deleted files**

Run: `grep -rn "components/\(header\|sidebar\|main-content\|project-card\)" app components` (PowerShell: use Grep tool)
Expected: No matches.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds with no type or lint errors.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose redesigned portfolio page and remove old layout"
```

---

### Task 13: Final verification

- [ ] **Step 1: Run dev server and visually verify**

Run: `npm run dev`
Check at `http://localhost:3000`:
- Inter font, light surfaces, pill nav sticky at top
- Hero: status chip with pulsing green dot, name, subtitle, two buttons
- Download CV opens `/arpitResume.pdf`; Send Email opens mail client
- About card with AK monogram tile + education + location
- Experience: 3 roles (Systemsway, RD Group, Freelance) with working links
- Projects: all 6 cards with images and links
- Skills: 6 groups incl. Redis in Database
- Achievements: SIH 2024 + Patent
- Contact dark CTA + footer
- Mobile: nav collapses to hamburger menu; sections stack in one column

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: No errors.

- [ ] **Step 3: Final commit (if any tweaks)**

```bash
git add -A
git commit -m "chore: portfolio redesign final polish"
```

---

## Self-Review Notes

- **Spec coverage:** nav ✓ (T4), hero+chip+CV ✓ (T5), about/monogram ✓ (T6), 3 experiences ✓ (T7/T2), 6 projects ✓ (T8), skills incl. Redis ✓ (T9/T2), achievements ✓ (T10), contact ✓ (T11), footer ✓ (T11), Inter+tokens ✓ (T1), old components removed ✓ (T12), light-only ✓, blue+orange palette ✓.
- **Token class names** used consistently across components: `surface`, `surface-alt`, `ink`, `on-ink`, `content`, `muted`, `subtle`, `line`, `line-subtle`, `brand`, `brand-hover`, `accent`, `status`. All defined in `@theme` (T1).
- **Project type:** `data/projects.ts` uses `category` and `tech` on every entry; verify `types/project.ts` includes them (T8 step 2 guards this).
- **Images:** uses raw `<img>` with eslint-disable to avoid `next/image` remote/sizing config for local public assets.
