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
        links: [
      {
        label: "Visit ",
        url: "https://github.com/arp1tk/project-NARC",
      },
    ],

    image:["/tattletale.png"]
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
    ], links: [
      {
        label: "Visit Site",
        url: "https://open-journal-frontend-git-backend-dep-arpit-s-projects-75b13d7d.vercel.app/",
      },
    ],
    image:["/op2.png","/op1.png"]
  },
  {
  "name": "Spectra",
  "category": "Spotify Data Visualization App",
  "tech": "Next.js, React.js, Tailwind CSS, Spotify Web API, OAuth 2.0",
  "description": "A Next.js web application that transforms your Spotify music data into a personalized, immersive music exploration experience, featuring a dark, cosmic-themed interface to visualize listening habits and generate unique playlists.",
  "features": [
    "Visualize your top tracks and artists on a personalized, interactive dashboard.",
    "Generate 'Time Travel' playlists for different decades (e.g., 80s, 90s) based on your current music taste.",
    "Analyze the audio features of your music, such as danceability, energy, and mood, with insightful charts.",
    "Discover your celebrity or fictional character music 'Doppelgänger' based on your listening habits.",
    "Save any generated playlist directly to your Spotify account with a single click."
  ],
  "links": [
   
    {
      "label": "View on GitHub",
      "url": "https://github.com/arp1tk/Sonic-Verse"
    }
  ],
  "image": ["/sp.png", "/sp1.png"]
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
    image:["/kdesign.png"]
  },
  {
    name: "DevixLab",
    category: "Business Website",
    tech: "Next.js, Tailwind CSS ,Aceternity UI",
    description: "IT Consultancy Company Website to showcase their services and portfolios.",
    links: [
      {
        label: "Visit Site",
        url: "https://www.devixlab.com/",
      },
    ],
    image:["/devix.png"]
  },
]
