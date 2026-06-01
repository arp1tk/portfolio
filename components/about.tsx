import { MapPin, GraduationCap, Code2 } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-3xl px-6 pt-20">
      <FadeIn>
        <div className="card p-8 sm:p-10">
          {/* Header */}
          <div className="flex items-center gap-4">
            <span className="icon-tile w-fit">
              <Code2 size={24} strokeWidth={1.75} />
            </span>
            <div>
              <h2>Professional Profile</h2>
              <p className="mt-0.5 text-subtle">Full Stack Developer</p>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-6 max-w-2xl text-muted">
            Full Stack Developer passionate about creating scalable web
            solutions, building innovative applications, and solving complex
            problems through technology. Hands-on experience with the MERN
            stack, Next.js, and RESTful APIs. Part of the Smart India Hackathon
            2024 winning team, building a social-media investigation platform
            for the National Investigation Agency (NIA), India.
          </p>

          {/* Meta */}
          <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-ink" />
              <div>
                <p className="text-ink">Education</p>
                <p className="mt-0.5 text-subtle">
                  B.Tech, Computer Science &amp; Design — IMS Engineering
                  College, 2026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-ink" />
              <div>
                <p className="text-ink">Location</p>
                <p className="mt-0.5 text-subtle">Ghaziabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
