import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Tuhin Roy",
  title: "Tuhin Roy - Software Engineer & Developer",
  description:
    "Personal portfolio of Tuhin Roy — software engineer, builder, and lifelong learner. Explore my work, projects, and interests.",
  url: "https://roy.dev",
  ogImage: "/images/og.png",
  links: {
    github: "https://github.com/roy",
    twitter: "https://twitter.com/roy",
    linkedin: "https://linkedin.com/in/roy",
    email: "hello@roy.dev",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Social", href: "#social" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];
