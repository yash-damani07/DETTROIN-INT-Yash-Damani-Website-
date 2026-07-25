import { Link } from "react-router-dom";
import ArcDivider from "../components/ArcDivider";
import PillarOrbit from "../components/PillarOrbit";
import Reveal from "../components/Reveal";
import { stats, announcements } from "../data/content";

export default function Home() {
  return (
    <>
      {/* HERO — two wings meeting at a shared centre, echoing the campus plan */}
      <section className="relative overflow-hidden bg-brick text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 md:grid-cols-2 md:items-center md:px-8 md:pb-28 md:pt-20">
          <div>
            <p className="eyebrow text-gold">Est. 1990 · Vasant Kunj, New Delhi</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl">
              Nurturing independent minds.
            </h1>
            <p className="mt-6 max-w-md text-paper/85 md:text-lg">
              Vasant Valley School sets students up to question current understanding,
              not just inherit it — and to carry ethics and curiosity in equal measure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="rounded-full bg-gold px-6 py-3 font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                Start Admissions
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-paper/40 px-6 py-3 font-semibold transition-colors hover:bg-paper/10"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-pine to-pine-light p-1 shadow-2xl">
              <div className="flex h-full w-full flex-col justify-end rounded-[2.2rem] border border-paper/20 p-6">
                <p className="eyebrow text-gold">The Motto</p>
                <p className="mt-2 font-display text-3xl leading-tight">“Excellence in Deed.”</p>
                <p className="mt-3 text-sm text-paper/80">
                  Individualised attention, process-focused learning, and equity for every
                  stakeholder — the three pillars of school philosophy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ArcDivider />
      </section>

      {/* STATS */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 md:grid-cols-4 md:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="text-center md:text-left">
              <p className="font-display text-4xl text-brick md:text-5xl">{s.value}</p>
              <p className="eyebrow mt-2 text-ink/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* THE LEARNING EXPERIENCE — signature interactive element */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <p className="eyebrow text-brick">The Learning Experience</p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                Eight ways of measuring a good day at school.
              </h2>
              <p className="mt-5 max-w-md text-ink/75">
                The campus is built around an open amphitheatre connecting its two wings —
                a shape the school's own framework mirrors. Every pillar below gets equal
                weight alongside academic results. Select one to read more.
              </p>
              <Link
                to="/learning-experience"
                className="mt-6 inline-block eyebrow border-b-2 border-brick pb-1 text-brick"
              >
                See the full framework →
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <PillarOrbit />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-brick">Announcements</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">What's current</h2>
            </div>
            <Link to="/news" className="eyebrow hidden border-b-2 border-ink/30 pb-1 md:inline-block">
              View all →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {announcements.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 0.08}
                className="rounded-2xl border border-ink/10 bg-white/40 p-6 transition-shadow hover:shadow-lg"
              >
                <p className="eyebrow text-ink/50">{a.date}</p>
                <h3 className="mt-3 font-display text-xl leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{a.copy}</p>
              </Reveal>
            ))}
          </div>
          <Link to="/news" className="eyebrow mt-8 inline-block border-b-2 border-ink/30 pb-1 md:hidden">
            View all →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pine text-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8">
          <h2 className="font-display text-3xl md:text-4xl">
            Curious what a day here actually looks like?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/80">
            The whole campus counts as a classroom — see how academic and non-academic
            learning fit into one school day.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-block rounded-full bg-gold px-7 py-3 font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Read About the School
          </Link>
        </div>
      </section>
    </>
  );
}
