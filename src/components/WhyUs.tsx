import AnimatedSection from "./AnimatedSection";

const FEATURES = [
  {
    icon: "⚡",
    title: "Same-Day Appointments",
    desc: "We respect your time. Book online or call us for same-day emergency slots.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden fees. Clear, upfront pricing with flexible EMI options available.",
  },
  {
    icon: "🦷",
    title: "Pain-Free Treatment",
    desc: "Advanced numbing techniques and sedation dentistry for a completely painless experience.",
  },
  {
    icon: "🕐",
    title: "Flexible Hours",
    desc: "Open every day from 9:30 AM to 9:30 PM — including weekends and holidays.",
  },
  {
    icon: "📱",
    title: "Digital Records",
    desc: "Paperless clinic with secure digital records, reminders, and teleconsultation available.",
  },
  {
    icon: "❤️",
    title: "Lifetime Care",
    desc: "We partner with you for life — from your child's first visit to senior dental health.",
  },
];

const STATS = [
  { num: "98%", label: "Patient Satisfaction" },
  { num: "5,000+", label: "Smiles Transformed" },
  { num: "15+", label: "Years of Excellence" },
  { num: "24h", label: "Emergency Support" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#1F8A70] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Dentistry That Puts You First
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We combine clinical expertise with genuine care to deliver an experience that
            keeps patients coming back — and referring their families.
          </p>
        </AnimatedSection>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FEATURES.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 80}>
              <div className="why-card bg-[#E5E7EB]/50 border border-[#E5E7EB] rounded-2xl p-6 h-full">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[#111827] text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats banner */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-[#004E3D] to-[#1F8A70] rounded-3xl p-8 sm:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-4xl sm:text-5xl font-bold text-white mb-1">{s.num}</p>
                  <p className="text-white/65 text-sm uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
