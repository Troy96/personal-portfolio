"use client";

import { useEffect, useRef, useState } from "react";

const sectionIds = [
  "hero",
  "about",
  "experience",
  "skills",
  "projects",
  "services",
  "social",
  "interests",
  "contact",
];

export function useActiveSection() {
  const [active, setActive] = useState("#hero");
  const visibleRef = useRef(new Map<string, IntersectionObserverEntry>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleRef.current.set(entry.target.id, entry);
          } else {
            visibleRef.current.delete(entry.target.id);
          }
        }

        // Pick the topmost visible section by its boundingClientRect.top
        let best: string | null = null;
        let bestTop = Infinity;
        for (const [id, entry] of visibleRef.current) {
          if (entry.boundingClientRect.top < bestTop) {
            bestTop = entry.boundingClientRect.top;
            best = id;
          }
        }
        if (best) setActive(`#${best}`);
      },
      { rootMargin: "-10% 0px -40% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return active;
}
