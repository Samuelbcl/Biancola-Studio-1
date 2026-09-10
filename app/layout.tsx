import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ChatBot from "@/components/ui/ChatBot";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const BASE_URL = "https://www.biancolastudio.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "Digitalisation PME & outils métiers sur mesure à Liège | Biancola Studio",
  description:
    "Audit, outils métiers sur mesure et automatisations pour PME à Liège, en Wallonie et en Belgique. Je transforme vos fichiers Excel, e-mails et tâches manuelles en un outil simple, centralisé et automatisé.",
  keywords: [
    "digitalisation PME Belgique",
    "digitalisation PME Liège",
    "digitalisation entreprise Wallonie",
    "outil métier sur mesure",
    "logiciel métier sur mesure",
    "application métier",
    "CRM sur mesure",
    "automatisation PME",
    "automatisation entreprise",
    "développement logiciel Liège",
    "développement application métier",
    "intégration logiciels PME",
    "webdesigner liège",
    "création site internet liège",
    "Biancola Studio",
  ],
  authors: [{ name: "Samuel Biancola" }],
  creator: "Biancola Studio",
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: "Biancola Studio",
    title: "Biancola Studio | Digitalisation & outils métiers sur mesure pour PME",
    description:
      "J'analyse le fonctionnement des PME et je développe les outils métiers et automatisations qui leur font gagner du temps. Liège, Wallonie, Belgique.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biancola Studio | Digitalisation & outils métiers pour PME",
    description:
      "Audit, outils métiers sur mesure et automatisation pour PME. Liège, Wallonie, Belgique.",
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
      "@id": `${BASE_URL}/#organization`,
      name: "Biancola Studio",
      slogan: "Comprendre. Simplifier. Automatiser.",
      description:
        "Digitalisation des PME à Liège, en Wallonie et en Belgique : audit du fonctionnement, développement d'outils métiers sur mesure (CRM, devis, planning, interventions, portails), automatisation des processus, intégration de logiciels et création de sites web.",
      url: BASE_URL,
      logo: `${BASE_URL}/favicon.png`,
      image: `${BASE_URL}/favicon.png`,
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
        jobTitle:
          "Fondateur — analyse, conception et développement de solutions digitales pour PME",
      },
      priceRange: "Sur devis",
      serviceType: [
        "Audit de digitalisation",
        "Développement d'outils métiers sur mesure",
        "Automatisation des processus",
        "Intégration de logiciels",
        "Développement d'applications web et mobiles",
        "Création de sites internet",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Solutions Biancola Studio",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Biancola Audit — diagnostic de digitalisation",
              url: `${BASE_URL}/audit`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Outils métiers sur mesure",
              url: `${BASE_URL}/services/outil-metier-sur-mesure`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatisation & intégrations",
              url: `${BASE_URL}/services/automatisation-pme`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sites & expériences digitales",
              url: `${BASE_URL}/services/creation-site-internet-liege`,
            },
          },
        ],
      },
      knowsLanguage: ["fr", "en"],
    },
    {
      "@type": "WebSite",
      name: "Biancola Studio",
      url: BASE_URL,
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
        <ChatBot />
      </body>
    </html>
  );
}
