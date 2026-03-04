import React, { useEffect } from "react";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/sections/SectionHeading";
import Card from "../../components/ui/Card";
import Divider from "../../components/ui/Divider";
import Badge from "../../components/ui/Badge";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";
import resultsDummy from "../../assets/results-dummy.svg";

export default function Results() {
  const c = siteContent.pages.results;

  useEffect(() => {
    setSEO(c.seo, siteContent.brand.shortTitle);
  }, [c.seo]);

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading title={c.heading.title} subtitle={c.heading.subtitle} />

      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <Card>
            <div className="flex items-center justify-between">
              <div className="font-semibold">Evaluation table</div>
              <Badge intent="accent">Prototype</Badge>
            </div>
            <Divider className="my-4" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-neutral-500 dark:text-neutral-400">
                  <tr>
                    <th className="py-2 pr-4">Metric</th>
                    <th className="py-2 pr-4">Value</th>
                    <th className="py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {c.stats.table.map((r) => (
                    <tr key={r.metric} className="border-t border-neutral-200 dark:border-neutral-800">
                      <td className="py-3 pr-4 font-medium">{r.metric}</td>
                      <td className="py-3 pr-4">{r.value}</td>
                      <td className="py-3 text-neutral-600 dark:text-neutral-300">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <Card className="p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={resultsDummy} alt="Results page placeholder" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Card>

          <Card>
            <div className="font-semibold">{c.rfidAssumptions.title}</div>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{c.rfidAssumptions.subtitle}</div>
            <Divider className="my-4" />
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
              {c.rfidAssumptions.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="highlight">
            <div className="font-semibold">{siteContent.evaluation.headline}</div>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{siteContent.evaluation.subtext}</div>
            <Divider className="my-4" />
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
              {siteContent.evaluation.highlights.map((h) => (
                <li key={h.label} className="flex items-start justify-between gap-4">
                  <span className="text-neutral-600 dark:text-neutral-300">{h.label}</span>
                  <span className="font-medium">{h.value}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Container>
  );
}