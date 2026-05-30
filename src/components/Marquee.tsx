const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Solidity",
  "Web3.js",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Smart Contracts",
];

export default function Marquee() {
  // Duplicated once so the -50% translate loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="marquee-host relative flex overflow-hidden border-y border-border py-5 select-none">
      <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-medium text-muted sm:text-3xl">
              {item}
            </span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
