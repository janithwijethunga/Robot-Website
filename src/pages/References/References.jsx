import React, { useEffect } from "react";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/sections/SectionHeading";
import Card from "../../components/ui/Card";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";
import referencesDummy from "../../assets/references-dummy.svg";

export default function References() {
  const c = siteContent.pages.references;

  useEffect(() => {
    setSEO(c.seo, siteContent.brand.shortTitle);
  }, [c.seo]);

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading title={c.heading.title} subtitle={c.heading.subtitle} />
      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <Card className="p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={referencesDummy} alt="References page placeholder" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-8 grid gap-4">
          {siteContent.references.map((r) => (
            <Card key={r.id} variant="compact">
              <div className="text-sm font-semibold">{r.id}</div>
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{r.text}</div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}