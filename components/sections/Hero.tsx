"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "@/components/ui/Marquee";

const titleText = "Votre présence digitale,";
const highlightText = "réinventée.";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Video background with parallax */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        src="/hero-video.mp4"
        style={{ y: videoY }}
      />

      {/* White overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(255,255,255,0.72)" }}
      />

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Title - letter by letter */}
        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tight text-dark md:text-6xl lg:text-7xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleText.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
          <br />
          {highlightText.split("").map((char, i) => (
            <motion.span
              key={`h-${i}`}
              variants={letterVariants}
              style={{ color: "#2563EB" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-xl text-lg text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Nous concevons des expériences web modernes, performantes et sur
          mesure pour propulser votre activité.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <a
            href="#realisations"
            className="magnetic rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Voir nos réalisations
          </a>
          <a
            href="/contact"
            className="magnetic rounded-full border-2 border-primary bg-white px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </motion.div>

      {/* Marquee bottom */}
      <div className="relative z-10 border-t border-gray-200 bg-white py-4">
        <Marquee items={["Sites Vitrines", "E-commerce", "Applications Web", "SaaS", "Design", "Développement"]} />
      </div>
    </section>
  );
}
