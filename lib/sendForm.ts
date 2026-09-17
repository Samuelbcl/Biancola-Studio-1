// Envoie un formulaire du site : d'abord vers Brevo (/api/formulaire),
// et s'il ne répond pas, vers Formspree comme avant, pour ne jamais perdre une demande.
// « mail » indique que le guide a aussi été envoyé par e-mail.
const FORMSPREE = "https://formspree.io/f/xqegyljz";

export async function sendForm(
  form: HTMLFormElement,
  formulaire: "contact" | "guide",
): Promise<{ ok: boolean; mail: boolean }> {
  const data = new FormData(form);
  const fields: Record<string, string> = { formulaire, page: window.location.pathname };
  data.forEach((v, k) => {
    if (typeof v === "string") fields[k] = v;
  });

  try {
    const res = await fetch("/api/formulaire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    if (res.ok) {
      const body = await res.json().catch(() => ({}));
      return { ok: true, mail: body.mail === true };
    }
  } catch {
    // on passe au secours
  }

  try {
    const res = await fetch(FORMSPREE, { method: "POST", body: data, headers: { Accept: "application/json" } });
    return { ok: res.ok, mail: false };
  } catch {
    return { ok: false, mail: false };
  }
}
