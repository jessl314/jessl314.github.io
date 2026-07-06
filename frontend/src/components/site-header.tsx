import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#top", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export function SiteHeader({ name }: { name: string }) {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-lg">
          {name}
        </a>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground sm:gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full",
            "text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          )}
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}
