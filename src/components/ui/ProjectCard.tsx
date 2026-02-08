import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { Card } from "./Card";
import { Badge } from "./Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-neutral-900 dark:text-white">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label={`GitHub repo for ${project.title}`}
              >
                <Github size={16} />
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={16} />
              </Link>
            )}
          </div>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
