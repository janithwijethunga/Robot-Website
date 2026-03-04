import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { cn } from "../../utils/cn";
import { siteContent } from "../../content/siteContent";
import { useDarkMode } from "../../hooks/useDarkMode";
import Button from "../ui/Button";

function useScrollShadow() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return solid;
}

export default function Navbar() {
  const { pathname } = useLocation();
  const solid = useScrollShadow();
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useDarkMode();

  useEffect(() => setOpen(false), [pathname]);

  const links = useMemo(() => siteContent.nav.links, []);
  const brand = siteContent.brand.shortTitle;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        solid
          ? "bg-white/90 backdrop-blur border-b border-neutral-200 dark:bg-neutral-950/80 dark:border-neutral-800"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="h-16 flex items-center justify-between gap-4">
          <NavLink to="/" className="group inline-flex items-center gap-2">
            <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-soft dark:shadow-softDark" />
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">{brand}</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {links.slice(0, 7).map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-xl text-sm transition-colors",
                    isActive
                      ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-neutral-50 dark:hover:bg-neutral-900"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-900"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="hidden md:flex items-center gap-2">
              <Button asChild intent="secondary" size="sm">
                <NavLink to={siteContent.nav.ctas.secondary.href}>{siteContent.nav.ctas.secondary.label}</NavLink>
              </Button>
              <Button asChild intent="primary" size="sm">
                <NavLink to={siteContent.nav.ctas.primary.href}>{siteContent.nav.ctas.primary.label}</NavLink>
              </Button>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-900"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-neutral-950/40" onClick={() => setOpen(false)} />
            <motion.aside
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 shadow-soft dark:shadow-softDark"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ x: 40, opacity: 0, transition: { duration: 0.18 } }}
            >
              <div className="h-16 px-4 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800">
                <span className="font-semibold">{brand}</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="p-3 space-y-1">
                {links.map((l) => (
                  <NavLink
                    key={l.href}
                    to={l.href}
                    className={({ isActive }) =>
                      cn(
                        "block px-3 py-2 rounded-xl text-sm transition-colors",
                        isActive
                          ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50"
                          : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </nav>

              <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
                <Button asChild intent="secondary" className="w-full">
                  <NavLink to={siteContent.nav.ctas.secondary.href}>{siteContent.nav.ctas.secondary.label}</NavLink>
                </Button>
                <Button asChild intent="primary" className="w-full">
                  <NavLink to={siteContent.nav.ctas.primary.href}>{siteContent.nav.ctas.primary.label}</NavLink>
                </Button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}