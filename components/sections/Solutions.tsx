"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/content/solutions";

export default function Solutions({ simple = false }: { simple?: boolean }) {
  const primary = solutions.filter((s) => !s.secondary);
  const secondary = solutions.filter((s) => s.secondary);

  return (
    <section id="solutions" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {!simple && (
          <motion.div
            className="mb-16 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#2563EB" }}
            >
              Solutions
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
              De l&apos;analyse à l&apos;outil qui{" "}
              <span className="text-gradient">travaille pour vous</span>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-gray-500">
              Vous n&apos;avez pas besoin de savoir laquelle de ces solutions vous
              convient. C&apos;est le rôle du diagnostic — et souvent, la réponse
              est une combinaison.
            </p>
          </motion.div>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {primary.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-2xl border-2 border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-primary"
                      style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
                    >
                      <Icon size={24} className="text-primary transition-colors group-hover:text-white" />
                    </div>
                    <span className="font-display text-sm font-bold tracking-widest text-gray-300">
                      {s.number}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-dark">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{s.short}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.examples.map((e) => (
                      <span
                        key={e}
                        className="select-none rounded-full px-3 py-1 text-xs font-medium text-primary"
                        style={{ backgroundColor: "rgba(37,99,235,0.06)" }}
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary">
                    Découvrir
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {secondary.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.slug}
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href={s.href}
                className="group flex flex-col gap-6 rounded-2xl border-2 border-gray-100 bg-gray-50/60 p-8 transition-all hover:border-primary hover:bg-white md:flex-row md:items-center"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-gray-100">
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-dark">{s.title}</h3>
                    <span className="select-none rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400 ring-1 ring-gray-200">
                      En complément
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{s.short}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Voir
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
