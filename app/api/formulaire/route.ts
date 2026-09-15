import { NextResponse } from "next/server";

// Reçoit les formulaires du site (contact et guide) et les range dans la feuille Google de Samuel,
// via son script Apps Script. L'adresse du script est dans la variable Vercel FORMS_WEBHOOK_URL :
// tant qu'elle n'est pas définie, on répond 503 et le navigateur repasse par Formspree.
export async function POST(req: Request) {
  const webhook = process.env.FORMS_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ ok: false, reason: "non configuré" }, { status: 503 });

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // champ caché : seuls les robots le remplissent
  if (data._gotcha) return NextResponse.json({ ok: true });

  const email = String(data.email ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ ok: false }, { status: 400 });

  const fields = Object.fromEntries(
    Object.entries(data)
      .filter(([k]) => !k.startsWith("_"))
      .map(([k, v]) => [k, String(v ?? "").slice(0, 5000)]),
  );

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
      cache: "no-store",
    });
    const out = await res.json().catch(() => null);
    if (!res.ok || !out?.ok) return NextResponse.json({ ok: false }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
