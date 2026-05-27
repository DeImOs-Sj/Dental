import Link from "next/link";
import Image from "next/image";

const CLINIC_LINKS = [
  { label: "About Us",    href: "/about"   },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Gallery",     href: "/#gallery" },
  { label: "FAQ",         href: "/faq"     },
  { label: "Blog",        href: "/blog"    },
  { label: "Contact",     href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Dental Implants",     href: "/services/dental-implants"      },
  { label: "Root Canal",          href: "/services/root-canal-treatment"  },
  { label: "Teeth Whitening",     href: "/services/teeth-whitening"       },
  { label: "Orthodontics",        href: "/services/orthodontics-braces"   },
  { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry"   },
  { label: "General Dentistry",   href: "/services/general-dentistry"     },
];

const AREA_LINKS = [
  { label: "Wagholi",     href: "/areas/wagholi"     },
  { label: "Bakori Phata",href: "/areas/bakori-phata"},
  { label: "Kharadi",     href: "/areas/kharadi"     },
  { label: "Viman Nagar", href: "/areas/viman-nagar" },
  { label: "Lonikand",    href: "/areas/lonikand"    },
  { label: "Nagar Road",  href: "/areas/nagar-road"  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand + contact */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/Vighnaharta Dental Logo - B.svg"
                alt="Vighnaharta Dental Clinic"
                width={130}
                height={44}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Expert dental care for the whole family at Bakori Phata, Wagholi, Pune. Open every day.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm leading-relaxed">
                Shop No. 105, Oxy Primo Complex<br />
                Pune-Nagar Road, Bakori Phata<br />
                Wagholi, Pune 412207
              </p>
              <a href="tel:+918007978328" className="block text-gray-300 hover:text-white text-sm transition-colors font-medium">
                +91 80079 78328
              </a>
              <a href="mailto:info@vighnahartadentalclinic.com" className="block text-gray-400 hover:text-white text-sm transition-colors">
                info@vighnahartadentalclinic.com
              </a>
              <p className="text-gray-400 text-sm">Mon–Sun · 9:30 AM – 9:30 PM</p>
            </div>
            <div className="flex gap-3 pt-1">
              <a
                href="tel:+918007978328"
                className="bg-[#0F2D6B] hover:bg-[#0a2050] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/918007978328"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1dba57] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Clinic links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Clinic</h3>
            <ul className="space-y-3">
              {CLINIC_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Services</h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas served */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Areas Served</h3>
            <ul className="space-y-3">
              {AREA_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mx-6 sm:mx-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Vighnaharta Dental Clinic · Wagholi, Pune
        </p>
        <p className="text-gray-500 text-xs">
          <a href="https://www.vighnahartadentalclinic.com" className="hover:text-gray-300 transition-colors">
            vighnahartadentalclinic.com
          </a>
        </p>
      </div>
    </footer>
  );
}
