const ABOUT_LINKS = ["About Clinic", "Our Doctors", "Technology", "Reviews"];
const SERVICES_LINKS = [
  "General Dentistry",
  "Orthodontics",
  "Dental Implants",
  "Pediatric Dentistry",
  "Cosmetic Dentistry",
];
const LEGAL_LINKS = ["Privacy Policy", "Terms of Use", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white overflow-hidden">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact */}
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              123 Dental Street, Suite 101<br />
              Pune, Maharashtra 411001
            </p>
            <p className="text-gray-300 text-sm">+91 98765 43210</p>
            <p className="text-gray-300 text-sm">info@vighnahartadental.com</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-semibold text-sm mb-5">About</h3>
              <ul className="space-y-3">
                {ABOUT_LINKS.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-5">Services</h3>
              <ul className="space-y-3">
                {SERVICES_LINKS.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-5">Legal</h3>
              <ul className="space-y-3">
                {LEGAL_LINKS.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mx-6 sm:mx-10 mt-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Vighnaharta Dental Clinic
        </p>
        <p className="text-gray-500 text-xs">All rights reserved</p>
      </div>
    </footer>
  );
}
