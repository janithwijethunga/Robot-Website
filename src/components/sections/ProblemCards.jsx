import React from "react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "./SectionHeading";

export default function ProblemCards({ content }) {
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
          {content.items.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} variants={fadeUp}>
                <Card>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="font-semibold">{p.title}</div>
                  </div>
                  <div className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}