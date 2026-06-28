"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { WhatsappLogo, EnvelopeSimple, InstagramLogo } from "@phosphor-icons/react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" ref={ref} className="bg-[#0B2447] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#19A7CE] font-semibold text-sm uppercase tracking-widest mb-4">
            Fale conosco
          </p>
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Pronto para um
            <br />
            espaco impecavel?
          </h2>
          <p className="text-[#A5D7E8] text-lg mb-10 max-w-xl mx-auto">
            Entre em contato agora mesmo e receba um orcamento personalizado sem
            compromisso.
          </p>

          <a
            href="https://wa.me/5521999937262"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#19A7CE] text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-[#1490b5] transition-all hover:scale-105 active:scale-100 mb-12"
          >
            <WhatsappLogo size={28} weight="fill" />
            Chamar no WhatsApp
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-[#A5D7E8]">
            <a
              href="mailto:vendas@facilymp.com.br"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <EnvelopeSimple size={20} />
              vendas@facilymp.com.br
            </a>
            <a
              href="https://www.instagram.com/facilympoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <InstagramLogo size={20} />
              @facilympoficial
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
