import type { ReactNode } from "react";
import { useState } from "react";
import { PROGRAMS, PROGRAM_KEYS, type ProgramKey } from "../../content/site";
import { CheckIcon } from "../ui/icons";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-fine font-bold uppercase tracking-label text-ink-2">{children}</p>
  );
}

function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-paper-2 px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-saffron-soft hover:bg-saffron-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function CheckListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 border-b border-dashed border-line-soft py-3.5 text-body">
      <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-sage-ink" />
      <span>{children}</span>
    </li>
  );
}

const PROGRAM_IMAGES: Record<ProgramKey, { src: string; alt: string; caption: string }> = {
  foundation: {
    src: "/images/foundation.webp",
    alt: "Foundation class students learning together",
    caption: "Class 6 – 8 Foundation Batch",
  },
  boards: {
    src: "/images/boards.webp",
    alt: "Class 10 students preparing for board exams",
    caption: "Class 9 – 10 Board Exam Series",
  },
  seniors: {
    src: "/images/seniors.webp",
    alt: "Senior secondary student conducting practical experiment",
    caption: "Class 11 – 12 Science & Commerce Streams",
  },
};

export function AcademicPrograms() {
  const [active, setActive] = useState<ProgramKey>("boards");
  const program = PROGRAMS[active];
  const currentImg = PROGRAM_IMAGES[active];

  return (
    <section id="programs" className="scroll-mt-24 bg-blush py-16 sm:py-24">
      <Container>
        <SectionHeader
          layout="row"
          kicker="Academic coaching"
          title={
            <>
              One campus,
              <br />
              every class <em className="italic text-saffron">covered.</em>
            </>
          }
          lead="From foundation years to board preparation — the same faculty discipline, scaled to each age group."
        />

        <Reveal>
          <div role="tablist" aria-label="Class groups" className="mb-11 flex gap-1.5 border-b border-line">
            {PROGRAM_KEYS.map((key) => {
              const selected = active === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(key)}
                  className={`relative -mb-px px-5 pb-3.5 pt-1 text-body font-semibold transition-colors ${
                    selected ? "text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {PROGRAMS[key].label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-2 bottom-0 h-0.5 origin-left rounded-full bg-saffron transition-transform duration-300 ${
                      selected ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div key={active} className="grid animate-fade-up gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="font-display text-h3">{program.title}</h3>
                <p className="mt-3 max-w-lg text-body leading-relaxed text-ink-2">{program.summary}</p>

                {program.subjects ? (
                  <div className="mt-7">
                    <FieldLabel>Subjects covered</FieldLabel>
                    <ChipList items={program.subjects} />
                  </div>
                ) : null}

                {program.streams?.map((stream) => (
                  <div key={stream.name} className="mt-7">
                    <FieldLabel>{stream.name}</FieldLabel>
                    <ChipList items={stream.subjects} />
                  </div>
                ))}

                <div className="mt-8">
                  <FieldLabel>What your child gets</FieldLabel>
                  <ul className="mt-3">
                    {program.focus.map((item) => (
                      <CheckListItem key={item}>{item}</CheckListItem>
                    ))}
                    <CheckListItem>Complete study material &amp; question banks</CheckListItem>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-start">
                <div className="relative overflow-hidden rounded-xl border border-line bg-white p-2.5 shadow-photo transition-transform duration-500 hover:-translate-y-1">
                  <img
                    src={currentImg.src}
                    alt={currentImg.alt}
                    className="h-64 w-full rounded-lg object-cover sm:h-72"
                    loading="lazy"
                  />
                  <div className="mt-3 px-1 text-center">
                    <span className="inline-block rounded-full bg-saffron-soft px-3 py-1 text-fine font-bold text-saffron-ink">
                      {currentImg.caption}
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </Reveal>
      </Container>
    </section>
  );
}