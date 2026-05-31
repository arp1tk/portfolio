"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
]

export function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-canvas pt-6">
      <div className="mx-auto w-full max-w-3xl px-6">
        <nav className="card flex items-center justify-between gap-6 p-1.5">
          {/* Monogram avatar (photo slot) */}
          <a
            href="#home"
            aria-label="Home"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-[13px] tracking-normal text-white"
            style={{ borderColor: "var(--color-avatar)" }}
          >
            AK
          </a>

          <div className="hidden items-center md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
              Contact Me
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="card mt-1 flex flex-col p-3 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="nav-link"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-1"
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
