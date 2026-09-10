"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap, Eye, TrendingUp, Users } from "lucide-react";

const gains = [
  {
    icon: Clock,
    title: "Du temps récupéré",
    text: "Les tâches répétitives disparaissent ou se font toutes seules. Vos équipes se concentrent sur ce qui a de la valeur.",
  },
  {
    icon: ShieldCheck,
    title: "Moins d'erreurs",
    text: "Une information encodée une fois, réutilisée partout. Fini les versions de fichiers, les oublis et les ressaisies.",
  },
  {
    icon: Zap,
    title: "Des processus plus rapides",
    text: "Un devis, un dossier ou une commande avance sans attendre qu'on recopie des données d'un outil à l'autre.",
  },
  {
    icon: Eye,
    title: "Une vision claire",
    text: "Un tableau de bord qui montre l'état réel de l'activité, sans compiler des fichiers le vendredi soir.",
  },
  {
    icon: TrendingUp,
    title: "Des opportunités mieux suivies",
    text: "Prospects, relances et suivis ne dépendent plus de la mémoire d'une personne.",
  },
  {
    icon: Users,
    title: "Des équipes mieux organisées",
    text: "Chacun sait où trouver l'information et quoi faire ensuite, même quand quelqu'un est absent.",
  },
];

export default function Valeur() {
  return (
    <section id="valeur" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#2563EB" }}
          >
            Ce que ça change
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-dark md:text-5xl">
            Des bénéfices <span className="text-gradient">concrets</span>, pas des
            promesses
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-500">
            La technologie est le moyen. Ce que vous achetez, c&apos;est ce qu&apos;elle
            change dans votre quotidien.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gains.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                className="rounded-2xl border-2 border-gray-100 bg-white p-8 transition-colors hover:border-primary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(37,99,235,0.08)" }}
                >
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark">{g.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{g.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-2xl text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Je ne promets aucun chiffre à l&apos;avance : les gains sont identifiés
          pendant l&apos;audit, puis mesurés après la mise en place.
        </motion.p>
      </div>
    </section>
  );
}
