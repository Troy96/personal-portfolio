"use client";

import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  const activeSection = useActiveSection();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav className="flex h-14 items-center justify-between rounded-full bg-white px-4 shadow-lg shadow-neutral-900/5 dark:bg-neutral-900 dark:shadow-neutral-900/30 xl:bg-white/80 xl:backdrop-blur-xl xl:dark:bg-neutral-900/80">
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full accent-gradient-br text-[11px] font-bold text-white">
            TR
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-0.5 flex-nowrap overflow-hidden">
          {navLinks
            .filter((link) => link.href !== "#hero")
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative whitespace-nowrap px-2.5 py-1.5 text-[13px] transition-colors rounded-full",
                  activeSection === link.href
                    ? "text-[var(--accent)] font-medium"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                )}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-[var(--accent)]" />
                )}
              </a>
            ))}
          <div className="ml-1 pl-1">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
