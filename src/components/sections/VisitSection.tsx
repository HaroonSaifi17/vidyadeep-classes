import { useState, type FormEvent, type ReactNode } from "react";
import { CONTACT, COURSE_OPTIONS } from "../../content/site";
import { ArrowIcon, CheckIcon, ClockIcon, PhoneIcon, PinIcon } from "../ui/icons";
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
  "w-full rounded-lg border border-line bg-paper-2 px-3.5 py-3 text-body text-ink transition-colors placeholder:text-ink-2/60 focus:border-ink focus:outline-none focus:ring-2 focus:ring-saffron/20";

function DetailRow({ title, value, icon: Icon }: (typeof DETAILS)[number]) {
  return (
    <div className="flex items-start gap-3.5 border-b border-dashed border-saffron-soft py-4 text-body">
      <Icon size={16} className="mt-1 shrink-0 text-saffron" />
      <p>
        <span className="block text-fine font-bold uppercase tracking-label text-ink-2">
          {title}
        </span>
        {value}
      </p>
    </div>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-fine font-bold uppercase tracking-label text-ink-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function SuccessPanel({ name, course }: { name: string; course: string }) {
  return (
    <div className="rounded-xl border border-line bg-white p-8 text-center shadow-form" role="status">
      <div className="mx-auto mb-5 grid h-14 w-14 animate-pop place-items-center rounded-full bg-sage text-sage-ink">
        <CheckIcon size={22} />
      </div>
      <h3 className="font-display text-h2">Thank you, {name.split(" ")[0]}!</h3>
      <p className="mt-2 text-body leading-relaxed text-ink-2">
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.name.trim() && form.phone.trim()) setSubmitted(true);
  };

  return (
    <section id="visit" className="scroll-mt-24 bg-blush py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
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
          <div className="mt-6">
            {DETAILS.map((detail) => (
              <DetailRow key={detail.title} {...detail} />
            ))}
          </div>
          <p className="mt-6 font-display text-lead italic text-saffron-ink">
            Bring the last marksheet along — we’ll map the plan around it.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <SuccessPanel name={form.name} course={form.course} />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-line bg-white p-7 shadow-form sm:p-9"
            >
              <h3 className="font-display text-h3">Request a call back</h3>
              <p className="mt-1 text-body text-ink-2">We reply within one working day.</p>

              <div className="mt-7 space-y-5">
                <Field id="visit-name" label="Student name">
                  <input
                    id="visit-name"
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    className={inputClass}
                  />
                </Field>

                <Field id="visit-phone" label="Phone number">
                  <input
                    id="visit-phone"
                    type="tel"
                    inputMode="numeric"
                    required
                    placeholder="+91 …"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    className={inputClass}
                  />
                </Field>

                <Field id="visit-course" label="Interested in">
                  <select
                    id="visit-course"
                    value={form.course}
                    onChange={(event) => setForm({ ...form, course: event.target.value })}
                    className={inputClass}
                  >
                    {COURSE_OPTIONS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </Field>

                <Button type="submit" className="w-full">
                  Request a call back
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}