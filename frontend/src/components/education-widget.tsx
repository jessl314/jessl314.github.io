const EDUCATION = {
  school: "Your University",
  degree: "B.S. Computer Science",
  gradDate: "Expected May 2026",
};

export function EducationWidget() {
  return (
    <div className="pt-2">
      <p className="font-serif text-base">{EDUCATION.school}</p>
      <p className="text-sm text-muted-foreground">{EDUCATION.degree}</p>
      <p className="text-xs text-muted-foreground/80">{EDUCATION.gradDate}</p>
    </div>
  );
}
