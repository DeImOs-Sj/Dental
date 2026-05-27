"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const HOME_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const PAGE_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const NAV_LINKS = isHome ? HOME_LINKS : PAGE_LINKS;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-[#F4F6F8]"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Vighnaharta Dental Logo - B.svg"
            alt="Vighnaharta Dental Clinic"
            width={140}
            height={48}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-600 hover:text-[#0077B6] text-sm font-medium transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00B4D8] group-hover:w-full transition-all duration-250 rounded-full" />
            </Link>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918007978328"
            className="hidden sm:inline-flex items-center border border-gray-700 text-black px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 btn-shine"
          >
            Book Appointment
          </a>
          <button
            className="md:hidden text-gray-700 p-1 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Bottom border 90% width */}
      <div className="flex justify-center">
        <div className="w-[90%] h-px bg-gray-200" />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#F4F6F8] border-t border-gray-200`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-600 hover:text-[#0077B6] hover:bg-[#0077B6]/5 text-sm font-medium py-2.5 px-3 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+918007978328"
            className="border border-gray-700 text-black px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2 hover:bg-[#0096b7] transition-colors"
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
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
