"use client";

import { ProjectCategory, categoryLabels } from "@/data/projects";

interface ProjectFilterProps {
  selectedCategory: ProjectCategory | "all";
  onCategoryChange: (category: ProjectCategory | "all") => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ProjectFilter({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: ProjectFilterProps) {
  const categories: (ProjectCategory | "all")[] = ["all", "lp", "website", "webapp", "other"];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-foreground placeholder:text-foreground-muted focus:border-primary focus:ring-0 transition-colors"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-card border border-border text-foreground-muted hover:text-foreground hover:border-border-hover"
            }`}
          >
            {category === "all" ? "All" : categoryLabels[category]}
          </button>
        ))}
      </div>
    </div>
  );
}
