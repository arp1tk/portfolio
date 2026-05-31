import { Mail, Linkedin, Github } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <FadeIn>
        <div className="rounded-3xl bg-ink px-6 py-14 text-center text-on-ink sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's work together
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-on-ink/70">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:arpitkukrety27@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-5 py-3 text-sm font-medium text-content transition-opacity hover:opacity-90"
            >
              <Mail size={16} /> arpitkukrety27@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/arpit-kukreti-4a3824302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-on-ink transition-colors hover:bg-white/10"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/arp1tk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-on-ink transition-colors hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
