import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Visit Donna Spa at Jl. Bakung Sari No. 81, Kuta, Bali. Open daily 09:00–23:00. Book on WhatsApp.",
};

const details = [
  {
    label: "WhatsApp & Phone",
    value: site.phoneDisplay,
    href: whatsappLink("Hi Donna Spa, I'd like to book a treatment."),
    cta: "Chat now",
  },
  {
    label: "Address",
    value: `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.region}`,
    href: site.mapsLink,
    cta: "Open in Maps",
  },
  {
    label: "Opening hours",
    value: site.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & booking"
        title="Come and unwind"
        intro="Booking takes seconds — send us a message on WhatsApp, or just drop by. We’re open every day until 11pm, right in the heart of Kuta."
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          {/* Details + form */}
          <div>
            <Reveal>
              <h2 className="font-display text-3xl text-forest">Reach us directly</h2>
            </Reveal>
            <ul className="mt-8 space-y-6">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.07} as="li">
                  <div className="rounded-2xl border border-forest/10 bg-cream p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-clay">
                      {d.label}
                    </p>
                    <p className="mt-2 text-lg text-forest">{d.value}</p>
                    {d.href && (
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex text-sm font-medium text-jade underline-offset-4 hover:underline"
                      >
                        {d.cta} →
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Booking form */}
          <div>
            <Reveal>
              <div className="rounded-3xl bg-sand-deep p-7 md:p-9">
                <h2 className="font-display text-3xl text-forest">
                  Request a booking
                </h2>
                <p className="mt-2 text-sm text-charcoal/65">
                  Fill this in and we’ll pick it up on WhatsApp.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-forest/10 shadow-[0_30px_80px_-50px_rgba(28,46,39,0.6)]">
              <iframe
                title="Donna Spa Bakung Sari location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.mapsQuery
                )}&output=embed`}
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[0.15]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
