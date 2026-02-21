import Link from "next/link";
import Image from "next/image";
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
  PenLine,
  Rocket,
  Laugh,
  Film,
  Brain,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { interests, travelPhotos } from "@/data/interests";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SocialTabs } from "@/components/ui/SocialTabs";
import { Card } from "@/components/ui/Card";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { ContactForm } from "@/components/ui/ContactForm";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { TextScramble } from "@/components/ui/TextScramble";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";
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
  PenLine,
  Rocket,
  Laugh,
  Film,
  Brain,
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
  const twitterPosts = (socialFallback.twitter as SocialPost[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const linkedinPosts = (socialFallback.linkedin as SocialPost[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-8">
      {/* Hero */}
      <section id="hero" className="relative scroll-mt-20 min-h-screen flex flex-col justify-center py-20 sm:py-28">
        <GradientMesh />
        <AnimatedSection>
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
            {/* Left — text content */}
            <div className="flex flex-col gap-6 lg:flex-1">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Hey, I&apos;m{" "}
                  <TextScramble text={siteConfig.name} className="gradient-text" />
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Senior Backend Engineer
                  </p>
                  <span className="relative inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-0.5 text-xs font-medium text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{ animation: "pulse-ring 1.5s ease-out infinite" }} />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" style={{ animation: "blink-dot 1.5s ease-in-out infinite" }} />
                    </span>
                    Open to Work
                  </span>
                </div>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                Backend engineer with 6.5+ years in the JS/TS stack. I&apos;ve
                taken SaaS products from ideation to production serving 1M+
                daily users.
                Led a team of ~5 engineers and used AI-assisted tooling to ship
                faster.
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                Currently looking for my next senior backend engineering
                role, one that blends leadership with hands-on development.
              </p>

              <div className="flex flex-wrap gap-3">
                <MagneticButton
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg accent-gradient px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-[var(--accent-shadow)] hover:shadow-lg hover:shadow-[var(--accent-shadow)] hover:brightness-110 transition-all"
                >
                  View Projects <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-2.5 text-sm font-medium hover:border-[var(--accent-border-subtle)] hover:text-[var(--accent)] dark:border-neutral-700 dark:hover:border-[var(--accent-border-subtle)] dark:hover:text-[var(--accent)] transition-all"
                >
                  Get in Touch
                </MagneticButton>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors"
                  aria-label="X"
                >
                  <Twitter size={24} />
                </Link>
                <Link
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-[var(--accent)] dark:hover:text-[var(--accent)] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </Link>
              </div>
            </div>

            {/* Right — photo / avatar */}
            <div className="flex justify-center lg:justify-end shrink-0">
              <div className="h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96 rounded-full overflow-hidden shadow-2xl shadow-[var(--accent-shadow)] ring-4 ring-[var(--accent-border-subtle)]">
                <Image
                  src="/avatar.jpg"
                  alt="Tuhin Roy — Senior Backend Engineer"
                  width={384}
                  height={384}
                  className="h-full w-full object-cover"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-16">
          <h2 className="text-xl font-semibold mb-4">What I Do</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Define",
                description:
                  "Collaborate with stakeholders on ideation, PRDs, and technical planning to translate business needs into engineering roadmaps.",
              },
              {
                title: "Build",
                description:
                  "Backend services, APIs, microservices, and cloud infrastructure at scale.",
              },
              {
                title: "Lead",
                description:
                  "Own technical decisions, run code reviews, mentor developers, and ship features end-to-end.",
              },
              {
                title: "Operate",
                description:
                  "Deploy, monitor, and maintain production services with CI/CD pipelines, logging, and observability.",
              },
              {
                title: "Accelerate",
                description:
                  "Use AI-assisted tooling to prototype, test, and debug faster across the development cycle.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 p-5 transition-all duration-300 hover:border-[var(--accent-border-subtle)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent-shadow)] dark:border-neutral-800 dark:hover:border-[var(--accent-border-subtle)] dark:hover:shadow-[var(--accent-shadow)]"
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
      <section id="about" className="scroll-mt-20 min-h-screen flex flex-col justify-center py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="mt-6 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I&apos;m a backend engineer with 6.5+ years of experience
              across the JavaScript/TypeScript stack: Node.js, Express,
              NestJS, and AWS. I&apos;ve built microservices architectures
              serving 1M+ daily users, cut API response times by 40% through
              query optimization, and taken products from zero to production.
            </p>
            <p>
              I&apos;ve led a team of ~5 engineers, owning technical
              decisions, running code reviews, mentoring developers, and
              shipping features end-to-end. I&apos;ve also used AI-assisted
              tooling (Copilot, Claude, Cursor) day-to-day to prototype
              faster, write tests, and debug production issues.
            </p>
            <p>
              Outside of engineering, I write about career growth, tech, and
              life observations on LinkedIn and X. When I&apos;m not coding or
              writing, you&apos;ll find me traveling, reading books, watching movies, or
              hacking on side projects.
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
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
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
      <section id="experience" className="scroll-mt-20 min-h-screen flex flex-col justify-center py-20 sm:py-24">
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
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
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

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 min-h-screen flex flex-col justify-center py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Technologies and tools I work with.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <Card key={category.id}>
                <h3 className="font-medium text-neutral-900 dark:text-white mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 min-h-screen flex flex-col justify-center py-20 sm:py-24">
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
                <TiltCard key={project.id} className="h-full">
                  <ProjectCard project={project} />
                </TiltCard>
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
      <section id="services" className="scroll-mt-20 min-h-screen flex flex-col justify-center py-20 sm:py-24">
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
          <div className="relative overflow-hidden rounded-2xl border border-[var(--accent-border-subtle)] bg-gradient-to-br from-[var(--accent-bg-subtle)] via-white to-[var(--accent-bg-subtle)] p-8 text-center dark:border-[var(--accent-border-subtle)] dark:from-[var(--accent-muted)] dark:via-neutral-900 dark:to-[var(--accent-muted)]">
            <h3 className="text-lg font-semibold">
              Interested in working together?
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Let&apos;s discuss your project and see how I can help.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg accent-gradient px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-[var(--accent-shadow)] hover:shadow-lg hover:shadow-[var(--accent-shadow)] hover:brightness-110 transition-all"
            >
              Get in Touch <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Social */}
      <section id="social" className="scroll-mt-20 min-h-screen flex flex-col justify-center py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">Social</span>
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            What I&apos;m up to across the internet.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-8">
          <SocialTabs twitterPosts={twitterPosts} linkedinPosts={linkedinPosts} />
        </AnimatedSection>
      </section>

      {/* Interests */}
      <section id="interests" className="scroll-mt-20 min-h-screen flex flex-col justify-center py-20 sm:py-24">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="gradient-text">Interests</span>
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            What I do when I&apos;m not writing code.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest) => {
              const Icon = iconMap[interest.icon] || Activity;
              return (
                <Card key={interest.id}>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--accent-border-subtle)] bg-[var(--accent-bg-subtle)] dark:border-[var(--accent-border-subtle)] dark:bg-[var(--accent-muted)]">
                      <Icon
                        size={18}
                        className="text-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 dark:text-white">
                        {interest.name}
                      </h3>
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
          <h3 className="text-xl font-semibold mb-4">Moments</h3>
          <p className="mb-6 text-neutral-600 dark:text-neutral-400">
            Some of my favorite moments worth sharing.
          </p>
          <PhotoGrid photos={travelPhotos} />
        </AnimatedSection>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 min-h-screen flex flex-col justify-center py-20 sm:py-24">
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
                    className="flex items-center gap-3 text-sm text-neutral-600 hover:text-[var(--accent)] dark:text-neutral-400 dark:hover:text-[var(--accent)] transition-colors"
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
