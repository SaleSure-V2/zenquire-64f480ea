import { createFileRoute, Link } from "@tanstack/react-router";
import { signals } from "@/data/signals";
import { SignalEntry } from "@/components/SignalEntry";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zenquire — Systems that act when it actually matters." },
      {
        name: "description",
        content:
          "Zenquire focuses on the moment something should happen — and makes sure it does.",
      },
      { property: "og:title", content: "Zenquire" },
      {
        property: "og:description",
        content: "Systems that act when it actually matters.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 md:px-10">
        <div className="font-mono-label fade-in">№ 00 — Premise</div>
        <h1 className="editorial-heading fade-in mt-8 text-5xl md:text-7xl lg:text-[5.5rem]">
          Most things happen
          <br />
          at the wrong time.
        </h1>
        <p className="fade-in mt-10 max-w-xl text-xl text-muted-foreground md:text-2xl">
          Systems that act when it actually matters.
          <br />
          Not before. Not after. Not eventually.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-6xl px-6 py-32 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
          <div className="font-mono-label">Philosophy</div>
          <div className="space-y-6 text-2xl leading-snug text-foreground md:text-3xl">
            <p>Most software is built around activity.</p>
            <p className="text-muted-foreground">
              More emails. More alerts. More dashboards.
            </p>
            <p>
              We focus on the moment something should happen —
              <br className="hidden md:block" /> and make sure it does.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="h-px w-full bg-border" />
      </div>

      {/* SYSTEM MODEL */}
      <section className="mx-auto max-w-6xl px-6 py-32 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
          <div className="font-mono-label">The model</div>
          <div>
            <p className="editorial-heading text-3xl md:text-4xl">
              Every outcome depends on three things.
            </p>
            <ol className="mt-12 space-y-8">
              {[
                ["I", "A real signal."],
                ["II", "The right context."],
                ["III", "Immediate execution."],
              ].map(([n, t]) => (
                <li
                  key={n}
                  className="grid grid-cols-[60px_1fr] items-baseline gap-6 border-t border-border pt-6"
                >
                  <span className="font-mono-label">{n}</span>
                  <span className="text-2xl text-foreground md:text-3xl">{t}</span>
                </li>
              ))}
            </ol>
            <p className="mt-12 max-w-xl text-lg text-muted-foreground">
              Miss one, and it becomes noise.
            </p>
          </div>
        </div>
      </section>

      {/* SIGNAL FEED */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="flex items-baseline justify-between border-b border-border pb-6">
          <div>
            <div className="font-mono-label">Recent signals</div>
            <h2 className="editorial-heading mt-3 text-3xl md:text-4xl">Signals</h2>
          </div>
          <Link to="/signals" className="font-mono-label hover:text-foreground">
            View archive →
          </Link>
        </div>
        <div>
          {signals.map((s) => (
            <SignalEntry key={s.id} entry={s} />
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-6xl px-6 py-32 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
          <div className="font-mono-label">Products</div>
          <div>
            <h3 className="editorial-heading text-5xl md:text-6xl">SaleSure</h3>
            <p className="mt-8 max-w-xl text-2xl text-foreground/80">
              Starts conversations when buying intent is real — not guessed.
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Built on the same signal → context → execution model.
            </p>
            <a
              href="https://salesure.ai"
              target="_blank"
              rel="noreferrer"
              className="font-mono-label mt-10 inline-block underline-offset-4 hover:underline"
            >
              salesure.ai →
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-6xl px-6 py-40 md:px-10">
        <p className="editorial-heading text-4xl text-foreground md:text-6xl">
          When timing is right,
          <br />
          everything else gets easier.
        </p>
      </section>
    </div>
  );
}
