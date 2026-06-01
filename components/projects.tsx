import { projects } from "@/data/projects"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/fade-in"
import { ProjectCard } from "@/components/project-card"

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
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
