import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose, title, description, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title || "Dialog"}
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-neutral-950/45" onClick={onClose} />
          <motion.div
            className="absolute left-1/2 top-1/2 w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-softDark"
            initial={{ y: 14, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ y: 10, opacity: 0, scale: 0.98, transition: { duration: 0.18 } }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                {title && <div className="text-lg font-semibold">{title}</div>}
                {description && <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{description}</div>}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}