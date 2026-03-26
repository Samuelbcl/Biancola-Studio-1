"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

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
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0.0, 0.1], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0.0, 0.1], [30, 0]);

  // MacBook block — apparaît tôt, reste visible longtemps
  const macX = useTransform(scrollYProgress, [0.05, 0.25], isMobile ? [0, 0] : [-200, 0]);
  const macRotateY = useTransform(scrollYProgress, [0.05, 0.25], isMobile ? [0, 0] : [25, 0]);
  const macOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const macTextX = useTransform(scrollYProgress, [0.1, 0.3], isMobile ? [0, 0] : [100, 0]);
  const macTextOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // iPhone block
  const phoneX = useTransform(scrollYProgress, [0.35, 0.55], isMobile ? [0, 0] : [200, 0]);
  const phoneRotateY = useTransform(scrollYProgress, [0.35, 0.55], isMobile ? [0, 0] : [-25, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const phoneTextX = useTransform(scrollYProgress, [0.4, 0.6], isMobile ? [0, 0] : [-100, 0]);
  const phoneTextOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section
      ref={simple ? undefined : sectionRef}
      id="realisations"
      style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}
      className="overflow-hidden py-32 px-6"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          className="mb-16"
          {...(simple
            ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
            : { style: { opacity: headerOpacity, y: headerY, willChange: "transform, opacity" } }
          )}
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
        <div
          className="mb-24 flex flex-col gap-10 md:flex-row md:items-center md:gap-14"
          style={simple ? {} : { perspective: 1000 }}
        >
          <motion.div
            className="w-full md:w-3/5"
            {...(simple
              ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }
              : { style: { x: macX, rotateY: macRotateY, opacity: macOpacity, willChange: "transform, opacity" } }
            )}
          >
            <MacBookCarousel images={macbookProjects[0].images} />
          </motion.div>
          <motion.div
            className="w-full md:w-2/5"
            {...(simple
              ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.2 } }
              : { style: { x: macTextX, opacity: macTextOpacity, willChange: "transform, opacity" } }
            )}
          >
            <ProjectInfo project={macbookProjects[0]} />
          </motion.div>
        </div>

        {/* RoadCRM — description gauche, iPhone droite */}
        <div
          className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14"
          style={simple ? {} : { perspective: 1000 }}
        >
          <motion.div
            className="w-full md:w-2/5 md:order-1"
            {...(simple
              ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.2 } }
              : { style: { x: phoneTextX, opacity: phoneTextOpacity, willChange: "transform, opacity" } }
            )}
          >
            <ProjectInfo project={phoneProjects[0]} />
          </motion.div>
          <motion.div
            className="w-full md:w-3/5 md:order-2"
            {...(simple
              ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } }
              : { style: { x: phoneX, rotateY: phoneRotateY, opacity: phoneOpacity, willChange: "transform, opacity" } }
            )}
          >
            <PhoneCarousel images={phoneProjects[0].images} />
          </motion.div>
        </div>

        {/* CTA */}
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
