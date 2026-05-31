import { ArrowUpRight } from "lucide-react"
import { experiences } from "@/data/experience"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-3xl px-6 pt-20">
      <SectionHeading title="Experience" />
      <div className="flex flex-col gap-3">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.org} delay={i * 0.05}>
            <div className="card flex flex-col gap-4 p-6 pb-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3>
                    {exp.role} ·{" "}
                    <span className="text-muted">{exp.org}</span>
                  </h3>
                  <p className="text-subtle">{exp.location}</p>
                </div>
                <span className="shrink-0 text-subtle">{exp.period}</span>
              </div>

              <ul className="flex flex-col gap-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2.5 text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                    {b}
                  </li>
                ))}
              </ul>

              {exp.links && (
                <div className="flex flex-wrap gap-2">
                  {exp.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip"
                    >
                      <ArrowUpRight size={13} /> {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
