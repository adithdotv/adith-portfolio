"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import { ArrowIcon } from "./icons";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    // Simulated submit — wire this to an API route or form service.
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10"
    >
      <Reveal className="border-t border-border pt-6">
        <div className="flex items-baseline gap-4">
          <span className="label text-accent">(05)</span>
          <span className="label">Contact</span>
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
          Let&apos;s build
          <br />
          something
          <span className="text-accent"> good</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="flex flex-col justify-between gap-10">
          <p className="max-w-md text-lg leading-relaxed text-muted">
            Have a project in mind or just want to say hi? My inbox is always
            open — I&apos;ll usually get back to you within a day.
          </p>

          <div className="space-y-6">
            <div>
              <p className="label mb-2">Email</p>
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-display text-xl font-medium sm:text-2xl"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                { href: profile.socials.github, label: "GitHub" },
                { href: profile.socials.linkedin, label: "LinkedIn" },
                { href: profile.socials.twitter, label: "Twitter" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline label hover:text-foreground"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {status === "sent" ? (
            <div className="flex min-h-64 flex-col items-start justify-center border-t border-border">
              <span className="font-display text-5xl">✦</span>
              <h3 className="mt-4 font-display text-2xl font-medium">
                Message sent.
              </h3>
              <p className="mt-2 text-muted">
                Thanks for reaching out — I&apos;ll be in touch soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="link-underline label mt-6 text-accent"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col">
              <Field label="01 / Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </Field>
              <Field label="02 / Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </Field>
              <Field label="03 / Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell me about your project…"
                  className={`${inputClass} resize-none`}
                />
              </Field>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-8 inline-flex items-center gap-3 self-start font-display text-2xl font-medium disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                {status !== "sending" && (
                  <ArrowIcon className="h-6 w-6 transition-transform group-hover:translate-x-1.5" />
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "w-full border-b border-border bg-transparent py-3 text-lg text-foreground placeholder:text-faint outline-none transition-colors focus:border-accent";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="group block pt-6 first:pt-0">
      <span className="label mb-1 block transition-colors group-focus-within:text-accent">
        {label}
      </span>
      {children}
    </label>
  );
}
