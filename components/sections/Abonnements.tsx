"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "79",
    description: "Pour garder votre site en bonne santé, sans stress.",
    features: [
      "Maintenance technique mensuelle",
      "Mises à jour de sécurité",
      "Sauvegardes automatiques",
      "Monitoring & uptime",
      "Support email (48h)",
    ],
    highlighted: false,
  },
  {
    name: "Évolution",
    price: "199",
    description: "Maintenance + petites évolutions chaque mois.",
    features: [
      "Tout le pack Essentiel",
      "Jusqu'à 3h d'évolutions/mois",
      "Ajout de contenu & pages",
      "Optimisations SEO",
      "Rapports mensuels",
      "Support prioritaire (24h)",
    ],
    highlighted: true,
  },
  {
    name: "Croissance",
    price: "449",
    description: "Un partenaire dédié pour faire évoluer votre produit.",
    features: [
      "Tout le pack Évolution",
      "Jusqu'à 8h d'évolutions/mois",
      "Nouvelles fonctionnalités",
      "Intégrations & API",
      "Conseil stratégique",
      "Support réactif (même jour)",
    ],
    highlighted: false,
  },
];

export default function Abonnements() {
  return (
    <section id="maintenance" className="px-6 py-24" style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Maintenance & Évolutions
          </motion.p>
          <motion.h2
            className="text-3xl font-bold text-dark md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Votre site <span style={{ color: "#2563EB" }}>grandit</span> avec vous
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Après la mise en ligne, choisissez le niveau d&apos;accompagnement
            adapté à vos besoins.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-white shadow-xl shadow-primary/20"
                  : "border-2 border-gray-100 bg-white text-dark"
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
                href="/contact"
                className={`block rounded-full py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-white text-primary"
                    : "bg-primary text-white"
                }`}
              >
                Démarrer un projet
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
