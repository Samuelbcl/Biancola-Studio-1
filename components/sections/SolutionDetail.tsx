"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { solutions, getSolution } from "@/content/solutions";
import PageIntro from "@/components/ui/PageIntro";
import Realisations from "@/components/sections/Realisations";
import CTABanner from "@/components/ui/CTABanner";

const gradientBg = {
  background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)",
};

export default function SolutionDetail({ slug }: { slug: string }) {
  const s = getSolution(slug);
  if (!s) return null;

  const Icon = s.icon;
  const others = solutions.filter((o) => o.slug !== slug);

  return (
    <>
      <PageIntro label={`${s.number} — ${s.title}`} title={s.tagline} lead={s.intro}>
        <Link
          href="/contact"
          className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-all glow-blue-hover hover:scale-105"
        >
          Réserver un diagnostic
        </Link>
        <Link
          href="/processus"
          className="rounded-full border-2 border-gray-200 bg-white px-8 py-3.5 text-sm font-medium text-dark transition-all hover:border-primary hover:text-primary"
        >
          Voir la méthode
        </Link>
      </PageIntro>

      {/* Situations */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="font-display mb-8 text-2xl font-bold tracking-tight text-dark md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Vous vous reconnaissez ?
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {s.situations.map((t, i) => (
              <motion.div
                key={t}
                className="flex items-start gap-3 rounded-2xl border-2 border-gray-100 bg-white p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.08 }}
              >
                <span
                  className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-primary"
                  style={{ backgroundColor: "rgba(37,99,235,0.1)" }}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                <p className="font-medium leading-snug text-dark">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-6 py-24" style={gradientBg}>
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
            >
              <Icon size={24} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-dark md:text-4xl">
              {s.deliverablesTitle}
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                className="rounded-2xl border-2 border-gray-100 bg-white p-7 transition-colors hover:border-primary"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
              >
                <h3 className="mb-2 text-lg font-bold text-dark">{d.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{d.text}</p>
              </motion.div>
            ))}
          </div>

          {s.areas && (
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Ce qui est passé en revue
              </p>
              <div className="flex flex-wrap gap-2">
                {s.areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-gray-600 ring-1 ring-gray-200"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Déroulé (audit) */}
      {s.steps && (
        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              className="font-display mb-12 text-2xl font-bold tracking-tight text-dark md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Comment ça se passe
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {s.steps.map((st, i) => (
                <motion.div
                  key={st.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-dark">{st.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{st.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Principe */}
      <section className="px-6 py-20">
        <motion.blockquote
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-2xl font-bold tracking-tight text-dark md:text-4xl">
            « {s.principle} »
          </p>
        </motion.blockquote>
      </section>

      {/* Cas concrets liés */}
      {s.caseIds.length > 0 && (
        <Realisations
          simple
          showCta
          ids={s.caseIds}
          label="Cas concrets"
          title={
            <>
              Ce que ça donne <span className="text-gradient">en pratique</span>
            </>
          }
        />
      )}

      {/* Autres solutions */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Voir aussi
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((o) => {
              const OIcon = o.icon;
              return (
                <Link
                  key={o.slug}
                  href={o.href}
                  className="group flex items-center gap-4 rounded-2xl border-2 border-gray-100 p-5 transition-colors hover:border-primary"
                >
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
                  >
                    <OIcon size={20} className="text-primary" />
                  </div>
                  <p className="flex-1 font-bold text-dark">{o.title}</p>
                  <ArrowRight
                    size={16}
                    className="text-primary transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
