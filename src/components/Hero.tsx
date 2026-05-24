export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#004E3D] flex items-center pt-16 overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1F8A70] opacity-10 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl pointer-events-none" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left content ─────────────────────────────────── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-[#1F8A70]/20 border border-[#1F8A70]/40 text-[#5ad4a8] rounded-full px-4 py-1.5 text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-[#1F8A70] pulse-anim" />
              Trusted Dental Care Since 2005
            </div>

            {/* Headline */}
            <h1 className="hero-title text-5xl sm:text-6xl lg:text-[68px] font-bold text-white leading-[1.1] mb-6">
              Your Smile,
              <br />
              <span className="text-[#1F8A70]">Our Priority.</span>
            </h1>

            {/* Sub-text */}
            <p className="hero-text text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Experience compassionate, world-class dental care for the whole family.
              From routine checkups to advanced cosmetic treatments — every visit is
              designed to be comfortable and stress-free.
            </p>

            {/* Stats */}
            <div className="hero-stats flex justify-center lg:justify-start gap-10 mb-10">
              {[
                { num: "5,000+", label: "Happy Patients" },
                { num: "15+", label: "Years Experience" },
                { num: "20+", label: "Treatments" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-white">{s.num}</p>
                  <p className="text-white/45 text-xs mt-0.5 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="bg-[#1F8A70] hover:bg-[#18705c] text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 btn-shine"
              >
                Book Appointment →
              </a>
              <a
                href="#services"
                className="border border-white/25 hover:border-white/60 text-white/75 hover:text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-white/5"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* ── Right illustration ───────────────────────────── */}
          <div className="hero-image hidden lg:flex justify-center items-center relative">
            <div className="relative">
              {/* Outer ring */}
              <div className="w-96 h-96 rounded-full border border-white/10 flex items-center justify-center">
                {/* Inner ring */}
                <div className="w-72 h-72 rounded-full border border-white/10 bg-white/5 flex items-center justify-center float-anim">
                  <BigToothSVG />
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-2 right-4 bg-white rounded-2xl px-4 py-3 shadow-2xl float-anim [animation-delay:0.5s]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#004E3D] flex items-center justify-center text-white text-sm">
                    ★
                  </div>
                  <div>
                    <p className="text-[#111827] font-bold text-sm leading-none">4.9 / 5.0</p>
                    <p className="text-gray-400 text-xs mt-0.5">200+ Reviews</p>
                  </div>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-2 left-0 bg-[#1F8A70] rounded-2xl px-4 py-3 shadow-2xl float-anim [animation-delay:1s]">
                <p className="text-white font-bold text-sm leading-none">✓ NABH Certified</p>
                <p className="text-white/70 text-xs mt-0.5">State-of-the-art facility</p>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute bottom-8 -right-6 bg-[#111827] rounded-2xl px-4 py-3 shadow-2xl float-anim [animation-delay:1.5s]">
                <p className="text-white font-bold text-sm leading-none">😊 Painless Care</p>
                <p className="text-gray-400 text-xs mt-0.5">Advanced anaesthesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-[72px]"
        >
          <path
            d="M0 72 L0 40 Q360 0 720 24 Q1080 48 1440 16 L1440 72 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

function BigToothSVG() {
  return (
    <svg viewBox="0 0 120 150" className="w-36 h-36 text-white/20" fill="currentColor">
      <path d="M60 6C44 6 30 13 24 23 18 32 17 42 17 50c0 5 .6 9 1.8 14 2.2 9 4.4 18 6.2 27 1.8 9 3.4 20 9 20 3.5 0 5.8-2.8 7.2-7.2.9-2.8 1.6-6 2.4-9.2.8-3.2 1.8-6.6 4.4-6.6 2.6 0 3.6 3.4 4.4 6.6.8 3.2 1.5 6.4 2.4 9.2 1.4 4.4 3.7 7.2 7.2 7.2 5.6 0 7.2-11 9-20 1.8-9 4-18 6.2-27 1.2-5 1.8-9 1.8-14 0-8-1-18-7-27C90 13 76 6 60 6z" />
    </svg>
  );
}
