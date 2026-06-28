"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check } from "@phosphor-icons/react";

const plans = [
  {
    name: "Residencial",
    price: "149,99",
    period: "por semana",
    features: [
      "Produtos inclusos",
      "Profissional qualificado",
      "Atendimento personalizado",
      "Agendamento flexivel",
    ],
    cta: "Assinar plano",
    highlight: false,
  },
  {
    name: "Igreja",
    price: "199,99",
    period: "por dia / personalizado",
    features: [
      "Relatorios de acompanhamento",
      "Equipe dedicada",
      "Respeito ao espaco sagrado",
      "Frequencia ajustavel",
    ],
    cta: "Assinar plano",
    highlight: true,
  },
  {
    name: "Comercial",
    price: "299,99",
    period: "por contrato",
    features: [
      "Limpeza pesada",
      "Equipamentos modernos",
      "Atendimento emergencial",
      "Gerente de conta",
    ],
    cta: "Solicitar proposta",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="planos" ref={ref} className="bg-[#F0F7FF] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#19A7CE] font-semibold text-sm uppercase tracking-widest mb-3">
            Planos e precos
          </p>
          <h2 className="text-4xl font-extrabold text-[#0B2447]">
            Transparencia em
            <br />
            cada contrato
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`rounded-3xl p-8 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-[#0B2447] text-white shadow-2xl shadow-[#0B2447]/20 md:-mt-6"
                  : "bg-white text-[#0B2447]"
              }`}
            >
              {plan.highlight && (
                <span className="text-xs font-bold text-[#19A7CE] uppercase tracking-widest">
                  Mais procurado
                </span>
              )}

              <div>
                <p
                  className={`text-sm font-semibold mb-1 ${
                    plan.highlight ? "text-[#A5D7E8]" : "text-[#19A7CE]"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-extrabold">
                    R$ {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlight ? "text-white/60" : "text-[#0B2447]/50"
                  }`}
                >
                  {plan.period}
                </p>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check size={18} weight="bold" className="text-[#19A7CE] shrink-0" />
                    <span
                      className={
                        plan.highlight ? "text-white/80" : "text-[#0B2447]/70"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5521999937262"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center font-semibold py-3.5 rounded-xl transition-all ${
                  plan.highlight
                    ? "bg-[#19A7CE] text-white hover:bg-[#1490b5]"
                    : "bg-[#F0F7FF] text-[#0B2447] hover:bg-[#19A7CE] hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
