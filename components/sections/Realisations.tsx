"use client";

import { useState, useEffect, useMemo, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lock, ArrowUpRight } from "lucide-react";
import { getCas, type Cas } from "@/content/cas";

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
              aria-label={`Capture ${i + 1}`}
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
              aria-label={`Capture ${i + 1}`}
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

type Props = {
  /** Mode page : pas de CTA « voir tous » par défaut */
  simple?: boolean;
  /** Home : une ligne avant / une ligne après au lieu de problème / solution / résultat */
  compact?: boolean;
  /** Filtre sur les identifiants de content/cas.ts (ordre conservé) */
  ids?: string[];
  id?: string;
  label?: string;
  title?: ReactNode;
  intro?: string;
  headingLevel?: "h1" | "h2";
  showCta?: boolean;
};

export default function Realisations({
  simple = false,
  compact = false,
  ids,
  id = "realisations",
  label = "Cas concrets",
  title,
  intro,
  headingLevel = "h2",
  showCta,
}: Props) {
  const projects = getCas(ids);
  const Heading = headingLevel;
  const withCta = showCta ?? !simple;

  return (
    <section
      id={id}
      style={{ background: "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)" }}
      className="overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            {label}
          </p>
          <Heading className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            {title ?? (
              <>
                Des problèmes réels, <span className="text-gradient">des outils concrets</span>
              </>
            )}
          </Heading>
          {intro && (
            <p className="mt-5 max-w-2xl leading-relaxed text-gray-500">{intro}</p>
          )}
        </motion.div>

        <div className={compact ? "space-y-20" : "space-y-24"}>
          {projects.map((project, i) => {
            const mediaLeft = i % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Mobile-only header above the carousel */}
                <div className="mb-6 md:hidden">
                  <ProjectHeader project={project} />
                </div>
                <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
                  <div className={`w-full md:w-3/5 ${mediaLeft ? "" : "md:order-2"}`}>
                    {project.device === "phone" ? (
                      <PhoneCarousel images={project.images} />
                    ) : (
                      <MacBookCarousel images={project.images} />
                    )}
                  </div>
                  <motion.div
                    className={`w-full md:w-2/5 ${mediaLeft ? "" : "md:order-1"}`}
                    initial={{ opacity: 0, x: mediaLeft ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                  >
                    <ProjectInfo project={project} compact={compact} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {withCta && (
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
              Voir tous les cas concrets
            </a>
          </motion.div>
        )}

      </div>
    </section>
  );
}

function ProjectHeader({ project }: { project: Cas }) {
  return (
    <div className="flex flex-col">
      {/* Title — mobile: above (JSX order). Desktop: below badges via order-2 */}
      <h3 className="mb-3 text-2xl font-bold text-dark md:order-2">{project.title}</h3>
      {/* Badges — mobile: below title (JSX order). Desktop: above title via order-1 */}
      <div className="mb-3 flex flex-wrap items-center gap-2 md:order-1">
        <span
          className="cursor-default select-none rounded-full px-3 py-1 text-xs font-medium"
          style={{ color: "#2563EB", backgroundColor: "rgba(37,99,235,0.08)" }}
        >
          {project.category}
        </span>
        {!project.isPublic && (
          <span className="cursor-default select-none flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
            <Lock size={10} />
            Projet interne
          </span>
        )}
      </div>
    </div>
  );
}

function CompactBody({ project }: { project: Cas }) {
  return (
    <>
      {project.name && (
        <p className="mb-5 text-xs font-semibold text-gray-400">{project.name}</p>
      )}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <span className="cursor-default select-none mt-0.5 w-16 flex-shrink-0 rounded-full bg-gray-100 py-1 text-center text-[11px] font-semibold uppercase tracking-wider text-gray-500">
            Avant
          </span>
          <p className="text-sm leading-relaxed text-gray-500">{project.avant}</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="cursor-default select-none mt-0.5 w-16 flex-shrink-0 rounded-full bg-primary py-1 text-center text-[11px] font-semibold uppercase tracking-wider text-white">
            Après
          </span>
          <p className="text-sm font-medium leading-relaxed text-dark">{project.apres}</p>
        </div>
      </div>
    </>
  );
}

function ProjectBody({ project }: { project: Cas }) {
  const psr = project.problem
    ? [
        ["Problème", project.problem],
        ["Solution", project.solution],
        ["Résultat", project.result],
      ]
    : null;

  return (
    <>
      {project.client && (
        <p className="mb-4 text-xs font-semibold text-gray-400">{project.client}</p>
      )}

      {psr ? (
        <dl className="mb-5 space-y-3">
          {psr.map(([k, v]) => (
            <div key={k} className="rounded-xl border border-gray-100 bg-white/80 p-4">
              <dt className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {k}
              </dt>
              <dd className="text-sm leading-relaxed text-gray-600">{v}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mb-5 text-sm leading-relaxed text-gray-500">{project.description}</p>
      )}

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

function ProjectInfo({ project, compact = false }: { project: Cas; compact?: boolean }) {
  return (
    <>
      {/* Header (badge + title) hidden on mobile — shown above carousel instead */}
      <div className="hidden md:block">
        <ProjectHeader project={project} />
      </div>
      {compact && project.avant ? (
        <CompactBody project={project} />
      ) : (
        <ProjectBody project={project} />
      )}
    </>
  );
}
