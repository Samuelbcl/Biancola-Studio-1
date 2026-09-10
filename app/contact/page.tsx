import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact | Réserver un diagnostic gratuit — Biancola Studio, Liège",
  description:
    "Racontez-moi comment votre PME travaille aujourd'hui : je reviens vers vous sous 48h pour un premier échange de 30 minutes, gratuit et sans engagement. Liège, Wallonie, Belgique.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Contact simple />
      </main>
      <Footer />
    </>
  );
}
