"use client";

import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  const activeSection = useActiveSection();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
      <nav className="flex h-12 items-center justify-between rounded-full border border-neutral-200/50 bg-white/70 px-5 shadow-lg shadow-neutral-900/5 backdrop-blur-xl dark:border-neutral-700/50 dark:bg-neutral-900/70 dark:shadow-neutral-900/30">
        <a
          href="#hero"
          className="text-base font-bold tracking-tight gradient-text transition-opacity hover:opacity-80"
        >
          {siteConfig.name}
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks
            .filter((link) => link.href !== "#hero")
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-sm transition-colors rounded-full",
                  activeSection === link.href
                    ? "text-indigo-600 dark:text-indigo-400 font-medium"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                )}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                )}
              </a>
            ))}
          <div className="ml-1 border-l border-neutral-200 pl-2 dark:border-neutral-700">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
