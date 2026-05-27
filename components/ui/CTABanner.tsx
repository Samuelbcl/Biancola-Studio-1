"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="px-6 py-16">
      <motion.div
        className="relative mx-auto max-w-4xl rounded-2xl px-8 py-12 text-center md:px-16"
        style={{
          background: "linear-gradient(135deg, #0f1729 0%, #1e3a5f 50%, #2563EB 100%)",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Personnage Samuel + AI accoudé sur le bord supérieur gauche */}
        <div
          className="pointer-events-none absolute z-20 hidden md:block"
          style={{
            bottom: "calc(100% - 53px)",
            left: "40px",
            width: "220px",
            height: "auto",
          }}
        >
          <Image
            src="/marketing/samuel-peek.png"
            alt="Samuel et son IA"
            width={440}
            height={400}
            priority
            className="h-auto w-full select-none drop-shadow-2xl"
          />
        </div>

        <h3 className="relative z-10 font-display text-2xl font-bold text-white md:text-3xl">
          Un projet en tête ?
        </h3>
        <p className="relative z-10 mx-auto mt-3 max-w-md text-sm text-white/60">
          Discutons de votre projet web. Basé à Liège, je suis disponible pour un premier échange gratuit.
        </p>
        <a
          href="/contact"
          className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-dark transition-all hover:scale-105 hover:shadow-lg"
        >
          Démarrer un projet
          <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
