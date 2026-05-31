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
    <section className="mx-auto w-full max-w-3xl px-6 pt-20">
      <SectionHeading title="Achievements" />
      <div className="grid gap-3 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.05}>
            <div className="card flex h-full flex-col gap-4 p-6 pb-8">
              <span className="icon-tile w-fit">
                <a.icon size={24} />
              </span>
              <div>
                <h3>{a.title}</h3>
                <p className="mt-2 text-muted">{a.detail}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
