import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Transformation from "@/components/sections/Transformation";
import Offre from "@/components/sections/Offre";
import CTABanner from "@/components/ui/CTABanner";
import Realisations from "@/components/sections/Realisations";
import AuditTeaser from "@/components/sections/AuditTeaser";
import Footer from "@/components/sections/Footer";

// Home volontairement courte : on comprend, on voit, on réserve.
// Le détail vit sur les pages dédiées (Solutions, Méthode, Investissement, À propos, FAQ).
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Transformation />
        <Offre />
        <CTABanner />
        <Realisations ids={["risosales", "roadcrm"]} compact />
        <AuditTeaser />
      </main>
      <Footer />
    </>
  );
}
