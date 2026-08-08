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

      <dl className="mt-12 grid grid-cols-3 divide-x divide-line border-t border-line pt-6">
        {HERO_META.map((item) => (
          <div
            key={item.label}
            className="px-2.5 sm:px-6 first:pl-0 last:pr-0"
          >
            <dt className="font-display text-lg sm:text-xl font-semibold">{item.value}</dt>
            <dd className="mt-1 text-xs sm:text-sm text-ink-2 leading-tight">{item.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function RotatingBadge() {
  return (
    <div className="absolute -top-7 right-0 z-30 h-32 w-32">
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
            fill: "#26231C",
            fontFamily: "'Instrument Sans', sans-serif",
          }}
        >
          <textPath href="#vd-circ">
            VIDYADEEP CLASSES · QUALITY EDUCATION ·{" "}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <span className="drop-shadow-md transition-transform duration-300 hover:scale-110">
          <FlameIcon size={38} />
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
      className={`absolute rounded-xl bg-white p-3 pb-8 shadow-photo ${className}`}
    >
      <span
        aria-hidden
        className={`absolute -top-2 h-6 w-16 bg-tape/80 shadow-sm ${tapeClassName}`}
      />
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        className="block w-full rounded-lg"
      />
      <figcaption className="absolute inset-x-0 bottom-2.5 px-3 text-center font-display text-fine italic text-ink-2">
        {caption}
      </figcaption>
    </figure>
  );
}

function FloatCard() {
  return (
    <div
      className="absolute bottom-24 left-0 z-20 w-52 animate-float rounded-lg border border-line bg-paper-2 p-4 shadow-card lg:-left-3"
      role="note"
    >
      <div className="mb-2 flex items-center justify-between text-kicker uppercase tracking-kicker text-ink-2">
        <span className="font-bold">Weekly test</span>
        <span
          aria-hidden
          className="h-2 w-2 animate-pulse-dot rounded-full bg-live"
        />
      </div>
      <p className="font-display text-2xl">Maths · 82%</p>
      <p className="mb-3 text-fine text-ink-2">batch average · week 6</p>
      <div className="h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full w-4/5 rounded-full bg-saffron" />
      </div>
    </div>
  );
}

function HeroMedia() {
  return (
    <div className="relative mx-auto h-hero w-full max-w-xl sm:h-hero-sm lg:h-hero-lg">
      <RotatingBadge />
      <Polaroid
        src="/images/classroom_hero.webp"
        alt="Students studying attentively in a real Vidyadeep classroom"
        caption="in session — real classroom"
        eager
        tapeClassName="left-8 -rotate-6"
        className="left-0 top-0 w-4/5 sm:w-3/4 rotate-2 will-change-transform transition-transform duration-500 hover:rotate-0 hover:z-20"
      />
      <Polaroid
        src="/images/hero_study.webp"
        alt="A student focused on daily practice work"
        caption="daily practice hour"
        tapeClassName="right-6 rotate-6"
        className="bottom-6 right-0 z-10 w-3/5 sm:w-1/2 -rotate-3 will-change-transform transition-transform duration-500 hover:rotate-0 hover:z-20"
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
