import { TRACK_RECORD_STATS } from "../../content/site";
import { useCountUp } from "../../hooks/useCountUp";
import { useInView } from "../../hooks/useInView";
import { Container } from "../ui/Container";
import { Kicker } from "../ui/Kicker";
import { Reveal } from "../ui/Reveal";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
  delay: number;
}

function StatItem({ value, suffix, label, started, delay }: StatItemProps) {
  const count = useCountUp(value, started);

  return (
    <div
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-700 ease-out ${
        started ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <p className="font-display text-stat">
        {count}
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="mt-2 max-w-45 text-fine leading-relaxed text-cream-muted">{label}</p>
    </div>
  );
}

function ResultGhosts() {
  const ghosts = [
    { className: "-rotate-3" },
    { className: "z-10 translate-y-2 rotate-2" },
    { className: "-rotate-2" },
  ];

  return (
    <div className="flex justify-center py-7" aria-hidden="true">
      {ghosts.map((ghost, index) => (
        <div
          key={index}
          className={`relative w-37.5 rounded-lg border border-white/15 bg-white/5 p-4 pb-7 ${index > 0 ? "-ml-7" : ""} ${ghost.className}`}
        >
          <div className="h-2 rounded-full bg-white/15" />
          <div className="mt-2.5 h-2 w-3/5 rounded-full bg-white/15" />
          <div className="mt-2.5 h-2 rounded-full bg-white/15" />
          <div className="mt-2.5 h-2 w-3/4 rounded-full bg-white/15" />
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 -rotate-6 rounded-sm border border-gold/55 bg-ink px-2 py-1 whitespace-nowrap text-label uppercase tracking-label text-gold">
            Awaiting result
          </span>
        </div>
      ))}
    </div>
  );
}

export function TrackRecord() {
  const { ref, inView } = useInView<HTMLElement>(0.25);

  return (
    <section id="record" ref={ref} className="scroll-mt-24 bg-ink py-16 text-cream sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <Kicker barClassName="bg-gold" className="text-cream-muted">
              Track record
            </Kicker>
            <h2 className="font-display text-h2">
              Seven years of mentorship,
              <br />
              now under one roof.
            </h2>
            <p className="mt-5 max-w-lg text-body leading-relaxed text-band-muted">
              Vidyadeep is a new campus — but the teaching behind it isn’t. Our mentors have
              guided students through boards and entrance exams for years, with extensive
              one-on-one mentoring along the way.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-cream/15 pb-2 pt-10 sm:grid-cols-4">
          {TRACK_RECORD_STATS.map((stat, index) => (
            <StatItem key={stat.label} {...stat} started={inView} delay={index * 0.1} />
          ))}
        </div>

        <Reveal>
          <div className="mt-14 rounded-xl border border-dashed border-cream/25 p-6 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="mb-5 inline-block rounded-full border border-gold/40 px-3 py-1 text-label uppercase tracking-loose text-gold">
                  Topper wall · In the making
                </span>
                <h3 className="font-display text-h3">This wall is reserved for our first batch.</h3>
                <p className="mt-3 max-w-md text-body leading-relaxed text-band-muted">
                  The day our students’ results are declared, their scoresheets go up here. Until
                  then — visit us and ask about our mentors’ past results in person. We’ll happily
                  walk you through them.
                </p>
              </div>
              <ResultGhosts />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}