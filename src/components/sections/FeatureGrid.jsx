import React from "react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionHeading from "./SectionHeading";
import Badge from "../ui/Badge";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/motion";

export default function FeatureGrid({ content }) {
  const { ref, visible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16">
      <Container>
        <SectionHeading title={content.heading.title} subtitle={content.heading.subtitle} />
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {content.items.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={fadeUp}>
                <Card variant="highlight">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-700 dark:text-primary-200 dark:bg-primary-500/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge intent="accent">{f.tag || "Feature"}</Badge>
                  </div>
                  <div className="mt-4 font-semibold">{f.title}</div>
                  <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{f.description}</div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}