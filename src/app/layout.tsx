import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://donnaspa.example.com"),
  title: {
    default: "Donna Spa Bakung Sari · Balinese Massage & Spa in Kuta, Bali",
    template: "%s · Donna Spa",
  },
  description: site.description,
  keywords: [
    "Donna Spa",
    "spa Kuta Bali",
    "Balinese massage Kuta",
    "reflexology Bali",
    "massage Bakung Sari",
    "Carla Spa Group",
  ],
  openGraph: {
    title: "Donna Spa Bakung Sari · Kuta, Bali",
    description: site.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c2e27",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="grain">
        <Loader />
        <SmoothScroll />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
