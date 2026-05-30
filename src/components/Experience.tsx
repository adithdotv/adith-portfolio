import { experiences } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10"
    >
      <SectionHeading index="04" eyebrow="Experience" title="Where I've worked." />

      <div className="mt-14">
        {experiences.map((exp, i) => (
          <Reveal
            key={exp.company}
            delay={i * 80}
            className="group grid grid-cols-1 gap-x-12 gap-y-6 border-t border-border py-10 last:border-b lg:grid-cols-[16rem_1fr]"
          >
            <div className="flex flex-col gap-2">
              <span className="label text-accent">{exp.period}</span>
              <h3 className="font-display text-2xl font-semibold leading-tight">
                {exp.company}
              </h3>
              <p className="text-muted">{exp.role}</p>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">
                {exp.description}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
