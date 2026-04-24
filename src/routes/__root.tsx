import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "../styles.css";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

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
