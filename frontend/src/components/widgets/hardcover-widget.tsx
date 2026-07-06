import { useState } from "react";
import { BookOpen } from "lucide-react";

export interface HardcoverBook {
  title: string;
  author: string;
  coverUrl: string;
  progress: number; // 0-100
  status?: "reading" | "finished";
}

const MOCK: HardcoverBook = {
  title: "The Beginning of Infinity",
  author: "David Deutsch",
  coverUrl:
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327891580i/10483706.jpg",
  progress: 42,
  status: "reading",
};

export function HardcoverWidget() {
  // Swap this out for a Hardcover GraphQL query later.
  const [book] = useState<HardcoverBook>(MOCK);

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-hairline bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-book px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-book-foreground">
          <BookOpen className="h-3 w-3" />
          {book.status === "finished" ? "Last read" : "Currently reading"}
        </span>
      </div>
      <div className="flex items-start gap-3">
        <img
          src={book.coverUrl}
          alt={`${book.title} cover`}
          className="h-20 w-14 flex-shrink-0 rounded-sm object-cover shadow-md"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-base leading-tight">{book.title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{book.author}</p>
        </div>
      </div>
    </article>
  );
}
