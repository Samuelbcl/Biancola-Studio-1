import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import GuideForm from "@/components/sections/GuideForm";

// Page réservée aux personnes qui viennent de TikTok : hors plan du site et non indexée,
// pour garder le référencement centré sur les PME.
export const metadata: Metadata = {
  title: "Guide gratuit : le motion design avec Claude Code — Biancola Studio",
  description:
    "La méthode complète derrière ma vidéo « Claude's new Motion design » : les outils, le brief à copier-coller, les allers-retours et le tournage. Gratuit, en français et en anglais.",
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
