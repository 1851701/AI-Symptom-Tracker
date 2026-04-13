import { About } from "@/components/landing/About";
import { AISection } from "@/components/landing/AISection";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Principles } from "@/components/landing/Principles";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { TrustBar } from "@/components/landing/TrustBar";
import { BackgroundParallax } from "@/components/layout/BackgroundParallax";

export default function Home() {
  return (
    <>
      <BackgroundParallax />
      <SiteHeader />
      <main className="relative">
        <Hero />
        <TrustBar />
        <About />
        <Features />
        <HowItWorks />
        <ProductPreview />
        <AISection />
        <Principles />
        <FinalCTA />
      </main>
    </>
  );
}
