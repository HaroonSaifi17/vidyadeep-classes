import { useState, useEffect } from "react";
import { COURSES, type Course } from "../../content/site";
import { ArrowIcon, CheckIcon, CloseIcon } from "../ui/icons";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { ButtonLink } from "../ui/Button";

function LabPhoto() {
  return (
    <figure className="group relative mt-8 w-full sm:w-5/6 rounded-xl bg-white p-2.5 sm:p-3 pb-7 sm:pb-8 shadow-photo transition-all duration-500 hover:shadow-2xl hover:-rotate-1">
      <span
        aria-hidden
        className="absolute -top-2.5 left-8 z-10 h-5 sm:h-6 w-14 sm:w-16 -rotate-6 bg-tape/90 shadow-sm rounded-[1px] pointer-events-none"
      />
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="/images/computer_lab.webp"
          alt="Students at individual workstations in Vidyadeep computer lab"
          loading="lazy"
          decoding="async"
          className="block h-52 sm:h-60 w-full object-cover rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Trust Sapphire Blue tint filter at rest, clearing smoothly on hover */}
        <div
          className="absolute inset-0 rounded-lg bg-saffron/20 mix-blend-multiply opacity-85 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 z-10">
          <span className="truncate min-w-0 rounded-lg bg-ink/95 px-2.5 py-1 text-[11px] sm:text-fine font-bold uppercase tracking-label text-cream shadow-sm">
            Real Campus Lab
          </span>
          <span className="shrink-0 whitespace-nowrap rounded-lg bg-white/95 px-2.5 py-1 text-[11px] sm:text-fine font-bold text-ink shadow-md">
            1:1 Workstations
          </span>
        </div>
      </div>
      <figcaption className="absolute inset-x-0 bottom-2 sm:bottom-2.5 px-2 text-center font-display text-[11px] sm:text-fine italic text-ink-2 transition-colors duration-300 group-hover:text-saffron">
        in session — computer training lab
      </figcaption>
    </figure>
  );
}

export function SkillLab() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCourse(null);
    };
    if (selectedCourse) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCourse]);

  return (
    <section id="lab" className="scroll-mt-24 bg-cream py-16 sm:py-24">
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

        <div className="border-b border-line">
          {COURSES.map((course, index) => (
            <Reveal key={course.number} delay={index * 0.05}>
              <div
                role="button"
                tabIndex={0}
                aria-label={`View syllabus details for ${course.name}`}
                onClick={() => setSelectedCourse(course)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCourse(course);
                  }
                }}
                className="group flex cursor-pointer items-center justify-between gap-3 border-t border-line px-3 py-4 transition-all duration-300 hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-saffron sm:grid sm:grid-cols-course sm:px-2 sm:py-5 sm:hover:px-5 rounded-lg"
              >
                <span className="hidden font-display text-sm italic text-ink-2 sm:block">
                  {course.number}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-base sm:text-lg font-semibold tracking-tight text-ink group-hover:text-saffron">
                    {course.name}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-2 leading-snug">{course.details}</p>
                </div>
                <span className="hidden rounded-full border border-line px-3 py-1 text-label uppercase tracking-label text-ink-2 sm:inline-block">
                  Certificate
                </span>
                <ArrowIcon className="shrink-0 text-saffron opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
          <p className="mt-6 text-fine text-ink-2">
            * Tap any course to view syllabus details and book a free demo
            class.
          </p>
        </div>
      </Container>

      {/* Course Detail Modal */}
      {selectedCourse ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 animate-fade-up"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-line bg-paper-2 p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <span className="text-label uppercase tracking-label font-bold text-saffron">
                  Course #{selectedCourse.number}
                </span>
                <h3
                  id="course-modal-title"
                  className="font-display text-h3 mt-1"
                >
                  {selectedCourse.name}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close course details modal"
                onClick={() => setSelectedCourse(null)}
                className="grid h-11 w-11 place-items-center rounded-full bg-paper text-ink-2 transition-colors hover:bg-line hover:text-ink focus-visible:outline-2 focus-visible:outline-saffron"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <p className="text-body text-ink-2 leading-relaxed">
                <strong>Overview:</strong> {selectedCourse.details}
              </p>
              <div className="rounded-lg bg-cream/80 p-4 text-sm text-ink space-y-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-sage-ink h-4 w-4 shrink-0" />
                  <span>Hands-on practice on dedicated workstations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-sage-ink h-4 w-4 shrink-0" />
                  <span>ISO-aligned certification upon completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-sage-ink h-4 w-4 shrink-0" />
                  <span>
                    Flexible batch timings (Morning / Afternoon / Evening)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
              <p className="text-fine text-ink-2">Free demo class available</p>
              <ButtonLink href="#visit" onClick={() => setSelectedCourse(null)}>
                Book Free Demo Class
                <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
