"use client";
import { useState, useEffect, useCallback } from "react";

const REVIEWS = [
  {
    name: "Priya Mehta",
    text: "Best dental clinic ever. They've got the best technology and the doctors are wonderful. I had my treatment here and never felt weird about going to a clinic. I would recommend Vighnaharta to anyone who wants to get their teeth fixed and have a beautiful smile.",
  },
  {
    name: "Rahul Desai",
    text: "Had a root canal done here — completely pain-free! The clinic is spotlessly clean, the staff is professional, and the equipment is state-of-the-art. Dr. Sharma was very professional and answered all of my questions. I couldn't have been in any safer hands.",
  },
  {
    name: "Sneha Kapoor",
    text: "Best place to get your dental needs fulfilled. Empathetic and energetic doctors with soft behaviour. They only tell you what is needed and what can be avoided. My whole family comes here and the treatment plans are always honest and transparent.",
  },
  {
    name: "Amit Joshi",
    text: "The clinic is modern and hygienic. I came for teeth whitening and the results were outstanding. The team was friendly and made me feel comfortable throughout. Highly recommend Vighnaharta Dental for anyone in Pune.",
  },
  {
    name: "Meera Patel",
    text: "Excellent experience for my child's first dental visit. The pediatric care was exceptional — the staff made my daughter feel at ease and even enjoy the visit. We will definitely be coming back for all our family's dental needs.",
  },
];

function SpeechCard({ text, name }: { text: string; name: string }) {
  return (
    <div className="flex flex-col items-start">
      {/* Card */}
      <div className="relative border border-white/25 rounded-2xl px-6 pt-6 pb-8 text-center w-full">
        {/* Top quote */}
        <div className="text-3xl font-serif text-[#F97316] leading-none mb-4">"</div>
        <p className="text-white/85 text-sm leading-relaxed text-center">{text}</p>
        {/* Bottom quote */}
        <div className="text-3xl font-serif text-[#F97316] leading-none mt-4 flex justify-end">"</div>
      </div>

      {/* Tail */}
      <div className="ml-10">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
          <path d="M2 0 L2 14 L18 14" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Name */}
      <div className="ml-6 -mt-1 flex items-center gap-2">
        <span className="text-white font-semibold text-sm">{name}</span>
        <span className="text-[#F97316] text-lg font-serif leading-none">"</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = REVIEWS.length;
  const visible = 3;

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, next]);

  const shown = Array.from({ length: visible }, (_, i) => REVIEWS[(current + i) % total]);

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-28 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image + dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/clinic_entrance.png')" }}
      />
      <div className="absolute inset-0 bg-[#0F2D6B]/82" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-white text-center mb-14">
          Patient Speak
        </h2>

        {/* Cards + arrows */}
        <div className="flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* 3 cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {shown.map((r, i) => (
              <SpeechCard key={`${r.name}-${i}`} text={r.text} name={r.name} />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-10 h-10 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
