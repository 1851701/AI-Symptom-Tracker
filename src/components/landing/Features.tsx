import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerItem, StaggerReveal } from "@/components/motion/StaggerReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard } from "@/components/ui/MotionCard";
import { cn } from "@/lib/cn";

const features: {
  title: string;
  body: string;
  highlight?: boolean;
}[] = [
  {
    title: "Symptom tracking",
    body: "Structured check-ins and trends so patterns are easy to see.",
  },
  {
    title: "Care guidance",
    body: "AI-assisted next steps that stay clear and responsible.",
    highlight: true,
  },
  {
    title: "Patient records",
    body: "Appointments, labs, and medications in one calm timeline.",
  },
  {
    title: "Provider communication",
    body: "Fewer handoffs, clearer updates for patients and teams.",
  },
  {
    title: "Health insights",
    body: "Plain-language summaries that reduce guesswork.",
  },
  {
    title: "Privacy & security",
    body: "Built with discretion and modern safeguards in mind.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="For your health"
            title="Everything in one focused platform"
            description="CareBridge brings tracking, guidance, and communication together—like a modern care department, designed around the patient."
          />
        </FadeIn>

        <StaggerReveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <MotionCard
                className={cn(
                  "flex h-full flex-col p-7",
                  f.highlight
                    ? "border-sky-500/40 bg-sky-600 text-white shadow-lg shadow-sky-500/20 hover:border-sky-400/50"
                    : "hover:border-sky-200/90",
                )}
              >
                <div
                  className={cn(
                    "mb-5 h-1.5 w-11 rounded-full",
                    f.highlight ? "bg-white/90" : "bg-gradient-to-r from-sky-400 to-sky-600",
                  )}
                />
                <h3
                  className={cn(
                    "text-lg font-semibold tracking-tight",
                    f.highlight ? "text-white" : "text-slate-900",
                  )}
                >
                  {f.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm font-normal leading-relaxed",
                    f.highlight ? "text-white/85" : "text-slate-600",
                  )}
                >
                  {f.body}
                </p>
              </MotionCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
