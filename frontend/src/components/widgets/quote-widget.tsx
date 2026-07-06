import { useState } from "react";
import { Quote as QuoteIcon } from "lucide-react";

export interface Quote {
  text: string;
  source: string;
  author: string;
}

const MOCK: Quote = {
  text: "The purpose of computing is insight, not numbers.",
  source: "Numerical Methods for Scientists and Engineers",
  author: "Richard Hamming",
};

export function QuoteWidget() {
  const [quote] = useState<Quote>(MOCK);

  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-hairline bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-quote px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-quote-foreground">
          <QuoteIcon className="h-3 w-3" />
          Quote
        </span>
      </div>
      <blockquote className="font-serif text-lg leading-snug text-foreground">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <footer className="mt-4 text-xs text-muted-foreground">
        — {quote.author}
        <span className="mx-1.5">·</span>
        <em className="not-italic">{quote.source}</em>
      </footer>
    </article>
  );
}
