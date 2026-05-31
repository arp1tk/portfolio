import { ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A selection of products and platforms I've designed and shipped."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.name} delay={(i % 2) * 0.05}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line-subtle bg-surface shadow-sm transition-shadow hover:shadow-md">
              {project.image?.[0] && (
                <div className="aspect-video overflow-hidden bg-surface-alt">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image[0]}
                    alt={`${project.name} screenshot`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-content">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-subtle">{project.tech}</p>
                {project.links && project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-hover"
                      >
                        {link.label} <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
