import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-[#FBFBFA] border-t border-[#0B2447]/8 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-serif text-xl text-[#0B2447]">
            Facil<span className="italic text-[#19A7CE]">ymp</span>
          </span>
          <span className="text-[#14233B]/50 text-sm">
            &copy; {new Date().getFullYear()} Facilymp. Chamou? Limpou.
          </span>
        </div>
      </footer>
    </>
  );
}
