import React, { createContext, useCallback, useMemo, useState } from "react";
import { CheckCircle2, AlertTriangle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ToastContext = createContext(null);

function ToastIcon({ type }) {
  if (type === "success") return <CheckCircle2 className="h-5 w-5 text-success-500" />;
  if (type === "error") return <AlertTriangle className="h-5 w-5 text-danger-500" />;
  return <AlertTriangle className="h-5 w-5 text-warn-500" />;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), []);

  const push = useCallback(
    ({ type = "info", title, message, duration = 3200 }) => {
      const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const next = { id, type, title, message };
      setToasts((t) => [next, ...t].slice(0, 4));
      window.setTimeout(() => remove(id), duration);
    },
    [remove]
  );

  const value = useMemo(() => ({ push }), [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-20 z-[70] w-[92%] max-w-sm space-y-2">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-soft dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-softDark"
              role="status"
              aria-live="polite"
            >
              <div className="flex items-start gap-3">
                <ToastIcon type={t.type} />
                <div className="min-w-0 flex-1">
                  {t.title && <div className="text-sm font-semibold">{t.title}</div>}
                  {t.message && <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{t.message}</div>}
                </div>
                <button
                  type="button"
                  aria-label="Dismiss toast"
                  onClick={() => remove(t.id)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}