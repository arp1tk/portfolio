export interface ExperienceLink {
  label: string
  url: string
}

export interface Experience {
  role: string
  org: string
  location: string
  period: string
  bullets: string[]
  links?: ExperienceLink[]
}
