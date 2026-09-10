"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  title: ReactNode;
  lead?: string;
  /** CTAs éventuels, rendus sous le lead */
  children?: ReactNode;
};

export default function PageIntro({ label, title, lead, children }: Props) {
  return (
    <section className="px-6 pb-0 pt-16 md:pt-24">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          {label}
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-dark md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            {lead}
          </p>
        )}
        {children && (
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {children}
          </div>
        )}
      </motion.div>
    </section>
  );
}
