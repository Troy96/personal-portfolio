import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Acme Corp",
    role: "Senior Software Engineer",
    location: "San Francisco, CA",
    startDate: "2022-01",
    endDate: "Present",
    description: [
      "Led development of a microservices architecture serving 1M+ daily active users",
      "Mentored a team of 5 junior developers and established code review practices",
      "Reduced API response times by 40% through query optimization and caching strategies",
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
    companyUrl: "https://example.com",
  },
  {
    id: "exp-2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    location: "Remote",
    startDate: "2020-03",
    endDate: "2021-12",
    description: [
      "Built and shipped the core product from 0 to 1, serving 50K+ users",
      "Implemented real-time collaboration features using WebSockets",
      "Designed and built a CI/CD pipeline reducing deployment time by 60%",
    ],
    technologies: ["React", "Python", "Django", "Redis", "Docker"],
    companyUrl: "https://example.com",
  },
  {
    id: "exp-3",
    company: "TechStartup Inc",
    role: "Software Engineer",
    location: "New York, NY",
    startDate: "2018-06",
    endDate: "2020-02",
    description: [
      "Developed RESTful APIs and internal tools used by 200+ employees",
      "Migrated legacy monolith to a modular architecture, improving test coverage to 85%",
      "Contributed to open-source libraries used by the wider developer community",
    ],
    technologies: ["JavaScript", "Vue.js", "Go", "MongoDB", "GCP"],
  },
];
