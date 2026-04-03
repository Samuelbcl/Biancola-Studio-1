import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.biancolastudio.com";
  const lastModified = "2026-04-03";

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/realisations`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/processus`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tarifs`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.9 },
  ];
}
