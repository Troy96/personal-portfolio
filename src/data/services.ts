import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Web Application Development",
    description:
      "End-to-end development of modern web applications using React, Next.js, and Node.js. From concept to deployment.",
    icon: "Globe",
    features: [
      "Custom web app development",
      "API design and integration",
      "Performance optimization",
      "Responsive, accessible UI",
    ],
  },
  {
    id: "svc-2",
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology selection, and strategic guidance for your engineering team.",
    icon: "Lightbulb",
    features: [
      "Architecture assessment",
      "Technology stack evaluation",
      "Scalability planning",
      "Code review & best practices",
    ],
  },
  {
    id: "svc-3",
    title: "DevOps & Infrastructure",
    description:
      "Set up CI/CD pipelines, containerization, cloud infrastructure, and monitoring for reliable deployments.",
    icon: "Server",
    features: [
      "CI/CD pipeline setup",
      "Docker & Kubernetes",
      "Cloud infrastructure (AWS, GCP)",
      "Monitoring & alerting",
    ],
  },
  {
    id: "svc-4",
    title: "Mentorship & Training",
    description:
      "One-on-one mentorship for developers looking to level up their skills, or team workshops on modern development practices.",
    icon: "GraduationCap",
    features: [
      "1:1 developer mentorship",
      "Team workshops",
      "Code review training",
      "Career guidance",
    ],
  },
];
