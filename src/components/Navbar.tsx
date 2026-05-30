"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-bold tracking-tight">
            {profile.name}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.slice(1).map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="label flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <span className="text-faint">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="label hidden items-center gap-2 text-foreground md:flex"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Available
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {navLinks.map((link, i) => (
            <li key={link.href} className="border-b border-border last:border-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 py-4 font-display text-2xl font-medium transition-colors hover:text-accent"
              >
                <span className="label text-faint">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
