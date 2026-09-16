import { NextResponse } from "next/server";

// Reçoit les formulaires du site (contact et guide) et les envoie dans Brevo :
// - contact : e-mail d'alerte à Samuel (réponse directe au prospect) + fiche dans la liste « Prospects » ;
// - guide : fiche dans la liste « Guide motion design ».
// Variables Vercel : BREVO_API_KEY, BREVO_LIST_CONTACT, BREVO_LIST_GUIDE, et en option BREVO_SENDER / BREVO_NOTIFY_TO.
// Tant que BREVO_API_KEY n'est pas définie, on répond 503 et le navigateur repasse par Formspree.

const BREVO = "https://api.brevo.com/v3";

type Fields = Record<string, string>;

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\n/g, "<br>");

async function brevo(path: string, apiKey: string, body: unknown) {
  return fetch(`${BREVO}${path}`, {
    method: "POST",
    headers: { "api-key": apiKey, accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
}

// Ajoute ou met à jour le contact ; si Brevo refuse les attributs (nom inconnu sur le compte), on réessaie sans.
async function saveContact(apiKey: string, email: string, listId: number, attributes: Fields) {
  const base = { email, listIds: [listId], updateEnabled: true };
  let res = await brevo("/contacts", apiKey, { ...base, attributes });
  if (res.status === 400) res = await brevo("/contacts", apiKey, base);
  return res.ok;
}

async function notifySamuel(apiKey: string, f: Fields) {
  const sender = process.env.BREVO_SENDER || "samuel@biancolastudio.com";
  const to = process.env.BREVO_NOTIFY_TO || "samuel@biancolastudio.com";
  const rows: [string, string][] = [
    ["Nom", f.name],
    ["E-mail", f.email],
    ["Entreprise", f.company],
    ["Besoin", f["project-type"]],
    ["Message", f.message],
    ["Page", f.page],
  ];
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#0f1729">
    <h2 style="margin:0 0 12px">Nouvelle demande de diagnostic</h2>
    <table cellpadding="8" style="border-collapse:collapse">${rows
      .filter(([, v]) => v)
      .map(([k, v]) => `<tr><td style="color:#64748b;vertical-align:top">${k}</td><td>${escapeHtml(v)}</td></tr>`)
      .join("")}</table>
    <p style="margin-top:16px;color:#64748b">Répondez directement à cet e-mail pour écrire au prospect.</p></div>`;
  const res = await brevo("/smtp/email", apiKey, {
    sender: { name: "Site Biancola Studio", email: sender },
    to: [{ email: to, name: "Samuel Biancola" }],
    replyTo: { email: f.email, name: f.name || f.email },
    subject: `Nouvelle demande de diagnostic — ${f.name || f.email}`,
    htmlContent: html,
  });
  return res.ok;
}

export async function POST(req: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: false, reason: "non configuré" }, { status: 503 });

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // champ caché : seuls les robots le remplissent
  if (data._gotcha) return NextResponse.json({ ok: true });

  const f: Fields = Object.fromEntries(
    Object.entries(data)
      .filter(([k]) => !k.startsWith("_"))
      .map(([k, v]) => [k, String(v ?? "").trim().slice(0, 5000)]),
  );
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email || "")) return NextResponse.json({ ok: false }, { status: 400 });

  try {
    if (f.formulaire === "guide") {
      const list = Number(process.env.BREVO_LIST_GUIDE);
      const ok = list > 0 && (await saveContact(apiKey, f.email, list, { FIRSTNAME: f.prenom || "" }));
      return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
    }

    // demande de diagnostic : l'alerte e-mail est ce qui compte, la fiche contact est un plus
    const sent = await notifySamuel(apiKey, f);
    const list = Number(process.env.BREVO_LIST_CONTACT);
    if (list > 0) {
      const [first, ...rest] = (f.name || "").split(" ");
      await saveContact(apiKey, f.email, list, { FIRSTNAME: first, LASTNAME: rest.join(" ") }).catch(() => false);
    }
    return NextResponse.json({ ok: sent }, { status: sent ? 200 : 502 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
