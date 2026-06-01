import { skillGroups } from "@/data/skills"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

const allSkills = skillGroups.flatMap((g) => g.items)
const ROWS = 3
const rows = Array.from({ length: ROWS }, (_, r) =>
  allSkills.filter((_, i) => i % ROWS === r),
)
const durations = [40, 48, 44]

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: string[]
  reverse?: boolean
  duration: number
}) {
  // Duplicate the items so the track loops seamlessly at -50%.
  const loop = [...items, ...items]
  return (
    <div className="marquee">
      <div
        className={`marquee-track${reverse ? " marquee-track--reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="marquee-item"
            aria-hidden={i >= items.length}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-3xl px-6 pt-20">
      <SectionHeading
        title="Skills"
        subtitle="The tools and technologies I work with day to day."
      />
      <FadeIn>
        <div className="card flex flex-col gap-4 overflow-hidden py-8">
          {rows.map((items, i) => (
            <MarqueeRow
              key={i}
              items={items}
              reverse={i % 2 === 1}
              duration={durations[i]}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
