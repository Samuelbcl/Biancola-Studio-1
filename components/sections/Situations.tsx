"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { situations } from "@/content/situations";

export default function Situations() {
  return (
    <section id="situations" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            Vous vous reconnaissez ?
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Vos processus méritent mieux qu&apos;
            <span className="text-gradient">Excel et des copier-coller</span>.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-gray-500">
            Voici le quotidien de beaucoup de PME. Si une seule de ces situations
            vous parle, il y a probablement des heures à récupérer chaque semaine.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.text}
                className="flex items-start gap-4 rounded-2xl border-2 border-gray-100 bg-white p-6 transition-colors hover:border-primary"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
                >
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="font-medium leading-snug text-dark">{s.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="max-w-xl text-gray-500">
            Vous avez répondu oui au moins une fois ? C&apos;est exactement ce que
            le Biancola Audit met à plat, avant de développer quoi que ce soit.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Voir ce qu&apos;on peut simplifier
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
