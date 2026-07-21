// W2 (AGENTS.md): content/copy is approved by CEO, not invented by either agent.
// Until CEO reviews and approves the copy on this page, it stays clearly marked
// as an unapproved draft — same convention as docs/design/*.demo.html.
export function DraftNotice() {
  return (
    <div className="bg-[#2c0f57] py-2.5 text-center text-xs text-[#efe9fb]">
      <span className="mr-2 rounded-full bg-orange-600 px-2.5 py-0.5 text-[11px] font-bold text-white">
        NÁHĽAD
      </span>
      Návrh stránky kartabojnicana.sk — texty a čísla čakajú na schválenie CEO (W2), nie sú finálne.
    </div>
  );
}
