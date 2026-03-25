import type { Metadata } from "next";
import Header from "@/components/Header";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "FAQ | Biancola Studio — Questions fréquentes",
  description:
    "Retrouvez les réponses aux questions les plus fréquentes sur mes services, tarifs et processus de travail.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
