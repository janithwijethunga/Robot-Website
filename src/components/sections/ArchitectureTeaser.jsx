import React, { useState } from "react";
import Container from "../layout/Container";
import SectionHeading from "./SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { NavLink } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

export default function ArchitectureTeaser({ content }) {
  const { ref, visible } = useScrollReveal();
  const [open, setOpen] = useState(false);

  return (
    <section ref={ref} className="py-16">
      <Container>
        <SectionHeading title={content.heading.title} subtitle={content.heading.subtitle} />
        <motion.div initial={{ opacity: 0, y: 10 }} animate={visible ? { opacity: 1, y: 0 } : {}} className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
                {content.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild intent="primary">
                  <NavLink to={content.cta.href}>{content.cta.label}</NavLink>
                </Button>
                <Button intent="secondary" onClick={() => setOpen(true)} aria-label="View architecture diagram">
                  View diagram
                </Button>
              </div>
            </Card>
          </div>

          <motion.div variants={fadeUp} className="lg:col-span-5">
            <Card className="p-4">
              <img src={content.diagramSrc} alt={content.diagramAlt} className="w-full h-auto rounded-2xl" loading="lazy" />
              <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">{content.diagramAlt}</div>
            </Card>
          </motion.div>
        </motion.div>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={content.modal.title}
          description={content.modal.description}
        >
          <img src={content.diagramSrc} alt={content.diagramAlt} className="w-full h-auto rounded-2xl" />
        </Modal>
      </Container>
    </section>
  );
}