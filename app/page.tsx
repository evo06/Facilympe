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
      <footer className="bg-[#0B2447] border-t border-white/10 py-6 text-center text-[#A5D7E8]/50 text-sm font-sans">
        &copy; {new Date().getFullYear()} Facilymp. Todos os direitos reservados.
      </footer>
    </>
  );
}
