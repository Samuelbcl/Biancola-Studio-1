import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CTABanner from "@/components/ui/CTABanner";
import Realisations from "@/components/sections/Realisations";
import About from "@/components/sections/About";
import Processus from "@/components/sections/Processus";
import Tarifs from "@/components/sections/Tarifs";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CTABanner />
        <Realisations />
        <About />
        <Processus />
        <Tarifs />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
