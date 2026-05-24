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

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

const INPUT =
  "w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#111827] bg-[#F9FAFB] outline-none focus:border-[#00B4D8] focus:ring-[3px] focus:ring-[#00B4D8]/10 placeholder:text-gray-400 focus:bg-white transition-all";

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
    <section id="contact" className="bg-[#F4F6F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section tag + heading */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#111827] leading-tight max-w-lg">
            Book your<br />
            <span className="text-[#0077B6]">appointment</span> today
          </h2>
          <div className="shrink-0 sm:pt-2">
            <span className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 text-xs font-medium px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] inline-block" />
              Get In Touch
            </span>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-5">

          {/* ── Left panel — dark navy ─────────────────────── */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div
              className="rounded-3xl p-8 h-full flex flex-col justify-between relative overflow-hidden min-h-[460px]"
              style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
            >
              {/* Subtle bg image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url('/clinic_entrance.png')" }}
              />

              <div className="relative z-10">
                <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                  Vighnaharta Dental Clinic
                </span>
                <h3 className="text-white font-semibold text-2xl leading-snug mb-3">
                  We&apos;re here for you,<br />every day of the week
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Walk in or book ahead — our team confirms your slot within 2 hours.
                </p>
              </div>

              {/* Contact items */}
              <div className="relative z-10 flex flex-col gap-4 mt-8">
                <ContactRow
                  icon={<PhoneIcon />}
                  label="Call Us"
                  value="080079 78328"
                  href="tel:08007978328"
                />
                <ContactRow
                  icon={<ClockIcon />}
                  label="Working Hours"
                  value="All Days: 9:30 AM – 9:30 PM"
                />
                <ContactRow
                  icon={<PinIcon />}
                  label="Our Location"
                  value={"Shop No. 105, Oxy Primo Complex\nBakori Phata, Wagholi, Pune 412207"}
                />
              </div>

              {/* Emergency strip */}
              <div className="relative z-10 mt-6 bg-white/10 border border-white/20 rounded-2xl px-5 py-4">
                <p className="text-white text-sm font-medium mb-0.5">Dental Emergency?</p>
                <p className="text-white/60 text-xs leading-relaxed">
                  Call immediately —{" "}
                  <a href="tel:08007978328" className="text-[#00B4D8] hover:underline">080079 78328</a>.
                  Emergency slots open daily.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right panel — form ────────────────────────── */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 h-full shadow-sm border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-[#00B4D8] flex items-center justify-center text-white text-2xl font-semibold">
                    ✓
                  </div>
                  <h3 className="text-[#111827] font-semibold text-2xl">Appointment Requested!</h3>
                  <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                    Thank you, {form.name.split(" ")[0]}! We&apos;ll call you within 2 hours to confirm your slot.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" }); }}
                    className="mt-2 text-[#00B4D8] text-sm font-medium hover:underline"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name" required>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="Priya Mehta" required className={INPUT} />
                    </Field>
                    <Field label="Phone Number" required>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="080079 78328" required className={INPUT} />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email Address">
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="you@example.com" className={INPUT} />
                    </Field>
                    <Field label="Preferred Date" required>
                      <input type="date" name="date" value={form.date} onChange={handleChange}
                        required min={new Date().toISOString().split("T")[0]} className={INPUT} />
                    </Field>
                  </div>
                  <Field label="Service Required" required>
                    <select name="service" value={form.service} onChange={handleChange} required className={INPUT}>
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message (optional)">
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Describe your concern or any special requirements…"
                      rows={3} className={`${INPUT} resize-none`} />
                  </Field>
                  <button
                    type="submit"
                    className="w-full bg-[#0077B6] hover:bg-[#005f94] text-white py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 btn-shine"
                  >
                    Confirm Appointment →
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon, label, value, href,
}: {
  icon: React.ReactNode; label: string; value: string; href?: string;
}) {
  const lines = value.split("\n");
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">{label}</p>
        {lines.map((line, i) =>
          href && i === 0 ? (
            <a key={i} href={href} className="text-white text-sm font-medium hover:text-[#00B4D8] transition-colors block">
              {line}
            </a>
          ) : (
            <p key={i} className="text-white text-sm font-medium leading-snug">{line}</p>
          )
        )}
      </div>
    </div>
  );
}

function Field({
  label, required, children,
}: {
  label: string; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[#111827] text-xs font-semibold uppercase tracking-wide mb-1.5">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
