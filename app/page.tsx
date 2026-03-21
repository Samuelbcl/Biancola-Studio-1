import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Realisations from "@/components/sections/Realisations";
import Processus from "@/components/sections/Processus";
import Video from "@/components/sections/Video";
import Abonnements from "@/components/sections/Abonnements";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Realisations />
        <Video />
        <Processus />
        <Abonnements />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
