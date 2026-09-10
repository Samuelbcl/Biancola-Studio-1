import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Situations from "@/components/sections/Situations";
import Transformation from "@/components/sections/Transformation";
import Solutions from "@/components/sections/Solutions";
import CTABanner from "@/components/ui/CTABanner";
import Realisations from "@/components/sections/Realisations";
import Processus from "@/components/sections/Processus";
import AuditTeaser from "@/components/sections/AuditTeaser";
import Valeur from "@/components/sections/Valeur";
import About from "@/components/sections/About";
import Care from "@/components/sections/Care";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Situations />
        <Transformation />
        <Solutions />
        <CTABanner />
        <Realisations ids={["risosales", "roadcrm"]} />
        <Processus />
        <AuditTeaser />
        <Valeur />
        <About />
        <Care />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
