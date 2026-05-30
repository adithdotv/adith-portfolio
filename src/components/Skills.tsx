import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10"
    >
      <SectionHeading
        index="02"
        eyebrow="Capabilities"
        title="The tools I reach for."
        description="A pragmatic stack refined across web and web3 projects."
      />

      <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 70}
            className="group bg-background p-7 transition-colors hover:bg-background-soft"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg font-medium">
                {group.title}
              </h3>
              <span className="label text-faint transition-colors group-hover:text-accent">
                0{i + 1}
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2.5 text-muted transition-colors group-hover:text-foreground"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
