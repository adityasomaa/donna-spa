import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/sections/CTASection";
import SpaGraphic from "@/components/graphics/SpaGraphic";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A glimpse of the calm, clean and welcoming spaces at Donna Spa Kuta.",
};

type Tile = {
  variant: Parameters<typeof SpaGraphic>[0]["variant"];
  tone: Parameters<typeof SpaGraphic>[0]["tone"];
  span: string;
  ratio: string;
  caption: string;
};

const tiles: Tile[] = [
  { variant: "stones", tone: "jade", span: "md:col-span-2 md:row-span-2", ratio: "aspect-square", caption: "Warm stone ritual" },
  { variant: "lotus", tone: "clay", span: "", ratio: "aspect-[4/5]", caption: "Frangipani welcome" },
  { variant: "leaf", tone: "sage", span: "", ratio: "aspect-[4/5]", caption: "Tropical calm" },
  { variant: "drops", tone: "gold", span: "", ratio: "aspect-[4/5]", caption: "Scented oils" },
  { variant: "waves", tone: "jade", span: "md:col-span-2", ratio: "aspect-[16/9]", caption: "A quieter world" },
  { variant: "candle", tone: "clay", span: "", ratio: "aspect-[4/5]", caption: "Soft light" },
  { variant: "hands", tone: "sage", span: "", ratio: "aspect-[4/5]", caption: "Skilled hands" },
  { variant: "petals", tone: "gold", span: "md:col-span-2", ratio: "aspect-[16/9]", caption: "Little details" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse of the calm"
        intro="Bespoke artwork stands in for photography while our gallery is being shot. The feeling, though, is exactly this: soft, clean and serene."
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {tiles.map((t, i) => (
              <Reveal
                key={i}
                delay={(i % 4) * 0.06}
                className={`group relative overflow-hidden rounded-3xl ${t.span}`}
              >
                <SpaGraphic
                  variant={t.variant}
                  tone={t.tone}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  label={t.caption}
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-forest/60 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-display text-lg italic text-cream">
                    {t.caption}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-sm text-charcoal/55">
              Photography coming soon — these graphics are placeholders for the real
              thing.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
