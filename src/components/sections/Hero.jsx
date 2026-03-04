import React from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/motion";

export default function Hero({ content }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-grid dark:bg-grid-dark" />
        <div className="absolute -top-24 right-[-120px] h-[340px] w-[340px] rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-120px] h-[340px] w-[340px] rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <Container className="py-16 sm:py-20">
        <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="grid gap-10 lg:grid-cols-12 items-center">
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <Badge intent="primary">{content.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              {content.headline}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
              {content.subtext}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {content.ctas.map((c) => (
                <Button key={c.href} asChild intent={c.intent} size="lg">
                  <NavLink to={c.href} aria-label={c.label}>
                    {c.label}
                  </NavLink>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-softDark">
              <img
                src={content.illustrationSrc}
                alt={content.illustrationAlt}
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                {content.illustrationAlt}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}