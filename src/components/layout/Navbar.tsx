import { useState } from "react";
import { NAV_SECTIONS } from "../../content/site";
import { ButtonLink } from "../ui/Button";
import { ArrowIcon } from "../ui/icons";
import { Brand } from "../ui/Brand";
import { Container } from "../ui/Container";

function MenuIcon({ open }: { open: boolean }) {
  const line = "h-0.5 w-5 rounded-full bg-ink transition-transform duration-300";
  return (
    <span className="flex flex-col items-center gap-1.5" aria-hidden>
      <span className={`${line} ${open ? "translate-y-2 rotate-45" : ""}`} />
      <span className={`${line} ${open ? "opacity-0" : ""}`} />
      <span className={`${line} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3.5">
        <Brand />

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-2 lg:flex" aria-label="Primary">
          {NAV_SECTIONS.map(({ label, href }) => (
            <a key={href} href={href} className="group relative py-1 transition-colors hover:text-ink">
              {label}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-saffron transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="#visit" className="hidden sm:inline-flex">
            Book a visit
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_SECTIONS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-hover hover:text-ink"
              >
                {label}
              </a>
            ))}
            <ButtonLink href="#visit" className="mt-2 justify-center sm:hidden">
              Book a visit
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}