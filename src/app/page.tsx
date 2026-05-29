import { BuilderMindsetSection } from "@/components/builder-mindset/builder-mindset-section";
import { HeroSection } from "@/components/hero/hero-section";
import { IcpSection } from "@/components/icp/icp-section";
import { HeroDottedBackdrop } from "@/components/layout/hero-dotted-backdrop";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-[var(--section-spacing)] pb-[var(--section-spacing)]">
      <section className="relative isolate -mt-[var(--site-header-offset)] overflow-x-clip pt-[var(--site-header-offset)] pb-32 md:pb-40 lg:pb-48">
  <HeroDottedBackdrop />

  <div className="relative z-10">
    <HeroSection />
  </div>
</section>

      <BuilderMindsetSection />
      <IcpSection />
    </main>
  );
}
