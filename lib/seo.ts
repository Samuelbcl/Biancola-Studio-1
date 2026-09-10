import type { Solution } from "@/content/solutions";

export const BASE_URL = "https://www.biancolastudio.com";

const areaServed = [
  { "@type": "City", name: "Liège" },
  { "@type": "AdministrativeArea", name: "Wallonie" },
  { "@type": "Country", name: "Belgique" },
];

/** JSON-LD « Service » pour les pages Solutions, rattaché à l'organisation déclarée dans le layout. */
export function serviceJsonLd(solution: Solution) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.seo.description,
    url: `${BASE_URL}${solution.href}`,
    serviceType: solution.title,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Biancola Studio",
    },
    areaServed,
  };
}
