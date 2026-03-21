"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 300, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, .magnetic, [role='button']")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, .magnetic, [role='button']")) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        width: isHovering ? 48 : 12,
        height: isHovering ? 48 : 12,
        backgroundColor: isHovering ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.9)",
        border: isHovering ? "1.5px solid rgba(255, 255, 255, 0.6)" : "none",
        opacity: isVisible ? 1 : 0,
        transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border 0.3s ease, opacity 0.2s ease",
      }}
    />
  );
}
