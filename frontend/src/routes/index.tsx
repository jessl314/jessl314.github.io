import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { SpotifyWidget } from "@/components/widgets/spotify-widget";
import { HardcoverWidget } from "@/components/widgets/hardcover-widget";
import { EducationWidget } from "@/components/education-widget";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectGrid } from "@/components/project-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NAME = "Your Name";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${NAME} — Software Engineer & CS Student` },
      {
        name: "description",
        content: "Portfolio of a CS student building at the intersection of full-stack software engineering and AI/ML.",
      },
      { property: "og:title", content: `${NAME} — Portfolio` },
      {
        property: "og:description",
        content: "Full-stack developer portfolio: current reads, listens, experience, and projects.",
      },
    ],
  }),
  component: Index,
});

function Section({
  id,
  eyebrow,
  title,
  className,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-5xl scroll-mt-24 px-6 py-12 md:py-16", className)}>
      <div className="mb-10 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function SkillGroup({ title, skills, color }: { title: string; skills: string[]; color: string }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} className={cn("rounded-full border-0 font-normal", color)}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function Course({ name, desc }: { name: string; desc: string }) {
  return (
    <li>
      <p className="font-medium text-foreground">{name}</p>
      <p className="text-muted-foreground">{desc}</p>
    </li>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader name={NAME} />
      <main>
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="grid gap-8 sm:grid-cols-[1fr_280px] sm:items-start lg:grid-cols-[1fr_320px]">
            <Hero name={NAME} />
            <div className="mt-8 flex flex-col gap-4 sm:mt-12">
              <HardcoverWidget />
              <SpotifyWidget />
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-12 md:py-16">
          <div className="grid gap-x-10 lg:grid-cols-[minmax(0,65%)_minmax(0,35%)] lg:items-start">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Timeline</p>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl">Experience</h2>
              </div>
              <ExperienceTimeline />
            </div>
            <aside className="flex flex-col gap-6 lg:sticky lg:top-24">
              <Card className="lg:mt-6">
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <EducationWidget />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-lg">Technical Toolkit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SkillGroup
                    title="Languages"
                    skills={["Python", "TypeScript", "C++", "SQL"]}
                    color="bg-book/40 text-book-foreground"
                  />
                  <SkillGroup
                    title="Frameworks"
                    skills={["React", "Next.js", "Node.js", "Tailwind CSS"]}
                    color="bg-music/40 text-music-foreground"
                  />
                  <SkillGroup
                    title="Tools"
                    skills={["Git", "Docker", "PostgreSQL", "Figma"]}
                    color="bg-quote/40 text-quote-foreground"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-lg">Relevant Coursework</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <Course
                      name="Data Structures & Algorithms"
                      desc="Advanced algorithms, complexity analysis, and optimization."
                    />
                    <Course
                      name="Machine Learning"
                      desc="Supervised and unsupervised learning, neural networks, and evaluation."
                    />
                    <Course
                      name="Software Engineering"
                      desc="Agile development, system design, and team-based project delivery."
                    />
                    <Course name="Computer Systems" desc="Memory, concurrency, and low-level systems programming." />
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        <Section id="projects" eyebrow="Selected work" title="Projects">
          <ProjectGrid />
        </Section>

        <footer className="border-t border-hairline">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {NAME}. Built with care.
            </p>
            <a href="#top" className="hover:text-foreground">
              Back to top ↑
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
