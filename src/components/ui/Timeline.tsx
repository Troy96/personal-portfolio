import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative space-y-8", className)}>
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400 via-violet-400 to-fuchsia-400 dark:from-indigo-500 dark:via-violet-500 dark:to-fuchsia-500" />
      {children}
    </div>
  );
}

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  children?: React.ReactNode;
}

export function TimelineItem({
  title,
  subtitle,
  date,
  children,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-indigo-400 bg-white shadow-sm shadow-indigo-400/30 dark:border-indigo-500 dark:bg-neutral-950 dark:shadow-indigo-500/20" />
      <div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-semibold text-neutral-900 dark:text-white">
            {title}
          </h3>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {date}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {subtitle}
        </p>
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
}
