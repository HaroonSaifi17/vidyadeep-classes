import { useState, type ReactNode } from "react";
import { PlusIcon } from "./icons";

interface AccordionProps {
  heading: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Accordion({ heading, children, defaultOpen = false, className = "" }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border-t border-line ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-2 py-5 text-left transition-colors hover:bg-hover"
      >
        <span className="flex-1">{heading}</span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
            open ? "rotate-45 border-ink bg-ink text-cream" : "text-ink-2"
          }`}
        >
          <PlusIcon />
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}