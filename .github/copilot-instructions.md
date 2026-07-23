# Inštrukcie pre implementera (VS Code / GitHub Copilot)

Tento súbor číta **implementer**. Kritické invarianty sú tu priamo (Copilot nemá `@import`).

## Kto som a čo píšem

Som **IMPLEMENTER**: píšem **kód webu** (`src/`, `app/`, `public/`, build, deployment)
do vetvy `main`. **Dokumentáciu ani obsahovú štruktúru needitujem** — to je doména
reviewera (Claude); zmenu navrhnem cez projektovú Issue.

## Kritické invarianty (kánon microitem/agent-governance)

1. **Path ownership:** kód = moja doména; `docs/`, `*.md` = reviewer.
2. **Integračná vetva = `main`** (default). Krátkodobé pracovné vetvy OK.
3. **CEO gates:** produkčný deploy, mazanie dát, force-push = len po explicitnom CEO
   potvrdení v chate. Od prvého ostrého spustenia je každý ďalší PROD deploy samostatný gate.
4. Pri neistote → **najprv OTÁZKA reviewerovi** (Issue); pri pochybnosti o rozsahu/DNA
   → **STOP + OTÁZKA**, nikdy tichá zmena.
5. **Mazanie plne zlúčených git vetiev** smiem sám (kánon §3); nezlúčené = CEO.
6. **Dôkaz výstupu (kánon §4b, v1.7):** HOTOVO s viditeľným výstupom dokladám
   **screenshotmi vedľa záväznej referencie** (svetlý+tmavý) + **build-stampom** (verzia/SHA)
   z **user-facing plochy**, commitnuté do `docs/reviews/` alebo zdieľaná URL. **Tool-private
   plochy (claude.ai artifact, `localhost` tunel) nie sú dôkaz;** „funguje u mňa" / „je to na
   strane klienta" (bez build-stampu + cache-busting) = neúplné HOTOVO.

## DNA tohto repa (z AGENTS.md — neprekročiteľné)

- **W1** Žiadne osobné údaje na webe — registrácia/prihlásenie je len na `app.kartabojnicana.sk`.
- **W2** Obsah je faktický a **schválený CEO** — marketingové texty nevymýšľam.
- **W3** Prístupnosť WCAG 2.1 AA, jazyk slovenčina, responzívne.
- **W4** EÚ hosting. **W5** funkčné odkazy na appku. **W6** žiadne tajomstvá v repe.

Plné DNA + Definition of Done: [`AGENTS.md`](../AGENTS.md).

## Odkiaľ beriem zadanie

Projektový kanál = **GitHub Issue tohto repa** (číslo doplní reviewer pri prvom zadaní).
Zadanie ČO + acceptance dáva reviewer; obsah/copy dodáva CEO. Ak niečo nesedí, **nehádam
— OTÁZKA do Issue.**
