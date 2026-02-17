import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { fetchBlogPost, fetchBlogPosts } from "@/lib/blog";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${siteConfig.url}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);
  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-6 lg:px-8 py-20 sm:py-24">
      <AnimatedSection>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-[var(--accent)] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 mt-4">
          <time className="text-sm text-neutral-500 dark:text-neutral-400">
            {date}
          </time>
          <Link
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-[var(--accent)] transition-colors"
          >
            View on Substack <ExternalLink size={12} />
          </Link>
        </div>

        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {post.categories.map((cat) => (
              <Badge key={cat}>{cat}</Badge>
            ))}
          </div>
        )}
      </AnimatedSection>

      {post.bodyHtml && (
        <AnimatedSection delay={200} className="mt-10">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />
        </AnimatedSection>
      )}
    </article>
  );
}
