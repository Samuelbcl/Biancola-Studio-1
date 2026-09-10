import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import SolutionDetail from "@/components/sections/SolutionDetail";
import { getSolution } from "@/content/solutions";
import { serviceJsonLd } from "@/lib/seo";

const SLUG = "creation-site-internet-liege";
const solution = getSolution(SLUG)!;

export const metadata: Metadata = {
  title: solution.seo.title,
  description: solution.seo.description,
  alternates: { canonical: solution.href },
};

export default function SitesWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(solution)) }}
      />
      <Header />
      <main className="pt-20">
        <SolutionDetail slug={SLUG} />
      </main>
      <Footer />
    </>
  );
}
