"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const needs = [
  "Diagnostic / Biancola Audit",
  "Outil métier sur mesure",
  "Automatisation & intégrations",
  "Site internet / e-commerce",
  "Je ne sais pas encore — expliquez-moi",
];

const nextSteps = [
  { n: "1", text: "Vous m'écrivez en quelques lignes" },
  { n: "2", text: "Un échange de 30 min, gratuit" },
  { n: "3", text: "Vous recevez mes premières pistes" },
];

const inputClass =
  "w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:bg-white";

export default function Contact({ simple = false }: { simple?: boolean }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const Heading = simple ? "h1" : "h2";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xqegyljz", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) {
      setSent(true);
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <motion.p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <Heading className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
              Réservons votre <span className="text-gradient">diagnostic</span>
            </Heading>
          </motion.div>
          <motion.p
            className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Racontez-moi comment votre entreprise travaille aujourd&apos;hui et ce
            qui vous fait perdre du temps. Je reviens vers vous sous 48h pour
            fixer un premier échange de 30 minutes, gratuit et sans engagement.
          </motion.p>
        </div>

        <motion.div
          className="mb-10 grid gap-3 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          {nextSteps.map((s) => (
            <div
              key={s.n}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {s.n}
              </span>
              <span className="text-sm text-gray-600">{s.text}</span>
            </div>
          ))}
        </motion.div>

        {sent ? (
          <motion.div
            className="flex flex-col items-center gap-4 rounded-2xl border-2 border-green-100 bg-green-50 p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle size={48} className="text-green-500" />
            <h3 className="text-xl font-bold text-dark">Message envoyé !</h3>
            <p className="text-sm text-gray-500">
              Je reviens vers vous sous 48h pour fixer notre premier échange.
              Merci pour votre confiance.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-dark">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jean@exemple.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-dark">
                  Entreprise{" "}
                  <span className="font-normal text-gray-400">(facultatif)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="project-type" className="mb-1.5 block text-sm font-medium text-dark">
                  Votre besoin
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  required
                  className={inputClass}
                >
                  <option value="">Sélectionnez...</option>
                  {needs.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark">
                Comment travaillez-vous aujourd&apos;hui ?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Ex. : nos devis sont faits dans Excel, les commandes arrivent par e-mail et on ressaisit tout dans le logiciel de facturation…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Envoi en cours..." : "Réserver mon diagnostic"}
                {!loading && <Send size={16} />}
              </button>
              <p className="text-xs text-gray-400">
                Réponse sous 48h · Gratuit · Sans engagement
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
