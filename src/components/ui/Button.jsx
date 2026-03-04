import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary:
          "bg-primary-600 text-white hover:bg-primary-700 shadow-sm dark:shadow-softDark",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800",
        ghost:
          "bg-transparent text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

export default function Button({ className, intent, size, asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";
  const base = cn(buttonVariants({ intent, size }), className);

  if (asChild) {
    return <span className={base}>{props.children}</span>;
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={base}
      {...props}
    />
  );
}