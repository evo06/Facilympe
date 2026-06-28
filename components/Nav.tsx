"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#servicos", label: "Servicos" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FBFBFA]/85 backdrop-blur-md border-b border-[#0B2447]/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl text-[#0B2447] tracking-tight">
          Facil<span className="italic text-[#19A7CE]">ymp</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-[#14233B]/80 hover:text-[#0B2447] transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#19A7CE] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5521999937262"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[#0B2447] border border-[#0B2447]/15 px-5 py-2 rounded-full hover:bg-[#0B2447] hover:text-white hover:border-[#0B2447] transition-colors"
        >
          Orcamento
        </a>
      </div>
    </nav>
  );
}
