import { reviews, site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Stars from "@/components/Stars";
import SectionHeading from "./SectionHeading";

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-sand-deep py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Guest stories"
          title="Loved by travellers in Kuta"
          intro="Real reviews from guests on our TripAdvisor and Google listings. We are grateful for every kind word — and every returning friend."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.08} as="article">
              <figure className="flex h-full flex-col rounded-3xl bg-cream p-7 shadow-[0_18px_50px_-30px_rgba(28,46,39,0.5)]">
                <Stars count={r.rating} className="text-gold" />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-charcoal/85">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-forest/10 pt-4 text-sm">
                  <span className="font-medium text-forest">{r.author}</span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-clay">
                    {r.source}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-charcoal/60">
            See more on{" "}
            <a
              href={site.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-jade underline-offset-4 hover:underline"
            >
              TripAdvisor
            </a>{" "}
            and{" "}
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-jade underline-offset-4 hover:underline"
            >
              Google Maps
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
