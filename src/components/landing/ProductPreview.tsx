import { FadeIn } from "@/components/motion/FadeIn";
import { DashboardMockup } from "@/components/landing/DashboardMockup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionCard } from "@/components/ui/MotionCard";

function MockFrame({
  className,
  children,
  label,
}: {
  className?: string;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_40px_-24px_rgba(15,23,42,0.12)] ${className ?? ""}`}
    >
      {label ? (
        <div className="border-b border-slate-100 bg-slate-50/90 px-3 py-2 text-[10px] font-medium text-slate-500">
          {label}
        </div>
      ) : null}
      {children}
    </div>
  );
}

export function ProductPreview() {
  return (
    <section id="prototype" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Product"
              title="A calmer way to navigate care"
              description="Designed to reduce confusion and make health information easier to understand—with a layout that feels steady, not busy."
            />
            <ul className="mt-8 space-y-4 font-normal leading-relaxed text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>
                  Unified timelines for symptoms, labs, and medications—so nothing feels scattered.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>
                  Human-centered language that keeps guidance clear, even on hard days.
                </span>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="space-y-5">
              <DashboardMockup />

              <div className="grid grid-cols-2 gap-4">
                <MockFrame label="Labs">
                  <div className="space-y-2 p-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Lipid panel</span>
                      <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                        Reviewed
                      </span>
                    </div>
                    <div className="h-10 rounded-lg bg-gradient-to-r from-sky-100/90 to-transparent" />
                  </div>
                </MockFrame>
                <MotionCard className="overflow-hidden p-0 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.12)]">
                  <div className="border-b border-slate-100 bg-slate-50/90 px-3 py-2 text-[10px] font-medium text-slate-500">
                    Messages
                  </div>
                  <div className="space-y-2 p-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-800">
                        C
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold text-slate-900">
                          Care team
                        </p>
                        <p className="text-[10px] text-slate-500">New update</p>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100" />
                    <div className="h-2 w-[80%] rounded-full bg-slate-100" />
                  </div>
                </MotionCard>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
