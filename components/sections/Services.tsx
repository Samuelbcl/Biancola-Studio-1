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

const RADIUS_X = 250;
const RADIUS_Z = 100;
const ROTATION_DURATION = 3500; // ms
const TOTAL = 4;

function CardContent({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <>
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-primary"
        style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
      >
        <Icon size={24} className="text-primary transition-colors group-hover:text-white" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-dark">{service.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
    </>
  );
}

function CarouselStage({ isVisible, isMobile }: { isVisible: boolean; isMobile: boolean }) {
  const [deployed, setDeployed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef(0);
  const startRef = useRef(0);

  // Reset when leaving viewport
  useEffect(() => {
    if (!isVisible) {
      setDeployed(false);
      startRef.current = 0;
      cancelAnimationFrame(rafRef.current);
      // Reset card styles
      cardRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transform = "translate(-50%, -50%) scale(0)";
        el.style.opacity = "0";
      });
    }
  }, [isVisible]);

  // Start rotation when visible (desktop only)
  useEffect(() => {
    if (!isVisible || isMobile || deployed) return;

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / ROTATION_DURATION, 1);

      // Ease in-out
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const angle = eased * Math.PI * 2;

      // Update each card via DOM (no React re-render)
      for (let i = 0; i < TOTAL; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        const a = (i / TOTAL) * Math.PI * 2 + angle;
        const x = Math.sin(a) * RADIUS_X;
        const z = Math.cos(a) * RADIUS_Z;
        const depth = (z + RADIUS_Z) / (RADIUS_Z * 2); // 0=back, 1=front
        const scale = 0.6 + 0.4 * depth;
        const opacity = 0.35 + 0.65 * depth;

        el.style.transform = `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${Math.round(depth * 10)}`;
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Rotation done → deploy
        setDeployed(true);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, isMobile, deployed]);

  if (isMobile) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <CardContent service={service} />
          </motion.div>
        ))}
      </div>
    );
  }

  if (deployed) {
    return (
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <CardContent service={service} />
          </motion.div>
        ))}
      </div>
    );
  }

  // Carousel phase
  return (
    <div
      ref={containerRef}
      className="relative mx-auto"
      style={{ height: 320, perspective: 800, perspectiveOrigin: "50% 50%" }}
    >
      {services.map((service, i) => (
        <div
          key={service.title}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="group absolute left-1/2 top-1/2 w-[240px] rounded-2xl border-2 border-gray-100 bg-white p-8"
          style={{
            transform: "translate(-50%, -50%) scale(0)",
            opacity: 0,
            transformStyle: "preserve-3d",
            willChange: "transform, opacity",
            transition: "none",
          }}
        >
          <CardContent service={service} />
        </div>
      ))}
    </div>
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

        <CarouselStage isVisible={isInView} isMobile={isMobile} />
      </div>
    </section>
  );
}
