import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-24">
      <FadeIn className="h-[700px] w-full">
        <div className="relative h-full w-full overflow-hidden bg-[#1E3B1A]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/Gemini_Generated_Image_cs4uqxcs4uqxcs4u.png"
                alt="Community of care"
                fill
                className="object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1608] via-transparent to-[#1E3B1A]/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-between py-16 px-8 text-center sm:px-14">
              <div className="flex-1 flex flex-col items-center justify-center">
                <span className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-white/80">
                  Connect with us
                </span>
                <h2 className="text-balance text-5xl font-black uppercase tracking-tight text-white [font-stretch:condensed] sm:text-7xl">
                  Ready to transform <br /> the patient experience?
                </h2>
                <p className="mx-auto mt-8 max-w-xl text-pretty text-xl font-medium leading-relaxed text-white/90">
                  Let's discuss how CareBridge can help you build a smarter, calmer, and more human healthcare journey.
                </p>
                
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                  <Button
                    href="mailto:hello@carebridge.com"
                    variant="minimal"
                    className="bg-white px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#2D5A27] shadow-3xl hover:bg-[#2D5A27] hover:text-white transition-all duration-500 scale-105"
                  >
                    Contact Me Now
                  </Button>
                </div>
              </div>

              {/* Integrated Footer */}
              <div className="w-full mt-auto flex flex-col items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex gap-8 text-xs font-black uppercase tracking-[0.2em] text-white/60">
                  <a href="#features" className="transition hover:text-white">Features</a>
                  <a href="#reviews" className="transition hover:text-white">Community</a>
                  <a href="#prototype" className="transition hover:text-white">Prototype</a>
                </div>
                <p className="text-xs font-medium text-white/40 uppercase tracking-widest">
                  © 2026 CareBridge. All rights reserved.
                </p>
              </div>
            </div>
          </div>
      </FadeIn>
    </section>
  );
}
