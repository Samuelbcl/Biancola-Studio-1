import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "À propos | Samuel Biancola — Développeur Web Freelance à Liège",
  description:
    "Découvrez Samuel Biancola, webdesigner et développeur web freelance basé à Liège en Wallonie. Technique, créativité et proximité au service de votre projet.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About simple />
      </main>
      <Footer />
    </>
  );
}
