"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const SERVICES = [
  "General Check-up & Cleaning",
  "Teeth Whitening",
  "Orthodontics / Braces",
  "Dental Implants",
  "Root Canal Treatment",
  "Pediatric Dentistry",
  "Emergency Care",
  "Other",
];

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Shop No. 105, Oxy Primo Complex\nPune–Nagar Road, Bakori Phata, Wagholi\nPune, Maharashtra 412207",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "080079 78328",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "contact@vighnahartadental.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "All Days: 9:30 AM – 9:30 PM",
  },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

const INPUT =
  "w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#111827] bg-[#F9FAFB] outline-none focus:border-[#1F8A70] focus:ring-[3px] focus:ring-[#1F8A70]/10 placeholder:text-gray-400 focus:bg-white transition-all";

export default function Appointment() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", service: "", date: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#004E3D] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#1F8A70] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Book Your Appointment
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Ready for a healthier smile? Fill in the form below and our team will
            confirm your appointment within 2 hours.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── Form ─────────────────────────────────────────── */}
          <AnimatedSection direction="left">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#1F8A70] flex items-center justify-center text-white text-3xl">
                    ✓
                  </div>
                  <h3 className="text-[#111827] font-bold text-2xl">Appointment Requested!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank you, {form.name.split(" ")[0]}! We&apos;ll call you within 2 hours to confirm
                    your slot.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" }); }}
                    className="mt-2 text-[#1F8A70] text-sm font-medium hover:underline"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name" required>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="Priya Mehta" required
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#111827] bg-[#F9FAFB] outline-none focus:border-[#1F8A70] focus:ring-[3px] focus:ring-[#1F8A70]/10 placeholder:text-gray-400 focus:bg-white transition-all"
                      />
                    </Field>
                    <Field label="Phone Number" required>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="080079 78328" required
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm text-[#111827] bg-[#F9FAFB] outline-none focus:border-[#1F8A70] focus:ring-[3px] focus:ring-[#1F8A70]/10 placeholder:text-gray-400 focus:bg-white transition-all"
                      />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email Address">
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className={INPUT}
                      />
                    </Field>
                    <Field label="Preferred Date" required>
                      <input
                        type="date" name="date" value={form.date} onChange={handleChange}
                        required min={new Date().toISOString().split("T")[0]}
                        className={INPUT}
                      />
                    </Field>
                  </div>
                  <Field label="Service Required" required>
                    <select
                      name="service" value={form.service} onChange={handleChange} required
                      className={INPUT}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message (optional)">
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Describe your concern or any special requirements…"
                      rows={3}
                      className={`${INPUT} resize-none`}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="w-full bg-[#1F8A70] hover:bg-[#18705c] text-white py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 btn-shine"
                  >
                    Confirm Appointment →
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* ── Contact info ─────────────────────────────────── */}
          <AnimatedSection direction="right">
            <div className="flex flex-col gap-6 h-full">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[#1F8A70] flex items-center justify-center text-white">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{c.label}</p>
                    {c.value.split("\n").map((line, i) => (
                      <p key={i} className="text-white text-sm font-medium leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Emergency callout */}
              <div className="mt-auto bg-[#1F8A70]/20 border border-[#1F8A70]/40 rounded-2xl p-5">
                <p className="text-[#5ad4a8] font-bold text-sm mb-1">🚨 Dental Emergency?</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Call us immediately at{" "}
                  <a href="tel:08007978328" className="text-white font-semibold hover:underline">
                    080079 78328
                  </a>
                  . We keep emergency slots open every day.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[#111827] text-xs font-semibold uppercase tracking-wide mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
