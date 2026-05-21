"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lock, ArrowUpRight } from "lucide-react";

const macbookProjects = [
  {
    title: "Automatisation des offres commerciales",
    category: "Outil métier",
    description:
      "RisoSales — Plateforme développée pour RISO, pionnier de l'impression jet d'encre à froid écoresponsable. L'outil automatise la création d'études comparatives et d'offres commerciales, remplaçant des heures de travail manuel sur Excel par un processus rapide et fiable.",
    images: [
      "/projects/risosales_1.png",
      "/projects/risosales_2.png",
    ],
    href: null,
    isPublic: false,
  },
  {
    title: "Vitrine digitale pour fleuriste artisanale",
    category: "Projet démonstratif",
    description:
      "Bloom Club — Maquette fonctionnelle d'un site vitrine pour une fleuriste artisanale. Présentation des créations, catalogue produits et gestion événementielle. Livré avec un back-office no-code permettant de modifier contenus, photos, prix, SEO...",
    images: [
      "/projects/bloomclub_2.png",
      "/projects/bloomclub_3.png",
      "/projects/bloomclub_1.png",
      "/projects/bloomclub_bo_1.png",
      "/projects/bloomclub_bo_2.png",
      "/projects/bloomclub_bo_3.png",
    ],
    href: null as string | null,
    isPublic: false,
  },
  {
    title: "Site vitrine & prise de rendez-vous pour naturopathe",
    category: "Site vitrine",
    description:
      "Flonaturopathie — Site vitrine moderne pour une praticienne en naturopathie. Présentation des services et de l'approche thérapeutique, avec un module de prise de rendez-vous en ligne intégré. Une boutique d'ebooks est en préparation pour diversifier les canaux de vente.",
    images: [
      "/projects/flonaturopathie_1.png",
      "/projects/flonaturopathie_2.png",
      "/projects/flonaturopathie_3.png",
      "/projects/flonaturopathie_4.png",
    ],
    href: "https://www.flonaturopathie.com/" as string | null,
    isPublic: true,
  },
];

const phoneProjects = [
  {
    title: "Optimisation du suivi commercial terrain",
    category: "Application mobile",
    description:
      "RoadCRM — Application mobile développée pour structurer le quotidien des commerciaux terrain. L'outil centralise la gestion des rendez-vous, le suivi des comptes et les activités dans une interface pensée pour la mobilité.",
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
    <div style={{ maxWidth: 320, margin: "0 auto" }}>
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

export default function Realisations({ simple = false }: { simple?: boolean }) {
  return (
    <section
      id="realisations"
      style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}
      className="overflow-hidden py-32 px-6"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            Réalisations
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Projets <span className="text-gradient">réalisés</span>
          </h2>
        </motion.div>

        {/* RisoSales — MacBook gauche, description droite */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Mobile-only header above the carousel */}
          <div className="mb-6 md:hidden">
            <ProjectHeader project={macbookProjects[0]} />
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
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
          </div>
        </motion.div>

        {/* RoadCRM — description gauche, iPhone droite */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Mobile-only header above the carousel */}
          <div className="mb-6 md:hidden">
            <ProjectHeader project={phoneProjects[0]} />
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            <motion.div
              className="order-2 w-full md:order-1 md:w-2/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <ProjectInfo project={phoneProjects[0]} />
            </motion.div>
            <div className="order-1 w-full md:order-2 md:w-3/5">
              <PhoneCarousel images={phoneProjects[0].images} />
            </div>
          </div>
        </motion.div>

        {/* Bloom Club — MacBook gauche, description droite (comme RisoSales) */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Mobile-only header above the carousel */}
          <div className="mb-6 md:hidden">
            <ProjectHeader project={macbookProjects[1]} />
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            <div className="w-full md:w-3/5">
              <MacBookCarousel images={macbookProjects[1].images} />
            </div>
            <motion.div
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <ProjectInfo project={macbookProjects[1]} />
            </motion.div>
          </div>
        </motion.div>

        {/* Flonaturopathie — visible uniquement sur /realisations (page dédiée) */}
        {simple && (
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Mobile-only header above the carousel */}
            <div className="mb-6 md:hidden">
              <ProjectHeader project={macbookProjects[2]} />
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
              <motion.div
                className="order-2 w-full md:order-1 md:w-2/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <ProjectInfo project={macbookProjects[2]} />
              </motion.div>
              <div className="order-1 w-full md:order-2 md:w-3/5">
                <MacBookCarousel images={macbookProjects[2].images} />
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA — only on homepage */}
        {!simple && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-all glow-blue-hover hover:scale-105"
            >
              Voir tous mes projets
            </a>
          </motion.div>
        )}

      </div>
    </section>
  );
}

function ProjectHeader({ project }: { project: typeof macbookProjects[0] }) {
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
    </>
  );
}

function ProjectBody({ project }: { project: typeof macbookProjects[0] }) {
  return (
    <>
      <p className="mb-5 text-sm leading-relaxed text-gray-500">{project.description}</p>
      {project.isPublic && project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:underline"
          style={{ color: "#2563EB" }}
        >
          Voir le site
          <ArrowUpRight size={14} />
        </a>
      ) : (
        <span className="text-sm text-gray-400">Usage interne · Non public</span>
      )}
    </>
  );
}

function ProjectInfo({ project }: { project: typeof macbookProjects[0] }) {
  return (
    <>
      {/* Header (badge + title) hidden on mobile — shown above carousel instead */}
      <div className="hidden md:block">
        <ProjectHeader project={project} />
      </div>
      <ProjectBody project={project} />
    </>
  );
}
