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
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Commencez simplement par me montrer comment vous travaillez. Le
            Biancola Audit passe en revue votre fonctionnement — commercial,
            devis, clients, planning, administration, documents, facturation — et
            identifie ce qui mérite vraiment d&apos;être simplifié ou automatisé.
          </p>
          <p className="mt-4 leading-relaxed text-white/70">
            C&apos;est moi qui identifie la solution. Vous, vous décidez.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-dark transition-all hover:scale-105 hover:shadow-lg"
            >
              Découvrir le Biancola Audit
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:border-white"
            >
              Réserver un diagnostic
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
          <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-5">
            <div className="flex items-center gap-3">
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
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold text-primary"
              style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
            >
              Biancola Audit
            </span>
          </div>

          <ul className="space-y-3">
            {audit.deliverables.map((d, i) => (
              <motion.li
                key={d.title}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-dark">{d.title}</span>
              </motion.li>
            ))}
          </ul>

          {audit.areas && (
            <>
              <p className="mb-3 mt-7 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Ce qui est passé en revue
              </p>
              <div className="flex flex-wrap gap-2">
                {audit.areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-100"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
