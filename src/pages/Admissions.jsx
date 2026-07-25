import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { faqs } from "../data/content";

const steps = [
  { title: "Enquire", copy: "Submit the enquiry form below with your child's details and the class applied for." },
  { title: "Registration", copy: "Complete registration during the admissions window announced on the school's calendar." },
  { title: "Interaction", copy: "Attend a scheduled interaction — for the child, parents, or both, depending on the entry point." },
  { title: "Offer & confirmation", copy: "Admitted families receive an offer and confirm the seat within the stated deadline." },
];

export default function Admissions() {
  const [form, setForm] = useState({ parent: "", email: "", phone: "", grade: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.parent || !form.email || !form.grade) {
      setError("Please fill in your name, email, and the grade you're enquiring about.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Start the conversation"
        copy="Admissions run on an annual calendar with defined entry points. The steps below outline what to expect; the form gets you on the school's radar."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <ol className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07} className="relative rounded-2xl border border-ink/10 p-6">
                <p className="font-mono text-sm text-brick">{`0${i + 1}`}</p>
                <h3 className="mt-3 font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr] md:px-8">
          <Reveal>
            <p className="eyebrow text-brick">Enquiry Form</p>
            <h2 className="mt-3 font-display text-3xl">Tell us about your child</h2>
            <p className="mt-4 text-sm text-ink/70">
              This form is a frontend demo and doesn't submit anywhere yet — wire it up to
              your admissions inbox or CRM before going live.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-pine/30 bg-pine/10 p-6">
                <p className="font-display text-xl text-pine">Enquiry received</p>
                <p className="mt-2 text-sm text-ink/70">
                  Thank you — the admissions team will be in touch at {form.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
                <div>
                  <label htmlFor="parent" className="eyebrow text-ink/60">Parent / Guardian Name</label>
                  <input
                    id="parent"
                    name="parent"
                    value={form.parent}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 outline-none focus:border-brick"
                    placeholder="Full name"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="eyebrow text-ink/60">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 outline-none focus:border-brick"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="eyebrow text-ink/60">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 outline-none focus:border-brick"
                      placeholder="+91"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="grade" className="eyebrow text-ink/60">Grade Applying For</label>
                  <input
                    id="grade"
                    name="grade"
                    value={form.grade}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 outline-none focus:border-brick"
                    placeholder="e.g. Grade 1"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow text-ink/60">Message (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 outline-none focus:border-brick"
                  />
                </div>
                {error && <p className="text-sm text-brick">{error}</p>}
                <button
                  type="submit"
                  className="rounded-full bg-brick px-6 py-3 font-semibold text-paper transition-colors hover:bg-brick-dark"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-brick">Frequently Asked</p>
            <div className="mt-4 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-ink/10 bg-white/40 p-5">
                  <summary className="cursor-pointer list-none font-display text-lg marker:content-none">
                    <span className="flex items-center justify-between gap-3">
                      {f.q}
                      <span className="text-brick transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
