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
  "Other / Not Sure",
];

const PHONE = "918007978328";

export default function Appointment() {
  const [selected, setSelected] = useState("");

  const waLink = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    selected
      ? `Hi, I'd like to book an appointment for *${selected}* at Vighnaharta Dental Clinic, Wagholi. Please let me know the available slots.`
      : `Hi, I'd like to book a dental appointment at Vighnaharta Dental Clinic, Wagholi. Please let me know the available slots.`
  )}`;

  return (
    <section id="contact" className="bg-[#F4F6F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section heading */}
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

          {/* ── Left — dark card ───────────────────────────── */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div
              className="rounded-3xl p-8 h-full flex flex-col justify-between relative overflow-hidden min-h-[460px]"
              style={{ background: "linear-gradient(160deg, #0F2D6B 0%, #1a4a8a 60%, #0077B6 100%)" }}
            >
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
                  Pick a service and tap WhatsApp — we confirm your slot within 2 hours.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-4 mt-8">
                <ContactRow icon={<PhoneIcon />} label="Call Us" value="+91 80079 78328" href="tel:+918007978328" />
                <ContactRow icon={<ClockIcon />} label="Working Hours" value="All Days: 9:30 AM – 9:30 PM" />
                <ContactRow icon={<PinIcon />} label="Our Location" value={"Shop No. 105, Oxy Primo Complex\nBakori Phata, Wagholi, Pune 412207"} />
              </div>

              <div className="relative z-10 mt-6 bg-white/10 border border-white/20 rounded-2xl px-5 py-4">
                <p className="text-white text-sm font-medium mb-0.5">Dental Emergency?</p>
                <p className="text-white/60 text-xs leading-relaxed">
                  Call immediately —{" "}
                  <a href="tel:+918007978328" className="text-[#00B4D8] hover:underline">+91 80079 78328</a>.
                  Emergency slots open daily.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right — WhatsApp booking ───────────────────── */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 h-full shadow-sm border border-gray-100 flex flex-col">

              <div className="mb-6">
                <h3 className="text-[#111827] font-semibold text-xl mb-1">Book via WhatsApp</h3>
                <p className="text-gray-400 text-sm">Select a treatment (optional) then tap the button — we reply fast.</p>
              </div>

              {/* Service picker */}
              <div className="grid grid-cols-2 gap-2.5 mb-8 flex-1">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelected(selected === s ? "" : s)}
                    className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                      selected === s
                        ? "bg-[#0F2D6B] border-[#0F2D6B] text-white"
                        : "bg-[#F4F6F8] border-transparent text-[#111827] hover:border-[#0F2D6B]/30"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Selected indicator */}
              <div className="mb-5 text-sm text-gray-400 min-h-[20px]">
                {selected ? (
                  <span>
                    Selected: <span className="text-[#0F2D6B] font-semibold">{selected}</span>
                    <button onClick={() => setSelected("")} className="ml-2 text-gray-300 hover:text-gray-500 text-xs">✕ clear</button>
                  </span>
                ) : (
                  "No service selected — we'll ask on WhatsApp"
                )}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1dba57] text-white py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book Appointment on WhatsApp
              </a>

              <p className="text-center text-gray-400 text-xs mt-4">
                or call directly —{" "}
                <a href="tel:+918007978328" className="text-[#0077B6] hover:underline font-medium">+91 80079 78328</a>
              </p>
            </div>
          </AnimatedSection>

        </div>

        {/* ── Map ───────────────────────────────────────────── */}
        <AnimatedSection className="mt-5">
          <div className="rounded-3xl overflow-hidden w-full" style={{ height: "380px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0!2d73.9947401!3d18.5903702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzI1LjMiTiA3M8KwNTknNTAuMyJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vighnaharta Dental Clinic — Bakori Phata, Wagholi, Pune"
            />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
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
            <a key={i} href={href} className="text-white text-sm font-medium hover:text-[#00B4D8] transition-colors block">{line}</a>
          ) : (
            <p key={i} className="text-white text-sm font-medium leading-snug">{line}</p>
          )
        )}
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  );
}
