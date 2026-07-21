# web-kartabojnicana — prezentačná stránka programu Bojnická karta

Verejný web na doméne **`kartabojnicana.sk`**, ktorý informuje o programe **Bojnická
karta** a odkazuje na aplikáciu **`app.kartabojnicana.sk`**.

> **Toto nie je aplikácia.** Samotný systém (registrácia, karty, uplatnenie zliav,
> admin) žije v repe [`microitem/kartabojnicana`](https://github.com/microitem/kartabojnicana).
> Tento web je len prezentačný — **nespracúva osobné údaje** (DNA W1).

## Governance

Riadi sa spoločným kánonom [`microitem/agent-governance`](https://github.com/microitem/agent-governance)
v dvojagentovom režime (reviewer ⇄ implementer ⇄ CEO). Vstupné body:

- [`AGENTS.md`](AGENTS.md) — DNA repa, tvrdé hranice (W1–W6), Definition of Done.
- [`docs/GOVERNANCE-OVERRIDE.md`](docs/GOVERNANCE-OVERRIDE.md) — roly, kanál, vetva.
- [`docs/00-zamer.md`](docs/00-zamer.md) — zámer + obsahová štruktúra + acceptance.

**Vlastníctvo:** dokumentáciu/štruktúru píše reviewer (Claude), kód implementer (VS Code),
**obsah/copy dodáva CEO** (mesto sa tvorby nezúčastňuje — `kartabojnicana` R-2026-29).
