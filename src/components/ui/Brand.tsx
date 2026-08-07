import { FlameIcon } from "./icons";

interface BrandProps {
  underline?: boolean;
}

export function Brand({ underline = true }: BrandProps) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Vidyadeep Classes — home">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-ink font-display text-xl italic text-cream">
        V
        <span className="absolute -right-1.5 -top-1.5" aria-hidden>
          <FlameIcon size={13} />
        </span>
      </span>
      <span className="font-display text-xl leading-none">
        Vidyadeep Classes
        {underline ? (
          <span className="mt-1 block font-sans text-label font-medium uppercase tracking-loose text-ink-2">
            Where knowledge creates success
          </span>
        ) : null}
      </span>
    </a>
  );
}