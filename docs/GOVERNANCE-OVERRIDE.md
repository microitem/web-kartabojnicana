# GOVERNANCE-OVERRIDE.md — aktivácia dvojagentového režimu (web-kartabojnicana)

> **Typ:** governance override | **Stav:** SCHVÁLENÉ (R-2026-30 v `kartabojnicana`)
> **Vlastník:** REVIEWER (Claude) | **Verzia:** 1.0 | **Dátum:** 2026-07-19
> **Brána:** CEO
>
> Kánon: [`microitem/agent-governance`](https://github.com/microitem/agent-governance).

---

## 1. Režim

Repo **web-kartabojnicana** (prezentačná stránka programu Bojnická karta) beží v
**dvojagentovom režime** (opt-in podľa kánonu §6). Technické fázy akceptuje REVIEWER;
CEO vstupuje na strategické/nezvratné brány a **dodáva obsah** (mesto sa nezúčastňuje,
R-2026-29).

## 2. Roly

| Rola | Kto | Doména |
|---|---|---|
| **CEO** | Peter (vlastník programu) | gates, rozsah, **obsah/copy stránky** |
| **REVIEWER** | Claude (cloud agent) | `docs/`, `*.md`, štruktúra obsahu, acceptance, review |
| **IMPLEMENTER** | VS Code agent (Copilot) | `src/`, `app/`, `public/`, build, deployment |

## 3. Komunikačný kanál

- **Projektový kanál = GitHub Issue v `microitem/web-kartabojnicana`** (číslo doplní
  reviewer pri prvom zadaní). Formát správ podľa kánonu §4 (`## [NN] OD -> PRE | dátum | STAV`,
  najnovšia navrchu, komentáre sa nepoužívajú).
- Program a rozhodnutia sú nadradené v repe `kartabojnicana` (`rozhodnutia.md`) — tento
  web z nich vychádza (R-2026-28/29/30). Cross-repo rozhodnutie sa zapisuje tam.

## 4. Integračná vetva

- **Integračná vetva = `main`** (default). `claude/<slug>` ako trvalý mainline zakázaný (kánon §5).
- Reviewer píše dokumentačné cesty, implementer kódové — obaja do `main`, podľa CODEOWNERS.

## 5. Precedencia

`AGENTS.md` (DNA) > tento override > kánon `AGENT-COLLABORATION.md` > runtime pravidlá agenta.
