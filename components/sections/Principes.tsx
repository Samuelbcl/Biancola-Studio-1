"use client";

import { motion } from "framer-motion";

const principes = [
  "Une information n'est encodée qu'une seule fois.",
  "Une automatisation doit supprimer une vraie tâche.",
  "Un outil doit simplifier le travail, pas ajouter une contrainte.",
  "Je ne reconstruis pas ce qu'un logiciel existant fait déjà bien : je le connecte.",
  "Du sur-mesure uniquement là où votre processus le justifie.",
  "Commencer petit quand c'est suffisant, mesurer, puis faire évoluer.",
];

export default function Principes() {
  return (
    <section
      id="principes"
      className="px-6 py-32"
      style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            Philosophie
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Six principes, <span className="text-gradient">toujours les mêmes</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {principes.map((p, i) => (
            <motion.div
              key={p}
              className="flex items-start gap-4 rounded-2xl border-2 border-gray-100 bg-white p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.05 }}
            >
              <span className="font-display text-sm font-bold tracking-widest text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-medium leading-snug text-dark">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
