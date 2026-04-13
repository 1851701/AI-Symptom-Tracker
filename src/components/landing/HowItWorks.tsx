import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerItem, StaggerReveal } from "@/components/motion/StaggerReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard } from "@/components/ui/MotionCard";

const steps = [
  {
    step: "01",
    title: "Track symptoms",
    copy: "Capture how you feel with structured prompts—no medical jargon required.",
  },
  {
    step: "02",
    title: "Review insights",
    copy: "See patterns and context so changes feel understandable, not alarming.",
  },
  {
    step: "03",
    title: "Take the next step",
    copy: "Move forward with calm guidance on self-care, monitoring, or reaching out.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white/60 py-24 backdrop-blur-sm sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Flow"
            title="A simple rhythm for calmer decisions"
            description="Three clear stages help patients stay grounded—from first symptom to confident action."
          />
        </FadeIn>

        <StaggerReveal className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              <MotionCard className="flex h-full flex-col bg-gradient-to-b from-white to-[#2D5A27]/5 p-8 transition-all hover:border-[#2D5A27]/30 hover:shadow-lg hover:shadow-[#2D5A27]/5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D5A27]">
                  {s.step}
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-[#2D5A27] [font-stretch:condensed]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-base font-medium leading-relaxed text-[#2D5A27]/70">
                  {s.copy}
                </p>
                <div
                  aria-hidden
                  className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#2D5A27]/20 to-transparent lg:hidden"
                />
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
