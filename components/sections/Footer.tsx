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
        text="Biancola Studio · Webdesigner à Liège · Wallonie, Belgique ·"
        variant="filled"
        speed={25}
      />

      {/* Footer grid */}
      <div className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-bold tracking-tight">Biancola Studio</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Webdesigner freelance à Liège, je conçois des sites vitrines
              et applications web performantes pour les entreprises en Wallonie.
            </p>
            <address className="mt-6 space-y-2 text-sm not-italic text-gray-400">
              <a href="mailto:samuel@biancolastudio.com" className="flex items-center gap-2 transition-colors hover:text-white">
                <Mail size={14} className="text-primary" />
                samuel@biancolastudio.com
              </a>
              <a href="tel:+32498737162" className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone size={14} className="text-primary" />
                +32 498 73 71 62
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                Liège, Wallonie, Belgique
              </p>
            </address>
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
