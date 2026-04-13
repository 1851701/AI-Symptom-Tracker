"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundParallax() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f0f7ff_0%,#f8fafc_45%,#f1f5f9_100%)]" />
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-24 top-32 h-[420px] w-[420px] rounded-full bg-sky-200/35 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-20 top-1/3 h-[380px] w-[380px] rounded-full bg-blue-100/40 blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/3 h-[320px] w-[320px] rounded-full bg-slate-200/50 blur-3xl"
      />
      <div className="absolute right-[12%] top-[18%] h-40 w-40 rounded-full bg-sky-100/60 blur-2xl" />
    </div>
  );
}
