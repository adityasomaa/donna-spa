// Frangipani (kamboja) — Donna Spa's logo mark.
export default function Frangipani({
  className = "",
  title = "Donna Spa",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      <g>
        {[0, 72, 144, 216, 288].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 50 50)`}>
            <path
              d="M50 50 C 40 38, 38 20, 50 8 C 62 20, 60 38, 50 50 Z"
              fill="currentColor"
              opacity="0.92"
            />
            <path
              d="M50 12 C 46 22, 46 34, 50 46"
              stroke="var(--color-gold)"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>
        ))}
        <circle cx="50" cy="50" r="6.5" fill="var(--color-gold)" />
      </g>
    </svg>
  );
}
