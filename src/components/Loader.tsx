"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Frangipani from "./graphics/Frangipani";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2100);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest text-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Frangipani className="h-16 w-16 text-cream" />
          </motion.div>

          <motion.div
            className="mt-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="font-display text-2xl italic tracking-wide">Donna Spa</p>
          </motion.div>

          <motion.div
            className="mt-5 h-px w-40 overflow-hidden bg-cream/20"
          >
            <motion.div
              className="h-full bg-gold"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.7, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.div>

          <motion.p
            className="mt-4 text-xs uppercase tracking-[0.4em] text-sage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Kuta · Bali
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
