import React, { useEffect, useState } from "react";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/sections/SectionHeading";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";

export default function Architecture() {
  const c = siteContent.pages.architecture;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSEO(c.seo, siteContent.brand.shortTitle);
  }, [c.seo]);

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading title={c.heading.title} subtitle={c.heading.subtitle} />

      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 space-y-4">
          {c.blocks.map((b) => (
            <Card key={b.title}>
              <div className="font-semibold">{b.title}</div>
              <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{b.description}</div>
            </Card>
          ))}
          <Button intent="secondary" onClick={() => setOpen(true)} aria-label="Open architecture diagram modal">
            View architecture diagram
          </Button>
        </div>
        <div className="lg:col-span-5">
          <Card className="p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={c.diagram.src} alt={c.diagram.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">{c.diagram.alt}</div>
          </Card>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={c.modal.title} description={c.modal.description}>
        <img src={c.diagram.src} alt={c.diagram.alt} className="w-full h-auto rounded-2xl" />
      </Modal>
    </Container>
  );
}