// Znak Veža (R-2026-34) — identical mask shape to microitem/kartabojnicana's
// src/components/Logo.tsx and public/brand/veza-mark*.svg, so both properties
// show the same mark.
const MASK_PATH = (
  <>
    <circle cx="50" cy="8" r="3.4" fill="#fff" />
    <rect x="48.6" y="8" width="2.8" height="12" fill="#fff" />
    <path d="M51 9 L64 12.5 L51 16 Z" fill="#fff" />
    <path d="M50 18 L30 58 L70 58 Z" fill="#fff" />
    <rect x="34" y="57" width="32" height="31" fill="#fff" />
    <rect x="27" y="88" width="46" height="7" rx="3" fill="#fff" />
    <rect x="44" y="64" width="12" height="24" rx="6" fill="#000" />
    <rect x="37" y="46" width="26" height="4" rx="2" fill="#000" />
  </>
);

type MarkVariant = "gradient" | "white" | "mono";

function Mark({ variant, size }: { variant: MarkVariant; size: number }) {
  const maskId = `veza-mask-${variant}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        {variant === "gradient" && (
          <linearGradient id="veza-tri-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f56317" />
            <stop offset=".26" stopColor="#ee5411" />
            <stop offset=".52" stopColor="#17b8ec" />
            <stop offset=".78" stopColor="#6a1fb2" />
            <stop offset="1" stopColor="#9c1fca" />
          </linearGradient>
        )}
        <mask id={maskId}>{MASK_PATH}</mask>
      </defs>
      <rect
        width="100"
        height="100"
        fill={variant === "gradient" ? "url(#veza-tri-grad)" : variant === "white" ? "#fff" : "currentColor"}
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}

export function Logo({
  variant = "gradient",
  size = 32,
  wordmark = true,
  className,
}: {
  variant?: MarkVariant;
  size?: number;
  wordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Mark variant={variant} size={size} />
      {wordmark && (
        <span className="text-base font-semibold leading-tight">
          Karta
          <br />
          Bojničana
        </span>
      )}
    </span>
  );
}
