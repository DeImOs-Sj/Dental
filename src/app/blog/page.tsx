import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Dental Health Blog — Vighnaharta Dental Clinic, Wagholi",
  description:
    "Dental tips, treatment guides, and oral health advice from Dr. Saurabh Jadhav at Vighnaharta Dental Clinic, Wagholi, Pune.",
  alternates: { canonical: "https://www.vighnahartadentalclinic.com/blog" },
  openGraph: {
    type: "website",
    url: "https://www.vighnahartadentalclinic.com/blog",
    title: "Dental Health Blog — Vighnaharta Dental Clinic, Wagholi",
    description: "Dental tips and treatment guides from Dr. Saurabh Jadhav at Vighnaharta Dental Clinic, Wagholi, Pune.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Health Blog — Vighnaharta Dental Clinic",
    description: "Dental tips and guides from Dr. Saurabh Jadhav, Wagholi.",
    images: ["/og-image.jpg"],
  },
};

const POSTS = [
  {
    slug: "dental-implant-cost-pune",
    title: "Dental Implant Cost in Pune 2025 — Complete Guide",
    excerpt: "Everything you need to know about dental implant pricing in Pune — what affects the cost, what to expect, and how to choose the right clinic.",
    date: "2025-05-01",
    readTime: "6 min",
    tag: "Implants",
  },
  {
    slug: "root-canal-vs-extraction",
    title: "Root Canal vs Extraction: Which is Right for You?",
    excerpt: "Should you save the tooth or remove it? Pros, cons, costs, and long-term consequences of both options.",
    date: "2025-05-10",
    readTime: "5 min",
    tag: "Root Canal",
  },
  {
    slug: "is-root-canal-painful",
    title: "Is Root Canal Painful in 2025? What to Actually Expect",
    excerpt: "The root canal has a bad reputation — but is it deserved? A modern root canal is no more uncomfortable than a filling.",
    date: "2025-05-20",
    readTime: "4 min",
    tag: "Root Canal",
  },
  {
    slug: "invisalign-vs-braces-india",
    title: "Invisalign vs Metal Braces in India — Honest Comparison",
    excerpt: "Cost, effectiveness, comfort, and appearance — a clear comparison to help you choose the right orthodontic treatment.",
    date: "2025-06-01",
    readTime: "7 min",
    tag: "Orthodontics",
  },
];

const TAGS = [
  { label: "Implants",      style: "filled"  },
  { label: "Root Canal",    style: "light"   },
  { label: "Orthodontics",  style: "outline" },
  { label: "Whitening",     style: "plain"   },
];

export default function BlogPage() {
  return (
    <>
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
                  Dental Health
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                Dental tips &amp; guides
              </h1>
            </AnimatedSection>

            {/* ── Bento grid ─────────────────────────────────── */}
            <div className="grid grid-cols-12 gap-4 min-h-[420px]">

              {/* Col 1 — stat + tags */}
              <AnimatedSection direction="left" className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-5xl font-semibold text-[#111827] mb-1">{POSTS.length}+</p>
                    <p className="text-gray-400 text-sm leading-snug">articles by<br/>Dr. Saurabh Jadhav</p>
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

              {/* Col 2 — featured post dark card */}
              <AnimatedSection delay={100} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <a
                  href={`/blog/${POSTS[0].slug}`}
                  className="block rounded-3xl p-7 h-full flex flex-col justify-between relative overflow-hidden min-h-[360px] group"
                  style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
                >
                  <div className="relative z-10">
                    <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                      {POSTS[0].tag}
                    </span>
                    <h2 className="text-white font-semibold text-2xl leading-snug">{POSTS[0].title}</h2>
                  </div>
                  <div className="relative z-10 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-white/60 text-xs mb-1">{POSTS[0].readTime} read</p>
                      <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">{POSTS[0].excerpt.slice(0, 60)}…</p>
                    </div>
                    <span className="shrink-0 w-10 h-10 rounded-xl bg-white/20 group-hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </span>
                  </div>
                </a>
              </AnimatedSection>

              {/* Col 3 — two stacked post cards */}
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
                {POSTS.slice(1, 3).map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 120 + 150} className="flex-1">
                    <a
                      href={`/blog/${post.slug}`}
                      className="group block bg-white rounded-3xl p-7 h-full flex flex-col justify-between min-h-[180px]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="inline-block bg-[#C5DFF5] text-[#0F2D6B] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                            {post.tag}
                          </span>
                          <h3 className="text-[#111827] font-semibold text-lg leading-snug group-hover:text-[#0077B6] transition-colors">
                            {post.title}
                          </h3>
                        </div>
                        <span className="shrink-0 w-9 h-9 rounded-xl bg-[#0F2D6B] group-hover:bg-[#0a2050] flex items-center justify-center text-white transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
                          </svg>
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs mt-3">{post.readTime} read</p>
                    </a>
                  </AnimatedSection>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── All posts ──────────────────────────────────────── */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <AnimatedSection className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1l1.5 3h3l-2.5 2 1 3L6 7.5 3 9l1-3L1.5 4h3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  All Articles
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl">
                All dental guides
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-12 gap-4">
              {POSTS.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 80} className="col-span-12 sm:col-span-6 lg:col-span-3">
                  <a href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-white rounded-3xl p-7 h-full flex flex-col justify-between min-h-[220px] group-hover:bg-[#0F2D6B] transition-colors duration-300">
                      <div>
                        <span className="inline-block bg-[#F4F6F8] group-hover:bg-white/15 text-[#0F2D6B] group-hover:text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 transition-colors">
                          {post.tag}
                        </span>
                        <h3 className="text-[#111827] font-semibold leading-snug group-hover:text-white transition-colors">
                          {post.title}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-gray-400 group-hover:text-white/50 text-xs transition-colors">{post.readTime} read</span>
                        <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
