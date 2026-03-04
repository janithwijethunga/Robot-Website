import React, { useEffect } from "react";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/sections/SectionHeading";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { NavLink } from "react-router-dom";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";
import notFoundDummy from "../../assets/notfound-dummy.svg";

export default function NotFound() {
  const c = siteContent.pages.notFound;

  useEffect(() => {
    setSEO(c.seo, siteContent.brand.shortTitle);
  }, [c.seo]);

  return (
    <Container className="py-20">
      <Card className="p-6 sm:p-10 text-center">
        <SectionHeading title={c.heading.title} subtitle={c.heading.subtitle} />
        <div className="mt-6 overflow-hidden rounded-2xl">
          <img src={notFoundDummy} alt="Not found placeholder" className="h-auto w-full" loading="lazy" />
        </div>
        <div className="mt-8">
          <Button asChild intent="primary" size="lg">
            <NavLink to={c.cta.href}>{c.cta.label}</NavLink>
          </Button>
        </div>
      </Card>
    </Container>
  );
}