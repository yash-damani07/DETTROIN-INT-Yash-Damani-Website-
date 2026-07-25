import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ArcDivider from "../components/ArcDivider";

const timeline = [
  { year: "1990", copy: "Founded by Mr. Aroon Purie and Mrs. Rekha Purie as an initiative of the Education Today Trust, opening with around 200 students and 16 teachers." },
  { year: "Today", copy: "A self-financing, inclusive day school spread across eight acres in Vasant Kunj, New Delhi." },
  { year: "36+ years", copy: "Of building professional learning communities and mentoring educators through sustained practice." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the School"
        title="Excellence in Deed"
        copy="Founded in 1990, Vasant Valley treats individualised attention, process-focused learning, and equity for every stakeholder as its three working pillars."
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
          <Reveal>
            <p className="eyebrow text-brick">Origins</p>
            <h2 className="mt-3 font-display text-3xl">A school built to keep asking questions</h2>
            <p className="mt-5 text-ink/75">
              Vasant Valley School was established in 1990 by Mr. Aroon Purie and Mrs. Rekha
              Purie as an initiative of the Education Today Trust. It began its journey with
              roughly 200 students and 16 teachers.
            </p>
            <p className="mt-4 text-ink/75">
              Today it operates as a self-financing, inclusive day school on eight acres in
              Vasant Kunj — a campus designed, deliberately, to double as a second classroom.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="rounded-2xl border border-ink/10 bg-sand/60 p-6">
                <p className="font-display text-2xl text-brick">{t.year}</p>
                <p className="mt-2 text-sm text-ink/75">{t.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ArcDivider tone="sand" />

      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="eyebrow text-brick">Vision &amp; Philosophy</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            “Education is preparation for life.”
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-ink/75">
            The school day is planned around both academic and non-academic learning
            experiences, built around the developmental needs of the students in it. The
            entire campus counts as a classroom, and learning doesn't stop at the bell.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-3 md:px-8">
          {[
            { title: "Individualised attention", copy: "Teaching calibrated to the student in front of you, not an average of the class." },
            { title: "Process-focused learning", copy: "Weight on how a student arrives at an answer, not only whether it's correct." },
            { title: "Equity for stakeholders", copy: "Students, teachers, and families treated as partners with a shared stake in outcomes." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="rounded-2xl border border-ink/10 p-7">
              <p className="eyebrow text-ink/40">{`0${i + 1}`}</p>
              <h3 className="mt-3 font-display text-xl">{v.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{v.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
