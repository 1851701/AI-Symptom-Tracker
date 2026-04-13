import { IconCompass, IconEye, IconShield, IconSpark } from "@/components/icons";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionCard } from "@/components/ui/MotionCard";

const items = [
  {
    title: "Clear next steps",
    description: "Guidance you can act on",
    Icon: IconCompass,
  },
  {
    title: "Designed for accessibility",
    description: "Readable, low-friction UI",
    Icon: IconEye,
  },
  {
    title: "AI assisted guidance",
    description: "Support without the noise",
    Icon: IconSpark,
  },
  {
    title: "Privacy minded",
    description: "Built with discretion",
    Icon: IconShield,
  },
] as const;

export function TrustBar() {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, description, Icon }, i) => (
            <FadeIn key={title} delay={i * 0.06}>
              <MotionCard className="h-full p-5 transition hover:border-sky-200/80">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-500/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm font-normal leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              </MotionCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
