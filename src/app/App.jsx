import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RoutesConfig from "./routes";
import PageLayout from "../components/layout/PageLayout";
import { motion } from "framer-motion";
import { pageTransition } from "../utils/motion";

function RouteLoader() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-2/3 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-5/6 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-64 w-full rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <PageLayout>
      <Suspense fallback={<RouteLoader />}>
        <motion.div
          key={location.pathname}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-[60vh]"
        >
          <RoutesConfig />
        </motion.div>
      </Suspense>
    </PageLayout>
  );
}