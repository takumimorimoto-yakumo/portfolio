"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { projects, Project, ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectFilter from "@/components/portfolio/ProjectFilter";
import PreviewModal from "@/components/portfolio/PreviewModal";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <motion.header
          initial={false}
          animate={{
            height: isScrolled ? 48 : 72,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-0 left-0 right-0 z-40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full overflow-hidden">
              {/* Logo - 左固定 */}
              <motion.div
                className="flex items-center gap-2"
                layout
              >
                <motion.div
                  className="rounded-lg bg-[var(--brand-primary)]"
                  animate={{
                    width: isScrolled ? 24 : 32,
                    height: isScrolled ? 24 : 32,
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
                <span className="text-lg font-semibold text-[var(--text-primary)] font-[family-name:var(--font-space-grotesk)]">
                  Yakumo
                </span>
              </motion.div>

              {/* Navigation - 右にスライドして消える */}
              <motion.nav
                className="flex items-center gap-6"
                animate={{
                  x: isScrolled ? 100 : 0,
                  opacity: isScrolled ? 0 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                style={{ pointerEvents: isScrolled ? "none" : "auto" }}
              >
                <a
                  href="#projects"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm"
                >
                  Projects
                </a>
                <a
                  href="mailto:contact@yakumo.dev"
                  className="px-4 py-2 bg-[var(--color-action)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Contact
                </a>
              </motion.nav>
            </div>
          </div>
        </motion.header>

        {/* Hero */}
        <section className="relative pt-[72px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 font-[family-name:var(--font-space-grotesk)]">
                Showcase
                <span className="block mt-2 text-[var(--brand-primary)]">
                  Portfolio
                </span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                LP・ウェブサイトの制作実績を紹介します。
                <br className="hidden sm:block" />
                モダンなデザインと高品質な開発をお届けします。
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-[var(--text-secondary)]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)]" />
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
            <div className="mb-6 text-sm text-[var(--text-secondary)]">
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
                <p className="text-[var(--text-secondary)]">No projects found</p>
                <p className="text-[var(--text-secondary)] text-sm mt-2">
                  Try adjusting your search or filter
                </p>
              </motion.div>
            )}
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
              <div className="flex items-center gap-4">
                <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
                  GitHub
                </a>
                <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
                  Twitter
                </a>
                <a href="mailto:contact@yakumo.dev" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
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
