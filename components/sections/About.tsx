"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Code, Handshake } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const pillars = [
  {
    icon: Compass,
    number: "01",
    title: "Compréhension métier",
    subtitle: "Avant le code, le terrain",
    description:
      "Je commence toujours par comprendre comment vous travaillez vraiment : vos outils, vos habitudes, vos contraintes. C'est là que se trouvent les vrais gains — pas dans une liste de fonctionnalités.",
  },
  {
    icon: Code,
    number: "02",
    title: "Technique",
    subtitle: "Des outils modernes, sans sur-ingénierie",
    description:
      "React, Next.js, TypeScript, intégrations et IA quand elle apporte quelque chose. Je ne reconstruis pas ce qu'un logiciel existant fait déjà bien : je connecte, je complète, je simplifie.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Proximité",
    subtitle: "Un interlocuteur unique",
    description:
      "Basé à Liège, disponible en personne dans toute la Wallonie. Une communication directe, des explications sans jargon et une transparence totale du début à la fin.",
  },
];

function PillarBlock({
  pillar,
  index,
  isMobile,
  simple = false,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  isMobile: boolean;
  simple?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const isReversed = index % 2 !== 0;
  const Icon = pillar.icon;

  const blockX = useTransform(
    scrollYProgress,
    [0.0, 0.5],
    isMobile ? [0, 0] : [isReversed ? 120 : -120, 0]
  );
  const blockOpacity = useTransform(scrollYProgress, [0.0, 0.4], [0, 1]);
  const iconRotateY = useTransform(
    scrollYProgress,
    [0.1, 0.6],
    isMobile ? [0, 0] : [isReversed ? -180 : 180, 0]
  );

  return (
    <motion.div
      ref={simple ? undefined : ref}
      className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${isReversed ? "md:flex-row-reverse" : ""}`}
      {...(simple
        ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }
        : { style: { x: blockX, opacity: blockOpacity, perspective: 800, willChange: "transform, opacity" } }
      )}
    >
      <div className="flex w-full items-center justify-center md:w-2/5">
        <motion.div
          className="flex h-32 w-32 items-center justify-center rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(96,165,250,0.12) 100%)",
            ...(simple
              ? {}
              : { rotateY: iconRotateY, transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform" }),
          }}
        >
          <Icon size={48} className="text-primary" />
        </motion.div>
      </div>

      <div className="w-full md:w-3/5">
        <span className="font-display text-sm font-bold tracking-widest text-primary">
          {pillar.number}
        </span>
        <h3 className="font-display mt-2 text-2xl font-bold text-dark md:text-3xl">
          {pillar.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-gray-400">
          {pillar.subtitle}
        </p>
        <p className="mt-4 leading-relaxed text-gray-500">
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function About({ simple = false }: { simple?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0.05, 0.2], [30, 0]);
  const Heading = simple ? "h1" : "h2";

  return (
    <section
      ref={simple ? undefined : sectionRef}
      id="about"
      className="px-6 py-32"
      style={{
        background:
          "linear-gradient(180deg, #f7f8fc 0%, #ffffff 40%, #f7f8fc 100%)",
      }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-20 text-center"
          {...(simple
            ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
            : { style: { opacity: headerOpacity, y: headerY, willChange: "transform, opacity" } }
          )}
        >
          <p
            className="mb-2 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            À propos
          </p>
          <Heading className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Qui est derrière{" "}
            <span className="text-gradient">Biancola Studio</span>&nbsp;?
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">
            Je suis Samuel, fondateur de Biancola Studio. J&apos;analyse la façon
            dont les PME travaillent, puis je conçois et développe les solutions
            digitales adaptées à leurs processus : outils métiers, automatisations
            et, quand c&apos;est utile, sites et plateformes web. Basé à Liège, je
            travaille avec des entreprises de toute la Wallonie et de Belgique.
          </p>
        </motion.div>

        <div className="space-y-24">
          {pillars.map((pillar, i) => (
            <PillarBlock
              key={pillar.number}
              pillar={pillar}
              index={i}
              simple={simple}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
