"use client";

import { motion } from "motion/react";
import { WhatsappLogo, ArrowRight } from "@phosphor-icons/react";

const visualCards = [
  { label: "Residencial", icon: "🏠" },
  { label: "Comercial", icon: "🏢" },
  { label: "Igrejas", icon: "⛪" },
  { label: "Qualificados", icon: "✅" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0B2447] overflow-hidden flex items-center pt-16">
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#19A7CE] rounded-full blur-3xl opacity-5 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#19A7CE] rounded-full blur-3xl opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[3fr_2fr] gap-12 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-[#19A7CE]/20 text-[#A5D7E8] text-sm font-medium px-4 py-2 rounded-full mb-6 border border-[#19A7CE]/30">
            <span className="w-2 h-2 bg-[#19A7CE] rounded-full animate-pulse" />
            Rio de Janeiro e regiao
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Chamou?
            <br />
            <span className="text-[#19A7CE]">Limpou!</span>
          </h1>

          <p className="text-[#A5D7E8] text-lg leading-relaxed mb-10 max-w-lg">
            O padrao de limpeza que transforma seu espaco. Profissionais
            qualificados, equipamentos modernos e atendimento personalizado para
            sua casa, empresa ou igreja.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5521999937262"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#19A7CE] text-white font-semibold px-7 py-4 rounded-2xl hover:bg-[#1490b5] transition-all hover:scale-105 active:scale-100"
            >
              <WhatsappLogo size={20} weight="fill" />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all"
            >
              Conhecer servicos
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="bg-gradient-to-br from-[#19A7CE]/30 to-[#0B2447] rounded-3xl border border-[#19A7CE]/20 p-8 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {visualCards.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-white text-sm font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#19A7CE] rounded-xl p-4">
              <div className="text-white font-bold text-lg">1.000+ clientes</div>
              <div className="text-white/80 text-sm">
                satisfeitos em todo o RJ
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
