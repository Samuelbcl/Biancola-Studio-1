"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const projects = [
  {
    title: "RisoSales",
    category: "Outil métier",
    description:
      "Configurateur commercial sur mesure pour une entreprise. Création d'offres, étude comparative et gestion documentaire avec cloud intégré.",
    images: [
      "/projects/risosales_1.png",
      "/projects/risosales_2.png",
    ],
    href: null,
    isPublic: false,
  },
];

function MacBookCarousel({ images }: { images: string[] }) {
  const ext = useMemo(() => [...images, images[0]], [images]);
  const [idx, setIdx]           = useState(0);
  const [animated, setAnimated] = useState(true);

  // Auto-play — always forward
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => { setAnimated(true); setIdx((c) => c + 1); }, 3500);
    return () => clearInterval(t);
  }, [images.length]);

  // Jump back to 0 after reaching the clone
  useEffect(() => {
    if (idx !== ext.length - 1) return;
    const t = setTimeout(() => { setAnimated(false); setIdx(0); }, 920);
    return () => clearTimeout(t);
  }, [idx, ext.length]);

  // Re-enable animation after the instant jump
  useEffect(() => {
    if (animated || idx !== 0) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
    return () => cancelAnimationFrame(id);
  }, [animated, idx]);

  const activeDot = idx % images.length;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>

      {/* Wrapper — PNG determines the height */}
      <div style={{ position: "relative" }}>

        {/* Screen area — sits behind the PNG, aligned to the transparent screen window */}
        <div style={{
          position: "absolute",
          top: "9.7%",
          left: "9.9%",
          right: "10.0%",
          bottom: "10.3%",
          zIndex: 1,
          overflow: "hidden",
          backgroundColor: "#000",
          borderRadius: "12px 12px 0 0",
        }}>
          {/* Slide track */}
          <div style={{
            display: "flex",
            height: "100%",
            width: `${ext.length * 100}%`,
            transform: `translateX(-${(idx * 100) / ext.length}%)`,
            transition: animated
              ? "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
            willChange: "transform",
          }}>
            {ext.map((img, i) => (
              <div key={i} style={{ width: `${100 / ext.length}%`, height: "100%", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* MacBook PNG frame — on top, transparent screen shows images behind */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/macbook-frame.png.png"
          alt=""
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            position: "relative",
            zIndex: 2,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </div>

      {/* Progress dots */}
      {images.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 16 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAnimated(true); setIdx(i); }}
              style={{
                height: 5,
                width: i === activeDot ? 22 : 5,
                borderRadius: 3,
                backgroundColor: i === activeDot ? "#2563EB" : "rgba(37,99,235,0.18)",
                border: "none", padding: 0, cursor: "pointer",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Realisations() {
  const project = projects[0];

  return (
    <section
      id="realisations"
      style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}
      className="overflow-hidden py-24 px-6"
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Réalisations
          </motion.p>
          <motion.h2
            className="text-3xl font-bold text-dark md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Projets <span style={{ color: "#2563EB" }}>réalisés</span>
          </motion.h2>
        </div>

        {/* MacBook showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <MacBookCarousel images={project.images} />
        </motion.div>

        {/* Project info */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{ color: "#2563EB", backgroundColor: "rgba(37,99,235,0.08)" }}
            >
              {project.category}
            </span>
            {!project.isPublic && (
              <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                <Lock size={10} />
                Projet interne
              </span>
            )}
          </div>
          <h3 className="mb-2 text-2xl font-bold text-dark">{project.title}</h3>
          <p className="mb-5 max-w-xl text-sm leading-relaxed text-gray-500">
            {project.description}
          </p>
          <span className="text-sm text-gray-400">Usage interne · Non public</span>
        </motion.div>

      </div>
    </section>
  );
}
