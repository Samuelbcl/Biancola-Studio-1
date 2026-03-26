import type { Metadata } from "next";
import Header from "@/components/Header";
import Processus from "@/components/sections/Processus";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Processus | Biancola Studio — Ma méthode de travail",
  description:
    "De l'analyse de vos besoins à la mise en ligne : découvrez mon processus de travail étape par étape.",
};

export default function ProcessusPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Processus />
      </main>
      <Footer />
    </>
  );
}
