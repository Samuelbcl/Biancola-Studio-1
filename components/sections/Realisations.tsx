"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

// Bezel dimensions (px)
const BZ_SIDE = 11;
const BZ_TOP = 18;
const BZ_BOTTOM = 9;
// Peek space each side (how much of next/prev image shows beside the laptop)
const PEEK = 52;

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
  const [current, setCurrent] = useState(0);
  const [screenW, setScreenW] = useState(0);
  const screenRef = useRef<HTMLDivElement>(null);

  // Measure the inner screen width
  useEffect(() => {
    if (!screenRef.current) return;
    const ro = new ResizeObserver(() => {
      if (screenRef.current) setScreenW(screenRef.current.offsetWidth);
    });
    ro.observe(screenRef.current);
    setScreenW(screenRef.current.offsetWidth);
    return () => ro.disconnect();
  }, []);

  // Auto-play
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % images.length), 3200);
    return () => clearInterval(t);
  }, [images.length]);

  const screenH = screenW > 0 ? Math.round(screenW * (10 / 16)) : 0;

  return (
    <div>
      {/* Outer wrapper — padding = peek space */}
      <div style={{ position: "relative", padding: `0 ${PEEK}px` }}>
        {/* Inner wrapper — stacking context for z-index */}
        <div style={{ position: "relative" }}>

          {/* ── Camera dot (z-index 3, above bezel) ── */}
          <div
            style={{
              position: "absolute",
              top: 6,
              left: "50%",
              transform: "translateX(-50%)",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "#3d3d3f",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />

          {/* ── MacBook bezel (z-index 2) ──
               Border = dark aluminium frame.
               Background = transparent so images show through the screen area. */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              border: `${BZ_SIDE}px solid #1c1c1e`,
              borderTopWidth: BZ_TOP,
              borderBottomWidth: BZ_BOTTOM,
              borderRadius: "14px 14px 3px 3px",
              background: "transparent",
              boxShadow:
                "0 0 0 1px #3a3a3c, 0 28px 70px rgba(0,0,0,0.22), 0 8px 20px rgba(0,0,0,0.12)",
              boxSizing: "border-box",
            }}
          >
            {/* Inner screen div — maintains 16:10 ratio, gives us the pixel width */}
            <div
              ref={screenRef}
              style={{ aspectRatio: "16 / 10", width: "100%" }}
            />
          </div>

          {/* ── Image carousel (z-index 1, behind bezel) ──
               Positioned exactly over the screen area.
               overflow: visible → images peek outside the MacBook on both sides. */}
          {screenW > 0 && (
            <div
              style={{
                position: "absolute",
                top: BZ_TOP,
                left: BZ_SIDE,
                width: screenW,
                height: screenH,
                zIndex: 1,
                overflow: "visible",
                backgroundColor: "#000",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  transform: `translateX(-${current * screenW}px)`,
                  transition:
                    "transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  willChange: "transform",
                }}
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      minWidth: screenW,
                      height: "100%",
                      flexShrink: 0,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Hinge ── */}
        <div
          style={{
            height: 8,
            background: "linear-gradient(to bottom, #2c2c2e, #1c1c1e)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
          }}
        />

        {/* ── Foot ── */}
        <div
          style={{
            height: 3,
            backgroundColor: "#1c1c1e",
            borderRadius: "0 0 8px 8px",
            margin: "0 36px",
          }}
        />
      </div>

      {/* Progress dots */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginTop: 20,
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                height: 6,
                width: i === current ? 20 : 6,
                borderRadius: 3,
                backgroundColor:
                  i === current ? "#2563EB" : "rgba(37,99,235,0.2)",
                border: "none",
                padding: 0,
                cursor: "pointer",
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <MacBookCarousel images={project.images} />
        </motion.div>

        {/* Project info */}
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
