"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, LifeBuoy, Sparkles, Check, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "Surveillance & maintenance",
    items: ["Monitoring et sauvegardes", "Mises à jour de sécurité", "Corrections rapides"],
  },
  {
    icon: LifeBuoy,
    title: "Assistance & adaptations",
    items: [
      "Support direct, sans ticket",
      "Petites adaptations selon la formule",
      "Prise en main des nouveaux utilisateurs",
    ],
  },
  {
    icon: Sparkles,
    title: "Amélioration continue",
    items: [
      "Points réguliers sur l'usage réel",
      "Nouvelles automatisations",
      "Évolutions planifiées ensemble",
    ],
  },
];

export default function Care() {
  return (
    <section id="care" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            Biancola Care
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Un outil métier{" "}
            <span className="text-gradient">évolue avec votre entreprise</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">
            Après la mise en place, je ne disparais pas. Biancola Care couvre le
            suivi de votre outil dans la durée : il reste fiable, à jour, et il
            continue de s&apos;adapter à votre façon de travailler.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors hover:border-primary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
                >
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-4 text-lg font-bold text-dark">{p.title}</h3>
                <ul className="space-y-2.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="max-w-2xl text-sm text-gray-400">
            Formule définie selon le niveau de suivi souhaité. Les développements
            importants font l&apos;objet d&apos;un projet séparé, chiffré à part.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            En discuter
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
