import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareBridge — AI symptom tracking & patient experience",
  description:
    "A modern digital care platform that helps users understand symptoms, track health information, and get guided next steps in a calm, trustworthy way.",
  openGraph: {
    title: "CareBridge — AI symptom tracking & patient experience",
    description:
      "Understand symptoms, organize health information, and take confident next steps with CareBridge.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
