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

Ukážky aplikácie (`app.kartabojnicana.sk` — portál + admin mesta) sú v repe
`microitem/kartabojnicana` → `docs/design/`.

> **Logo:** SVG v ukážkach je **verná rekreácia** loga Dobré Bojnice (nemal som prístup
> k vloženému `.webp`). Pre produkciu **doložte reálny súbor loga** (`.webp`/SVG) do repa
> — implementer ho použije namiesto rekreácie.
>
> **Obsah je ukážkový** (W2): konkrétne čísla/partneri nie sú záväzné — finálne texty,
> čísla a branding dodá **CEO**. Placeholdery sú označené v texte stránky.
