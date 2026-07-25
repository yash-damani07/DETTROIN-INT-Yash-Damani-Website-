// A recurring arc motif that stands in for the open amphitheatre
// connecting the school's two wings — used wherever sections meet.
export default function ArcDivider({ flip = false, tone = "paper" }) {
  const fill = tone === "paper" ? "var(--color-paper)" : "var(--color-sand)";
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="h-12 w-full md:h-16">
        <path d="M0,80 L0,40 Q600,-20 1200,40 L1200,80 Z" fill={fill} />
      </svg>
    </div>
  );
}
