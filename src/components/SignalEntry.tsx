import type { Signal } from "@/data/signals";

export function SignalEntry({ entry }: { entry: Signal }) {
  return (
    <article className="grid grid-cols-1 gap-6 border-t border-border py-12 md:grid-cols-[80px_1fr]">
      <div className="font-mono-label">№ {entry.id}</div>
      <div className="space-y-6">
        <Row label="Signal" value={entry.signal} emphasis />
        <Row label="What it means" value={entry.meaning} />
        <Row label="What most people miss" value={entry.missed} />
      </div>
    </article>
  );
}

function Row({ label, value, emphasis }: { label: string; value: string; emphasis?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-[200px_1fr] md:gap-8">
      <div className="font-mono-label pt-1">{label}</div>
      <p
        className={
          emphasis
            ? "text-xl leading-snug text-foreground md:text-2xl"
            : "text-base leading-relaxed text-foreground/80"
        }
      >
        {value}
      </p>
    </div>
  );
}