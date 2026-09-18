"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, FileText } from "lucide-react";
import { getSolution } from "@/content/solutions";

export default function AuditTeaser() {
  const audit = getSolution("audit");
  if (!audit) return null;

  return (
    <section id="audit" className="bg-navy px-6 py-32 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-light">
            Biancola Audit
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Vous n&apos;avez pas besoin de savoir{" "}
            <span className="text-gradient-animated">quel logiciel construire</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Racontez-moi votre quotidien&nbsp;: j&apos;identifie ce qui mérite d&apos;être
            simplifié ou automatisé, et par où commencer.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-dark transition-all hover:scale-105 hover:shadow-lg"
            >
              Réserver un diagnostic
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:border-white"
            >
              Découvrir l&apos;audit
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl bg-white p-8 text-dark shadow-2xl"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
            >
              <FileText size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-dark">Rapport d&apos;audit</p>
              <p className="text-xs text-gray-400">Ce que vous recevez</p>
            </div>
          </div>

          <ul className="space-y-4">
            {audit.deliverables.map((d, i) => (
              <motion.li
                key={d.title}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="font-medium text-dark">{d.title}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
