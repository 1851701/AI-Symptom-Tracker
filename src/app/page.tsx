import { About } from "@/components/landing/About";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { Reviews } from "@/components/landing/Reviews";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { BackgroundParallax } from "@/components/layout/BackgroundParallax";

export default function Home() {
  return (
    <>
      <BackgroundParallax />
      <SiteHeader />
      <main className="relative">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <ProductPreview />
        <Reviews />
        <FinalCTA />
      </main>
    </>
  );
}
