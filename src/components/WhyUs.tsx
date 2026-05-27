import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const TAGS = [
  { label: "Same-day Slots",  style: "filled"  },
  { label: "Pain-Free Care",  style: "light"   },
  { label: "Emergency Care",  style: "outline" },
  { label: "Flexible Hours",  style: "plain"   },
];

const SIDE_CARDS = [
  {
    icon: "⚡",
    title: "Transparent Pricing",
    desc: "Clear upfront costs, no hidden fees. Flexible EMI options available for all treatments.",
    href: "tel:+918007978328",
  },
  {
    icon: "🛡️",
    title: "Hospital-Grade Safety",
    desc: "Strict sterilisation protocols and single-use disposables — your safety is non-negotiable.",
    href: "/about",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#F4F6F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ───────────────────────────────────────────── */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
            Dentistry that puts
            you first, every time
          </h2>
        </AnimatedSection>

        {/* ── Bento grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-12 gap-4 min-h-[420px]">

          {/* Col 1 — stats + tag pills */}
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

          {/* Col 2 — featured dark card */}
          <AnimatedSection delay={100} className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div
              className="rounded-3xl p-7 h-full flex flex-col justify-between relative overflow-hidden min-h-[360px]"
              style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{ backgroundImage: "url('/clinic.png')" }}
              />
              <div className="relative z-10">
                <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  Our promise
                </span>
                <h3 className="text-white font-semibold text-3xl leading-tight">
                  Advanced care,<br />gentle touch
                </h3>
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-4">
                <div className="border-t border-white/20 pt-3">
                  <p className="text-white font-semibold text-2xl">15+</p>
                  <p className="text-white/60 text-xs">years experience</p>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <p className="text-white font-semibold text-2xl">All days</p>
                  <p className="text-white/60 text-xs">9:30 AM – 9:30 PM</p>
                </div>
              </div>
              <div className="relative z-10 flex items-end justify-between gap-3">
                <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                  Modern equipment, painless procedures, and transparent pricing — always.
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
          </AnimatedSection>

          {/* Col 3 — two stacked white cards */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            {SIDE_CARDS.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 120 + 150} className="flex-1">
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between min-h-[180px]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-2xl mb-3 block">{c.icon}</span>
                      <h3 className="text-[#111827] font-semibold text-2xl">{c.title}</h3>
                    </div>
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
