import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ClinicGallery from "@/components/ClinicGallery";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Dentist in Wagholi, Pune — Vighnaharta Dental Clinic",
  description:
    "Top-rated dental clinic at Bakori Phata, Wagholi, Pune. Dr. Saurabh Jadhav offers dental implants, root canal, teeth whitening, orthodontics & more. Open 9:30 AM–9:30 PM daily. Book now.",
  alternates: { canonical: "https://www.vighnahartadentalclinic.com" },
  openGraph: {
    type: "website",
    url: "https://www.vighnahartadentalclinic.com",
    title: "Best Dentist in Wagholi, Pune — Vighnaharta Dental Clinic",
    description:
      "Expert dental care at Bakori Phata, Wagholi. Dental implants, root canal, braces, whitening & more. Open every day 9:30 AM–9:30 PM.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dentist in Wagholi, Pune — Vighnaharta Dental Clinic",
    description: "Expert dental care at Bakori Phata, Wagholi. Open 9:30 AM–9:30 PM daily.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Team />
        <Testimonials />
        <ClinicGallery />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
