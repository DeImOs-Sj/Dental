import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Doctors — Vighnaharta Dental Clinic, Wagholi, Pune",
  description:
    "Meet Dr. Saurabh Jadhav, principal dentist at Vighnaharta Dental Clinic, Bakori Phata, Wagholi, Pune. Expert dental care for the whole family.",
  alternates: { canonical: "https://www.vighnahartadentalclinic.com/doctors" },
  openGraph: {
    type: "website",
    url: "https://www.vighnahartadentalclinic.com/doctors",
    title: "Dr. Saurabh Jadhav — Dentist at Vighnaharta Dental Clinic, Wagholi",
    description: "Meet Dr. Saurabh Jadhav, principal dentist at Vighnaharta Dental Clinic, Bakori Phata, Wagholi, Pune.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Saurabh Jadhav — Vighnaharta Dental Clinic, Wagholi",
    description: "Principal dentist. Available Mon–Sun 9:30 AM–9:30 PM at Bakori Phata.",
    images: ["/og-image.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Saurabh Jadhav",
  jobTitle: "Dentist",
  worksFor: {
    "@type": "Dentist",
    name: "Vighnaharta Dental Clinic",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 105, Oxy Primo Complex, Pune-Nagar Road, Bakori Phata",
      addressLocality: "Wagholi",
      addressRegion: "Pune",
      postalCode: "412207",
      addressCountry: "IN",
    },
  },
  telephone: "+918007978328",
};

const TAGS = [
  { label: "Principal Dentist", style: "filled"  },
  { label: "Wagholi, Pune",     style: "light"   },
  { label: "All Treatments",    style: "outline" },
  { label: "Open 7 Days",       style: "plain"   },
];

export default function DoctorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
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
                  Our Team
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                Meet your dentist
              </h1>
            </AnimatedSection>

            {/* ── Bento grid ─────────────────────────────────── */}
            <div className="grid grid-cols-12 gap-4 min-h-[420px]">

              {/* Col 1 — stat + tags */}
              <AnimatedSection direction="left" className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-5xl font-semibold text-[#111827] mb-1">4.9★</p>
                    <p className="text-gray-400 text-sm leading-snug">average patient<br/>rating</p>
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

              {/* Col 2 — doctor dark card */}
              <AnimatedSection delay={100} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div
                  className="rounded-3xl p-7 h-full flex flex-col justify-between relative overflow-hidden min-h-[360px]"
                  style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
                >
                  <div className="relative z-10">
                    <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                      Principal Dentist
                    </span>
                    <h2 className="text-white font-semibold text-3xl leading-tight">
                      Dr. Saurabh<br />Jadhav
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="border-t border-white/20 pt-3">
                        <p className="text-white font-semibold text-xl">Wagholi</p>
                        <p className="text-white/60 text-xs">Bakori Phata, Pune</p>
                      </div>
                      <div className="border-t border-white/20 pt-3">
                        <p className="text-white font-semibold text-xl">8+</p>
                        <p className="text-white/60 text-xs">treatments offered</p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <p className="text-white/70 text-sm leading-relaxed max-w-[180px]">
                        Marathi · Hindi · English
                      </p>
                      <a
                        href="tel:+918007978328"
                        className="shrink-0 w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Col 3 — two stacked info cards */}
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
                <AnimatedSection delay={150} className="flex-1">
                  <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between min-h-[180px]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-2xl mb-3 block">🏥</span>
                        <h3 className="text-[#111827] font-semibold text-xl">Vighnaharta Dental Clinic</h3>
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
                      Shop No. 105, Oxy Primo Complex, Pune-Nagar Road, Bakori Phata, Wagholi 412207
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={240} className="flex-1">
                  <div className="bg-[#D6EEFF] rounded-3xl p-7 h-full flex flex-col justify-between min-h-[180px]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-2xl mb-3 block">🕐</span>
                        <h3 className="text-[#111827] font-semibold text-xl">Available Every Day</h3>
                      </div>
                      <Link
                        href="tel:+918007978328"
                        className="shrink-0 w-9 h-9 rounded-xl bg-[#0F2D6B] hover:bg-[#0a2050] flex items-center justify-center text-white transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </Link>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mt-3">
                      Mon–Sun · 9:30 AM – 9:30 PM
                    </p>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ── About Dr. Jadhav ───────────────────────────────── */}
        <section className="pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  About
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                About Dr. Saurabh Jadhav
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-12 gap-4">

              {/* Bio */}
              <AnimatedSection direction="left" className="col-span-12 lg:col-span-5">
                <div className="bg-white rounded-3xl p-8 h-full space-y-4 text-gray-500 text-sm leading-relaxed">
                  <p>
                    Dr. Saurabh Jadhav is the founder and principal dentist at Vighnaharta Dental Clinic, Wagholi. He established the clinic with a mission to bring accessible, high-quality dental care to the Bakori Phata and Wagholi community.
                  </p>
                  <p>
                    Dr. Jadhav provides a full range of dental treatments — from routine check-ups and fillings to advanced procedures including dental implants, root canal treatment, and orthodontics.
                  </p>
                  <p>
                    His patient-first approach ensures every patient understands their treatment and feels comfortable throughout. The clinic is equipped with digital X-rays and rotary endodontic instruments for precise, minimally invasive care.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <a
                      href="tel:+918007978328"
                      className="bg-[#0F2D6B] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0a2050] transition-colors"
                    >
                      Book Appointment
                    </a>
                    <a
                      href="https://wa.me/918007978328"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 text-[#111827] px-5 py-2.5 rounded-xl text-sm font-semibold hover:border-[#0077B6] transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Expertise grid */}
              <div className="col-span-12 lg:col-span-7">
                <AnimatedSection delay={80}>
                  <div
                    className="rounded-3xl p-6 mb-4"
                    style={{ background: "linear-gradient(160deg, #7ecef4 0%, #a8dff5 40%, #c5ecfc 100%)" }}
                  >
                    <span className="inline-block bg-white/80 backdrop-blur-sm text-[#111827] text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                      Areas of expertise
                    </span>
                    <p className="text-[#0F2D6B]/70 text-sm">All major dental treatments under one roof</p>
                  </div>
                </AnimatedSection>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {SERVICES.map((sv, i) => (
                    <AnimatedSection key={sv.slug} delay={i * 60 + 100}>
                      <Link
                        href={`/services/${sv.slug}`}
                        className="group bg-white rounded-2xl p-5 flex flex-col gap-2 hover:bg-[#0F2D6B] transition-colors duration-300 min-h-[90px]"
                      >
                        <h3 className="text-[#111827] font-semibold text-sm group-hover:text-white transition-colors leading-snug">
                          {sv.name}
                        </h3>
                        <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-white/60 transition-colors mt-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

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
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
                  Book with Dr. Saurabh Jadhav
                </h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto">
                  Available Mon–Sun, 9:30 AM to 9:30 PM at Bakori Phata, Wagholi.
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
