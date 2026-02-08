"use client";

import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  const activeSection = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks
            .filter((link) => link.href !== "#hero")
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors hover:text-neutral-900 dark:hover:text-white",
                  activeSection === link.href
                    ? "text-neutral-900 dark:text-white font-medium"
                    : "text-neutral-600 dark:text-neutral-400"
                )}
              >
                {link.label}
              </a>
            ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
