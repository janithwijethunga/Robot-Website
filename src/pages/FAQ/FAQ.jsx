import React, { useEffect } from "react";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/sections/SectionHeading";
import Accordion from "../../components/ui/Accordion";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";
import Card from "../../components/ui/Card";
import faqDummy from "../../assets/faq-dummy.svg";

export default function FAQ() {
  const c = siteContent.pages.faq;

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
              <img src={faqDummy} alt="FAQ page placeholder" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-8">
          <Accordion items={siteContent.faq} />
        </div>
      </div>
    </Container>
  );
}