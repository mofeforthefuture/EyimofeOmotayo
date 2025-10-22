
import  Footer from "@/components/ui/animated-footer";
import { MainHero } from "@/components/MainHero";
import { TimelineSection } from "@/components/TimelineSection";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <MainHero />
        <SplashCursor />
        <TimelineSection />
      <Footer   leftLinks={[
            { href: "/terms", label: "Terms & policies" },
            { href: "/privacy-policy", label: "Privacy policy" },
          ]}
          rightLinks={[
            { href: "/careers", label: "Careers" },
            { href: "/about", label: "About" },
            { href: "/help-center", label: "Help Center" },
            { href: "https://x.com/taher_max_", label: "Twitter" },
            { href: "https://www.instagram.com/taher_max_", label: "Instagram" },
            { href: "https://github.com/tahermaxse", label: "GitHub" },
          ]}
          copyrightText="Eyimofe Omotayo 2025. All Rights Reserved"
          barCount={23}/>
    </div>
    </div>
  );
}
