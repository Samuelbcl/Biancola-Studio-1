"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const projectTypes = [
  "Site Vitrine",
  "E-commerce",
  "Application Web",
  "SaaS",
  "Autre",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate send — replace with real API later
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  return (
    <section id="contact" className="bg-white px-6 py-24">
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
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Démarrons votre <span className="text-gradient">projet</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-lg text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Décrivez votre projet et je reviens vers vous sous 48h avec une
            proposition adaptée.
          </motion.p>
        </div>

        {sent ? (
          <motion.div
            className="flex flex-col items-center gap-4 rounded-2xl border-2 border-green-100 bg-green-50 p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle size={48} className="text-green-500" />
            <h3 className="text-xl font-bold text-dark">Message envoyé !</h3>
            <p className="text-sm text-gray-500">
              Je reviens vers vous très rapidement. Merci pour votre confiance.
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
                  className="w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:bg-white"
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
                  className="w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project-type" className="mb-1.5 block text-sm font-medium text-dark">
                Type de projet
              </label>
              <select
                id="project-type"
                name="project-type"
                required
                className="w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:bg-white"
              >
                <option value="">Sélectionnez...</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark">
                Décrivez votre projet
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Parlez-moi de votre projet, vos objectifs, votre budget estimé..."
                className="w-full resize-none rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-3 text-sm text-dark outline-none transition-colors focus:border-primary focus:bg-white"
              />
            </div>

            <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                {!loading && <Send size={16} />}
              </button>
              <p className="text-xs text-gray-400">
                Réponse sous 48h · Sans engagement
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
