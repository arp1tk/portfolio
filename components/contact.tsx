import { Mail, Linkedin, Github } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-3xl px-6 pb-24 pt-20"
    >
      <FadeIn>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="chip">
            <span className="status-ring">
              <span />
            </span>
            Get in touch
          </span>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-[32px] leading-[1.15] tracking-[-0.9px]">
              Let&apos;s build something together
            </h2>
            <p className="subtitle max-w-[424px]">
              Have a project in mind, or just want to say hi? My inbox is always
              open.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <a href="mailto:arpitkukrety27@gmail.com" className="btn btn-primary">
              <Mail size={16} /> Send Email
            </a>
            <a
              href="https://linkedin.com/in/arpit-kukreti-4a3824302"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/arp1tk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
