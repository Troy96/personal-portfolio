"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="xl:hidden rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open &&
        mounted &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
              style={{ animation: "backdropFadeIn 0.2s ease-out" }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <nav
              className="fixed top-0 right-0 z-[101] h-full w-[280px] bg-white dark:bg-neutral-900 shadow-2xl"
              style={{ animation: "slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="flex items-center justify-end p-4">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <ul className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                        activeSection === link.href
                          ? "bg-[var(--accent-bg-subtle)] text-[var(--accent)] dark:bg-[var(--accent-muted)] dark:text-[var(--accent)]"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>,
          document.body
        )}
    </>
  );
}
