import { Logo } from "./Logo";

// Purely decorative mock-up for the hero section — not a real card/QR.
export function HeroCard() {
  return (
    <div
      className="brand-gradient relative aspect-[1.585/1] w-full overflow-hidden rounded-[22px] p-6 text-white shadow-[0_18px_50px_-20px_rgba(46,15,87,.5)]"
      role="img"
      aria-label="Ukážka Karty Bojničana"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(120% 120% at 85% 15%, rgba(255,255,255,.25), transparent 55%)" }}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="text-[11px] uppercase tracking-[0.2em] opacity-85">Karta Bojničana</div>
          <Logo variant="white" wordmark={false} size={40} />
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div
              className="h-8 w-11 rounded-md"
              style={{ background: "linear-gradient(135deg,#ffe6b0,#e8b866)" }}
              aria-hidden="true"
            />
            <div className="mt-3.5 text-[15px] font-semibold">Jana Nováková</div>
            <div className="mt-0.5 text-[11.5px] uppercase tracking-wide opacity-85">
              Rezident · Platí do 08/2029
            </div>
          </div>
          <div className="flex-none rounded-lg bg-white p-1.5" aria-hidden="true">
            <div className="grid h-14 w-14 grid-cols-5 grid-rows-5 gap-0.5">
              {Array.from({ length: 25 }, (_, i) => (
                <div key={i} className={(i * 7) % 3 === 0 ? "bg-[#241d3a]" : "bg-white"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
