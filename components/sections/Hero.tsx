"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "@/components/ui/Marquee";

// H1 retenu : bénéfice avant technologie. Les autres pistes vivent ailleurs sur la home :
// « Vos processus méritent mieux qu'Excel et des copier-coller. » (Situations),
// « Vos outils devraient s'adapter à votre entreprise. Pas l'inverse. » (Transformation),
// « Montrez-moi comment vous travaillez. » (CTA Banner),
// « Une information encodée une fois. Le reste s'automatise. » (conclusion Transformation).
const lines = [
  { text: "Moins de tâches manuelles.", accent: false },
  { text: "Plus de temps pour votre entreprise.", accent: true },
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

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-14 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Title - line by line reveal */}
        <h1 className="font-display max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className={`block ${line.accent ? "text-gradient-animated" : "text-dark"}`}
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
          className="mt-5 max-w-md text-sm font-semibold uppercase leading-relaxed tracking-widest text-primary md:max-w-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Digitalisation & outils métiers sur mesure pour PME · Liège, Belgique
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          J&apos;analyse le fonctionnement de votre PME et je développe les outils
          métiers et les automatisations qui remplacent vos fichiers Excel, vos
          doubles encodages et vos relances manuelles.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <a
            href="/contact"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-all glow-blue-hover hover:scale-105"
          >
            Réserver un diagnostic
          </a>
          <a
            href="/realisations"
            className="rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-sm font-medium text-dark transition-all hover:border-primary hover:text-primary"
          >
            Voir des cas concrets
          </a>
        </motion.div>

        <motion.p
          className="mt-6 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Premier échange gratuit · Réponse sous 48h · Liège, Wallonie, Belgique
        </motion.p>
      </motion.div>

      {/* Marquee bottom */}
      <div className="relative z-10 border-t border-gray-200 bg-white py-4">
        <Marquee text="Digitalisation des PME · Outils métiers sur mesure · Automatisation · CRM sur mesure · Liège, Wallonie ·" />
      </div>
    </section>
  );
}
