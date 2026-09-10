"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { methode } from "@/content/methode";

const steps = methode;

function ProcessStep({
  step,
  index,
  isLeft,
  isMobile,
  simple = false,
}: {
  step: (typeof steps)[number];
  index: number;
  isLeft: boolean;
  isMobile: boolean;
  simple?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.0, 0.5],
    isMobile ? [0, 0] : [isLeft ? -60 : 60, 0]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0.0, 0.5],
    isMobile ? [0, 0] : [isLeft ? -15 : 15, 0]
  );
  const opacity = useTransform(scrollYProgress, [0.0, 0.4], [0, 1]);
  const circleScale = useTransform(scrollYProgress, [0.0, 0.4], [0.5, 1]);

  return (
    <motion.div
      ref={simple ? undefined : ref}
      className="relative mb-16 flex items-start last:mb-0"
      {...(simple
        ? { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 } }
        : { style: { x, rotateY, opacity, perspective: 600, willChange: "transform, opacity" } }
      )}
    >
      <div className={`w-1/2 pr-10 text-right ${isLeft ? "" : "invisible"}`}>
        <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {step.description}
        </p>
      </div>
      <motion.div
        className="absolute left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md"
        {...(simple ? {} : { style: { scale: circleScale } })}
      >
        {index + 1}
      </motion.div>
      <div className={`w-1/2 pl-10 ${isLeft ? "invisible" : ""}`}>
        <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Processus({ simple = false }: { simple?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.2], [30, 0]);
  const timelineScale = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
  const Heading = simple ? "h1" : "h2";

  return (
    <section ref={simple ? undefined : sectionRef} id="processus" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-20 text-center"
          {...(simple
            ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
            : { style: { opacity: titleOpacity, y: titleY, willChange: "transform, opacity" } }
          )}
        >
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            Méthode
          </p>
          <Heading className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Comprendre. Simplifier.{" "}
            <span className="text-gradient">Automatiser.</span>
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">
            Pas de «&nbsp;contact → design → développement → mise en ligne&nbsp;». Je ne
            développe rien avant d&apos;avoir compris comment vous travaillez,
            identifié ce qui compte et simplifié le processus.
          </p>
        </motion.div>

        {/* Timeline centrée (mobile + desktop) */}
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
            style={{ backgroundColor: "#E2E8F0" }}
          />
          {simple ? (
            <motion.div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
              style={{ backgroundColor: "#2563EB", transformOrigin: "top" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          ) : (
            <motion.div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
              style={{
                backgroundColor: "#2563EB",
                scaleY: timelineScale,
                transformOrigin: "top",
                willChange: "transform",
              }}
            />
          )}
          {steps.map((step, i) => (
            <ProcessStep
              key={step.title}
              step={step}
              index={i}
              isLeft={i % 2 === 0}
              isMobile={isMobile}
              simple={simple}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
