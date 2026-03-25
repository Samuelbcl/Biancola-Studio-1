"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Handshake } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Technique",
    description: "React, Next.js, TypeScript — des outils modernes pour des résultats performants.",
  },
  {
    icon: Lightbulb,
    title: "Créativité",
    description: "Un design soigné et sur mesure qui reflète votre identité.",
  },
  {
    icon: Handshake,
    title: "Proximité",
    description: "Un interlocuteur unique, disponible et impliqué du début à la fin.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24" style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <motion.p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            À propos
          </motion.p>
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Qui est derrière <span className="text-gradient">Biancola Studio</span> ?
          </motion.h2>
        </div>

        <motion.div
          className="mb-16 mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-gray-500 leading-relaxed">
            Je suis Samuel, développeur web passionné basé à Liège.
            Je crée des sites et applications sur mesure pour les entreprises qui veulent
            une présence digitale à la hauteur de leurs ambitions. Rigueur,
            transparence et résultats — c&apos;est ce qui guide chaque projet.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                className="rounded-2xl border-2 border-gray-100 bg-white p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div
                  className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
                >
                  <Icon size={22} style={{ color: "#2563EB" }} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark">{v.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
