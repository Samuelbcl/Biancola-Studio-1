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
      "/projects/risosales-1.png",
      "/projects/risosales-2.png",
    ],
    href: null,
    isPublic: false,
  },
];

function MacBookCarousel({ images }: { images: string[] }) {
  // Clone first image at end → seamless infinite left-to-right loop
  const ext = useMemo(() => [...images, images[0]], [images]);
  const [idx, setIdx]           = useState(0);
  const [animated, setAnimated] = useState(true);

  // Auto-play
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => { setAnimated(true); setIdx((c) => c + 1); }, 3200);
    return () => clearInterval(t);
  }, [images.length]);

  // When we reach the clone → jump back to 0 without animation
  useEffect(() => {
    if (idx !== ext.length - 1) return;
    const t = setTimeout(() => { setAnimated(false); setIdx(0); }, 880);
    return () => clearTimeout(t);
  }, [idx, ext.length]);

  // Re-enable animation on next frame after the instant jump
  useEffect(() => {
    if (animated || idx !== 0) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
    return () => cancelAnimationFrame(id);
  }, [animated, idx]);

  const activeDot = idx % images.length;

  return (
    <div style={{ maxWidth: 860, margin: "0 auto" }}>

      {/* ── MacBook lid ── */}
      <div style={{
        backgroundColor: "#1c1c1e",
        borderRadius: "14px 14px 4px 4px",
        padding: "14px 12px 10px",
        boxShadow: "0 0 0 1px #3a3a3c, 0 30px 80px rgba(0,0,0,0.25), 0 8px 20px rgba(0,0,0,0.15)",
        position: "relative",
      }}>
        {/* Camera */}
        <div style={{
          position: "absolute", top: 5, left: "50%",
          transform: "translateX(-50%)",
          width: 6, height: 6, borderRadius: "50%",
          backgroundColor: "#3d3d3f",
        }} />

        {/* Screen — images live here, overflow:hidden guarantees they fill it */}
        <div style={{
          aspectRatio: "16 / 10",
          overflow: "hidden",
          borderRadius: "4px",
          backgroundColor: "#000",
          position: "relative",
        }}>
          {/* Slide track — percentage-based, no pixel measurement needed */}
          <div style={{
            display: "flex",
            height: "100%",
            width: `${ext.length * 100}%`,
            transform: `translateX(-${(idx * 100) / ext.length}%)`,
            transition: animated
              ? "transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
            willChange: "transform",
          }}>
            {ext.map((img, i) => (
              <div key={i} style={{ width: `${100 / ext.length}%`, height: "100%", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hinge ── */}
      <div style={{
        height: 9,
        background: "linear-gradient(to bottom, #2c2c2e, #1a1a1a)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
      }} />

      {/* ── Foot ── */}
      <div style={{
        height: 4,
        backgroundColor: "#1c1c1e",
        borderRadius: "0 0 10px 10px",
        margin: "0 40px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
      }} />

      {/* Progress dots */}
      {images.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAnimated(true); setIdx(i); }}
              style={{
                height: 6, width: i === activeDot ? 20 : 6,
                borderRadius: 3,
                backgroundColor: i === activeDot ? "#2563EB" : "rgba(37,99,235,0.2)",
                border: "none", padding: 0, cursor: "pointer",
                transition: "all 0.3s ease",
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
    <section id="realisations" className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <MacBookCarousel images={project.images} />
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
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
