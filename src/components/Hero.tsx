import { profile, stats } from "@/lib/data";
import { ArrowIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "./icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-12 lg:px-10"
    >
      <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl">
        {/* meta row */}
        <Reveal className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
          <span className="label">
            {profile.name} — {profile.role}
          </span>
          <span className="label">{profile.location} · ©2026</span>
        </Reveal>

        {/* headline */}
        <Reveal delay={80}>
          <h1 className="mt-10 font-display text-[clamp(2.75rem,9vw,8rem)] font-semibold leading-[0.92] tracking-[-0.03em]">
            Engineering
            <br />
            digital products
            <br />
            <span className="text-muted">for the web</span>
            <span className="text-accent"> & web3</span>
            <span className="text-accent">°</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal delay={160} className="max-w-xl">
            <p className="text-lg leading-relaxed text-muted">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 font-display text-base font-medium"
              >
                Selected work
                <ArrowIcon className="h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="#contact"
                className="link-underline font-display text-base font-medium text-muted hover:text-foreground"
              >
                Get in touch
              </a>

              <div className="flex items-center gap-4 text-muted">
                {[
                  {
                    href: profile.socials.github,
                    Icon: GitHubIcon,
                    label: "GitHub",
                  },
                  {
                    href: profile.socials.linkedin,
                    Icon: LinkedInIcon,
                    label: "LinkedIn",
                  },
                  {
                    href: profile.socials.twitter,
                    Icon: TwitterIcon,
                    label: "Twitter",
                  },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition-colors hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* stats */}
          <Reveal delay={220}>
            <dl className="flex gap-8 border-t border-border pt-5 lg:border-0 lg:pt-0">
              {stats.map((stat) => (
                <div key={stat.label} className="lg:text-right">
                  <dt className="font-display text-3xl font-semibold sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="label mt-1">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
