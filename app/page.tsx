import Footer from "@/components/ui/animated-footer";
import { MainHero } from "@/components/MainHero";
import { ContactSection } from "@/components/ContactSection";
import { TimelineSection } from "@/components/TimelineSection";
import { SplashCursor } from "@/components/ui/splash-cursor";
import BackToTopButton from "@/components/ui/back-to-top-button";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <MainHero />
        <SplashCursor />
        <ContactSection />
        <TimelineSection />
        <Footer
          leftLinks={[
            { href: "/terms", label: "Terms & policies" },
            { href: "/privacy-policy", label: "Privacy policy" },
          ]}
          rightLinks={[
            {
              href: "https://www.instagram.com/the_eyimofe",
              label: "Instagram",
            },
            { href: "https://github.com/mofeforthefuture", label: "GitHub" },
          ]}
          copyrightText="Eyimofe Omotayo 2025. All Rights Reserved"
          barCount={23}
        />
      </div>
      <BackToTopButton />
    </div>
  );
}
