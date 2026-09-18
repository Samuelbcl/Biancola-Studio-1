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
  Users,
  CalendarDays,
  FolderOpen,
  Receipt,
  Zap,
  Check,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

/* Aujourd'hui : des outils éparpillés. Sur grand écran, les pastilles sont posées en vrac
   (positions + rotations) ; sur mobile elles s'enroulent, simplement penchées. */
const today = [
  { icon: FileSpreadsheet, label: "Excel", pos: "lg:left-[3%] lg:top-[2%]", rotate: "-rotate-6", alert: true },
  { icon: MessageCircle, label: "WhatsApp", pos: "lg:left-[54%] lg:top-[0%]", rotate: "rotate-6" },
  { icon: Mail, label: "E-mails", pos: "lg:left-[27%] lg:top-[23%]", rotate: "-rotate-3" },
  { icon: BellRing, label: "Relances manuelles", pos: "lg:left-[55%] lg:top-[26%]", rotate: "rotate-[7deg]", alert: true },
  { icon: FileText, label: "Word & PDF", pos: "lg:left-[0%] lg:top-[47%]", rotate: "rotate-3" },
  { icon: Copy, label: "Copier-coller", pos: "lg:left-[36%] lg:top-[50%]", rotate: "-rotate-[8deg]" },
  { icon: Calendar, label: "Agenda", pos: "lg:left-[74%] lg:top-[53%]", rotate: "rotate-2" },
  { icon: Printer, label: "Papier", pos: "lg:left-[12%] lg:top-[76%]", rotate: "-rotate-3" },
  { icon: Shuffle, label: "Infos dispersées", pos: "lg:left-[47%] lg:top-[78%]", rotate: "rotate-6" },
];

/* Avec Biancola : un seul outil, les modules rangés dans son menu. */
const modules = [
  { icon: Users, label: "CRM" },
  { icon: FileText, label: "Devis" },
  { icon: CalendarDays, label: "Planning" },
  { icon: FolderOpen, label: "Documents" },
  { icon: Receipt, label: "Factures" },
  { icon: Zap, label: "Automatisations" },
];

const rows = [
  { status: "Accepté", icon: Check, tone: "bg-emerald-50 text-emerald-600" },
  { status: "Envoyée", icon: Zap, tone: "bg-primary/10 text-primary" },
  { status: "Relancé", icon: Zap, tone: "bg-primary/10 text-primary" },
];

function AppWindow() {
  return (
    <div className="overflow-hidden rounded-xl bg-white text-dark shadow-2xl ring-1 ring-white/20">
      {/* barre de titre */}
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        <span className="ml-2 text-[11px] font-semibold text-gray-400">Votre outil</span>
      </div>

      <div className="flex">
        {/* menu : les modules */}
        <div className="w-36 shrink-0 space-y-0.5 bg-navy p-1.5 sm:w-40 sm:p-2">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className={`flex items-center gap-1.5 rounded-md px-1.5 py-1.5 text-[11px] font-medium sm:gap-2 sm:px-2 sm:text-xs ${
                  i === 0 ? "bg-white/10 text-white" : "text-white/60"
                }`}
              >
                <Icon size={12} className="shrink-0" />
                <span className="truncate">{m.label}</span>
              </div>
            );
          })}
        </div>

        {/* contenu : tout au même endroit */}
        <div className="flex-1 space-y-2 p-2.5 sm:p-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-gray-50 p-2 ring-1 ring-gray-100">
              <span className="block h-1.5 w-1/2 rounded bg-gray-200" />
              <span className="mt-2 block h-2.5 w-3/4 rounded bg-primary/70" />
            </div>
            <div className="rounded-md bg-gray-50 p-2 ring-1 ring-gray-100">
              <span className="block h-1.5 w-1/2 rounded bg-gray-200" />
              <span className="mt-2 block h-2.5 w-2/3 rounded bg-blue-light" />
            </div>
          </div>
          {rows.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.status}
                className="flex items-center gap-2 rounded-md px-1.5 py-1.5 ring-1 ring-gray-100"
              >
                <span className="h-4 w-4 shrink-0 rounded-full bg-gray-200" />
                <span className="h-1.5 min-w-0 flex-1 rounded bg-gray-200" />
                <span
                  className={`inline-flex shrink-0 items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${r.tone}`}
                >
                  <Icon size={10} strokeWidth={3} />
                  {r.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
          {/* Aujourd'hui : en vrac */}
          <motion.div
            className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-6 sm:p-8"
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

            <div className="relative mt-6 flex select-none flex-wrap justify-center gap-3 lg:block lg:h-64">
              {/* fils emmêlés entre les outils (grand écran) */}
              <svg
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {[
                  "M 12 8 C 40 30, 10 55, 45 58",
                  "M 66 6 C 30 20, 70 45, 12 52",
                  "M 38 28 C 60 40, 40 80, 58 82",
                  "M 72 30 C 90 55, 30 60, 22 80",
                ].map((d) => (
                  <path
                    key={d}
                    d={d}
                    fill="none"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>

              {today.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.span
                    key={t.label}
                    className={`relative inline-flex cursor-default items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-600 shadow-sm lg:absolute ${t.pos} ${t.rotate}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                  >
                    <Icon size={14} />
                    {t.label}
                    {t.alert && (
                      <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-white ring-2 ring-white">
                        !
                      </span>
                    )}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* Au milieu : le logo */}
          <motion.div
            className="flex items-center justify-center py-2 lg:px-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4 lg:flex-col">
              <Image
                src="/favicon.png"
                alt="Biancola Studio"
                width={80}
                height={80}
                className="h-16 w-16 select-none drop-shadow-[0_10px_24px_rgba(37,99,235,0.35)] lg:h-20 lg:w-20"
              />
              <ArrowRight className="hidden text-primary lg:block" size={28} />
              <ArrowDown className="text-primary lg:hidden" size={28} />
              <p className="max-w-[9rem] text-center text-xs font-semibold uppercase tracking-widest text-primary">
                Comprendre · Simplifier · Automatiser
              </p>
            </div>
          </motion.div>

          {/* Avec Biancola : un seul outil */}
          <motion.div
            className="flex flex-col rounded-2xl p-6 text-white shadow-xl sm:p-8"
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
            <motion.div
              className="mt-6 select-none"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <AppWindow />
            </motion.div>
            <p className="mt-5 text-sm text-white/70">
              Uniquement les modules dont vous avez besoin.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
