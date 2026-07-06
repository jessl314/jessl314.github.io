export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
}

const ENTRIES: ExperienceEntry[] = [
  {
    role: "Software Engineering Intern",
    company: "Company Name",
    period: "Summer 2025",
    location: "Remote",
    description:
      "Short one-line summary of what you built and its impact.",
  },
  {
    role: "Undergraduate Research Assistant",
    company: "University Lab",
    period: "2024 — Present",
    location: "On campus",
    description:
      "Working on ML systems for X. Wrote and shipped Y in production.",
  },
  {
    role: "Teaching Assistant",
    company: "CS 101",
    period: "Fall 2024",
    description:
      "Led weekly sections and office hours for 40+ students.",
  },
];

export function ExperienceTimeline() {
  return (
    <ol className="relative border-l border-hairline pl-6">
      {ENTRIES.map((entry, i) => (
        <li key={i} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[29px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-border bg-background">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {entry.period}
            {entry.location ? ` · ${entry.location}` : ""}
          </p>
          <h3 className="mt-1 font-serif text-xl leading-tight">
            {entry.role}
          </h3>
          <p className="text-sm text-muted-foreground">{entry.company}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
            {entry.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
