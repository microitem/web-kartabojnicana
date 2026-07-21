import { Logo } from "./Logo";
import { appLinks } from "@/lib/appLinks";

export function Footer() {
  return (
    <footer className="mt-auto bg-[#2c0f57] text-[#b8a9df]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo variant="white" className="text-white" />
            <p className="mt-3 text-xs tracking-wide">
              Prevádzkuje platforma <b className="text-white">Dobré Bojnice</b>
            </p>
            <p className="mt-3 max-w-[34ch] text-sm">
              Karta Bojničana — vernostný a zľavový program platformy Dobré Bojnice pre občanov a
              návštevníkov mesta Bojnice.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white">Program</h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#co-je" className="hover:text-white">Čo je karta</a></li>
              <li><a href="#pre-koho" className="hover:text-white">Pre koho</a></li>
              <li><a href="#ako-funguje" className="hover:text-white">Ako funguje</a></li>
              <li><a href="#prevadzky" className="hover:text-white">Pre prevádzky</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white">Aplikácia</h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href={appLinks.registerTourist} className="hover:text-white">Získať kartu (registrácia)</a></li>
              <li><a href={appLinks.home} className="hover:text-white">Moja karta</a></li>
              <li><a href={appLinks.merchantLogin} className="hover:text-white">Prihlásenie prevádzky</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-5 text-xs">
          <span>© 2026 Dobré Bojnice · Karta Bojničana</span>
          <span>Aplikácia beží na app.kartabojnicana.sk</span>
        </div>
      </div>
    </footer>
  );
}
