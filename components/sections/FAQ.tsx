"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Combien coûte un site web ?",
    a: "Chaque projet est unique, donc le prix aussi. Après un premier échange gratuit, je vous envoie un devis détaillé adapté à vos besoins. Pas de surprise, vous savez exactement ce que vous payez.",
  },
  {
    q: "Combien de temps prend la création d'un site ?",
    a: "Un site vitrine est généralement livré en 1 à 2 semaines. Pour une application web ou un projet plus complexe, les délais varient selon l'ampleur du projet — on en discute ensemble dès le premier échange.",
  },
  {
    q: "Mon site fonctionnera-t-il sur téléphone et tablette ?",
    a: "Évidemment. Chaque site est pensé dès le départ pour s'afficher parfaitement sur tous les écrans : smartphone, tablette et ordinateur.",
  },
  {
    q: "Pourrai-je modifier mon site moi-même ?",
    a: "Oui, selon le type de projet, j'intègre un espace d'administration qui vous permet de modifier vos contenus en toute autonomie. Une formation à la prise en main est incluse dans chaque projet.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Je reste disponible. Une maintenance mensuelle couvre les mises à jour de sécurité, les sauvegardes et les petites évolutions. Pour des besoins plus importants, on définit un nouveau périmètre ensemble.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Je travaille principalement avec React, Next.js et TypeScript pour le front-end, et Node.js pour le back-end. Des outils modernes, performants et évolutifs.",
  },
  {
    q: "Le référencement (SEO) est-il inclus ?",
    a: "Oui, chaque site est optimisé pour le référencement naturel : structure technique propre, balises méta, vitesse de chargement et bonnes pratiques Google.",
  },
  {
    q: "Comment se déroule le paiement ?",
    a: "Simple et transparent : un acompte au démarrage du projet, puis le solde après votre validation finale. Vous ne payez le reste que lorsque vous êtes satisfait du résultat.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-16 font-display text-center text-3xl font-bold tracking-tight text-dark md:text-5xl">
          Questions <span className="text-gradient">Fréquentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-200 transition-colors"
                style={{
                  borderColor: isOpen ? "#2563EB" : undefined,
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-base font-medium text-dark">
                    {faq.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-xl font-light"
                    style={{ color: "#2563EB" }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
