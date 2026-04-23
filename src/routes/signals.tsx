import { createFileRoute } from "@tanstack/react-router";
import { signals } from "@/data/signals";
import { SignalEntry } from "@/components/SignalEntry";

export const Route = createFileRoute("/signals")({
  head: () => ({
    meta: [
      { title: "Signals — Zenquire" },
      { name: "description", content: "An archive of patterns we read in the market." },
      { property: "og:title", content: "Signals — Zenquire" },
      { property: "og:description", content: "An archive of patterns we read in the market." },
    ],
  }),
  component: Signals,
});

function Signals() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <div className="font-mono-label">Archive</div>
      <h1 className="editorial-heading mt-6 text-5xl md:text-6xl">Signals.</h1>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        Patterns we keep seeing. Each one is a small instruction in how to read what's actually happening.
      </p>
      <div className="mt-16">
        {signals.map((s) => (
          <SignalEntry key={s.id} entry={s} />
        ))}
      </div>
    </div>
  );
}
