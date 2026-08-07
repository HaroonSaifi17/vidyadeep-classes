import { FlameIcon } from "./icons";

interface BrandProps {
  underline?: boolean;
}

export function Brand({ underline = true }: BrandProps) {
  return (
    <a
      href="#top"
      className="group flex items-center gap-3"
      aria-label="Vidyadeep Classes — home"
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-cream shadow-md border border-line/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
        <span className="font-display text-2xl font-bold italic text-cream leading-none select-none">
          V
        </span>
        <span
          className="absolute -right-2 -top-2 drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
          aria-hidden
        >
          <FlameIcon size={20} />
        </span>
      </span>
      <span className="font-display text-xl leading-none">
        Vidyadeep Classes
        {underline ? (
          <span className="mt-1 hidden font-sans text-label font-medium uppercase tracking-loose text-ink-2 sm:block">
            Where knowledge creates success
          </span>
        ) : null}
      </span>
    </a>
  );
}
