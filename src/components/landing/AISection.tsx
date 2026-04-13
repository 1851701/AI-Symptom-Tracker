import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard } from "@/components/ui/MotionCard";

export function AISection() {
  return (
    <section id="ai" className="scroll-mt-24 bg-white/50 py-24 backdrop-blur-sm sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Intelligence"
              title="AI support, grounded in trust"
              description="CareBridge uses AI assisted guidance to help users better understand symptoms and health information, while keeping the experience clear, responsible, and easy to follow."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <MotionCard className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/50 to-slate-50 p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-blue-100/50 blur-3xl"
              />

              <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                Guided insight
              </p>
              <p className="relative mt-4 text-lg font-medium leading-relaxed text-slate-800">
                “Based on your recent entries, your symptoms look stable. Here are
                three calm next steps—and when to reach out sooner.”
              </p>

              <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
                {["Monitor", "Context", "Action"].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-sky-100/90 bg-white/80 px-3 py-3 text-center text-xs font-semibold text-sky-800 shadow-sm backdrop-blur-sm"
                  >
                    {label}
                  </div>
                ))}
              </div>

              <p className="relative mt-6 text-xs font-normal leading-relaxed text-slate-500">
                AI outputs are framed for clarity—not diagnosis—and always paired
                with transparent, human-readable reasoning cues.
              </p>
            </MotionCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
