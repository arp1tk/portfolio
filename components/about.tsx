import { MapPin, GraduationCap, Code2 } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-3xl px-6 pt-20">
      <FadeIn>
        <div className="grid gap-3 md:grid-cols-[3fr_5fr]">
          {/* Image slot — monogram (no photo) */}
          <div
            className="card flex min-h-[220px] items-center justify-center overflow-hidden"
            style={{
              background:
                "linear-gradient(150deg, var(--color-ink), var(--color-ink-soft))",
            }}
          >
            <span className="text-[64px] leading-none tracking-[-2px] text-white">
              AK
            </span>
          </div>

          {/* Text card */}
          <div className="card flex flex-col gap-6 p-6 pb-8">
            <span className="icon-tile w-fit">
              <Code2 size={24} />
            </span>

            <div>
              <h2>Professional Profile</h2>
              <p className="mt-3 text-muted">
                Full Stack Developer passionate about creating scalable web
                solutions, building innovative applications, and solving complex
                problems through technology. Hands-on experience with the MERN
                stack, Next.js, and RESTful APIs. Part of the Smart India
                Hackathon 2024 winning team, building a social-media
                investigation platform for the National Investigation Agency
                (NIA), India.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-subtle">
              <span className="flex items-center gap-1.5">
                <GraduationCap size={14} />
                B.Tech, Computer Science &amp; Design — IMS Engineering College,
                2026
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                Ghaziabad, India
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
