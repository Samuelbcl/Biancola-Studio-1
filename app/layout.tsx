import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biancola Studio",
  description: "Biancola Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body style={{ backgroundColor: "#FFFFFF" }}>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
