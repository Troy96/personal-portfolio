import { XMLParser } from "fast-xml-parser";
import type { BlogPost } from "@/types";

const SUBSTACK_FEED_URL = "https://tuhinroy.substack.com/feed";

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(SUBSTACK_FEED_URL, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Substack RSS error:", res.status);
      return [];
    }

    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      isArray: (name) => name === "item" || name === "category",
    });
    const feed = parser.parse(xml);
    const items = feed?.rss?.channel?.item ?? [];

    return items.map((item: Record<string, unknown>) => {
      const link = String(item.link ?? "");
      const slug = link.split("/").filter(Boolean).pop() ?? "";

      return {
        slug,
        title: String(item.title ?? ""),
        description: String(item.description ?? "")
          .replace(/<[^>]*>/g, "")
          .slice(0, 200),
        url: link,
        publishedAt: String(item.pubDate ?? ""),
        categories: Array.isArray(item.category)
          ? item.category.map(String)
          : [],
      };
    });
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}
