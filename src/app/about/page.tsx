import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import SpaGraphic from "@/components/graphics/SpaGraphic";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Donna Spa Bakung Sari is an authentic Balinese wellness sanctuary in Kuta, part of the Carla Spa Group.",
};

const philosophy = [
  {
    title: "Tradition",
    body: "Time-honoured Balinese techniques — long flowing strokes, acupressure and warm oils — performed by therapists who learned them by heart.",
  },
  {
    title: "Hospitality",
    body: "Tri Hita Karana, the Balinese spirit of harmony, guides how we welcome every guest: warmly, patiently, like family.",
  },
  {
    title: "Care",
    body: "Clean rooms, fresh linens and genuine attention. Your comfort and wellbeing come before everything else.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Rooted in Bali, made for you"
        intro={`${site.fullName} is a warm neighbourhood spa in the heart of Kuta — part of the ${site.group}, with the same promise wherever you find us: leave refreshed.`}
      />

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A calm escape, just steps from Kuta Beach"
              intro="Donna Spa sits along Jalan Bakung Sari, right in front of the Kuta Beach Club Hotel arcade. After a day in the sun and the surf, our doors open onto a quieter world: soft light, the scent of frangipani, and the gentle quiet of a place built purely for rest."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-charcoal/70">
                As part of the Carla Spa Group — a family of beloved spas and
                beachfront retreats across Bali and the Gilis — we bring a
                trusted standard of care, with the friendliness of a local
                favourite.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Reveal>
              <SpaGraphic variant="lotus" tone="jade" className="aspect-[3/4] w-full rounded-2xl" label="Lotus" />
            </Reveal>
            <Reveal delay={0.1}>
              <SpaGraphic variant="leaf" tone="sage" className="mt-8 aspect-[3/4] w-full rounded-2xl" label="Leaf" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we believe"
            title="Three things we never compromise on"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} as="article">
                <article className="h-full rounded-3xl border border-forest/10 bg-sand p-8">
                  <span className="font-display text-5xl text-gold/60">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-forest">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-jade py-20 text-cream">
        <div className="container-x grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="font-display text-5xl text-gold">{s.value}</p>
              <p className="mt-2 text-sm text-sage">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
