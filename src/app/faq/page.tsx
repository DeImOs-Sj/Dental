import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dental FAQ — Vighnaharta Dental Clinic, Wagholi, Pune",
  description:
    "Answers to the most common dental questions — implants, root canal, braces, teeth whitening, costs, and more. Vighnaharta Dental Clinic, Wagholi, Pune.",
  alternates: { canonical: "https://www.vighnahartadentalclinic.com/faq" },
  openGraph: {
    type: "website",
    url: "https://www.vighnahartadentalclinic.com/faq",
    title: "Dental FAQ — Vighnaharta Dental Clinic, Wagholi, Pune",
    description: "Common dental questions answered — implants, root canal, braces, whitening, costs and more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental FAQ — Vighnaharta Dental Clinic, Wagholi",
    description: "Common dental questions answered by Dr. Saurabh Jadhav.",
    images: ["/og-image.jpg"],
  },
};

const GENERAL_FAQS = [
  {
    q: "Where is Vighnaharta Dental Clinic located?",
    a: "Shop No. 105, Oxy Primo Complex, Pune-Nagar Road, Bakori Phata, Wagholi, Pune, Maharashtra 412207.",
  },
  {
    q: "What are your clinic hours?",
    a: "We are open Monday to Sunday, 9:30 AM to 9:30 PM. No appointment is needed for emergency cases.",
  },
  {
    q: "Who is the dentist at Vighnaharta Dental Clinic?",
    a: "Dr. Saurabh Jadhav is the principal dentist and founder of Vighnaharta Dental Clinic.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Yes, we accept walk-ins for emergency dental care. For routine treatments, calling ahead to schedule is recommended.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call or WhatsApp us at +91 80079 78328. We confirm appointments within a few minutes.",
  },
  {
    q: "Do you offer EMI or payment plans?",
    a: "Yes. We offer easy monthly payment plans for larger treatments like implants and orthodontics.",
  },
  {
    q: "Is treatment painful?",
    a: "We use modern anaesthesia and rotary instruments. Most patients report little to no discomfort during treatment.",
  },
  {
    q: "Do you treat children?",
    a: "Yes. We provide gentle pediatric dental care for children from their first tooth through the teenage years.",
  },
];

export default function FaqPage() {
  const allFaqs = SERVICES.flatMap((s) =>
    s.faqs.map((f) => ({ ...f, service: s.name }))
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...GENERAL_FAQS, ...allFaqs].map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#F4F6F8] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-[#1F8A70] text-sm font-medium mb-3 tracking-wide">FAQs</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-[#111827] leading-tight max-w-2xl mb-4">
              Frequently asked dental questions
            </h1>
            <p className="text-gray-500 max-w-lg">
              Everything you need to know before your visit — treatments, costs, recovery, and clinic details.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
            {/* General */}
            <div>
              <h2 className="text-2xl font-semibold text-[#111827] mb-6">General Questions</h2>
              <div className="space-y-3">
                {GENERAL_FAQS.map((f) => (
                  <details key={f.q} className="group bg-[#F4F6F8] rounded-2xl">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#111827] list-none">
                      {f.q}
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Per service */}
            {SERVICES.map((s) => (
              <div key={s.slug}>
                <h2 className="text-2xl font-semibold text-[#111827] mb-6">{s.name}</h2>
                <div className="space-y-3">
                  {s.faqs.map((f) => (
                    <details key={f.q} className="group bg-[#F4F6F8] rounded-2xl">
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#111827] list-none">
                        {f.q}
                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
