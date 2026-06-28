"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Ana Lima",
    text: "Servico impecavel! Minha casa ficou brilhando. Vou indicar para todos os amigos.",
    role: "Cliente residencial",
  },
  {
    name: "Carlos Mendes",
    text: "Profissionais pontuais e muito dedicados. O escritorio ficou limpissimo e cheio de vida.",
    role: "Empresa comercial",
  },
  {
    name: "Pastor Roberto",
    text: "Cuidaram da nossa igreja com muito respeito e capricho. Excelente trabalho!",
    role: "Igreja cliente",
  },
  {
    name: "Marcia Santos",
    text: "Atendimento rapido e resultado perfeito. Contratei o plano semanal e nao me arrependo.",
    role: "Cliente residencial",
  },
  {
    name: "Felipe Torres",
    text: "Equipamentos modernos e equipe muito treinada. Recomendo sem hesitar para qualquer empresa.",
    role: "Empresa comercial",
  },
  {
    name: "Silvia Nunes",
    text: "Qualidade e profissionalismo desde o primeiro contato. Top demais!",
    role: "Cliente residencial",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#19A7CE] font-semibold text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="text-4xl font-extrabold text-[#0B2447]">
            O que nossos
            <br />
            clientes dizem
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid mb-4 bg-[#F0F7FF] rounded-2xl p-6"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} weight="fill" className="text-[#19A7CE]" />
                ))}
              </div>
              <p className="text-[#0B2447] text-sm leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-[#0B2447] text-sm">{t.name}</p>
                <p className="text-[#0B2447]/50 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
