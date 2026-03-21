"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Combien de temps prend la création d'un site ?",
    a: "En moyenne, un site vitrine est livré en 2 à 4 semaines. Pour un e-commerce ou une application web, comptez 4 à 8 semaines selon la complexité.",
  },
  {
    q: "Est-ce que le site sera responsive ?",
    a: "Absolument. Tous nos sites sont conçus mobile-first et testés sur tous les appareils et navigateurs principaux.",
  },
  {
    q: "Puis-je modifier mon site moi-même après la livraison ?",
    a: "Oui, nous intégrons un CMS intuitif qui vous permet de modifier vos contenus, images et pages en toute autonomie.",
  },
  {
    q: "L'hébergement et le nom de domaine sont-ils inclus ?",
    a: "L'hébergement première année est inclus dans tous nos plans. Le nom de domaine peut être inclus ou transféré selon votre choix.",
  },
  {
    q: "Proposez-vous un accompagnement SEO ?",
    a: "Oui, nos plans Pro et Premium incluent un référencement SEO avancé : optimisation technique, contenu, et suivi de positionnement.",
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    a: "Nous acceptons les virements bancaires, cartes de crédit et PayPal. Le paiement peut être échelonné sur demande.",
  },
  {
    q: "Que se passe-t-il après le lancement ?",
    a: "Nous assurons un suivi post-lancement avec monitoring, corrections de bugs et support technique selon votre formule.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-16 text-center text-3xl font-bold text-dark md:text-5xl">
          Questions <span style={{ color: "#2563EB" }}>Fréquentes</span>
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
