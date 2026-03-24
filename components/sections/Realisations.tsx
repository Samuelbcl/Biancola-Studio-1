"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { title: "Maison Élégance", category: "Site Vitrine" },
  { title: "ShopNova", category: "E-commerce" },
  { title: "TaskFlow", category: "Application Web" },
  { title: "CloudMetrics", category: "SaaS" },
  { title: "Artisan & Co", category: "Site Vitrine" },
  { title: "FitTrack Pro", category: "Application Web" },
];

export default function Realisations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current.scrollLeft;
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = startScrollLeft.current - dx;
  }

  function onMouseUp() {
    setIsDragging(false);
  }

  return (
    <section id="realisations" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-dark md:text-5xl">
            Nos <span style={{ color: "#2563EB" }}>Réalisations</span>
          </h2>

          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="magnetic flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="magnetic flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll / drag */}
        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto pb-4 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ scrollbarWidth: "none" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="min-w-[300px] flex-shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Image placeholder */}
              <div className="flex h-52 items-center justify-center bg-gray-100 text-sm text-gray-400">
                Image projet
              </div>

              <div className="p-5">
                <span
                  className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    color: "#2563EB",
                    backgroundColor: "rgba(37,99,235,0.1)",
                  }}
                >
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-dark">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
