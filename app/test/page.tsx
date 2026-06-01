"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Code, Layout } from 'lucide-react';

const projects = [
  {
    title: "Tattletale - NIA Investigation Tool",
    description: "Automated social media investigation tool built for NIA to analyze public data from Instagram and Telegram[cite: 26].",
    tech: ["React.js", "Playwright", "MongoDB"],
    icon: <Shield className="w-4 h-4" />,
  },
  {
    title: "SonicVerse",
    description: "Next.js application that visualizes Spotify data and features real-time song battles.",
    tech: ["Next.js", "Spotify API", "Tailwind"],
    icon: <Layout className="w-4 h-4" />,
  },
  {
    title: "Voltsec.io Backend",
    description: "Developed backend systems for a vulnerability scanning product targeting cloud infrastructure[cite: 24].",
    tech: ["Node.js", "AWS", "Express"],
    icon: <Code className="w-4 h-4" />,
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 font-sans">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700">
             {/* Profile image placeholder */}
             <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-purple-500" />
          </div>
          <nav className="flex gap-6 text-sm text-zinc-400 ml-auto">
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Projects</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-bold tracking-tight">Arpit Kukreti</h1>
          <span className="bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded-md border border-zinc-700">
            Full Stack Developer [cite: 2, 7]
          </span>
        </div>
        
        <p className="text-zinc-400 max-w-xl leading-relaxed">
          SIH 2024 Winner. I specialize in <span className="text-zinc-200">RESTful APIs, building frontends and backends</span> and delivering scalable MERN stack solutions[cite: 8].
        </p>
      </header>

      {/* Projects Grid */}
      <main className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">
          I love building things
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="group bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl hover:border-zinc-700 transition-colors"
            >
              <div className="aspect-video bg-zinc-800/50 rounded-xl mb-4 overflow-hidden border border-zinc-700 flex items-center justify-center text-zinc-600">
                {project.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Github className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" />
                <ExternalLink className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;