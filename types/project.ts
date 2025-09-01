export interface Project {
  name: string
  category: string
  tech: string
  description: string
  features?: string[]
  image?: string
  links?: {
    label: string
    url: string
  }[]
}
