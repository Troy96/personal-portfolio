import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Unolo",
    role: "Senior Backend Engineer",
    location: "Gurugram",
    startDate: "2020-10",
    endDate: "2025-10",
    description: [
      "Led a team of 5 backend engineers, owned hiring, mentoring, code reviews, and sprint planning while coordinating with FE, App, and QA leads.",
      "Architected offline-first sync algorithm replacing Firebase auto-sync with raw MySQL to enable full offline support on mobile.",
      "Developed role-based access control (RBAC) for 10K+ admins to control visibility and information sharing within their organizations.",
      "Built a Targets module enabling admins to define and track team performance with 600+ active targets.",
      "Implemented multi-employee and team-based client visibility in the Clients module, scaling across 3.2M+ records.",
      "Developed Custom Tasks feature with custom fields and templates, now the core module powering all task-related workflows.",
      "Set up production monitoring with Cloudwatch dashboards, Slack alerts, and email notifications; resolved critical DB spike by vertical scaling under pressure.",
    ],
    technologies: ["JavaScript", "Node.js", "Express.js", "GraphQL", "MySQL", "AWS (EC2, S3, Lambda, RDS, SQS, CloudWatch)"],
  },
  {
    id: "exp-2",
    company: "Sparrosense",
    role: "Software Developer",
    location: "Gurugram",
    startDate: "2019-08",
    endDate: "2020-10",
    description: [
      "Built internal tooling for face detection attendance system, enabling data team to tag and validate training datasets.",
      "Developed frontend architecture and user-facing modules for Sparrosense SaaS platform serving manufacturing plant automation.",
    ],
    technologies: ["Node.js", "MongoDB", "Angular", "Python"],
  },
  {
    id: "exp-3",
    company: "7Kreinto Pvt. Ltd.",
    role: "Software Developer",
    location: "Gurugram",
    startDate: "2019-01",
    endDate: "2019-08",
    description: [
      "Developed automated trading bots implementing real-time trading algorithms for digital asset execution.",
      "Built real-time monitoring systems for asset prices and transactions using WebSocket connections and REST API integrations.",
    ],
    technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Socket.io", "REST APIs", "Angular", "AWS (EC2, S3)"],
  },
];
