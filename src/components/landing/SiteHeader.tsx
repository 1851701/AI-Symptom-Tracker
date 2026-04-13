import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border border-white/70 bg-white/70 px-4 shadow-[0_12px_40px_-18px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:h-[3.25rem] sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-600 text-sm font-bold text-white shadow-md shadow-sky-500/25">
            C
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-slate-900">
            CareBridge
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#about" className="transition hover:text-sky-700">
            About
          </a>
          <a href="#features" className="transition hover:text-sky-700">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-sky-700">
            How it works
          </a>
          <a href="#ai" className="transition hover:text-sky-700">
            AI
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button href="#contact" variant="secondary" className="hidden px-4 py-2 text-sm sm:inline-flex">
            Contact
          </Button>
          <Button href="#prototype" variant="primary" className="px-4 py-2 text-sm">
            View Prototype
          </Button>
        </div>
      </div>
    </header>
  );
}
