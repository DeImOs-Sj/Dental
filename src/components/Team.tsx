import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const SPECIALTIES = [
  "Dental Implants",
  "Root Canal Treatment",
  "Orthodontics / Braces",
  "Teeth Whitening",
  "Pediatric Dentistry",
  "General Dentistry",
];

export default function Team() {
  return (
    <section id="team" className="bg-[#F4F6F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <AnimatedSection className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#111827] leading-tight mb-4">
              Meet your dentist
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Dr. Saurabh Jadhav founded Vighnaharta Dental Clinic to bring expert, honest dental care to the Wagholi community.
            </p>
          </div>
          <div className="shrink-0 sm:pt-2">
            <span className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 text-xs font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0077B6] inline-block" />
              Principal Dentist
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-12 gap-4">

          {/* Dark featured card */}
          <AnimatedSection direction="left" className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div
              className="rounded-3xl p-8 h-full flex flex-col justify-between relative overflow-hidden min-h-[360px]"
              style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
            >
              <div className="relative z-10">
                <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  Principal Dentist
                </span>
                <h3 className="text-white font-semibold text-3xl leading-tight">
                  Dr. Saurabh<br />Jadhav
                </h3>
              </div>
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="border-t border-white/20 pt-3">
                    <p className="text-white font-semibold text-xl">Wagholi</p>
                    <p className="text-white/60 text-xs">Bakori Phata, Pune</p>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <p className="text-white font-semibold text-xl">All days</p>
                    <p className="text-white/60 text-xs">9:30 AM – 9:30 PM</p>
                  </div>
                </div>
                <div className="flex items-end justify-between gap-3">
                  <p className="text-white/70 text-sm leading-relaxed">
                    Marathi · Hindi · English
                  </p>
                  <Link
                    href="/doctors"
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

          {/* Specialties grid */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-5">
            <AnimatedSection delay={80}>
              <div
                className="rounded-3xl p-6 mb-4"
                style={{ background: "linear-gradient(160deg, #7ecef4 0%, #a8dff5 40%, #c5ecfc 100%)" }}
              >
                <span className="inline-block bg-white/80 backdrop-blur-sm text-[#111827] text-xs font-semibold px-3 py-1.5 rounded-full mb-2">
                  Areas of expertise
                </span>
                <p className="text-[#0F2D6B]/70 text-sm">All major treatments under one roof</p>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-4">
              {SPECIALTIES.map((sp, i) => (
                <AnimatedSection key={sp} delay={i * 60 + 120}>
                  <div className="bg-white rounded-2xl p-4 flex flex-col gap-1 min-h-[72px] justify-center">
                    <p className="text-[#111827] font-semibold text-sm leading-snug">{sp}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Rating + CTA card */}
          <AnimatedSection delay={160} className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            <div className="bg-white rounded-3xl p-7 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-5xl font-semibold text-[#111827] mb-1">4.9★</p>
                <p className="text-gray-400 text-sm leading-snug">average patient<br/>rating</p>
              </div>
              <div className="flex flex-col gap-2.5 mt-6">
                <span className="inline-block bg-[#0F2D6B] text-white text-xs font-semibold px-4 py-2 rounded-full w-fit">Expert Care</span>
                <span className="inline-block bg-[#C5DFF5] text-[#0F2D6B] text-xs font-semibold px-4 py-2 rounded-full w-fit">5,000+ Patients</span>
                <span className="inline-block border border-gray-300 text-gray-600 text-xs font-medium px-4 py-2 rounded-full w-fit">Open 7 Days</span>
              </div>
            </div>
            <Link
              href="/doctors"
              className="bg-[#0F2D6B] hover:bg-[#0a2050] text-white text-sm font-semibold px-6 py-4 rounded-2xl text-center transition-colors"
            >
              View Full Profile
            </Link>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
