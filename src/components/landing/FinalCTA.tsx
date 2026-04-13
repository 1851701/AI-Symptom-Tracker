import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-24 pb-24">
      <FadeIn className="h-[600px] w-full">
        <div className="relative h-full w-full overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/contact-hero.jpg"
                alt="Community and stages"
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center sm:px-14">
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
                <Link
                  href="#prototype"
                  className="group flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:gap-5"
                >
                  View Interactive Prototype
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
      </FadeIn>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-10 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} CareBridge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#features" className="transition hover:text-[#2D5A27]">
              Features
            </a>
            <a href="#ai" className="transition hover:text-[#2D5A27]">
              AI
            </a>
            <a href="mailto:hello@carebridge.com" className="transition hover:text-[#2D5A27]">
              Privacy
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
