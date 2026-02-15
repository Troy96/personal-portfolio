import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "X2IG",
    description:
      "A platform for cross-posting content between X and Instagram. At present, it focuses on generating tweet screenshots that can be manually shared on Instagram.",
    technologies: ["Node.js", "PostgreSQL", "Cloudinary", "X API", "Meta API for IG"],
    githubUrl: "https://github.com/Troy96/x2ig",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Epstein Dossier",
    description:
      "A searchable, structured archive of publicly released Epstein-related documents, built to enable fast queries, cross-referencing, and investigative analysis.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Meilisearch"],
    githubUrl: "https://github.com/Troy96/epstein-dossier",
    featured: true,
  },
  {
    id: "proj-3",
    title: "LRA",
    description:
      "A Chrome extension that captures jobs from LinkedIn, fetches full descriptions, and analyzes the most commonly requested skills and requirements across your job searches.",
    technologies: ["HTML & CSS", "JavaScript", "Chrome Extension"],
    githubUrl: "https://github.com/Troy96/linkedin-requirements-analyzer",
    featured: true,
  },
  {
    id: "proj-4",
    title: "Claude Trail",
    description:
      "A CLI tool to keep tabs on your Claude mileage. Track sessions, tokens, and usage patterns.",
    technologies: ["TypeScript", "Commander.js", "Chalk", "Chokidar", "CLI"],
    githubUrl: "https://github.com/Troy96/claudetrail",
    featured: true,
  },
];
