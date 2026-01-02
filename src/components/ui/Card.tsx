"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type CardVariant = "default" | "elevated" | "bordered" | "highlighted";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  hoverEffect?: boolean;
  animationVariants?: Variants;
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-white border border-gray-100",
  elevated: "bg-white shadow-lg",
  bordered: "bg-white border-2 border-gray-200",
  highlighted: "bg-white ring-2 ring-blue-600 shadow-xl",
};

export default function Card({
  children,
  variant = "default",
  className = "",
  hoverEffect = true,
  animationVariants,
}: CardProps) {
  const baseStyles = "rounded-xl p-8";
  const hoverStyles = hoverEffect
    ? "hover:shadow-md transition-shadow"
    : "";

  return (
    <motion.div
      variants={animationVariants}
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
