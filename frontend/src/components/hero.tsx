import { useState } from "react";
import { Github, Linkedin, Mail, Check, FileText } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const EMAIL = "hello@example.com";

export function Hero({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy email");
    }
  };

  return (
    <div id="top" className="flex h-full flex-col">
      <p className="mb-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        Portfolio · {new Date().getFullYear()}
      </p>
      <div className="grid items-start gap-6 md:grid-cols-[auto_1fr] md:gap-10">
        <Avatar className="mt-6 h-40 w-40 md:mt-8 md:h-48 md:w-48">
          <AvatarFallback className="text-4xl font-medium md:text-5xl">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-serif text-3xl leading-[1.05] md:text-4xl lg:text-5xl">
            Hi, I'm {name}.
            <br />
            <span className="text-muted-foreground">
              A CS student building software with a soft spot for AI/ML.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I care about legible code, honest interfaces, and the small
            details that make a product feel considered.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <IconAction
          as="a"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          label="GitHub"
        >
          <Github className="h-4 w-4" />
        </IconAction>
        <IconAction
          as="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          label="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </IconAction>
        <IconAction
          as="button"
          onClick={copyEmail}
          label={copied ? "Email copied" : `Copy email (${EMAIL})`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
        </IconAction>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="ml-1 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-muted"
        >
          <FileText className="h-4 w-4" />
          View resume
        </a>
      </div>
    </div>
  );
}

type IconActionProps = {
  label: string;
  children: React.ReactNode;
} & (
  | ({ as: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

function IconAction({ label, children, ...props }: IconActionProps) {
  const className =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";
  if (props.as === "a") {
    const { as: _as, ...rest } = props;
    return (
      <a aria-label={label} title={label} className={className} {...rest}>
        {children}
      </a>
    );
  }
  const { as: _as, ...rest } = props;
  return (
    <button aria-label={label} title={label} className={className} {...rest}>
      {children}
    </button>
  );
}
