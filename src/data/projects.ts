export type ProjectCategory = "lp" | "website";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  thumbnail: string;
  url?: string;
  technologies: string[];
  year: number;
  featured?: boolean;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  lp: "LP",
  website: "ウェブサイト",
};

export const projects: Project[] = [
  {
    id: "salesflow",
    title: "SalesFlow",
    description: "AI搭載の次世代CRM。顧客管理・商談管理・売上予測をサポート。",
    category: "lp",
    thumbnail: "/projects/salesflow.png",
    url: "/works/salesflow",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: 2024,
    featured: true,
  },
  {
    id: "techlab-lp",
    title: "TechLab",
    description: "AI・機械学習のR&D企業向けモダンLP。先進的なデザインと技術力を訴求。",
    category: "lp",
    thumbnail: "/projects/techlab.png",
    url: "/works/techlab",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: 2024,
    featured: true,
  },
  {
    id: "cafe-minimal",
    title: "Cafe Minimal",
    description: "ミニマルデザインのカフェ公式サイト。洗練された世界観を表現。",
    category: "website",
    thumbnail: "/projects/cafe.png",
    url: "/works/cafe",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    year: 2024,
  },
  {
    id: "agency-lp",
    title: "Creative Agency",
    description: "クリエイティブエージェンシーのLP。ダイナミックなアニメーションで魅力を伝える。",
    category: "lp",
    thumbnail: "/projects/agency.png",
    url: "/works/agency",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: 2024,
    featured: true,
  },
];
