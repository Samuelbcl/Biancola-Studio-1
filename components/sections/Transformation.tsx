"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Mail,
  MessageCircle,
  FileText,
  Calendar,
  Printer,
  Copy,
  BellRing,
  Shuffle,
  Sparkles,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const today = [
  { icon: FileSpreadsheet, label: "Excel", rotate: "-rotate-2" },
  { icon: Mail, label: "E-mails", rotate: "rotate-1" },
  { icon: MessageCircle, label: "WhatsApp", rotate: "rotate-2" },
  { icon: FileText, label: "Word & PDF", rotate: "-rotate-1" },
  { icon: Calendar, label: "Agenda", rotate: "rotate-1" },
  { icon: Printer, label: "Papier", rotate: "-rotate-2" },
  { icon: Copy, label: "Copier-coller", rotate: "rotate-2" },
  { icon: BellRing, label: "Relances manuelles", rotate: "-rotate-1" },
  { icon: Shuffle, label: "Infos dispersées", rotate: "rotate-1" },
];

const modules = [
  "CRM",
  "Devis",
  "Clients",
  "Planning",
  "Documents",
  "Projets",
  "Interventions",
  "Dashboard",
  "Automatisations",
];

export default function Transformation() {
  return (
    <section
      id="transformation"
      className="px-6 py-32"
      style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}
    >
      <div className="mx-auto max-w-6xl">
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
            Avant / Après
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Une information encodée une fois.{" "}
            <span className="text-gradient">Le reste s&apos;automatise.</span>
          </h2>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* Aujourd'hui */}
          <motion.div
            className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Aujourd&apos;hui
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold text-dark">
              Des informations partout
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {today.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.span
                    key={t.label}
                    className={`inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 ${t.rotate}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                  >
                    <Icon size={14} />
                    {t.label}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* Flèche centrale */}
          <motion.div
            className="flex items-center justify-center py-2 lg:px-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 lg:flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-100">
                <Image
                  src="/favicon.png"
                  alt="Biancola Studio"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
              </div>
              <ArrowRight className="hidden text-primary lg:block" size={28} />
              <ArrowDown className="text-primary lg:hidden" size={28} />
              <p className="max-w-[9rem] text-center text-xs font-semibold uppercase tracking-widest text-primary">
                Comprendre · Simplifier · Automatiser
              </p>
            </div>
          </motion.div>

          {/* Avec Biancola */}
          <motion.div
            className="rounded-2xl p-8 text-white shadow-xl"
            style={{
              background: "linear-gradient(135deg, #0f1729 0%, #1e3a5f 50%, #2563EB 100%)",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Avec Biancola
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold">
              Un outil central, construit pour vous
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {modules.map((m, i) => (
                <motion.span
                  key={m}
                  className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium ring-1 ring-white/15"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.04 }}
                >
                  {m}
                </motion.span>
              ))}
              <motion.span
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium ring-1 ring-white/15"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + modules.length * 0.04 }}
              >
                <Sparkles size={13} />
                IA, quand elle est utile
              </motion.span>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Uniquement les modules dont vous avez besoin.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
