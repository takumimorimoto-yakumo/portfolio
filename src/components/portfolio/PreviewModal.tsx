"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, categoryLabels } from "@/data/projects";

interface PreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

type DeviceType = "desktop" | "tablet" | "mobile";

const deviceSizes: Record<DeviceType, { width: string; label: string }> = {
  desktop: { width: "100%", label: "Desktop" },
  tablet: { width: "768px", label: "Tablet" },
  mobile: { width: "375px", label: "Mobile" },
};

export default function PreviewModal({ project, onClose }: PreviewModalProps) {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl h-[90vh] bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-space-grotesk)]">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                      {categoryLabels[project.category]}
                    </span>
                    <span className="text-foreground-muted text-xs">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Device Selector */}
              <div className="flex items-center gap-2">
                {(Object.keys(deviceSizes) as DeviceType[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDevice(d)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                      device === d
                        ? "bg-primary text-white"
                        : "bg-background-secondary text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {deviceSizes[d].label}
                  </button>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Preview Area */}
            <div className="flex-1 overflow-auto bg-background-secondary p-4 flex justify-center">
              <div
                className="bg-white rounded-lg overflow-hidden transition-all duration-300 h-full"
                style={{ width: deviceSizes[device].width, maxWidth: "100%" }}
              >
                {project.url ? (
                  <iframe
                    src={project.url}
                    className="w-full h-full border-0"
                    title={`Preview of ${project.title}`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4 opacity-50">
                        {project.category === "webapp" && "🖥️"}
                        {project.category === "lp" && "📄"}
                        {project.category === "website" && "🌐"}
                        {project.category === "other" && "📦"}
                      </div>
                      <p className="text-foreground-muted">Preview not available</p>
                      <p className="text-foreground-muted text-sm mt-2">This project doesn't have a live URL</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer - Project Info */}
            <div className="px-6 py-4 border-t border-border">
              <p className="text-foreground-muted text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-background-secondary text-foreground-muted text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
