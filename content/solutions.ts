import {
  SearchCheck,
  Blocks,
  Workflow,
  Globe,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  href: string;
  number: string;
  icon: LucideIcon;
  /** Nom court, utilisé dans les cartes, la nav et le footer */
  title: string;
  /** Une phrase, utilisée dans les cartes de la home */
  short: string;
  /** H1 de la page dédiée */
  tagline: string;
  /** Paragraphe d'introduction de la page dédiée */
  intro: string;
  /** Exemples affichés en chips */
  examples: string[];
  /** « Vous vous reconnaissez ? » sur la page dédiée */
  situations: string[];
  deliverablesTitle: string;
  deliverables: { title: string; text: string }[];
  /** Domaines passés en revue (audit uniquement) */
  areas?: string[];
  /** Déroulé (audit uniquement) */
  steps?: { title: string; text: string }[];
  /** Principe affiché en citation, sur deux lignes (la 2e en dégradé) */
  principle: [string, string];
  /** Cas concrets à afficher sur la page dédiée */
  caseIds: string[];
  /** Offre secondaire (sites web) : affichage plus discret */
  secondary?: boolean;
  seo: { title: string; description: string };
};

export const solutions: Solution[] = [
  {
    slug: "audit",
    href: "/audit",
    number: "01",
    icon: SearchCheck,
    title: "Biancola Audit",
    short:
      "Comprendre comment votre entreprise fonctionne, et identifier ce qui vaut vraiment la peine d'être simplifié ou automatisé.",
    tagline: "Vous n'avez pas besoin de savoir quel logiciel construire.",
    intro:
      "Commencez simplement par me montrer comment vous travaillez. Le Biancola Audit analyse le fonctionnement réel de votre entreprise et identifie, noir sur blanc, ce qui mérite d'être simplifié, centralisé ou automatisé — et par où commencer.",
    examples: [
      "Cartographie des processus",
      "Frictions & pertes de temps",
      "Quick wins",
      "Recommandation de solution",
    ],
    situations: [
      "Vous sentez que vous perdez du temps, sans savoir précisément où.",
      "Vous avez déjà essayé un logiciel « tout-en-un » que personne n'utilise vraiment.",
      "On vous a proposé des applications, mais vous ne savez pas ce qui serait réellement utile.",
      "Vous voulez investir dans le digital, mais uniquement là où ça rapporte.",
    ],
    deliverablesTitle: "Ce que vous recevez",
    deliverables: [
      {
        title: "Cartographie de vos processus",
        text: "Comment l'information circule aujourd'hui, de la demande du client à la facture : qui fait quoi, avec quel outil, à quel moment.",
      },
      {
        title: "Frictions et pertes de temps",
        text: "Les doubles encodages, les tâches répétitives, les attentes et les endroits où les erreurs apparaissent.",
      },
      {
        title: "Quick wins",
        text: "Les améliorations rapides — souvent des automatisations simples — à mettre en place sans gros projet.",
      },
      {
        title: "Opportunités et recommandation",
        text: "Le ou les problèmes à forte valeur, l'idée de solution adaptée (outil métier, intégration, automatisation…) et une proposition par étapes.",
      },
      {
        title: "Gains à mesurer",
        text: "Les indicateurs à suivre pour vérifier, après la mise en place, que l'outil tient ses promesses.",
      },
    ],
    areas: [
      "Acquisition",
      "Commercial",
      "Devis",
      "Clients",
      "Planning",
      "Administration",
      "Opérations",
      "Documents",
      "Facturation",
      "Données",
      "Reporting",
      "Communication",
    ],
    steps: [
      {
        title: "Diagnostic",
        text: "Un premier échange de 30 minutes, gratuit et sans engagement. Vous me racontez votre activité, je vous dis s'il y a matière à creuser.",
      },
      {
        title: "Immersion",
        text: "Des échanges avec vous et vos équipes, une revue de vos outils, fichiers et habitudes. Sur place quand c'est possible.",
      },
      {
        title: "Analyse",
        text: "Je cartographie vos processus, je repère les frictions et j'évalue ce qu'une automatisation ou un outil changerait concrètement.",
      },
      {
        title: "Restitution",
        text: "Un rapport clair : constats, quick wins, recommandation de solution et proposition par étapes. À vous de décider de la suite.",
      },
    ],
    principle: ["Problème → Solution → Technologie.", "Jamais l'inverse."],
    caseIds: ["risosales"],
    seo: {
      title: "Biancola Audit | Diagnostic de digitalisation pour PME — Liège, Belgique",
      description:
        "Vous n'avez pas besoin de savoir quel logiciel construire. Le Biancola Audit analyse le fonctionnement de votre PME et identifie ce qu'il faut simplifier, centraliser ou automatiser. Liège, Wallonie, Belgique.",
    },
  },
  {
    slug: "outil-metier-sur-mesure",
    href: "/services/outil-metier-sur-mesure",
    number: "02",
    icon: Blocks,
    title: "Outils métiers sur mesure",
    short:
      "Un logiciel construit autour de votre façon de travailler — pas l'inverse. Uniquement ce dont vous avez besoin.",
    tagline: "Un logiciel qui s'adapte à votre entreprise. Pas l'inverse.",
    intro:
      "Un outil métier, c'est une application construite autour de vos processus réels : vos devis, vos clients, votre planning, vos chantiers ou vos interventions. Il ne contient que ce dont vous avez besoin, parle votre vocabulaire et remplace les fichiers dispersés par une information centralisée, encodée une seule fois.",
    examples: [
      "CRM sur mesure",
      "Devis & calculateurs",
      "Planning & interventions",
      "Portails & dashboards",
    ],
    situations: [
      "Votre activité tourne sur des fichiers Excel que plus personne n'ose modifier.",
      "Votre CRM ou votre ERP générique vous impose un fonctionnement qui n'est pas le vôtre.",
      "Vos équipes ressaisissent les mêmes informations dans plusieurs outils.",
      "Vous n'avez pas de vue d'ensemble fiable de vos devis, projets ou interventions.",
    ],
    deliverablesTitle: "Quelques exemples d'outils",
    deliverables: [
      {
        title: "CRM sur mesure",
        text: "Prospects, clients, relances et historique dans un outil qui suit votre cycle de vente réel — pas celui d'un éditeur générique.",
      },
      {
        title: "Outils de devis et calculateurs",
        text: "Des devis générés en quelques clics à partir de vos règles de calcul, sans formules fragiles ni copier-coller.",
      },
      {
        title: "Gestion de chantier, planning et interventions",
        text: "Qui est où, quand, avec quel matériel : un planning partagé, des fiches d'intervention et un suivi depuis le terrain.",
      },
      {
        title: "Portails, plateformes internes et dashboards",
        text: "Un espace client, un portail fournisseur, une plateforme interne ou un tableau de bord qui montre l'état réel de l'activité.",
      },
      {
        title: "Applications terrain",
        text: "Des applications mobiles simples pour saisir l'information une seule fois, là où elle naît.",
      },
      {
        title: "Gestion documentaire",
        text: "Contrats, fiches et documents générés automatiquement à partir de vos données, et rangés au bon endroit.",
      },
    ],
    principle: [
      "Du sur-mesure uniquement là où votre processus le justifie.",
      "Le reste, on le connecte.",
    ],
    caseIds: ["risosales", "roadcrm"],
    seo: {
      title: "Outil métier sur mesure à Liège | Logiciel & application métier pour PME",
      description:
        "Développement d'outils métiers sur mesure pour PME : CRM, devis, planning, interventions, portails, dashboards. Un logiciel construit autour de votre façon de travailler. Liège, Wallonie, Belgique.",
    },
  },
  {
    slug: "automatisation-pme",
    href: "/services/automatisation-pme",
    number: "03",
    icon: Workflow,
    title: "Automatisation & intégrations",
    short:
      "Arrêter de faire à la main ce qu'une machine peut faire, et connecter les logiciels que vous utilisez déjà.",
    tagline: "Arrêtez de faire à la main ce qu'une machine peut faire.",
    intro:
      "Chaque semaine, des heures partent dans des tâches que personne n'a choisies : recopier une commande, relancer une facture, créer un dossier, envoyer le même e-mail. L'automatisation connecte vos outils entre eux pour que l'information circule sans vous — et que vos équipes se concentrent sur ce qui a de la valeur.",
    examples: [
      "Formulaire → CRM → dossier",
      "Devis accepté → projet → facture",
      "Relances automatiques",
      "Connexion de vos logiciels",
    ],
    situations: [
      "Une demande arrive par formulaire ou par e-mail, et quelqu'un la recopie dans un autre outil.",
      "Vos relances de devis, de factures ou de prospects dépendent de la mémoire d'une personne.",
      "Vos logiciels — facturation, CRM, agenda, comptabilité — ne se parlent pas.",
      "Les mêmes documents sont créés à la main, encore et encore.",
    ],
    deliverablesTitle: "Des enchaînements concrets",
    deliverables: [
      {
        title: "De la demande au dossier",
        text: "Formulaire → CRM → création du dossier → e-mail de confirmation → document → notification → tâche pour la bonne personne.",
      },
      {
        title: "Du devis à la facture",
        text: "Devis accepté → création du projet → planning → facture → suivi du paiement, sans aucune ressaisie.",
      },
      {
        title: "Relances et rappels",
        text: "Devis sans réponse, factures échues, rendez-vous à confirmer : relancés automatiquement, au bon moment, avec le bon message.",
      },
      {
        title: "Connexion de vos logiciels existants",
        text: "Comptabilité, facturation, CRM, agenda, e-mails, outils métier : je fais circuler l'information entre eux plutôt que de les remplacer.",
      },
      {
        title: "Documents générés automatiquement",
        text: "Contrats, bons de commande, rapports, fiches : produits à partir de vos données, au bon format, sans intervention.",
      },
      {
        title: "IA, quand elle apporte une vraie valeur",
        text: "Comprendre un e-mail, extraire les informations d'un document, résumer un dossier, repérer une anomalie. Jamais pour le plaisir d'écrire « IA ».",
      },
    ],
    principle: [
      "Une automatisation doit supprimer une vraie tâche.",
      "Sinon, elle n'a pas lieu d'être.",
    ],
    caseIds: ["risosales"],
    seo: {
      title: "Automatisation PME & intégration de logiciels à Liège | Biancola Studio",
      description:
        "Automatisation des processus et intégration de logiciels pour PME : relances automatiques, documents générés, formulaires connectés au CRM, devis → projet → facture. Liège, Wallonie, Belgique.",
    },
  },
  {
    slug: "creation-site-internet-liege",
    href: "/services/creation-site-internet-liege",
    number: "04",
    icon: Globe,
    title: "Sites & expériences digitales",
    short:
      "Quand votre projet passe aussi par le web : site vitrine, e-commerce, plateforme ou espace client, connectés à vos outils.",
    tagline: "Création de site internet à Liège, pensée comme un outil.",
    intro:
      "Webdesigner et développeur basé à Liège, je crée des sites vitrines, e-commerces et plateformes web sur mesure pour les entreprises et indépendants de Wallonie. La différence : votre site n'est pas une brochure isolée. Il s'intègre à votre fonctionnement — prise de rendez-vous, demandes de devis, espace client, catalogue — et alimente vos outils sans ressaisie.",
    examples: ["Site vitrine", "E-commerce", "Plateforme / espace client", "SEO local"],
    situations: [
      "Votre site actuel ne reflète plus votre entreprise, ou ne génère aucune demande.",
      "Vos clients vous écrivent par e-mail pour des choses qu'ils pourraient faire seuls en ligne.",
      "Vous vendez en ligne, mais commandes, stock et facturation restent manuels.",
      "Vous voulez être trouvé sur Google à Liège et en Wallonie.",
    ],
    deliverablesTitle: "Ce que je crée",
    deliverables: [
      {
        title: "Site vitrine",
        text: "Un site moderne, rapide et bien référencé, qui présente votre activité et transforme les visiteurs en demandes.",
      },
      {
        title: "E-commerce",
        text: "Une boutique en ligne sur mesure, connectée à votre gestion de stock, de commandes et de facturation.",
      },
      {
        title: "Plateformes et espaces clients",
        text: "Espace client, portail de réservation, plateforme SaaS : des applications web complètes, accessibles depuis n'importe où.",
      },
      {
        title: "Refonte et SEO local",
        text: "Refondre un site vieillissant, améliorer ses performances et son référencement à Liège, en Wallonie et en Belgique.",
      },
    ],
    principle: [
      "Un site est une composante de votre écosystème digital.",
      "Pas la définition de votre entreprise.",
    ],
    caseIds: ["flonaturopathie", "bloomclub"],
    secondary: true,
    seo: {
      title: "Création de site internet à Liège | Webdesigner freelance — Biancola Studio",
      description:
        "Webdesigner freelance à Liège : création de sites vitrines, e-commerces et plateformes web sur mesure, connectés à vos outils. Design moderne, performance et référencement local en Wallonie.",
    },
  },
];

export const getSolution = (slug: string) =>
  solutions.find((s) => s.slug === slug);
