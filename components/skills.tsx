import type { LucideIcon } from "lucide-react"
import { Braces, Layout, Server, Database, Cloud, Wrench } from "lucide-react"
import { skillGroups } from "@/data/skills"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const icons: Record<string, LucideIcon> = {
  Languages: Braces,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "Cloud & DevOps": Cloud,
  "Tools & Testing": Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-3xl px-6 pt-20">
      <SectionHeading
        title="Skills"
        subtitle="The tools and technologies I reach for, grouped by how I use them."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.category] ?? Braces
          return (
            <FadeIn key={group.category} delay={(i % 2) * 0.05}>
              <div className="card flex h-full flex-col gap-5 p-6">
                <div className="flex items-start justify-between">
                  <span className="icon-tile w-fit">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="text-subtle tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3>{group.category}</h3>
                  <p className="mt-1 text-subtle">
                    {group.items.length} technologies
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
