import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "DevBoard",
    description:
      "A real-time collaborative dashboard for development teams. Track deployments, monitor services, and manage incidents from a single pane of glass.",
    technologies: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
    githubUrl: "https://github.com/roy/devboard",
    liveUrl: "https://devboard.dev",
    featured: true,
  },
  {
    id: "proj-2",
    title: "MarkdownAI",
    description:
      "An AI-powered markdown editor that suggests completions, fixes grammar, and formats content as you type.",
    technologies: ["React", "OpenAI API", "TailwindCSS", "Vercel AI SDK"],
    githubUrl: "https://github.com/roy/markdown-ai",
    featured: true,
  },
  {
    id: "proj-3",
    title: "CLI Task Manager",
    description:
      "A fast, keyboard-driven task manager for the terminal. Supports projects, tags, priorities, and natural language dates.",
    technologies: ["Rust", "SQLite", "clap"],
    githubUrl: "https://github.com/roy/tasks-cli",
    featured: false,
  },
  {
    id: "proj-4",
    title: "Budget Tracker",
    description:
      "A privacy-first personal finance app that runs entirely in the browser. No accounts, no cloud — your data stays on your device.",
    technologies: ["Svelte", "IndexedDB", "Chart.js", "PWA"],
    liveUrl: "https://budget.roy.dev",
    featured: false,
  },
  {
    id: "proj-5",
    title: "PhotoMap",
    description:
      "Plot your travel photos on an interactive map. Auto-extracts GPS data from EXIF metadata and clusters nearby shots.",
    technologies: ["Python", "Flask", "Leaflet.js", "Pillow"],
    githubUrl: "https://github.com/roy/photomap",
    featured: false,
  },
  {
    id: "proj-6",
    title: "Open Source Contributions",
    description:
      "Active contributor to several open-source projects including developer tools, documentation, and libraries.",
    technologies: ["TypeScript", "Go", "Python"],
    githubUrl: "https://github.com/roy",
    featured: false,
  },
];
