"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { House, Buildings, Church } from "@phosphor-icons/react";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" ref={ref} className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#19A7CE] font-semibold text-sm uppercase tracking-widest mb-3">
            O que fazemos
          </p>
          <h2 className="text-4xl font-extrabold text-[#0B2447]">
            Servicos de limpeza
            <br />
            para cada necessidade
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-[#0B2447] rounded-3xl p-8 flex flex-col justify-between min-h-[320px]"
          >
            <House size={48} className="text-[#19A7CE]" weight="duotone" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Limpeza Residencial
              </h3>
              <p className="text-[#A5D7E8] leading-relaxed">
                Sua casa limpa e organizada com profissionais treinados, produtos de
                qualidade inclusos e atendimento personalizado. Agendamento semanal
                ou mensal conforme sua rotina.
              </p>
            </div>
          </motion.div>

          {/* Small card: Comercial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-[#F0F7FF] rounded-3xl p-8 flex flex-col justify-between group hover:bg-[#19A7CE] transition-colors duration-300"
          >
            <Buildings
              size={40}
              className="text-[#0B2447] group-hover:text-white transition-colors"
              weight="duotone"
            />
            <div>
              <h3 className="text-xl font-bold text-[#0B2447] group-hover:text-white transition-colors mb-2">
                Limpeza Comercial
              </h3>
              <p className="text-[#0B2447]/70 group-hover:text-white/80 transition-colors text-sm">
                Equipamentos modernos, limpeza pesada e atendimento emergencial para
                o seu negocio.
              </p>
            </div>
          </motion.div>

          {/* Small card: Igrejas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 bg-[#19A7CE] rounded-3xl p-8 flex flex-col justify-between"
          >
            <Church size={40} className="text-white" weight="duotone" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Limpeza em Igrejas
              </h3>
              <p className="text-white/80 text-sm">
                Cuidado especial e respeito ao espaco sagrado, com relatorios de
                acompanhamento e equipe dedicada.
              </p>
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 bg-[#F0F7FF] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-[#0B2447] font-semibold text-lg">
              Nao sabe qual servico precisa?
            </p>
            <a
              href="https://wa.me/5521999937262"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#0B2447] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#19A7CE] transition-colors"
            >
              Fale com a gente
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
