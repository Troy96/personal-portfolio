import type { Metadata } from "next";
import {
  BookOpen,
  Music,
  Headphones,
  Clapperboard,
  MapPin,
  UtensilsCrossed,
  Activity,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { fetchNowItems } from "@/lib/notion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { NowCard } from "@/components/ui/NowCard";
import type { NowItem } from "@/types";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: `Now | ${siteConfig.name}`,
  description:
    "What I'm currently reading, watching, listening to, and doing.",
  alternates: {
    canonical: "/now",
  },
};

const categoryConfig: Record<
  NowItem["category"],
  { icon: React.ComponentType<{ className?: string }>; label: string }
> = {
  Books: { icon: BookOpen, label: "Books" },
  Music: { icon: Music, label: "Music" },
  Podcasts: { icon: Headphones, label: "Podcasts" },
  "Movies/Series": { icon: Clapperboard, label: "Movies & Series" },
  Travel: { icon: MapPin, label: "Travel" },
  Food: { icon: UtensilsCrossed, label: "Food" },
  Activities: { icon: Activity, label: "Activities" },
};

const categoryOrder: NowItem["category"][] = [
  "Books",
  "Music",
  "Podcasts",
  "Movies/Series",
  "Travel",
  "Food",
  "Activities",
];

export default async function NowPage() {
  const items = await fetchNowItems();

  const grouped = items.reduce(
    (acc, item) => {
      (acc[item.category] ??= []).push(item);
      return acc;
    },
    {} as Record<string, NowItem[]>
  );

  const categories = categoryOrder.filter((cat) => grouped[cat]?.length);

  return (
    <section className="mx-auto max-w-5xl px-6 lg:px-8 py-20 sm:py-24">
      <AnimatedSection>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="gradient-text">Now</span>
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          What I&apos;m currently into &mdash; books, music, shows, and more.
        </p>
      </AnimatedSection>

      {categories.length > 0 ? (
        categories.map((category, i) => {
          const { icon: Icon, label } = categoryConfig[category];
          return (
            <AnimatedSection
              key={category}
              delay={150 * (i + 1)}
              className="mt-10"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                <Icon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                {label}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {grouped[category].map((item) => (
                  <NowCard key={item.id} item={item} />
                ))}
              </div>
            </AnimatedSection>
          );
        })
      ) : (
        <AnimatedSection delay={200} className="mt-8">
          <p className="text-neutral-500 dark:text-neutral-400">
            Nothing here yet. Check back soon!
          </p>
        </AnimatedSection>
      )}
    </section>
  );
}
