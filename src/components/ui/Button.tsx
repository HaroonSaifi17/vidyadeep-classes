import type { ComponentPropsWithoutRef, ReactNode } from "react";

const primaryButton =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-ink px-5 py-3.5 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-saffron focus-visible:outline-offset-2";

const ghostButton =
  "inline-flex items-center gap-2.5 whitespace-nowrap border-b border-line pb-0.5 text-body font-semibold text-ink transition-colors hover:border-saffron focus-visible:outline-2 focus-visible:outline-saffron focus-visible:outline-offset-2";

type ButtonLinkProps = {
  variant?: "primary" | "ghost";
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export function ButtonLink({ variant = "primary", children, className = "", ...props }: ButtonLinkProps) {
  return (
    <a className={`${variant === "primary" ? primaryButton : ghostButton} ${className}`} {...props}>
      {children}
    </a>
  );
}

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`${primaryButton} justify-center ${className}`} {...props}>
      {children}
    </button>
  );
}