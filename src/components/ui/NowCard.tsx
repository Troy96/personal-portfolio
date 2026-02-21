import Image from "next/image";
import type { NowItem } from "@/types";
import { Card } from "./Card";
import { Badge } from "./Badge";

export function NowCard({ item }: { item: NowItem }) {
  const date = item.date
    ? new Date(item.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : null;

  const content = (
    <Card className="h-full">
      <div className="flex gap-4">
        {item.imageUrl && (
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        )}
        <div className="flex flex-col gap-1.5 min-w-0">
          <h3 className="text-base font-semibold text-neutral-900 dark:text-white truncate">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
              {item.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-1.5 mt-auto">
            <Badge
              className={
                item.status === "Currently"
                  ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-400"
                  : undefined
              }
            >
              {item.status}
            </Badge>
            {date && (
              <span className="text-xs text-neutral-500 dark:text-neutral-500">
                {date}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
