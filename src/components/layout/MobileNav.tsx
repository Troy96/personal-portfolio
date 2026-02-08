"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <nav className="absolute left-0 top-full w-full border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 px-6 py-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm transition-colors hover:text-neutral-900 dark:hover:text-white",
                    activeSection === link.href
                      ? "text-neutral-900 dark:text-white font-medium"
                      : "text-neutral-600 dark:text-neutral-400"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
