import { skillGroups } from "@/data/skills"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-3xl px-6 pt-20">
      <SectionHeading title="Skills" />
      <FadeIn>
        <div className="card overflow-hidden">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-3 border-b border-line px-6 py-5 last:border-b-0 sm:flex-row sm:items-center sm:gap-6"
            >
              <h3 className="sm:w-40 sm:shrink-0">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
