import React from "react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { NavLink } from "react-router-dom";

export default function CTA({ content }) {
  return (
    <section className="py-16">
      <Container>
        <Card className="p-8 md:p-10 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900/30">
          <div className="grid gap-6 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8">
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight">{content.title}</div>
              <div className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">{content.subtitle}</div>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              {content.ctas.map((c) => (
                <Button key={c.href} asChild intent={c.intent} size="lg" className="w-full">
                  <NavLink to={c.href}>{c.label}</NavLink>
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}