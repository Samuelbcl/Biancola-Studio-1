import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "À propos | Biancola Studio — Qui est derrière le studio",
  description:
    "Découvrez Samuel, développeur web basé à Liège. Technique, créativité et proximité au service de votre projet digital.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
