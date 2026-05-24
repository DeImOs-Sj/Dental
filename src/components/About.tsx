import AnimatedSection from "./AnimatedSection";

const STATS = [
  { num: "5,000+", label: "happy patients"            },
  { num: "20+",    label: "treatments offered"         },
  { num: "15",     label: "years in practice"          },
  { num: "98%",    label: "patient satisfaction rate"  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#F4F6F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text + stats ───────────────────────────── */}
          <AnimatedSection direction="left">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM8 11.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
              </svg>
              About us
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#111827] leading-tight mb-10">
              Expertise you<br />can trust
            </h2>

            {/* Stats 2×2 grid */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-0">
              {STATS.map((s, i) => (
                <div key={s.label}>
                  <div className="pb-5 pt-4 border-b border-gray-200">
                    <p className="text-4xl sm:text-5xl font-semibold text-[#111827] leading-none mb-1.5">
                      {s.num}
                    </p>
                    <p className="text-gray-400 text-sm">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Right: circular image + floating cards ───────── */}
          <AnimatedSection direction="right" className="relative flex justify-center items-center">

            {/* Decorative small circle bottom-left */}
            <div className="absolute bottom-4 left-0 w-24 h-24 rounded-full bg-[#C5DFF5] opacity-70" />

            {/* Main circle image */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shrink-0 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/equippment.png"
                alt="State-of-the-art dental equipment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card: Patient rate — top left */}
            <div className="absolute top-4 left-2 sm:-left-4 bg-white rounded-2xl px-5 py-4 shadow-xl float-anim">
              <p className="text-gray-500 text-xs mb-2">Patient rate</p>
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4].map(i => (
                  <svg key={i} className="w-4 h-4 text-[#0077B6]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <svg className="w-4 h-4 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p className="text-[#0077B6] font-semibold text-sm">4.9/5</p>
            </div>

            {/* Floating badge: Expert Hands — bottom right */}
            <div className="absolute bottom-8 right-0 sm:-right-4 bg-white rounded-xl px-4 py-2.5 shadow-xl float-anim [animation-delay:0.8s]">
              <p className="text-[#111827] font-semibold text-sm">Expert Hands</p>
            </div>

          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
