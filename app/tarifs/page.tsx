import type { Metadata } from "next";
import Header from "@/components/Header";
import Tarifs from "@/components/sections/Tarifs";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Tarifs | Biancola Studio — Un prix juste pour votre projet",
  description:
    "Devis sur mesure pour la création de votre site, puis maintenance et évolutions après lancement. Transparence totale.",
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
