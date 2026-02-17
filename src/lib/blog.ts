import type { BlogPost } from "@/types";

const SUBSTACK_BASE = "https://2hin.substack.com";

interface SubstackPost {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  canonical_url: string;
  post_date: string;
  body_html?: string;
  postTags: { id: string; name: string }[];
}

function mapPost(post: SubstackPost): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    description: post.subtitle || post.description || "",
    url: post.canonical_url,
    publishedAt: post.post_date,
    categories: (post.postTags ?? []).map((tag) => tag.name),
    bodyHtml: post.body_html,
  };
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${SUBSTACK_BASE}/api/v1/posts?limit=20`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Substack API error:", res.status);
      return [];
    }

    const posts: SubstackPost[] = await res.json();
    return posts.map(mapPost);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${SUBSTACK_BASE}/api/v1/posts/${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const post: SubstackPost = await res.json();
    return mapPost(post);
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
}
