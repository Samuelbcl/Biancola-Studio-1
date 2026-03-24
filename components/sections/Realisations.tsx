"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

const projects = [
  {
    title: "Élève-toi",
    category: "App mobile / web",
    description:
      "Application de motivation quotidienne. Citations, objectifs et routines pensés pour booster la progression personnelle — disponible sur mobile et navigateur.",
    images: [],
    color: "#1a1a2e",
    href: "https://eleve-toi.vercel.app",
    isPublic: true,
  },
  {
    title: "RoadCRM",
    category: "App mobile / CRM",
    description:
      "Mini CRM de terrain pour commerciaux. Gestion des prospects, suivi des rendez-vous et pipeline de vente — optimisé mobile pour les équipes en déplacement.",
    images: [],
    color: "#0f2027",
    href: "https://roadcrm.vercel.app",
    isPublic: true,
  },
  {
    title: "RisoSales",
    category: "Outil métier",
    description:
      "Configurateur commercial sur mesure pour une entreprise. Création d'offres, étude comparative et gestion documentaire avec cloud intégré.",
    images: [
      "/projects/risosales-1.png",
      "/projects/risosales-2.png",
      "/projects/risosales-3.png",
      "/projects/risosales-4.png",
      "/projects/risosales-5.png",
    ],
    color: "#1c1c1c",
    href: null,
    isPublic: false,
  },
];

function MacBookMockup({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ padding: "24px 20px 0", backgroundColor: "#f0f0f0" }}>
      {/* Lid */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#1c1c1e",
          borderRadius: "10px 10px 0 0",
          padding: "10px 10px 7px",
          boxShadow:
            "0 0 0 1px #3a3a3c, inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Camera */}
        <div
          style={{
            position: "absolute",
            top: 4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: "#3a3a3c",
          }}
        />
        {/* Screen */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16 / 10",
            overflow: "hidden",
            borderRadius: "3px",
            backgroundColor: "#000",
          }}
        >
          {images.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img}
              src={img}
              alt={`Screenshot ${i + 1}`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: i === current ? 1 : 0,
                transition: "opacity 0.9s ease",
              }}
            />
          ))}
        </div>
      </div>
      {/* Hinge bar */}
      <div
        style={{
          height: 6,
          background: "linear-gradient(to bottom, #2c2c2e, #1c1c1e)",
          boxShadow: "0 3px 10px rgba(0,0,0,0.35)",
        }}
      />
      {/* Foot */}
      <div
        style={{
          height: 3,
          backgroundColor: "#2a2a2c",
          borderRadius: "0 0 6px 6px",
          margin: "0 28px",
        }}
      />
    </div>
  );
}

export default function Realisations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current.scrollLeft;
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = startScrollLeft.current - dx;
  }

  function onMouseUp() {
    setIsDragging(false);
  }

  return (
    <section id="realisations" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
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

        {/* Desktop: 3-column grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto pb-4 md:hidden select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ scrollbarWidth: "none" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {projects.map((project, i) => (
            <div key={project.title} className="min-w-[300px] flex-shrink-0">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const hasImages = project.images.length > 0;

  return (
    <motion.div
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Visual area */}
      {hasImages ? (
        <MacBookMockup images={project.images} />
      ) : (
        <div
          className="flex h-52 items-center justify-center"
          style={{ backgroundColor: project.color }}
        >
          <span
            className="select-none text-6xl font-bold opacity-20"
            style={{ color: "#ffffff" }}
          >
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
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
        <h3 className="mb-2 text-lg font-semibold text-dark">{project.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-500">
          {project.description}
        </p>

        {project.isPublic && project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#2563EB" }}
          >
            Voir le projet
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="text-sm text-gray-400">Usage interne · Non public</span>
        )}
      </div>
    </motion.div>
  );
}
