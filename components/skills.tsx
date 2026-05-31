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
