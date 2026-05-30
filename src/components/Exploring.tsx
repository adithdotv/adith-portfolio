import { exploring } from "@/lib/data";
import Reveal from "./Reveal";

export default function Exploring() {
  return (
    <section id="now" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal className="border-t border-border pt-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="label">Currently exploring</span>
        </div>

        <p className="mt-8 max-w-4xl font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-muted">
          {exploring.map((item, i) => {
            const last = i === exploring.length - 1;
            const penultimate = i === exploring.length - 2;
            return (
              <span key={item}>
                <span className="text-foreground">{item}</span>
                {last ? "." : penultimate ? ", and " : ", "}
              </span>
            );
          })}
        </p>
      </Reveal>
    </section>
  );
}
