import Link from "next/link";
import {
  ArrowRight,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Camera,
  BookOpen,
  Activity,
  Music,
  Presentation,
  Star,
  GitFork,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { interests, travelPhotos } from "@/data/interests";
import { fetchGitHubRepos } from "@/lib/social/github";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SocialCard } from "@/components/ui/SocialCard";
import { Card } from "@/components/ui/Card";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { ContactForm } from "@/components/ui/ContactForm";
import type { SocialPost } from "@/types";
import socialFallback from "@/data/social-fallback.json";

function formatDate(date: string) {
  if (date === "Present") return "Present";
  const [year, month] = date.split("-");
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

const iconMap: Record<string, LucideIcon> = {
  Github,
  Camera,
  BookOpen,
  Activity,
  Music,
  Presentation,
};

const contactSocialLinks = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "X" },
  { icon: Instagram, href: siteConfig.links.instagram, label: "Instagram" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  {
    icon: Mail,
    href: `mailto:${siteConfig.links.email}`,
    label: siteConfig.links.email,
  },
];

export default async function Home() {
  const repos = await fetchGitHubRepos();

  const curatedPosts: SocialPost[] = [
    ...(socialFallback.twitter as SocialPost[]),
    ...(socialFallback.linkedin as SocialPost[]),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-8">
      {/* Hero */}
      <section id="hero" className="scroll-mt-20 py-20 sm:py-28">
        <AnimatedSection>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-indigo-500/25">
                TR
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Hey, I&apos;m{" "}
                  <span className="gradient-text">{siteConfig.name}</span>
                </h1>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Senior Backend Engineer
                  </p>
                  <span className="relative inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-0.5 text-xs font-medium text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{ animation: "pulse-ring 1.5s ease-out infinite" }} />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    Open to Work
                  </span>
                </div>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              Backend engineer with 6.5+ years of experience building and
              scaling systems. I specialize in Node.js, AWS, and system design.
              Currently exploring content creation on LinkedIn and X alongside
              looking for my next senior engineering role.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/30 hover:brightness-110 transition-all"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-2.5 text-sm font-medium hover:border-indigo-200 hover:text-indigo-600 dark:border-neutral-700 dark:hover:border-indigo-500/30 dark:hover:text-indigo-400 transition-all"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="X"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-16">
          <h2 className="text-xl font-semibold mb-4">What I Do</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Build",
                description:
                  "Full-stack web applications with modern technologies and clean architecture.",
              },
              {
                title: "Ship",
                description:
                  "Products from idea to production with CI/CD, testing, and monitoring.",
              },
              {
                title: "Share",
                description:
                  "Knowledge through open source, writing, and mentoring other developers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 p-5 transition-all duration-300 hover:border-indigo-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-neutral-800 dark:hover:border-indigo-500/30 dark:hover:shadow-indigo-500/10"
              >
                <h3 className="font-medium text-neutral-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="mt-6 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I&apos;m a backend engineer with 6.5+ years of experience
              specializing in building and scaling systems using JavaScript,
              Node.js, AWS, and system design. I studied Computer Science at
              Invertis University, Bareilly, and have been shipping production
              software ever since.
            </p>
            <p>
              I enjoy solving complex backend problems — from designing APIs and
              microservices to optimizing databases and setting up cloud
              infrastructure. I care about writing clean, maintainable code and
              building systems that scale.
            </p>
            <p>
              Outside of work, you&apos;ll find me reading books, watching
              movies and TV series, exploring content creation on LinkedIn and X,
              or hacking on side projects. I&apos;m always learning and always
              building.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <Timeline>
            {education.map((edu) => (
              <TimelineItem
                key={edu.id}
                title={`${edu.degree} in ${edu.field}`}
                subtitle={edu.institution}
                date={`${edu.startDate} — ${edu.endDate}`}
              >
                {edu.description && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {edu.description}
                  </p>
                )}
                {edu.achievements && (
                  <ul className="mt-2 space-y-1">
                    {edu.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-indigo-400 dark:bg-indigo-500 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </AnimatedSection>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            My professional journey in software engineering.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-8">
          <Timeline>
            {experiences.map((exp) => (
              <TimelineItem
                key={exp.id}
                title={exp.role}
                subtitle={`${exp.company} · ${exp.location}`}
                date={`${formatDate(exp.startDate)} — ${formatDate(exp.endDate)}`}
              >
                <ul className="space-y-1.5">
                  {exp.description.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-indigo-400 dark:bg-indigo-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </AnimatedSection>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Things I&apos;ve built and contributed to.
          </p>
        </AnimatedSection>

        {featuredProjects.length > 0 && (
          <AnimatedSection delay={200} className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Featured</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </AnimatedSection>
        )}

        {otherProjects.length > 0 && (
          <AnimatedSection delay={300} className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Other Projects</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </AnimatedSection>
        )}
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            I help teams and individuals build great software. Here&apos;s how I
            can help you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8 text-center dark:border-indigo-500/20 dark:from-indigo-500/10 dark:via-neutral-900 dark:to-violet-500/10">
            <h3 className="text-lg font-semibold">
              Interested in working together?
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Let&apos;s discuss your project and see how I can help.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/30 hover:brightness-110 transition-all"
            >
              Get in Touch <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Social */}
      <section id="social" className="scroll-mt-20 py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">Social</span>
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            What I&apos;m up to across the internet.
          </p>
        </AnimatedSection>

        {repos.length > 0 && (
          <AnimatedSection delay={200} className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              GitHub Repositories
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {repos.slice(0, 6).map((repo) => (
                <Card key={repo.id}>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-neutral-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 transition-colors"
                    >
                      {repo.name}
                    </Link>
                    {repo.description && (
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                      {repo.language && <Badge>{repo.language}</Badge>}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star size={12} /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork size={12} /> {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={300} className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Posts & Thoughts</h3>
          <div className="space-y-4">
            {curatedPosts.map((post) => (
              <SocialCard key={post.id} post={post} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Interests */}
      <section id="interests" className="scroll-mt-20 py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">Interests & Travel</span>
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            What I do when I&apos;m not writing code.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Interests</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest) => {
              const Icon = iconMap[interest.icon] || Activity;
              return (
                <Card key={interest.id}>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50 dark:border-indigo-500/20 dark:bg-indigo-500/10">
                      <Icon
                        size={18}
                        className="text-indigo-600 dark:text-indigo-400"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900 dark:text-white">
                        {interest.name}
                      </h4>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300} className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Travel</h3>
          <p className="mb-6 text-neutral-600 dark:text-neutral-400">
            Some of my favorite moments from traveling the world.
          </p>
          <PhotoGrid photos={travelPhotos} />
        </AnimatedSection>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Have a question or want to work together? Send me a message.
          </p>
        </AnimatedSection>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
          <AnimatedSection delay={200}>
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="space-y-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                Connect
              </h3>
              <div className="space-y-3">
                {contactSocialLinks.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex items-center gap-3 text-sm text-neutral-600 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Icon size={16} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
