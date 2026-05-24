"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[#004E3D] ${
        scrolled ? "shadow-2xl" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
            <ToothIcon className="w-5 h-5 text-[#004E3D]" />
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-bold text-sm leading-none tracking-wide">Vighnaharta</p>
            <p className="text-[#1F8A70] text-xs font-medium mt-0.5">Dental Clinic</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#1F8A70] group-hover:w-full transition-all duration-250 rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center bg-[#1F8A70] hover:bg-[#18705c] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg btn-shine"
          >
            Book Appointment
          </a>
          <button
            className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#003d30] border-t border-white/10`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/75 hover:text-white hover:bg-white/5 text-sm font-medium py-2.5 px-3 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1F8A70] text-white px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2 hover:bg-[#18705c] transition-colors"
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.2 2 7.1 3.5 5.6 5.1 4.3 6.4 3.5 8 3.5 9.7c0 1.6.4 3 1 4.6.6 1.6.9 3.1 1.2 4.6.4 1.8.9 4.1 2.6 4.1.9 0 1.5-.7 1.9-1.7.4-.9.7-2.1 1-3.1.2-.8.5-1.7 1.3-1.7s1.1.9 1.3 1.7c.3 1 .6 2.2 1 3.1.4 1 1 1.7 1.9 1.7 1.7 0 2.2-2.3 2.6-4.1.3-1.5.6-3 1.2-4.6.6-1.6 1-3 1-4.6 0-1.7-.8-3.3-2.1-4.6C16.9 3.5 14.8 2 12 2z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
