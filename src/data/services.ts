import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Technical Content & Writing",
    description:
      "Blog posts, tutorials, and long-form content on backend engineering, system design, and AI.",
    icon: "PenTool",
    features: [
      "Technical blog posts & tutorials",
      "AI/ML explainers & thought pieces",
      "Developer documentation",
      "LinkedIn & newsletter content",
    ],
  },
  {
    id: "svc-2",
    title: "Static Sites for Businesses",
    description:
      "Fast, SEO-friendly static websites for small businesses and professionals.",
    icon: "Globe",
    features: [
      "Landing pages & portfolios",
      "Business websites",
      "SEO & performance optimization",
      "Mobile-responsive design",
    ],
  },
  {
    id: "svc-3",
    title: "AI Automation for Business",
    description:
      "Integrate AI pipelines into your business workflows. Internal tooling, customer-facing features, LLMs, RAG, and agentic systems.",
    icon: "Bot",
    features: [
      "Custom AI/LLM integrations",
      "RAG pipelines & knowledge bases",
      "Workflow automation with AI agents",
      "Prompt engineering & evaluation",
    ],
  },
  {
    id: "svc-4",
    title: "Tech Career Services",
    description:
      "Resume tailoring, LinkedIn optimization, and job search strategy for software engineers.",
    icon: "Briefcase",
    features: [
      "Resume review & tailoring",
      "LinkedIn profile optimization",
      "Job search strategy",
      "Interview preparation",
    ],
  },
];
