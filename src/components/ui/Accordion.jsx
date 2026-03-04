import React, { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ items }) {
  const baseId = useId();
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        const btnId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;
        return (
          <div key={it.q} className="rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
            <button
              id={btnId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left focus-visible:ring-2 focus-visible:ring-primary-500 rounded-2xl"
            >
              <span className="font-medium">{it.q}</span>
              <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1, transition: { duration: 0.22 } }}
                  exit={{ height: 0, opacity: 0, transition: { duration: 0.18 } }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-sm text-neutral-600 dark:text-neutral-300">{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}