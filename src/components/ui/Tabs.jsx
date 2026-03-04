import React, { useId, useMemo, useState } from "react";
import { cn } from "../../utils/cn";

export default function Tabs({ items, initialKey, render }) {
  const id = useId();
  const initial = initialKey || (items && items[0] ? items[0].key : "");
  const [active, setActive] = useState(initial);

  const activeItem = useMemo(() => items.find((i) => i.key === active) || items[0], [items, active]);

  return (
    <div>
      <div role="tablist" aria-label="Tabs" className="flex flex-wrap gap-2">
        {items.map((t) => (
          <button
            key={t.key}
            role="tab"
            id={`${id}-${t.key}`}
            aria-selected={active === t.key}
            aria-controls={`${id}-panel-${t.key}`}
            onClick={() => setActive(t.key)}
            className={cn(
              "h-10 rounded-xl px-3 text-sm border transition-colors focus-visible:ring-2 focus-visible:ring-primary-500",
              active === t.key
                ? "bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:border-neutral-100"
                : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-900"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel-${activeItem.key}`}
        aria-labelledby={`${id}-${activeItem.key}`}
        className="mt-6"
      >
        {render(activeItem)}
      </div>
    </div>
  );
}