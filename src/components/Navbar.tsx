"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Inner pages open with a dark hero; the home page hero is light.
  // While at the top of a dark-hero page (and not showing the solid bar),
  // the navbar uses light colours so it stays visible.
  const onDark = !scrolled && !open && pathname !== "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-sand/85 backdrop-blur-md shadow-[0_1px_0_rgba(28,46,39,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Donna Spa home"
          >
            <Image
              src="/logo.png"
              alt="Donna Spa"
              width={477}
              height={311}
              priority
              className="h-11 w-auto md:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-sm tracking-wide transition-colors ${
                      active
                        ? onDark
                          ? "text-gold"
                          : "text-jade"
                        : onDark
                          ? "text-cream/80 hover:text-cream"
                          : "text-forest/70 hover:text-forest"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href={whatsappLink("Hi Donna Spa, I'd like to book a treatment.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-colors lg:inline-flex ${
              onDark
                ? "bg-gold text-forest hover:bg-cream"
                : "bg-jade text-cream hover:bg-forest"
            }`}
          >
            Book via WhatsApp
          </a>

          {/* Hamburger (mobile + tablet) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`block h-[2px] w-6 rounded-full transition-colors ${
                onDark ? "bg-cream" : "bg-forest"
              }`}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className={`block h-[2px] w-6 rounded-full transition-colors ${
                onDark ? "bg-cream" : "bg-forest"
              }`}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`block h-[2px] w-6 rounded-full transition-colors ${
                onDark ? "bg-cream" : "bg-forest"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-forest text-cream lg:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-1 flex-col justify-center px-8">
              <ul className="space-y-2">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      className={`font-display text-4xl italic ${
                        pathname === item.href ? "text-gold" : "text-cream"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-12 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={whatsappLink("Hi Donna Spa, I'd like to book a treatment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-gold px-6 py-3 font-medium text-forest"
                >
                  Book via WhatsApp
                </a>
                <p className="text-sm text-sage">{site.address.line1}</p>
                <p className="text-sm text-sage">{site.hours}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
