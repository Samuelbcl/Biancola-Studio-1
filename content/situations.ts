import {
  FileSpreadsheet,
  Copy,
  RotateCw,
  Search,
  Calculator,
  BellRing,
  CalendarClock,
  MessagesSquare,
  KeyRound,
} from "lucide-react";

export const situations = [
  { icon: FileSpreadsheet, text: "Votre entreprise dépend encore de plusieurs fichiers Excel ?" },
  { icon: Copy, text: "Vous encodez la même information à plusieurs endroits ?" },
  { icon: RotateCw, text: "Certaines tâches doivent être refaites à la main chaque semaine ?" },
  { icon: Search, text: "Vos équipes passent leur temps à chercher des informations ?" },
  { icon: Calculator, text: "Vos devis demandent énormément de manipulations ?" },
  { icon: BellRing, text: "Vos prospects ou vos factures doivent être relancés manuellement ?" },
  { icon: CalendarClock, text: "Votre planning est difficile à synchroniser ?" },
  { icon: MessagesSquare, text: "Vos informations sont réparties entre mails, WhatsApp, fichiers et logiciels ?" },
  { icon: KeyRound, text: "Certaines procédures ne fonctionnent que parce qu'une personne sait comment les faire ?" },
];
