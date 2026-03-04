import React from "react";
import Container from "../layout/Container";
import SectionHeading from "./SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { NavLink } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/motion";

function Progress({ label, value }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <div className="text-neutral-700 dark:text-neutral-200">{label}</div>
        <div className="text-neutral-500 dark:text-neutral-400">{value}%</div>
      </div>
      <div className="mt-2 h-2 rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function ResultsTeaser({ content }) {
  const { ref, visible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16">
      <Container>
        <SectionHeading title={content.heading.title} subtitle={content.heading.subtitle} />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          className="mt-8 grid gap-4 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-7 grid gap-4 sm:grid-cols-3">
            {content.cards.map((c) => (
              <Card key={c.title} variant="compact">
                <div className="text-xs text-neutral-500 dark:text-neutral-400">{c.title}</div>
                <div className="mt-2 text-xl font-semibold">{c.value}</div>
                <div className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">{c.note}</div>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-5">
            <Card>
              <div className="text-sm font-semibold">Model indicators</div>
              <div className="mt-4 space-y-4">
                {content.progress.map((p) => (
                  <Progress key={p.label} label={p.label} value={p.value} />
                ))}
              </div>
              <div className="mt-6">
                <Button asChild intent="secondary" className="w-full">
                  <NavLink to={content.cta.href}>{content.cta.label}</NavLink>
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}