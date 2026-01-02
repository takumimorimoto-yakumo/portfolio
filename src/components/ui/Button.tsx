"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[var(--brand-primary)] text-white hover:opacity-90",
        primary: "bg-[var(--brand-primary)] text-white hover:opacity-90",
        destructive: "bg-[var(--color-action)] text-white hover:opacity-90",
        outline:
          "border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-app)] hover:border-[var(--text-secondary)]",
        secondary: "bg-[var(--bg-app)] text-[var(--text-primary)] hover:opacity-80",
        ghost: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-app)]",
        link: "text-[var(--brand-primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-6 py-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, fullWidth, children, ...props }, ref) => {
    const classes = cn(
      buttonVariants({ variant, size }),
      fullWidth && "w-full",
      className
    );

    const motionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
    };

    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        className={classes}
        ref={ref}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;
