"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
}

// ui-ux-pro-max: CTA buttons use accent color (orange) for contrast
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25",
  secondary: "bg-gray-900 text-white hover:bg-gray-800",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent",
  ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 bg-transparent",
  accent:
    "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  // ui-ux-pro-max: All interactive elements must have cursor-pointer
  const baseStyles =
    "rounded-lg font-semibold transition-colors inline-flex items-center justify-center cursor-pointer";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a href={href} className={styles} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={styles} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
