import type { Metadata } from "next";
import Header from "@/components/Header";
import Realisations from "@/components/sections/Realisations";
import CTABanner from "@/components/ui/CTABanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Cas concrets | Outils métiers & automatisations réalisés pour des PME — Biancola Studio",
  description:
    "RisoSales, RoadCRM et d'autres projets : des processus manuels transformés en outils métiers, présentés en problème, solution, résultat. Réalisés depuis Liège pour des entreprises en Belgique.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Realisations
          simple
          headingLevel="h1"
          ids={["risosales", "roadcrm"]}
          label="Cas concrets"
          intro="Des outils métiers développés pour des entreprises belges, présentés comme je les aborde : un problème, une solution, un résultat."
        />
        <Realisations
          simple
          id="sites-web"
          ids={["flonaturopathie", "bloomclub"]}
          label="Sites & expériences digitales"
          title={
            <>
              Quand le projet passe <span className="text-gradient">aussi par le web</span>
            </>
          }
        />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
