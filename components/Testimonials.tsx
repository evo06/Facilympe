"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    name: "Ana Lima",
    role: "Cliente residencial",
    text: "Servico impecavel. Minha casa ficou brilhando e a equipe foi super cuidadosa.",
  },
  {
    name: "Carlos Mendes",
    role: "Empresa comercial",
    text: "Profissionais pontuais e dedicados. O escritorio nunca esteve tao apresentavel.",
  },
  {
    name: "Pastor Roberto",
    role: "Igreja",
    text: "Cuidaram do nosso templo com respeito e capricho. Trabalho excelente.",
  },
  {
    name: "Marcia Santos",
    role: "Cliente residencial",
    text: "Atendimento rapido e resultado perfeito. Contratei o plano semanal e adorei.",
  },
  {
    name: "Felipe Torres",
    role: "Empresa comercial",
    text: "Equipamentos modernos e equipe muito treinada. Recomendo para qualquer empresa.",
  },
  {
    name: "Silvia Nunes",
    role: "Cliente residencial",
    text: "Qualidade e profissionalismo desde o primeiro contato.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="depoimentos" ref={ref} className="bg-[#FBFBFA] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[#19A7CE] text-xs font-semibold uppercase tracking-[0.18em]">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0B2447] tracking-[-0.02em] mt-4 leading-[1.05]">
            Quem confia,
            <br />
            recomenda
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="break-inside-avoid mb-5 rounded-2xl border border-[#0B2447]/10 bg-white p-6"
            >
              <span className="font-serif text-4xl text-[#19A7CE] leading-none">
                &ldquo;
              </span>
              <blockquote className="text-[#14233B]/80 leading-relaxed mt-1 mb-5">
                {t.text}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-[#0B2447] text-white text-xs font-semibold">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#0B2447]">
                    {t.name}
                  </span>
                  <span className="block text-xs text-[#14233B]/50">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
