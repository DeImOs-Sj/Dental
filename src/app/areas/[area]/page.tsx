import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AREAS, SERVICES, getArea } from "@/lib/data";

type Props = { params: Promise<{ area: string }> };

export async function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: slug } = await params;
  const a = getArea(slug);
  if (!a) return {};
  const url = `https://www.vighnahartadentalclinic.com/areas/${slug}`;
  const title = `Dentist in ${a.name}, Pune | Vighnaharta Dental Clinic`;
  const description = `Looking for a dentist near ${a.name}, Pune? Vighnaharta Dental Clinic at Bakori Phata, Wagholi is just ${a.distance} away. Expert care by Dr. Saurabh Jadhav. Open daily 9:30 AM–9:30 PM.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { area: slug } = await params;
  const a = getArea(slug);
  if (!a) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Vighnaharta Dental Clinic",
    url: "https://www.vighnahartadentalclinic.com",
    telephone: "+918007978328",
    priceRange: "₹₹",
    image: "https://www.vighnahartadentalclinic.com/og-image.jpg",
    description: a.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 105, Oxy Primo Complex, Pune-Nagar Road, Bakori Phata",
      addressLocality: "Wagholi",
      addressRegion: "Pune",
      postalCode: "412207",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.590370227097672,
      longitude: 73.99731740184953,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "09:30",
        closes: "21:30",
      },
    ],
    employee: { "@type": "Person", name: "Dr. Saurabh Jadhav", jobTitle: "Dentist" },
    areaServed: { "@type": "Place", name: `${a.name}, Pune` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vighnahartadentalclinic.com" },
      { "@type": "ListItem", position: 2, name: `Dentist in ${a.name}`, item: `https://www.vighnahartadentalclinic.com/areas/${a.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-[#F4F6F8] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#004E3D]">Home</Link>
            <span>/</span>
            <span className="text-[#111827] font-medium">Dentist in {a.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-[#004E3D] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-[#1F8A70] bg-white/10 inline-block text-sm font-medium px-3 py-1 rounded-full mb-4">
              {a.distance}
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight max-w-2xl mb-4">
              Dentist in {a.name}, Pune
            </h1>
            <p className="text-white/75 max-w-xl leading-relaxed text-lg mb-8">
              {a.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+918007978328"
                className="inline-flex items-center gap-2 bg-white text-[#004E3D] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +91 80079 78328
              </a>
              <a
                href="https://maps.google.com/?q=18.590370227097672,73.99731740184953"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* About clinic */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-[#111827] mb-4">
                  Your nearest dental clinic from {a.name}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Vighnaharta Dental Clinic at Bakori Phata, Wagholi serves patients from {a.name} and all nearby areas. Led by Dr. Saurabh Jadhav, our clinic offers comprehensive dental care for the whole family — open 7 days a week from 9:30 AM to 9:30 PM.
                </p>
                <ul className="space-y-3">
                  {[
                    "Open Mon–Sun, 9:30 AM to 9:30 PM",
                    "Experienced dentist: Dr. Saurabh Jadhav",
                    "Advanced equipment and pain-free treatments",
                    "Affordable pricing with EMI options",
                    "Free consultation for new patients",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#004E3D]/10 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-[#004E3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F4F6F8] rounded-3xl p-8">
                <h3 className="font-semibold text-[#111827] mb-5">Clinic Details</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-1">Address</p>
                    <p className="text-[#111827] font-medium">
                      Shop No. 105, Oxy Primo Complex<br />
                      Pune-Nagar Road, Bakori Phata<br />
                      Wagholi, Pune 412207
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Phone</p>
                    <a href="tel:+918007978328" className="text-[#004E3D] font-medium hover:underline">
                      +91 80079 78328
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Hours</p>
                    <p className="text-[#111827] font-medium">Mon–Sun: 9:30 AM – 9:30 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Distance from {a.name}</p>
                    <p className="text-[#111827] font-medium">{a.distance}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[#F4F6F8] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-semibold text-[#111827] mb-10 text-center">
              Dental services available near {a.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-semibold text-[#111827] mb-2 group-hover:text-[#004E3D] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{service.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
