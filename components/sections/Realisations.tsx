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
  const ext = useMemo(() => [...images, images[0]], [images]);
  const [idx, setIdx]             = useState(0);
  const [animated, setAnimated]   = useState(true);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => { setAnimated(true); setIdx((c) => c + 1); }, 3500);
    return () => clearInterval(t);
  }, [images.length]);

  useEffect(() => {
    if (idx !== ext.length - 1) return;
    const t = setTimeout(() => { setAnimated(false); setIdx(0); }, 900);
    return () => clearTimeout(t);
  }, [idx, ext.length]);

  useEffect(() => {
    if (animated || idx !== 0) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
    return () => cancelAnimationFrame(id);
  }, [animated, idx]);

  const activeDot = idx % images.length;

  return (
    <div style={{ maxWidth: 880, margin: "0 auto" }}>

      {/* ── MacBook lid ── */}
      <div style={{
        backgroundColor: "#1c1c1e",
        borderRadius: "16px 16px 3px 3px",
        padding: "16px 14px 0",
        position: "relative",
        boxShadow: [
          "0 0 0 1px #3a3a3c",
          "0 2px 4px rgba(0,0,0,0.4)",
          "0 12px 30px rgba(0,0,0,0.25)",
          "0 40px 80px rgba(0,0,0,0.2)",
          "0 80px 120px rgba(0,0,0,0.1)",
        ].join(", "),
      }}>
        {/* Aluminium top edge shine */}
        <div style={{
          position: "absolute",
          top: 0, left: "15%", right: "15%", height: 1,
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)",
          borderRadius: "50%",
        }} />

        {/* Camera */}
        <div style={{
          position: "absolute",
          top: 6, left: "50%",
          transform: "translateX(-50%)",
          width: 7, height: 7,
          borderRadius: "50%",
          backgroundColor: "#0a0a0a",
          boxShadow: "0 0 0 1px #2a2a2c, inset 0 0 3px rgba(0,0,0,0.8)",
        }}>
          {/* Camera dot */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 3, height: 3,
            borderRadius: "50%",
            backgroundColor: "#1a2a1a",
          }} />
        </div>

        {/* Screen */}
        <div style={{
          aspectRatio: "16 / 10",
          overflow: "hidden",
          borderRadius: "4px 4px 0 0",
          backgroundColor: "#000",
          position: "relative",
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
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>

          {/* Screen glass reflection */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
        </div>
      </div>

      {/* ── Hinge ── */}
      <div style={{
        height: 10,
        background: "linear-gradient(to bottom, #2c2c2e 0%, #1a1a1c 60%, #141416 100%)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)",
      }} />

      {/* ── Base ── */}
      <div style={{
        height: 5,
        background: "linear-gradient(to bottom, #242426, #1c1c1e)",
        borderRadius: "0 0 12px 12px",
        margin: "0 50px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
      }} />

      {/* ── Progress dots ── */}
      {images.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24 }}>
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
      style={{
        background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)",
      }}
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

        {/* MacBook */}
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
          className="mt-14"
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
