import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://raelvispaulino.dev";
const title = "Raelvis Paulino — Full-Stack Developer";
const description = "Portfolio of Raelvis Paulino, a junior Full-Stack and Frontend Developer focused on React, Next.js, TypeScript, and useful digital products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["Raelvis Paulino", "Full-Stack Developer", "Frontend Developer", "React Developer", "Next.js", "Dominican Republic"],
  authors: [{ name: "Raelvis Paulino", url: siteUrl }],
  creator: "Raelvis Paulino",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/logo-rp.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/logo-rp.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Raelvis Paulino",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raelvis Francisco Paulino Almanzar",
  alternateName: "Raelvis Paulino",
  url: siteUrl,
  image: `${siteUrl}/raelvis-paulino.png`,
  logo: `${siteUrl}/logo-rp.svg`,
  jobTitle: "Junior Full-Stack Developer",
  email: "mailto:contact@raelvispaulino.dev",
  address: { "@type": "PostalAddress", addressLocality: "San Francisco de Macorís", addressCountry: "DO" },
  sameAs: ["https://github.com/Raelvis19", "https://www.linkedin.com/in/raelvis-paulino-8447a42ba/"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
