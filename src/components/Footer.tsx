import Link from "next/link";
import Image from "next/image";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-forest text-cream">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-2xl bg-white/95 px-4 py-3">
            <Image
              src="/logo.png"
              alt="Donna Spa"
              width={477}
              height={311}
              className="h-16 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sage">
            {site.tagline}. {site.taglineId}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-sage/70">
            Part of {site.group}
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Visit</h3>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-cream/75">
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <p>{site.address.city}</p>
            <p>{site.address.region}</p>
            <p className="pt-2 text-gold">{site.hours}</p>
          </address>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Reach us</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            <li>
              <a
                href={whatsappLink("Hi Donna Spa, I'd like to book a treatment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                WhatsApp · {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${site.phoneRaw}`}
                className="transition-colors hover:text-cream"
              >
                Call {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                Google Maps
              </a>
            </li>
            <li>
              <a
                href={site.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                TripAdvisor reviews
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-sage md:flex-row">
          <p>© {new Date().getFullYear()} Donna Spa Bakung Sari. All rights reserved.</p>
          <p>Made with care in Kuta, Bali.</p>
        </div>
      </div>
    </footer>
  );
}
