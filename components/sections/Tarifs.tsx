"use client";

import { motion } from "framer-motion";
import { MessagesSquare, SearchCheck, Wrench, ArrowUpRight } from "lucide-react";

const phases = [
  {
    icon: MessagesSquare,
    label: "01 — Diagnostic",
    title: "Premier échange",
    description:
      "30 minutes, gratuites et sans engagement. Vous me racontez comment vous travaillez, je vous dis honnêtement s'il y a matière à simplifier — et par où commencer.",
    detail: "Gratuit · En visio ou sur place",
  },
  {
    icon: SearchCheck,
    label: "02 — Biancola Audit",
    title: "Analyse & recommandations",
    description:
      "Cartographie de vos processus, frictions, quick wins et recommandation de solution. Un livrable exploitable, que vous poursuiviez avec moi ou non.",
    detail: "Périmètre et format définis lors du diagnostic",
  },
  {
    icon: Wrench,
    label: "03 — Projet & Biancola Care",
    title: "Construction & accompagnement",
    description:
      "Prototype, développement par étapes, automatisations, puis suivi dans la durée. Chaque étape fait l'objet d'un devis clair, validé avant de commencer.",
    detail: "Devis par étape · Care mensuel selon le niveau de suivi",
  },
];

export default function Tarifs({ simple = false }: { simple?: boolean }) {
  const Heading = simple ? "h1" : "h2";

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
            Investissement
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <Heading className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
              Un investissement{" "}
              <span className="text-gradient">par étapes</span>
            </Heading>
          </motion.div>
          <motion.p
            className="mt-5 text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Vous ne payez jamais pour une solution dont l&apos;intérêt n&apos;a pas
            été démontré : chaque étape valide la suivante, et vous gardez la main
            à chacune d&apos;elles.
          </motion.p>
        </div>

        {/* Phase cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.label}
                className="group flex flex-col rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors hover:border-primary"
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
                  className="mt-auto rounded-xl p-4 text-sm text-gray-500"
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
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-all glow-blue-hover hover:scale-105"
          >
            Réserver un diagnostic
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
