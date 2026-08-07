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
      <div className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-eyebrow text-ink-2">
        <span className="relative h-2 w-2 rounded-full bg-saffron">
          <span aria-hidden className="absolute -inset-1 rounded-full border border-saffron animate-pulse-ring" />
        </span>
        <span>New campus · 7 years of mentorship behind it</span>
      </div>

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
        Vidyadeep Classes brings Classes 6–12 coaching, NEET · JEE · CUET · NDA preparation and
        career-grade computer courses under one roof — in small batches, with weekly tests and
        honest parent updates.
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

      <dl className="mt-12 grid grid-cols-2 gap-y-6 border-t border-line pt-6 sm:grid-cols-3">
        {HERO_META.map((item) => (
          <div key={item.label} className="border-r border-line pr-7 last:border-none">
            <dt className="font-display text-xl">{item.value}</dt>
            <dd className="mt-1 text-sm text-ink-2">{item.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function RotatingBadge() {
  return (
    <div className="absolute -top-7 right-0 z-30 h-32 w-32">
      <svg className="h-full w-full animate-spin-slow" viewBox="0 0 126 126" aria-hidden="true">
        <defs>
          <path id="vd-circ" d="M63,63 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
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
          <textPath href="#vd-circ">VIDYADEEP CLASSES · QUALITY EDUCATION · </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <FlameIcon size={22} />
      </span>
    </div>
  );
}

/* SWAP: replace picsum sources with the client's real classroom photos */
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
    <figure className={`absolute bg-white p-2.5 pb-6 shadow-photo ${className}`}>
      <span aria-hidden className={`absolute -top-2 h-6 w-16 bg-tape/60 shadow-sm ${tapeClassName}`} />
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className="block w-full" />
      <figcaption className="absolute inset-x-0 bottom-2.5 font-display text-fine italic text-ink-2">
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
        <span aria-hidden className="h-2 w-2 animate-pulse-dot rounded-full bg-live" />
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
        src="https://picsum.photos/seed/vidyadeep-classroom-students/640/460"
        alt="Students studying attentively in a Vidyadeep classroom"
        caption="in session — foundation batch"
        eager
        tapeClassName="left-8 -rotate-6"
        className="left-0 top-0 w-3/4 rotate-2 transition-transform duration-500 hover:rotate-0"
      />
      <Polaroid
        src="https://picsum.photos/seed/vidyadeep-study-focus/380/420"
        alt="A student focused on practice work"
        caption="practice hour"
        tapeClassName="right-6 rotate-6"
        className="bottom-10 right-0 z-10 w-1/2 rotate-2 transition-transform duration-500 hover:-rotate-1"
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