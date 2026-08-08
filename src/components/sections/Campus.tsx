import { useState } from "react";
import { FACILITIES } from "../../content/site";
import { CheckIcon, FlameIcon, MagnifyIcon } from "../ui/icons";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

interface CampusPhoto {
  src: string;
  alt: string;
  caption: string;
  detail: string;
  className: string;
}

const GALLERY: CampusPhoto[] = [
  {
    src: "/images/smart_classroom.webp",
    alt: "Interactive smart board session in progress at Vidyadeep Classes",
    caption: "Smart Classroom",
    detail:
      "High-definition smart screen for interactive visual teaching & doubt clearing",
    className: "sm:col-span-2 lg:col-span-4 h-72 sm:h-80 lg:h-96",
  },
  {
    src: "/images/library.webp",
    alt: "Quiet library study space for deep concentration",
    caption: "Study Corner & Library",
    detail:
      "Quiet reference library equipped with books, question banks and study material",
    className: "sm:col-span-2 lg:col-span-2 h-72 sm:h-80 lg:h-96",
  },
  {
    src: "/images/computer_lab.webp",
    alt: "Students working at desktop computers in Vidyadeep Lab",
    caption: "Computer Training Lab",
    detail:
      "Dedicated workstations for IT, Tally, Video Editing & Digital Marketing practice",
    className: "sm:col-span-2 lg:col-span-3 h-64 sm:h-72 lg:h-80",
  },
  {
    src: "/images/classroom_hero.webp",
    alt: "Full interactive classroom session at Vidyadeep Classes",
    caption: "Main Academic Classroom",
    detail:
      "Air-conditioned classrooms capped at 24 students for genuine 1-on-1 interaction",
    className: "sm:col-span-2 lg:col-span-3 h-64 sm:h-72 lg:h-80",
  },
];

function PhotoTile({
  photo,
  onClick,
}: {
  photo: CampusPhoto;
  onClick: () => void;
}) {
  return (
    <figure
      role="button"
      tabIndex={0}
      aria-label={`View full photo of ${photo.caption}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative cursor-pointer overflow-hidden rounded-xl border border-line/80 bg-paper-2 shadow-md focus-visible:outline-2 focus-visible:outline-saffron ${photo.className}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
      <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
        <span className="min-w-0 truncate rounded-lg bg-ink/95 px-2.5 py-1.5 text-fine font-semibold uppercase tracking-label text-cream shadow-sm">
          {photo.caption}
        </span>
        <button
          type="button"
          tabIndex={-1}
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-white/95 px-2 py-1.5 xs:px-2.5 text-fine font-bold text-ink shadow-md transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:scale-105"
        >
          <MagnifyIcon
            size={14}
            className="shrink-0 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="hidden xs:inline">View Photo</span>
        </button>
      </figcaption>
    </figure>
  );
}

export function Campus() {
  const [activePhoto, setActivePhoto] = useState<CampusPhoto | null>(null);

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
          lead="Everything a student needs for a calm, disciplined day — real classrooms, smart boards, and modern computer labs."
        />

        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {GALLERY.map((photo) => (
              <PhotoTile
                key={photo.caption}
                photo={photo}
                onClick={() => setActivePhoto(photo)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h4 className="font-display text-h3 mb-4">
                Complete Campus Amenities
              </h4>
              <ul className="grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                {FACILITIES.map((facility) => (
                  <li
                    key={facility}
                    className="flex items-start gap-3 text-body"
                  >
                    <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-sage-ink" />
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center rounded-xl border border-line bg-paper-2 p-7 shadow-card">
              <h4 className="font-display text-h3">
                Safety &amp; transparency
              </h4>
              <p className="mt-2 text-body leading-relaxed text-ink-2">
                CCTV-monitored campus with digital attendance, so parents always
                know their child is safely in class.
              </p>
              <div className="mt-5 flex items-center gap-2 text-fine font-bold text-sage-ink">
                <FlameIcon size={16} />
                <span>Scholarship seats available for toppers</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Lightbox Modal */}
      {activePhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-photo-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 animate-fade-up"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-line/30 bg-paper p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close photo preview modal"
              onClick={() => setActivePhoto(null)}
              className="absolute top-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-ink/80 text-cream hover:bg-ink focus-visible:outline-2 focus-visible:outline-saffron"
            >
              ✕
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              decoding="async"
              className="max-h-[75vh] w-full rounded-xl object-contain bg-ink"
            />
            <div className="p-4 text-center">
              <h3
                id="lightbox-photo-title"
                className="font-display text-h3 text-ink"
              >
                {activePhoto.caption}
              </h3>
              <p className="mt-1 text-body text-ink-2">{activePhoto.detail}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
