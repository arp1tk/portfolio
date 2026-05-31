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
