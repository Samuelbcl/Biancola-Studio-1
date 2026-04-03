import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.biancolastudio.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "Biancola Studio | Webdesigner à Liège — Sites Vitrines & Applications Web",
  description:
    "Webdesigner freelance à Liège, je crée des sites vitrines, e-commerces et applications web sur mesure en Wallonie. Design moderne et développement performant.",
  keywords: [
    "webdesigner liège",
    "site vitrine liège",
    "création site liège",
    "développeur web wallonie",
    "freelance web liège",
    "application web liège",
    "agence web liège",
    "e-commerce belgique",
    "webdesigner belgique",
    "création site wallonie",
    "Biancola Studio",
  ],
  authors: [{ name: "Samuel Biancola" }],
  creator: "Biancola Studio",
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: "Biancola Studio",
    title: "Biancola Studio | Webdesigner à Liège — Sites Vitrines & Applications Web",
    description:
      "Webdesigner freelance à Liège. Je crée des sites vitrines, e-commerces et applications web performantes en Wallonie.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biancola Studio | Webdesigner à Liège",
    description:
      "Sites vitrines, e-commerces et applications web sur mesure à Liège, Wallonie.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Biancola Studio",
      description:
        "Webdesigner et développeur web freelance à Liège. Création de sites vitrines, e-commerces et applications web sur mesure en Wallonie et en Belgique.",
      url: "https://www.biancolastudio.com",
      telephone: "+32498737162",
      email: "samuel@biancolastudio.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Liège",
        addressRegion: "Wallonie",
        addressCountry: "BE",
      },
      areaServed: [
        { "@type": "City", name: "Liège" },
        { "@type": "AdministrativeArea", name: "Wallonie" },
        { "@type": "Country", name: "Belgique" },
      ],
      founder: {
        "@type": "Person",
        name: "Samuel Biancola",
        jobTitle: "Webdesigner & Développeur Web",
      },
      priceRange: "Sur devis",
      serviceType: [
        "Création de site vitrine",
        "Développement e-commerce",
        "Développement d'application web",
        "Développement SaaS",
        "Webdesign",
      ],
      knowsLanguage: ["fr", "en"],
    },
    {
      "@type": "WebSite",
      name: "Biancola Studio",
      url: "https://www.biancolastudio.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body" style={{ backgroundColor: "#FFFFFF" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
