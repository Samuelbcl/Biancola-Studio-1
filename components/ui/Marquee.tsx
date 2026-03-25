"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
  variant?: "light" | "filled";
}

export default function Marquee({
  items,
  speed = 30,
  variant = "light",
}: MarqueeProps) {
  const isFilled = variant === "filled";
  const color = isFilled ? "#FFFFFF" : "#2563EB";
  const bg = isFilled ? "#2563EB" : "#FFFFFF";

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      style={{ backgroundColor: bg }}
    >
      <div
        className="inline-flex py-3"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {/* Two identical sets for seamless loop */}
        {[0, 1].map((set) =>
          items.map((item, i) => (
            <span
              key={`${set}-${i}`}
              className="mx-8 text-lg font-medium"
              style={{ color }}
            >
              {item}
            </span>
          ))
        )}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
