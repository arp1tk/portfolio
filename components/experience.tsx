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
