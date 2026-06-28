"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "1.000+", label: "Clientes satisfeitos" },
  { value: "100%", label: "Profissionais qualificados" },
  { value: "3", label: "Tipos de servico" },
  { value: "24h", label: "Atendimento emergencial" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#FBFBFA] border-y border-[#0B2447]/8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#0B2447]/8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease }}
            className="px-4 py-10 text-center first:pl-0 lg:px-8"
          >
            <div className="font-serif text-4xl lg:text-5xl text-[#0B2447] leading-none mb-2">
              {stat.value}
            </div>
            <div className="text-[#14233B]/60 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
