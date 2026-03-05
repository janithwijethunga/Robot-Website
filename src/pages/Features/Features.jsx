import React, { useEffect, useMemo } from "react";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/sections/SectionHeading";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Tabs from "../../components/ui/Tabs";
import Divider from "../../components/ui/Divider";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";
import featuresDummy from "../../assets/features-dummy.svg";

function ListBlock({ title, description, bullets }) {
  return (
    <Card>
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{description}</div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function Features() {
  const c = siteContent.pages.features;

  useEffect(() => {
    setSEO(c.seo, siteContent.brand.shortTitle);
  }, [c.seo]);

  const tabs = useMemo(() => c.tabs, [c.tabs]);

  return (
    <Container className="py-16 sm:py-20 h-screen">
      <SectionHeading title={c.heading.title} subtitle={c.heading.subtitle} />
      <div className="mt-8 ">
        <div className="lg:col-span-8">
          <Tabs
            items={tabs}
            initialKey="modules"
            render={(tab) => {
            if (tab.key === "modules") {
              return (
                <div className="grid gap-4 lg:grid-cols-3">
                  {siteContent.modules.map((m) => {
                    const Icon = m.icon;
                    return (
                      <Card key={m.key}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-900">
                              <Icon className="h-5 w-5" />
                            </span>
                            <div className="font-semibold">{m.title}</div>
                          </div>
                          <Badge intent="primary">Module</Badge>
                        </div>
                        <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{m.description}</div>
                        <Divider className="my-4" />
                        <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
                          {m.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    );
                  })}
                </div>
              );
            }

            if (tab.key === "features") {
              return (
                <div className="grid gap-4 lg:grid-cols-3">
                  {siteContent.features.map((f) => {
                    const Icon = f.icon;
                    return (
                      <Card key={f.title} variant="highlight">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-700 dark:text-primary-200">
                              <Icon className="h-5 w-5" />
                            </span>
                            <div className="font-semibold">{f.title}</div>
                          </div>
                          <Badge intent="accent">{f.tag}</Badge>
                        </div>
                        <div className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{f.description}</div>
                      </Card>
                    );
                  })}
                </div>
              );
            }

              return (
                <div className="grid gap-4 lg:grid-cols-3">
                  <ListBlock
                    title="Hardware strengths"
                    description="Low-cost prototyping choices optimized for structured polytunnel movement."
                    bullets={[
                      "Four-wheel drive for stable traversal",
                      "Vertical scanning via stepper + guide rods",
                      "RFID plant-level identification points",
                      "Pump actuation for targeted actions",
                    ]}
                  />
                  <ListBlock
                    title="Software strengths"
                    description="Visibility, traceability, and AI decision support through integrated software layers."
                    bullets={[
                      "YOLOv8n disease detection pipeline",
                      "Mobile app robot status and logs",
                      "Plant profiles with scan/spray history",
                      "Quality indicators like WiFi strength",
                    ]}
                  />
                </div>
              );
            }}
          />
        </div>
      </div>
    </Container>
  );
}