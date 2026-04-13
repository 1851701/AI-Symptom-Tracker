import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2D5A27]">
              About CareBridge
            </p>
            <h2 className="mt-3 text-balance text-4xl font-black uppercase tracking-tight text-[#2D5A27] [font-stretch:condensed] sm:text-5xl">
              A patient experience platform built for real-world care.
            </h2>
            <p className="mt-5 text-pretty font-normal leading-relaxed text-slate-600">
              We combine thoughtful design with AI-assisted guidance so people can
              understand symptoms without noise—while keeping clinicians and patients
              aligned on what matters next.
            </p>
            <p className="mt-4 text-pretty font-normal leading-relaxed text-slate-600">
              Every screen is tuned for readability, accessibility, and calm pacing,
              because health decisions deserve clarity—not clutter.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative mx-auto max-w-sm lg:max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#2D5A27]/20 via-white to-slate-100 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-28px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/70">
                <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
                  <Image
                    src={ABOUT_IMAGE}
                    alt="Medical professionals collaborating"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
