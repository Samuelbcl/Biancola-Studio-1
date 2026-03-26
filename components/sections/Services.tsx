"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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

function ServiceCard({
  service,
  index,
  scrollYProgress,
  isMobile,
}: {
  service: (typeof services)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}) {
  const start = 0.15 + index * 0.06;
  const end = start + 0.2;

  const rotateY = useTransform(
    scrollYProgress,
    [start, end],
    isMobile ? [0, 0] : [45 - index * 30, 0]
  );
  const translateX = useTransform(
    scrollYProgress,
    [start, end],
    isMobile ? [0, 0] : [(index - 1.5) * -80, 0]
  );
  const translateZ = useTransform(
    scrollYProgress,
    [start, end],
    isMobile ? [0, 0] : [-100 + index * 20, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    isMobile ? [0.9, 1] : [0.85, 1]
  );
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  const Icon = service.icon;

  return (
    <motion.div
      className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
      style={{
        rotateY,
        x: translateX,
        z: translateZ,
        scale,
        opacity,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
    >
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-primary"
        style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
      >
        <Icon
          size={24}
          className="text-primary transition-colors group-hover:text-white"
        />
      </div>
      <h3 className="mb-2 text-lg font-bold text-dark">{service.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.2], [30, 0]);

  return (
    <section ref={sectionRef} id="services" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-display mb-16 text-center text-3xl font-bold tracking-tight text-dark md:text-5xl"
          style={{ opacity: titleOpacity, y: titleY, willChange: "transform, opacity" }}
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
              scrollYProgress={scrollYProgress}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
