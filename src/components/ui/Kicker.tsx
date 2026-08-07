import type { ReactNode } from "react";

interface KickerProps {
  children: ReactNode;
  className?: string;
  barClassName?: string;
}

export function Kicker({
  children,
  className = "",
  barClassName = "bg-saffron",
}: KickerProps) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 text-kicker tracking-kicker ${className}`}
    >
      <span aria-hidden className={`h-0.5 w-7 rounded-full ${barClassName}`} />
      <span>{children}</span>
    </div>
  );
}
