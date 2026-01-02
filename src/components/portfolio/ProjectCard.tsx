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
      className="group relative bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden transition-colors hover:border-[var(--text-secondary)]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-[var(--bg-app)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--brand-primary)]/10" />
        <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
          <span className="text-[var(--text-secondary)] text-sm">{project.title}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[var(--bg-surface)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => onPreview(project)}
            className="px-4 py-2 bg-[var(--brand-primary)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            Preview
          </button>
          {project.url && (
            project.url.startsWith("/") ? (
              <Link
                href={project.url}
                className="px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm font-medium rounded-lg hover:border-[var(--text-secondary)] transition-colors"
              >
                Visit
              </Link>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm font-medium rounded-lg hover:border-[var(--text-secondary)] transition-colors"
              >
                Visit
              </a>
            )
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-[var(--color-action)]/90 text-white text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & Year */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-xs font-medium rounded">
            {categoryLabels[project.category]}
          </span>
          <span className="text-[var(--text-secondary)] text-xs">{project.year}</span>
        </div>

        {/* Title */}
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-space-grotesk)] hover:text-[var(--brand-primary)] transition-colors">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-[var(--bg-app)] text-[var(--text-secondary)] text-xs rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-[var(--text-secondary)] text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
