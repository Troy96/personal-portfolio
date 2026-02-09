import Link from "next/link";
import { Github, Twitter, Linkedin, Heart, MessageCircle, Repeat } from "lucide-react";
import type { SocialPost } from "@/types";
import { Card } from "./Card";

const platformIcons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
};

const platformGradients = {
  github: "bg-neutral-100 dark:bg-neutral-800",
  twitter: "bg-sky-50 dark:bg-sky-500/10",
  linkedin: "bg-blue-50 dark:bg-blue-500/10",
};

const platformColors = {
  github: "text-neutral-900 dark:text-white",
  twitter: "text-sky-500",
  linkedin: "text-blue-600 dark:text-blue-400",
};

export function SocialCard({ post }: { post: SocialPost }) {
  const Icon = platformIcons[post.platform];

  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${platformGradients[post.platform]}`}>
            <Icon
              size={14}
              className={platformColors[post.platform]}
            />
          </div>
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
            className="text-xs font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            View post &rarr;
          </Link>
        </div>
      </div>
    </Card>
  );
}
