import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pillars } from "../data/content";

// The school defines eight named dimensions of its Learning Experience.
// Because that's a real, fixed set (not an arbitrary list), we place them
// on a ring around a shared centre — the "amphitheatre" — echoing the
// campus's two wings meeting around one open space. Selecting a point
// brings its description into the centre.
export default function PillarOrbit() {
  const [active, setActive] = useState(0);
  const radius = 42; // percent of container

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      {/* orbit ring */}
      <div className="absolute inset-[12%] rounded-full border border-dashed border-brick/25" />

      {/* centre content */}
      <div className="absolute inset-[26%] grid place-items-center rounded-full bg-brick text-paper text-center p-6 shadow-[0_18px_40px_-12px_rgba(97,31,22,0.55)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <p className="eyebrow text-gold">{`0${active + 1} / 08`}</p>
            <p className="mt-2 font-display text-xl md:text-2xl">{pillars[active].label}</p>
            <p className="mt-2 text-xs md:text-sm text-paper/80">{pillars[active].copy}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* pillar buttons on the ring */}
      {pillars.map((p, i) => {
        const angle = (i / pillars.length) * 2 * Math.PI - Math.PI / 2;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        const isActive = i === active;
        return (
          <button
            key={p.key}
            onClick={() => setActive(i)}
            style={{ left: `${x}%`, top: `${y}%` }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all
              ${isActive
                ? "bg-gold border-gold text-ink scale-110"
                : "bg-paper border-ink/15 text-ink/70 hover:border-brick hover:text-brick"}
              px-3 py-2 text-xs font-semibold shadow-sm md:text-sm`}
            aria-pressed={isActive}
          >
            {p.label}
          </button>
        );
      })}
    </div>
  );
}
