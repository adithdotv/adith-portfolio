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

          return (
            <Reveal
              key={project.title}
              delay={(i % 2) * 60}
              className="group grid grid-cols-1 gap-x-8 gap-y-4 border-t border-border py-10 last:border-b lg:grid-cols-[5rem_1fr_14rem]"
            >
              <span className="label text-faint transition-colors duration-300 group-hover:text-accent">
                ({String(i + 1).padStart(2, "0")})
              </span>

              <div>
                <a
                  href={primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title inline-flex items-start gap-3"
                >
                  <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                    {project.title}
                  </h3>
                  <ArrowIcon className="mt-2 h-6 w-6 shrink-0 -rotate-45 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </a>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
                  {project.tags.map((tag) => (
                    <li key={tag} className="label normal-case tracking-wide">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-6 lg:flex-col lg:items-end lg:gap-2 lg:text-right">
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
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
