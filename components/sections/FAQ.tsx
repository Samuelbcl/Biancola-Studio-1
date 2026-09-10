"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/content/faq";

export default function FAQ({ simple = false }: { simple?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const Heading = simple ? "h1" : "h2";

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            FAQ
          </p>
          <Heading className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Questions <span className="text-gradient">fréquentes</span>
          </Heading>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-gray-500">
            Outils métiers, automatisation, Excel, budget, IA, suite du projet :
            les questions que les dirigeants de PME me posent le plus souvent.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-200 transition-colors"
                style={{
                  borderColor: isOpen ? "#2563EB" : undefined,
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-base font-medium text-dark">
                    {faq.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-xl font-light"
                    style={{ color: "#2563EB" }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
