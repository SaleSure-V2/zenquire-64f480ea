import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/thinking", label: "Thinking" },
  { to: "/signals", label: "Signals" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/connect", label: "Connect" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <div className="font-mono-label text-foreground">Zenquire</div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Systems that act when it matters.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 md:gap-20">
            <div>
              <div className="font-mono-label">Menu</div>
              <ul className="mt-5 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-sm text-foreground/80 hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://salesure.ai"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-foreground/80 hover:text-foreground"
                  >
                    SaleSure
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-mono-label">Elsewhere</div>
              <ul className="mt-5 space-y-2.5">
                <li>
                  <a
                    href="https://www.linkedin.com/company/zenquire"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-foreground/80 hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/zenquire"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-foreground/80 hover:text-foreground"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@zenquire.ai"
                    className="text-sm text-foreground/80 hover:text-foreground"
                  >
                    hello@zenquire.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <div>Zenquire Solutions Private Limited</div>
          <div>© {new Date().getFullYear()} Zenquire</div>
        </div>
      </div>
    </footer>
  );
}