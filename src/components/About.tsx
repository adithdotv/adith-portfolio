import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    no: "01",
    title: "User-first",
    body: "I obsess over the details that make interfaces feel effortless — speed, accessibility, and clarity.",
  },
  {
    no: "02",
    title: "End-to-end",
    body: "From database schema to pixel-perfect UI, I'm comfortable owning the whole stack.",
  },
  {
    no: "03",
    title: "Pragmatic",
    body: "I pick the simplest tool that solves the problem and ship value early and often.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10"
    >
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Turning complex problems into simple, elegant products."
      />

      <div className="mt-14 grid gap-x-12 gap-y-12 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="space-y-6 text-xl leading-relaxed text-foreground/90">
          <p>
            I&apos;m a full-stack developer based in {profile.location}, with a
            soft spot for clean architecture and interfaces that feel alive.
            Over the last three years I&apos;ve helped different clients take
            ideas from a napkin sketch to products used by thousands.
          </p>
          <p className="text-muted">
            My toolkit centers on the modern web — React, Next.js, and
            TypeScript on the front, Node and Postgres on the back — but
            I&apos;m happiest when I&apos;m learning whatever a project needs.
          </p>
          <p className="text-muted">
            When I&apos;m not shipping, you&apos;ll find me contributing to open
            source, sketching UI ideas, or chasing the perfect cup of coffee.
          </p>
        </Reveal>

        <div>
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="group flex gap-5 border-t border-border py-6 last:border-b"
            >
              <span className="label pt-1 text-faint transition-colors group-hover:text-accent">
                {p.no}
              </span>
              <div>
                <h3 className="font-display text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
