"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Contact",
    description:
      "Échangeons sur votre projet, vos objectifs et vos besoins pour définir ensemble la meilleure approche.",
  },
  {
    title: "Audit",
    description:
      "Analyse approfondie de votre marché, de vos concurrents et de votre positionnement digital actuel.",
  },
  {
    title: "Confection",
    description:
      "Design et développement sur mesure de votre solution, avec des points réguliers à chaque étape.",
  },
  {
    title: "Tests",
    description:
      "Tests rigoureux sur tous les appareils et navigateurs pour garantir performance et fiabilité.",
  },
  {
    title: "Validation",
    description:
      "Revue complète avec vous, ajustements finaux et validation avant la mise en ligne.",
  },
  {
    title: "Lancement",
    description:
      "Déploiement, monitoring et accompagnement post-lancement pour assurer un démarrage optimal.",
  },
];

export default function Processus() {
  return (
    <section id="processus" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-20 text-center text-3xl font-bold text-dark md:text-5xl">
          Notre <span style={{ color: "#2563EB" }}>Processus</span>
        </h2>

        {/* Mobile: single column */}
        <div className="relative md:hidden">
          <div className="absolute left-5 top-0 h-full w-px" style={{ backgroundColor: "#E2E8F0" }} />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative mb-12 pl-14 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: alternating left/right */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{ backgroundColor: "#E2E8F0" }} />
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                className="relative mb-16 flex items-start last:mb-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`w-1/2 pr-10 text-right ${isLeft ? "" : "invisible"}`}>
                  <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.description}</p>
                </div>
                <div className="absolute left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                  {i + 1}
                </div>
                <div className={`w-1/2 pl-10 ${isLeft ? "invisible" : ""}`}>
                  <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
