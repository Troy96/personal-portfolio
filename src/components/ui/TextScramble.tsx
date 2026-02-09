"use client";

import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
}

export function TextScramble({
  text,
  className,
  duration = 800,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplay(text);
      return;
    }

    const steps = 12;
    const stepDuration = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const revealedCount = Math.floor((step / steps) * text.length);

      const result = text
        .split("")
        .map((char, i) => {
          if (i < revealedCount) return char;
          if (char === " ") return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(result);

      if (step >= steps) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{display}</span>;
}
