import React from "react";
import { cn } from "../../utils/cn";

export default function Divider({ className }) {
  return <div className={cn("h-px w-full bg-neutral-200 dark:bg-neutral-800", className)} />;
}