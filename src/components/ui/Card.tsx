import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900",
        hover &&
          "transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-shadow)] hover:-translate-y-1 hover:border-[var(--accent-border-subtle)] dark:hover:border-[var(--accent-border-subtle)] dark:hover:shadow-[var(--accent-shadow)]",
        className
      )}
    >
      {children}
    </div>
  );
}
