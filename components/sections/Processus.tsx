"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

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

function ProcessStep({
  step,
  index,
  isLeft,
  isMobile,
}: {
  step: (typeof steps)[number];
  index: number;
  isLeft: boolean;
  isMobile: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.0, 0.5],
    isMobile ? [0, 0] : [isLeft ? -60 : 60, 0]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0.0, 0.5],
    isMobile ? [0, 0] : [isLeft ? -15 : 15, 0]
  );
  const opacity = useTransform(scrollYProgress, [0.0, 0.4], [0, 1]);
  const circleScale = useTransform(scrollYProgress, [0.0, 0.4], [0.5, 1]);

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        className="relative mb-12 pl-14 last:mb-0"
        style={{ opacity, y: useTransform(scrollYProgress, [0.0, 0.4], [30, 0]), willChange: "transform, opacity" }}
      >
        <motion.div
          className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md"
          style={{ scale: circleScale }}
        >
          {index + 1}
        </motion.div>
        <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {step.description}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="relative mb-16 flex items-start last:mb-0"
      style={{
        x,
        rotateY,
        opacity,
        perspective: 600,
        willChange: "transform, opacity",
      }}
    >
      <div className={`w-1/2 pr-10 text-right ${isLeft ? "" : "invisible"}`}>
        <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {step.description}
        </p>
      </div>
      <motion.div
        className="absolute left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md"
        style={{ scale: circleScale }}
      >
        {index + 1}
      </motion.div>
      <div className={`w-1/2 pl-10 ${isLeft ? "invisible" : ""}`}>
        <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Processus() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.2], [30, 0]);
  const timelineScale = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);

  return (
    <section ref={sectionRef} id="processus" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-20 font-display text-center text-3xl font-bold tracking-tight text-dark md:text-5xl"
          style={{ opacity: titleOpacity, y: titleY, willChange: "transform, opacity" }}
        >
          Mon <span className="text-gradient">Processus</span>
        </motion.h2>

        {/* Mobile */}
        {isMobile && (
          <div className="relative">
            <div
              className="absolute left-5 top-0 h-full w-px"
              style={{ backgroundColor: "#E2E8F0" }}
            />
            <motion.div
              className="absolute left-5 top-0 h-full w-px"
              style={{
                backgroundColor: "#2563EB",
                scaleY: timelineScale,
                transformOrigin: "top",
              }}
            />
            {steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={i}
                isLeft={i % 2 === 0}
                isMobile={true}
              />
            ))}
          </div>
        )}

        {/* Desktop */}
        {!isMobile && (
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
              style={{ backgroundColor: "#E2E8F0" }}
            />
            <motion.div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
              style={{
                backgroundColor: "#2563EB",
                scaleY: timelineScale,
                transformOrigin: "top",
                willChange: "transform",
              }}
            />
            {steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={i}
                isLeft={i % 2 === 0}
                isMobile={false}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
