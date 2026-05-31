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
