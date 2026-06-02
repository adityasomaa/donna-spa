// Central site data for Donna Spa — real contact details sourced from
// Google Maps / Carla Spa Group branch page for Donna Spa Bakung Sari, Kuta.

export const site = {
  name: "Donna Spa",
  fullName: "Donna Spa Bakung Sari",
  group: "Carla Spa Group",
  tagline: "A Sanctuary of Balinese Calm",
  taglineId: "Rasa tenang khas Bali.",
  description:
    "An authentic Balinese wellness sanctuary in the heart of Kuta. Skilled therapists, heartfelt hospitality, and an honest escape from the busy streets — open daily until late.",
  // Real contact details
  phoneDisplay: "+62 811-3960-6577",
  phoneRaw: "6281139606577",
  whatsapp: "6281139606577",
  email: "hello@donnaspabali.com",
  address: {
    line1: "Jl. Bakung Sari No. 81",
    line2: "Front of Kuta Beach Club Hotel Arcade",
    city: "Kuta, Badung",
    region: "Bali 80361, Indonesia",
  },
  hours: "Open daily · 09:00 – 23:00",
  mapsQuery: "Donna Spa Bakung Sari, Jl. Bakung Sari No.81, Kuta, Bali",
  mapsLink: "https://maps.app.goo.gl/AExEpwQoPzkjXhqG9",
  social: {
    instagram: "https://www.instagram.com/",
    tripadvisor:
      "https://www.tripadvisor.com/Attraction_Review-g297697-d33119417-Reviews-Donna_Spa-Kuta_Kuta_District_Bali.html",
  },
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export type Treatment = {
  name: string;
  desc: string;
  durations: string;
  price: string;
  tag?: string;
};

export type TreatmentGroup = {
  title: string;
  blurb: string;
  items: Treatment[];
};

// Indicative pricing (typical Kuta rates) — confirmed on reservation.
export const treatments: TreatmentGroup[] = [
  {
    title: "Signature Massage",
    blurb: "Traditional Balinese touch, passed down and perfected.",
    items: [
      {
        name: "Balinese Massage",
        desc: "Long, flowing strokes with acupressure to melt deep tension and restore flow.",
        durations: "60 / 90 min",
        price: "from IDR 150K",
        tag: "Most loved",
      },
      {
        name: "Aromatherapy Massage",
        desc: "A gentle, scented journey with essential oils chosen for your mood.",
        durations: "60 / 90 min",
        price: "from IDR 170K",
      },
      {
        name: "Warm Stone Massage",
        desc: "Smooth heated stones glide warmth into tired muscles. A guest favourite.",
        durations: "90 min",
        price: "from IDR 250K",
        tag: "Signature",
      },
    ],
  },
  {
    title: "Body & Reflexology",
    blurb: "Grounding rituals for feet, body and circulation.",
    items: [
      {
        name: "Foot Reflexology",
        desc: "Pressure-point work that maps the whole body through your feet.",
        durations: "60 min",
        price: "from IDR 120K",
      },
      {
        name: "Balinese Lulur Scrub",
        desc: "A royal exfoliating ritual leaving skin polished, soft and glowing.",
        durations: "60 min",
        price: "from IDR 200K",
      },
      {
        name: "Body Scrub & Massage",
        desc: "Full-body scrub followed by a relaxing massage — head to toe renewal.",
        durations: "120 min",
        price: "from IDR 320K",
        tag: "Package",
      },
    ],
  },
  {
    title: "Face, Hair & Nails",
    blurb: "Finishing touches of care and glow.",
    items: [
      {
        name: "Facial Treatment",
        desc: "Cleanse, exfoliate and nourish for fresh, radiant skin.",
        durations: "60 min",
        price: "from IDR 180K",
      },
      {
        name: "Hair Spa & Creambath",
        desc: "A unique hair wash, scalp & foot massage, scented oils and facial massage.",
        durations: "60 min",
        price: "from IDR 160K",
        tag: "Unique",
      },
      {
        name: "Manicure & Pedicure",
        desc: "Tidy, shape and polish — relax while your hands and feet are cared for.",
        durations: "45 min",
        price: "from IDR 130K",
      },
    ],
  },
];

export type Review = {
  quote: string;
  author: string;
  source: string;
  rating: number;
};

// Real guest reviews sourced from the spa's TripAdvisor / Google listing.
export const reviews: Review[] = [
  {
    quote:
      "I was very happy to reacquaint myself with my favourite masseuse, Diah. I always leave refreshed after a foot or body massage.",
    author: "Verified guest",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    quote:
      "Had the best warm stone massage by Analin. She is amazing, sweet and took such good care of me.",
    author: "Verified guest",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    quote:
      "A wonderful hair spa — a unique hair wash with foot massage, scented oils and a facial massage. Pristine premises and quality therapists.",
    author: "Verified guest",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    quote:
      "Quality massages in a clean, welcoming space. Professional therapists and great value, right in the heart of Kuta.",
    author: "Verified guest",
    source: "TripAdvisor",
    rating: 5,
  },
];

export const stats = [
  { value: "10+", label: "Years of Balinese care" },
  { value: "20+", label: "Skilled therapists" },
  { value: "09–23", label: "Open every day" },
  { value: "4.8★", label: "Guest rating" },
];
