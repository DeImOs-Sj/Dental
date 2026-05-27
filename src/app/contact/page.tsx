import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us — Dentist in Wagholi, Pune",
  description:
    "Contact Vighnaharta Dental Clinic at Bakori Phata, Wagholi, Pune. Call +91 80079 78328. Open Mon–Sun 9:30 AM–9:30 PM. Get directions to our clinic.",
  alternates: { canonical: "https://www.vighnahartadentalclinic.com/contact" },
  openGraph: {
    type: "website",
    url: "https://www.vighnahartadentalclinic.com/contact",
    title: "Contact Us — Vighnaharta Dental Clinic, Wagholi",
    description: "Call +91 80079 78328. Open Mon–Sun 9:30 AM–9:30 PM. Bakori Phata, Wagholi, Pune.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Vighnaharta Dental Clinic, Wagholi",
    description: "Call +91 80079 78328. Open 9:30 AM–9:30 PM daily.",
    images: ["/og-image.jpg"],
  },
};

const TAGS = [
  { label: "Open 7 Days",      style: "filled"  },
  { label: "Walk-ins Welcome", style: "light"   },
  { label: "Free Consult",     style: "outline" },
  { label: "Wagholi, Pune",    style: "plain"   },
];

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Vighnaharta Dental Clinic",
  url: "https://www.vighnahartadentalclinic.com",
  telephone: "+918007978328",
  email: "info@vighnahartadentalclinic.com",
  priceRange: "₹₹",
  image: "https://www.vighnahartadentalclinic.com/og-image.jpg",
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
  hasMap: "https://maps.google.com/?q=18.590370227097672,73.99731740184953",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "09:30",
      closes: "21:30",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+918007978328",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <Navbar />
      <main className="pt-16 bg-[#F4F6F8]">

        {/* ── Header ─────────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Get In Touch
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                Visit Vighnaharta<br />Dental Clinic
              </h1>
            </AnimatedSection>

            {/* ── Bento grid ─────────────────────────────────── */}
            <div className="grid grid-cols-12 gap-4 min-h-[420px]">

              {/* Col 1 — stat + tags */}
              <AnimatedSection direction="left" className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-5xl font-semibold text-[#111827] mb-1">12h</p>
                    <p className="text-gray-400 text-sm leading-snug">open every day<br/>9:30 AM – 9:30 PM</p>
                  </div>
                  <div className="flex flex-col gap-2.5 mt-6">
                    {TAGS.map((t) => (
                      <div key={t.label}>
                        {t.style === "filled" && (
                          <span className="inline-block bg-[#0F2D6B] text-white text-xs font-semibold px-4 py-2 rounded-full">{t.label}</span>
                        )}
                        {t.style === "light" && (
                          <span className="inline-block bg-[#C5DFF5] text-[#0F2D6B] text-xs font-semibold px-4 py-2 rounded-full">{t.label}</span>
                        )}
                        {t.style === "outline" && (
                          <span className="inline-block border border-gray-300 text-gray-600 text-xs font-medium px-4 py-2 rounded-full">{t.label}</span>
                        )}
                        {t.style === "plain" && (
                          <span className="inline-block text-gray-500 text-xs font-medium px-4 py-2">{t.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Col 2 — dark gradient card */}
              <AnimatedSection delay={100} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div
                  className="rounded-3xl p-7 h-full flex flex-col justify-between relative overflow-hidden min-h-[360px]"
                  style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
                >
                  <div className="relative z-10">
                    <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                      Call or WhatsApp
                    </span>
                    <h2 className="text-white font-semibold text-3xl leading-tight">
                      +91 80079<br />78328
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-1 gap-3 mb-5">
                      <div className="border-t border-white/20 pt-3">
                        <p className="text-white/60 text-xs mb-1">Address</p>
                        <p className="text-white text-sm font-medium leading-snug">
                          Shop No. 105, Oxy Primo Complex<br />
                          Pune-Nagar Road, Bakori Phata<br />
                          Wagholi, Pune 412207
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="tel:+918007978328"
                        className="flex-1 text-center bg-white text-[#0F2D6B] font-semibold py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors"
                      >
                        Call Now
                      </a>
                      <a
                        href="https://wa.me/918007978328"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-white/20 text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-white/30 transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Col 3 — two stacked cards */}
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
                <AnimatedSection delay={150} className="flex-1">
                  <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between min-h-[180px]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-2xl mb-3 block">📍</span>
                        <h3 className="text-[#111827] font-semibold text-xl">Find Us</h3>
                      </div>
                      <a
                        href="https://maps.google.com/?q=18.590370227097672,73.99731740184953"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-9 h-9 rounded-xl bg-[#0F2D6B] hover:bg-[#0a2050] flex items-center justify-center text-white transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </a>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mt-3">
                      On Pune-Nagar Road (NH753D) — easily accessible from Wagholi, Kharadi, Lonikand & beyond.
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={240} className="flex-1">
                  <div className="bg-[#D6EEFF] rounded-3xl p-7 h-full flex flex-col justify-between min-h-[180px]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-2xl mb-3 block">✉️</span>
                        <h3 className="text-[#111827] font-semibold text-xl">Email Us</h3>
                      </div>
                      <a
                        href="mailto:info@vighnahartadentalclinic.com"
                        className="shrink-0 w-9 h-9 rounded-xl bg-[#0F2D6B] hover:bg-[#0a2050] flex items-center justify-center text-white transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-3 break-all">
                      info@vighnahartadentalclinic.com
                    </p>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ── Map + Details ──────────────────────────────────── */}
        <section className="pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  Location
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                How to reach us
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-12 gap-4">

              {/* Map */}
              <AnimatedSection direction="left" className="col-span-12 lg:col-span-8">
                <div className="bg-white rounded-3xl overflow-hidden h-80 lg:h-full min-h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0!2d73.9947401!3d18.5903702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzI1LjMiTiA3M8KwNTknNTAuMyJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "320px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vighnaharta Dental Clinic location map"
                  />
                </div>
              </AnimatedSection>

              {/* Details */}
              <AnimatedSection direction="right" delay={100} className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                <div className="bg-white rounded-3xl p-7 flex-1">
                  <h3 className="font-semibold text-[#111827] mb-5">Clinic Details</h3>
                  <div className="space-y-5 text-sm">
                    {[
                      {
                        icon: (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                        ),
                        label: "Address",
                        value: "Shop No. 105, Oxy Primo Complex\nPune-Nagar Road, Bakori Phata\nWagholi, Pune 412207",
                        isMultiline: true,
                      },
                      {
                        icon: (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                        ),
                        label: "Phone",
                        value: "+91 80079 78328",
                        href: "tel:+918007978328",
                      },
                      {
                        icon: (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        ),
                        label: "Hours",
                        value: "Mon–Sun · 9:30 AM – 9:30 PM",
                      },
                      {
                        icon: (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                        ),
                        label: "Email",
                        value: "info@vighnahartadentalclinic.com",
                        href: "mailto:info@vighnahartadentalclinic.com",
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#F4F6F8] flex items-center justify-center text-[#0F2D6B] shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-[#111827] font-medium hover:text-[#0077B6] transition-colors">
                              {item.value}
                            </a>
                          ) : item.isMultiline ? (
                            <p className="text-[#111827] font-medium leading-relaxed whitespace-pre-line">{item.value}</p>
                          ) : (
                            <p className="text-[#111827] font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=18.590370227097672,73.99731740184953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl p-5 flex items-center justify-between hover:bg-[#0F2D6B] group transition-colors duration-300"
                >
                  <span className="font-semibold text-[#111827] group-hover:text-white transition-colors text-sm">
                    Open in Google Maps
                  </span>
                  <span className="w-9 h-9 rounded-xl bg-[#F4F6F8] group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#0F2D6B] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </span>
                </a>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div
                className="rounded-3xl p-10 lg:p-14 text-center"
                style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
              >
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">Ready to book?</h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto">
                  Call or WhatsApp us — we confirm appointments within minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+918007978328"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0F2D6B] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call +91 80079 78328
                  </a>
                  <a
                    href="https://wa.me/918007978328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/15 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/25 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
