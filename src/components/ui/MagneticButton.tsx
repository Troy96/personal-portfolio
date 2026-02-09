"use client";

import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function MagneticButton({ children, className, href }: MagneticButtonProps) {
  const ref = useMagneticEffect<HTMLAnchorElement>(8);

  return (
    <a ref={ref} href={href} className={className}>
      {children}
    </a>
  );
}
