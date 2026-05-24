import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vighnaharta Dental Clinic — Trusted Family Dental Care",
  description:
    "Expert dental care for the whole family in Wagholi, Pune. General dentistry, teeth whitening, orthodontics, dental implants, root canal and more. Book your appointment today.",
  keywords: "dental clinic, dentist, teeth whitening, dental implants, orthodontics, family dentistry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
