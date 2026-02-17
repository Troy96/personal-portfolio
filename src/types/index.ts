export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Interest {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface TravelPhoto {
  id: string;
  src: string;
  alt: string;
  location: string;
  year: number;
  objectPosition?: string;
}

export interface SocialPost {
  id: string;
  platform: "github" | "twitter" | "linkedin";
  content: string;
  url: string;
  date: string;
  engagement?: {
    likes?: number;
    retweets?: number;
    comments?: number;
  };
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  categories: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
