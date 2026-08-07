import { FACILITIES } from "../../content/site";
import { CheckIcon, FlameIcon } from "../ui/icons";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

/* SWAP: replace picsum sources with the client's real campus photos */
function PhotoTile({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  className: string;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-lg border border-line ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-fine uppercase tracking-label text-cream">
        {caption}
      </figcaption>
    </figure>
  );
}

export function Campus() {
  return (
    <section id="campus" className="scroll-mt-24 bg-sage py-16 sm:py-24">
      <Container>
        <SectionHeader
          layout="row"
          kicker="Campus & facilities"
          title={
            <>
              A campus built
              <br />
              for <em className="italic text-saffron">focus.</em>
            </>
          }
          lead="Everything a student needs for a calm, disciplined day — nothing that distracts from it."
        />

        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            <PhotoTile
              src="https://picsum.photos/seed/vidyadeep-classroom-wide/900/480"
              alt="Wide view of a smart classroom at Vidyadeep Classes"
              caption="Smart classroom"
              className="aspect-video sm:col-span-2 lg:col-span-4"
            />
            <PhotoTile
              src="https://picsum.photos/seed/vidyadeep-library-corner/420/480"
              alt="Library and study corner"
              caption="Library"
              className="aspect-3/4 lg:col-span-2"
            />
            <PhotoTile
              src="https://picsum.photos/seed/vidyadeep-lab-desk/640/340"
              alt="Computer lab workstations"
              caption="Computer lab"
              className="aspect-video lg:col-span-3"
            />
            <div className="flex flex-col justify-center rounded-lg border border-line bg-paper-2 p-7 lg:col-span-3">
              <h4 className="font-display text-h3">Safety &amp; transparency</h4>
              <p className="mt-2 text-body leading-relaxed text-ink-2">
                CCTV-monitored campus with digital attendance, so parents always know their child
                is in class.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-10 grid max-w-2xl gap-x-10 gap-y-3.5 sm:grid-cols-2">
            {FACILITIES.map((facility) => (
              <li key={facility} className="flex items-start gap-3 text-body">
                <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-sage-ink" />
                <span>{facility}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex items-center gap-2.5 text-body font-semibold text-sage-ink">
            <FlameIcon size={16} />
            <span>
              Scholarship seats available for meritorious students — ask at the front desk.
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}