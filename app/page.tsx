
import { MainHero } from "@/components/MainHero";
import { TimelineSection } from "@/components/TimelineSection";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <MainHero />
        <TimelineSection />
    </div>
    </div>
  );
}
