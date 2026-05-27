import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dental Services in Wagholi, Pune",
  description:
    "Complete dental services at Vighnaharta Dental Clinic, Bakori Phata, Wagholi — implants, root canal, teeth whitening, orthodontics, crowns, pediatric dentistry and more.",
  alternates: { canonical: "https://www.vighnahartadentalclinic.com/services" },
};

const TAGS = [
  { label: "Pain-Free Care",    style: "filled"  },
  { label: "Same-day Slots",    style: "light"   },
  { label: "Emergency Care",    style: "outline" },
  { label: "Open 7 Days",       style: "plain"   },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-[#F4F6F8]">

        {/* ── Header ────────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Our Services
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                Complete dental care in<br />Wagholi, Pune
              </h1>
            </AnimatedSection>

            {/* ── Bento grid ─────────────────────────────────── */}
            <div className="grid grid-cols-12 gap-4 min-h-[420px]">

              {/* Col 1 — stats + tags */}
              <AnimatedSection direction="left" className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-5xl font-semibold text-[#111827] mb-1">8+</p>
                    <p className="text-gray-400 text-sm leading-snug">specialist treatments<br/>under one roof</p>
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

              {/* Col 2 — featured dark card */}
              <AnimatedSection delay={100} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div
                  className="rounded-3xl p-7 h-full flex flex-col justify-between relative overflow-hidden min-h-[360px]"
                  style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
                >
                  <div className="relative z-10">
                    <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                      Most popular
                    </span>
                    <h2 className="text-white font-semibold text-3xl">Dental Implants</h2>
                  </div>
                  <div className="relative z-10 flex items-end justify-between gap-3">
                    <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                      Permanent, natural-looking tooth replacement that lasts a lifetime.
                    </p>
                    <Link
                      href="/services/dental-implants"
                      className="shrink-0 w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              {/* Col 3 — two stacked service cards */}
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
                {[SERVICES[1], SERVICES[2]].map((sv, i) => (
                  <AnimatedSection key={sv.slug} delay={i * 120 + 150} className="flex-1">
                    <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between min-h-[170px]">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-[#111827] font-semibold text-xl">{sv.name}</h3>
                        <Link
                          href={`/services/${sv.slug}`}
                          className="shrink-0 w-9 h-9 rounded-xl bg-[#0F2D6B] hover:bg-[#0a2050] flex items-center justify-center text-white transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                          </svg>
                        </Link>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mt-3">{sv.shortDesc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── All Services grid ─────────────────────────────── */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  All Treatments
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                Every treatment, one clinic
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-12 gap-4">
              {SERVICES.map((sv, i) => (
                <AnimatedSection
                  key={sv.slug}
                  delay={i * 60}
                  className="col-span-12 sm:col-span-6 lg:col-span-3"
                >
                  <Link href={`/services/${sv.slug}`} className="group block h-full">
                    <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between min-h-[200px] group-hover:bg-[#0F2D6B] transition-colors duration-300">
                      <h3 className="text-[#111827] font-semibold text-xl group-hover:text-white transition-colors">
                        {sv.name}
                      </h3>
                      <div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5 group-hover:text-white/70 transition-colors">
                          {sv.shortDesc}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[#0077B6] group-hover:text-white text-sm font-medium transition-colors">
                          View details
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div
                className="rounded-3xl p-10 lg:p-14 text-center"
                style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
              >
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">Not sure which treatment you need?</h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto">
                  Book a free consultation with Dr. Saurabh Jadhav. Open every day, 9:30 AM to 9:30 PM.
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
