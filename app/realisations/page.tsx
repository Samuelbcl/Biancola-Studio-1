import type { Metadata } from "next";
import Header from "@/components/Header";
import Realisations from "@/components/sections/Realisations";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Réalisations | Biancola Studio — Projets Web à Liège",
  description:
    "Découvrez mes réalisations : applications métier, CRM mobile et sites web sur mesure. Projets réalisés depuis Liège pour des clients en Belgique.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Realisations simple />
      </main>
      <Footer />
    </>
  );
}
