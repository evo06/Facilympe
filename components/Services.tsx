"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    name: "Limpeza Residencial",
    desc: "Sua casa impecavel com profissionais treinados, produtos inclusos e agendamento semanal ou mensal conforme a sua rotina.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80",
    alt: "Sala de estar limpa e organizada apos servico de limpeza residencial",
    span: "lg:col-span-3",
    tall: true,
  },
  {
    name: "Limpeza Comercial",
    desc: "Equipamentos modernos, limpeza pesada e atendimento emergencial para o seu negocio funcionar sempre apresentavel.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    alt: "Escritorio comercial limpo e bem cuidado",
    span: "lg:col-span-2",
    tall: false,
  },
  {
    name: "Limpeza em Igrejas",
    desc: "Cuidado especial e respeito ao espaco sagrado, com equipe dedicada e relatorios de acompanhamento.",
    img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80",
    alt: "Interior de igreja limpo e bem conservado",
    span: "lg:col-span-2",
    tall: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" ref={ref} className="bg-[#FBFBFA] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mb-14"
        >
          <span className="text-[#19A7CE] text-xs font-semibold uppercase tracking-[0.18em]">
            O que fazemos
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#0B2447] tracking-[-0.02em] mt-4 leading-[1.05]">
            Um servico para cada
            <br />
            tipo de espaco
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 + i * 0.1, ease }}
              className={`group relative overflow-hidden rounded-3xl ${s.span} ${
                s.tall ? "min-h-[440px]" : "min-h-[320px]"
              }`}
            >
              <Image
                src={s.img}
                alt={s.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2447] via-[#0B2447]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-serif text-2xl text-white mb-2">{s.name}</h3>
                <p className="text-white/75 text-sm leading-relaxed max-w-sm">
                  {s.desc}
                </p>
              </div>
              <span className="absolute top-5 right-5 grid place-items-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm text-white opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight size={18} />
              </span>
            </motion.article>
          ))}

          {/* Faixa CTA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.42, ease }}
            className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-[#0B2447]/10 bg-white px-8 py-7"
          >
            <p className="font-serif text-xl text-[#0B2447] text-center sm:text-left">
              Tem uma necessidade diferente? A gente monta um plano sob medida.
            </p>
            <a
              href="https://wa.me/5521999937262"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-[#0B2447] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#19A7CE] transition-colors"
            >
              Falar com a equipe
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
