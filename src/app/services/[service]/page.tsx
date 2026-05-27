import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { SERVICES, getService } from "@/lib/data";

type Props = { params: Promise<{ service: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const url = `https://www.vighnahartadentalclinic.com/services/${slug}`;
  return {
    title: `${s.name} in Wagholi, Pune`,
    description: s.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${s.name} in Wagholi, Pune | Vighnaharta Dental Clinic`,
      description: s.metaDesc,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.name} in Wagholi, Pune`,
      description: s.metaDesc,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const procedureJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: s.name,
    description: s.whatIs,
    url: `https://www.vighnahartadentalclinic.com/services/${slug}`,
    image: "https://www.vighnahartadentalclinic.com/og-image.jpg",
    performer: {
      "@type": "Dentist",
      name: "Vighnaharta Dental Clinic",
      url: "https://www.vighnahartadentalclinic.com",
      telephone: "+918007978328",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop No. 105, Oxy Primo Complex, Pune-Nagar Road, Bakori Phata",
        addressLocality: "Wagholi",
        addressRegion: "Pune",
        postalCode: "412207",
        addressCountry: "IN",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vighnahartadentalclinic.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.vighnahartadentalclinic.com/services" },
      { "@type": "ListItem", position: 3, name: s.name, item: `https://www.vighnahartadentalclinic.com/services/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main className="pt-16 bg-[#F4F6F8]">

        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#0077B6]">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#0077B6]">Services</Link>
          <span>/</span>
          <span className="text-[#111827] font-medium">{s.name}</span>
        </div>

        {/* ── Hero bento ────────────────────────────────────── */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-12 gap-4 min-h-[420px]">

              {/* Left — heading + CTA */}
              <AnimatedSection direction="left" className="col-span-12 lg:col-span-5">
                <div className="bg-white rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-between min-h-[360px]">
                  <div>
                    <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Vighnaharta Dental · Wagholi, Pune
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-semibold text-[#111827] leading-tight mb-4">
                      {s.name}
                    </h1>
                    <p className="text-gray-500 leading-relaxed">{s.shortDesc}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <a
                      href="tel:+918007978328"
                      className="flex-1 bg-[#0F2D6B] hover:bg-[#0a2050] text-white text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg"
                    >
                      Book Appointment
                    </a>
                    <a
                      href="https://wa.me/918007978328"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-[#111827] text-center px-6 py-3 rounded-xl font-semibold text-sm hover:border-[#0077B6] transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Centre — dark gradient card */}
              <AnimatedSection delay={100} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div
                  className="rounded-3xl p-7 h-full flex flex-col justify-between relative overflow-hidden min-h-[360px]"
                  style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
                >
                  <div className="relative z-10">
                    <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                      Expert care
                    </span>
                    <h2 className="text-white font-semibold text-2xl leading-tight">
                      {s.name} in<br />Wagholi, Pune
                    </h2>
                  </div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="border-t border-white/20 pt-3">
                        <p className="text-white font-semibold text-2xl">9:30</p>
                        <p className="text-white/60 text-xs">Open daily AM–PM</p>
                      </div>
                      <div className="border-t border-white/20 pt-3">
                        <p className="text-white font-semibold text-2xl">Free</p>
                        <p className="text-white/60 text-xs">consultation</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-white/70 text-sm max-w-[180px] leading-relaxed">
                        Dr. Saurabh Jadhav — Bakori Phata, Wagholi
                      </p>
                      <a
                        href="tel:+918007978328"
                        className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors shrink-0"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right — symptoms + other services */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-4">
                <AnimatedSection delay={150} className="flex-1">
                  <div className="bg-[#C5DFF5] rounded-3xl p-6 h-full flex flex-col min-h-[170px]">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-[#0F2D6B] font-semibold text-lg">When you need it</h3>
                      <span className="w-8 h-8 rounded-lg bg-[#0F2D6B] flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                        </svg>
                      </span>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {s.symptoms.slice(0, 3).map((sym) => (
                        <li key={sym} className="text-[#0F2D6B]/80 text-xs leading-snug flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0F2D6B] shrink-0" />
                          {sym}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={220} className="flex-1">
                  <div className="bg-white rounded-3xl p-6 h-full flex flex-col min-h-[170px]">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-[#111827] font-semibold">Estimated cost</h3>
                      <a
                        href="tel:+918007978328"
                        className="w-8 h-8 rounded-lg bg-[#0F2D6B] flex items-center justify-center shrink-0"
                      >
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </a>
                    </div>
                    <p className="text-[#0077B6] font-semibold text-sm leading-relaxed flex-1">{s.costRange}</p>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ── What is it + Process ──────────────────────────── */}
        <section className="py-10 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  Treatment Guide
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827] leading-tight max-w-2xl">
                Everything about {s.name.toLowerCase()}
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-12 gap-4">

              {/* What is it */}
              <AnimatedSection direction="left" className="col-span-12 lg:col-span-5">
                <div className="bg-white rounded-3xl p-8 h-full">
                  <h3 className="text-xl font-semibold text-[#111827] mb-4">What is {s.name}?</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.whatIs}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-3">Common reasons to get it:</p>
                    <div className="flex flex-col gap-2">
                      {s.symptoms.map((sym, i) => (
                        <div key={sym} className="flex items-center gap-2">
                          {i < 2 ? (
                            <span className="inline-block bg-[#0F2D6B] text-white text-xs font-semibold px-3 py-1.5 rounded-full">{sym}</span>
                          ) : i < 4 ? (
                            <span className="inline-block bg-[#C5DFF5] text-[#0F2D6B] text-xs font-semibold px-3 py-1.5 rounded-full">{sym}</span>
                          ) : (
                            <span className="inline-block border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">{sym}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Process steps */}
              <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
                <AnimatedSection delay={80}>
                  <div
                    className="rounded-3xl p-6 relative overflow-hidden"
                    style={{ background: "linear-gradient(160deg, #7ecef4 0%, #a8dff5 40%, #c5ecfc 100%)" }}
                  >
                    <span className="inline-block bg-white/80 backdrop-blur-sm text-[#111827] text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                      Step-by-step process
                    </span>
                    <h3 className="text-[#0F2D6B] font-semibold text-xl mb-1">How it works</h3>
                    <p className="text-[#0F2D6B]/70 text-sm">What to expect at Vighnaharta Dental</p>
                  </div>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {s.process.map((p, i) => (
                    <AnimatedSection key={p.step} delay={i * 80 + 150}>
                      <div className="bg-white rounded-3xl p-6 h-full flex flex-col justify-between min-h-[140px]">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-[#111827] font-semibold">{p.step}</h4>
                          <span className="w-7 h-7 rounded-full bg-[#0F2D6B] text-white text-xs font-bold flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mt-3">{p.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="py-10 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M6 5v4M6 3.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Common Questions
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827] leading-tight max-w-2xl">
                {s.name} — frequently asked questions
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-12 gap-4">

              {/* FAQ list */}
              <AnimatedSection direction="left" className="col-span-12 lg:col-span-8">
                <div className="space-y-3">
                  {s.faqs.map((f) => (
                    <details key={f.q} className="group bg-white rounded-3xl">
                      <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#111827] list-none gap-4">
                        <span>{f.q}</span>
                        <span className="w-8 h-8 rounded-xl bg-[#F4F6F8] group-open:bg-[#0F2D6B] flex items-center justify-center shrink-0 transition-colors">
                          <svg className="w-4 h-4 text-gray-400 group-open:text-white group-open:rotate-180 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                          </svg>
                        </span>
                      </summary>
                      <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </AnimatedSection>

              {/* Booking sidebar */}
              <AnimatedSection direction="right" delay={100} className="col-span-12 lg:col-span-4">
                <div className="space-y-4 sticky top-20">
                  <div
                    className="rounded-3xl p-7 text-white"
                    style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
                  >
                    <h3 className="font-semibold text-xl mb-1">Book Appointment</h3>
                    <p className="text-white/70 text-sm mb-5">Dr. Saurabh Jadhav · Wagholi</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Mon–Sun, 9:30 AM – 9:30 PM
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        Bakori Phata, Wagholi, Pune
                      </div>
                    </div>
                    <a
                      href="tel:+918007978328"
                      className="block text-center bg-white text-[#0F2D6B] font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors mb-3"
                    >
                      Call +91 80079 78328
                    </a>
                    <a
                      href="https://wa.me/918007978328"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-white/15 text-white font-semibold py-3 rounded-xl hover:bg-white/25 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>

                  {/* Other services */}
                  <div className="bg-white rounded-3xl p-6">
                    <h3 className="font-semibold text-[#111827] mb-4 text-sm">Other treatments</h3>
                    <ul className="space-y-2">
                      {SERVICES.filter((sv) => sv.slug !== slug).map((sv) => (
                        <li key={sv.slug}>
                          <Link
                            href={`/services/${sv.slug}`}
                            className="text-sm text-gray-500 hover:text-[#0077B6] hover:underline flex items-center gap-1"
                          >
                            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                            {sv.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* ── CTA banner ───────────────────────────────────────── */}
        <section className="py-10 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div
                className="rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden"
                style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
              >
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
                  Ready for {s.name.toLowerCase()}?
                </h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto">
                  Visit us at Bakori Phata, Wagholi. Open every day, 9:30 AM to 9:30 PM.
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
