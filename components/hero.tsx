import { Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-20 text-center sm:pt-28"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-subtle bg-surface-alt px-3 py-1.5">
        <span className="status-dot h-2 w-2 rounded-full bg-status" />
        <span className="text-sm font-medium text-muted">Available for Work</span>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight text-content sm:text-6xl">
        Arpit Kukreti
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Full Stack Developer — building scalable web apps with the MERN stack &
        Next.js. Smart India Hackathon 2024 Winner.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:arpitkukrety27@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-on-ink transition-opacity hover:opacity-90"
        >
          <Mail size={16} /> Send Email
        </a>
        <a
          href="/arpitResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-content transition-colors hover:bg-surface-alt"
        >
          <Download size={16} /> Download CV
        </a>
      </div>
    </section>
  )
}
