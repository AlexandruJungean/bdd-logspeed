import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BDD Logspeed - International Transport Company",
  description: "BDD Logspeed is a road transport company delivering supplies everywhere in Europe. Founded in 2016, we provide efficient and reliable logistics solutions.",
  keywords: "transport, logistics, road transport, international shipping, Europe, Romania, freight, trucking",
  authors: [{ name: "BDD Logspeed" }],
  openGraph: {
    title: "BDD Logspeed - International Transport Company",
    description: "We deliver supplies everywhere in Europe! Professional road transport services.",
    url: "https://bddlogspeed.ro",
    siteName: "BDD Logspeed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BDD Logspeed - International Transport Company",
    description: "We deliver supplies everywhere in Europe! Professional road transport services.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-white text-slate-900 antialiased font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
