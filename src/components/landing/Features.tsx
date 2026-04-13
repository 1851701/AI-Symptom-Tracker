import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerItem, StaggerReveal } from "@/components/motion/StaggerReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard } from "@/components/ui/MotionCard";
import { cn } from "@/lib/cn";

const TEAM_IMAGE = "/5a0bc5417a14f00d48be9e9220548ab73e79996d9199a5925e08c278a766385c.png";

const features: {
  title: string;
  body: string;
  highlight?: boolean;
}[] = [
  {
    title: "Clear next steps",
    body: "Guidance you can act on, designed to keep your health journey moving forward.",
  },
  {
    title: "AI assisted guidance",
    body: "Intelligent support without the noise, helping you understand symptoms clearly.",
    highlight: true,
  },
  {
    title: "Designed for accessibility",
    body: "A readable, low-friction UI that makes tracking simple for everyone.",
  },
  {
    title: "Privacy minded",
    body: "Built with discretion and modern safeguards to protect your personal information.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-32 sm:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-[#2D5A27]">
                Modern Care Systems
              </p>
              <h2 className="mt-6 text-balance text-5xl font-black uppercase leading-[0.9] tracking-tighter text-[#2D5A27] [font-stretch:condensed] sm:text-7xl">
                Everything in one focused platform
              </h2>
            </div>
            <p className="mt-8 max-w-md text-pretty text-lg font-medium leading-relaxed text-[#2D5A27]/60 lg:mt-0">
              CareBridge combines clinical precision with an editorial design focus—bringing intelligence and clarity to every health interaction.
            </p>
          </div>
        </FadeIn>

        <div className="mt-32 flex flex-col gap-32 lg:gap-56">
          {features.map((f, i) => (
            <div key={f.title} className="relative">
              {/* Background accent line or element */}
              <div 
                className={cn(
                  "absolute -top-16 block h-px w-24 bg-[#2D5A27]/20",
                  i % 2 === 0 ? "left-0" : "right-0"
                )} 
              />
              
              <FadeIn delay={0.1} viewPortOnce>
                <div
                  className={cn(
                    "group grid items-center gap-16 lg:grid-cols-12 lg:gap-24",
                    i % 2 !== 0 && "lg:direction-reverse"
                  )}
                >
                  {/* Visual Side */}
                  <div className={cn(
                    "lg:col-span-7",
                    i % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                  )}>
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#2D5A27]/5 transition-all duration-700 group-hover:bg-[#2D5A27]/10">
                      <Image
                        src={`/feature-${i + 1}.png`}
                        alt={f.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 800px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#2D5A27]/10 via-transparent to-transparent mix-blend-multiply transition-opacity group-hover:opacity-60" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={cn(
                    "lg:col-span-5",
                    i % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                  )}>
                    <div className={cn(
                      "flex flex-col",
                      i % 2 !== 0 ? "lg:items-end lg:text-right" : ""
                    )}>
                      <span className="text-4xl font-black text-[#2D5A27]/10 [font-stretch:condensed]">
                        0{i + 1}
                      </span>
                      <h3 className="mt-4 text-3xl font-black uppercase tracking-tight text-[#2D5A27] [font-stretch:condensed] sm:text-5xl">
                        {f.title}
                      </h3>
                      <p className="mt-8 text-pretty text-xl font-medium leading-relaxed text-[#2D5A27]/70">
                        {f.body}
                      </p>
                      
                      <div className={cn(
                        "mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#2D5A27]/40",
                        i % 2 !== 0 ? "flex-row-reverse" : ""
                      )}>
                        <div className="h-px w-12 bg-[#2D5A27]/20" />
                        <span>System Capability</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
