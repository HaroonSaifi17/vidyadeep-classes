import { COURSES } from "../../content/site";
import { ArrowIcon } from "../ui/icons";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

function LabPhoto() {
  return (
    <div className="relative mt-8 w-5/6">
      <div className="border border-line bg-white shadow-photo">
        <span aria-hidden className="absolute -top-2 right-6 h-6 w-16 rotate-3 bg-tape/60" />
        {/* SWAP: replace with the client's real computer-lab photo */}
        <img
          src="https://picsum.photos/seed/vidyadeep-computer-lab/460/300"
          alt="Students at workstations in the computer lab"
          loading="lazy"
          className="block w-full"
        />
      </div>
    </div>
  );
}

export function SkillLab() {
  return (
    <section id="lab" className="scroll-mt-24 bg-sky py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-lab">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <SectionHeader
              kicker="Computer training institute"
              title={
                <>
                  Skills that <br />
                  earn their <em className="italic text-saffron">keep.</em>
                </>
              }
              lead="Practical, lab-based courses taught on real projects — so students leave with work they can show, not just a certificate."
            />
            <LabPhoto />
          </Reveal>
        </div>

        <div>
          {COURSES.map((course, index) => (
            <Reveal key={course.number} delay={index * 0.05}>
              <div className="group grid items-center gap-3 border-t border-line px-2 py-5 transition-all duration-300 hover:bg-paper-2 sm:grid-cols-course sm:hover:px-5">
                <span className="hidden font-display text-sm italic text-ink-2 sm:block">
                  {course.number}
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-tight">{course.name}</p>
                  <p className="mt-0.5 text-sm text-ink-2">{course.details}</p>
                </div>
                <span className="hidden rounded-full border border-line px-3 py-1 text-label uppercase tracking-label text-ink-2 sm:inline-block">
                  Certificate
                </span>
                <ArrowIcon className="text-saffron opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
          <p className="mt-6 text-fine text-ink-2">
            * Demo class available for every course before you enrol.
          </p>
        </div>
      </Container>
    </section>
  );
}