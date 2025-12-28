import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Learn about BDD Logspeed - a trusted road transport company founded in 2016 in Arad, Romania. 8+ years experience, 10 modern trucks, serving 12 European countries with 110+ monthly shipments.",
  keywords: [
    "about BDD Logspeed",
    "transport company Romania",
    "logistics company Arad",
    "road transport history",
    "freight company Europe",
    "transport company about us",
  ],
  openGraph: {
    title: "About BDD Logspeed | Our Story & Mission",
    description: "Trusted road transport partner since 2016. Modern fleet, experienced team, serving businesses across Europe.",
    url: "https://bddlogspeed.ro/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About BDD Logspeed - Transport Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About BDD Logspeed",
    description: "Trusted road transport partner since 2016. Learn about our mission and values.",
  },
  alternates: {
    canonical: "https://bddlogspeed.ro/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

