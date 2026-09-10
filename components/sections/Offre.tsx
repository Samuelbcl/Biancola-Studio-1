"use client";

import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  FileSpreadsheet,
  FileText,
  SearchCheck,
  Zap,
  Receipt,
  Check,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Mini-visuels : on comprend chaque étape sans lire                  */
/* ------------------------------------------------------------------ */

function AuditVisual() {
  const nodes = [Mail, FileSpreadsheet, FileText];
  return (
    <div className="flex items-center">
      {nodes.map((Icon, i) => (
        <Fragment key={i}>
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
            <Icon size={20} className="text-gray-500" />
            {i === 1 && (
              <>
                {/* friction repérée */}
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[11px] font-bold text-white ring-2 ring-white">
                  !
                </span>
                {/* loupe */}
                <span className="absolute -bottom-5 -right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-white">
                  <SearchCheck size={18} />
                </span>
              </>
            )}
          </div>
          {i < nodes.length - 1 && (
            <span className="mx-2 block w-7 border-t-2 border-dashed border-primary/30" />
          )}
        </Fragment>
      ))}
    </div>
  );
}

function OutilVisual() {
  return (
    <div className="flex h-28 w-48 overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-gray-100">
      <div className="flex w-10 flex-col gap-1.5 bg-navy p-2">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="mt-1 h-1.5 w-full rounded bg-white/40" />
        <span className="h-1.5 w-4/5 rounded bg-white/15" />
        <span className="h-1.5 w-full rounded bg-white/15" />
        <span className="h-1.5 w-3/5 rounded bg-white/15" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-2.5">
        <div className="flex gap-2">
          <div className="flex-1 rounded-md bg-gray-50 p-1.5 ring-1 ring-gray-100">
            <span className="block h-1 w-1/2 rounded bg-gray-200" />
            <span className="mt-1.5 block h-2 w-3/4 rounded bg-primary/70" />
          </div>
          <div className="flex-1 rounded-md bg-gray-50 p-1.5 ring-1 ring-gray-100">
            <span className="block h-1 w-1/2 rounded bg-gray-200" />
            <span className="mt-1.5 block h-2 w-2/3 rounded bg-blue-light" />
          </div>
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-md bg-gray-50 px-2 pb-1.5 pt-2 ring-1 ring-gray-100">
          {[40, 65, 50, 85, 70, 95].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-primary"
              style={{ height: `${h}%`, opacity: 0.35 + i * 0.12 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowConnector({ delay = 0 }: { delay?: number }) {
  return (
    <span className="relative mx-1.5 block h-2 w-10">
      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded bg-primary/20" />
      <span
        className="flow-dot absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary"
        style={{ animationDelay: `${delay}s` }}
      />
    </span>
  );
}

function AutoVisual() {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
          <FileText size={20} className="text-gray-500" />
        </div>
        <span className="text-[11px] font-medium text-gray-400">Devis</span>
      </div>
      <div className="flex h-12 items-center">
        <FlowConnector />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
        <Zap size={20} />
      </div>
      <div className="flex h-12 items-center">
        <FlowConnector delay={0.9} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
          <Receipt size={20} className="text-gray-500" />
        </div>
        <span className="text-[11px] font-medium text-gray-400">Facture</span>
      </div>
    </div>
  );
}

function CareVisual() {
  return (
    <div className="w-48 rounded-lg bg-white p-3 shadow-md ring-1 ring-gray-100">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="h-1.5 w-14 rounded bg-gray-200" />
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Check size={10} strokeWidth={3} />
        </span>
      </div>
      <div className="mt-3 flex h-7 items-end gap-[3px]">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${i === 11 ? "h-3/5 bg-amber-300" : "h-full bg-emerald-400/80"}`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check size={11} strokeWidth={3} />
        </span>
        <span className="h-1.5 w-20 rounded bg-gray-200" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

const steps: {
  number: string;
  verb: string;
  title: string;
  text: string;
  href: string;
  visual: ReactNode;
}[] = [
  {
    number: "01",
    verb: "Comprendre",
    title: "Biancola Audit",
    text: "J'analyse comment vous travaillez et je repère ce qui vous fait perdre du temps.",
    href: "/audit",
    visual: <AuditVisual />,
  },
  {
    number: "02",
    verb: "Construire",
    title: "Outils métiers sur mesure",
    text: "Un logiciel taillé pour vos processus : devis, clients, planning, interventions…",
    href: "/services/outil-metier-sur-mesure",
    visual: <OutilVisual />,
  },
  {
    number: "03",
    verb: "Automatiser",
    title: "Automatisation & intégrations",
    text: "Ce qui se répète se fait tout seul, et vos logiciels se parlent enfin.",
    href: "/services/automatisation-pme",
    visual: <AutoVisual />,
  },
  {
    number: "04",
    verb: "Accompagner",
    title: "Biancola Care",
    text: "Maintenance, suivi et évolutions : votre outil grandit avec votre entreprise.",
    href: "/tarifs#care",
    visual: <CareVisual />,
  },
];

export default function Offre() {
  return (
    <section id="offre" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            Ce que je fais
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            De l&apos;analyse à l&apos;outil qui{" "}
            <span className="text-gradient">travaille pour vous</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={s.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <div
                  className="flex h-44 items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(96,165,250,0.14) 100%)",
                  }}
                >
                  {s.visual}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {s.number} · {s.verb}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-dark">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.text}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                    Découvrir
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Besoin d&apos;un site internet ou d&apos;une boutique en ligne&nbsp;? Je les crée aussi.{" "}
          <Link
            href="/services/creation-site-internet-liege"
            className="whitespace-nowrap font-semibold text-primary hover:underline"
          >
            Voir les sites →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
