import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thinking")({
  head: () => ({
    meta: [
      { title: "Thinking — Zenquire" },
      { name: "description", content: "Longer-form notes on signals, timing, and decision systems." },
      { property: "og:title", content: "Thinking — Zenquire" },
      { property: "og:description", content: "Longer-form notes on signals, timing, and decision systems." },
    ],
  }),
  component: Thinking,
});

const essays = [
  {
    n: "01",
    title: "Activity is not progress.",
    body: [
      "Most go-to-market teams measure motion: emails sent, meetings booked, dashboards refreshed. Motion is easy to instrument and easy to mistake for momentum.",
      "Progress is narrower. It is the small set of moments where a decision is forming on the buyer's side. Everything else is rehearsal.",
      "The discipline isn't doing more. It's noticing earlier.",
    ],
  },
  {
    n: "02",
    title: "Intent is a window, not a score.",
    body: [
      "Scores compress a moment into a number, then teams treat the number as the moment. By the time it is high, the window has usually closed.",
      "Real intent looks like a sequence — a quiet move, a re-org, a removed integration, a new hire — read in the right order.",
      "If you have to score it, you've already missed the shape of it.",
    ],
  },
  {
    n: "03",
    title: "The cost of waiting is invisible.",
    body: [
      "There is no alert for the deal you didn't know was happening. No dashboard for the conversation that started without you.",
      "Pipelines look full because they only contain what was caught. They do not contain what was missed.",
      "Operating around signals is partly an act of accounting for what you don't see.",
    ],
  },
  {
    n: "04",
    title: "Context is what makes a signal usable.",
    body: [
      "A signal without context is trivia. A new hire is meaningless until you know what they replaced, what they were promised, and what they walked into.",
      "Most tools surface the signal and stop there. The work that matters happens after.",
      "Build for the second question, not the first.",
    ],
  },
];

function Thinking() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
      <div className="font-mono-label">Thinking</div>
      <h1 className="editorial-heading mt-6 text-5xl md:text-6xl">
        Notes from the work.
      </h1>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        Slightly longer than a signal. Shorter than a thesis. Written for people building or operating around real-world decisions.
      </p>

      <div className="mt-24 space-y-24">
        {essays.map((e) => (
          <article key={e.n} className="border-t border-border pt-12">
            <div className="font-mono-label">Essay № {e.n}</div>
            <h2 className="editorial-heading mt-6 text-3xl md:text-4xl">{e.title}</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/85">
              {e.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
