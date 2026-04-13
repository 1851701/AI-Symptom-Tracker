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
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Key capabilities"
            title="Everything in one focused platform"
            description="CareBridge brings tracking and guidance together—designed to fit naturally into your daily life."
          />
        </FadeIn>

        <div className="mt-20 flex flex-col gap-16 lg:gap-24">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div
                className={cn(
                  "group relative flex flex-col items-center gap-12 lg:flex-row lg:gap-20",
                  i % 2 !== 0 && "lg:flex-row-reverse"
                )}
              >
                {/* Visual Side */}
                <div className="relative w-full lg:w-1/2">
                  <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-[#2D5A27]/5 p-2 ring-1 ring-[#2D5A27]/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:ring-[#2D5A27]/20">
                    <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                      <Image
                        src={`/feature-${i + 1}.png`}
                        alt={f.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 560px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D5A27]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                  {/* Decorative background element */}
                  <div 
                    aria-hidden 
                    className={cn(
                      "absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#2D5A27]/10 via-transparent to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60",
                      i % 2 !== 0 && "from-transparent to-[#2D5A27]/10"
                    )} 
                  />
                </div>

                {/* Content Side */}
                <div className="flex w-full flex-col lg:w-1/2">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[#2D5A27]/5 text-[#2D5A27] transition-all duration-300 group-hover:bg-[#2D5A27] group-hover:text-white group-hover:shadow-xl group-hover:shadow-[#2D5A27]/20">
                    <span className="text-lg font-black">{i + 1}</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-[#2D5A27] [font-stretch:condensed] sm:text-4xl">
                    {f.title}
                  </h3>
                  <p className="mt-6 text-pretty text-lg font-medium leading-relaxed text-[#2D5A27]/70 lg:text-xl">
                    {f.body}
                  </p>
                  <div className="mt-10 flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-[#2D5A27]">
                    <div className="h-px flex-1 bg-[#2D5A27]/20" />
                    <span>Capability {i + 1}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
