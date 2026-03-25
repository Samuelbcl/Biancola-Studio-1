import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact | Biancola Studio — Démarrons votre projet",
  description:
    "Contactez Biancola Studio pour discuter de votre projet web. Réponse sous 48h, devis gratuit et sans engagement.",
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
