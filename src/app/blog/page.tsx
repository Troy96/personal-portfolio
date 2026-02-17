import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { fetchBlogPosts } from "@/lib/blog";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BlogCard } from "@/components/ui/BlogCard";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description:
    "Thoughts on backend engineering, system design, and software development by Tuhin Roy.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <section className="mx-auto max-w-5xl px-6 lg:px-8 py-20 sm:py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="gradient-text">Blog</span>
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Thoughts on backend engineering, system design, and software
          development.
        </p>
      </AnimatedSection>

      {posts.length > 0 ? (
        <AnimatedSection delay={200} className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </AnimatedSection>
      ) : (
        <AnimatedSection delay={200} className="mt-8">
          <p className="text-neutral-500 dark:text-neutral-400">
            No posts yet. Check back soon!
          </p>
        </AnimatedSection>
      )}
    </section>
  );
}
