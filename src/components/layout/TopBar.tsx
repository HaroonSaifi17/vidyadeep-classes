import { Container } from "../ui/Container";
import { Sparkles, ClockIcon } from "../ui/icons";

export function TopBar() {
  return (
    <div className="bg-ink text-xs text-cream">
      <Container className="flex items-center justify-between gap-4 py-2.5">
        <p className="flex items-center gap-1.5 font-medium">
          <Sparkles size={13} className="shrink-0 text-gold" />
          <span className="font-semibold text-gold">Admissions open</span>
          <span className="opacity-70">
            · Session 2025–26 · Limited seats per batch
          </span>
        </p>
        <p className="hidden items-center gap-1.5 text-right opacity-70 sm:flex">
          <ClockIcon size={13} className="shrink-0 text-saffron-soft" />
          Today&apos;s doubt hour — 4:00 PM · Physics, Class 12
        </p>
      </Container>
    </div>
  );
}
