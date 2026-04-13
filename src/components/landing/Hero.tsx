"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconBrain,
  IconHeart,
  IconPhone,
  IconStethoscope,
  IconShield
} from "@/components/icons";
import { Button } from "@/components/ui/Button";

/** 
 * High-quality health/tech team visual for the bottom 
 * In a real project, this would be a transparent PNG.
 */
const TEAM_IMAGE = "/5a0bc5417a14f00d48be9e9220548ab73e79996d9199a5925e08c278a766385c.png";

const topIcons = [
  IconBrain,
  IconStethoscope,
  IconPhone,
  IconHeart,
  IconShield,
];

export function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-end overflow-hidden bg-[#2D5A27]">
      {/* Immersive Full-Screen Background - Shifted Down */}
      <div className="absolute inset-0 z-0">
        <Image
          src={TEAM_IMAGE}
          alt="Diverse 3D medical team"
          fill
          className="object-cover object-bottom opacity-95 transition-all duration-1000"
          priority
          quality={100}
        />
        {/* Balanced Overlay for Typo Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D5A27]/40 via-transparent to-[#2D5A27]/60" />
      </div>

      {/* Content Layer - Massive Typo */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Main Title - Premium Condensed Look */}
          <div className="relative mb-8 text-center">
            <h1 className="flex flex-col items-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <span className="block text-[clamp(2.5rem,10vw,4.5rem)] font-black uppercase leading-[1] tracking-[-0.03em] [font-stretch:condensed]">
                AI-Symptom
              </span>
              <span className="mt-1 block text-[clamp(2.5rem,10vw,4.5rem)] font-black uppercase leading-[1] tracking-[-0.03em] [font-stretch:condensed]">
                Tracker
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-balance text-center text-base font-bold leading-relaxed text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)] sm:text-lg lg:text-xl"
          >
            Experience the next generation of patient guidance.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
