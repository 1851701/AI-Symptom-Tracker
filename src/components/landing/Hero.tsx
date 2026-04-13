"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

/** Atmospheric healthcare photography — not a UI screenshot */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80";

const heroStats = [
  { value: "20+", label: "Care pathways" },
  { value: "95%", label: "Clarity rate" },
  { value: "5,000+", label: "Guided check-ins" },
  { value: "10+", label: "Health systems" },
] as const;

export function Hero() {
  return (
    <section className="relative pb-10 pt-20 sm:pb-14 sm:pt-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_100px_-40px_rgba(14,116,144,0.35)] ring-1 ring-slate-200/60"
        >
          <div className="relative min-h-[min(520px,78vh)] w-full sm:min-h-[560px]">
            <Image
              src={HERO_IMAGE}
              alt="Care team supporting a patient in a calm clinical setting"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/55 to-slate-900/20 sm:from-slate-950/88 sm:via-slate-900/45"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-12">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/95">
                  AI symptom intelligence
                </p>
                <h1 className="mt-4 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                  Compassionate guidance, exceptional clarity.
                </h1>
                <p className="mt-4 max-w-lg text-pretty text-base font-normal leading-relaxed text-white/85 sm:text-lg">
                  CareBridge helps patients understand symptoms, organize health
                  information, and take the right next step—with calm, trustworthy
                  AI support.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="#prototype" variant="onDarkPrimary">
                    View prototype
                  </Button>
                  <Button href="#features" variant="onDarkSecondary">
                    See features
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 w-full rounded-2xl border border-white/25 bg-white/12 px-4 py-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-6 sm:py-5"
              >
                <div className="grid grid-cols-2 gap-4 divide-x divide-white/20 sm:grid-cols-4">
                  {heroStats.map((s) => (
                    <div key={s.label} className="px-2 text-center first:pl-0 sm:px-4">
                      <p className="text-2xl font-semibold tabular-nums tracking-tight text-white sm:text-[1.65rem]">
                        {s.value}
                      </p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
