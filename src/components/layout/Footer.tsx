import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { VisitCounter } from "@/components/ui/VisitCounter";

const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[var(--accent-border-subtle)] to-transparent" />
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <VisitCounter />
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-neutral-500 hover:text-[var(--accent)] dark:text-neutral-400 dark:hover:text-[var(--accent)] transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
