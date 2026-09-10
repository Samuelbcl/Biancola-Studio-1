import type { Metadata } from "next";
import Header from "@/components/Header";
import Tarifs from "@/components/sections/Tarifs";
import CTABanner from "@/components/ui/CTABanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Investissement | Diagnostic gratuit, audit et projet par étapes — Biancola Studio",
  description:
    "Comment se passe l'investissement dans un outil métier ou une automatisation : diagnostic gratuit, Biancola Audit, puis projet et accompagnement chiffrés par étapes. Aucune surprise.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Tarifs simple />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
