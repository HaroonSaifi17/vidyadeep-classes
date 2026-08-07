import type { ReactNode } from "react";
import { METHOD_STEPS } from "../../content/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

function Accent({ children }: { children: ReactNode }) {
  return <em className="italic text-saffron">{children}</em>;
}

export function Method() {
  return (
    <section id="method" className="scroll-mt-24 py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-method">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <SectionHeader
              kicker="Our teaching method"
              title={
                <>
                  Four rhythms,<br />
                  every single <Accent>week.</Accent>
                </>
              }
              lead="We don’t believe in cramming. We believe in a disciplined loop that repeats until understanding becomes habit."
            />

            <div className="relative mt-7 hidden overflow-hidden rounded-xl border border-line bg-paper-2 shadow-card sm:block">
              <img
                src="/images/smart_classroom.webp"
                alt="Interactive smart board session at Vidyadeep Classes"
                className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 text-center">
                <span className="text-fine font-bold uppercase tracking-label text-ink-2">
                  Interactive Smart Classrooms
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          {METHOD_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="group flex gap-5 border-t border-line px-2 py-7 transition-all duration-300 last:border-b hover:bg-hover lg:px-2 lg:hover:px-5">
                <span className="pt-1 font-display text-sm text-ink-2 transition-colors group-hover:text-saffron">
                  {step.number} —
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-1.5 max-w-lg text-body leading-relaxed text-ink-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}