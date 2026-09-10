import type { Metadata } from "next";
import Header from "@/components/Header";
import Processus from "@/components/sections/Processus";
import AuditTeaser from "@/components/sections/AuditTeaser";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Méthode | Comprendre, simplifier, automatiser — Biancola Studio",
  description:
    "Comprendre, identifier, simplifier, prototyper, construire, automatiser, accompagner : la méthode Biancola Studio pour digitaliser le fonctionnement d'une PME sans développer dans le vide.",
  alternates: { canonical: "/processus" },
};

export default function ProcessusPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Processus simple />
        <AuditTeaser />
      </main>
      <Footer />
    </>
  );
}
