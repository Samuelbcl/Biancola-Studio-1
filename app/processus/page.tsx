import type { Metadata } from "next";
import Header from "@/components/Header";
import Processus from "@/components/sections/Processus";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Processus | Biancola Studio — Ma méthode de travail à Liège",
  description:
    "De l'analyse de vos besoins à la mise en ligne : découvrez le processus de création de votre site ou application web, étape par étape.",
  alternates: { canonical: "/processus" },
};

export default function ProcessusPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Processus simple />
      </main>
      <Footer />
    </>
  );
}
