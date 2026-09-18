import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Biancola Studio — Digitalisation & outils métiers sur mesure pour PME";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f1729 0%, #1e3a5f 50%, #2563EB 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          Biancola Studio
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.75)",
            marginTop: 18,
          }}
        >
          Digitalisation & outils métiers sur mesure pour PME
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            marginTop: 12,
          }}
        >
          Comprendre. Simplifier. Automatiser. — Liège, Belgique
        </div>
      </div>
    ),
    { ...size }
  );
}
