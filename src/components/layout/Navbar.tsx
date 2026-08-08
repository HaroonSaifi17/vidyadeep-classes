import { useState } from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { NAV_SECTIONS } from "../../content/site";
import { ButtonLink } from "../ui/Button";
import { ArrowIcon } from "../ui/icons";
import { Brand } from "../ui/Brand";
import { Container } from "../ui/Container";

function MenuIcon({ open }: { open: boolean }) {
  const line =
    "h-0.5 w-5 rounded-full bg-ink transition-transform duration-300";
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
  const isVisible = useScrollDirection();

  // Keep header visible whenever the mobile menu is open
  const isHeaderVisible = isVisible || open;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className="flex items-center justify-between py-3.5">
        <Brand />

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-ink-2 lg:flex"
          aria-label="Primary"
        >
          {NAV_SECTIONS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="group relative py-1 transition-colors hover:text-ink"
            >
              {label}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-saffron transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ButtonLink href="#visit">
              Book a visit
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-paper-2 transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:outline-saffron lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <Container className="flex flex-col gap-1.5 py-4">
            {NAV_SECTIONS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3.5 py-3 text-sm font-semibold text-ink-2 transition-colors hover:bg-hover hover:text-ink"
              >
                {label}
              </a>
            ))}
            <ButtonLink
              href="#visit"
              onClick={() => setOpen(false)}
              className="mt-2 min-h-[44px] justify-center lg:hidden"
            >
              Book a visit
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
