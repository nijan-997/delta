import { HeroSection } from "@/components/hero/hero-section";
import { IcpSection } from "@/components/icp/icp-section";
import { PainPointsSection } from "@/components/pain-points/pain-points-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="relative bg-background">
      <div className="hero-dotted-canvas w-full overflow-x-clip">
        <SiteHeader />
        <HeroSection />
      </div>

      <div
        aria-hidden
        className="h-[var(--section-gap)] w-full shrink-0 bg-background"
      />
      <PainPointsSection />
      <IcpSection />
    </main>
  );
}
