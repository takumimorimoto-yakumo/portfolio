export type ProjectCategory = "lp" | "website" | "webapp" | "other";

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
  webapp: "ウェブアプリ",
  other: "その他",
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
    title: "TechLab LP",
    description: "テック企業向けのモダンなランディングページ。",
    category: "lp",
    thumbnail: "/projects/techlab.png",
    url: "https://techlab.example.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: 2024,
    featured: true,
  },
  {
    id: "portfolio-dashboard",
    title: "Portfolio Dashboard",
    description: "投資ポートフォリオを管理・可視化するダッシュボード。",
    category: "webapp",
    thumbnail: "/projects/dashboard.png",
    technologies: ["React", "TypeScript", "Chart.js", "Node.js"],
    year: 2024,
  },
  {
    id: "cafe-website",
    title: "Cafe Minimal",
    description: "ミニマルデザインのカフェ公式サイト。",
    category: "website",
    thumbnail: "/projects/cafe.png",
    url: "https://cafe.example.com",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    year: 2023,
  },
  {
    id: "fitness-app",
    title: "FitTrack",
    description: "ワークアウト記録・進捗管理アプリ。",
    category: "webapp",
    thumbnail: "/projects/fitness.png",
    technologies: ["React Native", "TypeScript", "Firebase"],
    year: 2023,
  },
  {
    id: "agency-lp",
    title: "Creative Agency",
    description: "クリエイティブエージェンシーのLP。動的アニメーション。",
    category: "lp",
    thumbnail: "/projects/agency.png",
    url: "https://agency.example.com",
    technologies: ["Next.js", "GSAP", "Three.js"],
    year: 2023,
  },
  {
    id: "ecommerce",
    title: "ShopModern",
    description: "モダンなECサイト。Stripe決済対応。",
    category: "webapp",
    thumbnail: "/projects/ecommerce.png",
    technologies: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    year: 2023,
    featured: true,
  },
  {
    id: "blog-platform",
    title: "DevBlog",
    description: "開発者向けブログプラットフォーム。Markdown対応。",
    category: "webapp",
    thumbnail: "/projects/blog.png",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    year: 2022,
  },
];
