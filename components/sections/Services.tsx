"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";
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

const RADIUS_X = 280;
const RADIUS_Z = 120;
const ROTATION_DURATION = 3; // seconds for full rotation
const DEPLOY_DURATION = 0.8;
const TOTAL_CARDS = 4;

// Get card position on the carousel at a given angle
function getCarouselTransform(angle: number) {
  const x = Math.sin(angle) * RADIUS_X;
  const z = Math.cos(angle) * RADIUS_Z;
  const normalizedDepth = (z + RADIUS_Z) / (RADIUS_Z * 2); // 0 (back) to 1 (front)
  const scale = 0.55 + 0.45 * normalizedDepth;
  const opacity = 0.3 + 0.7 * normalizedDepth;
  const rotateY = -(angle * 180) / Math.PI * 0.15; // subtle face rotation
  return { x, z, scale, opacity, rotateY };
}

function CarouselStage({
  isVisible,
  isMobile,
}: {
  isVisible: boolean;
  isMobile: boolean;
}) {
  const [phase, setPhase] = useState<"idle" | "rotating" | "deploying" | "deployed">("idle");
  const [rotationAngle, setRotationAngle] = useState(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  // Reset when leaving viewport
  useEffect(() => {
    if (!isVisible) {
      setPhase("idle");
      setRotationAngle(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }
  }, [isVisible]);

  // Start rotation when visible
  useEffect(() => {
    if (isVisible && phase === "idle" && !isMobile) {
      setPhase("rotating");
      startTimeRef.current = 0;
    }
  }, [isVisible, phase, isMobile]);

  // Animation loop for rotation
  useEffect(() => {
    if (phase !== "rotating") return;

    function animate(timestamp: number) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;
      const progress = Math.min(elapsed / ROTATION_DURATION, 1);

      // Ease in-out for smooth rotation
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setRotationAngle(eased * Math.PI * 2); // full rotation

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setPhase("deploying");
      }
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [phase]);

  // Deploy transition
  useEffect(() => {
    if (phase !== "deploying") return;
    const t = setTimeout(() => setPhase("deployed"), DEPLOY_DURATION * 1000);
    return () => clearTimeout(t);
  }, [phase]);

  if (isMobile) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-primary"
                style={{ backgroundColor: "rgba(37,99,235,0.08)" }}>
                <Icon size={24} className="text-primary transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    );
  }

  const isCarousel = phase === "rotating" || phase === "idle";
  const isDeploying = phase === "deploying";
  const isDeployed = phase === "deployed";

  return (
    <div
      className="relative"
      style={{
        perspective: 1000,
        height: isCarousel || isDeploying ? 350 : "auto",
        transition: "height 0.8s ease",
      }}
    >
      {services.map((service, i) => {
        const Icon = service.icon;
        const baseAngle = (i / TOTAL_CARDS) * Math.PI * 2;
        const currentAngle = baseAngle + rotationAngle;
        const carousel = getCarouselTransform(currentAngle);

        // Z-index: cards in front should be on top
        const zIndex = Math.round((carousel.z + RADIUS_Z) / (RADIUS_Z * 2) * 10);

        return (
          <motion.div
            key={service.title}
            className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
            style={{
              position: isDeployed ? "relative" : "absolute",
              top: isDeployed ? "auto" : "50%",
              left: isDeployed ? "auto" : "50%",
              width: isDeployed ? "auto" : 250,
              marginTop: isDeployed ? 0 : -100,
              marginLeft: isDeployed ? 0 : -125,
              zIndex: isDeployed ? 1 : zIndex,
              willChange: "transform, opacity",
            }}
            animate={
              isCarousel
                ? {
                    x: carousel.x,
                    z: carousel.z,
                    scale: carousel.scale,
                    opacity: phase === "idle" ? 0 : carousel.opacity,
                    rotateY: carousel.rotateY,
                  }
                : isDeploying
                ? {
                    x: 0,
                    z: 0,
                    scale: 1,
                    opacity: 1,
                    rotateY: 0,
                  }
                : {
                    x: 0,
                    z: 0,
                    scale: 1,
                    opacity: 1,
                    rotateY: 0,
                  }
            }
            transition={
              isCarousel
                ? { duration: 0, ease: "linear" }
                : { duration: DEPLOY_DURATION, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 }
            }
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
      })}

      {/* Grid placeholder to take space when deployed */}
      {isDeployed && (
        <style>{`
          #services .relative { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        `}</style>
      )}
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
