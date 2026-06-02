import { site, whatsappLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Frangipani from "@/components/graphics/Frangipani";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-jade py-24 text-cream md:py-32">
      <Frangipani className="float-slow pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-cream/10" />
      <Frangipani className="float-slow pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 text-cream/5" />

      <div className="container-x relative text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            Your escape awaits
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight text-balance md:text-6xl">
            Ready to unwind? Let’s find your perfect treatment.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-sage">
            Message us on WhatsApp and we’ll arrange a time that suits you — walk-ins
            warmly welcome, too.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink("Hi Donna Spa, I'd like to book a treatment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-8 py-4 font-medium text-forest transition-transform hover:scale-[1.03]"
            >
              Book via WhatsApp
            </a>
            <a
              href={`tel:+${site.phoneRaw}`}
              className="rounded-full border border-cream/30 px-8 py-4 font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
