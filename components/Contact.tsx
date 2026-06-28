"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  WhatsappLogo,
  EnvelopeSimple,
  InstagramLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";
import MagneticButton from "./MagneticButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" ref={ref} className="bg-[#FBFBFA] pb-24 lg:pb-32 pt-4">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-[32px] bg-[#0B2447] px-8 py-16 lg:px-16 lg:py-20"
        >
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#19A7CE]/15 blur-2xl pointer-events-none" />

          <div className="relative max-w-2xl">
            <span className="text-[#A5D7E8] text-xs font-semibold uppercase tracking-[0.18em]">
              Fale com a gente
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl text-white tracking-[-0.02em] mt-4 mb-6 leading-[1.02]">
              Pronto para um espaco
              <span className="italic text-[#19A7CE]"> impecavel?</span>
            </h2>
            <p className="text-[#A5D7E8]/90 text-lg leading-relaxed mb-10 max-w-lg">
              Receba um orcamento personalizado, sem compromisso. A gente responde
              rapido e cuida do resto.
            </p>

            <MagneticButton
              href="https://wa.me/5521999937262"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#19A7CE] text-white font-semibold pl-7 pr-2 py-2.5 rounded-full hover:bg-white hover:text-[#0B2447] transition-colors"
            >
              Chamar no WhatsApp
              <span className="grid place-items-center w-10 h-10 rounded-full bg-white/20 transition-transform group-hover:rotate-12">
                <WhatsappLogo size={20} weight="fill" />
              </span>
            </MagneticButton>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-12 pt-10 border-t border-white/10">
              <a
                href="mailto:vendas@facilymp.com.br"
                className="group flex items-center gap-3 text-[#A5D7E8] hover:text-white transition-colors"
              >
                <EnvelopeSimple size={22} />
                <span>
                  <span className="block text-xs text-white/40">E-mail</span>
                  vendas@facilymp.com.br
                </span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.instagram.com/facilympoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[#A5D7E8] hover:text-white transition-colors"
              >
                <InstagramLogo size={22} />
                <span>
                  <span className="block text-xs text-white/40">Instagram</span>
                  @facilympoficial
                </span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
