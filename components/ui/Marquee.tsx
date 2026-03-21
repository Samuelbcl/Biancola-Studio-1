"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  repeat?: number;
  speed?: number;
  variant?: "light" | "filled";
}

export default function Marquee({
  text,
  repeat = 8,
  speed = 20,
  variant = "light",
}: MarqueeProps) {
  const isFilled = variant === "filled";

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      style={{
        backgroundColor: isFilled ? "#2563EB" : "#FFFFFF",
      }}
    >
      <motion.div
        className="inline-flex py-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span
            key={i}
            className="mx-4 text-lg font-medium"
            style={{ color: isFilled ? "#FFFFFF" : "#2563EB" }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
