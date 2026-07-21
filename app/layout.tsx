import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SoftPak — Critical software powering modern wealth management",
  description:
    "30+ years building mission-critical portfolio management systems trusted by RIAs and institutional firms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans">
        <Header />
        <main className="relative w-full bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
