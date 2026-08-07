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
          <div className="mt-14 rounded-xl border border-dashed border-cream/25 p-6 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="mb-5 inline-block rounded-full border border-gold/40 px-3 py-1 text-label uppercase tracking-loose text-gold">
                  Topper Wall &amp; Mentorship
                </span>
                <h3 className="font-display text-h3">Celebrating every student milestone.</h3>
                <p className="mt-3 max-w-md text-body leading-relaxed text-band-muted">
                  From scholarship awards to monthly test toppers — we celebrate progress at every step.
                  Visit our campus to see our full wall of honor and past student achievements.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-fine font-semibold text-gold">Real Campus Award Ceremonies</span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5 p-2 shadow-2xl">
                <img
                  src="/images/achievements.webp"
                  alt="Student awards and recognition ceremony at Vidyadeep Classes"
                  className="h-56 w-full rounded-lg object-cover sm:h-64"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-ink/90 p-3 text-center backdrop-blur-md">
                  <p className="font-display text-sm text-gold">Student Recognition &amp; Laptop/Tablet Awards</p>
                  <p className="text-fine text-cream-muted">Vidyadeep Mentorship Heritage</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}