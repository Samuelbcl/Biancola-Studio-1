"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ===== Conversation tree =====
type ChatButton = {
  label: string;
  next?: string;
  href?: string;
  external?: boolean;
};

type ChatNode = {
  message: string;
  buttons: ChatButton[];
};

const TREE: Record<string, ChatNode> = {
  welcome: {
    message:
      "👋 Salut, moi c'est Blu, l'IA de Samuel ! Je peux t'aider à découvrir Biancola Studio. Tu veux savoir quoi ?",
    buttons: [
      { label: "💼 Voir les services", next: "services" },
      { label: "💰 Combien ça coûte", next: "tarifs" },
      { label: "🎨 Voir les réalisations", next: "realisations" },
      { label: "📅 Délais & process", next: "process" },
      { label: "✉️ Contacter Samuel", next: "contact" },
    ],
  },
  services: {
    message:
      "Samuel propose 4 types de projets web :\n\n🌐 Site vitrine — ton activité en ligne\n🛒 E-commerce — boutique en ligne\n💻 Application web sur mesure\n☁️ SaaS — plateforme complète",
    buttons: [
      { label: "Voir la page Services", href: "/services" },
      { label: "↩ Retour", next: "welcome" },
    ],
  },
  tarifs: {
    message:
      "Chaque projet est unique, mais voici les fourchettes habituelles :\n\n🌐 Site vitrine : à partir de 1 500€\n🛒 E-commerce : à partir de 3 000€\n💻 Application web : à partir de 3 000€\n\nUn devis précis est gratuit !",
    buttons: [
      { label: "Voir la page Tarifs", href: "/tarifs" },
      { label: "Demander un devis", href: "/contact" },
      { label: "↩ Retour", next: "welcome" },
    ],
  },
  realisations: {
    message:
      "Samuel a déjà bossé sur plusieurs projets sympas : RisoSales, RoadCRM, Bloom Club, Flonaturopathie... Tu peux les voir en détail sur la page Réalisations.",
    buttons: [
      { label: "Voir tous les projets", href: "/realisations" },
      { label: "↩ Retour", next: "welcome" },
    ],
  },
  process: {
    message:
      "Comptez en moyenne :\n\n🌐 Site vitrine : 2-4 semaines\n🛒 E-commerce : 4-8 semaines\n💻 App web : 6-12 semaines\n\nLe process : échange → devis → maquettes → dev → tests → livraison.",
    buttons: [
      { label: "Voir le processus", href: "/processus" },
      { label: "↩ Retour", next: "welcome" },
    ],
  },
  contact: {
    message:
      "Pour discuter de ton projet directement avec Samuel :\n\n📧 samuel@biancolastudio.com\n📞 +32 498 73 71 62\n\nPremier échange gratuit !",
    buttons: [
      { label: "Envoyer un email", href: "mailto:samuel@biancolastudio.com", external: true },
      { label: "Page contact", href: "/contact" },
      { label: "↩ Retour", next: "welcome" },
    ],
  },
};

type Message = { from: "bot" | "user"; text: string };

// Rotation frames (front -> back) for the 3D-style spin on hover
const ROTATION_FRAMES = [
  "/marketing/blu_rot_0.png",
  "/marketing/blu_rot_1.png",
  "/marketing/blu_rot_2.png",
  "/marketing/blu_rot_3.png",
  "/marketing/blu_rot_4.png",
  "/marketing/blu_rot_5.png",
];
// Oscillating sequence: front -> back -> front
const SPIN_SEQUENCE = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: TREE.welcome.message },
  ]);
  const [buttons, setButtons] = useState<ChatButton[]>(TREE.welcome.buttons);
  const [frame, setFrame] = useState(0);
  const spinTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Cleanup spin timer on unmount
  useEffect(() => {
    return () => {
      if (spinTimer.current) clearInterval(spinTimer.current);
    };
  }, []);

  function startSpin() {
    if (spinTimer.current) clearInterval(spinTimer.current);
    let i = 0;
    spinTimer.current = setInterval(() => {
      setFrame(SPIN_SEQUENCE[i]);
      i++;
      if (i >= SPIN_SEQUENCE.length) {
        if (spinTimer.current) clearInterval(spinTimer.current);
        spinTimer.current = null;
        setFrame(0);
      }
    }, 75);
  }

  function stopSpin() {
    if (spinTimer.current) {
      clearInterval(spinTimer.current);
      spinTimer.current = null;
    }
    setFrame(0);
  }

  function handleButton(btn: ChatButton) {
    if (btn.href) {
      window.location.href = btn.href;
      return;
    }
    if (btn.next) {
      const node = TREE[btn.next];
      setMessages((prev) => [
        ...prev,
        { from: "user", text: btn.label },
        { from: "bot", text: node.message },
      ]);
      setButtons(node.buttons);
    }
  }

  return (
    <>
      {/* ===== Floating Blu button (closed state) ===== */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="blu-button"
            onClick={() => setIsOpen(true)}
            onMouseEnter={startSpin}
            onMouseLeave={stopSpin}
            className="blu-trigger group fixed bottom-5 right-5 z-50 flex h-20 w-20 items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Ouvrir le chat avec Blu"
          >
            <span className="blu-idle relative block h-full w-full">
              {ROTATION_FRAMES.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={i === 0 ? "Blu — l'assistant de Biancola Studio" : ""}
                  width={160}
                  height={160}
                  priority
                  className="absolute inset-0 h-full w-full select-none object-contain drop-shadow-xl"
                  style={{ opacity: frame === i ? 1 : 0 }}
                />
              ))}
            </span>
            <span className="pointer-events-none absolute inset-3 -z-10 rounded-full bg-primary/20 blur-md" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ===== Chat panel (open state) ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="blu-panel"
            className="fixed bottom-5 right-5 z-50 flex w-[340px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            style={{ maxHeight: "min(540px, calc(100vh - 2.5rem))" }}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ background: "linear-gradient(135deg, #0f1729 0%, #1e3a5f 100%)" }}
            >
              <div className="relative h-11 w-11 flex-shrink-0">
                <Image
                  src="/marketing/blu.png"
                  alt="Blu"
                  width={88}
                  height={88}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="font-display text-sm font-bold text-white">Blu</p>
                <p className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  En ligne · IA de Biancola Studio
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Fermer le chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex flex-1 flex-col gap-3 overflow-y-auto bg-gray-50 px-4 py-4"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "rounded-br-sm bg-primary text-white"
                        : "rounded-bl-sm bg-white text-dark shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick reply buttons */}
            <div className="flex flex-wrap gap-2 border-t border-gray-100 bg-white px-4 py-3">
              {buttons.map((btn, i) => (
                <button
                  key={i}
                  onClick={() => handleButton(btn)}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3.5 py-2 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-white"
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
