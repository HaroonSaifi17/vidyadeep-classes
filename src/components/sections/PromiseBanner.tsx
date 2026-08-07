import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function PromiseBanner() {
  return (
    <section className="bg-saffron-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <div className="shrink-0">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-card">
                <img
                  src="/images/mentor.webp"
                  alt="Faculty Mentor at Vidyadeep Classes"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <blockquote className="max-w-4xl text-center md:text-left font-display font-normal italic text-quote">
              <span className="mr-2 text-saffron">“</span>
              Quality teaching, a disciplined routine, regular tests and honest reporting — that is
              our promise to every family that trusts us with their child.
              <span className="ml-2 text-saffron">”</span>
              <cite className="mt-4 block font-sans text-sm font-bold not-italic uppercase tracking-label text-saffron-ink">
                — Faculty Mentors, Vidyadeep Classes
              </cite>
            </blockquote>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}