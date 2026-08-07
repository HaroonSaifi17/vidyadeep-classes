import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowIcon({ size = 15, ...props }: IconProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ size = 14, ...props }: IconProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ size = 15, ...props }: IconProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.5 8l3.2 3.2L12.5 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlameIcon({ size = 20, ...props }: IconProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 2c3.6 4.3 6.2 7.4 6.2 10.8A6.2 6.2 0 0 1 5.8 12.8C5.8 9.4 8.4 6.3 12 2z"
        fill="#d98324"
      />
      <path
        d="M12 22a3.6 3.6 0 0 1-3.6-3.6c0-1.9 1.5-3.6 3.6-5.6 2.1 2 3.6 3.7 3.6 5.6A3.6 3.6 0 0 1 12 22z"
        fill="#faf6ee"
        opacity="0.9"
      />
    </svg>
  );
}

export function PinIcon({ size = 16, ...props }: IconProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 14.5S2.8 9.9 2.8 6.3a5.2 5.2 0 1 1 10.4 0C13.2 9.9 8 14.5 8 14.5z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="8" cy="6.3" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function PhoneIcon({ size = 16, ...props }: IconProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 2h3l1.2 3.2L5.6 6.6a9.5 9.5 0 0 0 3.8 3.8l1.4-1.6L14 10v3c0 .6-.5 1-1 1C6.9 14 2 9.1 2 3c0-.5.4-1 1-1z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon({ size = 16, ...props }: IconProps & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 4.6V8l2.3 1.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}