"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, ShoppingCart, Layers, Cloud } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const services = [
  {
    title: "Site Vitrine",
    description: "Présentez votre activité et convertissez vos visiteurs.",
    icon: Monitor,
  },
  {
    title: "E-commerce",
    description: "Vendez en ligne avec une boutique performante.",
    icon: ShoppingCart,
  },
  {
    title: "Application Web",
    description: "Digitalisez vos processus avec un outil sur mesure.",
    icon: Layers,
  },
  {
    title: "SaaS",
    description: "Lancez votre plateforme, prête à scaler.",
    icon: Cloud,
  },
];

// Circular orbit: 4 positions at 90° intervals
// Front (close), Right, Back (far), Left
const orbitRadius = 180;
const orbitSteps = 20; // keyframes for smooth circle

function getOrbitKeyframes(cardIndex: number) {
  const offset = cardIndex * (Math.PI / 2); // 90° offset per card
  const xKeys: number[] = [];
  const zKeys: number[] = [];
  const scaleKeys: number[] = [];
  const opacityKeys: number[] = [];

  // Phase 1: Full rotation (0 to ~70% of keyframes)
  const rotationFrames = Math.floor(orbitSteps * 0.65);
  for (let i = 0; i <= rotationFrames; i++) {
    const angle = offset + (i / rotationFrames) * Math.PI * 2;
    const x = Math.sin(angle) * orbitRadius;
    const z = Math.cos(angle) * orbitRadius * 0.4; // flatten Z for perspective
    const depthScale = 0.75 + 0.25 * ((z / (orbitRadius * 0.4) + 1) / 2); // 0.75-1.0 based on depth
    xKeys.push(x);
    zKeys.push(z);
    scaleKeys.push(depthScale);
    opacityKeys.push(i === 0 ? 0 : Math.min(1, i / 3));
  }

  // Phase 2: Deploy to final position (remaining keyframes)
  const deployFrames = orbitSteps - rotationFrames;
  const lastX = xKeys[xKeys.length - 1];
  const lastZ = zKeys[zKeys.length - 1];
  const lastScale = scaleKeys[scaleKeys.length - 1];
  for (let i = 1; i <= deployFrames; i++) {
    const t = i / deployFrames;
    xKeys.push(lastX * (1 - t));
    zKeys.push(lastZ * (1 - t));
    scaleKeys.push(lastScale + (1 - lastScale) * t);
    opacityKeys.push(1);
  }

  return { xKeys, zKeys, scaleKeys, opacityKeys };
}

function ServiceCard({
  service,
  index,
  isVisible,
  isMobile,
}: {
  service: (typeof services)[number];
  index: number;
  isVisible: boolean;
  isMobile: boolean;
}) {
  const Icon = service.icon;
  const { xKeys, zKeys, scaleKeys, opacityKeys } = getOrbitKeyframes(index);

  if (isMobile) {
    return (
      <motion.div
        className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-primary"
          style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
        >
          <Icon size={24} className="text-primary transition-colors group-hover:text-white" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-dark">{service.title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
      style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
      initial={{ opacity: 0, x: 0, z: -100, scale: 0.7 }}
      animate={
        isVisible
          ? {
              opacity: opacityKeys,
              x: xKeys,
              z: zKeys,
              scale: scaleKeys,
            }
          : { opacity: 0, x: 0, z: -100, scale: 0.7 }
      }
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        delay: 0.1,
      }}
    >
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-primary"
        style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
      >
        <Icon size={24} className="text-primary transition-colors group-hover:text-white" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-dark">{service.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const isMobile = useIsMobile();

  return (
    <section ref={sectionRef} id="services" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-display mb-16 text-center text-3xl font-bold tracking-tight text-dark md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Mes <span className="text-gradient">Services</span>
        </motion.h2>

        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: 1200 }}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isVisible={isInView}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
