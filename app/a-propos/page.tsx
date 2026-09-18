import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Principes from "@/components/sections/Principes";
import CTABanner from "@/components/ui/CTABanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "À propos | Samuel Biancola, fondateur de Biancola Studio — Liège",
  description:
    "Samuel Biancola, fondateur de Biancola Studio à Liège : analyse, conception et développement de solutions digitales adaptées aux processus des PME. Proche, direct, sans jargon.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About simple />
        <Principes />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
