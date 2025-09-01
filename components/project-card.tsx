"use client"

import { useState } from "react"
import { projects } from "@/data/projects"

export function MainContent() {
  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <main className="flex-1 p-6 lg:p-8">
      <div className="space-y-8 lg:space-y-12">
        {/* Selected Work Header */}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-black mb-6 lg:mb-8">SELECTED WORK</h2>
          <div className="border-b border-gray-800 mb-6 lg:mb-8"></div>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 py-3 lg:py-4">
                  <span
                    className="text-blue-600 hover:underline cursor-pointer font-medium text-sm lg:text-base"
                    onClick={() => setSelectedProject(index)}
                  >
                    {project.name}
                  </span>
                  <div className="hidden lg:block"></div>
                </div>
                {index < projects.length - 1 && <div className="border-b border-gray-800"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-6 lg:p-8 rounded-lg">
              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg lg:text-xl font-bold text-black mb-3 lg:mb-4 text-center">
                  {projects[selectedProject].name.toUpperCase()}
                </h3>
                <div className="w-full h-32 lg:h-40 bg-gray-100 rounded-lg mb-3 lg:mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-xs lg:text-sm">Project Screenshot</span>
                </div>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between text-xs lg:text-sm">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-black font-medium">Completed</span>
                  </div>
                  <div className="flex justify-between text-xs lg:text-sm">
                    <span className="text-gray-600">Tech:</span>
                    <span className="text-black font-medium">MERN</span>
                  </div>
                  <div className="flex justify-between text-xs lg:text-sm">
                    <span className="text-gray-600">GitHub:</span>
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4 lg:mb-6">
              {projects[selectedProject].name.toUpperCase()}
            </h2>
            <p className="text-sm lg:text-lg text-black leading-relaxed mb-4 lg:mb-6">
              {projects[selectedProject].description}
            </p>

            {projects[selectedProject].features && (
              <div className="space-y-3 lg:space-y-4">
                <h3 className="font-semibold text-black text-sm lg:text-base">Key Features:</h3>
                <ul className="space-y-1 lg:space-y-2">
                  {projects[selectedProject].features.map((feature, index) => (
                    <li key={index} className="text-black text-xs lg:text-sm leading-relaxed">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {projects[selectedProject].links && (
              <div className="mt-4 lg:mt-6 flex flex-wrap gap-3 lg:gap-4">
                {projects[selectedProject].links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-blue-600 hover:underline font-medium text-xs lg:text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
