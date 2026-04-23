import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zenquire" },
      { name: "description", content: "What we believe about timing, signals, and software." },
      { property: "og:title", content: "About — Zenquire" },
      { property: "og:description", content: "What we believe about timing, signals, and software." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
      <div className="font-mono-label">About</div>
      <h1 className="editorial-heading mt-6 text-5xl md:text-6xl">
        We build around moments, not motion.
      </h1>

      <div className="mt-20 space-y-10 text-lg leading-relaxed text-foreground/85">
        <p>
          Zenquire exists because most decisions in business happen quietly, in narrow windows, and the software meant to support them shows up too early or too late.
        </p>
        <p>
          We are interested in the structure of those windows: what opens them, what closes them, and what a system has to read in order to act inside one.
        </p>
        <p>
          Our work is small on purpose. One product at a time. One belief at a time. We would rather be useful in a narrow place than present in a wide one.
        </p>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-10 border-t border-border pt-16 md:grid-cols-[180px_1fr]">
        <div className="font-mono-label">What we believe</div>
        <ul className="space-y-6 text-xl leading-snug text-foreground">
          <li>— Timing is the design problem, not the feature set.</li>
          <li>— Most "intent" is inferred too late to matter.</li>
          <li>— Restraint is a competitive advantage.</li>
          <li>— A good system removes more than it adds.</li>
        </ul>
      </div>
    </div>
  );
}
