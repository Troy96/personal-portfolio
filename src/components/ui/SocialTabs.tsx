"use client";

import { useState } from "react";
import { Twitter, Linkedin } from "lucide-react";
import type { SocialPost } from "@/types";
import { SocialCard } from "./SocialCard";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "twitter" as const, label: "X (Twitter)", icon: Twitter },
  { id: "linkedin" as const, label: "LinkedIn", icon: Linkedin },
];

export function SocialTabs({
  twitterPosts,
  linkedinPosts,
}: {
  twitterPosts: SocialPost[];
  linkedinPosts: SocialPost[];
}) {
  const [active, setActive] = useState<"twitter" | "linkedin">("twitter");
  const posts = active === "twitter" ? twitterPosts : linkedinPosts;

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer",
                active === tab.id
                  ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent-shadow)]"
                  : "border border-neutral-200 text-neutral-600 hover:border-[var(--accent-border-subtle)] hover:text-[var(--accent)] dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-[var(--accent-border-subtle)] dark:hover:text-[var(--accent)]"
              )}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <SocialCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
