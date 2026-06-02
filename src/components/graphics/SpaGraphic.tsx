// Bespoke SVG "placeholder" graphics used in place of photography.
// Each variant is a calm, brand-coloured composition.

type Variant =
  | "leaf"
  | "stones"
  | "lotus"
  | "candle"
  | "drops"
  | "waves"
  | "hands"
  | "petals";

const palettes: Record<string, [string, string]> = {
  jade: ["#e11484", "#a8105f"], // pink
  sage: ["#4eb85a", "#2e8b57"], // bright green
  clay: ["#159a4e", "#0d6b37"], // deep green
  gold: ["#7cc242", "#4e8f2a"], // leaf green
  cream: ["#fbd9ea", "#f3aacf"], // blush pink
};

export default function SpaGraphic({
  variant = "leaf",
  tone = "jade",
  className = "",
  label,
}: {
  variant?: Variant;
  tone?: keyof typeof palettes;
  className?: string;
  label?: string;
}) {
  const [c1, c2] = palettes[tone] ?? palettes.jade;
  const id = `${variant}-${tone}`;
  const ink = "rgba(251,248,241,0.92)";

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label ?? `${variant} illustration`}
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <radialGradient id={`r-${id}`} cx="0.7" cy="0.25" r="0.9">
          <stop offset="0" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#g-${id})`} />
      <rect width="400" height="300" fill={`url(#r-${id})`} />

      {variant === "leaf" && (
        <g
          stroke={ink}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.95"
        >
          <path d="M200 270 C 200 180, 150 120, 120 70" />
          {[230, 200, 168, 134, 100].map((y, i) => (
            <g key={y}>
              <path d={`M${200 - i * 18} ${y} C ${150 - i * 14} ${y - 26}, ${120 - i * 12} ${y - 18}, ${96 - i * 12} ${y - 50}`} />
              <path d={`M${200 + i * 18} ${y} C ${250 + i * 14} ${y - 26}, ${280 + i * 12} ${y - 18}, ${304 + i * 12} ${y - 50}`} />
            </g>
          ))}
        </g>
      )}

      {variant === "stones" && (
        <g>
          {[
            { cx: 200, cy: 210, rx: 92, ry: 26, o: 0.95 },
            { cx: 200, cy: 168, rx: 74, ry: 21, o: 0.85 },
            { cx: 200, cy: 132, rx: 56, ry: 16, o: 0.75 },
            { cx: 200, cy: 104, rx: 38, ry: 12, o: 0.65 },
          ].map((s, i) => (
            <ellipse
              key={i}
              cx={s.cx}
              cy={s.cy}
              rx={s.rx}
              ry={s.ry}
              fill={ink}
              opacity={s.o}
            />
          ))}
          <ellipse cx={172} cy={96} rx={10} ry={4} fill={c2} opacity="0.5" />
        </g>
      )}

      {variant === "lotus" && (
        <g transform="translate(200 160)">
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <path
              key={deg}
              d="M0 0 C -22 -40, -16 -90, 0 -120 C 16 -90, 22 -40, 0 0 Z"
              transform={`rotate(${deg})`}
              fill={ink}
              opacity="0.9"
            />
          ))}
          <circle r="16" fill={c2} opacity="0.6" />
        </g>
      )}

      {variant === "candle" && (
        <g>
          <rect x="168" y="170" width="64" height="80" rx="8" fill={ink} opacity="0.92" />
          <ellipse cx="200" cy="170" rx="32" ry="9" fill={c2} opacity="0.6" />
          <path
            d="M200 140 C 188 152, 188 166, 200 168 C 212 166, 212 150, 200 140 Z"
            fill="var(--color-gold)"
          />
          <path d="M200 168 L200 158" stroke={c2} strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {variant === "drops" && (
        <g fill={ink}>
          {[
            [140, 120, 1],
            [210, 90, 0.8],
            [270, 150, 1.1],
            [180, 190, 0.9],
          ].map(([x, y, s], i) => (
            <path
              key={i}
              transform={`translate(${x} ${y}) scale(${s})`}
              d="M0 -34 C 18 -8, 22 6, 0 26 C -22 6, -18 -8, 0 -34 Z"
              opacity={0.85}
            />
          ))}
        </g>
      )}

      {variant === "waves" && (
        <g stroke={ink} strokeWidth="3" fill="none" opacity="0.85" strokeLinecap="round">
          {[90, 130, 170, 210, 250].map((y) => (
            <path
              key={y}
              d={`M-10 ${y} C 80 ${y - 26}, 140 ${y + 26}, 220 ${y} S 360 ${y - 26}, 410 ${y}`}
            />
          ))}
        </g>
      )}

      {variant === "hands" && (
        <g stroke={ink} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.95">
          <path d="M120 230 C 150 180, 250 180, 280 230" />
          <ellipse cx="200" cy="150" rx="60" ry="40" />
          <path d="M150 150 C 175 130, 225 130, 250 150" />
        </g>
      )}

      {variant === "petals" && (
        <g fill={ink} opacity="0.9">
          {[
            [110, 90, 20],
            [300, 110, -15],
            [160, 210, 35],
            [260, 220, -25],
            [200, 130, 5],
          ].map(([x, y, r], i) => (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx={34}
              ry={16}
              transform={`rotate(${r} ${x} ${y})`}
              opacity={0.55 + (i % 3) * 0.15}
            />
          ))}
        </g>
      )}
    </svg>
  );
}
