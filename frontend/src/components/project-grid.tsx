import { ArrowUpRight } from "lucide-react";

export interface Project {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Project one",
    blurb: "A short description of what this project does and why it matters.",
    tags: ["React", "TypeScript"],
  },
  {
    title: "Project two",
    blurb: "Another line describing the concept, tools, or outcome.",
    tags: ["Python", "ML"],
  },
  {
    title: "Project three",
    blurb: "Room for a third idea — swap in real content when ready.",
    tags: ["Full-stack"],
  },
  {
    title: "Project four",
    blurb: "Add or remove entries freely — the grid adapts.",
    tags: ["Experiment"],
  },
];

export function ProjectGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {PROJECTS.map((p) => (
        <a
          key={p.title}
          href={p.href ?? "#"}
          className="group relative flex h-full flex-col justify-between rounded-2xl border border-hairline bg-card p-6 transition-colors hover:border-border"
        >
          <div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-xl leading-tight">{p.title}</h3>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.blurb}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-hairline px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
