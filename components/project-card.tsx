"use client"

import { useState } from "react"
import { ArrowUpRight, Images } from "lucide-react"
import type { Project } from "@/types/project"
import { Lightbox } from "@/components/lightbox"

export function ProjectCard({ project }: { project: Project }) {
  const images = project.image ?? []
  const [open, setOpen] = useState(false)

  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      {images[0] && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View ${project.name} screenshot${
            images.length > 1 ? "s" : ""
          }`}
          className="relative aspect-video cursor-zoom-in overflow-hidden bg-fill-soft"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[0]}
            alt={`${project.name} screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {images.length > 1 && (
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-[rgba(29,29,38,0.7)] px-2 py-1 text-xs text-white backdrop-blur">
              <Images size={12} /> {images.length}
            </span>
          )}
        </button>
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

      {open && images.length > 0 && (
        <Lightbox
          images={images}
          title={project.name}
          onClose={() => setOpen(false)}
        />
      )}
    </article>
  )
}
