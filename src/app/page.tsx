import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import Reviews from "@/components/sections/Reviews";
import CTASection from "@/components/sections/CTASection";
import SpaGraphic from "@/components/graphics/SpaGraphic";
import Frangipani from "@/components/graphics/Frangipani";
import { stats, treatments } from "@/lib/site";

const featured = [
  treatments[0].items[0], // Balinese Massage
  treatments[0].items[2], // Warm Stone
  treatments[2].items[1], // Hair Spa
];
const featuredTones = ["jade", "clay", "sage"] as const;
const featuredVariants = ["hands", "stones", "drops"] as const;

const values = [
  {
    title: "Skilled, caring therapists",
    body: "Guests return for their favourite therapists year after year — that says it all.",
    variant: "hands",
  },
  {
    title: "Spotlessly clean",
    body: "Pristine, freshly prepared rooms and linens for every single guest.",
    variant: "drops",
  },
  {
    title: "Honest, fair pricing",
    body: "Premium Balinese care in the heart of Kuta — without the resort markup.",
    variant: "petals",
  },
  {
    title: "Open late, every day",
    body: "From 9am to 11pm, drop in whenever your day winds down.",
    variant: "candle",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Intro / about teaser */}
      <section className="relative py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-50px_rgba(28,46,39,0.6)]">
                <SpaGraphic
                  variant="waves"
                  tone="jade"
                  className="aspect-[5/6] w-full"
                  label="Calm waters"
                />
              </div>
            </Reveal>
            <Frangipani className="float-slow absolute -right-6 -top-6 h-24 w-24 text-clay/50" />
          </div>

          <div>
            <SectionHeading
              eyebrow="Welcome to Donna Spa"
              title="A little ritual of calm, in the middle of it all"
              intro="Tucked along Jalan Bakung Sari, Donna Spa is a warm, unhurried retreat where traditional Balinese techniques meet genuine, heartfelt hospitality. Step in from the buzz of Kuta and let skilled hands do the rest."
            />
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <p className="font-display text-4xl text-jade">{s.value}</p>
                  <p className="mt-1 text-sm text-charcoal/60">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured treatments */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Signature treatments"
              title="Where every guest finds their favourite"
            />
            <Reveal>
              <Link
                href="/treatments"
                className="rounded-full border border-forest/20 px-6 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
              >
                See full menu
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} as="article">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-sand shadow-[0_18px_50px_-34px_rgba(28,46,39,0.6)] transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="overflow-hidden">
                    <SpaGraphic
                      variant={featuredVariants[i]}
                      tone={featuredTones[i]}
                      className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105"
                      label={t.name}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    {t.tag && (
                      <span className="mb-3 inline-flex w-fit rounded-full bg-clay/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-clay">
                        {t.tag}
                      </span>
                    )}
                    <h3 className="font-display text-2xl text-forest">{t.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">
                      {t.desc}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-forest/10 pt-4 text-sm">
                      <span className="text-charcoal/60">{t.durations}</span>
                      <span className="font-medium text-jade">{t.price}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why guests love us"
            title="Small details, big difference"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07} as="article">
                <article className="flex h-full flex-col rounded-3xl border border-forest/10 bg-cream p-7">
                  <div className="mb-5 w-14 overflow-hidden rounded-xl">
                    <SpaGraphic
                      variant={v.variant}
                      tone={i % 2 === 0 ? "jade" : "clay"}
                      className="aspect-square w-full"
                      label={v.title}
                    />
                  </div>
                  <h3 className="font-display text-xl text-forest">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <CTASection />
    </>
  );
}
