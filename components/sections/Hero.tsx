"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "@/components/ui/Marquee";

const lines = [
  { text: "Votre présence digitale,", accent: false },
  { text: "réinventée.", accent: true },
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
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Title - line by line reveal */}
        <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
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

        {/* Subtitle */}
        <motion.p
          className="mt-8 max-w-lg text-lg text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          Des expériences web modernes, performantes et sur mesure
          pour propulser votre activité.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <a
            href="/realisations"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-all glow-blue-hover hover:scale-105"
          >
            Voir mes réalisations
          </a>
          <a
            href="/contact"
            className="rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-sm font-medium text-dark transition-all hover:border-primary hover:text-primary"
          >
            Démarrer un projet
          </a>
        </motion.div>
      </motion.div>

      {/* Marquee bottom */}
      <div className="relative z-10 border-t border-gray-200 bg-white py-4">
        <Marquee text="Sites Vitrines · E-commerce · Applications · SaaS ·" />
      </div>
    </section>
  );
}
