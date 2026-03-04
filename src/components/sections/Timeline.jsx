import React from "react";
import Container from "../layout/Container";
import SectionHeading from "./SectionHeading";
import Card from "../ui/Card";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/motion";

export default function Timeline({ content }) {
  const { ref, visible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16">
      <Container>
        <SectionHeading title={content.heading.title} subtitle={content.heading.subtitle} />
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {content.steps.map((s, idx) => (
            <motion.div key={s.title} variants={fadeUp}>
              <Card variant="compact">
                <div className="text-xs text-neutral-500 dark:text-neutral-400">Step {idx + 1}</div>
                <div className="mt-2 font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{s.detail}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}