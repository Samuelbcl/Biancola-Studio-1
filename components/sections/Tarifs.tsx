"use client";

import { motion } from "framer-motion";
import { FileText, Wrench, ArrowUpRight } from "lucide-react";

const phases = [
  {
    icon: FileText,
    label: "01 — Création",
    title: "Devis sur mesure",
    description:
      "Chaque projet est unique. Après un premier échange pour comprendre vos besoins, objectifs et contraintes, je vous envoie un devis détaillé : périmètre, délais, tarif. Pas de forfait figé — un prix juste pour votre projet.",
    detail: "Inclus dans le devis : design, développement, mise en ligne, formation à la prise en main.",
  },
  {
    icon: Wrench,
    label: "02 — Après lancement",
    title: "Maintenance & évolutions",
    description:
      "Une fois votre site en ligne, je reste disponible. Une facture mensuelle couvre la maintenance technique, les mises à jour de sécurité et les petites évolutions. Pour les développements plus importants, on définit un nouveau devis ensemble.",
    detail: "Tarif mensuel défini selon le niveau de suivi souhaité.",
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tarifs
          </motion.p>
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Un prix juste,{" "}
            <span className="text-gradient">adapté à votre projet</span>
          </motion.h2>
          <motion.p
            className="mt-5 text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Transparence totale. Vous savez exactement pour quoi vous payez,
            dès le départ.
          </motion.p>
        </div>

        {/* Two phase cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.label}
                className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors hover:border-primary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-primary"
                  style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
                >
                  <Icon
                    size={22}
                    className="transition-colors group-hover:text-white"
                    style={{ color: "#2563EB" }}
                  />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {phase.label}
                </p>
                <h3 className="mb-3 text-xl font-bold text-dark">{phase.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {phase.description}
                </p>

                <div
                  className="rounded-xl p-4 text-sm text-gray-500"
                  style={{ backgroundColor: "rgba(37,99,235,0.04)" }}
                >
                  {phase.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <a
            href="/contact"
            className="magnetic inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Démarrer un projet
            <ArrowUpRight size={16} />
          </a>
          <p className="text-sm text-gray-400">
            Réponse sous 48h · Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
