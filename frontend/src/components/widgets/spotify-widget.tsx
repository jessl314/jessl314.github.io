import { useState } from "react";
import { Music } from "lucide-react";

export interface SpotifyTrack {
  title: string;
  artist: string;
  album: string;
  artworkUrl: string;
  isPlaying?: boolean;
}

const MOCK: SpotifyTrack = {
  title: "Nude",
  artist: "Radiohead",
  album: "In Rainbows",
  artworkUrl:
    "https://upload.wikimedia.org/wikipedia/en/a/ba/Inrainbowscover.png",
  isPlaying: false,
};

export function SpotifyWidget() {
  // Swap this out for a fetch to your Spotify endpoint later.
  const [track] = useState<SpotifyTrack>(MOCK);

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-hairline bg-card p-4 transition-colors">
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-music px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-music-foreground">
          <Music className="h-3 w-3" />
          {track.isPlaying ? "Now playing" : "Last listened"}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={track.artworkUrl}
          alt={`${track.album} artwork`}
          className="h-16 w-16 rounded-md object-cover shadow-sm"
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="truncate font-serif text-base leading-tight">
            {track.title}
          </h3>
          <p className="truncate text-sm text-muted-foreground">
            {track.artist}
          </p>
          <p className="mt-1 truncate text-xs text-muted-foreground/80">
            {track.album}
          </p>
        </div>
      </div>
    </article>
  );
}
