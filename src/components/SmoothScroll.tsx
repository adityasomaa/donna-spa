"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Lenis smooth scroll — DESKTOP ONLY.
// Disabled on tablet/mobile and touch (coarse-pointer) devices.
export default function SmoothScroll() {
  useEffect(() => {
    const isDesktop = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine)"
    ).matches;

    if (!isDesktop) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 0,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
