import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalyan Kashaboina - Web Developer & Portfolio",
  description: "Kalyan Kashaboina's Web Developer Portfolio showcasing front-end projects and skills.",
  keywords: "Kalyan Kashaboina, Kalyan Kashaboina Web Developer, Kalyan Kashaboina Portfolio, Kalyan Kashaboina Frontend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
