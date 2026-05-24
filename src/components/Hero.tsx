export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#F4F6F8] pt-24 pb-10 min-h-screen flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col flex-1 gap-8">

        {/* ── Top row: headline + description/CTA ──────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          {/* Left — headline */}
          <div>
            <p className="hero-badge text-[#0077B6] text-sm font-medium mb-3 tracking-wide">
              Smile &amp; Dental Care
            </p>
            <h1 className="hero-title text-5xl sm:text-6xl lg:text-[64px] font-semibold text-[#111827] leading-[1.1] max-w-xl">
              Advanced dentistry<br />for every smile
            </h1>
          </div>

          {/* Right — tagline + CTA */}
          <div className="hero-ctas lg:max-w-xs lg:pb-2 flex flex-col items-start gap-5">
            <p className="text-gray-500 text-sm leading-relaxed">
              Complete care for your smile — prevention, restoration, and aesthetic
              treatments in one place.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#0F2D6B] hover:bg-[#0a2050] text-white pl-5 pr-3 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg btn-shine"
            >
              Schedule Appointment
              <span className="bg-white/15 rounded-lg px-2.5 py-1 text-xs tracking-wider">››</span>
            </a>
          </div>
        </div>

        {/* ── Cards row ────────────────────────────────────────── */}
        <div className="hero-stats grid grid-cols-12 gap-4 flex-1 min-h-72">

          {/* Card 1 — large, dark blue, treatment */}
          <div className="col-span-12 lg:col-span-6 bg-[#0F2D6B] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-72 group">
            {/* Background clinic image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{ backgroundImage: "url('/equippment.png')" }}
            />
            {/* Top content */}
            <div className="relative z-10">
              <h3 className="text-white font-semibold text-2xl sm:text-3xl mb-3">Dental Treatment</h3>
              <p className="text-white/65 text-sm leading-relaxed max-w-xs">
                Comprehensive care including check-ups, fillings, root canal therapy,
                crowns, and preventive treatments — tailored to your needs.
              </p>
            </div>
            {/* Bottom row */}
            <div className="relative z-10 flex items-center justify-between mt-6">
              {/* Avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {["R", "S", "P"].map((l) => (
                    <div
                      key={l}
                      className="w-9 h-9 rounded-full bg-white border-2 border-[#0F2D6B] flex items-center justify-center text-[#0F2D6B] text-xs font-semibold shrink-0"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <span className="text-white text-sm font-semibold">+20</span>
              </div>
              {/* Arrow button */}
              <a
                href="#services"
                className="w-10 h-10 rounded-xl bg-[#0077B6] hover:bg-[#005d8f] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 — medium, light blue, Orthodontics */}
          <div className="col-span-6 lg:col-span-3 bg-[#C5DFF5] hover:bg-[#b8d6f2] transition-colors duration-300 rounded-3xl flex items-center justify-center min-h-72 cursor-default">
            <span
              className="text-[#0F2D6B] font-semibold text-2xl select-none"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Orthodontics
            </span>
          </div>

          {/* Card 3 — white, dental image, Dental Surgery */}
          <div className="col-span-6 lg:col-span-3 bg-white rounded-3xl relative overflow-hidden flex items-center justify-center min-h-72 group cursor-default">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-500"
              style={{ backgroundImage: "url('/operational_equippment.png')" }}
            />
            <span
              className="text-[#111827] font-semibold text-2xl relative z-10 select-none"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Dental Surgery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
