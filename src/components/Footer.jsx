import { Link } from "react-router-dom";
import { nav, contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">Vasant Valley School</p>
            <p className="mt-3 max-w-sm text-sm text-paper/70">
              Excellence in Deed — a self-financing day school in New Delhi, teaching the
              cerebral alongside the ethical since 1990.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-paper/80 hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">Reach us</p>
            <ul className="mt-4 space-y-2 text-sm text-paper/80">
              <li>{contact.address}</li>
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-paper">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-paper">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/15 pt-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vasant Valley School. Concept redesign for educational purposes.</p>
          <p>Not affiliated with or endorsed by the school. Built as an independent frontend study.</p>
        </div>
      </div>
    </footer>
  );
}
