"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type Props = {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function Counter({
  target,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;

    const format = (v: number) =>
      `${prefix}${Math.round(v).toLocaleString("pt-BR")}${suffix}`;

    if (reduced) {
      el.textContent = format(target);
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, target, prefix, suffix, duration, reduced]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
