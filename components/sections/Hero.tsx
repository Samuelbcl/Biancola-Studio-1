"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "@/components/ui/Marquee";

const lines = [
  { text: "Vos outils devraient s'adapter à votre entreprise.", accent: false },
  { text: "Pas l'inverse.", accent: true },
];

const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Video background with parallax */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        style={{ y: videoY }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(255,255,255,0.72)" }}
      />

      {/* Content with parallax — une phrase, un label, un bouton */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-24 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <h1 className="font-display max-w-6xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className={`block text-balance ${line.accent ? "text-gradient-animated" : "text-dark"}`}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* SEO label */}
        <motion.p
          className="mt-6 text-xs font-semibold uppercase leading-relaxed tracking-widest text-primary sm:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Digitalisation & outils métiers sur mesure · PME · Liège, Belgique
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <a
            href="/contact"
            className="inline-block rounded-full bg-primary px-9 py-4 text-sm font-medium text-white transition-all glow-blue-hover hover:scale-105"
          >
            Réserver un diagnostic
          </a>
        </motion.div>
      </motion.div>

      {/* Marquee bottom */}
      <div className="relative z-10 border-t border-gray-200 bg-white py-4">
        <Marquee text="Digitalisation des PME · Outils métiers sur mesure · Automatisation · CRM sur mesure · Liège, Wallonie ·" />
      </div>
    </section>
  );
}
