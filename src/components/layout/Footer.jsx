import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import Divider from "../ui/Divider";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { siteContent } from "../../content/siteContent";
import { useToast } from "../../hooks/useToast";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function Footer() {
  const footer = useMemo(() => siteContent.footer, []);
  const { push } = useToast();
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      push({ type: "error", title: "Invalid email", message: footer.newsletter.toastError });
      return;
    }
    push({ type: "success", title: "Subscribed", message: footer.newsletter.toastSuccess });
    setEmail("");
  };

  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-soft dark:shadow-softDark" />
              <div className="font-semibold">{siteContent.brand.shortTitle}</div>
            </div>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{siteContent.brand.tagline}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{col.title}</div>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <NavLink
                        to={l.href}
                        className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
                      >
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{footer.newsletter.title}</div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{footer.newsletter.subtitle}</p>
            <form onSubmit={onSubmit} className="mt-4 flex gap-2">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footer.newsletter.placeholder}
                aria-label="Newsletter email"
              />
              <Button type="submit" intent="primary">
                {footer.newsletter.button}
              </Button>
            </form>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-neutral-500 dark:text-neutral-400">{footer.legal}</div>
          <div className="flex items-center gap-2">
            {footer.socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}