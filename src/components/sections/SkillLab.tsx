import { useState, useEffect } from "react";
import { COURSES, type Course } from "../../content/site";
import { ArrowIcon, CheckIcon } from "../ui/icons";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { ButtonLink } from "../ui/Button";

function LabPhoto() {
  return (
    <div className="relative mt-8 w-full sm:w-5/6">
      <div className="relative overflow-hidden rounded-xl border border-line bg-paper-2 shadow-md transition-transform duration-500 hover:scale-[1.02]">
        <img
          src="/images/computer_lab.webp"
          alt="Students at individual workstations in Vidyadeep computer lab"
          loading="lazy"
          className="block h-56 w-full object-cover sm:h-64"
        />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="truncate min-w-0 rounded-lg bg-ink/90 px-3 py-1.5 text-fine font-bold uppercase tracking-label text-cream shadow-sm backdrop-blur-md">
            Real Campus Computer Lab
          </span>
          <span className="shrink-0 whitespace-nowrap rounded-lg bg-white/90 px-3 py-1.5 text-fine font-bold text-ink shadow-md backdrop-blur-md">
            1:1 Workstations
          </span>
        </div>
      </div>
    </div>
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
                className="group grid cursor-pointer items-center gap-3 border-t border-line px-2 py-5 transition-all duration-300 hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-saffron sm:grid-cols-course sm:hover:px-5 rounded-lg"
              >
                <span className="hidden font-display text-sm italic text-ink-2 sm:block">
                  {course.number}
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-ink group-hover:text-saffron">
                    {course.name}
                  </p>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm animate-fade-up"
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
                className="grid h-11 w-11 place-items-center rounded-full bg-paper text-ink-2 hover:bg-line hover:text-ink focus-visible:outline-2 focus-visible:outline-saffron"
              >
                ✕
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
