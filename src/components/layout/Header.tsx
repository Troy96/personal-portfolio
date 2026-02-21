"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

const sectionLinks = navLinks.filter(
  (l) => l.href.startsWith("#") && l.href !== "#hero"
);
const pageLinks = navLinks.filter((l) => !l.href.startsWith("#"));

export function Header() {
  const activeSection = useActiveSection();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav className="flex h-14 items-center justify-between rounded-full bg-white px-4 shadow-lg shadow-neutral-900/5 dark:bg-neutral-900 dark:shadow-neutral-900/30 xl:bg-white/80 xl:backdrop-blur-xl xl:dark:bg-neutral-900/80">
        <a
          href={isHome ? "#hero" : "/"}
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full accent-gradient-br text-[11px] font-bold text-white">
            TR
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-0.5 flex-nowrap">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className={cn(
                "relative whitespace-nowrap px-3 py-1.5 text-base transition-colors rounded-full",
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

          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className={cn(
                "flex items-center gap-0.5 whitespace-nowrap px-3 py-1.5 text-base transition-colors rounded-full cursor-pointer",
                "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              )}
            >
              More
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  moreOpen && "rotate-180"
                )}
              />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[8rem] rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
                {pageLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

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
