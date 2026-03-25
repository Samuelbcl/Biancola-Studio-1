"use client";

import { useEffect, useRef } from "react";

interface MarqueeProps {
  text: string;
  repeat?: number;
  speed?: number;
  variant?: "light" | "filled";
}

export default function Marquee({
  text,
  repeat = 12,
  speed = 20,
  variant = "light",
}: MarqueeProps) {
  const isFilled = variant === "filled";
  const color = isFilled ? "#FFFFFF" : "#2563EB";
  const bg = isFilled ? "#2563EB" : "#FFFFFF";
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf: number;
    let pos = 0;
    const half = el.scrollWidth / 2;

    function step() {
      pos -= 1;
      if (pos <= -half) pos = 0;
      el!.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const items = Array.from({ length: repeat }, (_, i) => (
    <span key={i} className="mx-4 text-lg font-medium" style={{ color }}>
      {text}
    </span>
  ));

  return (
    <div className="overflow-hidden whitespace-nowrap" style={{ backgroundColor: bg }}>
      <div ref={trackRef} className="inline-flex py-3 will-change-transform">
        {items}
        {items}
      </div>
    </div>
  );
}
