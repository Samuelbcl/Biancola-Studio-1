"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Élève-toi",
    category: "App mobile / web",
    description:
      "Application de motivation quotidienne. Citations, objectifs et routines pensés pour booster la progression personnelle — disponible sur mobile et navigateur.",
    // Ajouter les images dans /public/projects/ : eleve-toi-1.png, eleve-toi-2.png...
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
    // Ajouter les images dans /public/projects/ : roadcrm-1.png, roadcrm-2.png...
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
    // 5 images disponibles : risosales-1.png → risosales-5.png
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
  const [current, setCurrent] = useState(0);
  const hasImages = project.images.length > 0;
  const hasMultiple = project.images.length > 1;

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    setCurrent((c) => (c - 1 + project.images.length) % project.images.length);
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    setCurrent((c) => (c + 1) % project.images.length);
  }

  return (
    <motion.div
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Image area */}
      <div
        className="relative flex h-52 items-center justify-center overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        {hasImages ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.images[current]}
              alt={`${project.title} ${current + 1}`}
              className="h-full w-full object-cover transition-opacity duration-300"
            />

            {/* Prev / Next arrows — visibles au hover si plusieurs images */}
            {hasMultiple && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
                >
                  <ChevronRight size={14} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: i === current ? "16px" : "6px",
                        backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.4)",
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <span
            className="select-none text-6xl font-bold opacity-20"
            style={{ color: "#ffffff" }}
          >
            {project.title.charAt(0)}
          </span>
        )}

      </div>

      {/* Content */}
      <div className="p-5">
        {/* Badges */}
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
