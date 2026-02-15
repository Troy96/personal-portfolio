import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages & Runtimes",
    skills: ["JavaScript/TypeScript", "Node.js"],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["MySQL", "MongoDB", "Amazon RDS", "Redis", "Elasticsearch"],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    skills: ["CI/CD", "AWS (EC2, S3, Lambda, ECS, SQS, API Gateway, CloudWatch)"],
  },
  {
    id: "tools",
    name: "Tools & Technologies",
    skills: ["Git/GitHub", "API Design (REST/GraphQL)", "Design Patterns"],
  },
  {
    id: "distributed",
    name: "Distributed Systems",
    skills: ["Message Queues (Kafka/SQS)", "Event-driven architectures", "Microservices"],
  },
  {
    id: "ai",
    name: "AI-Assisted Development",
    skills: ["Claude Code", "Prompt Design & Evaluation", "MCP", "RAG", "Agentic AI", "LLMs"],
  },
  {
    id: "soft-skills",
    name: "Soft Skills & Leadership",
    skills: ["Written/verbal communication", "Team management", "Pragmatic & system thinker"],
  },
];
