import AnimatedSection from "./AnimatedSection";

const SERVICES = [
  {
    num: "01",
    title: "General Dentistry",
    desc: "Comprehensive exams, professional cleanings, and preventive care to keep your teeth healthy for life.",
    gradient: "from-[#004E3D] to-[#1F8A70]",
    icon: <ToothIcon />,
  },
  {
    num: "02",
    title: "Teeth Whitening",
    desc: "Professional in-office treatments that deliver dramatic, long-lasting brightness safely and comfortably.",
    gradient: "from-[#1F8A70] to-[#2db896]",
    icon: <SparkleIcon />,
  },
  {
    num: "03",
    title: "Orthodontics",
    desc: "Traditional braces and clear aligners to achieve perfect alignment and a confident, straight smile.",
    gradient: "from-[#004E3D] to-[#006b54]",
    icon: <AlignIcon />,
  },
  {
    num: "04",
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacement that looks, feels, and functions just like real teeth.",
    gradient: "from-[#1F8A70] to-[#004E3D]",
    icon: <ImplantIcon />,
  },
  {
    num: "05",
    title: "Root Canal",
    desc: "Gentle, virtually painless therapy to save infected teeth and provide fast, lasting relief from pain.",
    gradient: "from-[#006b54] to-[#1F8A70]",
    icon: <RootIcon />,
  },
  {
    num: "06",
    title: "Pediatric Dentistry",
    desc: "Fun, child-friendly dental care that builds healthy habits and bright smiles from the very first visit.",
    gradient: "from-[#004E3D] to-[#1F8A70]",
    icon: <HeartIcon />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F8FAF9] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ───────────────────────────────────────────── */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[#1F8A70] text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#1F8A70]" />
            What We Offer
            <span className="w-8 h-px bg-[#1F8A70]" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4 leading-tight">
            Complete Dental Care
            <br />
            <span className="text-[#004E3D]">Under One Roof</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From routine checkups to full smile makeovers — every treatment delivered
            with expertise, warmth, and the latest technology.
          </p>
        </AnimatedSection>

        {/* ── Card grid ────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 70}>
              <div className="group relative bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] hover:border-transparent transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,78,61,0.18)] hover:-translate-y-1.5 cursor-default h-full flex flex-col">

                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${s.gradient} transition-all duration-300 group-hover:h-2`} />

                {/* Card body */}
                <div className="p-7 flex flex-col flex-1">
                  {/* Number + icon row */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Number badge */}
                    <span className="text-[#E5E7EB] font-black text-5xl leading-none select-none group-hover:text-[#004E3D]/15 transition-colors duration-300">
                      {s.num}
                    </span>

                    {/* Icon circle */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg shadow-[#004E3D]/20 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      {s.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-[#111827] font-bold text-xl mb-3 group-hover:text-[#004E3D] transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>

                  {/* Learn more link */}
                  <div className="mt-6 flex items-center gap-1.5 text-[#1F8A70] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Bottom glow on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${s.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`} />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Bottom CTA strip ─────────────────────────────────── */}
        <AnimatedSection delay={400}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#004E3D] rounded-3xl px-8 py-6">
            <div>
              <p className="text-white font-bold text-lg">Not sure which treatment you need?</p>
              <p className="text-white/60 text-sm mt-0.5">Book a free consultation and let our experts guide you.</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 bg-[#1F8A70] hover:bg-[#18705c] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:shadow-xl hover:-translate-y-0.5 btn-shine whitespace-nowrap"
            >
              Free Consultation →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── Icons ────────────────────────────────────────────────── */
function ToothIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.2 2 7.1 3.5 5.6 5.1 4.3 6.4 3.5 8 3.5 9.7c0 1.6.4 3 1 4.6.6 1.6.9 3.1 1.2 4.6.4 1.8.9 4.1 2.6 4.1.9 0 1.5-.7 1.9-1.7.4-.9.7-2.1 1-3.1.2-.8.5-1.7 1.3-1.7s1.1.9 1.3 1.7c.3 1 .6 2.2 1 3.1.4 1 1 1.7 1.9 1.7 1.7 0 2.2-2.3 2.6-4.1.3-1.5.6-3 1.2-4.6.6-1.6 1-3 1-4.6 0-1.7-.8-3.3-2.1-4.6C16.9 3.5 14.8 2 12 2z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function AlignIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="8" width="5" height="8" rx="1.5" strokeLinecap="round" />
      <rect x="9.5" y="6" width="5" height="10" rx="1.5" strokeLinecap="round" />
      <rect x="16" y="8" width="5" height="8" rx="1.5" strokeLinecap="round" />
      <path strokeLinecap="round" d="M5.5 12h13" />
    </svg>
  );
}

function ImplantIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C10 3 8.5 4.2 7.5 5.5 6.7 6.6 6.5 7.8 6.5 9c0 1.2.3 2.2.7 3.3.4 1.1.6 2.1.8 3.2.3 1.2.6 2.5 1.7 2.5.6 0 1-.5 1.3-1.2.3-.6.5-1.5.7-2.2.1-.5.3-1.1.8-1.1s.7.6.8 1.1c.2.7.4 1.6.7 2.2.3.7.7 1.2 1.3 1.2 1.1 0 1.4-1.3 1.7-2.5.2-1.1.4-2.1.8-3.2.4-1.1.7-2.1.7-3.3 0-1.2-.2-2.4-1-3.5C15.5 4.2 14 3 12 3z" />
      <path strokeLinecap="round" d="M12 18v3M10.5 19.5h3" />
    </svg>
  );
}

function RootIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C10 3 8.5 4.2 7.5 5.5 6.7 6.6 6.5 7.8 6.5 9c0 1.2.3 2.2.7 3.3L9 15" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2 0 3.5 1.2 4.5 2.5.8 1.1 1 2.3 1 3.5 0 1.2-.3 2.2-.7 3.3L15 15" />
      <path strokeLinecap="round" d="M9 15l-1.5 5M15 15l1.5 5M12 15v4" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
