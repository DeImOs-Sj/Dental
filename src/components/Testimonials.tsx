import AnimatedSection from "./AnimatedSection";

const REVIEWS = [
  {
    name: "Priya Mehta",
    role: "Architect, Mumbai",
    stars: 5,
    text: "I had severe dental anxiety before coming here. Dr. Sharma and his team were incredibly patient and gentle. My smile transformation through Invisalign has been life-changing. Highly recommend!",
    date: "March 2024",
  },
  {
    name: "Rahul Desai",
    role: "Software Engineer, Pune",
    stars: 5,
    text: "Had a root canal done here — completely pain-free! The clinic is spotlessly clean, the staff is professional, and the equipment is state-of-the-art. Worth every rupee.",
    date: "January 2024",
  },
  {
    name: "Sneha Kapoor",
    role: "Teacher, Thane",
    stars: 5,
    text: "My whole family comes here — from my 6-year-old to my 65-year-old mother. The team makes everyone feel comfortable and the treatment plans are always honest and transparent.",
    date: "April 2024",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#E5E7EB] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#1F8A70] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Patient Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Real Results, Real Smiles
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Don&apos;t take our word for it — hear from the thousands of patients who trust
            Vighnaharta Dental Clinic with their smiles.
          </p>
        </AnimatedSection>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((r, i) => (
            <AnimatedSection key={r.name} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 h-full shadow-sm hover:shadow-md transition-shadow border border-[#E5E7EB] flex flex-col">
                {/* Quote */}
                <div className="text-5xl text-[#004E3D] font-serif leading-none mb-4 opacity-30">
                  "
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  {r.text}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-[#004E3D] flex items-center justify-center text-white font-bold text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-[#111827] font-semibold text-sm">{r.name}</p>
                      <p className="text-gray-400 text-xs">{r.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Stars count={r.stars} />
                    <p className="text-gray-400 text-xs mt-1">{r.date}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Google rating banner */}
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-[#111827] font-bold text-lg">Rated 4.9 / 5 on Google</p>
              <p className="text-gray-500 text-sm">Based on 200+ verified patient reviews</p>
            </div>
            <Stars count={5} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
