"use client";

import { motion } from "framer-motion";
import Frangipani from "./graphics/Frangipani";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest pb-20 pt-36 text-cream md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-jade/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-clay/20 blur-3xl" />
      </div>
      <Frangipani className="float-slow pointer-events-none absolute right-[6%] top-[28%] hidden h-28 w-28 text-gold/30 md:block" />

      <div className="container-x relative">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-gold"
        >
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </motion.p>
        <h1 className="max-w-3xl overflow-hidden font-display text-5xl leading-[1.02] text-balance md:text-7xl">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            {title}
          </motion.span>
        </h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-sage"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
