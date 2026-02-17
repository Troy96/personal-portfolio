import Link from "next/link";
import type { BlogPost } from "@/types";
import { Card } from "./Card";
import { Badge } from "./Badge";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full">
        <div className="flex flex-col gap-3 h-full">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {post.title}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            {date}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
            {post.description}
          </p>
          {post.categories.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {post.categories.map((cat) => (
                <Badge key={cat}>{cat}</Badge>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
