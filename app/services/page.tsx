import type { Metadata } from "next";
import Header from "@/components/Header";
import PageIntro from "@/components/ui/PageIntro";
import Solutions from "@/components/sections/Solutions";
import Principes from "@/components/sections/Principes";
import CTABanner from "@/components/ui/CTABanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Solutions | Audit, outils métiers sur mesure & automatisation pour PME — Biancola Studio",
  description:
    "Quatre façons d'aider votre PME à travailler plus simplement : Biancola Audit, outils métiers sur mesure, automatisation & intégrations, sites et expériences digitales. Liège, Wallonie, Belgique.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageIntro
          label="Solutions"
          title={
            <>
              De l&apos;analyse à l&apos;outil qui{" "}
              <span className="text-gradient">travaille pour vous</span>
            </>
          }
          lead="Quatre façons d'aider votre PME à travailler plus simplement. Vous n'avez pas besoin de savoir laquelle vous convient : c'est le rôle du diagnostic — et souvent, la réponse est une combinaison."
        />
        <Solutions simple />
        <Principes />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
