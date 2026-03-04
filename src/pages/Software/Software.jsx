import React, { useEffect } from "react";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/sections/SectionHeading";
import Card from "../../components/ui/Card";
import Divider from "../../components/ui/Divider";
import Badge from "../../components/ui/Badge";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";
import softwareDummy from "../../assets/software-dummy.svg";

export default function Software() {
  const c = siteContent.pages.software;

  useEffect(() => {
    setSEO(c.seo, siteContent.brand.shortTitle);
  }, [c.seo]);

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading title={c.heading.title} subtitle={c.heading.subtitle} />

      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 space-y-4">
          {c.appSections.map((s) => (
            <Card key={s.title}>
              <div className="flex items-center justify-between">
                <div className="font-semibold">{s.title}</div>
                <Badge intent="primary">Mobile</Badge>
              </div>
              <Divider className="my-4" />
              <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-5 space-y-4">
          <Card className="p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={softwareDummy} alt="Software integration placeholder" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Card>

          <Card>
            <div className="font-semibold">Software stack</div>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Components used across web/mobile, firmware, and ML pipeline.
            </div>
            <Divider className="my-4" />
            <ul className="space-y-3">
              {siteContent.softwareStack.items.map((i) => (
                <li key={i.name}>
                  <div className="text-sm font-semibold">{i.name}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">{i.detail}</div>
                  
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Container>
  );
}