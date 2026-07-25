import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const features = [
  { title: "Two wings, one amphitheatre", copy: "The campus splits into two wings joined by an open amphitheatre — the shared centre for assemblies, performances and everyday movement between classes." },
  { title: "Red sandstone, by design", copy: "The red-and-beige sandstone buildings were designed specifically around the school's philosophy and the developmental needs of children, not adapted after the fact." },
  { title: "Four acres built, four acres green", copy: "Of the eight-acre plot, half carries a built footprint and half stays lush, green cover — deliberately, so the outdoors stays part of daily learning." },
];

export default function Infrastructure() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="A campus built around a philosophy"
        copy="Eight acres in Vasant Kunj, split evenly between structure and green space, planned with the school's educational philosophy as the brief."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} className="rounded-2xl border border-ink/10 p-7">
                <div className="h-1.5 w-10 rounded-full bg-gold" />
                <h3 className="mt-5 font-display text-xl">{f.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{f.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <p className="eyebrow text-brick">A Day in School</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">The whole campus counts as a classroom</h2>
          <p className="mx-auto mt-5 max-w-2xl text-ink/75">
            Academic and non-academic learning experiences are planned together across the
            same physical spaces, so a science lab, the amphitheatre, and the green cover
            outside all carry equal weight in a student's day.
          </p>
        </div>
      </section>
    </>
  );
}
