import type { Metadata } from "next";
import Header from "@/components/Header";
import Realisations from "@/components/sections/Realisations";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Réalisations | Biancola Studio — Mes projets",
  description:
    "Découvrez mes réalisations : applications métier, CRM mobile et sites web sur mesure pour mes clients.",
};

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Realisations />
      </main>
      <Footer />
    </>
  );
}
