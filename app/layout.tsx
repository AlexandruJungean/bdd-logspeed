import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#10b981",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bddlogspeed.ro"),
  title: {
    default: "BDD Logspeed | International Road Transport & Logistics in Europe",
    template: "%s | BDD Logspeed",
  },
  description: "BDD Logspeed - Professional international road transport company based in Romania. We deliver goods safely across 12+ European countries. 110+ monthly shipments, modern fleet, competitive rates. Get a quote today!",
  keywords: [
    "transport international",
    "transport rutier",
    "road transport Romania",
    "logistics Europe",
    "freight transport",
    "trucking company",
    "cargo transport",
    "transport marfa",
    "logistica Romania",
    "international shipping",
    "Arad transport",
    "transport Europa",
    "FTL transport",
    "LTL transport",
    "road freight",
  ],
  authors: [{ name: "BDD Logspeed", url: "https://bddlogspeed.ro" }],
  creator: "BDD Logspeed",
  publisher: "BDD Logspeed",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://bddlogspeed.ro",
    languages: {
      "en": "https://bddlogspeed.ro",
      "ro": "https://bddlogspeed.ro",
      "de": "https://bddlogspeed.ro",
      "hu": "https://bddlogspeed.ro",
    },
  },
  openGraph: {
    title: "BDD Logspeed | International Road Transport & Logistics",
    description: "Professional road transport across Europe. 8+ years experience, 12 countries, 110+ monthly shipments. Request a quote now!",
    url: "https://bddlogspeed.ro",
    siteName: "BDD Logspeed",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BDD Logspeed - International Transport Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BDD Logspeed | International Road Transport",
    description: "Professional road transport across Europe. Get a quote today!",
    images: ["/og-image.png"],
    creator: "@bddlogspeed",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#10b981" },
    ],
  },
  manifest: "/manifest.json",
  category: "transportation",
  classification: "Business/Logistics",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://bddlogspeed.ro/#organization",
  name: "BDD Logspeed",
  alternateName: "BE DOUBLE D LOGSPEED S.R.L.",
  url: "https://bddlogspeed.ro",
  logo: "https://bddlogspeed.ro/logo-black.png",
  image: "https://bddlogspeed.ro/og-image.png",
  description: "Professional international road transport company based in Romania, delivering goods safely across Europe since 2016.",
  foundingDate: "2016",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Slatinei, Nr. 2",
    addressLocality: "Arad",
    addressCountry: "RO",
    postalCode: "310000",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+40-755-297-614",
    contactType: "customer service",
    email: "office@bddlogspeed.ro",
    availableLanguage: ["English", "Romanian", "German", "Hungarian", "French", "Italian", "Spanish", "Polish", "Czech"],
  },
  sameAs: [
    "https://www.facebook.com/bdd.logspeed",
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 46.1866,
      longitude: 21.3047,
    },
    geoRadius: "3000000",
  },
  serviceArea: [
    "Romania", "Germany", "France", "Italy", "Spain", "Hungary", 
    "Poland", "Czech Republic", "Austria", "Netherlands", "Belgium", "United Kingdom"
  ],
  taxID: "35422580",
  legalName: "S.C. BE DOUBLE D LOGSPEED S.R.L.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bddlogspeed.ro/#localbusiness",
  name: "BDD Logspeed",
  image: "https://bddlogspeed.ro/og-image.png",
  telephone: "+40755297614",
  email: "office@bddlogspeed.ro",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Slatinei, Nr. 2",
    addressLocality: "Arad",
    addressCountry: "Romania",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.1866,
    longitude: 21.3047,
  },
  url: "https://bddlogspeed.ro",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://bddlogspeed.ro/#service",
  name: "International Road Transport",
  provider: {
    "@type": "Organization",
    name: "BDD Logspeed",
  },
  serviceType: "Road Transport",
  areaServed: "Europe",
  description: "Professional road transport services for freight and cargo across Europe. Full truck load (FTL) and less than truck load (LTL) options available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
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
