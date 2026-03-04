import React, { useEffect } from "react";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/sections/SectionHeading";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";
import hardwareDummy from "../../assets/hardware-dummy.svg";

export default function Hardware() {
  const c = siteContent.pages.hardware;

  useEffect(() => {
    setSEO(c.seo, siteContent.brand.shortTitle);
  }, [c.seo]);

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading title={c.heading.title} subtitle={c.heading.subtitle} />
      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
       

        <div className="lg:col-span-8 space-y-6">
          {siteContent.hardware.groups.map((g) => (
            <div key={g.title}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-lg font-semibold">{g.title}</div>
              
              </div>
              <div className="mt-3 grid gap-4 lg:grid-cols-3">
                {g.items.map((it) => (
                  <Card key={it.name} variant="compact">
                    <div className="font-semibold">{it.name}</div>
                    <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{it.detail}</div>
                    <div className="mt-2">
                      <img src={it.image} alt={`${it.name} image`} className="h-auto w-auto object-contain" loading="lazy" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}