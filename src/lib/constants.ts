import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Tuhin Roy",
  title: "Tuhin Roy - Senior Backend Engineer",
  description:
    "Personal portfolio of Tuhin Roy — senior backend engineer with 6.5+ years of experience in Node.js, AWS, and system design.",
  url: "https://tuhinroy.in",
  ogImage: "/opengraph-image",
  links: {
    github: "https://github.com/Troy96/",
    twitter: "https://x.com/2hin_roy_",
    instagram: "https://instagram.com/2hin_roy_",
    linkedin: "https://linkedin.com/in/tuhin-roy",
    email: "tuhin.careers@gmail.com",
    substack: "https://2hin.substack.com",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Social", href: "#social" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
  { label: "Now", href: "/now" },
];
