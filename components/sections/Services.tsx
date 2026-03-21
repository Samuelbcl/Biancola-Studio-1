"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { Monitor, ShoppingCart, Layers, Cloud } from "lucide-react";

const services = [
  {
    title: "Site Vitrine",
    description:
      "Un site élégant et performant pour présenter votre activité et convertir vos visiteurs.",
    icon: Monitor,
  },
  {
    title: "E-commerce",
    description:
      "Une boutique en ligne optimisée pour maximiser vos ventes et offrir une expérience d'achat fluide.",
    icon: ShoppingCart,
  },
  {
    title: "Application Web",
    description:
      "Des applications sur mesure, robustes et évolutives pour digitaliser vos processus.",
    icon: Layers,
  },
  {
    title: "SaaS",
    description:
      "Des plateformes SaaS complètes, de l'architecture au déploiement, prêtes à scaler.",
    icon: Cloud,
  },
];

const stats = [
  { value: 50, suffix: "+", label: "projets" },
  { value: 5, suffix: "", label: "ans d'expérience" },
  { value: 100, suffix: "%", label: "clients satisfaits" },
];

function TiltCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    rotateY.set((px - midX) / 10);
    rotateX.set(-(py - midY) / 10);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      className="rounded-2xl border bg-white p-8 transition-colors duration-300"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        borderColor: hovered ? "#2563EB" : "#E2E8F0",
        boxShadow: hovered
          ? "0 20px 40px rgba(37,99,235,0.1)"
          : "0 4px 12px rgba(0,0,0,0.05)",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
    >
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ backgroundColor: "rgba(37,99,235,0.1)" }}
      >
        <Icon size={24} color="#2563EB" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-dark">{service.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">
        {service.description}
      </p>
    </motion.div>
  );
}

function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  if (isInView && !hasAnimated.current) {
    hasAnimated.current = true;
    let start = 0;
    const duration = 1500;
    const stepTime = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
  }

  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl font-bold text-primary md:text-4xl">
        {count}
        {suffix}
      </span>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.h2
          className="mb-16 text-center text-3xl font-bold text-dark md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nos <span style={{ color: "#2563EB" }}>Services</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Counters */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
