# 01 — Zadanie: implementácia prezentačnej stránky kartabojnicana.sk

> **Typ:** implementačné zadanie (ČO + acceptance) | **Stav:** NA IMPLEMENTÁCIU (DEV → CEO gate)
> **Vlastník:** REVIEWER (Claude) | **Verzia:** 1.0 | **Dátum:** 2026-07-21
> **Brána:** CEO (schválenie na DEV pred produkciou)
> **Zdroj:** [`00-zamer.md`](00-zamer.md), DNA [`../AGENTS.md`](../AGENTS.md) W1–W6,
> rozhodnutia `kartabojnicana` R-2026-28…34
> **Vizuálna referencia:** [`design/kartabojnicana-web.demo.html`](design/kartabojnicana-web.demo.html),
> [`design/karta-bojnicana-znacka.demo.html`](design/karta-bojnicana-znacka.demo.html),
> [`design/kartabojnicana-web-admin.demo.html`](design/kartabojnicana-web-admin.demo.html)

Reviewer zadáva **ČO** a acceptance. **AKO** (framework, štruktúra, CSS) je na implementérovi;
odporúčaný stack je konzistentný s appkou (Next.js + TS), ale voľba je jeho.

---

## 1. Kontext

Nový repozitár prezentačnej stránky `kartabojnicana.sk` (R-2026-30). Zatiaľ bez kódu — len zámer
a dizajnové ukážky. Web **propaguje kartu a odkazuje do appky** `app.kartabojnicana.sk`; sám
nespracúva osobné údaje (W1).

## 2. Čo treba spraviť (ČO)

### 2.1 Verejná stránka (podľa `design/kartabojnicana-web.demo.html`)
- Sekcie: **Hero** (názov „Karta Bojničana", znak Veža, claim „Mesto, ktoré sa vám oplatí.",
  CTA „Získať kartu" → registrácia v appke), **Čo je Karta Bojničana**, **Pre koho / typy kariet**
  (rezident/turista), **Ako to funguje** (3 kroky), **Pre prevádzky** (CTA do appky),
  **Katalóg partnerov/zliav** (placeholder — obsah dodá prevádzkovateľ), **FAQ**, **Pätička**.
- **Značka (R-2026-34):** znak **Veža** + wordmark „Karta Bojničana", tri-band farby. **Dobré
  Bojnice nie je hlavné logo** — v pätke len „Prevádzkuje platforma Dobré Bojnice" (R-2026-31).
- Pätička: copyright „© Dobré Bojnice · Karta Bojničana", odkaz na zásady OOÚ (v appke/u
  prevádzkovateľa), pravdivé odkazy do appky (W5).

### 2.2 Obsah (W2)
- Texty faktické; **žiadne vymyslené čísla/zľavy/štatistiky**. Kde chýba schválený obsah CEO →
  sekcia sa vynechá alebo jasne označený placeholder (nie vymyslené).

### 2.3 Admin/CMS (podľa `design/kartabojnicana-web-admin.demo.html`) — voliteľné, druhá iterácia
- Správa obsahu webu (sekcie, katalóg partnerov, podujatia, FAQ, publikovanie). **Bez osobných
  údajov (W1)** — spravuje len obsah webu. Ak sa nasadzuje, samostatná HOTOVO správa.

## 3. Acceptance kritériá (testovateľné)

- **AC-W1** Sekcie Hero + „Čo je" + „Pre koho" + „Ako funguje" + „Pre prevádzky" + pätička sú
  nasadené; obsah je faktický alebo označený placeholder (žiadny vymyslený obsah — W2).
- **AC-W2** Značka = Veža + „Karta Bojničana"; Dobré Bojnice len ako prevádzkovateľ v pätke.
- **AC-W3** **WCAG 2.1 AA**, jazyk **slovenčina** (W3); responzívne (mobil/desktop).
- **AC-W4** **Žiadne osobné údaje** na webe — žiadny registračný/login formulár na tomto webe;
  všetky akcie vedú do appky (W1/W5). Odkazy do appky sú funkčné.
- **AC-W5** Hosting v **EÚ** (W4); žiadne tajomstvá v repe, len `.env.example` (W6).
- **AC-W6** Lint/build/typová kontrola zelené (DoD).

## 4. Postup nasadenia (brána)

1. **DEV najprv:** nasadiť na **vývojový/staging server** (nie produkcia), pripraviť verejný náhľad.
2. **HOTOVO správa** do Issue #1 (tohto repa) s odkazom na DEV náhľad a splnením AC-W1…W6.
3. **CEO schválenie** obsahu a vizuálu na DEV.
4. **Až po schválení:** nasadiť na produkčnú doménu `kartabojnicana.sk` (root). **Produkčné
   nasadenie = CEO gate.**

## 5. Mimo rozsah

Zber osobných údajov, registrácia/login na webe, kontaktný formulár/newsletter (= nový rozsah,
CEO gate + GDPR posúdenie, W1). Tie sa na tomto webe nerobia.
