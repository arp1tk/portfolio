import { Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-3xl px-6 pb-2 pt-20">
      <div className="mb-6 flex flex-col items-center gap-2 text-center">
        <span className="chip">
          <span className="status-ring">
            <span />
          </span>
          Available for Work
        </span>
        <h1>Arpit Kukreti</h1>
        <p className="subtitle max-w-[424px]">
          Full Stack Developer building scalable web apps with the MERN stack &
          Next.js. Smart India Hackathon 2024 Winner.
        </p>
      </div>

      <div className="flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:items-center">
        <a href="mailto:arpitkukrety27@gmail.com" className="btn btn-primary">
          <Mail size={16} /> Send Email
        </a>
        <a
          href="/arpitResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <Download size={16} /> Download CV
        </a>
      </div>
    </section>
  )
}
