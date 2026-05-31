import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-3xl px-6 pt-20">
      <SectionHeading
        title="Projects"
        subtitle="A selection of products and platforms I've designed and shipped."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.name} delay={(i % 2) * 0.05}>
            <article className="card group flex h-full flex-col overflow-hidden">
              {project.image?.[0] && (
                <div className="aspect-video overflow-hidden bg-fill-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image[0]}
                    alt={`${project.name} screenshot`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div>
                  <p className="text-subtle">{project.category}</p>
                  <h3 className="mt-0.5">{project.name}</h3>
                </div>
                <p className="text-muted">{project.description}</p>
                <p className="mt-auto text-subtle">{project.tech}</p>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chip"
                      >
                        <ArrowUpRight size={13} /> {link.label}
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
