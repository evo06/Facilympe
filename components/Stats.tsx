"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

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
    <section ref={ref} className="bg-[#19A7CE] py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-extrabold text-white mb-1">
              {stat.value}
            </div>
            <div className="text-white/80 text-sm font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
