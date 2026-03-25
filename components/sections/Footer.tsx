"use client";


import { Mail, Phone, MapPin } from "lucide-react";
import Marquee from "@/components/ui/Marquee";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Services", href: "/services" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Processus", href: "/processus" },
      { label: "Tarifs", href: "/tarifs" },
      { label: "À propos", href: "/a-propos" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Site Vitrine", href: "/services" },
      { label: "E-commerce", href: "/services" },
      { label: "Application Web", href: "/services" },
      { label: "SaaS", href: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Marquee divider */}
      <Marquee
        text="Biancola Studio · Votre partenaire digital ·"
        variant="filled"
        speed={25}
      />

      {/* Footer grid */}
      <div className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold">Biancola Studio</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Nous concevons des expériences digitales modernes et performantes
              pour propulser votre activité.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                hello@biancolastudio.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                +32 498 73 71 62
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                Liège, Belgique
              </p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 Biancola Studio. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
