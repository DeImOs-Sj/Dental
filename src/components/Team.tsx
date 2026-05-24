import AnimatedSection from "./AnimatedSection";

const DOCTORS = [
  {
    initials: "DS",
    name: "Dr. Deepak Sharma",
    specialty: "General Dentist",
    color: "#C5DFF5",
    textColor: "#0F2D6B",
  },
  {
    initials: "PR",
    name: "Dr. Priya Rao",
    specialty: "Orthodontist",
    color: "#0F2D6B",
    textColor: "#ffffff",
  },
  {
    initials: "AK",
    name: "Dr. Arjun Kulkarni",
    specialty: "Oral & Implant Surgeon",
    color: "#0077B6",
    textColor: "#ffffff",
  },
  {
    initials: "SM",
    name: "Dr. Sneha More",
    specialty: "Pediatric Dentist",
    color: "#E8F4FD",
    textColor: "#0F2D6B",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#F4F6F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header row */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#111827] leading-tight mb-4">
              Our team of experts<br />
              <span className="text-[#0077B6]">specialized care</span> for<br />
              every dental need
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Each of our dentists brings years of focused training and a genuine passion
              for patient wellbeing — so every smile gets the right specialist.
            </p>
          </div>
          <div className="shrink-0 sm:pt-2">
            <span className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 text-xs font-medium px-4 py-2 rounded-full">
              <svg className="w-3 h-3 text-[#0077B6]" viewBox="0 0 12 12" fill="currentColor">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="6" cy="6" r="2" fill="currentColor"/>
              </svg>
              Dental Specialists
            </span>
          </div>
        </AnimatedSection>

        {/* Doctor cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {DOCTORS.map((doc, i) => (
            <AnimatedSection key={doc.name} delay={i * 100} className="flex flex-col items-center text-center group">
              {/* Circle avatar */}
              <div
                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center mb-5 shadow-md transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: doc.color }}
              >
                <span
                  className="text-3xl sm:text-4xl font-semibold tracking-wide"
                  style={{ color: doc.textColor }}
                >
                  {doc.initials}
                </span>
              </div>

              {/* Info */}
              <p className="text-[#111827] font-semibold text-base leading-tight mb-1">{doc.name}</p>
              <p className="text-gray-400 text-sm">{doc.specialty}</p>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
