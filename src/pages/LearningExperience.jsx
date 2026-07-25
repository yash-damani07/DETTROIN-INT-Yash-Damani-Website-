import PageHero from "../components/PageHero";
import PillarOrbit from "../components/PillarOrbit";
import Reveal from "../components/Reveal";
import { pillars } from "../data/content";

export default function LearningExperience() {
  return (
    <>
      <PageHero
        eyebrow="The Learning Experience"
        title="Learning with understanding"
        copy="High academic achievement matters, but it's one of eight measures the school tracks — alongside how compassionate, confident, and cooperative a community it's building."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <Reveal>
            <PillarOrbit />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal
                key={p.key}
                delay={i * 0.05}
                className="rounded-2xl border border-ink/10 bg-white/40 p-6"
              >
                <p className="eyebrow text-brick">{`0${i + 1} / 08`}</p>
                <h3 className="mt-3 font-display text-xl">{p.label}</h3>
                <p className="mt-3 text-sm text-ink/70">{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="eyebrow text-brick">International Curriculum</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Rooted in CBSE, informed by the world
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-ink/75">
            Classroom practice draws on international curricular thinking alongside the
            CBSE syllabus, so students are prepared for exams without being taught only
            to them. Special education needs are supported through dedicated staff
            embedded across both wings of the school.
          </p>
        </div>
      </section>
    </>
  );
}
