import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact | Biancola Studio — Webdesigner à Liège, devis gratuit",
  description:
    "Contactez Biancola Studio pour discuter de votre projet web à Liège. Réponse sous 48h, devis gratuit et sans engagement.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
