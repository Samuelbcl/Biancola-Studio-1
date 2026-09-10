import type { Metadata } from "next";
import Header from "@/components/Header";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ | Outils métiers, automatisation et digitalisation des PME — Biancola Studio",
  description:
    "Qu'est-ce qu'un outil métier ? Que faut-il automatiser ? Peut-on remplacer Excel ou connecter vos logiciels ? Les réponses aux questions des dirigeants de PME sur la digitalisation.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="pt-20">
        <FAQ simple />
      </main>
      <Footer />
    </>
  );
}
