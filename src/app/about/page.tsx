import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us — Vighnaharta Dental Clinic, Wagholi, Pune",
  description:
    "Learn about Vighnaharta Dental Clinic at Bakori Phata, Wagholi, Pune. Led by Dr. Saurabh Jadhav, we provide expert dental care for the whole family. Open 7 days a week.",
  alternates: { canonical: "https://www.vighnahartadentalclinic.com/about" },
  openGraph: {
    type: "website",
    url: "https://www.vighnahartadentalclinic.com/about",
    title: "About Us — Vighnaharta Dental Clinic, Wagholi, Pune",
    description: "Learn about Vighnaharta Dental Clinic at Bakori Phata, Wagholi. Led by Dr. Saurabh Jadhav. Expert dental care open 7 days.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Vighnaharta Dental Clinic, Wagholi, Pune",
    description: "Expert dental care at Bakori Phata, Wagholi. Open 9:30 AM–9:30 PM daily.",
    images: ["/og-image.jpg"],
  },
};

const STATS = [
  { num: "5,000+", label: "happy patients"           },
  { num: "8+",     label: "treatments offered"        },
  { num: "7 days", label: "open every week"           },
  { num: "98%",    label: "patient satisfaction rate" },
];

const VALUES = [
  {
    title: "Patient-First Care",
    desc: "Every treatment plan is designed around the patient's needs and long-term oral health — not upselling.",
  },
  {
    title: "Pain-Free Dentistry",
    desc: "Modern anaesthesia and rotary instruments ensure virtually painless procedures every time.",
  },
  {
    title: "Transparent Pricing",
    desc: "Full cost breakdown before treatment starts. No hidden charges, ever.",
  },
  {
    title: "Accessible Hours",
    desc: "Open 9:30 AM to 9:30 PM every day — because dental emergencies don't follow weekdays.",
  },
];

const TAGS = [
  { label: "Est. in Wagholi",    style: "filled"  },
  { label: "Pain-Free Care",     style: "light"   },
  { label: "Family Dentistry",   style: "outline" },
  { label: "Open 7 Days",        style: "plain"   },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vighnaharta Dental Clinic",
  url: "https://www.vighnahartadentalclinic.com/about",
  description: "Vighnaharta Dental Clinic at Bakori Phata, Wagholi, Pune. Led by Dr. Saurabh Jadhav, offering comprehensive dental care for the whole family.",
  mainEntity: {
    "@type": "Dentist",
    name: "Vighnaharta Dental Clinic",
    url: "https://www.vighnahartadentalclinic.com",
    telephone: "+918007978328",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 105, Oxy Primo Complex, Pune-Nagar Road, Bakori Phata",
      addressLocality: "Wagholi",
      addressRegion: "Pune",
      postalCode: "412207",
      addressCountry: "IN",
    },
    employee: { "@type": "Person", name: "Dr. Saurabh Jadhav", jobTitle: "Dentist" },
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
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
                  About the Clinic
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                Trusted dental care in<br />the heart of Wagholi
              </h1>
            </AnimatedSection>

            {/* ── Bento grid ─────────────────────────────────── */}
            <div className="grid grid-cols-12 gap-4 min-h-[420px]">

              {/* Col 1 — stats + tags */}
              <AnimatedSection direction="left" className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-5xl font-semibold text-[#111827] mb-1">98%</p>
                    <p className="text-gray-400 text-sm leading-snug">patient satisfaction<br/>rate</p>
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
                      Our promise
                    </span>
                    <h2 className="text-white font-semibold text-3xl leading-tight">
                      Advanced care,<br />gentle touch
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="border-t border-white/20 pt-3">
                        <p className="text-white font-semibold text-2xl">5,000+</p>
                        <p className="text-white/60 text-xs">patients treated</p>
                      </div>
                      <div className="border-t border-white/20 pt-3">
                        <p className="text-white font-semibold text-2xl">All days</p>
                        <p className="text-white/60 text-xs">9:30 AM – 9:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                        Modern equipment, painless procedures, transparent pricing — always.
                      </p>
                      <Link
                        href="tel:+918007978328"
                        className="shrink-0 w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </Link>
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
                        <span className="text-2xl mb-3 block">🦷</span>
                        <h3 className="text-[#111827] font-semibold text-2xl">Dr. Saurabh Jadhav</h3>
                      </div>
                      <Link
                        href="/doctors"
                        className="shrink-0 w-9 h-9 rounded-xl bg-[#0F2D6B] hover:bg-[#0a2050] flex items-center justify-center text-white transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </Link>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mt-3">
                      Principal Dentist · Vighnaharta Dental Clinic, Bakori Phata, Wagholi
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={240} className="flex-1">
                  <div className="bg-[#D6EEFF] rounded-3xl p-7 h-full flex flex-col justify-between min-h-[180px]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-2xl mb-3 block">📍</span>
                        <h3 className="text-[#111827] font-semibold text-2xl">Bakori Phata</h3>
                      </div>
                      <Link
                        href="/contact"
                        className="shrink-0 w-9 h-9 rounded-xl bg-[#0F2D6B] hover:bg-[#0a2050] flex items-center justify-center text-white transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </Link>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mt-3">
                      Shop No. 105, Oxy Primo Complex, Pune-Nagar Road, Wagholi 412207
                    </p>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ── Our story ──────────────────────────────────────── */}
        <section className="pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                Why we started in<br />Wagholi
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-12 gap-4">

              {/* Story text */}
              <AnimatedSection direction="left" className="col-span-12 lg:col-span-5">
                <div className="bg-white rounded-3xl p-8 h-full space-y-4 text-gray-500 text-sm leading-relaxed">
                  <p>
                    Vighnaharta Dental Clinic was established at Bakori Phata, Wagholi to address a clear gap — the area had rapidly growing residential communities but limited access to quality, full-service dental care.
                  </p>
                  <p>
                    Located in the Oxy Primo Complex on Pune-Nagar Road, we are easily accessible to patients from Wagholi, Bakori Phata, Lonikand, Kharadi, and beyond.
                  </p>
                  <p>
                    Dr. Saurabh Jadhav founded the clinic with a single goal: make quality dental care accessible, affordable, and pain-free for every family in the neighbourhood.
                  </p>
                  <p>
                    We treat patients like family — taking time to explain procedures, answer questions, and ensure every visit is as comfortable as possible.
                  </p>
                </div>
              </AnimatedSection>

              {/* Stats grid */}
              <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
                {STATS.map((s, i) => (
                  <AnimatedSection key={s.label} delay={i * 80 + 100}>
                    <div className="bg-white rounded-3xl p-7 flex flex-col justify-between min-h-[150px]">
                      <p className="text-4xl font-semibold text-[#111827]">{s.num}</p>
                      <p className="text-gray-400 text-sm mt-2">{s.label}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Values ─────────────────────────────────────────── */}
        <section className="pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6 5v4M6 3.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Our Values
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                What we stand for
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-12 gap-4">
              {VALUES.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 80} className="col-span-12 sm:col-span-6 lg:col-span-3">
                  <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between min-h-[200px] group hover:bg-[#0F2D6B] transition-colors duration-300">
                    <h3 className="text-[#111827] font-semibold text-xl group-hover:text-white transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-4 group-hover:text-white/70 transition-colors">
                      {v.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
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
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">Ready to visit us?</h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto">
                  Shop No. 105, Oxy Primo Complex, Pune-Nagar Road, Bakori Phata, Wagholi — open every day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+918007978328"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0F2D6B] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call +91 80079 78328
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/15 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/25 transition-colors"
                  >
                    Get Directions
                  </Link>
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
