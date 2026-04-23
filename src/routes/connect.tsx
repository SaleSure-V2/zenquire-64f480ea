import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — Zenquire" },
      { name: "description", content: "If you're building, thinking, or operating around real signals — we're open to a conversation." },
      { property: "og:title", content: "Connect — Zenquire" },
      { property: "og:description", content: "If you're building, thinking, or operating around real signals — we're open to a conversation." },
    ],
  }),
  component: Connect,
});

function Connect() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-24 md:px-10">
      <div className="font-mono-label">Connect</div>
      <h1 className="editorial-heading mt-6 text-5xl md:text-6xl">
        A conversation, not a funnel.
      </h1>
      <p className="mt-10 max-w-xl text-xl text-foreground/85 md:text-2xl">
        If you're building, thinking, or operating around real signals — we're open to a conversation.
      </p>
      <a
        href="mailto:hello@zenquire.ai"
        className="editorial-heading mt-16 text-3xl text-foreground underline-offset-8 hover:underline md:text-4xl"
      >
        hello@zenquire.ai
      </a>
      <p className="mt-12 max-w-md text-sm text-muted-foreground">
        No forms. No calendars. Write the way you'd write to a person.
      </p>
    </div>
  );
}
