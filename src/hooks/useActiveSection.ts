"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "hero",
  "about",
  "experience",
  "projects",
  "services",
  "social",
  "interests",
  "contact",
];

export function useActiveSection() {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-20% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return active;
}
