import React from "react";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">{subtitle}</p> : null}
    </div>
  );
}