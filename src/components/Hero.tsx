"use client";

import { motion } from "framer-motion";
import { site, whatsappLink } from "@/lib/site";
import Frangipani from "./graphics/Frangipani";
import SpaGraphic from "./graphics/SpaGraphic";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      {/* Soft organic backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-sage/25 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-clay/15 blur-3xl" />
        <Frangipani className="float-slow absolute right-[8%] top-[18%] hidden h-24 w-24 text-gold/40 lg:block" />
      </div>

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-jade/20 bg-cream/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-jade"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            Kuta · Bali — part of {site.group}
          </motion.p>

          <h1 className="font-display text-[3.1rem] leading-[0.98] text-forest text-balance sm:text-7xl">
            {["A Sanctuary", "of Balinese", "Calm."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease }}
                >
                  {i === 2 ? (
                    <span className="italic text-jade">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-7 max-w-md text-lg leading-relaxed text-charcoal/75"
          >
            Skilled therapists, heartfelt hospitality, and a clean, calming escape from
            the busy streets of Kuta. {site.taglineId}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={whatsappLink("Hi Donna Spa, I'd like to book a treatment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-jade px-8 py-4 text-center font-medium text-cream transition-transform hover:scale-[1.03]"
            >
              Book via WhatsApp
            </a>
            <a
              href="/treatments"
              className="rounded-full border border-forest/20 px-8 py-4 text-center font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              View treatments
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex items-center gap-6 text-sm text-charcoal/60"
          >
            <span className="font-display text-2xl text-jade">4.8★</span>
            <span className="max-w-[16rem] leading-snug">
              Rated by happy guests on Google &amp; TripAdvisor
            </span>
          </motion.div>
        </div>

        {/* Graphic collage (placeholder imagery) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(28,46,39,0.6)]">
            <SpaGraphic variant="stones" tone="jade" className="aspect-[4/5] w-full" label="Massage stones" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="absolute -bottom-6 -left-6 w-40 overflow-hidden rounded-2xl shadow-xl ring-4 ring-sand sm:w-48"
          >
            <SpaGraphic variant="lotus" tone="clay" className="aspect-square w-full" label="Lotus flower" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="absolute -right-4 top-8 hidden w-36 overflow-hidden rounded-2xl shadow-xl ring-4 ring-sand sm:block"
          >
            <SpaGraphic variant="leaf" tone="sage" className="aspect-square w-full" label="Tropical leaf" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
