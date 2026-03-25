import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Realisations from "@/components/sections/Realisations";
import Processus from "@/components/sections/Processus";
import Tarifs from "@/components/sections/Tarifs";
import Abonnements from "@/components/sections/Abonnements";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Realisations />
        <Processus />
        <Tarifs />
        <Abonnements />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
