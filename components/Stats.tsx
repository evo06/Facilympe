"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Counter from "./Counter";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { target: 1000, suffix: "+", label: "Clientes satisfeitos" },
  { target: 100, suffix: "%", label: "Profissionais qualificados" },
  { target: 3, suffix: "", label: "Tipos de servico" },
  { target: 24, suffix: "h", label: "Atendimento emergencial" },
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
              <Counter target={stat.target} suffix={stat.suffix} />
            </div>
            <div className="text-[#14233B]/60 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
