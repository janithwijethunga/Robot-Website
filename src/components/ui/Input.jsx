import React from "react";
import { cn } from "../../utils/cn";

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder:text-neutral-500",
        className
      )}
      {...props}
    />
  );
}