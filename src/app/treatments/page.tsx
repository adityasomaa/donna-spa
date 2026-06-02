import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/sections/CTASection";
import SpaGraphic from "@/components/graphics/SpaGraphic";
import { treatments, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Treatments & Prices",
  description:
    "Balinese massage, reflexology, lulur body scrub, warm stone, facials, hair spa and nail care at Donna Spa Kuta.",
};

const groupTones = ["jade", "clay", "sage"] as const;
const groupVariants = ["hands", "stones", "petals"] as const;

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="The menu"
        title="Treatments made for unwinding"
        intro="From a classic Balinese massage to a soothing hair spa, every treatment is performed by skilled therapists using quality oils and time-honoured technique."
      />

      <section className="py-24 md:py-32">
        <div className="container-x space-y-24">
          {treatments.map((group, gi) => (
            <div key={group.title} className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Reveal>
                  <div className="mb-6 overflow-hidden rounded-3xl">
                    <SpaGraphic
                      variant={groupVariants[gi]}
                      tone={groupTones[gi]}
                      className="aspect-[5/3] w-full"
                      label={group.title}
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.35em] text-clay">
                    0{gi + 1} — Collection
                  </p>
                  <h2 className="mt-3 font-display text-4xl text-forest">
                    {group.title}
                  </h2>
                  <p className="mt-3 text-charcoal/70">{group.blurb}</p>
                </Reveal>
              </div>

              <ul className="divide-y divide-forest/10 border-t border-forest/10">
                {group.items.map((t, i) => (
                  <Reveal key={t.name} delay={i * 0.05} as="li">
                    <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-md">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-2xl text-forest">
                            {t.name}
                          </h3>
                          {t.tag && (
                            <span className="rounded-full bg-clay/10 px-3 py-0.5 text-xs uppercase tracking-[0.2em] text-clay">
                              {t.tag}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                          {t.desc}
                        </p>
                        <p className="mt-2 text-sm text-charcoal/50">
                          {t.durations}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-4">
                        <span className="font-display text-xl text-jade">
                          {t.price}
                        </span>
                        <a
                          href={whatsappLink(
                            `Hi Donna Spa, I'd like to book the ${t.name} (${t.durations}). Is it available?`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-jade"
                        >
                          Book
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}

          <Reveal>
            <p className="rounded-2xl bg-cream px-6 py-5 text-center text-sm text-charcoal/60">
              Prices are indicative and confirmed on reservation. Couples rooms and
              packages available on request — just ask on WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
