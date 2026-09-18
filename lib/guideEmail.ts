import { BASE_URL } from "@/lib/seo";

// E-mail envoyé à chaque inscription au guide. Les liens restent dans la boîte mail :
// depuis l'appli Gmail ou Mail, le PDF s'ouvre dans le vrai navigateur, contrairement à TikTok ou Instagram.

const FR = `${BASE_URL}/guides/guide-motion-design-claude-code-fr.pdf`;
const EN = `${BASE_URL}/guides/guide-motion-design-claude-code-en.pdf`;

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function guideEmail(prenom = "") {
  const name = prenom.trim().slice(0, 40);
  const hello = name ? `Salut ${name.charAt(0).toUpperCase()}${name.slice(1)},` : "Salut,";
  const text = "font-size:16px;line-height:1.6;color:#334155";

  const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ton guide motion design</title></head>
<body style="margin:0;padding:0;background:#eef2f7">
<div style="display:none;max-height:0;overflow:hidden">Ton lien pour ouvrir le guide, en français et en anglais.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7">
<tr><td align="center" style="padding:24px 12px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;color:#0f1729">
    <tr><td style="background:#0b1120"><a href="${FR}"><img src="${BASE_URL}/guides/email-guide.jpg" width="560" alt="Le guide motion design avec Claude Code" style="display:block;width:100%;max-width:560px;height:auto;border:0"></a></td></tr>
    <tr><td style="padding:30px 28px 6px">
      <p style="margin:0 0 8px;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;color:#2563eb">Guide gratuit</p>
      <h1 style="margin:0 0 18px;font-size:26px;line-height:1.2;color:#0f1729">Le motion design avec Claude Code</h1>
      <p style="margin:0 0 12px;${text}">${escapeHtml(hello)}</p>
      <p style="margin:0;${text}">Voici ton guide, comme promis. Garde cet e-mail&nbsp;: le lien marche à tout moment, sur ton téléphone comme sur ton ordinateur.</p>
    </td></tr>
    <tr><td align="center" style="padding:26px 28px 6px">
      <a href="${FR}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-size:16px;font-weight:bold;padding:15px 32px;border-radius:999px">Ouvrir le guide</a>
      <p style="margin:16px 0 0;font-size:14px;color:#64748b">English version: <a href="${EN}" style="color:#2563eb;font-weight:bold">open the guide</a></p>
    </td></tr>
    <tr><td style="padding:28px 28px 32px">
      <p style="margin:0;${text}">Une question en le suivant&nbsp;? Réponds simplement à cet e-mail.</p>
      <p style="margin:18px 0 0;${text}">Samuel<br><span style="color:#64748b">Biancola Studio · Liège</span></p>
    </td></tr>
  </table>
  <p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#94a3b8">Tu reçois cet e-mail parce que tu as demandé le guide sur biancolastudio.com.</p>
</td></tr>
</table>
</body></html>`;

  const plain = `${hello}

Voici ton guide, comme promis. Garde cet e-mail : le lien marche à tout moment.

Ouvrir le guide (français) : ${FR}
English version: ${EN}

Une question en le suivant ? Réponds simplement à cet e-mail.

Samuel
Biancola Studio · Liège`;

  return { subject: "Ton guide : le motion design avec Claude Code", html, text: plain };
}
