"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project, ProjectCategory } from "@/data/projects";

interface ProjectDetailClientProps {
  project: Project;
  categoryLabels: Record<ProjectCategory, string>;
}

type DeviceType = "desktop" | "tablet" | "mobile";

const deviceSizes: Record<DeviceType, { width: string; label: string }> = {
  desktop: { width: "100%", label: "Desktop" },
  tablet: { width: "768px", label: "Tablet" },
  mobile: { width: "375px", label: "Mobile" },
};

export default function ProjectDetailClient({ project, categoryLabels }: ProjectDetailClientProps) {
  const [device, setDevice] = useState<DeviceType>("desktop");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[var(--bg-surface)]/90 backdrop-blur-lg border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary)]" />
              <span className="text-lg font-semibold text-[var(--text-primary)] font-[family-name:var(--font-space-grotesk)]">
                Yakumo
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </header>

      {/* Project Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-medium rounded-lg">
              {categoryLabels[project.category]}
            </span>
            <span className="text-[var(--text-secondary)] text-sm">{project.year}</span>
            {project.featured && (
              <span className="px-3 py-1 bg-[var(--color-action)]/10 text-[var(--color-action)] text-sm font-medium rounded-lg">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 font-[family-name:var(--font-space-grotesk)]">
            {project.title}
          </h1>

          <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-3xl">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-sm rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {project.url && (
              project.url.startsWith("/") ? (
                <Link
                  href={project.url}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
                >
                  Visit Site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
                >
                  Visit Site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Device Selector */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[var(--text-primary)] font-[family-name:var(--font-space-grotesk)]">
              Preview
            </h2>
            <div className="flex items-center gap-2">
              {(Object.keys(deviceSizes) as DeviceType[]).map((d) => (
                <button
                  key={d}
                  onClick={() => setDevice(d)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    device === d
                      ? "bg-[var(--brand-primary)] text-white"
                      : "bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)]"
                  }`}
                >
                  {deviceSizes[d].label}
                </button>
              ))}
            </div>
          </div>

          {/* Preview Frame */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden">
            <div className="bg-[var(--bg-app)] p-4 flex justify-center min-h-[600px]">
              <div
                className="bg-white rounded-lg overflow-hidden transition-all duration-300 h-[600px]"
                style={{ width: deviceSizes[device].width, maxWidth: "100%" }}
              >
                {project.url ? (
                  <iframe
                    src={project.url}
                    className="w-full h-full border-0"
                    title={`Preview of ${project.title}`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[var(--bg-app)]">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-[var(--text-secondary)]">Preview not available</p>
                      <p className="text-[var(--text-secondary)] text-sm mt-2">This project doesn&apos;t have a live URL</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[var(--brand-primary)]" />
              <span className="text-sm text-[var(--text-secondary)]">
                &copy; {new Date().getFullYear()} Yakumo. All rights reserved.
              </span>
            </div>
            <Link
              href="/"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
