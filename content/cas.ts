export type Cas = {
  id: string;
  /** metier : outils & automatisations — web : sites & expériences digitales */
  kind: "metier" | "web";
  device: "macbook" | "phone";
  title: string;
  category: string;
  client?: string;
  /** Format Problème / Solution / Résultat (outils métiers) */
  problem?: string;
  solution?: string;
  result?: string;
  /** Description simple (projets web) */
  description?: string;
  images: string[];
  href: string | null;
  isPublic: boolean;
};

export const cas: Cas[] = [
  {
    id: "risosales",
    kind: "metier",
    device: "macbook",
    title: "Automatiser la création des offres commerciales",
    category: "Outil métier · Industrie",
    client: "RisoSales — pour RISO, pionnier de l'impression jet d'encre à froid écoresponsable",
    problem:
      "Chaque étude comparative et chaque offre commerciale était construite à la main dans Excel : des heures de manipulations, des formules fragiles et des erreurs difficiles à repérer.",
    solution:
      "Un outil métier sur mesure qui centralise les données produits et génère études et offres en quelques clics, selon les règles de calcul propres à l'entreprise.",
    result:
      "Un processus plus rapide et plus fiable, des offres homogènes et une information centralisée à la place de fichiers dispersés.",
    images: ["/projects/risosales_1.png", "/projects/risosales_2.png"],
    href: null,
    isPublic: false,
  },
  {
    id: "roadcrm",
    kind: "metier",
    device: "phone",
    title: "Centraliser le suivi commercial terrain",
    category: "Application terrain · Commercial",
    client: "RoadCRM — application mobile pour commerciaux itinérants",
    problem:
      "Rendez-vous, comptes et activités des commerciaux étaient dispersés entre agendas, notes et fichiers : impossible d'avoir une vue claire du terrain.",
    solution:
      "Une application mobile qui réunit rendez-vous, comptes clients et activités dans une interface pensée pour la route.",
    result:
      "Un suivi commercial centralisé et lisible, accessible depuis le terrain, à la place d'informations éparpillées.",
    images: ["/projects/roadcrm_1.png", "/projects/roadcrm_2.png"],
    href: null,
    isPublic: false,
  },
  {
    id: "flonaturopathie",
    kind: "web",
    device: "macbook",
    title: "Site vitrine & prise de rendez-vous pour naturopathe",
    category: "Site vitrine",
    description:
      "Flonaturopathie — Site vitrine moderne pour une praticienne en naturopathie. Présentation des services et de l'approche thérapeutique, avec un module de prise de rendez-vous en ligne intégré. Une boutique d'ebooks est en préparation pour diversifier les canaux de vente.",
    images: [
      "/projects/flonaturopathie_1.png",
      "/projects/flonaturopathie_2.png",
      "/projects/flonaturopathie_3.png",
      "/projects/flonaturopathie_4.png",
    ],
    href: "https://www.flonaturopathie.com/",
    isPublic: true,
  },
  {
    id: "bloomclub",
    kind: "web",
    device: "macbook",
    title: "Vitrine digitale pour fleuriste artisanale",
    category: "Projet démonstratif",
    description:
      "Bloom Club — Maquette fonctionnelle d'un site vitrine pour une fleuriste artisanale. Présentation des créations, catalogue produits et gestion événementielle. Livré avec un back-office no-code permettant de modifier contenus, photos, prix, SEO…",
    images: [
      "/projects/bloomclub_2.png",
      "/projects/bloomclub_3.png",
      "/projects/bloomclub_1.png",
      "/projects/bloomclub_bo_1.png",
      "/projects/bloomclub_bo_2.png",
      "/projects/bloomclub_bo_3.png",
    ],
    href: null,
    isPublic: false,
  },
];

export const getCas = (ids?: string[]) =>
  ids
    ? ids.map((id) => cas.find((c) => c.id === id)).filter((c): c is Cas => !!c)
    : cas;
