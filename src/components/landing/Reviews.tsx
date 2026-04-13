"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "CareBridge has completely changed how I track my symptoms. It's calm, clear, and actually helpful when I need guidance.",
    author: "Sarah J.",
    role: "Patient User",
  },
  {
    quote: "The interface is so readable. I never feel overwhelmed by medical jargon anymore. It's like having a clinical translator in my pocket.",
    author: "Michael R.",
    role: "Chronic Care Patient",
  },
  {
    quote: "Privacy was my biggest concern, but the transparent design and secure feel of this app gave me total peace of mind.",
    author: "Elena G.",
    role: "Healthcare Professional",
  },
  {
    quote: "It's the first health app that doesn't feel like a spreadsheet. It feels like a genuine partner in my recovery.",
    author: "David L.",
    role: "User",
  },
  {
    quote: "Incredible attention to detail. The focus on accessibility makes such a difference when you're feeling unwell.",
    author: "Sophie Q.",
    role: "Patient Advocate",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 py-24 sm:py-32 overflow-hidden bg-[#2D5A27]/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn>
          <SectionHeading
            eyebrow="Feedback"
            title="What our community says"
            description="Real stories from patients and professionals who have transformed their care experience."
          />
        </FadeIn>
      </div>

      <div className="relative flex overflow-hidden py-10">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -2120], // 5 cards * (400px + 24px gap) = 2120px
          }}
          transition={{
            duration: 30, // Adjust speed
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Multiply testimonials for seamless loop, at least 2 full sets needed + some extra */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex w-[400px] shrink-0 flex-col rounded-[2.5rem] border border-[#2D5A27]/10 bg-white p-10 shadow-sm transition-all hover:border-[#2D5A27]/30 hover:shadow-xl"
            >
              <div className="flex mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-[#2D5A27]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-base font-medium italic text-[#2D5A27]/80 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-8 border-t border-[#2D5A27]/10 pt-6">
                <p className="text-sm font-black uppercase tracking-widest text-[#2D5A27]">
                  {t.author}
                </p>
                <p className="mt-1 text-xs font-medium text-[#2D5A27]/60 uppercase tracking-wider">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for the fade out effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#2D5A27]/5 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#2D5A27]/5 to-transparent z-10" />
      </div>
    </section>
  );
}
