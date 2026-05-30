import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <Reveal className="border-t border-border pt-6">
      <div className="flex items-baseline gap-4">
        <span className="label text-accent">({index})</span>
        <span className="label">{eyebrow}</span>
      </div>
      <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
