import { Brand } from "../ui/Brand";
import { Container } from "../ui/Container";

const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Teaching method", href: "#method" },
      { label: "Academic coaching", href: "#programs" },
      { label: "Exam preparation", href: "#exams" },
      { label: "Computer courses", href: "#lab" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Classes 6 – 12", href: "#programs" },
      { label: "NEET · JEE · CUET · NDA", href: "#exams" },
      { label: "Tally Prime + GST", href: "#lab" },
      { label: "Digital Marketing", href: "#lab" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Visit the campus", href: "#visit" },
      { label: "+91 98765 43210", href: "#visit" },
      { label: "FAQs", href: "#faq" },
    ],
  },
];

function FooterColumn({ title, links }: (typeof FOOTER_COLUMNS)[number]) {
  return (
    <div>
      <p className="mb-4 text-label font-bold uppercase tracking-label text-ink-2">{title}</p>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="inline-block py-0.5 text-sm text-ink-2 transition-all hover:translate-x-0.5 hover:text-saffron"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <Container className="py-14">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Brand />
            <p className="mt-4 font-display text-body italic text-ink-2">
              Where knowledge creates success.
            </p>
          </div>
          {FOOTER_COLUMNS.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-fine text-ink-2">
          <p>© {new Date().getFullYear()} Vidyadeep Classes. All rights reserved.</p>
          <p>Small batches · Honest reporting · Concept-first teaching</p>
        </div>
      </Container>
    </footer>
  );
}