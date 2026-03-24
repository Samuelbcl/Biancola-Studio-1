"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

const projects = [
  {
    title: "Élève-toi",
    category: "App mobile / web",
    description:
      "Application de motivation quotidienne. Citations, objectifs et routines pensés pour booster la progression personnelle — disponible sur mobile et navigateur.",
    // Remplacer par : "/projects/eleve-toi.png" une fois le screenshot ajouté dans /public/projects/
    image: null,
    color: "#1a1a2e",
    href: "https://eleve-toi.vercel.app",
    isPublic: true,
  },
  {
    title: "RoadCRM",
    category: "App mobile / CRM",
    description:
      "Mini CRM de terrain pour commerciaux. Gestion des prospects, suivi des rendez-vous et pipeline de vente — optimisé mobile pour les équipes en déplacement.",
    // Remplacer par : "/projects/roadcrm.png" une fois le screenshot ajouté dans /public/projects/
    image: null,
    color: "#0f2027",
    href: "https://roadcrm.vercel.app",
    isPublic: true,
  },
  {
    title: "RisoSales",
    category: "Outil métier",
    description:
      "Configurateur commercial sur mesure pour une entreprise. Création d'offres, étude comparative et gestion documentaire avec cloud intégré.",
    // Remplacer par : "/projects/risosales.png" une fois le screenshot ajouté dans /public/projects/
    image: null,
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
        <div className="mb-12 flex items-end justify-between">
          <div>
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
  return (
    <motion.div
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Image / placeholder */}
      <div
        className="relative flex h-52 items-center justify-center overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span
            className="select-none text-6xl font-bold opacity-20"
            style={{ color: "#ffffff" }}
          >
            {project.title.charAt(0)}
          </span>
        )}

        {/* Category badge over image */}
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm"
          style={{
            color: "#2563EB",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          {project.category}
        </span>

        {/* Private badge */}
        {!project.isPublic && (
          <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <Lock size={10} />
            Projet interne
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
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
