import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function PromiseBanner() {
  return (
    <section className="bg-saffron-soft py-16 sm:py-20">
      <Container>
        <Reveal>
          <blockquote className="max-w-4xl font-display font-normal italic text-quote">
            <span className="mr-2 text-saffron">“</span>
            Quality teaching, a disciplined routine, regular tests and honest reporting — that is
            our promise to every family that trusts us with their child.
            <span className="ml-2 text-saffron">”</span>
            <cite className="mt-6 block font-sans text-sm font-bold not-italic uppercase tracking-label text-saffron-ink">
              — The Faculty, Vidyadeep Classes
            </cite>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}