import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={`mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] ${
              dark ? "text-gold" : "text-clay"
            }`}
          >
            <span className="h-px w-6 bg-current" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-display text-4xl leading-[1.05] text-balance md:text-5xl ${
            dark ? "text-cream" : "text-forest"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-base leading-relaxed ${
              dark ? "text-sage" : "text-charcoal/70"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
