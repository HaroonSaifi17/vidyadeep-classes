import { FAQS } from "../../content/site";
import { Accordion } from "../ui/Accordion";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-faq">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <SectionHeader
              kicker="Questions parents ask"
              title={
                <>
                  Before you <br />
                  <em className="italic text-saffron">enrol.</em>
                </>
              }
              lead="Anything else? Call us, or just walk in — the door is open."
            />
          </Reveal>
        </div>

        <div>
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <Accordion
                defaultOpen={index === 0}
                heading={<span className="text-body font-semibold text-ink">{faq.question}</span>}
              >
                <p className="max-w-xl pb-7 text-body leading-relaxed text-ink-2">{faq.answer}</p>
              </Accordion>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}