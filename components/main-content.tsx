"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

export function MainContent() {
  const [selectedProject, setSelectedProject] = useState(0);

  // Get the current project object once to simplify the code below
  const project = projects[selectedProject];

  return (
    <main className="flex-1 py-6">
      <div className="space-y-12">
        {/* --- SELECTED WORK LIST --- */}
        <div id="work">
          <h2 className="text-xl lg:text-2xl font-bold uppercase tracking-wider text-black">
            SELECTED WORK
          </h2>
          {/* A simpler grid container for the project list */}
          <div className="border-t border-b border-gray-900 mt-2 grid grid-cols-1 lg:grid-cols-2">
            {projects.map((proj, index) => (
              <button
                key={proj.name}
                type="button"
                onClick={() => setSelectedProject(index)}
                // Use borders on the items themselves for a cleaner grid
                className={`w-full text-left p-3 text-sm font-mono font-medium border-b border-gray-300 lg:border-b-0 ${
                  index % 2 === 0 ? "lg:border-r lg:border-gray-300" : ""
                } ${
                  selectedProject === index
                    ? "bg-gray-200 text-black"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`}
                aria-pressed={selectedProject === index}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- FEATURED PROJECT DISPLAY --- */}
        <div className="space-y-6">
          {/* Image and Links on the left */}
          <div className="w-full max-w-lg">
            {/* Use the dynamic image from the project data */}
            {project.image && project.image.length > 0 && (
              <div className="flex flex-col gap-3">
                {project.image.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Screenshot ${index + 1} of ${project.name}`}
                    className="w-full h-auto object-cover border border-gray-300 rounded-md"
                  />
                ))}
              </div>
            )}

            {/* Links with safe optional chaining */}
            {project.links?.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-700 hover:underline"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Title, Description, and Features */}
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-3">
              {project.name.toUpperCase()}
            </h2>
            <p className="text-base text-black/90 leading-relaxed">
              {project.description}
            </p>

            {/* --- TECH STACK SECTION --- */}
            {project.tech && (
              <div className="mt-4">
                <p className="text-sm">
                  <span className="font-semibold text-black/80">Built with: </span>
                  <span className="text-gray-600">{project.tech}</span>
                </p>
              </div>
            )}

            {/* Features with safe optional chaining and proper list styling */}
            {project.features?.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-black text-base mb-2">
                  Key Features:
                </h3>
                <ul className="list-disc list-inside space-y-1.5">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm text-black/80 leading-relaxed"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}