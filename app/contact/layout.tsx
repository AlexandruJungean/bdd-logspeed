import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Quote",
  description: "Contact BDD Logspeed for international road transport services. Call +40 755 297 614 or email office@bddlogspeed.ro. Located in Arad, Romania. Get a free transport quote today!",
  keywords: [
    "contact BDD Logspeed",
    "transport quote Romania",
    "logistics contact",
    "freight transport quote",
    "road transport contact",
    "Arad transport company",
    "transport price request",
  ],
  openGraph: {
    title: "Contact BDD Logspeed | Get a Free Quote",
    description: "Request a quote for international road transport. Phone: +40 755 297 614 | Email: office@bddlogspeed.ro",
    url: "https://bddlogspeed.ro/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact BDD Logspeed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BDD Logspeed",
    description: "Get a free quote for road transport services across Europe.",
  },
  alternates: {
    canonical: "https://bddlogspeed.ro/contact",
  },
};

// Contact page specific JSON-LD
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact BDD Logspeed",
  description: "Contact page for BDD Logspeed transport company",
  url: "https://bddlogspeed.ro/contact",
  mainEntity: {
    "@type": "Organization",
    name: "BDD Logspeed",
    telephone: "+40755297614",
    email: "office@bddlogspeed.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Slatinei, Nr. 2",
      addressLocality: "Arad",
      addressCountry: "Romania",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}

