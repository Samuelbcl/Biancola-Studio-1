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
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: "Biancola Studio | Agence Web — Sites & Applications sur mesure",
  description:
    "Biancola Studio conçoit des sites vitrines, e-commerces et applications web performantes. Design moderne, développement sur mesure et accompagnement personnalisé.",
  keywords: [
    "agence web",
    "création site internet",
    "développement web",
    "site vitrine",
    "e-commerce",
    "application web",
    "SaaS",
    "Biancola Studio",
  ],
  authors: [{ name: "Biancola Studio" }],
  creator: "Biancola Studio",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Biancola Studio",
    title: "Biancola Studio | Agence Web — Sites & Applications sur mesure",
    description:
      "Je conçois des expériences digitales modernes et performantes pour propulser votre activité.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biancola Studio | Agence Web",
    description:
      "Sites vitrines, e-commerces et applications web sur mesure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body" style={{ backgroundColor: "#FFFFFF" }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
