import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { contact } from "../data/content";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch" />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
          <Reveal className="space-y-6">
            <div>
              <p className="eyebrow text-brick">Address</p>
              <p className="mt-2 font-display text-xl">{contact.address}</p>
            </div>
            <div>
              <p className="eyebrow text-brick">Phone</p>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-2 block font-display text-xl">
                {contact.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow text-brick">Email</p>
              <a href={`mailto:${contact.email}`} className="mt-2 block font-display text-xl">
                {contact.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-brick">Office Hours</p>
              <p className="mt-2 text-ink/75">Weekdays, 10:00 a.m. – 3:00 p.m.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Vasant Valley School location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
                className="h-80 w-full md:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
