"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  repeat?: number;
}

export default function Marquee({ text, repeat = 6 }: MarqueeProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span
            key={i}
            className="mx-4 text-lg font-medium"
            style={{ color: "#2563EB" }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
