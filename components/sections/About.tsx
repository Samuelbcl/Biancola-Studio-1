"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Code,
    number: "01",
    title: "Technique",
    subtitle: "Des outils modernes",
    description:
      "React, Next.js, TypeScript — chaque projet est construit avec des technologies performantes et évolutives. Pas de template, tout est développé sur mesure.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Créativité",
    subtitle: "Un design qui vous ressemble",
    description:
      "Chaque interface est pensée pour refléter votre identité. Un design soigné, une expérience fluide et un résultat qui se démarque.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Proximité",
    subtitle: "Un interlocuteur unique",
    description:
      "De la première discussion à la mise en ligne, vous travaillez avec la même personne. Communication directe, réactivité et transparence totale.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-32" style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 text-center">
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
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-gray-500 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Je suis Samuel, développeur web basé à Liège.
            Je crée des sites et applications sur mesure pour les entreprises qui veulent
            une présence digitale à la hauteur de leurs ambitions.
          </motion.p>
        </div>

        {/* 3 Piliers alternés */}
        <div className="space-y-24">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isReversed = i % 2 !== 0;

            return (
              <motion.div
                key={pillar.number}
                className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${isReversed ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Visual block */}
                <div className="flex w-full items-center justify-center md:w-2/5">
                  <div
                    className="flex h-32 w-32 items-center justify-center rounded-3xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(96,165,250,0.12) 100%)",
                    }}
                  >
                    <Icon size={48} className="text-primary" />
                  </div>
                </div>

                {/* Text block */}
                <div className="w-full md:w-3/5">
                  <span className="font-display text-sm font-bold tracking-widest text-primary">
                    {pillar.number}
                  </span>
                  <h3 className="font-display mt-2 text-2xl font-bold text-dark md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-400">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-500">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
