"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, CheckCircle, Send } from "lucide-react";
import { sendForm } from "@/lib/sendForm";

const inside = [
  "Les outils et l'installation de Claude Code",
  "Les 2 prompts à copier-coller",
  "Comment corriger le premier jet",
  "Les raccourcis pour lancer l'animation",
];

const files = [
  { label: "Télécharger le guide (FR)", href: "/guides/guide-motion-design-claude-code-fr.pdf" },
  { label: "Download the guide (EN)", href: "/guides/guide-motion-design-claude-code-en.pdf" },
];

const inputClass =
  "w-full rounded-xl border-2 border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-primary focus:bg-white/10";

export default function GuideForm() {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // le guide reste accessible même si l'envoi échoue
    await sendForm(e.currentTarget, "guide");
    setLoading(false);
    setUnlocked(true);
  }

  return (
    <section className="bg-navy px-6 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 inline-block rounded-full border border-blue-light/40 bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-light">
            Guide gratuit · FR / EN
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Le motion design avec <span className="text-gradient">Claude Code</span>
          </h1>
          <p className="mt-5 max-w-lg leading-relaxed text-white/70">
            La méthode derrière ma vidéo «&nbsp;Claude&apos;s new Motion design&nbsp;», en 5 étapes.
          </p>
          <ul className="mt-6 space-y-2">
            {inside.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle size={18} className="flex-shrink-0 text-blue-light" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            {unlocked ? (
              <div className="rounded-2xl border border-blue-light/30 bg-white/5 p-6">
                <p className="font-display text-xl font-bold">C&apos;est prêt&nbsp;!</p>
                <p className="mt-1 text-sm text-white/60">Bonne lecture, et montrez-moi ce que vous en faites.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {files.map((f) => (
                    <a
                      key={f.href}
                      href={f.href}
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                    >
                      <Download size={16} />
                      {f.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="Guide motion design — nouvelle demande" />
                <input type="hidden" name="source" value="Page guide motion design (TikTok)" />
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="prenom" type="text" placeholder="Prénom" className={inputClass} aria-label="Prénom" />
                  <input name="email" type="email" required placeholder="E-mail" className={inputClass} aria-label="E-mail" />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:opacity-60"
                >
                  <Send size={16} />
                  {loading ? "Un instant…" : "Recevoir le guide"}
                </button>
                <p className="text-xs text-white/40">
                  Votre adresse sert uniquement à vous envoyer le guide et mes prochaines démos. Jamais revendue.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/30 blur-3xl" aria-hidden />
          <Image
            src="/guides/visuel-guide.jpg"
            alt="Blu, le robot de Biancola Studio, entouré d'éléments de motion design"
            width={960}
            height={1200}
            className="relative rounded-2xl shadow-2xl ring-1 ring-white/10"
            priority
          />
        </div>
      </div>
    </section>
  );
}
