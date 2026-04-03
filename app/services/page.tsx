import type { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Services | Webdesigner à Liège — Sites Vitrines, E-commerce & Applications",
  description:
    "Découvrez mes services de création web à Liège : sites vitrines, e-commerce, applications web et SaaS. Solutions sur mesure en Wallonie.",
  alternates: { canonical: "/services" },
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
