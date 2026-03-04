import React from "react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Metrics({ content }) {
  const { ref, visible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16">
      <Container>
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {content.items.map((m) => (
            <motion.div key={m.label} variants={fadeUp}>
              <Card variant="compact">
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{m.label}</div>
                <div className="mt-2 text-xl font-semibold">{m.value}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">{content.note}</div>
      </Container>
    </section>
  );
}