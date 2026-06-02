const words = [
  "Balinese Massage",
  "Reflexology",
  "Lulur Scrub",
  "Warm Stone",
  "Aromatherapy",
  "Hair Spa",
  "Facial",
  "Mani & Pedi",
];

export default function Marquee() {
  return (
    <div className="border-y border-forest/10 bg-forest py-5 text-cream">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center">
          {[...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 font-display text-xl italic tracking-wide">
                {w}
              </span>
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
