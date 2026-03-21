"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "490",
    description: "Idéal pour lancer votre présence en ligne rapidement.",
    features: [
      "Site vitrine jusqu'à 5 pages",
      "Design responsive",
      "Formulaire de contact",
      "Hébergement 1 an inclus",
      "Support email",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "990",
    description: "La solution complète pour développer votre activité.",
    features: [
      "Site jusqu'à 15 pages",
      "Design sur mesure",
      "SEO avancé",
      "Blog intégré",
      "Analytics & reporting",
      "Support prioritaire",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "1990",
    description: "Pour les projets ambitieux qui visent l'excellence.",
    features: [
      "Application web complète",
      "E-commerce ou SaaS",
      "Intégrations API",
      "Dashboard admin",
      "Formation équipe",
      "Support 24/7 dédié",
    ],
    highlighted: false,
  },
];

export default function Abonnements() {
  return (
    <section id="abonnements" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-dark md:text-5xl">
          Nos <span style={{ color: "#2563EB" }}>Abonnements</span>
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-gray-500">
          Des formules adaptées à chaque besoin, sans surprise.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-white shadow-xl shadow-primary/20"
                  : "border-2 border-primary bg-white text-dark"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-primary shadow-sm">
                  Populaire
                </span>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-white/70" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="my-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}€</span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-white/60" : "text-gray-400"
                  }`}
                >
                  /mois
                </span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-white" : "text-primary"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`magnetic block rounded-full py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-white text-primary"
                    : "bg-primary text-white"
                }`}
              >
                Choisir {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
