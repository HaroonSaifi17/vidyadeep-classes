import type { ReactNode } from "react";
import { Kicker } from "./Kicker";

interface SectionHeaderProps {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  layout?: "stack" | "row";
  className?: string;
}

export function SectionHeader({
  kicker,
  title,
  lead,
  layout = "stack",
  className = "",
}: SectionHeaderProps) {
  const heading = (
    <>
      <Kicker>{kicker}</Kicker>
      <h2 className="font-display text-h2">{title}</h2>
    </>
  );

  if (layout === "row") {
    return (
      <div className={`mb-12 flex flex-wrap items-end justify-between gap-x-4 gap-y-6 ${className}`}>
        <div>{heading}</div>
        {lead ? <p className="w-full max-w-sm text-body text-ink-2 lg:w-auto">{lead}</p> : null}
      </div>
    );
  }

  return (
    <div className={className}>
      {heading}
      {lead ? <p className="mt-5 max-w-sm text-body leading-relaxed text-ink-2">{lead}</p> : null}
    </div>
  );
}