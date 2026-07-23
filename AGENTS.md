# AGENTS.md — DNA repozitára web-kartabojnicana (prezentačná stránka)

> **Čítajú tento súbor oba nástroje natívne** (Claude Code aj VS Code Copilot).
> Obsahuje **iba unikátne DNA tohto repa**, tvrdé hranice a Definition of Done.
> Procesný model (roly, brány, etapy) žije v spoločnom kánone
> [`microitem/agent-governance`](https://github.com/microitem/agent-governance)
> a je aktivovaný v [`docs/GOVERNANCE-OVERRIDE.md`](docs/GOVERNANCE-OVERRIDE.md).

---

## 1. Čo staviame (jednou vetou)

**Verejná prezentačná stránka** programu **Bojnická karta** na doméne
`kartabojnicana.sk` — informuje občanov a turistov o programe a **odkazuje ich na
aplikáciu** `app.kartabojnicana.sk` (registrácia, karta, prevádzky, admin). Nie je to
samotná aplikácia — tá žije v repe [`microitem/kartabojnicana`](https://github.com/microitem/kartabojnicana).

## 2. Neprekročiteľné DNA (tvrdé hranice)

- **W1 — Žiadne osobné údaje.** Web je **informačný**. Registrácia, prihlásenie a
  akékoľvek spracúvanie osobných údajov sa deje **výhradne v aplikácii**
  (`app.kartabojnicana.sk`). Tento web nezbiera ani neukladá osobné údaje. Kontaktný
  formulár či newsletter = **nový rozsah, CEO gate** (a znovu posúdiť GDPR).
- **W2 — Pravdivý obsah, schválený CEO.** Texty, čísla a tvrdenia o programe sú
  **faktické** a schvaľuje ich **CEO** (mesto sa tvorby nezúčastňuje — R-2026-29
  v `kartabojnicana`). Žiadne vymyslené štatistiky, zľavy ani sľuby.
- **W3 — Prístupnosť a jazyk.** Verejný web → **WCAG 2.1 AA**, jazyk **slovenčina**
  (voliteľne ďalšie jazyky pre turistov neskôr = rozšírenie).
- **W4 — EÚ hosting.** Konzistentne s programom; infra rieši implementer.
- **W5 — Pravdivé odkazy na appku.** Odkazy na `app.kartabojnicana.sk` (registrácia
  turistu/rezidenta, prihlásenie prevádzky / overovateľa platformy) musia byť správne a funkčné.
- **W6 — Žiadne tajomstvá v repe.** `.env`, kľúče, certifikáty mimo git.

## 3. Rozsah

**Je súčasťou:** statická/serverovaná prezentačná stránka — o programe, pre koho je
karta, ako funguje, výhody, odkazy na registráciu v appke, kontakt na program.

**NIE je súčasťou:** samotná aplikácia a jej funkcie (to je repo `kartabojnicana`),
verejný katalóg partnerov a zliav (UC-08 tam, M2), akékoľvek spracúvanie osobných
údajov. Zmena rozsahu = CEO gate.

## 4. Definition of Done (každá iterácia implementera)

1. **CI zelené** (build, lint, prípadne typová kontrola a testy podľa zvoleného stacku).
2. Obsah je faktický a **CEO ho odsúhlasil** (žiadne tiché tvrdenia o programe).
3. **Prístupnosť** (WCAG 2.1 AA) a **SK** jazyk (W3); responzívne.
4. Odkazy na `app.kartabojnicana.sk` funkčné (W5).
5. Žiadne osobné údaje (W1), žiadne tajomstvá v repe (W6).
6. **Používateľsky viditeľný výstup:** HOTOVO je doložené **dôkazom voči záväznej
   referencii** (screenshoty svetlý+tmavý režim) + **build-stamp** (verzia/SHA), na ploche
   viditeľnej všetkým (repo `docs/reviews/` alebo zdieľaná URL) — **kánon §4b (v1.7)**.
   Tool-private plochy (claude.ai artifact, `localhost` tunel) **nie sú dôkaz**; „funguje
   u mňa" ani „je to na strane klienta" (bez build-stampu a nápravy cache) neplatia.

## 5. Jazyk a konvencie

- **Jazyk obsahu a UI: slovenčina.** Kód, identifikátory a commit správy anglicky.
- Dokumenty: `docs/NN-nazov.md`, povinná hlavička podľa kánonu.
- Integračná vetva = `main` (kánon §5).

## 6. Vlastníctvo ciest (kto píše čo do `main`)

| Doména | Cesty | Autor |
|---|---|---|
| Dokumentácia/obsah-štruktúra | `docs/`, `*.md`, `AGENTS.md`, `CLAUDE.md` | **REVIEWER (Claude)** |
| Devlog (výnimka v docs/) | `docs/devlog/` | **IMPLEMENTER** |
| Kód webu | `src/`, `app/`, `public/`, build, deployment, `package.json` | **IMPLEMENTER (VS Code)** |

> **Obsah (copy) dodáva CEO** (W2/R-2026-29). Reviewer dáva štruktúru a acceptance,
> implementer stavia, marketingové texty nevymýšľa ani jeden z agentov.
