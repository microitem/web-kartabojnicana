import Link from "next/link";
import { Logo } from "./Logo";
import { appLinks } from "@/lib/appLinks";

const NAV = [
  { href: "#co-je", label: "Čo je karta" },
  { href: "#pre-koho", label: "Pre koho" },
  { href: "#ako-funguje", label: "Ako funguje" },
  { href: "#prevadzky", label: "Pre prevádzky" },
  { href: "#faq", label: "Otázky" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="inline-flex">
          <Logo />
        </Link>
        <nav aria-label="Hlavné menu" className="hidden gap-6 text-sm font-medium text-gray-700 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline pb-0.5 transition-colors duration-200 hover:text-gray-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={appLinks.registerTourist}
          className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-md active:translate-y-0"
        >
          Získať kartu
        </a>
      </div>
    </header>
  );
}
