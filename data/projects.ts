import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    name: "Tattletale",
    category: "Investigation Tool",
    tech: "React.js, Tailwind CSS, MongoDB, Express.js, Playwright, REST APIs",
    description:
      "An automated social media investigation tool that captures, analyzes, and organizes public data from Instagram, Telegram, WhatsApp and many more social media platforms.",
    features: [
      "Built an automated tool to capture, analyze, and organize public data from multiple social media platforms",
      "Developed a modular dark-themed UI for navigating user profiles, timelines, and messages efficiently",
      "Integrated Playwright for headless automation to capture dynamic content and generate legal documentation",
      "Implemented REST APIs for real-time data updates across investigation modules",
      "Enabled seamless report generation and export through user-friendly dashboards",
  
    ],
    image:""
  },
  {
    name: "Open Journal",
    category: "Academic Platform",
    tech: "React.js, Tailwind CSS, MongoDB, Node.js",
    description:
      "A scalable full-stack journal submission and peer-review management platform for research communities.",
    features: [
      "Designed user roles and experiences tailored for editors, reviewers, and researchers",
      "Streamlined submission and decision workflows for academic organizations",
      "Enabled authors to submit papers, track revisions, and make payments with transparent version control",
      "Frontend featured reusable components, validation logic, and responsive UX",
    ],
    image:""
  },
  {
    name: "K Design Interiors",
    category: "Business Website",
    tech: "React.js, Next.js, Tailwind CSS",
    description: "Professional Interior Design Company Website showcasing services and portfolios.",
    links: [
      {
        label: "Visit Site",
        url: "https://www.kdesign-interiors.com/",
      },
    ],
    image:""
  },
  {
    name: "DevixLab",
    category: "Business Website",
    tech: "React.js, Next.js, Tailwind CSS",
    description: "IT Consultancy Company Website to showcase their services and portfolios.",
    links: [
      {
        label: "Visit Site",
        url: "https://www.devixlab.com/",
      },
    ],
    image:""
  },
]
