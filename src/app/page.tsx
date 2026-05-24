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
