import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-surface">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
