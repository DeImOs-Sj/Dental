import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vighnaharta Dental Clinic — Trusted Family Dental Care",
  description:
    "Expert dental care for the whole family in Wagholi, Pune. General dentistry, teeth whitening, orthodontics, dental implants, root canal and more. Book your appointment today.",
  keywords: "dental clinic, dentist, teeth whitening, dental implants, orthodontics, family dentistry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
