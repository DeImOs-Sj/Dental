import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const HIGHLIGHTS = [
  {
    icon: "🏆",
    title: "Award-Winning Care",
    desc: "Recognised by the Maharashtra Dental Association for excellence in patient care and clinical outcomes.",
  },
  {
    icon: "🔬",
    title: "Latest Technology",
    desc: "Digital X-rays, 3D scanning, and laser dentistry for precise, minimally invasive treatments.",
  },
  {
    icon: "👨‍⚕️",
    title: "Experienced Team",
    desc: "Our specialists average 12+ years of clinical experience across all major dental disciplines.",
  },
  {
    icon: "🛡️",
    title: "Safety First",
    desc: "Hospital-grade sterilisation protocols and single-use disposables ensure your complete safety.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#EBF7F2] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <AnimatedSection direction="left">
              <span className="text-[#1F8A70] text-sm font-semibold uppercase tracking-widest mb-3 block">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-6 leading-tight">
                Your Family&apos;s Dental Home
                <br />
                <span className="text-[#004E3D]">Since 2005</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Vighnaharta Dental Clinic was founded with a single mission: to make high-quality
                dental care accessible, comfortable, and affordable for every family in the
                community. Over two decades, we have built a reputation for gentle care, honest
                advice, and outstanding clinical results.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Our clinic combines the warmth of a neighbourhood practice with the capabilities
                of a specialist facility — so you never have to look anywhere else for your dental
                needs.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#004E3D] hover:bg-[#003d30] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 btn-shine"
              >
                Book a Consultation
              </a>
            </AnimatedSection>
          </div>

          {/* Right — image + highlights */}
          <AnimatedSection direction="right" className="flex flex-col gap-5">
            {/* Equipment photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#004E3D]/10 group">
              <Image
                src="/operational_equippment.png"
                alt="State-of-the-art dental treatment room at Vighnaharta Dental Clinic"
                width={800}
                height={530}
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#004E3D] flex items-center justify-center text-white text-sm shrink-0">
                  ✦
                </div>
                <div>
                  <p className="text-[#111827] font-bold text-sm leading-none">State-of-the-art</p>
                  <p className="text-gray-500 text-xs mt-0.5">Treatment technology</p>
                </div>
              </div>
            </div>

            {/* 2-col highlights below image */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h, i) => (
                <div
                  key={h.title}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-[#E5E7EB]"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <h3 className="font-bold text-[#111827] text-sm mb-1">{h.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Doctor spotlight */}
        <AnimatedSection delay={300}>
          <div className="mt-16 bg-[#004E3D] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
            {/* Avatar placeholder */}
            <div className="shrink-0 w-24 h-24 rounded-full bg-[#1F8A70] flex items-center justify-center text-white text-4xl shadow-lg">
              👨‍⚕️
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[#1F8A70] text-sm font-semibold uppercase tracking-widest mb-1">
                Chief Dental Officer
              </p>
              <h3 className="text-white font-bold text-2xl mb-2">Dr. Rajesh Sharma, MDS</h3>
              <p className="text-white/65 text-sm leading-relaxed max-w-2xl">
                With over 18 years of experience in prosthodontics and cosmetic dentistry,
                Dr. Sharma leads our team with a patient-first philosophy. He has completed
                advanced training at AIIMS Delhi and holds fellowships from three international
                dental academies.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
