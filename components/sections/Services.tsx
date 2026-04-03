"use client";

import { motion } from "framer-motion";
import { Monitor, ShoppingCart, Layers, Cloud } from "lucide-react";

const services = [
  {
    title: "Site Vitrine",
    description: "Présentez votre activité avec un site moderne et performant. Idéal pour les entreprises et indépendants en région liégeoise.",
    icon: Monitor,
  },
  {
    title: "E-commerce",
    description: "Vendez en ligne avec une boutique optimisée. Solution sur mesure pour les commerçants en Wallonie.",
    icon: ShoppingCart,
  },
  {
    title: "Application Web",
    description: "Digitalisez vos processus avec une application web sur mesure, conçue et développée à Liège.",
    icon: Layers,
  },
  {
    title: "SaaS",
    description: "Lancez votre plateforme SaaS, conçue pour scaler. Développement complet depuis la Wallonie.",
    icon: Cloud,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-display mb-16 text-center text-3xl font-bold tracking-tight text-dark md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mes <span className="text-gradient">Services</span> Web à Liège
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group rounded-2xl border-2 border-gray-100 bg-white p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-primary"
                  style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
                >
                  <Icon size={24} className="text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
