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
  openGraph: {
    title: "Kalyan Kashaboina - Web Developer & Portfolio",
    description: "Kalyan Kashaboina's Web Developer Portfolio showcasing front-end projects and skills.",
    url: "https://portfolio-git-master-kalyankashaboinas-projects.vercel.app/",
    type: "website",
    siteName: "Kalyan Kashaboina - Web Developer", // Site name for Open Graph
    images: [
      {
        url: "https://portfolio-git-master-kalyankashaboinas-projects.vercel.app/images/kalyan1.jpg", // Replace with an actual image
        width: 800,
        height: 600,
        alt: "Kalyan Kashaboina Portfolio Image",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="I38EL_WVPO6tcA1cmsmLFvAZ9Szco0VLvjph8OxIFcA" />
        <meta property="og:title" content="Kalyan Kashaboina - Web Developer & Portfolio" />
        <meta property="og:description" content="Kalyan Kashaboina's Web Developer Portfolio showcasing front-end projects and skills." />
        <meta property="og:url" content="https://portfolio-git-master-kalyankashaboinas-projects.vercel.app/" />
        <meta property="og:site_name" content="Kalyan Kashaboina - Web Developer" />
        <meta property="og:image" content="https://portfolio-git-master-kalyankashaboinas-projects.vercel.app/images/kalyan1.jpg" /> {/* Replace with actual image URL */}
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
