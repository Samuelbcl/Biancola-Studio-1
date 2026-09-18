import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: "#2563EB" }}>
          Erreur 404
        </p>
        <h1 className="mb-4 text-4xl font-bold text-dark md:text-6xl">
          Page introuvable
        </h1>
        <p className="mb-8 max-w-md text-gray-500">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Retour à l&apos;accueil
        </a>
      </main>
      <Footer />
    </>
  );
}
