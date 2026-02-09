import {
  Globe,
  Lightbulb,
  Server,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types";
import { Card } from "./Card";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Lightbulb,
  Server,
  GraduationCap,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--accent-border-subtle)] bg-[var(--accent-bg-subtle)] dark:border-[var(--accent-border-subtle)] dark:bg-[var(--accent-muted)]">
          <Icon size={20} className="text-[var(--accent)]" />
        </div>
        <h3 className="font-semibold text-neutral-900 dark:text-white">
          {service.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {service.description}
        </p>
        <ul className="space-y-1.5">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <span className="h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
