import type { Metadata } from "next";
import Header from "@/components/Header";
import Tarifs from "@/components/sections/Tarifs";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Tarifs | Webdesigner Liège — Devis sur mesure pour votre projet",
  description:
    "Devis personnalisé pour la création de votre site vitrine, e-commerce ou application web à Liège. Tarifs transparents, sans surprise.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Tarifs />
      </main>
      <Footer />
    </>
  );
}
