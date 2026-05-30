import Image from "next/image";
import { projects } from "@/lib/data";
import { ArrowIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10"
    >
      <SectionHeading
        index="03"
        eyebrow="Selected work"
        title="Things I've designed & shipped."
        description="A few projects I'm proud of — each one live for real users."
      />

      <div className="mt-14">
        {projects.map((project, i) => {
          const primary =
            project.link && project.link !== "#" ? project.link : project.repo;
          const hasLive = project.link && project.link !== "#";
          const imageRight = i % 2 === 0;

          return (
            <Reveal
              key={project.title}
              className="grid items-center gap-x-12 gap-y-8 border-t border-border py-12 last:border-b lg:grid-cols-2"
            >
              {/* Text */}
              <div className={imageRight ? "lg:order-1" : "lg:order-2"}>
                <div className="flex items-center gap-4">
                  <span className="label text-faint">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                <a
                  href={primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title mt-5 inline-flex items-start gap-3"
                >
                  <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight transition-colors duration-300 group-hover/title:text-accent sm:text-4xl">
                    {project.title}
                  </h3>
                  <ArrowIcon className="mt-2 h-6 w-6 shrink-0 -rotate-45 text-faint transition-all duration-300 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 group-hover/title:text-accent" />
                </a>

                <p className="mt-4 max-w-xl leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
                  {project.tags.map((tag) => (
                    <li key={tag} className="label normal-case tracking-wide">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-6">
                  {hasLive ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline label text-foreground"
                    >
                      Live ↗
                    </a>
                  ) : null}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline label hover:text-foreground"
                  >
                    Source ↗
                  </a>
                </div>
              </div>

              {/* Screenshot */}
              <a
                href={primary}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className={`group/media relative block aspect-[16/10] overflow-hidden rounded-md border border-border bg-background-soft ${
                  imageRight ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover/media:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover/media:bg-accent/5" />
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
