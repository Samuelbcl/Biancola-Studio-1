import type { Metadata } from "next";
import Header from "@/components/Header";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "FAQ | Biancola Studio — Questions sur la création web à Liège",
  description:
    "Retrouvez les réponses aux questions fréquentes sur mes services de création de sites et applications web à Liège. Tarifs, délais, processus.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Combien coûte un site web ?", acceptedAnswer: { "@type": "Answer", text: "Chaque projet est unique, donc le prix aussi. Après un premier échange gratuit, je vous envoie un devis détaillé adapté à vos besoins." } },
    { "@type": "Question", name: "Combien de temps prend la création d'un site ?", acceptedAnswer: { "@type": "Answer", text: "Un site vitrine est généralement livré en 1 à 2 semaines. Pour une application web, les délais varient selon l'ampleur du projet." } },
    { "@type": "Question", name: "Travaillez-vous uniquement à Liège ?", acceptedAnswer: { "@type": "Answer", text: "Je suis basé à Liège, mais je travaille avec des clients dans toute la Wallonie et en Belgique." } },
    { "@type": "Question", name: "Pourquoi choisir un webdesigner freelance plutôt qu'une agence ?", acceptedAnswer: { "@type": "Answer", text: "En tant que freelance, vous bénéficiez d'un interlocuteur unique, de tarifs plus accessibles et d'une communication directe." } },
    { "@type": "Question", name: "Pouvez-vous refondre un site existant ?", acceptedAnswer: { "@type": "Answer", text: "Absolument. Je peux repenser entièrement votre site : nouveau design, meilleures performances et optimisation pour le référencement local." } },
  ],
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
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
