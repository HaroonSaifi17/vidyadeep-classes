import { useState, type FormEvent, type ReactNode } from "react";
import { CONTACT, COURSE_OPTIONS } from "../../content/site";
import {
  ArrowIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  PinIcon,
} from "../ui/icons";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const DETAILS = [
  { title: "Address", value: CONTACT.address, icon: PinIcon },
  { title: "Phone", value: CONTACT.phone, icon: PhoneIcon },
  { title: "Timings", value: CONTACT.timings, icon: ClockIcon },
];

const inputClass =
  "w-full rounded-xl border border-line bg-paper-2 px-4 py-3.5 text-body text-ink transition-all placeholder:text-ink-2/50 focus:border-saffron focus:bg-white focus:outline-none focus:ring-4 focus:ring-saffron/15 shadow-2xs";

function DetailRow({ title, value, icon: Icon }: (typeof DETAILS)[number]) {
  return (
    <div className="flex items-start gap-4 border-b border-line/60 py-4 text-body last:border-b-0">
      <Icon size={18} className="mt-1 shrink-0 text-saffron" />
      <div>
        <span className="block text-fine font-bold uppercase tracking-label text-ink-2">
          {title}
        </span>
        <span className="mt-0.5 block text-ink font-medium leading-relaxed">{value}</span>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-fine font-bold uppercase tracking-label text-ink-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function SuccessPanel({ name, course }: { name: string; course: string }) {
  return (
    <div
      className="rounded-2xl border border-line bg-white p-8 sm:p-10 text-center shadow-form"
      role="status"
    >
      <div className="mx-auto mb-5 grid h-14 w-14 animate-pop place-items-center rounded-full bg-saffron-soft text-saffron-ink">
        <CheckIcon size={24} />
      </div>
      <h3 className="font-display text-h2">Thank you, {name.split(" ")[0]}!</h3>
      <p className="mt-3 text-body leading-relaxed text-ink-2">
        We’ve noted your interest in <strong>{course}</strong>.
        <br />
        Our team will call you within one working day.
      </p>
    </div>
  );
}

export function VisitSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: COURSE_OPTIONS[1],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    if (form.name.trim() && form.phone.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 400);
    }
  };

  return (
    <section id="visit" className="scroll-mt-24 bg-blush py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Column */}
        <Reveal>
          <SectionHeader
            kicker="Visit us"
            title={
              <>
                Come in. Sit
                <br />
                in on a <em className="italic text-saffron">class.</em>
              </>
            }
            lead="The best way to judge an institute is to see it working. Tour the campus, meet the faculty, and we’ll chart a plan for your child."
          />

          <div className="mt-8 space-y-1">
            {DETAILS.map((detail) => (
              <DetailRow key={detail.title} {...detail} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${CONTACT.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-saffron hover:bg-saffron-soft hover:shadow-xs"
            >
              <PhoneIcon size={15} className="text-saffron" />
              Call Now
            </a>
            <a
              href="https://maps.google.com/?q=Vidyadeep+Classes+Main+Road"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-saffron hover:bg-saffron-soft hover:shadow-xs"
            >
              <PinIcon size={15} className="text-saffron" />
              Get Directions
            </a>
          </div>

          <p className="mt-8 font-display text-lead italic text-saffron-ink">
            Bring the last marksheet along — we’ll map the plan around it.
          </p>
        </Reveal>

        {/* Right Form Column (Clean original form with perfected spacing) */}
        <Reveal delay={0.1}>
          {submitted ? (
            <SuccessPanel name={form.name} course={form.course} />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-white p-8 sm:p-10 shadow-form"
            >
              <h3 className="font-display text-h3 text-ink">Request a call back</h3>
              <p className="mt-1.5 text-body text-ink-2">
                We reply within one working day.
              </p>

              <div className="mt-8 space-y-6">
                <Field id="visit-name" label="Student name">
                  <input
                    id="visit-name"
                    type="text"
                    required
                    maxLength={70}
                    placeholder="e.g. Aarav Sharma"
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    className={inputClass}
                  />
                </Field>

                <Field id="visit-phone" label="Phone number">
                  <input
                    id="visit-phone"
                    type="tel"
                    inputMode="tel"
                    required
                    maxLength={15}
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(event) =>
                      setForm({ ...form, phone: event.target.value })
                    }
                    className={inputClass}
                  />
                </Field>

                <Field id="visit-course" label="Interested in">
                  <select
                    id="visit-course"
                    value={form.course}
                    onChange={(event) =>
                      setForm({ ...form, course: event.target.value })
                    }
                    className={inputClass}
                  >
                    {COURSE_OPTIONS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </Field>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full justify-center disabled:opacity-60 py-3.5"
                  >
                    {isSubmitting ? "Submitting..." : "Request a call back"}
                    <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
