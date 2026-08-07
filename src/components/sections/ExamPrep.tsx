import { EXAM_TRACKS } from "../../content/site";
import { Accordion } from "../ui/Accordion";
import { CheckIcon } from "../ui/icons";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function ExamPrep() {
  return (
    <section id="exams" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            layout="row"
            kicker="Competitive exam prep"
            title={
              <>
                Exam prep, without
                <br />
                the <em className="italic text-saffron">noise.</em>
              </>
            }
            lead="Four focused tracks. Each with its own syllabus plan, test series and performance analysis — tap a track to see what’s inside."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div>
            {EXAM_TRACKS.map((track, index) => (
              <Accordion
                key={track.name}
                heading={
                  <span className="flex w-full items-center gap-5">
                    <span className="hidden font-display text-sm italic text-ink-2 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-h3">{track.name}</span>
                    <span className="rounded-full bg-saffron-soft px-3 py-1 text-label font-bold uppercase tracking-label text-saffron-ink">
                      {track.tag}
                    </span>
                  </span>
                }
              >
                <div className="px-2 pb-9 sm:pl-14">
                  <p className="max-w-2xl text-body leading-relaxed text-ink-2">{track.line}</p>
                  <ul className="mt-4 grid max-w-2xl gap-x-8 gap-y-1.5 sm:grid-cols-2">
                    {track.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 py-1.5 text-body">
                        <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-sage-ink" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-fine uppercase tracking-label text-ink-2">
                    Classroom mode · Test series &amp; study material included
                  </p>
                </div>
              </Accordion>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}