import { Download, FileText } from "lucide-react";

export function ResumeSection() {
  return (
    <div className="rounded-2xl border border-hairline bg-card p-8">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl leading-tight">Resume</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A one-page summary of my experience, projects, and coursework.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-muted"
          >
            View PDF
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-4 border-t border-hairline pt-8 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Education
          </p>
          <p className="mt-1 text-sm">BS Computer Science</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Graduation date
          </p>
          <p className="mt-1 text-sm">May 2027</p>
        </div>
      </div>
    </div>
  );
}
