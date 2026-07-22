import { DraftNotice } from "@/components/DraftNotice";
import { HeroCard } from "@/components/HeroCard";
import { appLinks } from "@/lib/appLinks";

const BENEFITS = [
  {
    title: "Zľavy u partnerov",
    text: "Zvýhodnené ceny v gastro prevádzkach, službách a pri mestských zariadeniach zapojených do programu.",
  },
  {
    title: "Rezidentská výhoda",
    text: "Občania s trvalým pobytom v Bojniciach majú hlbšie, celoročné výhody — je to karta pre Bojničanov.",
  },
  {
    title: "Karta v mobile",
    text: "Pridajte si kartu do Apple/Google Wallet, alebo ju otvorte v prehliadači. QR kód máte vždy po ruke.",
  },
  {
    title: "Aj fyzická karta",
    text: "Pre seniorov a všetkých bez smartfónu — plastová karta s QR a NFC funguje úplne rovnako.",
  },
  {
    title: "Záznam každého uplatnenia",
    text: "Každú uplatnenú zľavu potvrdzuje prevádzka a systém si ju nemazateľne eviduje.",
  },
  {
    title: "Súkromie na prvom mieste",
    text: "Ukladáme len nevyhnutné údaje, dáta zostávajú v EÚ. Rodné číslo systém nikdy neuchováva čitateľne.",
  },
];

const FAQ = [
  {
    q: "Koľko karta stojí?",
    a: "Základná turistická aj rezidentská karta sú zdarma. Program je službou platformy Dobré Bojnice pre občanov a návštevníkov.",
  },
  {
    q: "Potrebujem smartfón?",
    a: "Nie. Kartu môžete mať v mobile, ale rovnako funguje aj fyzická karta s QR a NFC — určená najmä pre seniorov a ľudí bez smartfónu.",
  },
  {
    q: "Ako sa overuje, že som Bojničan?",
    a: "Trvalý pobyt osobne overí poverený pracovník platformy pri vydaní rezidentskej karty, v súčinnosti s mestom.",
  },
  {
    q: "Čo s mojimi údajmi?",
    a: "Ukladáme len údaje nevyhnutné na fungovanie karty a spracúvame ich v rámci EÚ. Rodné číslo sa nikdy neukladá v čitateľnej podobe. Zľavu vždy potvrdzuje prevádzka — bez záznamu žiadna zľava nevznikne.",
  },
  {
    q: "Kde kartu použijem?",
    a: "U zapojených partnerov mesta. Verejný katalóg partnerov a zliav zverejníme pri spustení programu.",
  },
];

export default function Home() {
  return (
    <>
      <DraftNotice />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="blob absolute left-[6%] top-8 -z-10 h-56 w-56 rounded-full bg-orange-400/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="blob absolute right-[8%] top-16 -z-10 h-64 w-64 rounded-full bg-[#6a1fb2]/25 blur-3xl"
            style={{ animationDelay: "-8s" }}
            aria-hidden="true"
          />
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div>
              <span className="reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                <span className="h-0.5 w-6 rounded bg-orange-600" />
                Vernostný program platformy Dobré Bojnice
              </span>
              <h1 className="reveal mt-4 text-4xl font-bold leading-tight text-[#241d3a] sm:text-5xl">
                Karta Bojničana. Mesto, ktoré sa vám <span className="text-orange-600">oplatí</span>.
              </h1>
              <p className="reveal mt-5 max-w-[34ch] text-lg text-gray-600">
                Jedna karta pre Bojničanov aj návštevníkov — zľavy u partnerov mesta, rezidentské
                výhody a všetko jednoducho v mobile alebo na fyzickej karte.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={appLinks.registerTourist}
                  className="rounded-xl bg-orange-600 px-5 py-3 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/25 active:translate-y-0"
                >
                  Získať kartu zdarma
                </a>
                <a
                  href="#ako-funguje"
                  className="rounded-xl border border-gray-300 px-5 py-3 text-[15px] font-semibold text-[#241d3a] transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50"
                >
                  Ako to funguje
                </a>
              </div>
              <p className="mt-5 text-sm text-gray-500">
                Turistická aj rezidentská karta sú <b>zdarma</b>. Registrácia online za pár minút.
              </p>
            </div>
            <div className="hero-card-float">
              <HeroCard />
            </div>
          </div>
        </section>

        {/* Čo je karta */}
        <section id="co-je" className="bg-[#4a1a86] py-20 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <span className="reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              <span className="h-0.5 w-6 rounded bg-orange-300" />
              Prečo Karta Bojničana
            </span>
            <h2 className="reveal mt-3 max-w-[38ch] text-3xl font-bold sm:text-4xl">
              Výhody, ktoré ostávajú v Bojniciach.
            </h2>
            <p className="reveal mt-4 max-w-[60ch] text-[#b8a9df]">
              Bojnice žijú z návštevníkov — karta prináša konkrétny úžitok obyvateľom aj hosťom
              a pomáha lokálnym prevádzkam.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="reveal rounded-2xl border border-white/10 bg-[#5a2599] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#63289f] hover:shadow-xl hover:shadow-black/20"
                >
                  <h3 className="text-[17px] font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#b8a9df]">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre koho */}
        <section id="pre-koho" className="mx-auto max-w-6xl px-4 py-20">
          <span className="reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            <span className="h-0.5 w-6 rounded bg-orange-600" />
            Pre koho je karta
          </span>
          <h2 className="reveal mt-3 text-3xl font-bold text-[#241d3a] sm:text-4xl">Dve karty, jeden program.</h2>
          <p className="reveal mt-4 max-w-[60ch] text-gray-600">
            Podľa toho, či v Bojniciach bývate alebo ste na návšteve — obe sú zdarma.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="reveal relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-orange-50 to-fuchsia-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10">
              <span className="brand-gradient absolute inset-y-0 left-0 w-1.5" aria-hidden="true" />
              <h3 className="text-xl font-bold text-[#241d3a]">Rezident</h3>
              <div className="mt-1.5 text-xs font-bold uppercase tracking-wide text-orange-600">
                Zdarma · pre občanov s trvalým pobytom
              </div>
              <ul className="mt-5 flex flex-col gap-3 text-[15px] text-gray-700">
                <li>Celoročné, hlbšie výhody od partnerov programu</li>
                <li>Overenie trvalého pobytu osobne, pri vydaní karty</li>
                <li>Dlhá platnosť karty</li>
                <li>Digitálna aj fyzická karta</li>
              </ul>
              <a
                href={appLinks.registerResident}
                className="mt-6 inline-block rounded-lg border border-[#4a1a86] px-4 py-2 text-sm font-semibold text-[#4a1a86] transition-colors duration-200 hover:bg-[#4a1a86] hover:text-white"
              >
                Podať žiadosť o rezidentskú kartu
              </a>
            </div>
            <div className="reveal relative overflow-hidden rounded-2xl border border-gray-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10">
              <span className="brand-gradient absolute inset-y-0 left-0 w-1.5" aria-hidden="true" />
              <h3 className="text-xl font-bold text-[#241d3a]">Turista</h3>
              <div className="mt-1.5 text-xs font-bold uppercase tracking-wide text-orange-600">
                Zdarma · pre návštevníkov Bojníc
              </div>
              <ul className="mt-5 flex flex-col gap-3 text-[15px] text-gray-700">
                <li>Registrácia e-mailom za pár minút</li>
                <li>Platnosť 24 / 48 / 72 hodín alebo sezónna</li>
                <li>Zľavy u partnerov počas pobytu</li>
                <li>Karta v mobile ihneď po registrácii</li>
              </ul>
              <a
                href={appLinks.registerTourist}
                className="mt-6 inline-block rounded-lg border border-orange-600 px-4 py-2 text-sm font-semibold text-orange-600 transition-colors duration-200 hover:bg-orange-600 hover:text-white"
              >
                Zaregistrovať sa ako turista
              </a>
            </div>
          </div>
        </section>

        {/* Ako funguje */}
        <section id="ako-funguje" className="bg-gray-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <span className="reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              <span className="h-0.5 w-6 rounded bg-orange-600" />
              Ako to funguje
            </span>
            <h2 className="reveal mt-3 text-3xl font-bold text-[#241d3a] sm:text-4xl">
              Od registrácie po zľavu na tri kroky.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  n: 1,
                  title: "Zaregistrujte sa online",
                  text: "Vyplňte krátku registráciu v aplikácii. Turista overí e-mail, rezidentovi trvalý pobyt osobne overí platforma.",
                },
                {
                  n: 2,
                  title: "Kartu máte v mobile",
                  text: "Pridajte si ju do peňaženky v telefóne alebo otvorte v portáli. Kto chce, dostane aj fyzickú kartu.",
                },
                {
                  n: 3,
                  title: "U partnera ukážete QR",
                  text: "Obsluha naskenuje váš kód a potvrdí zľavu. Uplatnenie sa bezpečne zaznamená.",
                },
              ].map((s) => (
                <div key={s.n} className="reveal group">
                  <div className="brand-gradient mb-4 flex h-10 w-10 items-center justify-center rounded-full font-bold text-white transition-transform duration-300 group-hover:scale-110">
                    {s.n}
                  </div>
                  <h3 className="text-lg font-bold text-[#241d3a]">{s.title}</h3>
                  <p className="mt-2 text-[15px] text-gray-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre prevádzky */}
        <section id="prevadzky" className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                <span className="h-0.5 w-6 rounded bg-orange-600" />
                Pre prevádzky a partnerov
              </span>
              <h2 className="reveal mt-3 text-3xl font-bold text-[#241d3a] sm:text-4xl">
                Viac zákazníkov, plná kontrola nad zľavami.
              </h2>
              <p className="reveal mt-4 text-gray-600">
                Zapojte svoju prevádzku do programu — každé uplatnenie zľavy vidíte v prehľade,
                s exportom pre účtovníctvo. Žiadne papierové kupóny.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={appLinks.merchantLogin}
                  className="rounded-xl bg-orange-600 px-5 py-3 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/25 active:translate-y-0"
                >
                  Prihlásenie prevádzky
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Chcete zapojiť prevádzku, ktorá ešte nemá prístup? Kontaktujte platformu Dobré Bojnice
                — kontakt doplníme po schválení CEO.
              </p>
            </div>
            <div className="reveal rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_18px_50px_-24px_rgba(46,15,87,.35)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-20px_rgba(46,15,87,.45)]">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#4a1a86]">
                Ukážka prehľadu prevádzky
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="font-mono text-2xl font-bold text-[#241d3a]">[N]</div>
                  <div className="mt-1 text-xs text-gray-500">uplatnení tento mesiac</div>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="font-mono text-2xl font-bold text-[#241d3a]">[N]</div>
                  <div className="mt-1 text-xs text-gray-500">% v evidencii</div>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-2xl font-bold text-[#241d3a]">CSV / PDF</div>
                  <div className="mt-1 text-xs text-gray-500">exporty pre účtovníctvo</div>
                </div>
                <div className="rounded-xl border border-gray-200 p-4">
                  <div className="text-2xl font-bold text-[#241d3a]">Reálny čas</div>
                  <div className="mt-1 text-xs text-gray-500">prehľad pre majiteľa</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                [N] = konkrétne čísla programu doplní platforma Dobré Bojnice po spustení — ide o
                ukážku rozloženia, nie o reálne dáta.
              </p>
            </div>
          </div>
        </section>

        {/* Katalóg */}
        <section className="bg-[#4a1a86] py-20 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <span className="reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              <span className="h-0.5 w-6 rounded bg-orange-300" />
              Kde karta platí
            </span>
            <h2 className="reveal mt-3 text-3xl font-bold sm:text-4xl">Katalóg partnerov — čoskoro.</h2>
            <p className="reveal mt-4 max-w-[60ch] text-[#b8a9df]">
              Pripravujeme verejný zoznam prevádzok a zliav, kde Karta Bojničana platí. Zoznam sa
              zverejní pri spustení programu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Gastro", "Kúpele a wellness", "Kultúra a podujatia", "Šport a voľný čas", "Služby", "Turistické atrakcie"].map(
                (cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                    {cat}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-20">
          <span className="reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            <span className="h-0.5 w-6 rounded bg-orange-600" />
            Časté otázky
          </span>
          <h2 className="reveal mt-3 text-3xl font-bold text-[#241d3a] sm:text-4xl">Dobré vedieť.</h2>
          <div className="mt-8 border-t border-gray-200">
            {FAQ.map((item) => (
              <details key={item.q} className="group border-b border-gray-200 py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[17px] font-semibold text-[#241d3a] transition-colors duration-200 hover:text-orange-600">
                  {item.q}
                  <svg
                    className="h-4 w-4 flex-none text-gray-400 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-3 max-w-[70ch] text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20">
          <div className="reveal brand-gradient mx-auto max-w-6xl rounded-3xl px-8 py-14 text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">Vaša karta na vás čaká.</h2>
            <p className="mx-auto mt-4 max-w-[50ch] text-white/90">
              Zaregistrujte sa a majte výhody Bojníc vždy so sebou — v mobile aj na fyzickej karte.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={appLinks.registerTourist}
                className="rounded-xl bg-white px-5 py-3 text-[15px] font-semibold text-[#4a1a86] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg active:translate-y-0"
              >
                Získať kartu zdarma
              </a>
              <a
                href="#ako-funguje"
                className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
              >
                Ako to funguje
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
