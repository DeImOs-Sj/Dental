import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://www.vighnahartadentalclinic.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vighnaharta Dental Clinic — Best Dentist in Wagholi, Pune",
    template: "%s | Vighnaharta Dental Clinic",
  },
  description:
    "Top-rated dental clinic at Bakori Phata, Wagholi, Pune. Dr. Saurabh Jadhav offers dental implants, root canal, teeth whitening, orthodontics & more. Open 9:30 AM–9:30 PM. Book now.",
  keywords: [
    "dentist wagholi",
    "dental clinic wagholi pune",
    "dentist bakori phata",
    "best dentist wagholi pune",
    "dental implants wagholi",
    "root canal wagholi pune",
    "teeth whitening pune",
    "orthodontics wagholi",
    "Dr Saurabh Jadhav dentist",
  ],
  authors: [{ name: "Dr. Saurabh Jadhav" }],
  creator: "Vighnaharta Dental Clinic",
  publisher: "Vighnaharta Dental Clinic",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Vighnaharta Dental Clinic",
    title: "Vighnaharta Dental Clinic — Best Dentist in Wagholi, Pune",
    description:
      "Top-rated dental clinic at Bakori Phata, Wagholi, Pune. Expert care by Dr. Saurabh Jadhav. Open 9:30 AM–9:30 PM daily. Book your appointment today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vighnaharta Dental Clinic — Wagholi, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vighnaharta Dental Clinic — Best Dentist in Wagholi, Pune",
    description:
      "Expert dental care at Bakori Phata, Wagholi. Open 9:30 AM–9:30 PM. Book now.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: add Google Search Console verification token
    // google: "your-token-here",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalOrganization", "LocalBusiness"],
  name: "Vighnaharta Dental Clinic",
  url: SITE_URL,
  telephone: "+918007978328",
  email: "info@vighnahartadental.com",
  priceRange: "₹₹",
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Vighnaharta Dental Clinic at Bakori Phata, Wagholi, Pune offers comprehensive dental care including implants, root canal, orthodontics, teeth whitening and more.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 105, Oxy Primo Complex, Pune-Nagar Road, Bakori Phata",
    addressLocality: "Wagholi",
    addressRegion: "Pune",
    postalCode: "412207",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.590370227097672,
    longitude: 73.99731740184953,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "09:30",
      closes: "21:30",
    },
  ],
  employee: {
    "@type": "Person",
    name: "Dr. Saurabh Jadhav",
    jobTitle: "Dentist",
    worksFor: { "@type": "Dentist", name: "Vighnaharta Dental Clinic" },
  },
  areaServed: [
    { "@type": "Place", name: "Wagholi, Pune" },
    { "@type": "Place", name: "Bakori Phata, Pune" },
    { "@type": "Place", name: "Kharadi, Pune" },
    { "@type": "Place", name: "Viman Nagar, Pune" },
    { "@type": "Place", name: "Lonikand, Pune" },
    { "@type": "Place", name: "Nagar Road, Pune" },
  ],
  hasMap: "https://maps.google.com/?q=18.590370227097672,73.99731740184953",
  sameAs: [
    // TODO: add social media + directory URLs when live
    // "https://www.practo.com/...",
    // "https://www.justdial.com/...",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M8VGN2MHMJ"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M8VGN2MHMJ');
        `}
      </Script>
    </html>
  );
}
