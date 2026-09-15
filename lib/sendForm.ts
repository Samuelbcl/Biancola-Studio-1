// Envoie un formulaire du site : d'abord vers la feuille Google (/api/formulaire),
// et si elle ne répond pas, vers Formspree comme avant, pour ne jamais perdre une demande.
const FORMSPREE = "https://formspree.io/f/xqegyljz";

export async function sendForm(form: HTMLFormElement, formulaire: "contact" | "guide"): Promise<boolean> {
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
    if (res.ok) return true;
  } catch {
    // on passe au secours
  }

  try {
    const res = await fetch(FORMSPREE, { method: "POST", body: data, headers: { Accept: "application/json" } });
    return res.ok;
  } catch {
    return false;
  }
}
