import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { newsEvents, announcements } from "../data/content";

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="A running record of the school year"
        copy="From inter-school tournaments to results announcements — a timeline of what's been happening on and off campus."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8">
          <ul className="space-y-0">
            {newsEvents.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.04}>
                <li className="flex gap-6 border-t border-ink/10 py-6 first:border-t-0">
                  <p className="w-32 shrink-0 font-mono text-xs text-brick md:text-sm">{n.date}</p>
                  <div>
                    <h3 className="font-display text-lg md:text-xl">{n.title}</h3>
                    <p className="mt-1 text-sm text-ink/70">{n.copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="eyebrow text-brick">Announcements</p>
          <h2 className="mt-3 font-display text-3xl">Official notices</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {announcements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06} className="rounded-2xl border border-ink/10 bg-white/50 p-6">
                <p className="eyebrow text-ink/50">{a.date}</p>
                <h3 className="mt-3 font-display text-xl leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{a.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
