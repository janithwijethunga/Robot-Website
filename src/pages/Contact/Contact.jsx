import React, { useEffect, useMemo, useState } from "react";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/sections/SectionHeading";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";
import Divider from "../../components/ui/Divider";
import { siteContent } from "../../content/siteContent";
import { setSEO } from "../../utils/seo";
import { useToast } from "../../hooks/useToast";
import contactDummy from "../../assets/contact-dummy.svg";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function Contact() {
  const c = siteContent.pages.contact;
  const { push } = useToast();

  useEffect(() => {
    setSEO(c.seo, siteContent.brand.shortTitle);
  }, [c.seo]);

  const placeholders = useMemo(() => c.form.placeholders, [c.form.placeholders]);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const setField = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return false;
    if (!isEmail(form.email)) return false;
    if (form.message.trim().length < 10) return false;
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      push({ type: "error", title: "Form error", message: c.form.errorToast });
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 650));
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    push({ type: "success", title: "Message sent", message: c.form.successToast });
  };

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading title={c.heading.title} subtitle={c.heading.subtitle} />

      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Card>
            <div className="font-semibold">Send a message</div>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              This form is frontend-only and simulates submission.
            </div>
            <Divider className="my-4" />
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={setField("name")}
                    placeholder={placeholders.name}
                    aria-label="Name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    value={form.email}
                    onChange={setField("email")}
                    placeholder={placeholders.email}
                    aria-label="Email"
                    inputMode="email"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={setField("message")}
                  placeholder={placeholders.message}
                  aria-label="Message"
                />
                <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                  Minimum 10 characters.
                </div>
              </div>
              <Button type="submit" intent="primary" size="lg" disabled={sending} aria-label="Submit contact form">
                {sending ? "Sending..." : c.form.submitLabel}
              </Button>
            </form>
          </Card>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <Card className="p-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={contactDummy} alt="Contact page placeholder" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Card>

          <Card variant="highlight">
            <div className="font-semibold">Contact details</div>
            <Divider className="my-4" />
            <ul className="space-y-3">
              {c.details.items.map((i) => (
                <li key={i.label} className="flex items-start justify-between gap-4">
                  <span className="text-sm text-neutral-600 dark:text-neutral-300">{i.label}</span>
                  <span className="text-sm font-medium">{i.value}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div className="font-semibold">What you can ask</div>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Research scope, prototyping, evaluation methods, or collaboration opportunities.
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}