import type { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Services | Biancola Studio — Sites, E-commerce & Applications",
  description:
    "Découvrez mes services : sites vitrines, e-commerce, applications web et SaaS. Des solutions sur mesure pour chaque besoin.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </>
  );
}
