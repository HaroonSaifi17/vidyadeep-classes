import { ButtonLink } from "../ui/Button";
import { ArrowIcon, FlameIcon } from "../ui/icons";
import { Container } from "../ui/Container";

const HERO_META = [
  { value: "7+ yrs", label: "Mentorship heritage" },
  { value: "Max 24", label: "Students per batch" },
  { value: "3 tracks", label: "School · Exams · Skills" },
];

const HERO_LINES = [
  { text: "Concepts first.", delay: "0.05s", accent: false },
  { text: "Ranks follow.", delay: "0.2s", accent: true },
];

function HeroCopy() {
  return (
    <div>
      <h1 className="font-display text-h1">
        {HERO_LINES.map((line) => (
          <span key={line.text} className="block overflow-hidden pb-1">
            <span
              className={`block animate-rise ${line.accent ? "italic text-saffron" : ""}`}
              style={{ animationDelay: line.delay }}
            >
              {line.text}
            </span>
          </span>
        ))}
      </h1>

      <p className="mt-6 max-w-lg text-lead leading-relaxed text-ink-2">
        Vidyadeep Classes brings Classes 6–12 coaching, NEET · JEE · CUET · NDA
        preparation and career-grade computer courses under one roof — in small
        batches, with weekly tests and honest parent updates.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-7">
        <ButtonLink href="#visit">
          Book a campus visit
          <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        </ButtonLink>
        <ButtonLink href="#programs" variant="ghost">
          Explore programs
        </ButtonLink>
      </div>

      <dl className="mt-8 sm:mt-12 grid grid-cols-3 divide-x divide-line border-t border-line pt-4 sm:pt-6">
        {HERO_META.map((item) => (
          <div
            key={item.label}
            className="px-1.5 xs:px-3 sm:px-6 first:pl-0 last:pr-0"
          >
            <dt className="font-display text-sm xs:text-lg sm:text-xl font-semibold">{item.value}</dt>
            <dd className="mt-0.5 xs:mt-1 text-[11px] xs:text-xs sm:text-sm text-ink-2 leading-tight">{item.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function RotatingBadge() {
  return (
    <div className="absolute -top-4 -right-1 z-30 h-20 w-20 xs:-top-5 xs:right-0 xs:h-24 xs:w-24 sm:-top-7 sm:h-32 sm:w-32">
      <svg
        className="h-full w-full animate-spin-slow"
        viewBox="0 0 126 126"
        aria-hidden="true"
      >
        <defs>
          <path
            id="vd-circ"
            d="M63,63 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
          />
        </defs>
        <text
          style={{
            fontSize: 11,
            letterSpacing: 2.6,
            fontWeight: 700,
            fill: "var(--color-ink)",
            fontFamily: "var(--font-sans)",
          }}
        >
          <textPath href="#vd-circ">
            VIDYADEEP CLASSES · QUALITY EDUCATION ·{" "}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <span className="drop-shadow-md transition-transform duration-300 hover:scale-110">
          <FlameIcon size={24} className="xs:hidden" />
          <FlameIcon size={28} className="hidden xs:block sm:hidden" />
          <FlameIcon size={38} className="hidden sm:block" />
        </span>
      </span>
    </div>
  );
}

function Polaroid({
  src,
  alt,
  caption,
  eager,
  tapeClassName,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  eager?: boolean;
  tapeClassName: string;
  className: string;
}) {
  return (
    <figure
      className={`group absolute rounded-xl bg-white p-2.5 sm:p-3 pb-7 sm:pb-8 shadow-photo transition-all duration-500 hover:shadow-2xl ${className}`}
    >
      <span
        aria-hidden
        className={`absolute -top-2 sm:-top-2.5 z-10 h-5 sm:h-6 w-12 sm:w-16 bg-tape/90 shadow-sm rounded-[1px] pointer-events-none ${tapeClassName}`}
      />
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          className="block w-full rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Trust Sapphire Blue tint filter at rest, clearing smoothly on hover */}
        <div
          className="absolute inset-0 rounded-lg bg-saffron/20 mix-blend-multiply opacity-85 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"
          aria-hidden="true"
        />
      </div>
      <figcaption className="absolute inset-x-0 bottom-2 sm:bottom-2.5 px-2 text-center font-display text-[11px] sm:text-fine italic text-ink-2 transition-colors duration-300 group-hover:text-saffron">
        {caption}
      </figcaption>
    </figure>
  );
}

function FloatCard() {
  return (
    <div
      className="absolute bottom-12 xs:bottom-16 sm:bottom-24 left-0 z-20 w-[165px] xs:w-[185px] sm:w-52 animate-float rounded-lg border border-line bg-paper-2 p-2.5 xs:p-3 sm:p-4 shadow-card lg:-left-3"
      role="note"
    >
      <div className="mb-1 sm:mb-2 flex items-center justify-between text-[10px] xs:text-kicker uppercase tracking-kicker text-ink-2">
        <span className="font-bold">Weekly test</span>
        <span
          aria-hidden
          className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse-dot rounded-full bg-live"
        />
      </div>
      <p className="font-display text-base xs:text-xl sm:text-2xl">Maths · 82%</p>
      <p className="mb-2 sm:mb-3 text-[10.5px] xs:text-fine text-ink-2">batch average · week 6</p>
      <div className="h-1 sm:h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full w-4/5 rounded-full bg-saffron" />
      </div>
    </div>
  );
}

function HeroMedia() {
  return (
    <div className="relative mx-auto h-[340px] xs:h-[390px] sm:h-hero-sm lg:h-hero-lg w-full max-w-xl">
      <RotatingBadge />
      <Polaroid
        src="/images/classroom_hero.webp"
        alt="Students studying attentively in a real Vidyadeep classroom"
        caption="in session — real classroom"
        eager
        tapeClassName="left-6 sm:left-8 -rotate-6"
        className="left-0 top-0 w-[84%] xs:w-[80%] sm:w-3/4 rotate-1 sm:rotate-2 will-change-transform transition-transform duration-500 hover:rotate-0 hover:z-20"
      />
      <Polaroid
        src="/images/hero_study.webp"
        alt="A student focused on daily practice work"
        caption="daily practice hour"
        tapeClassName="right-5 sm:right-6 rotate-6"
        className="bottom-2 xs:bottom-4 sm:bottom-6 right-1 xs:right-2 sm:right-0 z-10 w-[60%] xs:w-[56%] sm:w-1/2 -rotate-2 sm:-rotate-3 origin-bottom-right will-change-transform transition-transform duration-500 hover:rotate-0 hover:z-20"
      />
      <FloatCard />
    </div>
  );
}

export function Hero() {
  return (
    <section className="pb-6 pt-14 sm:pb-8 sm:pt-16">
      <Container className="grid items-center gap-14 lg:grid-cols-hero">
        <HeroCopy />
        <HeroMedia />
      </Container>
    </section>
  );
}
