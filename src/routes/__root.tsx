import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-32 md:px-10">
        <div className="font-mono-label">404</div>
        <h1 className="editorial-heading mt-6 text-4xl md:text-5xl">Nothing here.</h1>
        <p className="mt-6 max-w-lg text-base text-muted-foreground">
          The page you were looking for doesn't exist — or no longer should.
        </p>
        <div className="mt-10">
          <Link to="/" className="font-mono-label underline-offset-4 hover:underline">
            ← Return home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zenquire — Systems that act when it actually matters." },
      {
        name: "description",
        content:
          "Zenquire builds systems that act at the right moment based on real-world signals.",
      },
      { name: "author", content: "Zenquire" },
      { property: "og:title", content: "Zenquire" },
      {
        property: "og:description",
        content: "Systems that act when it actually matters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Zenquire" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
