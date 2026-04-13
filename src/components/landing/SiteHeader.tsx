"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex h-20 w-full items-center justify-between border-b border-white/10 bg-[#2D5A27] px-8 shadow-sm transition-all lg:px-12">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-[17px] font-black uppercase tracking-widest text-white">
            AI-Tracker
          </span>
        </Link>
        
        <nav className="hidden items-center gap-12 text-[11px] font-black uppercase tracking-[0.25em] text-white/90 md:flex">
          <a href="#about" className="transition hover:text-white hover:underline-offset-8 hover:underline">
            About
          </a>
          <a href="#features" className="transition hover:text-white hover:underline-offset-8 hover:underline">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-white hover:underline-offset-8 hover:underline">
            Process
          </a>
          <a href="#ai" className="transition hover:text-white hover:underline-offset-8 hover:underline">
            AI Intelligence
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button href="#contact" variant="minimal" className="hidden border border-white/30 bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-[#2D5A27] sm:inline-flex transition-all duration-300">
            Contact
          </Button>
          <Button href="#prototype" variant="minimal" className="bg-white border border-white px-8 py-3 text-xs font-black uppercase tracking-widest text-[#2D5A27] shadow-xl hover:bg-transparent hover:text-white transition-all duration-300 active:scale-95">
            Launch Now
          </Button>
        </div>
      </div>
    </header>
  );
}
