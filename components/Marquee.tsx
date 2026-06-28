"use client";

const items = [
  "Limpeza Residencial",
  "Limpeza Comercial",
  "Limpeza em Igrejas",
  "Produtos inclusos",
  "Profissionais qualificados",
  "Atendimento emergencial",
];

export default function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="bg-[#0B2447] py-4 overflow-hidden">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center text-[#A5D7E8] text-sm font-medium uppercase tracking-[0.16em]"
          >
            {item}
            <span className="mx-6 w-1.5 h-1.5 rounded-full bg-[#19A7CE]" />
          </span>
        ))}
      </div>
    </div>
  );
}
