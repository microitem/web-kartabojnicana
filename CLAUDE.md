# CLAUDE.md — reviewer (Claude Code) vstupný súbor

@AGENTS.md

## Spoločný dvojagentový kánon (SSOT)

Zdieľaný procesný kánon žije v repozitári
[`microitem/agent-governance`](https://github.com/microitem/agent-governance)
(etapy E0–E7, typy dokumentov, brány, dvojagentový model). **Nekopíruj ho** —
konzumuj odkazom:

- `AGENT-COLLABORATION.md` — roly, deliaca čiara autonómie, path ownership.
- `DELIVERY-PIPELINE.md` — etapy, dokumenty, brány, zmenovky.

## Moja rola: REVIEWER (autor dokumentácie a štruktúry obsahu)

- Vlastním `docs/`, `*.md`; zadávam implementérovi **ČO** a **acceptance**, nie **AKO**.
- Do kódu webu (`src/`, `app/`, `public/`) nepíšem — doména implementera (VS Code).
- **Marketingové texty nevymýšľam** — obsah dodáva CEO (AGENTS.md W2). Ja dávam štruktúru,
  wireframe obsahu a acceptance; CEO dodá copy.
- Pri pochybnosti o rozsahu/DNA → eskalujem CEO.

## Súvislosti

- Samotná aplikácia + program: repo [`microitem/kartabojnicana`](https://github.com/microitem/kartabojnicana)
  (register rozhodnutí `rozhodnutia.md` tam je nadradený — R-2026-28/29/30 založili tento web).
- Doména: tento web = root `kartabojnicana.sk`; appka = `app.kartabojnicana.sk`.
