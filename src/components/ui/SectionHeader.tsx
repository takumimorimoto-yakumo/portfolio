"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12", centered && "text-center", className)}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 font-[family-name:var(--font-space-grotesk)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
