import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard } from "@/components/ui/MotionCard";

export function Principles() {
  return (
    <section id="principles" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Design principles"
            title="Built to be easy on patients—and easy to trust"
          />
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <MotionCard className="h-full p-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Accessibility & readability
              </h3>
              <p className="mt-4 font-normal leading-relaxed text-slate-600">
                Typography, spacing, and contrast are tuned for real-world reading—on
                tired eyes and small screens. The interface avoids dense clinical walls
                of text in favor of short, scannable guidance.
              </p>
              <p className="mt-4 font-normal leading-relaxed text-slate-600">
                Interactive elements are designed with clear focus states and predictable
                flows, so patients always know where they are in the experience.
              </p>
            </MotionCard>
          </FadeIn>

          <FadeIn delay={0.12}>
            <MotionCard className="h-full p-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Clarity & low-stress design
              </h3>
              <p className="mt-4 font-normal leading-relaxed text-slate-600">
                CareBridge uses calm pacing, generous whitespace, and gentle color to
                reduce anxiety. The goal is orientation: patients should feel informed,
                not overwhelmed.
              </p>
              <p className="mt-4 font-normal leading-relaxed text-slate-600">
                Language is intentionally plain. Where AI assists, explanations stay
                short and human—so trust comes from understanding, not hype.
              </p>
            </MotionCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
