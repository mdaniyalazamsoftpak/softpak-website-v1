import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="mx-auto max-w-canvas px-[72px] py-32">
        <h1 className="text-hero font-bold text-brand-dark capitalize">
          about
        </h1>
        <p className="mt-6 text-[18px] text-brand-bodyText max-w-[600px]">
          This page is scaffolded. Build it from its matching Figma SVG following the same component patterns used on the home page.
        </p>
      </section>
      <Footer />
    </main>
  );
}
