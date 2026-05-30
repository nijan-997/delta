import { BuilderMindsetSection } from "@/components/builder-mindset/builder-mindset-section";
import { HeroSection } from "@/components/hero/hero-section";
import { IcpSection } from "@/components/icp/icp-section";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-[var(--section-spacing)] bg-background pb-[var(--section-spacing)]">
      <section className="relative overflow-x-clip pt-5 sm:pt-6">
        <HeroSection />
      </section>
      <BuilderMindsetSection />
      <IcpSection />
    </main>
  );
}
