import { Container } from "../ui/Container";

export function TopBar() {
  return (
    <div className="bg-ink text-xs text-cream">
      <Container className="flex items-center justify-between gap-4 py-2.5">
        <p className="font-medium">
          <span className="font-semibold text-gold">Admissions open</span>
          <span className="opacity-70"> · Session 2025–26 · Limited seats per batch</span>
        </p>
        <p className="hidden text-right opacity-70 sm:block">
          Today&apos;s doubt hour — 4:00 PM · Physics, Class 12
        </p>
      </Container>
    </div>
  );
}