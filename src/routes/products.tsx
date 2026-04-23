import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Zenquire" },
      { name: "description", content: "SaleSure — starts conversations when buying intent is real." },
      { property: "og:title", content: "Products — Zenquire" },
      { property: "og:description", content: "SaleSure — starts conversations when buying intent is real." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
      <div className="font-mono-label">Products</div>
      <h1 className="editorial-heading mt-6 text-5xl md:text-6xl">One product. For now.</h1>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">
        We build slowly, in the direction of one belief: outbound only works at the moment intent is real.
      </p>

      <article className="mt-24 border-t border-border pt-16">
        <div className="font-mono-label">Live</div>
        <h2 className="editorial-heading mt-6 text-6xl md:text-7xl">SaleSure</h2>
        <p className="mt-10 text-2xl leading-snug text-foreground md:text-3xl">
          Starts conversations when buying intent is real — not guessed.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-[180px_1fr]">
          <div className="font-mono-label">What it does</div>
          <p className="text-base leading-relaxed text-foreground/80">
            Reads real-world signals across a buyer's environment, holds the context, and acts only when the moment is right. The output is fewer messages — sent at the time they are most likely to land.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-[180px_1fr]">
          <div className="font-mono-label">Where it lives</div>
          <a
            href="https://salesure.ai"
            target="_blank"
            rel="noreferrer"
            className="text-base text-foreground underline-offset-4 hover:underline"
          >
            salesure.ai →
          </a>
        </div>
      </article>
    </div>
  );
}
