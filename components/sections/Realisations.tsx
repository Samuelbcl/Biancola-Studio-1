"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const macbookProjects = [
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

const phoneProjects = [
  {
    title: "RoadCRM",
    category: "Application mobile",
    description:
      "CRM mobile pensé pour les commerciaux terrain. Gestion des contacts, suivi des opportunités et tableau de bord en temps réel.",
    images: [
      "/projects/roadcrm_1.png",
      "/projects/roadcrm_2.png",
    ],
    href: null,
    isPublic: false,
  },
];

function useCarousel(images: string[]) {
  const ext = useMemo(() => [...images, images[0]], [images]);
  const [idx, setIdx]           = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => { setAnimated(true); setIdx((c) => c + 1); }, 3500);
    return () => clearInterval(t);
  }, [images.length]);

  useEffect(() => {
    if (idx !== ext.length - 1) return;
    const t = setTimeout(() => { setAnimated(false); setIdx(0); }, 920);
    return () => clearTimeout(t);
  }, [idx, ext.length]);

  useEffect(() => {
    if (animated || idx !== 0) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
    return () => cancelAnimationFrame(id);
  }, [animated, idx]);

  return { ext, idx, setIdx, animated, setAnimated, activeDot: idx % images.length };
}

function MacBookCarousel({ images }: { images: string[] }) {
  const { ext, idx, setIdx, animated, setAnimated, activeDot } = useCarousel(images);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute",
          top: "9.7%", left: "9.9%", right: "10.0%", bottom: "10.3%",
          zIndex: 1, overflow: "hidden", backgroundColor: "#000",
          borderRadius: "clamp(8px, 2vw, 16px) clamp(8px, 2vw, 16px) 0 0",
        }}>
          <div style={{
            display: "flex", height: "100%",
            width: `${ext.length * 100}%`,
            transform: `translateX(-${(idx * 100) / ext.length}%)`,
            transition: animated ? "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
            willChange: "transform",
          }}>
            {ext.map((img, i) => (
              <div key={i} style={{ width: `${100 / ext.length}%`, height: "100%", flexShrink: 0, position: "relative" }}>
                <Image src={img} alt={`Screenshot ${i + 1}`} fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
            ))}
          </div>
        </div>
        <Image src="/projects/macbook-frame.png.png" alt="" width={3220} height={2100}
          sizes="(max-width: 768px) 100vw, 60vw" priority
          style={{ width: "100%", height: "auto", display: "block", position: "relative", zIndex: 2, pointerEvents: "none", userSelect: "none" }} />
      </div>
      {images.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
          {images.map((_, i) => (
            <button key={i} onClick={() => { setAnimated(true); setIdx(i); }}
              style={{
                height: 5, width: i === activeDot ? 22 : 5, borderRadius: 3,
                backgroundColor: i === activeDot ? "#2563EB" : "rgba(37,99,235,0.18)",
                border: "none", padding: 0, cursor: "pointer", transition: "all 0.35s ease",
              }} />
          ))}
        </div>
      )}
    </div>
  );
}

function PhoneCarousel({ images }: { images: string[] }) {
  const { ext, idx, setIdx, animated, setAnimated, activeDot } = useCarousel(images);

  return (
    <div style={{ maxWidth: 420, margin: "0 auto" }}>
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute",
          top: "6.0%", left: "12.68%", right: "12.74%", bottom: "6.82%",
          zIndex: 1, overflow: "hidden", backgroundColor: "#000",
          borderRadius: "22px",
        }}>
          <div style={{
            display: "flex", height: "100%",
            width: `${ext.length * 100}%`,
            transform: `translateX(-${(idx * 100) / ext.length}%)`,
            transition: animated ? "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
            willChange: "transform",
          }}>
            {ext.map((img, i) => (
              <div key={i} style={{ width: `${100 / ext.length}%`, height: "100%", flexShrink: 0, position: "relative" }}>
                <Image src={img} alt={`Screenshot ${i + 1}`} fill
                  sizes="280px"
                  style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
            ))}
          </div>
        </div>
        <Image src="/projects/iphone-frame.png.png" alt="" width={1570} height={2932}
          sizes="280px" priority
          style={{ width: "100%", height: "auto", display: "block", position: "relative", zIndex: 2, pointerEvents: "none", userSelect: "none" }} />
      </div>
      {images.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
          {images.map((_, i) => (
            <button key={i} onClick={() => { setAnimated(true); setIdx(i); }}
              style={{
                height: 5, width: i === activeDot ? 22 : 5, borderRadius: 3,
                backgroundColor: i === activeDot ? "#2563EB" : "rgba(37,99,235,0.18)",
                border: "none", padding: 0, cursor: "pointer", transition: "all 0.35s ease",
              }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Realisations() {
  return (
    <section
      id="realisations"
      style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}
      className="overflow-hidden py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">

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

        {/* RisoSales — MacBook gauche, description droite */}
        <motion.div
          className="mb-24 flex flex-col gap-10 md:flex-row md:items-center md:gap-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="w-full md:w-3/5">
            <MacBookCarousel images={macbookProjects[0].images} />
          </div>
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <ProjectInfo project={macbookProjects[0]} />
          </motion.div>
        </motion.div>

        {/* RoadCRM — description gauche, iPhone droite */}
        <motion.div
          className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="w-full md:w-2/5 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <ProjectInfo project={phoneProjects[0]} />
          </motion.div>
          <div className="w-full md:w-3/5 md:order-2">
            <PhoneCarousel images={phoneProjects[0].images} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ProjectInfo({ project }: { project: typeof macbookProjects[0] }) {
  return (
    <>
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
      <h3 className="mb-3 text-2xl font-bold text-dark">{project.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-gray-500">{project.description}</p>
      <span className="text-sm text-gray-400">Usage interne · Non public</span>
    </>
  );
}
