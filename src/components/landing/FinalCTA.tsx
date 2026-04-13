import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-24 pb-24 pt-8 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-100/80 bg-gradient-to-br from-sky-500 via-sky-600 to-slate-900 px-8 py-14 text-center shadow-[0_32px_80px_-28px_rgba(14,165,233,0.45)] sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"
            />

            <h2 className="relative text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A smarter, calmer patient experience
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-pretty text-lg font-normal leading-relaxed text-sky-50">
              Built to make care feel more connected, understandable, and human.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button
                href="#prototype"
                variant="secondary"
                className="border-0 bg-white text-slate-900 shadow-lg shadow-slate-900/15 hover:bg-sky-50"
              >
                View Prototype
              </Button>
              <Button
                href="mailto:hello@carebridge.com"
                variant="secondary"
                className="border-white/45 bg-white/12 text-white backdrop-blur-md hover:bg-white/20"
              >
                Contact
              </Button>
            </div>
          </div>
        </FadeIn>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-10 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} CareBridge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#features" className="transition hover:text-sky-700">
              Features
            </a>
            <a href="#ai" className="transition hover:text-sky-700">
              AI
            </a>
            <a href="mailto:hello@carebridge.com" className="transition hover:text-sky-700">
              Privacy
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
