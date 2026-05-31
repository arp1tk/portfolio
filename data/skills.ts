import type { SkillGroup } from "@/types/skill"

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Java"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express.js", "JWT"] },
  { category: "Database", items: ["MongoDB", "Firebase", "PostgreSQL", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3)", "Docker", "CI/CD basics"] },
  { category: "Tools & Testing", items: ["Git", "GitHub", "Postman", "VS Code"] },
]
