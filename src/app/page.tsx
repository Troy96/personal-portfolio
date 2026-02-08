import Link from "next/link";
import {
  ArrowRight,
  Github,
  Twitter,
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
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
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
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section id="hero" className="scroll-mt-16 py-16 sm:py-24">
        <AnimatedSection>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-2xl font-bold text-neutral-600 dark:text-neutral-400">
                TR
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Hey, I&apos;m {siteConfig.name}
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Software Engineer & Builder
                </p>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              I build things for the web. Currently focused on creating reliable,
              scalable software and contributing to open source. I care about
              clean code, developer experience, and shipping products that make a
              difference.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
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
                className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
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
      <section id="about" className="scroll-mt-16 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="mt-6 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I&apos;m a software engineer with a passion for building products
              that solve real problems. I started programming in college and
              haven&apos;t stopped since. Over the years I&apos;ve worked across
              the stack — from designing APIs and databases to building
              interactive UIs and setting up deployment pipelines.
            </p>
            <p>
              I believe great software comes from understanding both the
              technical and human sides of a problem. I care deeply about code
              quality, developer experience, and creating tools that people
              actually enjoy using.
            </p>
            <p>
              Outside of work, you&apos;ll find me contributing to open source,
              reading about distributed systems, running, or planning my next
              travel adventure. I&apos;m always learning and always building.
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
                        <span className="h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
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
      <section id="experience" className="scroll-mt-16 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
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
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
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
      <section id="projects" className="scroll-mt-16 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
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
      <section id="services" className="scroll-mt-16 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
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
          <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800 text-center">
            <h3 className="text-lg font-semibold">
              Interested in working together?
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Let&apos;s discuss your project and see how I can help.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Social */}
      <section id="social" className="scroll-mt-16 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">Social</h2>
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
                      className="font-medium text-neutral-900 hover:underline dark:text-white"
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
      <section id="interests" className="scroll-mt-16 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">
            Interests & Travel
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
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                      <Icon
                        size={18}
                        className="text-neutral-700 dark:text-neutral-300"
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
      <section id="contact" className="scroll-mt-16 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
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
                    className="flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
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
