"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Download, CheckCircle, Send, BookOpen } from "lucide-react";
import { sendForm } from "@/lib/sendForm";

const inside = [
  "Les outils et l'installation de Claude Code",
  "Les 2 prompts à copier-coller",
  "Comment corriger le premier jet",
  "Les raccourcis pour lancer l'animation",
];

const files = [
  { lang: "fr", download: "Télécharger le guide (FR)", open: "Ouvrir le guide (FR)", read: "en français", href: "/guides/guide-motion-design-claude-code-fr.pdf" },
  { lang: "en", download: "Download the guide (EN)", open: "Open the guide (EN)", read: "in English", href: "/guides/guide-motion-design-claude-code-en.pdf" },
] as const;
const PAGES = 8;

// Sur téléphone, un lien « download » ne fait souvent rien, surtout dans le navigateur intégré de TikTok
// ou d'Instagram. Là, on ouvre simplement le PDF, et le guide reste lisible en images sur la page.
function detectDevice() {
  const ua = navigator.userAgent;
  return {
    mobile: /Android|iPhone|iPad|iPod|Mobile/i.test(ua),
    android: /Android/i.test(ua),
    inApp: /musical_ly|BytedanceWebview|TikTok|trill|Instagram|FBAN|FBAV|Snapchat|LinkedInApp/i.test(ua),
  };
}
const inBrowser = (href: string) =>
  `intent://${window.location.host}${href}#Intent;scheme=https;S.browser_fallback_url=${encodeURIComponent(window.location.origin + href)};end`;

const inputClass =
  "w-full rounded-xl border-2 border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-primary focus:bg-white/10";

export default function GuideForm() {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [device, setDevice] = useState({ mobile: false, android: false, inApp: false });
  const [reader, setReader] = useState<"fr" | "en" | null>(null);
  const readerRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setDevice(detectDevice());
    // le guide reste accessible même si l'envoi échoue
    await sendForm(e.currentTarget, "guide");
    setLoading(false);
    setUnlocked(true);
  }

  function openReader(lang: "fr" | "en") {
    setReader(lang);
    setTimeout(() => readerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
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
              <>
              <div className="rounded-2xl border border-blue-light/30 bg-white/5 p-6">
                <p className="font-display text-xl font-bold">C&apos;est prêt&nbsp;!</p>
                <p className="mt-1 text-sm text-white/60">Bonne lecture, et montrez-moi ce que vous en faites.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {files.map((f) => (
                    <a
                      key={f.href}
                      href={f.href}
                      download={device.mobile ? undefined : true}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                    >
                      <Download size={16} />
                      {device.mobile ? f.open : f.download}
                    </a>
                  ))}
                </div>
                {device.inApp && (
                  <p className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/80">
                    Vous êtes dans l&apos;appli TikTok ou Instagram&nbsp;: si le guide ne s&apos;ouvre pas, touchez ⋯ en
                    haut à droite puis «&nbsp;Ouvrir dans le navigateur&nbsp;», ou lisez-le juste en dessous.
                    {device.android && (
                      <span className="mt-2 block">
                        Ouvrir dans le navigateur&nbsp;:{" "}
                        {files.map((f, i) => (
                          <span key={f.lang}>
                            {i > 0 && " · "}
                            <a href={inBrowser(f.href)} className="font-semibold text-blue-light underline">
                              {f.lang.toUpperCase()}
                            </a>
                          </span>
                        ))}
                      </span>
                    )}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <span className="inline-flex items-center gap-2 text-white/60">
                    <BookOpen size={16} />
                    Ou lisez-le directement ici&nbsp;:
                  </span>
                  {files.map((f) => (
                    <button
                      key={f.lang}
                      type="button"
                      onClick={() => openReader(f.lang)}
                      className="font-semibold text-blue-light underline-offset-4 hover:underline"
                    >
                      {f.read}
                    </button>
                  ))}
                </div>
              </div>
              {reader && (
                <div ref={readerRef} className="mt-8 scroll-mt-24 space-y-3">
                  {Array.from({ length: PAGES }, (_, i) => (
                    <Image
                      key={`${reader}-${i}`}
                      src={`/guides/pages/${reader}-${i + 1}.jpg`}
                      alt={`Guide, page ${i + 1} / ${PAGES}`}
                      width={1000}
                      height={1415}
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="w-full rounded-xl ring-1 ring-white/10"
                    />
                  ))}
                </div>
              )}
              </>
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
