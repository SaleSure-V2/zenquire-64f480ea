import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/thinking", label: "Thinking" },
  { to: "/signals", label: "Signals" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/connect", label: "Connect" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="font-mono-label text-foreground" aria-label="Zenquire home">
          Zenquire
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-mono-label transition-colors hover:text-foreground"
              activeProps={{ className: "font-mono-label text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="h-px w-full bg-border" />
    </header>
  );
}