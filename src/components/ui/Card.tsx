"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-xl border shadow-sm transition-colors",
  {
    variants: {
      variant: {
        default: "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]",
        elevated: "border-transparent bg-[var(--bg-surface)] shadow-lg",
        bordered: "border-2 border-[var(--border-subtle)] bg-[var(--bg-surface)]",
        highlighted: "border-[var(--brand-primary)] ring-2 ring-[var(--brand-primary)] bg-[var(--bg-surface)] shadow-xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends Omit<HTMLMotionProps<"div">, "ref">,
    VariantProps<typeof cardVariants> {
  hoverEffect?: boolean;
  animationVariants?: Variants;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hoverEffect = false, animationVariants, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={animationVariants}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        cardVariants({ variant }),
        hoverEffect && "hover:border-[var(--text-secondary)] cursor-pointer",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-space-grotesk)]",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-[var(--text-secondary)]", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
export default Card;
