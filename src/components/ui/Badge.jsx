import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", {
  variants: {
    intent: {
      neutral: "bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200",
      primary: "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200",
      accent: "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-200",
    },
  },
  defaultVariants: { intent: "neutral" },
});

export default function Badge({ className, intent, children }) {
  return <span className={cn(badgeVariants({ intent }), className)}>{children}</span>;
}