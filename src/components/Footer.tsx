const LINKS = {
  Services: [
    "General Dentistry",
    "Teeth Whitening",
    "Orthodontics",
    "Dental Implants",
    "Root Canal",
    "Pediatric Dentistry",
  ],
  Company: ["About Us", "Our Team", "Testimonials", "Careers", "Blog"],
  Support: ["Book Appointment", "Emergency Care", "Insurance", "FAQs", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#004E3D] flex items-center justify-center shadow-lg">
                <ToothIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">Vighnaharta</p>
                <p className="text-[#1F8A70] text-xs font-medium mt-0.5">Dental Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Delivering world-class dental care with compassion and precision since 2005.
              Your smile is our mission.
            </p>
            <div className="flex gap-3">
              {["FB", "IG", "YT", "IN"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#1F8A70] flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transition-transform"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Vighnaharta Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <a key={l} href="#" className="text-gray-500 hover:text-white text-xs transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.2 2 7.1 3.5 5.6 5.1 4.3 6.4 3.5 8 3.5 9.7c0 1.6.4 3 1 4.6.6 1.6.9 3.1 1.2 4.6.4 1.8.9 4.1 2.6 4.1.9 0 1.5-.7 1.9-1.7.4-.9.7-2.1 1-3.1.2-.8.5-1.7 1.3-1.7s1.1.9 1.3 1.7c.3 1 .6 2.2 1 3.1.4 1 1 1.7 1.9 1.7 1.7 0 2.2-2.3 2.6-4.1.3-1.5.6-3 1.2-4.6.6-1.6 1-3 1-4.6 0-1.7-.8-3.3-2.1-4.6C16.9 3.5 14.8 2 12 2z" />
    </svg>
  );
}
