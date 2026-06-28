"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { WhatsappLogo, ArrowUpRight } from "@phosphor-icons/react";
import MagneticButton from "./MagneticButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-[#FBFBFA] pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center">
        {/* Texto */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 text-[#0B2447]/60 text-xs font-semibold uppercase tracking-[0.18em] mb-7"
          >
            <span className="w-6 h-px bg-[#19A7CE]" />
            Limpeza profissional no Rio de Janeiro
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease }}
            className="font-serif text-[#0B2447] text-5xl lg:text-7xl leading-[0.98] tracking-[-0.02em] mb-6"
          >
            Chamou?
            <br />
            <span className="italic text-[#19A7CE]">Limpou.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="text-[#14233B]/70 text-lg leading-relaxed max-w-md mb-9"
          >
            O padrao de limpeza que transforma seu espaco. Equipe qualificada,
            produtos inclusos e atendimento sob medida para a sua casa, empresa ou
            igreja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="https://wa.me/5521999937262"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#0B2447] text-white font-semibold pl-6 pr-2 py-2 rounded-full transition-colors hover:bg-[#19A7CE]"
            >
              Pedir orcamento
              <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15 transition-transform group-hover:rotate-12">
                <WhatsappLogo size={18} weight="fill" />
              </span>
            </MagneticButton>
            <a
              href="#servicos"
              className="inline-flex items-center gap-1.5 text-[#0B2447] font-semibold hover:text-[#19A7CE] transition-colors"
            >
              Ver servicos
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative"
        >
          <div className="rounded-[28px] p-2 bg-white border border-[#0B2447]/8 shadow-[0_24px_60px_-24px_rgba(11,36,71,0.35)]">
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
                alt="Profissional de limpeza higienizando uma superficie com equipamento adequado"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Cartao flutuante discreto */}
          <motion.div
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 bg-white rounded-2xl border border-[#0B2447]/8 shadow-[0_12px_30px_-12px_rgba(11,36,71,0.3)] px-5 py-4"
          >
            <p className="font-serif text-2xl text-[#0B2447] leading-none">1.000+</p>
            <p className="text-[#14233B]/60 text-xs mt-1">clientes satisfeitos</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
