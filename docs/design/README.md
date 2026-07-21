# docs/design — dizajnové ukážky (DEMO)

Statické HTML ukážky vizuálu **v dizajne Dobré Bojnice** (oranžovo-fialová identita,
hradné logo). Slúžia ako **dizajnový a obsahový podklad pre implementera** — nie sú to
produkčné súbory. Finálny web stavia implementer podľa `docs/00-zamer.md` + týchto ukážok.

- [`kartabojnicana-web.demo.html`](kartabojnicana-web.demo.html) — prezentačná stránka
  `kartabojnicana.sk` (hero s Kartou Bojničana, výhody, Rezident/Turista, ako funguje,
  pre prevádzky, katalóg, FAQ).
- [`kartabojnicana-web-admin.demo.html`](kartabojnicana-web-admin.demo.html) — **admin/CMS**
  prezentačnej stránky (správa sekcií, katalóg partnerov, podujatia, FAQ, publikovanie).
  Bez osobných údajov (W1) — spravuje len obsah webu.
- [`karta-bojnicana-znacka.demo.html`](karta-bojnicana-znacka.demo.html) — **brand referencia
  značky „Veža"** (R-2026-34): znak Veža, farebná karta (Vivid rezident / Azúr turista),
  prevedenia znaku. Toto je záväzný vizuál karty — nahrádza skoršie logo Dobré Bojnice na karte.

Ukážky aplikácie (`app.kartabojnicana.sk` — portál + admin mesta) sú v repe
`microitem/kartabojnicana` → `docs/design/`.

> **Značka karty:** vlastný znak **„Veža"** (R-2026-34), nie logo Dobré Bojnice. Dobré Bojnice
> je len prevádzkovateľ (R-2026-31) — na karte sa neuvádza jeho logo. Znak Veža je zatiaľ SVG
> rekreácia; pre produkciu sa doladí a odovzdá ako čistý SVG asset.
>
> **Obsah je ukážkový** (W2): konkrétne čísla/partneri nie sú záväzné — finálne texty,
> čísla a branding dodá **CEO**. Placeholdery sú označené v texte stránky.
