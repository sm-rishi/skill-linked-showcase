import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { SkillsMap } from "../components/SkillsMap";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { AboutBlock } from "../components/AboutBlock";
import { CertificationsSection } from "../components/CertificationsSection";
import { ParticleBackground } from "../components/ParticleBackground";
import { ALL_SKILLS } from "../components/ExperienceTimeline";
import { trackPageView, trackCustomEvent } from "../utils/mixpanel";

const px = "px-6 sm:px-10 lg:px-20 xl:px-28";
const section = `w-full py-14 sm:py-16 lg:py-20 ${px}`;

const Index = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | undefined>(ALL_SKILLS[0]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    trackPageView('Portfolio Home');
    trackCustomEvent('Portfolio Loaded', {
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden" style={{ backgroundColor: '#080c14' }}>

      {/* ── Layer 0: aurora blobs — fixed, scroll-reactive parallax ── */}
      <div aria-hidden="true" className="pointer-events-none select-none">
        {/* Blob 1 — cyan, top-left, drifts + scrolls up fast */}
        <div className="aurora-wrap" style={{ top: '-200px', left: '-150px', transform: `translateY(${scrollY * -0.28}px)` }}>
          <div className="aurora-inner aurora-inner-1" />
        </div>
        {/* Blob 2 — indigo, right, scrolls down slowly */}
        <div className="aurora-wrap" style={{ top: '30%', right: '-100px', transform: `translateY(${scrollY * 0.14}px)` }}>
          <div className="aurora-inner aurora-inner-2" />
        </div>
        {/* Blob 3 — purple, bottom-left, scrolls up slowly */}
        <div className="aurora-wrap" style={{ bottom: '5%', left: '15%', transform: `translateY(${scrollY * -0.1}px)` }}>
          <div className="aurora-inner aurora-inner-3" />
        </div>
        {/* Blob 4 — blue, center-right, scrolls down */}
        <div className="aurora-wrap" style={{ top: '55%', right: '25%', transform: `translateY(${scrollY * 0.19}px)` }}>
          <div className="aurora-inner aurora-inner-4" />
        </div>
      </div>

      {/* ── Layer 1: grid ── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Layer 2: particle field ── */}
      <ParticleBackground scrollY={scrollY} />

      <Header />

      <main className="w-full flex-1 flex flex-col" style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero */}
        <section className="w-full">
          <HeroSection />
        </section>

        <section className={section}>
          <AboutBlock />
        </section>

        <section className={section}>
          <SkillsMap selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        </section>

        <section className={section}>
          <ExperienceTimeline selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        </section>

        <section className={section}>
          <CaseStudiesSection />
        </section>

        <section className={section}>
          <ProjectShowcase />
        </section>

        <section className={section}>
          <CertificationsSection />
        </section>
      </main>

      <footer className="text-center py-8 text-xs text-white/25 relative" style={{ zIndex: 10 }}>
        © {new Date().getFullYear()} Saptarshi — Made with ❤️ for Product Careers
      </footer>
    </div>
  );
};

export default Index;
