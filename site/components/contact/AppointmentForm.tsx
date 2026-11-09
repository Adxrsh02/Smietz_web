"use client";

import { useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import { serviceCategories } from "@/content/services";
import { contactCopy } from "@/content/copy/pages";
import { bookingMessage, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { Button } from "../ui/Button";
import { Icon, WhatsAppIcon } from "../ui/icons";

const categoryNames = serviceCategories.map((c) => c.name) as [string, ...string[]];

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Please keep your name under 80 characters."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your WhatsApp phone number.")
    .refine(
      (v) => /^(?:\+?91)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, "")),
      "Please enter a valid 10-digit Indian mobile number.",
    ),
  service: z.enum(categoryNames, { message: "Please choose a service category." }),
  date: z
    .string()
    .optional()
    .refine((v) => {
      if (!v) return true;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return new Date(`${v}T00:00:00`) >= today;
    }, "Please choose today or a later date."),
  message: z.string().trim().max(500, "Please keep your message under 500 characters.").optional(),
});

type Field = "name" | "phone" | "service" | "date" | "message";
type Errors = Partial<Record<Field, string>>;

const fieldClass = (invalid: boolean) =>
  cn(
    "h-12 w-full rounded-input border bg-white px-4 text-base text-on-surface placeholder:text-outline",
    "focus:outline-none focus:ring-4 focus:ring-primary/15",
    invalid ? "border-error focus:border-error" : "border-line focus:border-primary",
  );

function FieldShell({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="type-label mb-1.5 block text-on-surface">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-error">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-on-surface-variant"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="type-small mt-1.5 text-on-surface-variant">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="type-small mt-1.5 flex items-start gap-1.5 text-error">
          <Icon name="alert" size={16} className="mt-0.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** No server: validates, then opens a prefilled WhatsApp message. */
export function AppointmentForm() {
  const f = contactCopy.form;
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const describedBy = (id: Field, hint?: boolean) =>
    errors[id] ? `${id}-error` : hint ? `${id}-hint` : undefined;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const raw = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: String(data.get("service") ?? ""),
      date: String(data.get("date") ?? "") || undefined,
      message: String(data.get("message") ?? "") || undefined,
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Field;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setSentUrl(null);
      // Move focus to the summary so screen readers announce the problems.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setErrors({});
    const d = parsed.data;
    const url = whatsappUrl({
      message: bookingMessage({
        name: d.name,
        phone: d.phone,
        service: d.service,
        date: d.date,
        message: d.message,
      }),
    });
    setSentUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const errorList = (Object.entries(errors) as [Field, string][]).filter(([, m]) => m);

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="form-heading"
      className="rounded-lg border border-line bg-surface-container-lowest p-6 shadow-soft ring-1 ring-gold/20 md:p-9"
    >
      <p className="type-eyebrow text-primary">{f.eyebrow}</p>
      <h2 id="form-heading" className="type-h2 mt-2 text-on-surface">
        {f.title}
      </h2>
      <p className="type-body mt-2 text-on-surface-variant">{f.intro}</p>

      {errorList.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-tile border border-error/40 bg-error-container p-4 text-on-error-container outline-none"
        >
          <p className="type-label">
            Please fix {errorList.length === 1 ? "1 problem" : `${errorList.length} problems`}:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 type-small">
            {errorList.map(([key, msg]) => (
              <li key={key}>
                <a href={`#${key}`} className="underline underline-offset-2">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5">
        <FieldShell id="name" label="Full name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={fieldClass(!!errors.name)}
          />
        </FieldShell>

        <FieldShell
          id="phone"
          label="WhatsApp phone number"
          required
          error={errors.phone}
          hint="10-digit mobile number. +91 is optional."
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98765 43210"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone", true)}
            className={fieldClass(!!errors.phone)}
          />
        </FieldShell>

        <FieldShell id="service" label="Service category" required error={errors.service}>
          <div className="relative">
            <select
              id="service"
              name="service"
              defaultValue=""
              aria-required="true"
              aria-invalid={!!errors.service}
              aria-describedby={describedBy("service")}
              className={cn(fieldClass(!!errors.service), "appearance-none pr-11")}
            >
              <option value="" disabled>
                Select a category
              </option>
              {serviceCategories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <Icon
              name="chevron-down"
              size={20}
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-primary"
            />
          </div>
        </FieldShell>

        <FieldShell id="date" label="Preferred date" error={errors.date}>
          <input
            id="date"
            name="date"
            type="date"
            aria-invalid={!!errors.date}
            aria-describedby={describedBy("date")}
            className={fieldClass(!!errors.date)}
          />
        </FieldShell>

        <FieldShell id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Anything you would like us to know"
            aria-invalid={!!errors.message}
            aria-describedby={describedBy("message")}
            className={cn(fieldClass(!!errors.message), "h-auto min-h-28 py-3 leading-6")}
          />
        </FieldShell>
      </div>

      <Button type="submit" variant="cta" size="lg" full className="mt-7" icon="whatsapp">
        {f.submit}
      </Button>

      {sentUrl ? (
        <div
          role="status"
          className="mt-5 rounded-tile border border-primary/30 bg-primary-soft p-4 text-primary-dark"
        >
          <p className="type-label flex items-center gap-2">
            <Icon name="check" size={18} />
            Opening WhatsApp with your message.
          </p>
          <p className="type-small mt-1">
            If it did not open, use the button below. Your message is ready to send.
          </p>
          <a
            href={sentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center gap-2 type-label underline underline-offset-2"
          >
            <WhatsAppIcon size={18} />
            Open WhatsApp
          </a>
        </div>
      ) : null}
    </form>
  );
}
