"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const plans = [
  {
    name: "Residencial",
    price: "149,99",
    period: "por semana",
    features: [
      "Produtos de limpeza inclusos",
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
    period: "diaria ou personalizada",
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
      "Limpeza pesada inclusa",
      "Equipamentos modernos",
      "Atendimento emergencial",
      "Gerente de conta dedicado",
    ],
    cta: "Solicitar proposta",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="planos" ref={ref} className="bg-white py-24 lg:py-32 border-y border-[#0B2447]/8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[#19A7CE] text-xs font-semibold uppercase tracking-[0.18em]">
            Planos e precos
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0B2447] tracking-[-0.02em] mt-4 leading-[1.05]">
            Transparencia em
            <br />
            cada contrato
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className={`flex flex-col gap-7 rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-[#0B2447] text-white shadow-[0_30px_70px_-30px_rgba(11,36,71,0.55)] md:-translate-y-3"
                  : "bg-[#FBFBFA] text-[#0B2447] border border-[#0B2447]/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <p
                  className={`text-sm font-semibold ${
                    plan.highlight ? "text-[#A5D7E8]" : "text-[#19A7CE]"
                  }`}
                >
                  {plan.name}
                </p>
                {plan.highlight && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] bg-[#19A7CE] text-white px-3 py-1 rounded-full">
                    Mais procurado
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-medium opacity-60">R$</span>
                  <span className="font-serif text-5xl leading-none">
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    plan.highlight ? "text-white/55" : "text-[#14233B]/50"
                  }`}
                >
                  {plan.period}
                </p>
              </div>

              <ul className="space-y-3.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={18}
                      weight="bold"
                      className="text-[#19A7CE] shrink-0 mt-0.5"
                    />
                    <span
                      className={
                        plan.highlight ? "text-white/80" : "text-[#14233B]/75"
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
                className={`text-center font-semibold py-3.5 rounded-full transition-colors ${
                  plan.highlight
                    ? "bg-[#19A7CE] text-white hover:bg-[#A5D7E8] hover:text-[#0B2447]"
                    : "bg-[#0B2447] text-white hover:bg-[#19A7CE]"
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
