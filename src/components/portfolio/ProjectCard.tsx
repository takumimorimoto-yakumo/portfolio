"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project, categoryLabels } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
}

export default function ProjectCard({ project, onPreview }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -4 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-colors hover:border-border-hover"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-background-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-foreground-muted text-sm">{project.title}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => onPreview(project)}
            className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors"
          >
            Preview
          </button>
          {project.url && (
            project.url.startsWith("/") ? (
              <Link
                href={project.url}
                className="px-4 py-2 bg-card border border-border text-foreground text-sm font-medium rounded-lg hover:border-border-hover transition-colors"
              >
                Visit
              </Link>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-card border border-border text-foreground text-sm font-medium rounded-lg hover:border-border-hover transition-colors"
              >
                Visit
              </a>
            )
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-accent/90 text-white text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & Year */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
            {categoryLabels[project.category]}
          </span>
          <span className="text-foreground-muted text-xs">{project.year}</span>
        </div>

        {/* Title */}
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)] hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-background-secondary text-foreground-muted text-xs rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-foreground-muted text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
