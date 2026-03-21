"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Video() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-primary px-6 py-24">
      {playing ? (
        <div className="aspect-video w-full max-w-4xl">
          <iframe
            className="h-full w-full rounded-2xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <motion.h2
            className="mb-12 text-3xl font-bold text-white md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Comment on travaille ensemble
          </motion.h2>

          {/* Play button with pulse */}
          <motion.button
            onClick={() => setPlaying(true)}
            className="magnetic relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-30" />
            <Play size={32} color="#2563EB" fill="#2563EB" />
          </motion.button>

          <motion.p
            className="mt-8 text-sm text-white/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Regarder la vidéo · 2 min
          </motion.p>
        </div>
      )}
    </section>
  );
}
