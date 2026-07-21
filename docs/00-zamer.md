# 00 — Zámer a obsahová štruktúra prezentačnej stránky (E0/E2)

> **Typ:** zámer + obsahová štruktúra | **Stav:** NÁVRH → NA SCHVÁLENIE (CEO obsah)
> **Vlastník:** REVIEWER (Claude) | **Verzia:** 1.0 | **Dátum:** 2026-07-19
> **Brána:** CEO (obsah/copy) | **Zdroj rozhodnutia:** `kartabojnicana/rozhodnutia.md` R-2026-28/29/30

---

## 1. Zámer

Verejná **prezentačná stránka** programu Bojnická karta na `kartabojnicana.sk`.
Cieľ: v skratke a pravdivo vysvetliť, **čo program je, pre koho a ako sa doň zapojiť**,
a **odkázať na aplikáciu** `app.kartabojnicana.sk`. Nie je to aplikácia (tá je v repe
`kartabojnicana`), ani spracúvanie osobných údajov (DNA W1).

## 2. Cieľové publikum

Občania Bojníc (rezidenti), turisti/návštevníci, prevádzky (partneri) — každá skupina
potrebuje inú výzvu na akciu (CTA) smerujúcu do appky.

## 3. Navrhovaná obsahová štruktúra (ČO — copy dodá CEO)

> Reviewer navrhuje **kostru sekcií**; **texty, čísla a obrázky dodá CEO** (W2/R-2026-29).
> Kde chýba schválený obsah, sekcia sa vynechá — radšej menej než vymyslené.

1. **Hero** — názov programu, jednovetový claim, primárne CTA („Získať kartu" → registrácia v appke).
2. **Čo je Bojnická karta** — krátky faktický popis (rezident vs turista).
3. **Pre koho / typy kariet** — rezident a turista (rámcovo; detail rieši appka).
4. **Ako to funguje** — 3 kroky: registrácia → karta v mobile/QR → zľava u prevádzky.
5. **Pre prevádzky** — krátko + CTA na prihlásenie prevádzky (appka).
6. **Časté otázky (FAQ)** — voliteľné, obsah CEO.
7. **Pätička** — kontakt na program, odkaz na zásady ochrany osobných údajov (appka/mesto),
   odkazy do appky (registrácia, prihlásenie prevádzky/MsÚ).

## 4. Acceptance (rámcové, pre prvú iteráciu)

- Kostra sekcií 1–5 + pätička nasadená; texty tam, kde ich CEO dodal (inak placeholder
  jasne označený, nie vymyslený obsah).
- SK jazyk, responzívne, WCAG 2.1 AA (W3).
- Funkčné CTA/odkazy na `app.kartabojnicana.sk` (W5).
- Žiadne osobné údaje, žiadny zber (W1); žiadne tajomstvá (W6).
- CI zelené; živá ukážka pre CEO (kánon §4b).

## 5. Mimo rozsahu (zatiaľ)

Kontaktný formulár / newsletter (W1 — nový GDPR posudok + CEO gate), viacjazyčnosť,
verejný katalóg partnerov (to je UC-08 v appke, M2). Zmena rozsahu = CEO gate.

## 6. Otvorené pre CEO

- **Obsah/copy** jednotlivých sekcií (bez neho ostávajú placeholdery).
- **Tech stack** webu — necháva sa na implementera (návrh: jednoduchý statický/Next.js);
  ak CEO preferuje konkrétny, nech uvedie.
- **Branding** (logo, farby mesta, foto) — dodá CEO.
