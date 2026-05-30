import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pb-12 lg:px-10">
      {/* Big sign-off wordmark */}
      <div className="overflow-hidden border-t border-border pt-10">
        <a
          href="#home"
          className="block font-display text-[clamp(3rem,16vw,12rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-foreground/10 transition-colors hover:text-foreground/20"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>
      </div>

      <div className="mt-10 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © 2026 {profile.name} — Built with Next.js &amp; Tailwind CSS
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline label hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#home"
          className="label hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
