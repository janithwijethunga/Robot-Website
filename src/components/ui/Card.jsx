import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { hoverLift } from "../../utils/motion";

const cardVariants = cva(
  "rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-softDark",
  {
    variants: {
      variant: {
        default: "p-6",
        compact: "p-4",
        highlight:
          "p-6 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900/30",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export default function Card({ className, variant, children }) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className={cn(cardVariants({ variant }), className)}
    >
      {children}
    </motion.div>
  );
}