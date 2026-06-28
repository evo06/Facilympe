"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-[#0B2447] font-extrabold text-xl tracking-tight">
          Facil<span className="text-[#19A7CE]">ymp</span>
        </span>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className="text-sm font-medium text-[#0B2447] hover:text-[#19A7CE] transition-colors"
          >
            Servicos
          </a>
          <a
            href="#planos"
            className="text-sm font-medium text-[#0B2447] hover:text-[#19A7CE] transition-colors"
          >
            Planos
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-[#0B2447] hover:text-[#19A7CE] transition-colors"
          >
            Contato
          </a>
        </div>

        <a
          href="https://wa.me/5521999937262"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0B2447] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#19A7CE] transition-colors"
        >
          Pedir Orcamento
        </a>
      </div>
    </nav>
  );
}
