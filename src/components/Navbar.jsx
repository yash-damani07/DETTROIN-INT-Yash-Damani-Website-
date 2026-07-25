import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { nav } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "bg-paper/95 backdrop-blur border-ink/10" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brick text-paper font-display text-sm">
            VV
          </span>
          <span className="font-display text-lg leading-none">
            Vasant Valley <span className="hidden sm:inline">School</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `eyebrow border-b-2 pb-1 transition-colors ${
                  isActive ? "border-brick text-brick" : "border-transparent hover:border-gold"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/admissions"
            className="rounded-full bg-brick px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-brick-dark"
          >
            Apply Now
          </Link>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-ink/20"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-5 bg-ink transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink/10 bg-paper px-5 pb-6 pt-2">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-lg font-display border-b border-ink/10 ${isActive ? "text-brick" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-brick px-5 py-3 text-center font-semibold text-paper"
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
}
