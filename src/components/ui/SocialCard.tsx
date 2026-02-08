import Link from "next/link";
import { Github, Twitter, Linkedin, Heart, MessageCircle, Repeat } from "lucide-react";
import type { SocialPost } from "@/types";
import { Card } from "./Card";

const platformIcons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
};

const platformColors = {
  github: "text-neutral-900 dark:text-white",
  twitter: "text-sky-500",
  linkedin: "text-blue-600",
};

export function SocialCard({ post }: { post: SocialPost }) {
  const Icon = platformIcons[post.platform];

  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Icon
            size={16}
            className={platformColors[post.platform]}
          />
          <span className="text-xs font-medium capitalize text-neutral-500 dark:text-neutral-400">
            {post.platform}
          </span>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {post.content}
        </p>
        <div className="flex items-center justify-between">
          {post.engagement && (
            <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
              {post.engagement.likes !== undefined && (
                <span className="flex items-center gap-1">
                  <Heart size={12} /> {post.engagement.likes}
                </span>
              )}
              {post.engagement.retweets !== undefined && (
                <span className="flex items-center gap-1">
                  <Repeat size={12} /> {post.engagement.retweets}
                </span>
              )}
              {post.engagement.comments !== undefined && (
                <span className="flex items-center gap-1">
                  <MessageCircle size={12} /> {post.engagement.comments}
                </span>
              )}
            </div>
          )}
          <Link
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            View post &rarr;
          </Link>
        </div>
      </div>
    </Card>
  );
}
