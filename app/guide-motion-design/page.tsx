import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import GuideForm from "@/components/sections/GuideForm";

// Page réservée aux personnes qui viennent de TikTok : hors plan du site et non indexée,
// pour garder le référencement centré sur les PME.
export const metadata: Metadata = {
  title: "Guide gratuit : le motion design avec Claude Code — Biancola Studio",
  description:
    "La méthode derrière ma vidéo « Claude's new Motion design », en 5 étapes : l'installation de Claude Code, les 2 prompts à copier-coller et les corrections. Gratuit, en français et en anglais.",
  alternates: { canonical: "/guide-motion-design" },
  robots: { index: false, follow: true },
};

export default function GuideMotionDesignPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <GuideForm />
      </main>
      <Footer />
    </>
  );
}
