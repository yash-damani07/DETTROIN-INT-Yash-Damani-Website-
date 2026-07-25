import ArcDivider from "./ArcDivider";

export default function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="bg-brick text-paper">
      <div className="mx-auto max-w-4xl px-5 pb-16 pt-16 text-center md:px-8 md:pb-20 md:pt-24">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">{title}</h1>
        {copy && <p className="mx-auto mt-5 max-w-2xl text-paper/85 md:text-lg">{copy}</p>}
      </div>
      <ArcDivider />
    </section>
  );
}
