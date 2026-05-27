import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const TAGS = [
  { label: "Preventive Care",    style: "filled"  },
  { label: "Teeth Whitening",    style: "light"   },
  { label: "Pediatric Dentistry",style: "outline" },
  { label: "Oral Surgery",       style: "plain"   },
];

const SIDE_CARDS = [
  {
    title: "Implantology",
    desc:  "Advanced dental implants and full-mouth restorations with precise digital planning.",
    bg:    "bg-white",
    href:  "/services/dental-implants",
  },
  {
    title: "Digital Dentistry",
    desc:  "3D diagnostics, digital scanning, and precision-guided treatment planning.",
    bg:    "bg-[#D6EEFF]",
    href:  "/services/general-dentistry",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F4F6F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ───────────────────────────────────────────── */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
          {/* Tag */}
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Our Services
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
            Comprehensive diagnostics,
            treatment &amp; aesthetic solutions
          </h2>
        </AnimatedSection>

        {/* ── Grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-12 gap-4 min-h-[420px]">

          {/* ── Col 1: Stats + tags ──────────────────────────── */}
          <AnimatedSection direction="left" className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between">
              <div>
                <p className="text-5xl font-semibold text-[#111827] mb-1">5,000+</p>
                <p className="text-gray-400 text-sm leading-snug">successful treatments<br/>performed</p>
              </div>

              <div className="mt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[#0077B6] text-sm font-medium hover:underline"
                >
                  View all services
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </Link>
              </div>

              <div className="flex flex-col gap-2.5 mt-6">
                {TAGS.map((t) => (
                  <div key={t.label}>
                    {t.style === "filled" && (
                      <span className="inline-block bg-[#0F2D6B] text-white text-xs font-semibold px-4 py-2 rounded-full">
                        {t.label}
                      </span>
                    )}
                    {t.style === "light" && (
                      <span className="inline-block bg-[#C5DFF5] text-[#0F2D6B] text-xs font-semibold px-4 py-2 rounded-full">
                        {t.label}
                      </span>
                    )}
                    {t.style === "outline" && (
                      <span className="inline-block border border-gray-300 text-gray-600 text-xs font-medium px-4 py-2 rounded-full">
                        {t.label}
                      </span>
                    )}
                    {t.style === "plain" && (
                      <span className="inline-block text-gray-500 text-xs font-medium px-4 py-2">
                        {t.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* ── Col 2: Featured card ─────────────────────────── */}
          <AnimatedSection delay={100} className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div
              className="rounded-3xl p-7 h-full flex flex-col justify-between relative overflow-hidden min-h-[360px]"
              style={{
                background: "linear-gradient(160deg, #7ecef4 0%, #a8dff5 40%, #c5ecfc 100%)",
              }}
            >
              {/* Badge */}
              <div>
                <span className="inline-block bg-white/80 backdrop-blur-sm text-[#111827] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  Top popular
                </span>
                <h3 className="text-[#0F2D6B] font-semibold text-3xl">Orthodontics</h3>
              </div>

              {/* Clinic image as decorative element */}
              <div
                className="absolute inset-x-0 top-20 bottom-16 bg-cover bg-center opacity-30 rounded-2xl mx-4"
                style={{ backgroundImage: "url('/clinic.png')" }}
              />

              {/* Bottom */}
              <div className="relative z-10 flex items-end justify-between gap-3">
                <p className="text-[#0F2D6B]/80 text-sm leading-relaxed max-w-[200px]">
                  Modern braces and clear aligners for balanced, healthy smiles.
                </p>
                <Link
                  href="/services/orthodontics-braces"
                  className="shrink-0 w-10 h-10 rounded-xl bg-[#0F2D6B] hover:bg-[#0a2050] flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Col 3: Two stacked cards ─────────────────────── */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            {SIDE_CARDS.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 120 + 150} className="flex-1">
                <div className={`${c.bg} rounded-3xl p-7 h-full flex flex-col justify-between min-h-[180px] relative group`}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[#111827] font-semibold text-2xl">{c.title}</h3>
                    <Link
                      href={c.href}
                      className="shrink-0 w-9 h-9 rounded-xl bg-[#0F2D6B] hover:bg-[#0a2050] flex items-center justify-center text-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </Link>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mt-4">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
