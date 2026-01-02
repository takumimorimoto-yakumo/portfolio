"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project, ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectFilter from "@/components/portfolio/ProjectFilter";
import PreviewModal from "@/components/portfolio/PreviewModal";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <div className="min-h-screen overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                <span className="text-lg font-semibold text-foreground font-[family-name:var(--font-space-grotesk)]">
                  Yakumo
                </span>
              </div>
              <nav className="flex items-center gap-6">
                <a href="#projects" className="text-foreground-muted hover:text-foreground transition-colors text-sm">
                  Projects
                </a>
                <a
                  href="mailto:contact@yakumo.dev"
                  className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-30 rounded-full" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Showcase
                <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-lg text-foreground-muted mb-8">
                LP・ウェブサイト・ウェブアプリの制作実績を紹介します。
                <br className="hidden sm:block" />
                モダンなデザインと高品質な開発をお届けします。
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-foreground-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  {projects.length} Projects
                </span>
                <span>|</span>
                <span>{projects.filter((p) => p.featured).length} Featured</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProjectFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* Results Count */}
            <div className="mb-6 text-sm text-foreground-muted">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </div>

            {/* Projects Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onPreview={setPreviewProject}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4 opacity-50">🔍</div>
                <p className="text-foreground-muted">No projects found</p>
                <p className="text-foreground-muted text-sm mt-2">
                  Try adjusting your search or filter
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent" />
                <span className="text-sm text-foreground-muted">
                  &copy; {new Date().getFullYear()} Yakumo. All rights reserved.
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors text-sm">
                  GitHub
                </a>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors text-sm">
                  Twitter
                </a>
                <a href="mailto:contact@yakumo.dev" className="text-foreground-muted hover:text-foreground transition-colors text-sm">
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Preview Modal */}
      <PreviewModal project={previewProject} onClose={() => setPreviewProject(null)} />
    </>
  );
}
